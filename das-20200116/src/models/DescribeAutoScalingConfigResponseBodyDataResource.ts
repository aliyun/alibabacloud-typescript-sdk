// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

