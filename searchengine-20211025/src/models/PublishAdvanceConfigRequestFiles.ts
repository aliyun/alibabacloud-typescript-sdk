// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublishAdvanceConfigRequestFilesConfig } from "./PublishAdvanceConfigRequestFilesConfig";


export class PublishAdvanceConfigRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The information about the advanced configuration.
   */
  config?: PublishAdvanceConfigRequestFilesConfig;
  /**
   * @remarks
   * The directory name.
   * 
   * @example
   * /clusters
   */
  dirName?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * vector_question_schema.json
   */
  fileName?: string;
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
   * The path of the Object Storage Service (OSS) object.
   * 
   * @example
   * oss://opensearch/test.json
   */
  ossPath?: string;
  /**
   * @remarks
   * The path of the parent directory.
   * 
   * @example
   * /
   */
  parentFullPath?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      dirName: 'dirName',
      fileName: 'fileName',
      operateType: 'operateType',
      ossPath: 'ossPath',
      parentFullPath: 'parentFullPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: PublishAdvanceConfigRequestFilesConfig,
      dirName: 'string',
      fileName: 'string',
      operateType: 'string',
      ossPath: 'string',
      parentFullPath: 'string',
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

