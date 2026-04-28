// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppAccessStrategy } from "./AppAccessStrategy";


export class Domain extends $dara.Model {
  /**
   * @remarks
   * The time when the domain was created. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The method used to calculate the hash value of the data.
   * 
   * @example
   * sha1
   */
  dataHashName?: string;
  /**
   * @remarks
   * The description of the domain.
   * 
   * @example
   * my domain
   */
  description?: string;
  /**
   * @remarks
   * domain ID
   * 
   * @example
   * bj2
   */
  domainId?: string;
  /**
   * @remarks
   * The name of the domain.
   * 
   * @example
   * pdsdomain
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to enable the default drive feature. Valid values: true and false. A value of true specifies that all users are assigned a drive by default on the first logon. Default value: false.
   * 
   * @example
   * true
   */
  initDriveEnable?: boolean;
  /**
   * @remarks
   * The size of the default drive. Unit: bytes. This parameter is required if you set init_drive_enable to true. Default value: 0. A value of 0 indicates that the size of the default drive is 0 byte and you cannot upload files to the drive. To initialize the default drive, set init_drive_size to a positive number or -1. A value of -1 indicates that the size is unlimited.
   * 
   * @example
   * 1073741824
   */
  initDriveSize?: number;
  /**
   * @remarks
   * The ID of the parent domain. If the parent domain exists, the current domain is a child domain. Otherwise, the current domain is a common domain.
   * 
   * @example
   * bj1
   */
  parentDomainId?: string;
  /**
   * @remarks
   * The access policy of the application.
   */
  publishedAppAccessStrategy?: AppAccessStrategy;
  /**
   * @remarks
   * Specifies whether to enable sharing.
   */
  sharable?: boolean;
  /**
   * @remarks
   * The total storage quota for all drives in the domain. A value of 0 indicates that the quota is unlimited.
   * 
   * @example
   * 1099511627776
   */
  sizeQuota?: number;
  /**
   * @remarks
   * The used storage quota of all drives in the domain.
   * 
   * @example
   * 1099511627776
   */
  sizeQuotaUsed?: number;
  /**
   * @remarks
   * The status of the domain. 1: The domain runs normally. 2: The domain is being created. 6: The domain has expired.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * LRS
   */
  storeRedundancyType?: string;
  /**
   * @remarks
   * The time when the domain was last modified. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The usage of the logic space. Unit: bytes.
   * 
   * @example
   * 1099511627776
   */
  usedSize?: number;
  /**
   * @remarks
   * The maximum allowed number of users.
   * 
   * @example
   * 50
   */
  userCountQuota?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      dataHashName: 'data_hash_name',
      description: 'description',
      domainId: 'domain_id',
      domainName: 'domain_name',
      initDriveEnable: 'init_drive_enable',
      initDriveSize: 'init_drive_size',
      parentDomainId: 'parent_domain_id',
      publishedAppAccessStrategy: 'published_app_access_strategy',
      sharable: 'sharable',
      sizeQuota: 'size_quota',
      sizeQuotaUsed: 'size_quota_used',
      status: 'status',
      storeRedundancyType: 'store_redundancy_type',
      updatedAt: 'updated_at',
      usedSize: 'used_size',
      userCountQuota: 'user_count_quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      dataHashName: 'string',
      description: 'string',
      domainId: 'string',
      domainName: 'string',
      initDriveEnable: 'boolean',
      initDriveSize: 'number',
      parentDomainId: 'string',
      publishedAppAccessStrategy: AppAccessStrategy,
      sharable: 'boolean',
      sizeQuota: 'number',
      sizeQuotaUsed: 'number',
      status: 'number',
      storeRedundancyType: 'string',
      updatedAt: 'string',
      usedSize: 'number',
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

