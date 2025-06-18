// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CacheInfo } from "./CacheInfo";
import { UserVpc } from "./UserVpc";


export class CacheService extends $dara.Model {
  cacheInfos?: CacheInfo[];
  cacheServiceId?: string;
  createdBy?: string;
  gmtCreated?: string;
  quotaId?: string;
  status?: string;
  supportedClientQuotaIds?: string[];
  tenantId?: string;
  userId?: string;
  userVpc?: UserVpc;
  static names(): { [key: string]: string } {
    return {
      cacheInfos: 'CacheInfos',
      cacheServiceId: 'CacheServiceId',
      createdBy: 'CreatedBy',
      gmtCreated: 'GmtCreated',
      quotaId: 'QuotaId',
      status: 'Status',
      supportedClientQuotaIds: 'SupportedClientQuotaIds',
      tenantId: 'TenantId',
      userId: 'UserId',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheInfos: { 'type': 'array', 'itemType': CacheInfo },
      cacheServiceId: 'string',
      createdBy: 'string',
      gmtCreated: 'string',
      quotaId: 'string',
      status: 'string',
      supportedClientQuotaIds: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
      userId: 'string',
      userVpc: UserVpc,
    };
  }

  validate() {
    if(Array.isArray(this.cacheInfos)) {
      $dara.Model.validateArray(this.cacheInfos);
    }
    if(Array.isArray(this.supportedClientQuotaIds)) {
      $dara.Model.validateArray(this.supportedClientQuotaIds);
    }
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

