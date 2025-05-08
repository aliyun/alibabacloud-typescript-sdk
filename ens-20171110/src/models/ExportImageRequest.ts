// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportImageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-5ragaz3s74b7go8ks7jp9****
   */
  imageId?: string;
  /**
   * @remarks
   * The OSS bucket to which you want to export the image.
   * 
   * This parameter is required.
   * 
   * @example
   * whxyl****
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The prefix of the object as which you want to store the image in the OSS bucket. The prefix must be 1 to 30 characters in length and can contain digits and letters.
   */
  OSSPrefix?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  OSSRegionId?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role.
   * 
   * @example
   * AliyunMNSLoggingRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      OSSBucket: 'OSSBucket',
      OSSPrefix: 'OSSPrefix',
      OSSRegionId: 'OSSRegionId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      OSSBucket: 'string',
      OSSPrefix: 'string',
      OSSRegionId: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

