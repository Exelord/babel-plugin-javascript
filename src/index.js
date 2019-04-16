function transformSpecifiers(path, prefix) {
  path.get('specifiers').forEach((specifier) => {
    let node = specifier.node;
    let localName = node.local.name;
    let importName = node.imported ? node.imported.name : localName;
    let isImportDefault = specifier.isImportDefaultSpecifier();
    let module = isImportDefault ? prefix : `${prefix}.${importName}`;

    path.scope.rename(localName, module);
  });
}

export default function() {
  return {
    visitor: {
      ImportDeclaration(path) {
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
