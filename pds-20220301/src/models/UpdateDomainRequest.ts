// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppAccessStrategy } from "./AppAccessStrategy";


export class UpdateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the domain.
   */
  description?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bj1
   */
  domainId?: string;
  /**
   * @remarks
   * The name of the domain.
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to enable the default drive feature. A value of true specifies that all users are assigned a drive by default on the first logon. Default value: false.
   * 
   * @example
   * true
   */
  initDriveEnable?: boolean;
  /**
   * @remarks
   * The size of the default drive. Unit: bytes. You must specify init_drive_size if you set init_drive_enable to true. Default value: 0. A value of 0 specifies that the size of the default drive is 0 bytes and you cannot upload files to the drive. To initialize the default drive, set init_drive_size to 0. A value of -1 specifies that the size is unlimited.
   * 
   * @example
   * 1073741824
   */
  initDriveSize?: number;
  /**
   * @remarks
   * The access policy of the application.
   */
  publishedAppAccessStrategy?: AppAccessStrategy;
  /**
   * @remarks
   * The total storage quota for all drives in the domain. A value of 0 specifies that the quota is unlimited.
   * 
   * @example
   * 1099511627776
   */
  sizeQuota?: number;
  /**
   * @remarks
   * The maximum number of users that can be created in the domain.
   * 
   * @example
   * 50
   */
  userCountQuota?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      domainId: 'domain_id',
      domainName: 'domain_name',
      initDriveEnable: 'init_drive_enable',
      initDriveSize: 'init_drive_size',
      publishedAppAccessStrategy: 'published_app_access_strategy',
      sizeQuota: 'size_quota',
      userCountQuota: 'user_count_quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domainId: 'string',
      domainName: 'string',
      initDriveEnable: 'boolean',
      initDriveSize: 'number',
      publishedAppAccessStrategy: AppAccessStrategy,
      sizeQuota: 'number',
      userCountQuota: 'number',
    };
  }

  validate() {
    if(this.publishedAppAccessStrategy && typeof (this.publishedAppAccessStrategy as any).validate === 'function') {
      (this.publishedAppAccessStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

