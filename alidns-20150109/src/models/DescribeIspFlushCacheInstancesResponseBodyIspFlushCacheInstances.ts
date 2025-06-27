// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstancesQuotaInfo } from "./DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstancesQuotaInfo";


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

