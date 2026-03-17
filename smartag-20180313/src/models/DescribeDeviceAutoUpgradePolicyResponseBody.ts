// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceAutoUpgradePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when upgrades start. The time was configured by using a cron expression.
   * 
   * Example value: `0 0 4 1/1 * ?`. The example value indicates that upgrades start at 04:00:00 (UTC+8) on the first day of each month.
   * 
   * @example
   * 0 0 4 1/1 * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * The time period during which upgrades are performed.
   * 
   * Valid values: **30 to 120**.
   * 
   * Unit: minutes.
   * 
   * @example
   * 60
   */
  duration?: string;
  /**
   * @remarks
   * The time differences between upgrades. Unit: minutes.
   * 
   * @example
   * 5
   */
  jitter?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0E20FBB8-BCFC-4F5E-BD94-77FF6A2133D0
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the SAG instance.
   * 
   * @example
   * sage62x022502****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * @example
   * sag-kxe2cv7hot7qrv****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The time zone in which the trigger period takes effect.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @remarks
   * The update type. Valid values:
   * 
   * *   **scheduled**: scheduled upgrade.
   * *   **boot**: automatic upgrade upon instance startup.
   * *   **manual**: manual upgrade.
   * 
   * @example
   * scheduled
   */
  upgradeType?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      duration: 'Duration',
      jitter: 'Jitter',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
      timeZone: 'TimeZone',
      upgradeType: 'UpgradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      duration: 'string',
      jitter: 'string',
      requestId: 'string',
      serialNumber: 'string',
      smartAGId: 'string',
      timeZone: 'string',
      upgradeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

