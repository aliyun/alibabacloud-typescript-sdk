// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

