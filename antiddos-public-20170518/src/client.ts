// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class DescribeBgpPackByIpResponseBodyDdosbgpInfo extends $dara.Model {
  /**
   * @remarks
   * The basic protection threshold of the instance. Unit: Gbit/s.
   * 
   * @example
   * 20
   */
  baseThreshold?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  ddosbgpInstanceId?: string;
  /**
   * @remarks
   * The burstable protection threshold of the instance. Unit: Gbit/s.
   * 
   * @example
   * 301
   */
  elasticThreshold?: number;
  /**
   * @remarks
   * The expiration time of the instance. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1640448000000
   */
  expireTime?: number;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 118.31.XX.XX
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      baseThreshold: 'BaseThreshold',
      ddosbgpInstanceId: 'DdosbgpInstanceId',
      elasticThreshold: 'ElasticThreshold',
      expireTime: 'ExpireTime',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseThreshold: 'number',
      ddosbgpInstanceId: 'string',
      elasticThreshold: 'number',
      expireTime: 'number',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapResponseBodyCapUrl extends $dara.Model {
  /**
   * @remarks
   * The download link to the traffic data.
   * 
   * @example
   * http://beaver-pack****.oss-cn-hangzhou.aliyuncs.com/ddos-2021112511-121.89.XX.XX.cap?Expires=1637824408&OSSAccessKeyId=LTAIXu2lJhw3****&Signature=KKSzOMSUajtwcqfqxkU1nK69d4****
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCountResponseBodyDdosCount extends $dara.Model {
  /**
   * @remarks
   * The number of assets for which blackhole filtering is triggered.
   * 
   * @example
   * 0
   */
  blackholeCount?: number;
  /**
   * @remarks
   * The number of assets for which traffic scrubbing is triggered.
   * 
   * @example
   * 4
   */
  defenseCount?: number;
  /**
   * @remarks
   * The total number of assets.
   * 
   * @example
   * 0
   */
  instacenCount?: number;
  static names(): { [key: string]: string } {
    return {
      blackholeCount: 'BlackholeCount',
      defenseCount: 'DefenseCount',
      instacenCount: 'InstacenCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeCount: 'number',
      defenseCount: 'number',
      instacenCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCreditResponseBodyDdosCredit extends $dara.Model {
  /**
   * @remarks
   * The time period after which blackhole filtering is automatically deactivated in the specified region. Unit: minutes.
   * 
   * @example
   * 150
   */
  blackholeTime?: number;
  /**
   * @remarks
   * The security credit score. The full score is **1000**.
   * 
   * @example
   * 550
   */
  score?: number;
  /**
   * @remarks
   * The security credit level. Valid values:
   * 
   * *   **A**: outstanding
   * *   **B**: excellent
   * *   **C**: good
   * *   **D**: average
   * *   **E**: poor
   * *   **F**: poorer
   * 
   * @example
   * D
   */
  scoreLevel?: string;
  static names(): { [key: string]: string } {
    return {
      blackholeTime: 'BlackholeTime',
      score: 'Score',
      scoreLevel: 'ScoreLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeTime: 'number',
      score: 'number',
      scoreLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventListResponseBodyDdosEventListDdosEvent extends $dara.Model {
  /**
   * @remarks
   * The status of the DDoS attack event. Valid values:
   * 
   * *   **mitigating**: indicates that traffic scrubbing is in progress.
   * *   **blackholed**: indicates that blackhole filtering is triggered for the asset.
   * *   **normal**: indicates that the DDoS attack event ends.
   * 
   * @example
   * normal
   */
  ddosStatus?: string;
  /**
   * @remarks
   * The type of the DDoS attack event. Valid values:
   * 
   * *   **defense**: an attack event that triggers traffic scrubbing
   * *   **blackhole**: an attack event that triggers blackhole filtering
   * 
   * @example
   * blackhole
   */
  ddosType?: string;
  /**
   * @remarks
   * The time of the last attack. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > This parameter is returned only when the asset is attacked multiple times within a DDoS attack event.
   * 
   * @example
   * 1637817679000
   */
  delayTime?: number;
  /**
   * @remarks
   * The end time of the DDoS attack event. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1637817679000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the DDoS attack event. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1637812279000
   */
  startTime?: number;
  /**
   * @remarks
   * The time when blackhole filtering is deactivated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > This parameter is returned only when the value of the **DdosType** parameter is **blackhole**.
   * 
   * @example
   * 1637814079000
   */
  unBlackholeTime?: number;
  static names(): { [key: string]: string } {
    return {
      ddosStatus: 'DdosStatus',
      ddosType: 'DdosType',
      delayTime: 'DelayTime',
      endTime: 'EndTime',
      startTime: 'StartTime',
      unBlackholeTime: 'UnBlackholeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosStatus: 'string',
      ddosType: 'string',
      delayTime: 'number',
      endTime: 'number',
      startTime: 'number',
      unBlackholeTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventListResponseBodyDdosEventList extends $dara.Model {
  ddosEvent?: DescribeDdosEventListResponseBodyDdosEventListDdosEvent[];
  static names(): { [key: string]: string } {
    return {
      ddosEvent: 'DdosEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosEvent: { 'type': 'array', 'itemType': DescribeDdosEventListResponseBodyDdosEventListDdosEvent },
    };
  }

  validate() {
    if(Array.isArray(this.ddosEvent)) {
      $dara.Model.validateArray(this.ddosEvent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosThresholdResponseBodyThresholdsThreshold extends $dara.Model {
  /**
   * @remarks
   * If the value of the **DdosType** parameter is **defense**, the Bps parameter indicates the current traffic scrubbing threshold. Unit: Mbit/s.
   * 
   * If the value of the **DdosType** parameter is **blackhole**, the Bps parameter indicates the basic protection threshold. Unit: Mbit/s.
   * 
   * @example
   * 500
   */
  bps?: number;
  /**
   * @remarks
   * The type of the threshold. Valid values:
   * 
   * *   **defense**: traffic scrubbing threshold
   * *   **blackhole**: DDoS mitigation threshold
   * 
   * @example
   * defense
   */
  ddosType?: string;
  /**
   * @remarks
   * The burstable protection threshold (the maximum DDoS mitigation threshold). Unit: Mbit/s.
   * 
   * > This parameter is returned only when the value of the **DdosType** parameter is **blackhole**.
   * 
   * @example
   * 12310
   */
  elasticBps?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp10bclrt56fblts****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * Indicates whether the threshold is automatically adjusted. Valid values:
   * 
   * *   **true**: The scrubbing thresholds are automatically adjusted based on the traffic load on the asset.
   * *   **false**: The scrubbing thresholds are not automatically adjusted. You must manually specify the scrubbing thresholds.
   * 
   * @example
   * false
   */
  isAuto?: boolean;
  /**
   * @remarks
   * The maximum traffic scrubbing threshold. Unit: Mbit/s.
   * 
   * @example
   * 1024
   */
  maxBps?: number;
  /**
   * @remarks
   * The maximum packet scrubbing threshold. Unit: pps.
   * 
   * @example
   * 150000
   */
  maxPps?: number;
  /**
   * @remarks
   * The packet scrubbing threshold. Unit: pps.
   * 
   * > This parameter is returned only when the value of the **DdosType** parameter is **defense**.
   * 
   * @example
   * 150000
   */
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      ddosType: 'DdosType',
      elasticBps: 'ElasticBps',
      instanceId: 'InstanceId',
      internetIp: 'InternetIp',
      isAuto: 'IsAuto',
      maxBps: 'MaxBps',
      maxPps: 'MaxPps',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      ddosType: 'string',
      elasticBps: 'number',
      instanceId: 'string',
      internetIp: 'string',
      isAuto: 'boolean',
      maxBps: 'number',
      maxPps: 'number',
      pps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosThresholdResponseBodyThresholds extends $dara.Model {
  threshold?: DescribeDdosThresholdResponseBodyThresholdsThreshold[];
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: { 'type': 'array', 'itemType': DescribeDdosThresholdResponseBodyThresholdsThreshold },
    };
  }

  validate() {
    if(Array.isArray(this.threshold)) {
      $dara.Model.validateArray(this.threshold);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeIpDdosThresholdResponseBodyThreshold extends $dara.Model {
  /**
   * @remarks
   * If the value of the **DdosType** parameter is **defense**, the Bps parameter indicates the current traffic scrubbing threshold. Unit: Mbit/s.
   * 
   * If the value of the **DdosType** parameter is **blackhole**, the Bps parameter indicates the basic protection threshold. Unit: Mbit/s.
   * 
   * @example
   * 7500
   */
  bps?: number;
  /**
   * @remarks
   * The type of the threshold. Valid values:
   * 
   * *   **defense**: traffic scrubbing threshold
   * *   **blackhole**: DDoS mitigation threshold
   * 
   * @example
   * defense
   */
  ddosType?: string;
  /**
   * @remarks
   * The burstable protection threshold (the maximum DDoS mitigation threshold). Unit: Mbit/s.
   * 
   * > This parameter is returned only when the value of the **DdosType** parameter is **blackhole**.
   * 
   * @example
   * 12310
   */
  elasticBps?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp1i88rqjza51s****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * Indicates whether the threshold is automatically adjusted. Valid values:
   * 
   * *   **true**: The scrubbing thresholds are automatically adjusted based on the traffic load on the asset.
   * *   **false**: The scrubbing thresholds are not automatically adjusted. You must manually specify the scrubbing thresholds.
   * 
   * @example
   * false
   */
  isAuto?: boolean;
  /**
   * @remarks
   * The maximum traffic scrubbing threshold. Unit: Mbit/s.
   * 
   * @example
   * 7500
   */
  maxBps?: number;
  /**
   * @remarks
   * The maximum packet scrubbing threshold. Unit: pps.
   * 
   * @example
   * 5000000
   */
  maxPps?: number;
  /**
   * @remarks
   * The packet scrubbing threshold. Unit: packets per second (pps).
   * 
   * > This parameter is returned only when the value of the **DdosType** parameter is **defense**.
   * 
   * @example
   * 5000000
   */
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      ddosType: 'DdosType',
      elasticBps: 'ElasticBps',
      instanceId: 'InstanceId',
      internetIp: 'InternetIp',
      isAuto: 'IsAuto',
      maxBps: 'MaxBps',
      maxPps: 'MaxPps',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      ddosType: 'string',
      elasticBps: 'number',
      instanceId: 'string',
      internetIp: 'string',
      isAuto: 'boolean',
      maxBps: 'number',
      maxPps: 'number',
      pps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpLocationServiceResponseBodyInstance extends $dara.Model {
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
   * The type of the asset. Valid values:
   * 
   * *   **ecs**: an ECS instance.
   * *   **slb**: an SLB instance.
   * *   **eip**: an EIP.
   * *   **ipv6**: an IPv6 gateway.
   * *   **swas**: a simple application server.
   * *   **waf**: a Web Application Firewall (WAF) instance of the Exclusive edition.
   * *   **ga_basic**: a Global Accelerator (GA) instance.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 121.199.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The region to which the public IP address of the asset belongs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetIp: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $dara.Model {
  /**
   * @remarks
   * The English name of the region.
   * 
   * @example
   * East China 1
   */
  regionEnName?: string;
  /**
   * @remarks
   * The Chinese name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  regionName?: string;
  /**
   * @remarks
   * The code of the region.
   * 
   * @example
   * cn-hangzhou-dg-a01
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionNoAlias?: string;
  static names(): { [key: string]: string } {
    return {
      regionEnName: 'RegionEnName',
      regionName: 'RegionName',
      regionNo: 'RegionNo',
      regionNoAlias: 'RegionNoAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEnName: 'string',
      regionName: 'string',
      regionNo: 'string',
      regionNoAlias: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPackByIpRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the asset to query.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/353250.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The IP address of the asset to query.
   * 
   * >  You can call the [DescribeInstanceIpAddress](https://help.aliyun.com/document_detail/472620.html) operation to query the IDs of Elastic Compute Service (ECS) instances, Server Load Balancer (SLB) instances, and elastic IP addresses (EIPs) within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 118.31.XX.XX
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPackByIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code of the request.
   * 
   * For more information about status codes, see [Common parameters](https://help.aliyun.com/document_detail/118841.html).
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The configurations of the instance that is associated with the asset.
   */
  ddosbgpInfo?: DescribeBgpPackByIpResponseBodyDdosbgpInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E46A08E4-A1CD-5BE9-B580-C4D6E9BC5484
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ddosbgpInfo: 'DdosbgpInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ddosbgpInfo: DescribeBgpPackByIpResponseBodyDdosbgpInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.ddosbgpInfo && typeof (this.ddosbgpInfo as any).validate === 'function') {
      (this.ddosbgpInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPackByIpResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBgpPackByIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBgpPackByIpResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the DDoS attack event. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > You can call the [DescribeDdosEventList](https://help.aliyun.com/document_detail/354236.html) operation to query the start time of each DDoS attack event that occurred on an asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 1637812279000
   */
  begTime?: number;
  /**
   * @remarks
   * The region ID of the asset that is under DDoS attacks. The asset is assigned a public IP address.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/353250.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The ID of the asset that is under DDoS attacks.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/354191.html) operation to query the IDs of ECS instances, SLB instances, and EIPs within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp10bclrt56fblts****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the asset that is under DDoS attacks. The asset is assigned a public IP address. Valid values:
   * 
   * *   **ecs**: an Elastic Compute Service (ECS) instance.
   * *   **slb**: a Server Load Balancer (SLB) instance.
   * *   **eip**: an elastic IP address (EIP).
   * *   **ipv6**: an IPv6 gateway.
   * *   **swas**: a simple application server.
   * *   **waf**: a Web Application Firewall (WAF) instance of the Exclusive edition.
   * *   **ga_basic**: a Global Accelerator (GA) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The public IP address of the asset that is under DDoS attacks.
   * 
   * @example
   * 121.199.XX.XX
   */
  internetIp?: string;
  static names(): { [key: string]: string } {
    return {
      begTime: 'BegTime',
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begTime: 'number',
      ddosRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download link to the traffic data that is captured when a DDoS attack event occurs.
   */
  capUrl?: DescribeCapResponseBodyCapUrl;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C728D7E9-9A39-52E0-966B-5C33118BDBB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      capUrl: 'CapUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capUrl: DescribeCapResponseBodyCapUrl,
      requestId: 'string',
    };
  }

  validate() {
    if(this.capUrl && typeof (this.capUrl as any).validate === 'function') {
      (this.capUrl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCapResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCountRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the asset to query.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/353250.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The type of the asset to query. Valid values:
   * 
   * *   **ecs**: Elastic Compute Service (ECS) instances.
   * *   **slb**: Server Load Balancer (SLB) instances.
   * *   **eip**: elastic IP addresses (EIPs).
   * *   **ipv6**: IPv6 gateways.
   * *   **swas**: simple application servers.
   * *   **waf**: Web Application Firewall (WAF) instances of the Exclusive edition.
   * *   **ga_basic**: Global Accelerator (GA) instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of assets that are under DDoS attacks.
   */
  ddosCount?: DescribeDdosCountResponseBodyDdosCount;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7D66C762-324E-51CE-B461-2007996087B2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosCount: 'DdosCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosCount: DescribeDdosCountResponseBodyDdosCount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ddosCount && typeof (this.ddosCount as any).validate === 'function') {
      (this.ddosCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDdosCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDdosCountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCreditRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/353250.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ddosRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCreditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the security credit score of the current Alibaba Cloud account in the specified region.
   */
  ddosCredit?: DescribeDdosCreditResponseBodyDdosCredit;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E1F7BD73-8E9D-58D9-8658-CFC97112C641
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      ddosCredit: 'DdosCredit',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosCredit: DescribeDdosCreditResponseBodyDdosCredit,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.ddosCredit && typeof (this.ddosCredit as any).validate === 'function') {
      (this.ddosCredit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCreditResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDdosCreditResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDdosCreditResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The region ID of the asset to query.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/353250.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The ID of asset to query.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/354191.html) operation to query the IDs of ECS instances, SLB instances, and EIPs within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp10bclrt56fblts****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the asset to query. Valid values:
   * 
   * *   **ecs**: an Elastic Compute Service (ECS) instance.
   * *   **slb**: a Server Load Balancer (SLB) instance.
   * *   **eip**: an elastic IP address (EIP).
   * *   **ipv6**: an IPv6 gateway.
   * *   **swas**: a simple application server.
   * *   **waf**: a Web Application Firewall (WAF) instance of the Exclusive edition.
   * *   **ga_basic**: a Global Accelerator (GA) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The IP address of the asset to query.
   * 
   * @example
   * 121.199.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ddosRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetIp: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the DDoS attack events.
   */
  ddosEventList?: DescribeDdosEventListResponseBodyDdosEventList;
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
   * The total number of DDoS attack events.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      ddosEventList: 'DdosEventList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosEventList: DescribeDdosEventListResponseBodyDdosEventList,
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.ddosEventList && typeof (this.ddosEventList as any).validate === 'function') {
      (this.ddosEventList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDdosEventListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDdosEventListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosThresholdRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/353250.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The type of the threshold. Valid values:
   * 
   * *   **defense**: traffic scrubbing threshold
   * *   **blackhole**: DDoS mitigation threshold
   * 
   * This parameter is required.
   * 
   * @example
   * defense
   */
  ddosType?: string;
  /**
   * @remarks
   * The ID of asset N to query.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The type of the asset that is assigned a public IP address. Valid values:
   * 
   * *   **ecs**: ECS instances.
   * *   **slb**: SLB instances.
   * *   **eip**: EIPs.
   * *   **ipv6**: IPv6 gateways.
   * *   **swas**: simple application servers.
   * *   **waf**: Web Application Firewall (WAF) instances of the Exclusive edition.
   * *   **ga_basic**: Global Accelerator (GA) instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      ddosType: 'DdosType',
      instanceIds: 'InstanceIds',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
      ddosType: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosThresholdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * E9B3C090-55AD-59C6-979E-FCFD81E7D9E7
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the details of the threshold.
   */
  thresholds?: DescribeDdosThresholdResponseBodyThresholds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      thresholds: 'Thresholds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      thresholds: DescribeDdosThresholdResponseBodyThresholds,
    };
  }

  validate() {
    if(this.thresholds && typeof (this.thresholds as any).validate === 'function') {
      (this.thresholds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosThresholdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDdosThresholdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDdosThresholdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/353250.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The DDoS mitigation status of the asset. Valid values:
   * 
   * *   **mitigating**: queries assets for which traffic scrubbing is triggered.
   * *   **blackholed**: queries assets for which blackhole filtering is triggered.
   * *   **normal**: queries assets that are not under DDoS attacks.
   * 
   * @example
   * blackholed
   */
  ddosStatus?: string;
  /**
   * @remarks
   * The ID of the asset. The formats of asset IDs vary based on the value of the **InstanceType**. parameter.
   * 
   * *   If you set **InstanceType** to **ecs**, specify the ID of the ECS instance. For example, you can specify i-bp1cb6x80tfgocid\\*\\*\\*\\*.
   * *   If you set **InstanceType** to **slb**, specify the ID of the SLB instance. For example, you can specify alb-vn2dqg3v31y2vd\\*\\*\\*\\*.
   * *   If you set **InstanceType** to **eip**, specify the ID of the EIP. For example, you can specify eip-j6ce6dcx9epi7rs46\\*\\*\\*\\*.
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
   * launch-advisor-2022****
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the asset to query. Valid values:
   * 
   * *   **ecs**: ECS instances.
   * *   **slb**: SLB instances.
   * *   **eip**: EIPs.
   * *   **ipv6**: IPv6 gateways.
   * *   **swas**: simple application servers.
   * *   **waf**: Web Application Firewall (WAF) instances of the Exclusive edition.
   * *   **ga_basic**: Global Accelerator (GA) instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ddosRegionId: 'DdosRegionId',
      ddosStatus: 'DdosStatus',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ddosRegionId: 'string',
      ddosStatus: 'string',
      instanceId: 'string',
      instanceIp: 'string',
      instanceName: 'string',
      instanceType: 'string',
      pageSize: 'number',
    };
  }

  validate() {
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

export class DescribeInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/353250.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The DDoS mitigation status of the asset. Valid values:
   * 
   * *   **defense**: queries assets for which traffic scrubbing is performed.
   * *   **blackhole**: queries assets for which blackhole filtering is triggered.
   * 
   * @example
   * normal
   */
  ddosStatus?: string;
  /**
   * @remarks
   * The ID of the instance to which the asset is added.
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
   * 192.0.XX.XX
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
   * The type of the asset that is assigned a public IP address. Valid values:
   * 
   * *   **ecs**: ECS instances.
   * *   **slb**: SLB instances.
   * *   **eip**: EIPs.
   * *   **ipv6**: IPv6 gateways.
   * *   **swas**: simple application servers.
   * *   **waf**: Web Application Firewall (WAF) instances of the Exclusive edition.
   * *   **ga_basic**: Global Accelerator (GA) instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ddosRegionId: 'DdosRegionId',
      ddosStatus: 'DdosStatus',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ddosRegionId: 'string',
      ddosStatus: 'string',
      instanceId: 'string',
      instanceIp: 'string',
      instanceName: 'string',
      instanceType: 'string',
      pageSize: 'number',
    };
  }

  validate() {
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

export class DescribeInstanceIpAddressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceIpAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceIpAddressResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpDdosThresholdRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/353250.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The type of the threshold. Valid values:
   * 
   * *   **defense**: traffic scrubbing threshold
   * *   **blackhole**: DDoS mitigation threshold
   * 
   * This parameter is required.
   * 
   * @example
   * defense
   */
  ddosType?: string;
  /**
   * @remarks
   * The ID of the asset.
   * 
   * > You can call the [DescribeInstanceIpAddress](https://help.aliyun.com/document_detail/429562.html) operation to query the IDs of ECS instances, SLB instances, and EIPs within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1i88rqjza51s****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the asset that is assigned a public IP address. Valid values:
   * 
   * *   **ecs**: ECS instances.
   * *   **slb**: SLB instances.
   * *   **eip**: EIPs.
   * *   **ipv6**: IPv6 gateways.
   * *   **swas**: simple application servers.
   * *   **waf**: Web Application Firewall (WAF) instances of the Exclusive edition.
   * *   **ga_basic**: Global Accelerator (GA) instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX
   */
  internetIp?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      ddosType: 'DdosType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
      ddosType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpDdosThresholdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 025F1688-680B-551A-9A8E-1A0D796315CF
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the details of the threshold.
   */
  threshold?: DescribeIpDdosThresholdResponseBodyThreshold;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      threshold: DescribeIpDdosThresholdResponseBodyThreshold,
    };
  }

  validate() {
    if(this.threshold && typeof (this.threshold as any).validate === 'function') {
      (this.threshold as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpDdosThresholdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeIpDdosThresholdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIpDdosThresholdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpLocationServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the asset to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 121.199.XX.XX
   */
  internetIp?: string;
  static names(): { [key: string]: string } {
    return {
      internetIp: 'InternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpLocationServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the asset.
   */
  instance?: DescribeIpLocationServiceResponseBodyInstance;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C728D7E9-9A39-52E0-966B-5C33118BDBB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DescribeIpLocationServiceResponseBodyInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpLocationServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeIpLocationServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIpLocationServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array consisting of regions in which Anti-DDoS Origin Basic is available.
   */
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5093C7EE-8E27-5FC9-9B88-40626BA540C0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseThresholdRequest extends $dara.Model {
  /**
   * @remarks
   * The traffic scrubbing threshold. Unit: Mbit/s. The traffic scrubbing threshold cannot exceed the peak inbound or outbound Internet traffic, whichever is larger, of the asset. When you modify Bps, Pps is required. Otherwise, Bps does not take effect.
   * 
   * You can use the monitoring tool that is provided by the asset to query the Internet traffic of the asset:
   * 
   * *   If the asset is an ECS instance, see [View instance monitoring information](https://help.aliyun.com/document_detail/25482.html).
   * *   If the asset is an SLB instance, see [View monitoring data](https://help.aliyun.com/document_detail/85982.html).
   * 
   * @example
   * 100
   */
  bps?: number;
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the asset for which you want to change the scrubbing thresholds.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/353250.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The ID of the asset.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/354191.html) operation to query the IDs of ECS instances, SLB instances, and EIPs within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * i-uf6idy3c57psf7vu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **ecs**: an Elastic Compute Service (ECS) instance.
   * *   **slb**: a Server Load Balancer (SLB) instance.
   * *   **eip**: an elastic IP address (EIP).
   * *   **ipv6**: an IPv6 gateway.
   * *   **swas**: a simple application server.
   * *   **waf**: a Web Application Firewall (WAF) instance of the Exclusive edition.
   * *   **ga_basic**: a Global Accelerator (GA) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * Specifies whether to automatically adjust the scrubbing threshold based on the traffic load on the asset. Valid values:
   * 
   * *   **true**: automatically adjusts the scrubbing thresholds. You do not need to configure the **Bps** and **Pps** parameters.
   * *   **false**: The scrubbing threshold is not automatically adjusted. You must configure the **Bps** and **Pps** parameters.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  isAuto?: boolean;
  /**
   * @remarks
   * The packet scrubbing threshold. Unit: packets per second (PPS). When you modify Pps, Bps is required. Otherwise, Pps does not take effect.
   * 
   * The packet scrubbing threshold cannot exceed the peak number of inbound or outbound packets, whichever is larger, of the asset. You can use the monitoring tool that is provided by the asset to query the number of packets of the asset:
   * 
   * *   If the asset is an ECS instance, see [View instance monitoring information](https://help.aliyun.com/document_detail/25482.html).
   * *   If the asset is an SLB instance, see [View monitoring data](https://help.aliyun.com/document_detail/85982.html).
   * 
   * @example
   * 70000
   */
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      clientToken: 'ClientToken',
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
      isAuto: 'IsAuto',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      clientToken: 'string',
      ddosRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetIp: 'string',
      isAuto: 'boolean',
      pps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseThresholdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * BC0607F8-A9F3-5E11-977B-D59CD58C64ED
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseThresholdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefenseThresholdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDefenseThresholdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpDefenseThresholdRequest extends $dara.Model {
  /**
   * @remarks
   * The traffic scrubbing threshold. Unit: Mbit/s. The traffic scrubbing threshold cannot exceed the peak inbound or outbound Internet traffic, whichever is larger, of the asset. When you modify Bps, Pps is required. Otherwise, Bps does not take effect.
   * 
   * You can use the monitoring tool that is provided by the asset to query the Internet traffic of the asset:
   * 
   * *   If the asset is an ECS instance, see [View instance monitoring information](https://help.aliyun.com/document_detail/25482.html).
   * *   If the asset is an SLB instance, see [View monitoring data](https://help.aliyun.com/document_detail/85982.html).
   * *   If the asset is an EIP, see [View monitoring data](https://help.aliyun.com/document_detail/85354.html).
   * 
   * @example
   * 100
   */
  bps?: number;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/353250.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The ID of the asset.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/354191.html) operation to query the IDs of ECS instances, SLB instances, and EIPs within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * i-uf6idy3c57psf7vu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **ecs**: an Elastic Compute Service (ECS) instance.
   * *   **slb**: a Server Load Balancer (SLB) instance.
   * *   **eip**: an elastic IP address (EIP).
   * *   **ipv6**: an IPv6 gateway.
   * *   **swas**: a simple application server.
   * *   **waf**: a Web Application Firewall (WAF) instance of the Exclusive edition.
   * *   **ga_basic**: a Global Accelerator (GA) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * Specifies whether to automatically adjust the scrubbing threshold based on the traffic load on the asset. Valid values:
   * 
   * *   **true**: automatically adjusts the scrubbing threshold. You do not need to configure the **Bps** and **Pps** parameters.
   * *   **false**: The scrubbing threshold is not automatically adjusted. You must configure the **Bps** and **Pps** parameters. This is the default value.
   * 
   * @example
   * false
   */
  isAuto?: boolean;
  /**
   * @remarks
   * The packet scrubbing threshold. Unit: packets per second (PPS). When you modify Pps, Bps is required. Otherwise, Pps does not take effect.
   * 
   * The packet scrubbing threshold cannot exceed the peak number of inbound or outbound packets, whichever is larger, of the asset. You can use the monitoring tool that is provided by the asset to query the number of packets of the asset:
   * 
   * *   If the asset is an ECS instance, see [View instance monitoring information](https://help.aliyun.com/document_detail/25482.html).
   * *   If the asset is an SLB instance, see [View monitoring data](https://help.aliyun.com/document_detail/85982.html).
   * *   If the asset is an EIP, see [View monitoring data](https://help.aliyun.com/document_detail/85354.html).
   * 
   * @example
   * 70000
   */
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
      isAuto: 'IsAuto',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      ddosRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetIp: 'string',
      isAuto: 'boolean',
      pps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpDefenseThresholdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * BC0607F8-A9F3-5E11-977B-D59CD58C64ED
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpDefenseThresholdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyIpDefenseThresholdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyIpDefenseThresholdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "antiddos.aliyuncs.com",
      'cn-beijing': "antiddos.aliyuncs.com",
      'cn-zhangjiakou': "antiddos-openapi.cn-zhangjiakou.aliyuncs.com",
      'cn-huhehaote': "antiddos-openapi.cn-huhehaote.aliyuncs.com",
      'cn-wulanchabu': "antiddos-openapi.cn-wulanchabu.aliyuncs.com",
      'cn-hangzhou': "antiddos.aliyuncs.com",
      'cn-shanghai': "antiddos.aliyuncs.com",
      'cn-nanjing': "antiddos-openapi.cn-hangzhou-cloudstone.aliyuncs.com",
      'cn-shenzhen': "antiddos.aliyuncs.com",
      'cn-heyuan': "antiddos-openapi.cn-heyuan.aliyuncs.com",
      'cn-guangzhou': "antiddos-openapi.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "antiddos-openapi.cn-chengdu.aliyuncs.com",
      'cn-hongkong': "antiddos.aliyuncs.com",
      'ap-northeast-1': "antiddos-openapi.ap-northeast-1.aliyuncs.com",
      'ap-northeast-2': "antiddos-openapi.ap-northeast-2.aliyuncs.com",
      'ap-southeast-1': "antiddos.aliyuncs.com",
      'ap-southeast-2': "antiddos-openapi.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "antiddos-openapi.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "antiddos-openapi.ap-southeast-5.aliyuncs.com",
      'ap-southeast-6': "antiddos-openapi.ap-southeast-6.aliyuncs.com",
      'us-east-1': "antiddos.aliyuncs.com",
      'us-west-1': "antiddos.aliyuncs.com",
      'eu-west-1': "antiddos-openapi.eu-west-1.aliyuncs.com",
      'eu-central-1': "antiddos-openapi.eu-central-1.aliyuncs.com",
      'ap-south-1': "antiddos-openapi.ap-south-1.aliyuncs.com",
      'me-east-1': "antiddos-openapi.me-east-1.aliyuncs.com",
      'cn-shanghai-finance-1': "antiddos.aliyuncs.com",
      'cn-shenzhen-finance-1': "antiddos.aliyuncs.com",
      'cn-north-2-gov-1': "antiddos.aliyuncs.com",
      'ap-northeast-2-pop': "antiddos.aliyuncs.com",
      'cn-beijing-finance-1': "antiddos.aliyuncs.com",
      'cn-beijing-finance-pop': "antiddos.aliyuncs.com",
      'cn-beijing-gov-1': "antiddos.aliyuncs.com",
      'cn-beijing-nu16-b01': "antiddos.aliyuncs.com",
      'cn-edge-1': "antiddos.aliyuncs.com",
      'cn-fujian': "antiddos.aliyuncs.com",
      'cn-haidian-cm12-c01': "antiddos.aliyuncs.com",
      'cn-hangzhou-bj-b01': "antiddos.aliyuncs.com",
      'cn-hangzhou-finance': "antiddos.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "antiddos.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "antiddos.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "antiddos.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "antiddos.aliyuncs.com",
      'cn-hangzhou-test-306': "antiddos.aliyuncs.com",
      'cn-hongkong-finance-pop': "antiddos.aliyuncs.com",
      'cn-huhehaote-nebula-1': "antiddos.aliyuncs.com",
      'cn-qingdao-nebula': "antiddos.aliyuncs.com",
      'cn-shanghai-et15-b01': "antiddos.aliyuncs.com",
      'cn-shanghai-et2-b01': "antiddos.aliyuncs.com",
      'cn-shanghai-inner': "antiddos.aliyuncs.com",
      'cn-shanghai-internal-test-1': "antiddos.aliyuncs.com",
      'cn-shenzhen-inner': "antiddos.aliyuncs.com",
      'cn-shenzhen-st4-d01': "antiddos.aliyuncs.com",
      'cn-shenzhen-su18-b01': "antiddos.aliyuncs.com",
      'cn-wuhan': "antiddos.aliyuncs.com",
      'cn-yushanfang': "antiddos.aliyuncs.com",
      'cn-zhangbei': "antiddos.aliyuncs.com",
      'cn-zhangbei-na61-b01': "antiddos.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "antiddos-openapi.cn-zhangjiakou.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "antiddos.aliyuncs.com",
      'eu-west-1-oxs': "antiddos.aliyuncs.com",
      'rus-west-1-pop': "antiddos.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("antiddos-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Queries the configurations of the Anti-DDoS Origin instance that is associated with an asset. The asset is assigned a public IP address.
   * 
   * @remarks
   * You can call the DescribeBgpPackByIp operation to query the configurations of the Anti-DDoS Origin instance that is associated with an asset. The configurations include the basic protection threshold, burstable protection threshold, and expiration time.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeBgpPackByIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBgpPackByIpResponse
   */
  async describeBgpPackByIpWithOptions(request: DescribeBgpPackByIpRequest, runtime: $dara.RuntimeOptions): Promise<DescribeBgpPackByIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBgpPackByIp",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBgpPackByIpResponse>(await this.callApi(params, req, runtime), new DescribeBgpPackByIpResponse({}));
    } else {
      return $dara.cast<DescribeBgpPackByIpResponse>(await this.execute(params, req, runtime), new DescribeBgpPackByIpResponse({}));
    }

  }

  /**
   * Queries the configurations of the Anti-DDoS Origin instance that is associated with an asset. The asset is assigned a public IP address.
   * 
   * @remarks
   * You can call the DescribeBgpPackByIp operation to query the configurations of the Anti-DDoS Origin instance that is associated with an asset. The configurations include the basic protection threshold, burstable protection threshold, and expiration time.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeBgpPackByIpRequest
   * @returns DescribeBgpPackByIpResponse
   */
  async describeBgpPackByIp(request: DescribeBgpPackByIpRequest): Promise<DescribeBgpPackByIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBgpPackByIpWithOptions(request, runtime);
  }

  /**
   * Queries the download link to the traffic data that is captured when a DDoS attack event occurs.
   * 
   * @remarks
   * You can call the DescribeCap operation to query the download link to the traffic data that is captured when a DDoS attack event occurs. You can download the traffic data from the download link and use the data as evidence.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCapResponse
   */
  async describeCapWithOptions(request: DescribeCapRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCapResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.begTime)) {
      query["BegTime"] = request.begTime;
    }

    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCap",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCapResponse>(await this.callApi(params, req, runtime), new DescribeCapResponse({}));
    } else {
      return $dara.cast<DescribeCapResponse>(await this.execute(params, req, runtime), new DescribeCapResponse({}));
    }

  }

  /**
   * Queries the download link to the traffic data that is captured when a DDoS attack event occurs.
   * 
   * @remarks
   * You can call the DescribeCap operation to query the download link to the traffic data that is captured when a DDoS attack event occurs. You can download the traffic data from the download link and use the data as evidence.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCapRequest
   * @returns DescribeCapResponse
   */
  async describeCap(request: DescribeCapRequest): Promise<DescribeCapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCapWithOptions(request, runtime);
  }

  /**
   * Queries the number of assets that are under DDoS attacks in a specific region. The assets are assigned public IP addresses.
   * 
   * @remarks
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDdosCountResponse
   */
  async describeDdosCountWithOptions(request: DescribeDdosCountRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDdosCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDdosCount",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDdosCountResponse>(await this.callApi(params, req, runtime), new DescribeDdosCountResponse({}));
    } else {
      return $dara.cast<DescribeDdosCountResponse>(await this.execute(params, req, runtime), new DescribeDdosCountResponse({}));
    }

  }

  /**
   * Queries the number of assets that are under DDoS attacks in a specific region. The assets are assigned public IP addresses.
   * 
   * @remarks
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosCountRequest
   * @returns DescribeDdosCountResponse
   */
  async describeDdosCount(request: DescribeDdosCountRequest): Promise<DescribeDdosCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDdosCountWithOptions(request, runtime);
  }

  /**
   * Queries the details of the security credit score of the current Alibaba Cloud account in a specific region.
   * 
   * @remarks
   * You can call the DescribeDdosCredit operation to query the details of the security credit score of the current Alibaba Cloud account in a specific region. The details include the security credit score, security credit level, and the time period after which blackhole filtering is automatically deactivated.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosCreditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDdosCreditResponse
   */
  async describeDdosCreditWithOptions(request: DescribeDdosCreditRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDdosCreditResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDdosCredit",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDdosCreditResponse>(await this.callApi(params, req, runtime), new DescribeDdosCreditResponse({}));
    } else {
      return $dara.cast<DescribeDdosCreditResponse>(await this.execute(params, req, runtime), new DescribeDdosCreditResponse({}));
    }

  }

  /**
   * Queries the details of the security credit score of the current Alibaba Cloud account in a specific region.
   * 
   * @remarks
   * You can call the DescribeDdosCredit operation to query the details of the security credit score of the current Alibaba Cloud account in a specific region. The details include the security credit score, security credit level, and the time period after which blackhole filtering is automatically deactivated.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosCreditRequest
   * @returns DescribeDdosCreditResponse
   */
  async describeDdosCredit(request: DescribeDdosCreditRequest): Promise<DescribeDdosCreditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDdosCreditWithOptions(request, runtime);
  }

  /**
   * Queries the details of the DDoS attack events that occur on an asset. The asset is assigned a public IP address.
   * 
   * @remarks
   * You can call the DescribeDdosEventList operation to query the details of the DDoS attack events that occur on an asset by page. The details include the start time, end time, and status of each DDoS attack event.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDdosEventListResponse
   */
  async describeDdosEventListWithOptions(request: DescribeDdosEventListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDdosEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDdosEventList",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDdosEventListResponse>(await this.callApi(params, req, runtime), new DescribeDdosEventListResponse({}));
    } else {
      return $dara.cast<DescribeDdosEventListResponse>(await this.execute(params, req, runtime), new DescribeDdosEventListResponse({}));
    }

  }

  /**
   * Queries the details of the DDoS attack events that occur on an asset. The asset is assigned a public IP address.
   * 
   * @remarks
   * You can call the DescribeDdosEventList operation to query the details of the DDoS attack events that occur on an asset by page. The details include the start time, end time, and status of each DDoS attack event.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosEventListRequest
   * @returns DescribeDdosEventListResponse
   */
  async describeDdosEventList(request: DescribeDdosEventListRequest): Promise<DescribeDdosEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDdosEventListWithOptions(request, runtime);
  }

  /**
   * Queries the details of the DDoS mitigation thresholds or traffic scrubbing thresholds for specified assets. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * You can call the DescribeDdosThreshold operation to query the details of the DDoS mitigation thresholds or traffic scrubbing thresholds for specified assets. The details include the current traffic scrubbing threshold, maximum traffic scrubbing threshold, current DDoS mitigation threshold, and maximum DDoS mitigation threshold.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDdosThresholdResponse
   */
  async describeDdosThresholdWithOptions(request: DescribeDdosThresholdRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDdosThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.ddosType)) {
      query["DdosType"] = request.ddosType;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDdosThreshold",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDdosThresholdResponse>(await this.callApi(params, req, runtime), new DescribeDdosThresholdResponse({}));
    } else {
      return $dara.cast<DescribeDdosThresholdResponse>(await this.execute(params, req, runtime), new DescribeDdosThresholdResponse({}));
    }

  }

  /**
   * Queries the details of the DDoS mitigation thresholds or traffic scrubbing thresholds for specified assets. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * You can call the DescribeDdosThreshold operation to query the details of the DDoS mitigation thresholds or traffic scrubbing thresholds for specified assets. The details include the current traffic scrubbing threshold, maximum traffic scrubbing threshold, current DDoS mitigation threshold, and maximum DDoS mitigation threshold.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosThresholdRequest
   * @returns DescribeDdosThresholdResponse
   */
  async describeDdosThreshold(request: DescribeDdosThresholdRequest): Promise<DescribeDdosThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDdosThresholdWithOptions(request, runtime);
  }

  /**
   * Queries the details of the assets within the current Alibaba Cloud account. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses. This operation is phased out. We recommend that you use the DescribeInstanceIpAddress operation.
   * 
   * @remarks
   * You can call the DescribeInstance operation to query the details of the assets that are within the current Alibaba Cloud account by page. The details include the IDs and IP addresses of the assets, the basic protection thresholds and traffic scrubbing thresholds that are configured for the assets in Anti-DDoS Origin, and whether the assets are associated with Anti-DDoS Origin instances.
   * ### [](#qps-)Limits
   * You can call this operation up to 200 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.ddosStatus)) {
      query["DdosStatus"] = request.ddosStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIp)) {
      query["InstanceIp"] = request.instanceIp;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstance",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceResponse>(await this.callApi(params, req, runtime), new DescribeInstanceResponse({}));
    } else {
      return $dara.cast<DescribeInstanceResponse>(await this.execute(params, req, runtime), new DescribeInstanceResponse({}));
    }

  }

  /**
   * Queries the details of the assets within the current Alibaba Cloud account. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses. This operation is phased out. We recommend that you use the DescribeInstanceIpAddress operation.
   * 
   * @remarks
   * You can call the DescribeInstance operation to query the details of the assets that are within the current Alibaba Cloud account by page. The details include the IDs and IP addresses of the assets, the basic protection thresholds and traffic scrubbing thresholds that are configured for the assets in Anti-DDoS Origin, and whether the assets are associated with Anti-DDoS Origin instances.
   * ### [](#qps-)Limits
   * You can call this operation up to 200 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceRequest
   * @returns DescribeInstanceResponse
   */
  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the details of the assets within the current Alibaba Cloud account and the details of the Anti-DDoS Origin instance to which the assets belong. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * If one or more assets of the current Alibaba Cloud account are added to an Anti-DDoS Origin instance, you can call the DescribeInstanceIpAddress operation to query the DDoS mitigation information and the details of the Anti-DDoS Origin instance. The information and the details include the basic protection threshold and traffic scrubbing threshold for the assets, DDoS mitigation status of the assets, ID of the instance, and the mitigation status of the instance.
   * ## Limits
   * You can call this operation up to 200 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceIpAddressResponse
   */
  async describeInstanceIpAddressWithOptions(request: DescribeInstanceIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceIpAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.ddosStatus)) {
      query["DdosStatus"] = request.ddosStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIp)) {
      query["InstanceIp"] = request.instanceIp;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceIpAddress",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceIpAddressResponse>(await this.callApi(params, req, runtime), new DescribeInstanceIpAddressResponse({}));
    } else {
      return $dara.cast<DescribeInstanceIpAddressResponse>(await this.execute(params, req, runtime), new DescribeInstanceIpAddressResponse({}));
    }

  }

  /**
   * Queries the details of the assets within the current Alibaba Cloud account and the details of the Anti-DDoS Origin instance to which the assets belong. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * If one or more assets of the current Alibaba Cloud account are added to an Anti-DDoS Origin instance, you can call the DescribeInstanceIpAddress operation to query the DDoS mitigation information and the details of the Anti-DDoS Origin instance. The information and the details include the basic protection threshold and traffic scrubbing threshold for the assets, DDoS mitigation status of the assets, ID of the instance, and the mitigation status of the instance.
   * ## Limits
   * You can call this operation up to 200 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceIpAddressRequest
   * @returns DescribeInstanceIpAddressResponse
   */
  async describeInstanceIpAddress(request: DescribeInstanceIpAddressRequest): Promise<DescribeInstanceIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceIpAddressWithOptions(request, runtime);
  }

  /**
   * Queries the details of the DDoS mitigation thresholds or traffic scrubbing thresholds for specified assets. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * If one or more assets of the current Alibaba Cloud account are added to an Anti-DDoS Origin instance, you can call the DescribeIpDdosThreshold operation to query the details of the DDoS mitigation threshold or traffic scrubbing threshold for a specific asset. The details include the current traffic scrubbing threshold, maximum scrubbing threshold, current DDoS mitigation threshold, and maximum DDoS mitigation threshold.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeIpDdosThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpDdosThresholdResponse
   */
  async describeIpDdosThresholdWithOptions(request: DescribeIpDdosThresholdRequest, runtime: $dara.RuntimeOptions): Promise<DescribeIpDdosThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.ddosType)) {
      query["DdosType"] = request.ddosType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIpDdosThreshold",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeIpDdosThresholdResponse>(await this.callApi(params, req, runtime), new DescribeIpDdosThresholdResponse({}));
    } else {
      return $dara.cast<DescribeIpDdosThresholdResponse>(await this.execute(params, req, runtime), new DescribeIpDdosThresholdResponse({}));
    }

  }

  /**
   * Queries the details of the DDoS mitigation thresholds or traffic scrubbing thresholds for specified assets. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * If one or more assets of the current Alibaba Cloud account are added to an Anti-DDoS Origin instance, you can call the DescribeIpDdosThreshold operation to query the details of the DDoS mitigation threshold or traffic scrubbing threshold for a specific asset. The details include the current traffic scrubbing threshold, maximum scrubbing threshold, current DDoS mitigation threshold, and maximum DDoS mitigation threshold.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeIpDdosThresholdRequest
   * @returns DescribeIpDdosThresholdResponse
   */
  async describeIpDdosThreshold(request: DescribeIpDdosThresholdRequest): Promise<DescribeIpDdosThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpDdosThresholdWithOptions(request, runtime);
  }

  /**
   * Queries the region to which the public IP address of the asset within the current Alibaba Cloud account belongs. The asset can be an elastic IP address (EIP). The asset can also be an Elastic Compute Service (ECS) instance or Server Load Balancer (SLB) instance that is assigned a public IP address.
   * 
   * @remarks
   * You can call the DescribeIpLocationService operation to query the region of the public IP address for a specified asset that is within the current Alibaba Cloud account. You can also query the details of the Anti-DDoS Origin instance to which the asset is added. The details include the ID and name.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeIpLocationServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpLocationServiceResponse
   */
  async describeIpLocationServiceWithOptions(request: DescribeIpLocationServiceRequest, runtime: $dara.RuntimeOptions): Promise<DescribeIpLocationServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIpLocationService",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeIpLocationServiceResponse>(await this.callApi(params, req, runtime), new DescribeIpLocationServiceResponse({}));
    } else {
      return $dara.cast<DescribeIpLocationServiceResponse>(await this.execute(params, req, runtime), new DescribeIpLocationServiceResponse({}));
    }

  }

  /**
   * Queries the region to which the public IP address of the asset within the current Alibaba Cloud account belongs. The asset can be an elastic IP address (EIP). The asset can also be an Elastic Compute Service (ECS) instance or Server Load Balancer (SLB) instance that is assigned a public IP address.
   * 
   * @remarks
   * You can call the DescribeIpLocationService operation to query the region of the public IP address for a specified asset that is within the current Alibaba Cloud account. You can also query the details of the Anti-DDoS Origin instance to which the asset is added. The details include the ID and name.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeIpLocationServiceRequest
   * @returns DescribeIpLocationServiceResponse
   */
  async describeIpLocationService(request: DescribeIpLocationServiceRequest): Promise<DescribeIpLocationServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpLocationServiceWithOptions(request, runtime);
  }

  /**
   * Queries the regions in which Anti-DDoS Origin Basic is available.
   * 
   * @remarks
   * You can call this operation to query information about the regions in which Anti-DDoS Origin Basic is available. The information includes the region ID, region name, and code.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
    } else {
      return $dara.cast<DescribeRegionsResponse>(await this.execute(params, req, runtime), new DescribeRegionsResponse({}));
    }

  }

  /**
   * Queries the regions in which Anti-DDoS Origin Basic is available.
   * 
   * @remarks
   * You can call this operation to query information about the regions in which Anti-DDoS Origin Basic is available. The information includes the region ID, region name, and code.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * Changes the scrubbing thresholds for an asset that is assigned a public IP address.
   * 
   * @remarks
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyDefenseThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseThresholdResponse
   */
  async modifyDefenseThresholdWithOptions(request: ModifyDefenseThresholdRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDefenseThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bps)) {
      query["Bps"] = request.bps;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    if (!$dara.isNull(request.isAuto)) {
      query["IsAuto"] = request.isAuto;
    }

    if (!$dara.isNull(request.pps)) {
      query["Pps"] = request.pps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDefenseThreshold",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDefenseThresholdResponse>(await this.callApi(params, req, runtime), new ModifyDefenseThresholdResponse({}));
    } else {
      return $dara.cast<ModifyDefenseThresholdResponse>(await this.execute(params, req, runtime), new ModifyDefenseThresholdResponse({}));
    }

  }

  /**
   * Changes the scrubbing thresholds for an asset that is assigned a public IP address.
   * 
   * @remarks
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyDefenseThresholdRequest
   * @returns ModifyDefenseThresholdResponse
   */
  async modifyDefenseThreshold(request: ModifyDefenseThresholdRequest): Promise<ModifyDefenseThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDefenseThresholdWithOptions(request, runtime);
  }

  /**
   * Modifies the scrubbing thresholds for an asset that is assigned a public IP address. This operation is a synchronous operation that supports Terraform.
   * 
   * @remarks
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyIpDefenseThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIpDefenseThresholdResponse
   */
  async modifyIpDefenseThresholdWithOptions(request: ModifyIpDefenseThresholdRequest, runtime: $dara.RuntimeOptions): Promise<ModifyIpDefenseThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bps)) {
      query["Bps"] = request.bps;
    }

    if (!$dara.isNull(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    if (!$dara.isNull(request.isAuto)) {
      query["IsAuto"] = request.isAuto;
    }

    if (!$dara.isNull(request.pps)) {
      query["Pps"] = request.pps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIpDefenseThreshold",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyIpDefenseThresholdResponse>(await this.callApi(params, req, runtime), new ModifyIpDefenseThresholdResponse({}));
    } else {
      return $dara.cast<ModifyIpDefenseThresholdResponse>(await this.execute(params, req, runtime), new ModifyIpDefenseThresholdResponse({}));
    }

  }

  /**
   * Modifies the scrubbing thresholds for an asset that is assigned a public IP address. This operation is a synchronous operation that supports Terraform.
   * 
   * @remarks
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyIpDefenseThresholdRequest
   * @returns ModifyIpDefenseThresholdResponse
   */
  async modifyIpDefenseThreshold(request: ModifyIpDefenseThresholdRequest): Promise<ModifyIpDefenseThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyIpDefenseThresholdWithOptions(request, runtime);
  }

}
