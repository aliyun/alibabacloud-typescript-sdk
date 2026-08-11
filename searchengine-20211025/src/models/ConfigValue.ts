// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigValueFilesConfigVariablesValue } from "./ConfigValueFilesConfigVariablesValue";


export class ConfigValueFilesConfig extends $dara.Model {
  /**
   * @remarks
   * File content for dictionary configuration
   * 
   * @example
   * $dictContent
   */
  content?: string;
  /**
   * @remarks
   * Variable
   */
  variables?: { [key: string]: ConfigValueFilesConfigVariablesValue };
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': ConfigValueFilesConfigVariablesValue },
    };
  }

  validate() {
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigValueFiles extends $dara.Model {
  /**
   * @remarks
   * Operation type. Valid values: UPDATE (update) and DELETE (delete). Default value: UPDATE.
   * 
   * @example
   * UPDATE
   */
  operateType?: string;
  /**
   * @remarks
   * The path of the parent directory
   * 
   * @example
   * /
   */
  parentFullPath?: string;
  /**
   * @remarks
   * File name
   * 
   * @example
   * /intervene_dict/analyzer.dict
   */
  fileName?: string;
  /**
   * @remarks
   * The configuration for this update
   */
  config?: ConfigValueFilesConfig;
  /**
   * @remarks
   * Directory name
   * 
   * @example
   * /test
   */
  dirName?: string;
  static names(): { [key: string]: string } {
    return {
      operateType: 'operateType',
      parentFullPath: 'parentFullPath',
      fileName: 'fileName',
      config: 'config',
      dirName: 'dirName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateType: 'string',
      parentFullPath: 'string',
      fileName: 'string',
      config: ConfigValueFilesConfig,
      dirName: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigValue extends $dara.Model {
  /**
   * @remarks
   * Remarks
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * List of modified files
   */
  files?: ConfigValueFiles[];
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      files: 'files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      files: { 'type': 'array', 'itemType': ConfigValueFiles },
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

