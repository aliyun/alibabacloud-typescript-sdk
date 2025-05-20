// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

