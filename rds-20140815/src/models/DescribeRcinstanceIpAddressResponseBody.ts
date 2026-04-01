// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig extends $dara.Model {
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
   * The traffic scrubbing threshold for the asset measured in packets per second (PPS). Unit: packets per second (pps).
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
   * 39.105.XXX.XXX
   */
  instanceIp?: string;
  /**
   * @remarks
   * The DDoS mitigation status of the asset. Valid values:
   * 
   * *   **mitigating**
   * *   **blackholed**
   * *   **normal**
   * 
   * @example
   * normal
   */
  ipStatus?: string;
  /**
   * @remarks
   * The IP version of the instance. Valid values:
   * 
   * *   **v4**
   * *   **v6**
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
   * *   **0**: Best-effort protection is disabled.
   * *   **1**: Best-effort protection is enabled.
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
   * cn-beijing-wt97-a01
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

export class DescribeRCInstanceIpAddressResponseBodyRCInstanceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the RDS Custom instance.
   * 
   * @example
   * rc-kti8hw44yy0x53******
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rc-kti8hw44yy0x53******
   */
  instanceName?: string;
  /**
   * @remarks
   * The DDoS mitigation status of the instance. Valid values:
   * 
   * *   **normal**
   * *   **abnormal**
   * 
   * @example
   * normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the asset. The value is fixed to **ecs**.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * An array that consists of the details of the asset.
   */
  ipAddressConfig?: DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig[];
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
      ipAddressConfig: { 'type': 'array', 'itemType': DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig },
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

export class DescribeRCInstanceIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of details of the instance.
   */
  RCInstanceList?: DescribeRCInstanceIpAddressResponseBodyRCInstanceList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C048E440-EA84-5E97-8C81-2A7060D0****_th**
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the assets.
   * 
   * @example
   * 1
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      RCInstanceList: 'RCInstanceList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RCInstanceList: { 'type': 'array', 'itemType': DescribeRCInstanceIpAddressResponseBodyRCInstanceList },
      requestId: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.RCInstanceList)) {
      $dara.Model.validateArray(this.RCInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

