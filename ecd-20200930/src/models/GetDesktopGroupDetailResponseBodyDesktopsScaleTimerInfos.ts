// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDesktopGroupDetailResponseBodyDesktopsScaleTimerInfos extends $dara.Model {
  /**
   * @remarks
   * The number of cloud computers that you purchase in the cloud computer pool. This parameter is one of the auto scaling parameters. Valid values: 0 to 200.
   * 
   * @example
   * 5
   */
  buyResAmount?: number;
  /**
   * @remarks
   * The cron expression for the scheduled task.
   * 
   * @example
   * 0 0 0 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The duration that is retained after the session is disconnected. Unit: milliseconds. Valid values: 180000 to 345600000. That is, the session can be retained for 3 to 5760 minutes (4 days). If you specify the value to 0, the session is permanently retained.
   * 
   * When a session is disconnected, take note of the following situations: If an end user does not resume the session within the specified duration, the session is closed and all unsaved data is cleared. If the end user resumes the session within the specified duration, the end user can still access data of the session.
   * 
   * @example
   * 600000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for the multi-session many-to-many share.
   * 
   * Valid values:
   * 
   * *   0: depth-first.
   * *   1: breadth-first.
   * 
   * @example
   * 1
   */
  loadPolicy?: number;
  /**
   * @remarks
   * The maximum number of cloud computers in the cloud computer pool. This parameter is one of the auto scaling parameters. Valid values: 0 to 200.
   * 
   * @example
   * 100
   */
  maxResAmount?: number;
  /**
   * @remarks
   * The minimum number of cloud computers in the cloud computer pool. This parameter is one of the auto scaling parameters. Valid values: 0 to 200.
   * 
   * @example
   * 1
   */
  minResAmount?: number;
  /**
   * @remarks
   * The threshold for the ratio of connected sessions, which triggers automatic scaling of cloud computers within the multi-session many-to-many share. To calculate the ratio of connected sessions, use the following formula:
   * 
   * `Ratio of connected sessions = Number of connected sessions/(Total number of cloud computers × Maximum number of sessions allowed for each cloud computer) × 100%`.
   * 
   * If the session ratio exceeds the threshold, new cloud computers are provisioned. If it falls below the threshold, additional cloud computers are removed.
   * 
   * @example
   * 0.5
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The type of the scheduled task.
   * 
   * Valid values:
   * 
   * *   drop: decline policy
   * *   normal: normal policy
   * *   peak: peak hour policy
   * *   rise: rise policy
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

