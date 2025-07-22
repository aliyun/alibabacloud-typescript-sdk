// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoScalingConfigRequestBandwidth extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to apply the **Bandwidth** configuration of the bandwidth auto scaling feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  apply?: boolean;
  /**
   * @remarks
   * The average bandwidth usage threshold that triggers automatic bandwidth downgrade. Unit: %. Valid values:
   * 
   * *   **10**
   * *   **20**
   * *   **30**
   * 
   * @example
   * 30
   * 
   * **if can be null:**
   * true
   */
  bandwidthUsageLowerThreshold?: number;
  /**
   * @remarks
   * The average bandwidth usage threshold that triggers automatic bandwidth upgrade. Unit: %. Valid values:
   * 
   * *   **50**
   * *   **60**
   * *   **70**
   * *   **80**
   * *   **90**
   * *   **95**
   * 
   * @example
   * 70
   * 
   * **if can be null:**
   * true
   */
  bandwidthUsageUpperThreshold?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic bandwidth downgrade. Valid values:
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
   * The observation window of the bandwidth auto scaling feature. The value of this parameter consists of a numeric value and a time unit suffix. The **m** time unit suffix specifies the minute. Valid values:
   * 
   * *   **1m**
   * *   **5m**
   * *   **10m**
   * *   **15m**
   * *   **30m**
   * 
   * @example
   * 5m
   * 
   * **if can be null:**
   * true
   */
  observationWindowSize?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic bandwidth upgrade. Valid values:
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
      apply: 'Apply',
      bandwidthUsageLowerThreshold: 'BandwidthUsageLowerThreshold',
      bandwidthUsageUpperThreshold: 'BandwidthUsageUpperThreshold',
      downgrade: 'Downgrade',
      observationWindowSize: 'ObservationWindowSize',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apply: 'boolean',
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

