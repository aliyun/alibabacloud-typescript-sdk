// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDesktopGroupScaleTimerRequestScaleTimerInfos extends $dara.Model {
  /**
   * @remarks
   * One option for the auto scaling policy. This option specifies the number of cloud computers that you want to create in the cloud computer pool. Valid values: 0 to 200.
   * 
   * @example
   * 5
   */
  buyResAmount?: number;
  /**
   * @remarks
   * The cron expression of the trigger time.
   * 
   * @example
   * 0 0 12 ? * 1
   */
  cron?: string;
  /**
   * @remarks
   * The keep-alive duration of a session after the session is disconnected. Unit: milliseconds. Valid values: 180000 (3 minutes) to 345600000 (4 days). A value of 0 indicates that the session always keeps alive.
   * 
   * If a session is disconnected by the end user or accidentally due to a factor and the end user does not re-establish a connection with the session within the keep-alive duration, the session expires and unsaved data is deleted. If the end user successfully re-establishes a connection with the session within the keep-alive duration, the end user returns to the session and can still access the original data.
   * 
   * @example
   * 1000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for the multi-session cloud computer pool.
   * 
   * Valid values:
   * 
   * *   0: depth-first
   * *   1: breadth first.
   * 
   * @example
   * 0
   */
  loadPolicy?: number;
  /**
   * @remarks
   * One option for the auto scaling policy. This option specifies the maximum number of cloud computers that you can create in the cloud computer pool. Valid values: 0 to 200.
   * 
   * @example
   * 100
   */
  maxResAmount?: number;
  /**
   * @remarks
   * One option for the auto scaling policy. This option specifies the minimum number of cloud computers that you must create in the cloud computer pool. Valid values: 0 to 200.
   * 
   * @example
   * 5
   */
  minResAmount?: number;
  /**
   * @remarks
   * The threshold for the ratio of connected sessions. This parameter is the condition that triggers auto scaling in a multi-session cloud computer pool. Formula:
   * 
   * `Ratio of connected sessions = Number of connected sessions/(Total number of cloud computers × Maximum number of sessions allowed for each cloud computer) × 100%`.
   * 
   * When the specified threshold is reached, new cloud computers are automatically created. When the specified threshold is not reached, idle cloud computers are released.
   * 
   * @example
   * 0.9
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The type of the auto scaling policy.
   * 
   * Valid values:
   * 
   * *   drop
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   normal
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   peak
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   rise
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * rise
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      buyResAmount: 'BuyResAmount',
      cron: 'Cron',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxResAmount: 'MaxResAmount',
      minResAmount: 'MinResAmount',
      ratioThreshold: 'RatioThreshold',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyResAmount: 'number',
      cron: 'string',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxResAmount: 'number',
      minResAmount: 'number',
      ratioThreshold: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

