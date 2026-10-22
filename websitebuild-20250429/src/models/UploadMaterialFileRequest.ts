// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadMaterialFileRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the application instance.
   * 
   * This parameter is required.
   * 
   * @example
   * WS20250801152639000005
   */
  bizId?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * This parameter is required.
   * 
   * @example
   * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
   */
  directoryId?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * http://docmind-api-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/4a7f_209934244261306272_14fd429b731245a79f291c64acf3ac77
   */
  fileUrl?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * Test file
   */
  name?: string;
  /**
   * @remarks
   * The key of the OSS object.
   * 
   * @example
   * backend/detection/objects/r-0008ujvfksltf5j45n81/task-000hckiuwyau0gwn17vq.jpg
   */
  ossKey?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      directoryId: 'DirectoryId',
      fileUrl: 'FileUrl',
      name: 'Name',
      ossKey: 'OssKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      directoryId: 'string',
      fileUrl: 'string',
      name: 'string',
      ossKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

