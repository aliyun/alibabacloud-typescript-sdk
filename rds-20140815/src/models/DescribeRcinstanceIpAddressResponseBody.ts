// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig extends $dara.Model {
  /**
   * @remarks
   * The basic DDoS Mitigation Threshold of the assets that are assigned public IP addresses. Unit: Mbit/s.
   * 
   * @example
   * 5200
   */
  blackholeThreshold?: number;
  /**
   * @remarks
   * The traffic scrubbing threshold of the assets that are assigned public IP addresses. Unit: Mbit/s.
   * 
   * @example
   * 300
   */
  defenseBpsThreshold?: number;
  /**
   * @remarks
   * The message rate scrubbing threshold of the assets that are assigned public IP addresses. Unit: pps.
   * 
   * @example
   * 70000
   */
  defensePpsThreshold?: number;
  /**
   * @remarks
   * The DDoS burstable Mitigation Threshold of the assets that are assigned public IP addresses. Unit: Mbit/s.
   * 
   * @example
   * 12310
   */
  elasticThreshold?: number;
  /**
   * @remarks
   * The IP address of the assets that are assigned public IP addresses.
   * 
   * @example
   * 39.105.XXX.XXX
   */
  instanceIp?: string;
  /**
   * @remarks
   * The DDoS mitigation status of the assets that are assigned public IP addresses. Valid values:
   * 
   * - **mitigating**: Cleaning.
   * - **blackholed**: Black Hole Activated.
   * - **normal**: Normal.
   * 
   * @example
   * normal
   */
  ipStatus?: string;
  /**
   * @remarks
   * The IP protocol version of the instance. Valid values:
   * 
   * - **v4**
   * - **v6**
   * 
   * @example
   * v4
   */
  ipVersion?: string;
  /**
   * @remarks
   * Indicates whether the assets that are assigned public IP addresses is attached to Anti-DDoS Origin. Valid values:
   * 
   * - **true**: Attached.
   * - **false**: Not attached.
   * 
   * @example
   * true
   */
  isBgppack?: boolean;
  /**
   * @remarks
   * Indicates whether best-effort protection is enabled for the assets that are assigned public IP addresses in Anti-DDoS Origin. Valid values:
   * 
   * - **0**: Best-effort protection is not enabled.
   * - **1**: Best-effort protection is enabled.
   * 
   * @example
   * 0
   */
  isFullProtection?: number;
  /**
   * @remarks
   * The region encoding of the assets that are assigned public IP addresses.
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
   * The Custom instance ID.
   * 
   * @example
   * rc-kti8hw44yy0x53******
   */
  instanceId?: string;
  /**
   * @remarks
   * The Custom instance name.
   * 
   * @example
   * rc-kti8hw44yy0x53******
   */
  instanceName?: string;
  /**
   * @remarks
   * The DDoS mitigation status of the instance. Valid values:
   * 
   * - **normal**: Normal.
   * - **abnormal**: Under attack.
   * 
   * @example
   * normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the assets that are assigned public IP addresses. The value is fixed as **ecs**.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The details of the assets that are assigned public IP addresses.
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
   * The details of instances to which the assets that are assigned public IP addresses belong.
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
   * The total number of assets that are assigned public IP addresses returned.
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

