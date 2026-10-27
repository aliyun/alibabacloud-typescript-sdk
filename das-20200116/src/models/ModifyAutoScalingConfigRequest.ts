// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoScalingConfigRequestBandwidth extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to apply the configurations under the **Bandwidth** configuration item for the bandwidth elastic scaling feature:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  apply?: boolean;
  /**
   * @remarks
   * The threshold of average bandwidth usage that triggers automatic bandwidth downgrade. Unit: %. Valid values:
   * 
   * - **10**
   * - **20**
   * - **30**
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
   * The threshold of average bandwidth usage that triggers automatic bandwidth upgrade. Unit: %. Valid values:
   * 
   * - **50**
   * - **60**
   * - **70**
   * - **80**
   * - **90**
   * - **95**
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
   * Specifies whether to enable automatic bandwidth downgrade:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  downgrade?: boolean;
  /**
   * @remarks
   * The observation window for automatic bandwidth upgrade. The parameter value consists of a number and a time unit suffix. The time suffix **m** indicates minutes. Valid values:
   * 
   * - **1m**
   * - **5m**
   * - **10m**
   * - **15m**
   * - **30m**
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
   * Specifies whether to enable automatic bandwidth upgrade:
   * 
   * - **true**: Yes.
   * - **false**: No.
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
   * Specifies whether to apply the configurations under the **Resource** configuration item for the resource elastic scaling feature:
   * 
   * - **true**: Yes.
   * - **false**: No.
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
   * The threshold of average CPU utilization that triggers automatic resource scale-up. Unit: %. Valid values:
   * 
   * - **70**
   * - **80**
   * - **90**
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
   * The observation window for scale-down. The parameter value consists of a number and a time unit suffix. The time suffix **m** indicates minutes. Valid values:
   * 
   * - **1m**
   * - **3m**
   * - **5m**
   * - **10m**
   * - **20m**
   * - **30m**
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
   * Specifies whether to enable resource elastic scaling:
   * 
   * - **true**: Yes.
   * - **false**: No.
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
   * The observation window for scale-up. The parameter value consists of a number and a time unit suffix. The time suffix **m** indicates minutes. Valid values:
   * 
   * - **1m**
   * - **3m**
   * - **5m**
   * - **10m**
   * - **20m**
   * - **30m**
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
   * Specifies whether to apply the configurations under the **Shard** configuration item for the shard elastic scaling feature:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * >Notice: The shard elastic scaling feature is supported only when the target database instance is Tair (Redis® OSS-Compatible) cloud-native (formerly cloud disk) edition in cluster architecture on the China site.
   * 
   * @example
   * true
   */
  apply?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic shard reduction:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > The automatic shard reduction feature is currently in canary release.
   * 
   * @example
   * true
   */
  downgrade?: boolean;
  /**
   * @remarks
   * The observation window for automatic shard reduction. The parameter value consists of a number and a time unit suffix. The time suffix **h** indicates hours, and **d** indicates days. Valid values:
   * 
   * - **1h**
   * - **2h**
   * - **3h**
   * - **1d**
   * - **7d**
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
   * The maximum total number of shards for the instance. The value must be a positive integer. Valid values: 4 to 32.
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
   * The threshold of average memory utilization that triggers automatic shard reduction. Unit: %. Valid values:
   * 
   * - **10**
   * - **20**
   * - **30**
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
   * The threshold of average memory utilization that triggers automatic shard addition. Unit: %. Valid values:
   * 
   * - **50**
   * - **60**
   * - **70**
   * - **80**
   * - **90**
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
   * The minimum total number of shards for the instance. The value must be a positive integer. Valid values: 4 to 32.
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
   * Specifies whether to enable automatic shard addition:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  upgrade?: boolean;
  /**
   * @remarks
   * The observation window for automatic shard addition. The parameter value consists of a number and a time unit suffix. The time suffix **m** indicates minutes. Valid values:
   * 
   * - **5m**
   * - **10m**
   * - **15m**
   * - **30m**
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
   * Specifies whether to apply the configurations under the **Spec** configuration item for the specification elastic scaling feature:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  apply?: boolean;
  /**
   * @remarks
   * The cool-down period. The parameter value consists of a number and a time unit suffix. The supported database instances and valid values are as follows. The time suffix **m** indicates minutes, **h** indicates hours, and **d** indicates days:
   * 
   * - PolarDB for MySQL Cluster Edition: **5m**, **10m**, **30m**, **1h**, **2h**, **3h**, **1d**, and **7d**.
   * - ApsaraDB RDS for MySQL high availability series cloud disk edition: **5m**, **10m**, **30m**, **1h**, **2h**, **3h**, **1d**, and **7d**.
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
   * The threshold of average CPU utilization that triggers automatic specification scale-up. Unit: %. Valid values:
   * 
   * - **50**
   * - **60**
   * - **70**
   * - **80**
   * - **90**
   * 
   * >Notice: You must set this parameter when the target database instance is PolarDB for MySQL Cluster Edition or ApsaraDB RDS for MySQL high availability series cloud disk edition.
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
   * Specifies whether automatic specification scale-down is enabled:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * >Notice: You must set this parameter when the target database instance is PolarDB for MySQL Cluster Edition or ApsaraDB RDS for MySQL high availability series cloud disk edition.
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
   * The maximum number of read-only nodes for the instance.
   * 
   * >Notice: You must set this parameter when the target database instance is PolarDB for MySQL Cluster Edition.
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
   * The upper limit of the specification for automatic scale-up. You can only scale up to a higher specification within the same series of the database instance. For more details, see the specification documentation for each database instance:
   * <props="china">
   * 
   * - For PolarDB for MySQL Cluster Edition, see [Compute node specifications](https://help.aliyun.com/document_detail/102542.html).
   * - For ApsaraDB RDS for MySQL high availability series cloud disk edition, see [Product specifications](https://help.aliyun.com/document_detail/276974.html).
   * - For Tair (Redis® OSS-Compatible) cloud-native (formerly cloud disk) open-source edition, see [Instance specifications](https://help.aliyun.com/document_detail/144986.html).
   * 
   * 
   * 
   * <props="intl">
   * 
   * - For PolarDB for MySQL Cluster Edition, see [Compute node specifications](https://help.aliyun.com/document_detail/102542.html).
   * - For ApsaraDB RDS for MySQL high availability series cloud disk edition, see [Product specifications](https://help.aliyun.com/document_detail/276974.html).
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
   * The threshold of average memory utilization that triggers automatic specification scale-up. Unit: %. Valid values:
   * - **50**
   * - **60**
   * - **70**
   * - **80**
   * - **90**
   * 
   * >Notice: You must set this parameter when the target database instance is Tair (Redis® OSS-Compatible) cloud-native (formerly cloud disk) open-source edition on the China site.
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
   * The observation window. The parameter value consists of a number and a time unit suffix. The supported database instances and valid values are as follows. The time suffix **m** indicates minutes, and **h** indicates hours:
   * 
   * - PolarDB for MySQL Cluster Edition: **5m**, **10m**, **15m**, and **30m**.
   * - ApsaraDB RDS for MySQL high availability series cloud disk edition: **5m**, **20m**, **30m**, **40m**, and **1h**.
   * - Tair (Redis® OSS-Compatible) cloud-native (formerly cloud disk) open-source edition: **5m**, **10m**, **15m**, and **30m**.
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
   * Specifies whether to enable automatic specification scale-up:
   * 
   * - **true**: Yes.
   * - **false**: No.
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
   * Specifies whether to apply the configurations under the **Storage** configuration item for the automatic storage expansion feature:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  apply?: boolean;
  /**
   * @remarks
   * The threshold of average storage space utilization that triggers automatic storage expansion. Unit: %. Valid values:
   * - **50**
   * - **60**
   * - **70**
   * - **80**
   * - **90**
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
   * The upper limit of the storage space. The value must be greater than or equal to the current total storage space of the instance. Valid values:
   * 
   * - ESSD cloud disk upper limit: 32,000 GB.
   * - Standard SSD upper limit: 6,000 GB.
   * 
   * > Standard SSDs are retired. [Upgrade to ESSD cloud disks](https://help.aliyun.com/document_detail/314678.html).
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
   * Specifies whether to enable automatic storage expansion:
   * 
   * - **true**: Yes.
   * - **false**: No.
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
   * The configuration items for the bandwidth elastic scaling feature.
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
   * The configuration items for the resource elastic scaling feature.
   */
  resource?: ModifyAutoScalingConfigRequestResource;
  /**
   * @remarks
   * The configuration items for the shard elastic scaling feature.
   */
  shard?: ModifyAutoScalingConfigRequestShard;
  /**
   * @remarks
   * The configuration items for the specification elastic scaling feature.
   */
  spec?: ModifyAutoScalingConfigRequestSpec;
  /**
   * @remarks
   * The configuration items for the automatic storage expansion feature.
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

