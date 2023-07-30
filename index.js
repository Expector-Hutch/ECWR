import * as monaco from 'monaco-editor';

monaco.editor.setTheme('vs-dark');

self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    return './editor.worker.bundle.js';
  }
};

monaco.editor.create(document.getElementById('code'), {
  language: 'cpp',
  automaticLayout: true,
  rulers: [60]
});
monaco.editor.create(document.getElementById('input'), {
  automaticLayout: true,
  minimap: {
    enabled: false
  }
});
monaco.editor.create(document.getElementById('output'), {
  automaticLayout: true,
  lineNumbers: "off",
  readOnly: true,
  minimap: {
    enabled: false
  }
});