// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceIpAddressResponseBodyInstanceListIpAddressConfig extends $dara.Model {
  /**
   * @remarks
   * The basic protection threshold for the asset. Unit: Mbit/s.
   * 
   * @example
   * 5200
   */
  blackholeThreshold?: number;
  /**
   * @remarks
   * The traffic scrubbing threshold for the asset measured in Mbit/s. Unit: Mbit/s.
   * 
   * @example
   * 300
   */
  defenseBpsThreshold?: number;
  /**
   * @remarks
   * The traffic scrubbing threshold for the asset measured in packets per second (PPS). Unit: PPS.
   * 
   * @example
   * 70000
   */
  defensePpsThreshold?: number;
  /**
   * @remarks
   * The burstable protection threshold for the asset. Unit: Mbit/s.
   * 
   * @example
   * 12310
   */
  elasticThreshold?: number;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  instanceIp?: string;
  /**
   * @remarks
   * The DDoS mitigation status of the asset. Valid values:
   * 
   * *   **mitigating**: indicates that traffic scrubbing is in progress.
   * *   **blackholed**: indicates that blackhole filtering is triggered for the asset.
   * *   **normal**: indicates that no DDoS attacks are launched against the asset.
   * 
   * @example
   * normal
   */
  ipStatus?: string;
  /**
   * @remarks
   * The IP version of the IP address. Valid values:
   * 
   * *   **v4**: IPv4.
   * *   **v6**: IPv6.
   * 
   * @example
   * v4
   */
  ipVersion?: string;
  /**
   * @remarks
   * Indicates whether the asset is added to the instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isBgppack?: boolean;
  /**
   * @remarks
   * Indicates whether best-effort protection is enabled for the asset. Valid values:
   * 
   * *   **0**: no.
   * *   **1**: yes.
   * 
   * @example
   * 0
   */
  isFullProtection?: number;
  /**
   * @remarks
   * The region code of the asset.
   * 
   * @example
   * cn-hangzhou-dg-a01
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      blackholeThreshold: 'BlackholeThreshold',
      defenseBpsThreshold: 'DefenseBpsThreshold',
      defensePpsThreshold: 'DefensePpsThreshold',
      elasticThreshold: 'ElasticThreshold',
      instanceIp: 'InstanceIp',
      ipStatus: 'IpStatus',
      ipVersion: 'IpVersion',
      isBgppack: 'IsBgppack',
      isFullProtection: 'IsFullProtection',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeThreshold: 'number',
      defenseBpsThreshold: 'number',
      defensePpsThreshold: 'number',
      elasticThreshold: 'number',
      instanceIp: 'string',
      ipStatus: 'string',
      ipVersion: 'string',
      isBgppack: 'boolean',
      isFullProtection: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIpAddressResponseBodyInstanceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp1cb6x80tfgocid****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * launch-advisor-2021****
   */
  instanceName?: string;
  /**
   * @remarks
   * The DDoS mitigation status of the instance. Valid values:
   * 
   * *   **normal**: not under DDoS attacks.
   * *   **abnormal**: under DDoS attacks.
   * 
   * @example
   * normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **ecs**
   * *   **slb**
   * *   **eip**
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * An array that consists of the details of the asset.
   */
  ipAddressConfig?: DescribeInstanceIpAddressResponseBodyInstanceListIpAddressConfig[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      ipAddressConfig: 'IpAddressConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      ipAddressConfig: { 'type': 'array', 'itemType': DescribeInstanceIpAddressResponseBodyInstanceListIpAddressConfig },
    };
  }

  validate() {
    if(Array.isArray(this.ipAddressConfig)) {
      $dara.Model.validateArray(this.ipAddressConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of details of the instance.
   */
  instanceList?: DescribeInstanceIpAddressResponseBodyInstanceList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * BC0907F8-A9F3-5E11-977B-D59CD98C64ED
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the assets.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': DescribeInstanceIpAddressResponseBodyInstanceList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

