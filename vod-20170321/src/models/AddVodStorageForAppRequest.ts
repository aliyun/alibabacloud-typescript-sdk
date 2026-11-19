// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVodStorageForAppRequest extends $dara.Model {
  /**
   * @remarks
   * The list of application IDs. You can obtain the application ID from the AppId response parameter of the [CreateAppInfo](~~CreateAppInfo~~) or [ListAppInfo](~~ListAppInfo~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The address of the OSS bucket. This parameter is required when StorageType is set to user_oss_bucket.
   * 
   * @example
   * example-bucket.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The storage type. Valid values: vod_oss_bucket and user_oss_bucket. Default value: **vod_oss_bucket**.
   * 
   * @example
   * vod_oss_bucket
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      storageLocation: 'StorageLocation',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      storageLocation: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

