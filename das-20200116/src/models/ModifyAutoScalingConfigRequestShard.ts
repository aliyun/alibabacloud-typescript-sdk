// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

