// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppAccessStrategy } from "./AppAccessStrategy";


export class BaseDomainResponse extends $dara.Model {
  createdAt?: string;
  description?: string;
  domainId?: string;
  domainName?: string;
  initDriveEnable?: boolean;
  initDriveSize?: number;
  parentDomainId?: string;
  publishedAppAccessStrategy?: AppAccessStrategy;
  shareLinkEnabled?: boolean;
  sizeQuota?: number;
  sizeQuotaUsed?: number;
  status?: number;
  updatedAt?: string;
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      description: 'description',
      domainId: 'domain_id',
      domainName: 'domain_name',
      initDriveEnable: 'init_drive_enable',
      initDriveSize: 'init_drive_size',
      parentDomainId: 'parent_domain_id',
      publishedAppAccessStrategy: 'published_app_access_strategy',
      shareLinkEnabled: 'share_link_enabled',
      sizeQuota: 'size_quota',
      sizeQuotaUsed: 'size_quota_used',
      status: 'status',
      updatedAt: 'updated_at',
      usedSize: 'used_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      domainId: 'string',
      domainName: 'string',
      initDriveEnable: 'boolean',
      initDriveSize: 'number',
      parentDomainId: 'string',
      publishedAppAccessStrategy: AppAccessStrategy,
      shareLinkEnabled: 'boolean',
      sizeQuota: 'number',
      sizeQuotaUsed: 'number',
      status: 'number',
      updatedAt: 'string',
      usedSize: 'number',
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

