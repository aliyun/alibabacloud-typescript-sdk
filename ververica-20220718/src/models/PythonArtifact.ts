// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PythonArtifact extends $dara.Model {
  additionalDependencies?: string[];
  additionalPythonArchives?: string[];
  additionalPythonLibraries?: string[];
  entryModule?: string;
  mainArgs?: string;
  /**
   * @example
   * https://oss//bucket//test.py
   */
  pythonArtifactUri?: string;
  static names(): { [key: string]: string } {
    return {
      additionalDependencies: 'additionalDependencies',
      additionalPythonArchives: 'additionalPythonArchives',
      additionalPythonLibraries: 'additionalPythonLibraries',
      entryModule: 'entryModule',
      mainArgs: 'mainArgs',
      pythonArtifactUri: 'pythonArtifactUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalDependencies: { 'type': 'array', 'itemType': 'string' },
      additionalPythonArchives: { 'type': 'array', 'itemType': 'string' },
      additionalPythonLibraries: { 'type': 'array', 'itemType': 'string' },
      entryModule: 'string',
      mainArgs: 'string',
      pythonArtifactUri: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalDependencies)) {
      $dara.Model.validateArray(this.additionalDependencies);
    }
    if(Array.isArray(this.additionalPythonArchives)) {
      $dara.Model.validateArray(this.additionalPythonArchives);
    }
    if(Array.isArray(this.additionalPythonLibraries)) {
      $dara.Model.validateArray(this.additionalPythonLibraries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

