// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSpecsResponseBodyInstanceSpecsPackConfig extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: Gbit/s.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The number of protected IP addresses.
   * 
   * @example
   * 0
   */
  bindIpCount?: number;
  /**
   * @remarks
   * The burstable clean bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  elasticBwMbps?: number;
  /**
   * @remarks
   * The burstable clean bandwidth mode. Valid values:
   * 
   * - **month**: Monthly 95th percentile metering method.
   * - **day**: Daily 95th percentile metering method.
   * 
   * @example
   * day
   */
  elasticBwMode?: string;
  /**
   * @remarks
   * The burstable protection threshold for the protected IP address. Unit: Gbit/s.
   * 
   * @example
   * 300
   */
  ipAdvanceThre?: number;
  /**
   * @remarks
   * The basic protection threshold for the protected IP address. Unit: Gbit/s.
   * 
   * @example
   * 20
   */
  ipBasicThre?: number;
  /**
   * @remarks
   * The number of IP addresses that can be added for protection.
   * 
   * @example
   * 100
   */
  ipSpec?: number;
  /**
   * @remarks
   * The normal clean bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 200
   */
  normalBandwidth?: number;
  /**
   * @remarks
   * The burstable protection bandwidth of the Anti-DDoS Origin instance. Unit: Gbit/s.
   * 
   * @example
   * 300
   */
  packAdvThre?: number;
  /**
   * @remarks
   * The basic protection bandwidth of the Anti-DDoS Origin instance. Unit: Gbit/s.
   * 
   * @example
   * 20
   */
  packBasicThre?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bindIpCount: 'BindIpCount',
      elasticBwMbps: 'ElasticBwMbps',
      elasticBwMode: 'ElasticBwMode',
      ipAdvanceThre: 'IpAdvanceThre',
      ipBasicThre: 'IpBasicThre',
      ipSpec: 'IpSpec',
      normalBandwidth: 'NormalBandwidth',
      packAdvThre: 'PackAdvThre',
      packBasicThre: 'PackBasicThre',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      bindIpCount: 'number',
      elasticBwMbps: 'number',
      elasticBwMode: 'string',
      ipAdvanceThre: 'number',
      ipBasicThre: 'number',
      ipSpec: 'number',
      normalBandwidth: 'number',
      packAdvThre: 'number',
      packBasicThre: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBodyInstanceSpecs extends $dara.Model {
  /**
   * @remarks
   * The available best-effort protection times.
   * 
   * @example
   * 2
   */
  availableDefenseTimes?: number;
  /**
   * @remarks
   * The available quota for deactivating blackhole filtering.
   * 
   * @example
   * 100
   */
  availableDeleteBlackholeCount?: string;
  /**
   * @remarks
   * The usage percentage of best-effort protection times. Unit: %.
   * 
   * @example
   * 30
   */
  defenseTimesPercent?: number;
  /**
   * @remarks
   * The downgrade status of the instance. Valid values:
   * 
   * - **8**: The instance is downgraded because the clean bandwidth exceeds the limit.
   * 
   * @example
   * 8
   */
  downgradeStatus?: number;
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether best-effort protection mode is enabled for the instance. Valid values:
   * 
   * - **0**: Best-effort protection mode is disabled.
   * - **1**: Best-effort protection mode is enabled.
   * 
   * @example
   * 1
   */
  isFullDefenseMode?: number;
  /**
   * @remarks
   * The configuration information of the Anti-DDoS Origin instance, including the number of protected IP addresses and protection bandwidth information.
   */
  packConfig?: DescribeInstanceSpecsResponseBodyInstanceSpecsPackConfig;
  /**
   * @remarks
   * The region ID of the Anti-DDoS Origin instance.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the details of region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The total available best-effort protection times.
   * 
   * @example
   * 2
   */
  totalDefenseTimes?: number;
  static names(): { [key: string]: string } {
    return {
      availableDefenseTimes: 'AvailableDefenseTimes',
      availableDeleteBlackholeCount: 'AvailableDeleteBlackholeCount',
      defenseTimesPercent: 'DefenseTimesPercent',
      downgradeStatus: 'DowngradeStatus',
      instanceId: 'InstanceId',
      isFullDefenseMode: 'IsFullDefenseMode',
      packConfig: 'PackConfig',
      region: 'Region',
      totalDefenseTimes: 'TotalDefenseTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDefenseTimes: 'number',
      availableDeleteBlackholeCount: 'string',
      defenseTimesPercent: 'number',
      downgradeStatus: 'number',
      instanceId: 'string',
      isFullDefenseMode: 'number',
      packConfig: DescribeInstanceSpecsResponseBodyInstanceSpecsPackConfig,
      region: 'string',
      totalDefenseTimes: 'number',
    };
  }

  validate() {
    if(this.packConfig && typeof (this.packConfig as any).validate === 'function') {
      (this.packConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The specification information of the Anti-DDoS Origin instance, including the enabling status of best-effort protection, and the available and used best-effort protection times.
   */
  instanceSpecs?: DescribeInstanceSpecsResponseBodyInstanceSpecs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5840AB9F-1419-4620-807D-5EA476090247
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSpecs: 'InstanceSpecs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpecs: { 'type': 'array', 'itemType': DescribeInstanceSpecsResponseBodyInstanceSpecs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceSpecs)) {
      $dara.Model.validateArray(this.instanceSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

