var envit = function(parent, parents_name) {
  if ((parent != null ? parent.__propertyValues : void 0) != null) {
    Object.keys(parent.__propertyValues).forEach(function(name) {
      var full_name = (parents_name != null ? parents_name : '') + name.toUpperCase();
      if (process.env[full_name] != null) {
        parent[name] = process.env[full_name];
      } else {
        envit(parent[name], full_name + '_');
      }
    });
  }
  
  return parent;
};

module.exports = envit(require('config'));
