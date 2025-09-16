// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigValueFilesConfigVariablesValue } from "./ConfigValueFilesConfigVariablesValue";


export class ConfigValueFilesConfig extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * $dictContent
   */
  content?: string;
  /**
   * @remarks
   * The variables.
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
   * The operation type. Valid values: UPDATE and DELETE. Default value: UPDATE.
   * 
   * @example
   * UPDATE
   */
  operateType?: string;
  /**
   * @remarks
   * The path of the parent directory.
   * 
   * @example
   * /
   */
  parentFullPath?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * /intervene_dict/中文-通用分析器.dict
   */
  fileName?: string;
  /**
   * @remarks
   * The configuration to be modified.
   */
  config?: ConfigValueFilesConfig;
  /**
   * @remarks
   * The directory name.
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
   * The description of the offline configuration.
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * The files to be modified.
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

