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
   * The average bandwidth usage threshold that triggers automatic bandwidth adjustment. Unit: %.
   * 
   * @example
   * 70
   */
  bandwidthUsageUpperThreshold?: number;
  /**
   * @remarks
   * Indicates whether the automatic bandwidth downgrade feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  downgrade?: boolean;
  /**
   * @remarks
   * The observation window of the automatic bandwidth adjustment feature. The return value consists of a numeric value and a time unit suffix. Valid values of the time unit suffix:
   * 
   * *   **s**: seconds.
   * *   **m**: minutes.
   * *   **h**: hours.
   * *   **d**: days.
   * 
   * >  A value of **5m** indicates 5 minutes.
   * 
   * @example
   * 5m
   */
  observationWindowSize?: string;
  /**
   * @remarks
   * Indicates whether the automatic bandwidth adjustment feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The scale-out step size of CPU.
   * 
   * @example
   * 2
   */
  cpuStep?: number;
  /**
   * @remarks
   * The average CPU utilization threshold that triggers automatic scale-out of local resources. Unit: %.
   * 
   * @example
   * 70
   */
  cpuUsageUpperThreshold?: number;
  /**
   * @remarks
   * The observation window of the automatic scale-in feature for local resources. The return value consists of a numeric value and a time unit suffix. Valid values of the time unit suffix:
   * 
   * *   **s**: seconds.
   * *   **m**: minutes.
   * *   **h**: hours.
   * *   **d**: days.
   * 
   * >  A value of **5m** indicates 5 minutes.
   * 
   * @example
   * 5m
   */
  downgradeObservationWindowSize?: string;
  /**
   * @remarks
   * Indicates whether the auto scaling feature is enabled for local resources. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The observation window of the automatic scale-out feature for local resources. The return value consists of a numeric value and a time unit suffix. Valid values of the time unit suffix:
   * 
   * *   **s**: seconds.
   * *   **m**: minutes.
   * *   **h**: hours.
   * *   **d**: days.
   * 
   * >  A value of **5m** indicates 5 minutes.
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
   * Indicates whether the feature of automatically removing shards is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  downgrade?: boolean;
  /**
   * @remarks
   * The observation window of the feature of automatically removing shards. The return value consists of a numeric value and a time unit suffix. Valid values of the time unit suffix:
   * 
   * *   **s**: seconds.
   * *   **m**: minutes.
   * *   **h**: hours.
   * *   **d**: days.
   * 
   * >  A value of **1d** indicates one day.
   * 
   * @example
   * 1d
   */
  downgradeObservationWindowSize?: string;
  /**
   * @remarks
   * The maximum number of shards in the instance.
   * 
   * @example
   * 16
   */
  maxShards?: number;
  /**
   * @remarks
   * The average memory usage threshold that triggers automatic removal of shards. Unit: %.
   * 
   * @example
   * 30
   */
  memUsageLowerThreshold?: number;
  /**
   * @remarks
   * The average memory usage threshold that triggers automatic adding of shards. Unit: %.
   * 
   * @example
   * 70
   */
  memUsageUpperThreshold?: number;
  /**
   * @remarks
   * The minimum number of shards in the instance.
   * 
   * @example
   * 4
   */
  minShards?: number;
  /**
   * @remarks
   * Indicates whether the feature of automatically adding shards is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  upgrade?: boolean;
  /**
   * @remarks
   * The observation window of the feature of automatically adding shards. The return value consists of a numeric value and a time unit suffix. Valid values of the time unit suffix:
   * 
   * *   **s**: seconds.
   * *   **m**: minutes.
   * *   **h**: hours.
   * *   **d**: days.
   * 
   * >  A value of **5m** indicates 5 minutes.
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
   * The quiescent period. The return value consists of a numeric value and a time unit suffix. Valid values of the time unit suffix:
   * 
   * *   **s**: seconds.
   * *   **m**: minutes.
   * *   **h**: hours.
   * *   **d**: days.
   * 
   * >  A value of **5m** indicates 5 minutes.
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
   * Indicates whether the automatic specification scale-down feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  downgrade?: boolean;
  /**
   * @remarks
   * The maximum number of read-only nodes of the instance.
   * 
   * @example
   * 10
   */
  maxReadOnlyNodes?: number;
  /**
   * @remarks
   * The maximum specifications to which the cluster can be scaled up. For more information about the specifications of each type of supported database instances, see the following topics:
   * 
   * *   PolarDB for MySQL Cluster Edition instances: [Compute node specifications of PolarDB for MySQL Enterprise Edition](https://help.aliyun.com/document_detail/102542.html)
   * *   ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or ESSDs: [Specifications](https://help.aliyun.com/document_detail/276974.html)
   * 
   * @example
   * polar.mysql.x8.12xlarge
   */
  maxSpec?: string;
  /**
   * @remarks
   * The average memory usage threshold that triggers automatic specification scale-up. Unit: %.
   * 
   * @example
   * 70
   */
  memUsageUpperThreshold?: number;
  /**
   * @remarks
   * The observation window. The return value consists of a numeric value and a time unit suffix. Valid values of the time unit suffix:
   * 
   * *   **s**: seconds.
   * *   **m**: minutes.
   * *   **h**: hours.
   * *   **d**: days.
   * 
   * >  A value of **5m** indicates 5 minutes.
   * 
   * @example
   * 5m
   */
  observationWindowSize?: string;
  /**
   * @remarks
   * Indicates whether the automatic specification scale-up feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The average storage usage threshold that triggers automatic storage expansion. Unit: %.
   * 
   * @example
   * 70
   */
  diskUsageUpperThreshold?: number;
  /**
   * @remarks
   * The maximum storage size. Unit: GB.
   * 
   * @example
   * 32000
   */
  maxStorage?: number;
  /**
   * @remarks
   * Indicates whether the automatic storage expansion feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The configurations of the automatic bandwidth adjustment feature.
   */
  bandwidth?: DescribeAutoScalingConfigResponseBodyDataBandwidth;
  /**
   * @remarks
   * The configurations of the auto scaling feature for local resources.
   */
  resource?: DescribeAutoScalingConfigResponseBodyDataResource;
  /**
   * @remarks
   * The configurations of the auto scaling feature for shards.
   */
  shard?: DescribeAutoScalingConfigResponseBodyDataShard;
  /**
   * @remarks
   * The configurations of the auto scaling feature for specifications.
   */
  spec?: DescribeAutoScalingConfigResponseBodyDataSpec;
  /**
   * @remarks
   * The configurations of the automatic storage expansion feature.
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
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The configurations of the auto scaling feature for instances.
   */
  data?: DescribeAutoScalingConfigResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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

