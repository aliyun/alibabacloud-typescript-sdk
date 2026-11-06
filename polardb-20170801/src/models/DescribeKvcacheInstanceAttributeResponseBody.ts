// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKVCacheInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * 172.168.0.1
   */
  connectionString?: string;
  /**
   * @remarks
   * The time when the instance was created, in ISO 8601 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The time when the instance expires, in ISO 8601 format. An empty string is returned for pay-as-you-go instances.
   * 
   * @example
   * 2026-12-31T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the instance has expired.
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * The KVCache instance ID.
   * 
   * @example
   * pkv-123456
   */
  KVCacheInstanceId?: string;
  /**
   * @remarks
   * The KVCache instance status.
   * 
   * @example
   * Running
   */
  KVCacheInstanceStatus?: string;
  /**
   * @remarks
   * The storage capacity of the KVCache instance.
   * 
   * @example
   * 100
   */
  KVCacheSpace?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PREPAID
   */
  payType?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 5432
   */
  port?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-123
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-123
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      creationTime: 'CreationTime',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      KVCacheInstanceId: 'KVCacheInstanceId',
      KVCacheInstanceStatus: 'KVCacheInstanceStatus',
      KVCacheSpace: 'KVCacheSpace',
      payType: 'PayType',
      port: 'Port',
      regionId: 'RegionId',
      requestId: 'RequestId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      creationTime: 'string',
      expireTime: 'string',
      expired: 'string',
      KVCacheInstanceId: 'string',
      KVCacheInstanceStatus: 'string',
      KVCacheSpace: 'string',
      payType: 'string',
      port: 'string',
      regionId: 'string',
      requestId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

