// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigValueFilesConfig } from "./ConfigValueFilesConfig";


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

