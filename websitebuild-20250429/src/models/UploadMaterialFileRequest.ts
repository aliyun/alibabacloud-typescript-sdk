// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadMaterialFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WS20250801152639000005
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
   */
  directoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://docmind-api-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/4a7f_209934244261306272_14fd429b731245a79f291c64acf3ac77
   */
  fileUrl?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      directoryId: 'DirectoryId',
      fileUrl: 'FileUrl',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      directoryId: 'string',
      fileUrl: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

