// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportImageInfoResponseBodyImagesImage extends $dara.Model {
  /**
   * @remarks
   * The architecture of the image. Example: **x86_64**.
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2017-12-08T12:10:03Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The URL of the exported image.
   * 
   * @example
   * https://user_defined_bucket.oss-cn-beijing.aliyuncs.com/m-xxxxxxxxx1.qcow2
   */
  exportedImageURL?: string;
  /**
   * @remarks
   * The export status of the image. Valid values:
   * 
   * *   Exporting
   * *   Exported
   * *   ExportError
   * *   Unexported
   * 
   * @example
   * Exported
   */
  imageExportStatus?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-xxxxxxxxx1
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * m-xxxxxxxxx1
   */
  imageName?: string;
  /**
   * @remarks
   * The source of the image. Valid values:
   * 
   * *   system: public image
   * *   self: custom image
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The OS.
   * 
   * @example
   * centos
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      creationTime: 'CreationTime',
      exportedImageURL: 'ExportedImageURL',
      imageExportStatus: 'ImageExportStatus',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      creationTime: 'string',
      exportedImageURL: 'string',
      imageExportStatus: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      platform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

