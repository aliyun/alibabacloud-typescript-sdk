// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaResourceIdRequest extends $dara.Model {
  /**
   * @remarks
   * The extended fields.
   * 
   * > If you set the ResourceType parameter to **2**, this parameter is required.
   * 
   * @example
   * {\\"img_rate\\":\\"oneToOne\\"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The size of the resource. Unit: bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  fileSize?: number;
  /**
   * @remarks
   * The description of the resource.
   * 
   * @example
   * remark
   */
  memo?: string;
  /**
   * @remarks
   * The address of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://alicom-fc-media/1947741454322274/alicom-fc-media/pic/202205191526575398603697152.png
   */
  ossKey?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * *   **1**: text.
   * *   **2**: image. A small image cannot exceed 100 KB in size, and a large image cannot exceed 2 MB in size. The image must be clear. Supported format: JPG, JPEG, and PNG.
   * *   **3**: audio.
   * *   **4**: video. Supported format: MP4.
   * 
   * > 
   * 
   * *   If you set the ResourceType parameter to 2, the **img_rate** required is required. Valid values:
   * 
   * *   1:1
   * 
   * *   16:9
   * 
   * *   3:1
   * 
   * *   48:65
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resourceType?: number;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'ExtendInfo',
      fileSize: 'FileSize',
      memo: 'Memo',
      ossKey: 'OssKey',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: 'string',
      fileSize: 'number',
      memo: 'string',
      ossKey: 'string',
      resourceType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

