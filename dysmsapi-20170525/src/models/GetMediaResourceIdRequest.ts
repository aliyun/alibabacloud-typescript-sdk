// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaResourceIdRequest extends $dara.Model {
  /**
   * @remarks
   * The extended field.
   * 
   * > Required when the resource type is **image**.
   * 
   * @example
   * {\\"img_rate\\":\\"oneToOne\\"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  fileSize?: number;
  /**
   * @remarks
   * The description of the uploaded resource.
   * 
   * @example
   * 图片信息
   */
  memo?: string;
  /**
   * @remarks
   * The address of the resource to retrieve.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://alicom-fc-media/1947741454322274/alicom-fc-media/pic/202205191526575398603697152.png
   */
  ossKey?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * - **1**: Text
   * - **2**: Image. Small images must not exceed 100 KB. Large images must not exceed 2 MB. Images must be clear. Supported formats: JPG, JPEG, PNG.
   * - **3**: Audio
   * - **4**: Video. Supported format: MP4.
   * > 
   * > - If the resource type is image, **img_rate** is required.
   * > - 1:1 ratio: oneToOne
   * > - 16:9 ratio: sixteenToNine
   * > - 3:1 ratio: threeToOne
   * > - 48:65 ratio: fortyEightToSixtyFiv.
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

