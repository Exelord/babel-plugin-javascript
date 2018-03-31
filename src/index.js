function transformSpecifiers(path, prefix) {
  path.get('specifiers').forEach((specifier) => {
    let name = specifier.node.local.name;
    let isImportDefault = specifier.isImportDefaultSpecifier();
    let module = isImportDefault ? prefix : `${prefix}.${name}`;

    path.scope.rename(name, module);
  });
}

export default function({types: t }) {
  return {
    visitor: {
      ImportDeclaration(path, state) {
        let importPath = path.node.source.value;

        if (importPath.startsWith('javascript')) {
          let parts = importPath.split('/');
          parts[0] = 'self';
          let prefix = parts.join('.');

          transformSpecifiers(path, prefix)
          path.remove();
        }
      }
    }
  };
}
