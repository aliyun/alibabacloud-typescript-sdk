// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PythonArtifact extends $dara.Model {
  /**
   * @remarks
   * The URL of the additional dependency file.
   */
  additionalDependencies?: string[];
  /**
   * @remarks
   * The Python archive file on which the deployment depends.
   */
  additionalPythonArchives?: string[];
  /**
   * @remarks
   * The Python library file on which the deployment depends.
   */
  additionalPythonLibraries?: string[];
  /**
   * @remarks
   * The startup module for the Python deployment.
   * 
   * @example
   * test.py
   */
  entryModule?: string;
  /**
   * @remarks
   * The startup parameter.
   * 
   * @example
   * start from main
   */
  mainArgs?: string;
  /**
   * @remarks
   * The full URL for the Python deployment.
   * 
   * @example
   * https://oss/bucket/test.py
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

