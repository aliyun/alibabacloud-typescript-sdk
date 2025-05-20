// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppAccessStrategy } from "./AppAccessStrategy";


export class Domain extends $dara.Model {
  createdAt?: string;
  dataHashName?: string;
  description?: string;
  domainId?: string;
  domainName?: string;
  initDriveEnable?: boolean;
  initDriveSize?: number;
  parentDomainId?: string;
  publishedAppAccessStrategy?: AppAccessStrategy;
  sharable?: boolean;
  sizeQuota?: number;
  sizeQuotaUsed?: number;
  status?: number;
  /**
   * @example
   * LRS
   */
  storeRedundancyType?: string;
  updatedAt?: string;
  usedSize?: number;
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

