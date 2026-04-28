// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the domain.
   * 
   * @example
   * cloud drive dev
   */
  description?: string;
  /**
   * @remarks
   * The name of the domain.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud drive
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
   * This parameter is required when the init_drive_enable is set to true. The size of the default drive. Unit: bytes. The default is 0, meaning the created drive size is 0, and files cannot be uploaded. If you need to initialize the drive, set this value. A value of -1 indicates that the size is unlimited.
   * 
   * @example
   * 1073741824
   */
  initDriveSize?: number;
  /**
   * @remarks
   * The ID of the parent domain. If you want to create a child domain, specify parent_domain_id. In most cases, you do not need to create a child domain. If you want to perform secondary operations based on Drive and Photo Service, contact the customer service.
   * 
   * @example
   * bj1
   */
  parentDomainId?: string;
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
   * Specifies the storage redundancy type. Valid values:
   * 
   * *   LRS: locally redundant storage
   * *   ZRS: zone-redundant storage
   * 
   * @example
   * LRS
   */
  storeRedundancyType?: string;
  /**
   * @remarks
   * The largest number of users that can be created in the domain. A value of 0 specifies that the number is unlimited.
   * 
   * @example
   * 50
   */
  userCountQuota?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      domainName: 'domain_name',
      initDriveEnable: 'init_drive_enable',
      initDriveSize: 'init_drive_size',
      parentDomainId: 'parent_domain_id',
      sizeQuota: 'size_quota',
      storeRedundancyType: 'store_redundancy_type',
      userCountQuota: 'user_count_quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domainName: 'string',
      initDriveEnable: 'boolean',
      initDriveSize: 'number',
      parentDomainId: 'string',
      sizeQuota: 'number',
      storeRedundancyType: 'string',
      userCountQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

