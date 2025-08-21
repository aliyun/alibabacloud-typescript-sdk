// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyInstanceListInstance extends $dara.Model {
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
   * The traffic scrubbing threshold for the asset. Unit: Mbit/s.
   * 
   * @example
   * 300
   */
  defenseBpsThreshold?: number;
  /**
   * @remarks
   * The packet scrubbing threshold for the asset. Unit: packets per second (pps).
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
   * The ID of the asset.
   * 
   * @example
   * i-bp1cb6x80tfgocid****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 121.199.XX.XX
   */
  instanceIp?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * launch-advisor-2021****
   */
  instanceName?: string;
  /**
   * @remarks
   * The DDoS mitigation status of the asset. Valid values:
   * 
   * *   **mitigating**: indicates that traffic scrubbing is triggered for the asset.
   * *   **blackholed**: indicates that blackhole filtering is triggered for the asset.
   * *   **normal**: indicates that the instance is normal.
   * 
   * @example
   * normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the asset.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The IP protocol that is supported by the asset. Valid values:
   * 
   * *   **v4**: IPv4
   * *   **v6**: IPv6
   * 
   * @example
   * v4
   */
  ipVersion?: string;
  /**
   * @remarks
   * Indicates whether the asset is associated with an Anti-DDoS Origin Basic instance. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  isBgppack?: boolean;
  static names(): { [key: string]: string } {
    return {
      blackholeThreshold: 'BlackholeThreshold',
      defenseBpsThreshold: 'DefenseBpsThreshold',
      defensePpsThreshold: 'DefensePpsThreshold',
      elasticThreshold: 'ElasticThreshold',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      ipVersion: 'IpVersion',
      isBgppack: 'IsBgppack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeThreshold: 'number',
      defenseBpsThreshold: 'number',
      defensePpsThreshold: 'number',
      elasticThreshold: 'number',
      instanceId: 'string',
      instanceIp: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      ipVersion: 'string',
      isBgppack: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceList extends $dara.Model {
  instance?: DescribeInstanceResponseBodyInstanceListInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyInstanceListInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the assets.
   */
  instanceList?: DescribeInstanceResponseBodyInstanceList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C728D7E9-9A39-52E0-966B-5C33118BDBB0
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
      instanceList: DescribeInstanceResponseBodyInstanceList,
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.instanceList && typeof (this.instanceList as any).validate === 'function') {
      (this.instanceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

