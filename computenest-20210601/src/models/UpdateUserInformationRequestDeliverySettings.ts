// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserInformationRequestDeliverySettings extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable screencast delivery to OSS. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  actiontrailDeliveryToOssEnabled?: boolean;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * "mybucket"
   */
  ossBucketName?: string;
  /**
   * @remarks
   * Specifies whether to enable screencast delivery to Object Storage Service (OSS). Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  ossEnabled?: boolean;
  /**
   * @remarks
   * The number of days for which the screencasts are saved.
   * 
   * @example
   * 7
   */
  ossExpirationDays?: number;
  /**
   * @remarks
   * The OSS path.
   * 
   * @example
   * "path1/path2/"
   */
  ossPath?: string;
  static names(): { [key: string]: string } {
    return {
      actiontrailDeliveryToOssEnabled: 'ActiontrailDeliveryToOssEnabled',
      ossBucketName: 'OssBucketName',
      ossEnabled: 'OssEnabled',
      ossExpirationDays: 'OssExpirationDays',
      ossPath: 'OssPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actiontrailDeliveryToOssEnabled: 'boolean',
      ossBucketName: 'string',
      ossEnabled: 'boolean',
      ossExpirationDays: 'number',
      ossPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

