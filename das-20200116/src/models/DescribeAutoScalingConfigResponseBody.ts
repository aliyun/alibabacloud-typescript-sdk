// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoScalingConfigResponseBodyDataBandwidth extends $dara.Model {
  /**
   * @remarks
   * The average bandwidth usage threshold that triggers automatic bandwidth downgrade. Unit: %.
   * 
   * @example
   * 30
   */
  bandwidthUsageLowerThreshold?: number;
  /**
   * @remarks
   * The average bandwidth usage threshold that triggers automatic bandwidth upgrade. Unit: %.
   * 
   * @example
   * 70
   */
  bandwidthUsageUpperThreshold?: number;
  /**
   * @remarks
   * Indicates whether automatic bandwidth downgrade is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  downgrade?: boolean;
  /**
   * @remarks
   * The observation window for automatic bandwidth upgrade. The value consists of a number and a time unit suffix. The time unit suffixes are:
   * 
   * - **s**: seconds.
   * - **m**: minutes.
   * - **h**: hours.
   * - **d**: days. 
   * 
   * > For example, **5m** indicates 5 minutes.
   * 
   * @example
   * 5m
   */
  observationWindowSize?: string;
  /**
   * @remarks
   * Indicates whether automatic bandwidth upgrade is enabled. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      bandwidthUsageLowerThreshold: 'BandwidthUsageLowerThreshold',
      bandwidthUsageUpperThreshold: 'BandwidthUsageUpperThreshold',
      downgrade: 'Downgrade',
      observationWindowSize: 'ObservationWindowSize',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthUsageLowerThreshold: 'number',
      bandwidthUsageUpperThreshold: 'number',
      downgrade: 'boolean',
      observationWindowSize: 'string',
      upgrade: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigResponseBodyDataResource extends $dara.Model {
  /**
   * @remarks
   * The CPU scale-up increment.
   * 
   * @example
   * 2
   */
  cpuStep?: number;
  /**
   * @remarks
   * The average CPU utilization threshold that triggers automatic local resource scale-up. Unit: %.
   * 
   * @example
   * 70
   */
  cpuUsageUpperThreshold?: number;
  /**
   * @remarks
   * The scale-down observation window. The value consists of a number and a time unit suffix. The time unit suffixes are:
   * 
   * - **s**: seconds.
   * - **m**: minutes.
   * - **h**: hours.
   * - **d**: days. 
   * 
   * > For example, **5m** indicates 5 minutes.
   * 
   * @example
   * 5m
   */
  downgradeObservationWindowSize?: string;
  /**
   * @remarks
   * Indicates whether local resource elastic scaling is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The scale-up observation window. The value consists of a number and a time unit suffix. The time unit suffixes are:
   * 
   * - **s**: seconds.
   * - **m**: minutes.
   * - **h**: hours.
   * - **d**: days. 
   * 
   * > For example, **5m** indicates 5 minutes.
   * 
   * @example
   * 5m
   */
  upgradeObservationWindowSize?: string;
  static names(): { [key: string]: string } {
    return {
      cpuStep: 'CpuStep',
      cpuUsageUpperThreshold: 'CpuUsageUpperThreshold',
      downgradeObservationWindowSize: 'DowngradeObservationWindowSize',
      enable: 'Enable',
      upgradeObservationWindowSize: 'UpgradeObservationWindowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuStep: 'number',
      cpuUsageUpperThreshold: 'number',
      downgradeObservationWindowSize: 'string',
      enable: 'boolean',
      upgradeObservationWindowSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigResponseBodyDataShard extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic shard removal is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  downgrade?: boolean;
  /**
   * @remarks
   * The observation window for automatic shard removal. The value consists of a number and a time unit suffix. The time unit suffixes are:
   * - **s**: seconds.
   * - **m**: minutes.
   * - **h**: hours.
   * - **d**: days. 
   * 
   * > For example, **1d** indicates 1 day.
   * 
   * @example
   * 1d
   */
  downgradeObservationWindowSize?: string;
  /**
   * @remarks
   * The maximum total number of shards for the instance.
   * 
   * @example
   * 16
   */
  maxShards?: number;
  /**
   * @remarks
   * The average memory utilization threshold that triggers automatic shard removal. Unit: %.
   * 
   * @example
   * 30
   */
  memUsageLowerThreshold?: number;
  /**
   * @remarks
   * The average memory utilization threshold that triggers automatic shard addition. Unit: %.
   * 
   * @example
   * 70
   */
  memUsageUpperThreshold?: number;
  /**
   * @remarks
   * The minimum total number of shards for the instance.
   * 
   * @example
   * 4
   */
  minShards?: number;
  /**
   * @remarks
   * Indicates whether automatic shard addition is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  upgrade?: boolean;
  /**
   * @remarks
   * The observation window for automatic shard addition. The value consists of a number and a time unit suffix. The time unit suffixes are:
   * 
   * - **s**: seconds.
   * - **m**: minutes.
   * - **h**: hours.
   * - **d**: days. 
   * 
   * > For example, **5m** indicates 5 minutes.
   * 
   * @example
   * 5m
   */
  upgradeObservationWindowSize?: string;
  static names(): { [key: string]: string } {
    return {
      downgrade: 'Downgrade',
      downgradeObservationWindowSize: 'DowngradeObservationWindowSize',
      maxShards: 'MaxShards',
      memUsageLowerThreshold: 'MemUsageLowerThreshold',
      memUsageUpperThreshold: 'MemUsageUpperThreshold',
      minShards: 'MinShards',
      upgrade: 'Upgrade',
      upgradeObservationWindowSize: 'UpgradeObservationWindowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downgrade: 'boolean',
      downgradeObservationWindowSize: 'string',
      maxShards: 'number',
      memUsageLowerThreshold: 'number',
      memUsageUpperThreshold: 'number',
      minShards: 'number',
      upgrade: 'boolean',
      upgradeObservationWindowSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigResponseBodyDataSpec extends $dara.Model {
  /**
   * @remarks
   * The cool-down period. The value consists of a number and a time unit suffix. The time unit suffixes are:
   * 
   * - **s**: seconds.
   * - **m**: minutes.
   * - **h**: hours.
   * - **d**: days. 
   * 
   * > For example, **5m** indicates 5 minutes.
   * 
   * @example
   * 5m
   */
  coolDownTime?: string;
  /**
   * @remarks
   * The average CPU utilization threshold that triggers automatic specification scale-up. Unit: %.
   * 
   * @example
   * 70
   */
  cpuUsageUpperThreshold?: number;
  /**
   * @remarks
   * Indicates whether automatic specification scale-down is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  downgrade?: boolean;
  /**
   * @remarks
   * The maximum number of read-only nodes for the instance.
   * 
   * @example
   * 10
   */
  maxReadOnlyNodes?: number;
  /**
   * @remarks
   * The maximum specification for automatic scale-up. For details, refer to the product specification documentation for each database instance:
   * <props="china">
   * 
   * - For PolarDB for MySQL Cluster Edition, see [Compute node specifications](https://help.aliyun.com/document_detail/102542.html).
   * - For ApsaraDB RDS for MySQL high-availability series with cloud disks, see [Product specifications](https://help.aliyun.com/document_detail/276974.html).
   * - For Redis community cloud disk edition, see [Instance specifications](https://help.aliyun.com/document_detail/144986.html).
   * 
   * 
   * 
   * <props="intl">
   * 
   * - For PolarDB for MySQL Cluster Edition, see [Compute node specifications](https://help.aliyun.com/document_detail/102542.html).
   * - For ApsaraDB RDS for MySQL high-availability series with cloud disks, see [Product specifications](https://help.aliyun.com/document_detail/276974.html).
   * 
   * @example
   * polar.mysql.x8.12xlarge
   */
  maxSpec?: string;
  /**
   * @remarks
   * The average memory utilization threshold that triggers automatic specification scale-up. Unit: %.
   * 
   * @example
   * 70
   */
  memUsageUpperThreshold?: number;
  /**
   * @remarks
   * The observation window. The value consists of a number and a time unit suffix. The time unit suffixes are:
   * 
   * - **s**: seconds.
   * - **m**: minutes.
   * - **h**: hours.
   * - **d**: days. 
   * 
   * > For example, **5m** indicates 5 minutes.
   * 
   * @example
   * 5m
   */
  observationWindowSize?: string;
  /**
   * @remarks
   * Indicates whether automatic specification scale-up is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      coolDownTime: 'CoolDownTime',
      cpuUsageUpperThreshold: 'CpuUsageUpperThreshold',
      downgrade: 'Downgrade',
      maxReadOnlyNodes: 'MaxReadOnlyNodes',
      maxSpec: 'MaxSpec',
      memUsageUpperThreshold: 'MemUsageUpperThreshold',
      observationWindowSize: 'ObservationWindowSize',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coolDownTime: 'string',
      cpuUsageUpperThreshold: 'number',
      downgrade: 'boolean',
      maxReadOnlyNodes: 'number',
      maxSpec: 'string',
      memUsageUpperThreshold: 'number',
      observationWindowSize: 'string',
      upgrade: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigResponseBodyDataStorage extends $dara.Model {
  /**
   * @remarks
   * The average storage utilization threshold that triggers automatic storage scaling. Unit: %.
   * 
   * @example
   * 70
   */
  diskUsageUpperThreshold?: number;
  /**
   * @remarks
   * The maximum storage capacity. Unit: GB.
   * 
   * @example
   * 32000
   */
  maxStorage?: number;
  /**
   * @remarks
   * Indicates whether automatic storage scaling is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      diskUsageUpperThreshold: 'DiskUsageUpperThreshold',
      maxStorage: 'MaxStorage',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskUsageUpperThreshold: 'number',
      maxStorage: 'number',
      upgrade: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bandwidth elastic scaling feature configuration of the instance.
   */
  bandwidth?: DescribeAutoScalingConfigResponseBodyDataBandwidth;
  /**
   * @remarks
   * The local resource elastic scaling feature configuration of the instance.
   */
  resource?: DescribeAutoScalingConfigResponseBodyDataResource;
  /**
   * @remarks
   * The shard elastic scaling feature configuration of the instance.
   */
  shard?: DescribeAutoScalingConfigResponseBodyDataShard;
  /**
   * @remarks
   * The specification elastic scaling feature configuration.
   */
  spec?: DescribeAutoScalingConfigResponseBodyDataSpec;
  /**
   * @remarks
   * The Automatic storage scaling feature configuration of the instance.
   */
  storage?: DescribeAutoScalingConfigResponseBodyDataStorage;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      resource: 'Resource',
      shard: 'Shard',
      spec: 'Spec',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: DescribeAutoScalingConfigResponseBodyDataBandwidth,
      resource: DescribeAutoScalingConfigResponseBodyDataResource,
      shard: DescribeAutoScalingConfigResponseBodyDataShard,
      spec: DescribeAutoScalingConfigResponseBodyDataSpec,
      storage: DescribeAutoScalingConfigResponseBodyDataStorage,
    };
  }

  validate() {
    if(this.bandwidth && typeof (this.bandwidth as any).validate === 'function') {
      (this.bandwidth as any).validate();
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(this.shard && typeof (this.shard as any).validate === 'function') {
      (this.shard as any).validate();
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(this.storage && typeof (this.storage as any).validate === 'function') {
      (this.storage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The elastic scaling feature configuration of the instance.
   */
  data?: DescribeAutoScalingConfigResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeAutoScalingConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

