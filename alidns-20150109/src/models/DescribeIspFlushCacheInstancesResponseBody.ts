// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstancesQuotaInfo extends $dara.Model {
  instanceQuota?: number;
  instanceQuotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      instanceQuota: 'InstanceQuota',
      instanceQuotaUsed: 'InstanceQuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceQuota: 'number',
      instanceQuotaUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstances extends $dara.Model {
  expireTime?: string;
  expireTimestamp?: number;
  instanceId?: string;
  instanceName?: string;
  isp?: string;
  quotaInfo?: DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstancesQuotaInfo;
  status?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      expireTimestamp: 'ExpireTimestamp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isp: 'Isp',
      quotaInfo: 'QuotaInfo',
      status: 'Status',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      expireTimestamp: 'number',
      instanceId: 'string',
      instanceName: 'string',
      isp: 'string',
      quotaInfo: DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstancesQuotaInfo,
      status: 'string',
      versionCode: 'string',
    };
  }

  validate() {
    if(this.quotaInfo && typeof (this.quotaInfo as any).validate === 'function') {
      (this.quotaInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheInstancesResponseBody extends $dara.Model {
  ispFlushCacheInstances?: DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstances[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      ispFlushCacheInstances: 'IspFlushCacheInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispFlushCacheInstances: { 'type': 'array', 'itemType': DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ispFlushCacheInstances)) {
      $dara.Model.validateArray(this.ispFlushCacheInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