export class ModifyAutoScalingConfigRequestResource extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to apply the **Resource** configuration of the resource auto scaling feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  apply?: boolean;
  /**
   * @remarks
   * The average CPU utilization threshold that triggers automatic resource scale-out. Unit: %. Valid values:
   * 
   * *   **70**
   * *   **80**
   * *   **90**
   * 
   * @example
   * 70
   * 
   * **if can be null:**
   * true
   */
  cpuUsageUpperThreshold?: number;
  /**
   * @remarks
   * The observation window of the automatic resource scale-in feature. The value of this parameter consists of a numeric value and a time unit suffix. The **m** time unit suffix specifies the minute. Valid values:
   * 
   * *   **1m**
   * *   **3m**
   * *   **5m**
   * *   **10m**
   * *   **20m**
   * *   **30m**
   * 
   * @example
   * 5m
   * 
   * **if can be null:**
   * true
   */
  downgradeObservationWindowSize?: string;
  /**
   * @remarks
   * Specifies whether to enable resource auto scaling. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The observation window of the automatic resource scale-out feature. The value of this parameter consists of a numeric value and a time unit suffix. The **m** time unit suffix specifies the minute. Valid values:
   * 
   * *   **1m**
   * *   **3m**
   * *   **5m**
   * *   **10m**
   * *   **20m**
   * *   **30m**
   * 
   * @example
   * 5m
   * 
   * **if can be null:**
   * true
   */
  upgradeObservationWindowSize?: string;
  static names(): { [key: string]: string } {
    return {
      apply: 'Apply',
      cpuUsageUpperThreshold: 'CpuUsageUpperThreshold',
      downgradeObservationWindowSize: 'DowngradeObservationWindowSize',
      enable: 'Enable',
      upgradeObservationWindowSize: 'UpgradeObservationWindowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apply: 'boolean',
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

export class ModifyAutoScalingConfigRequestShard extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to apply the **Shard** configuration of the shard auto scaling feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  The shard auto scaling feature is available only for Tair (Redis OSS-compatible) cloud-native cluster instances on the China site (aliyun.com).
   * 
   * @example
   * true
   */
  apply?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic shard removal. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  The automatic shard removal feature is in a canary release.
   * 
   * @example
   * true
   */
  downgrade?: boolean;
  /**
   * @remarks
   * The observation window of the automatic shard removal feature. The value of this parameter consists of a numeric value and a time unit suffix. The **h** time unit suffix specifies the hour. The **d** time unit suffix specifies the day. Valid values:
   * 
   * *   **1h**
   * *   **2h**
   * *   **3h**
   * *   **1d**
   * *   **7d**
   * 
   * @example
   * 1h
   * 
   * **if can be null:**
   * true
   */
  downgradeObservationWindowSize?: string;
  /**
   * @remarks
   * The maximum number of shards in the instance. The value must be a positive integer. Valid values: 4 to 32.
   * 
   * @example
   * 16
   * 
   * **if can be null:**
   * true
   */
  maxShards?: number;
  /**
   * @remarks
   * The average memory usage threshold that triggers automatic shard removal. Unit: %. Valid values:
   * 
   * *   **10**
   * *   **20**
   * *   **30**
   * 
   * @example
   * 30
   * 
   * **if can be null:**
   * true
   */
  memUsageLowerThreshold?: number;
  /**
   * @remarks
   * The average memory usage threshold that triggers automatic shard addition. Unit: %. Valid values:
   * 
   * *   **50**
   * *   **60**
   * *   **70**
   * *   **80**
   * *   **90**
   * 
   * @example
   * 70
   * 
   * **if can be null:**
   * true
   */
  memUsageUpperThreshold?: number;
  /**
   * @remarks
   * The minimum number of shards in the instance. The value must be a positive integer. Valid values: 4 to 32.
   * 
   * @example
   * 4
   * 
   * **if can be null:**
   * true
   */
  minShards?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic shard addition. Valid values:
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
   * The observation window of the automatic shard addition feature. The value of this parameter consists of a numeric value and a time unit suffix. The **m** time unit suffix specifies the minute. Valid values:
   * 
   * *   **5m**
   * *   **10m**
   * *   **15m**
   * *   **30m**
   * 
   * @example
   * 5m
   * 
   * **if can be null:**
   * true
   */
  upgradeObservationWindowSize?: string;
  static names(): { [key: string]: string } {
    return {
      apply: 'Apply',
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
      apply: 'boolean',
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

export class ModifyAutoScalingConfigRequestSpec extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to apply the **Spec** configuration of the specification auto scaling feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  apply?: boolean;
  /**
   * @remarks
   * The quiescent period. The value of this parameter consists of a numeric value and a time unit suffix. The **m** time unit suffix specifies the minute, the **h** time unit suffix specifies the hour, and the **d** time unit suffix specifies the day.
   * 
   * *   Valid values for PolarDB for MySQL Cluster Edition instances: **5m**, **10m**, **30m**, **1h**, **2h**, **3h**, **1d**, and **7d**.
   * *   Valid values for ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or Enterprise SSDs (ESSDs): **5m**, **10m**, **30m**, **1h**, **2h**, **3h**, **1d**, and **7d**.
   * 
   * @example
   * 5m
   * 
   * **if can be null:**
   * true
   */
  coolDownTime?: string;
  /**
   * @remarks
   * The average CPU utilization threshold that triggers automatic specification scale-up. Unit: %. Valid values:
   * 
   * *   **50**
   * *   **60**
   * *   **70**
   * *   **80**
   * *   **90**
   * 
   * >  This parameter must be specified if the database instance is a PolarDB for MySQL Cluster Edition instance or an ApsaraDB RDS for MySQL High-availability Edition instance that uses standard SSDs or ESSDs.
   * 
   * @example
   * 70
   * 
   * **if can be null:**
   * true
   */
  cpuUsageUpperThreshold?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic specification scale-down. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter must be specified if the database instance is a PolarDB for MySQL Cluster Edition instance or an ApsaraDB RDS for MySQL High-availability Edition instance that uses standard SSDs or ESSDs.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  downgrade?: boolean;
  /**
   * @remarks
   * The maximum number of read-only nodes of the instance.
   * 
   * >  This parameter must be specified if the database instance is a PolarDB for MySQL Cluster Edition instance.
   * 
   * @example
   * 10
   * 
   * **if can be null:**
   * true
   */
  maxReadOnlyNodes?: number;
  /**
   * @remarks
   * The maximum specifications to which the database instance can be scaled up. The database instance can be upgraded only to a database instance of the same edition with higher specifications. For information about the specifications of different database instances, see the following topics:
   * 
   * *   PolarDB for MySQL Cluster Edition instances: [Specifications of compute nodes](https://help.aliyun.com/document_detail/102542.html)
   * *   ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or ESSDs: [Specifications](https://help.aliyun.com/document_detail/276974.html)
   * 
   * @example
   * polar.mysql.x8.12xlarge
   * 
   * **if can be null:**
   * true
   */
  maxSpec?: string;
  /**
   * @remarks
   * The average memory usage threshold that triggers automatic specification scale-up. Unit: %. Valid values:
   * 
   * *   **50**
   * *   **60**
   * *   **70**
   * *   **80**
   * *   **90**
   * 
   * >  This parameter must be specified if the database instance is a Tair (Redis OSS-compatible) Community Edition cloud-native instance on the China site (aliyun.com).
   * 
   * @example
   * 70
   * 
   * **if can be null:**
   * true
   */
  memUsageUpperThreshold?: number;
  /**
   * @remarks
   * The observation window. The value of this parameter consists of a numeric value and a time unit suffix. The **m** time unit suffix specifies the minute and the **h** time unit suffix specifies the hour.
   * 
   * *   Valid values for PolarDB for MySQL Cluster Edition instances: **5m**, **10m**, **15m**, and **30m**.
   * *   Valid values for ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or ESSDs: **5m**, **20m**, **30m**, **40m**, and **1h**.
   * *   Valid values for Tair (Redis OSS-compatible) Community Edition cloud-native instances: **5m**, **10m**, **15m**, and **30m**.
   * 
   * @example
   * 5m
   * 
   * **if can be null:**
   * true
   */
  observationWindowSize?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic specification scale-up. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      apply: 'Apply',
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
      apply: 'boolean',
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

export class ModifyAutoScalingConfigRequestStorage extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to apply the **Storage** configuration of the automatic storage expansion feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  apply?: boolean;
  /**
   * @remarks
   * The average storage usage threshold that triggers automatic storage expansion. Unit: %. Valid values:
   * 
   * *   **50**
   * *   **60**
   * *   **70**
   * *   **80**
   * *   **90**
   * 
   * @example
   * 70
   * 
   * **if can be null:**
   * true
   */
  diskUsageUpperThreshold?: number;
  /**
   * @remarks
   * The maximum storage size of the database instance. Unit: GB. The value must be greater than or equal to the total storage size of the instance.
   * 
   * *   If the instance uses ESSDs, the maximum value of this parameter can be 32000.
   * *   If the instance uses standard SSDs, the maximum value of this parameter can be 6000.
   * 
   * >  The standard SSD storage type is phased out. We recommend that you [upgrade the storage type of your instance from standard SSDs to ESSDs](https://help.aliyun.com/document_detail/314678.html).
   * 
   * @example
   * 32000
   * 
   * **if can be null:**
   * true
   */
  maxStorage?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic storage expansion. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      apply: 'Apply',
      diskUsageUpperThreshold: 'DiskUsageUpperThreshold',
      maxStorage: 'MaxStorage',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apply: 'boolean',
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

export class ModifyAutoScalingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration item of the bandwidth auto scaling feature.
   */
  bandwidth?: ModifyAutoScalingConfigRequestBandwidth;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration item of the resource auto scaling feature.
   */
  resource?: ModifyAutoScalingConfigRequestResource;
  /**
   * @remarks
   * The configuration item of the shard auto scaling feature.
   */
  shard?: ModifyAutoScalingConfigRequestShard;
  /**
   * @remarks
   * The configuration item of the specification auto scaling feature.
   */
  spec?: ModifyAutoScalingConfigRequestSpec;
  /**
   * @remarks
   * The configuration item of the automatic storage expansion feature.
   */
  storage?: ModifyAutoScalingConfigRequestStorage;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      instanceId: 'InstanceId',
      resource: 'Resource',
      shard: 'Shard',
      spec: 'Spec',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: ModifyAutoScalingConfigRequestBandwidth,
      instanceId: 'string',
      resource: ModifyAutoScalingConfigRequestResource,
      shard: ModifyAutoScalingConfigRequestShard,
      spec: ModifyAutoScalingConfigRequestSpec,
      storage: ModifyAutoScalingConfigRequestStorage,
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

