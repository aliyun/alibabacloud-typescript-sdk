// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDeviceAutoUpgradePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The time when upgrades start. Valid values: Set the parameter in a cron expression.
   * 
   * For example, you can use `0 0 4 1/1 * ?` to specify 04:00:00 (UTC+8) on the first day of each month.
   * 
   * @example
   * 0 0 4 1/1 * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * The time period during which upgrades are performed. Valid values: **30 to 120**.
   * 
   * Unit: minutes.
   * 
   * @example
   * 30
   */
  duration?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * sage62x022502****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-1um5x5nwhilymw****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The time zone. Valid values:
   * 
   * **Asia/Shanghai**: UTC+8 (Beijing)
   * 
   * **Asia/Hong_Kong**: UTC+8 (Hong Kong)
   * 
   * **Asia/Tokyo**: UTC+9 (Tokyo)
   * 
   * **Australia/Sydney**: UTC+10 (Sydney)
   * 
   * **Asia/Kuala_Lumpur**: UTC+8 (Kuala Lumpur)
   * 
   * **Europe/Berli**: UTC+1 (Berlin)
   * 
   * **Asia/Singapore**: UTC+8 (Singapore)
   * 
   * **Asia/Jakarta**: UTC+7 (Jakarta)
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
   * *   **boot**: automatic upgrade upon device startup.
   * *   **manual**: manual upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * scheduled
   */
  upgradeType?: string;
  /**
   * @remarks
   * The type of software for which you want to modify the upgrade policy. Valid values:
   * 
   * *   **Device**: The operating system run by the SAG device.
   * *   **Dpi**: The signature database used by the SAG device.
   * 
   * @example
   * Device
   */
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      duration: 'Duration',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
      timeZone: 'TimeZone',
      upgradeType: 'UpgradeType',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      duration: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
      timeZone: 'string',
      upgradeType: 'string',
      versionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

