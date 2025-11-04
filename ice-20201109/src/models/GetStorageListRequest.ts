// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageListRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The OSS storage status.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * vod_oss_bucket
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      status: 'Status',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      status: 'string',
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

