// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduledBackupConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The number of periodic backups to retain. For example, if you set this parameter to 3, the system automatically retains the latest three backups and deletes other expired backups.
   * 
   * @example
   * 3
   */
  dataKeepQuantity?: number;
  /**
   * @remarks
   * The destination region for backups. This parameter takes effect only for remote backups. You can back up data from the local region to another region to implement cross-region disaster recovery. For example, you can back up an instance in Hangzhou to Beijing.
   * 
   * @example
   * cn-beijing
   */
  dstRegion?: string;
  /**
   * @remarks
   * Specifies whether to enable periodic backup. Valid values:
   * - true: Periodic backup is enabled.
   * - false: Periodic backup is disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The start time for backup dates. The backup task starts at this time. The time applies to all valid dates. For example, if week is set to 1,3,5 and hour is set to 20, backups start at 20:00:00 every Monday, Wednesday, and Friday.
   * 
   * @example
   * 20
   */
  hour?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgprecn-cn-zvp25ysxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of manual backups to retain. Manual backups and automatic backups are stored separately, and each has a completely independent data retention policy.
   * 
   * @example
   * 3
   */
  manualDataKeepQuantity?: number;
  /**
   * @remarks
   * The backup type. You need to configure this field only for remote backups. You can ignore this field for other backup types.
   * 
   * @example
   * remote
   */
  scheduleType?: string;
  /**
   * @remarks
   * The weekly configuration for backup dates. You can specify multiple days separated by commas. For example, to configure Monday, Wednesday, and Friday, set the value to "1,3,5".
   * 
   * @example
   * 1,3,5
   */
  week?: string;
  /**
   * @remarks
   * The destination zone for backups. This parameter takes effect only for remote backups.
   * 
   * @example
   * cn-beijing-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dataKeepQuantity: 'dataKeepQuantity',
      dstRegion: 'dstRegion',
      enabled: 'enabled',
      hour: 'hour',
      instanceId: 'instanceId',
      manualDataKeepQuantity: 'manualDataKeepQuantity',
      scheduleType: 'scheduleType',
      week: 'week',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dataKeepQuantity: 'number',
      dstRegion: 'string',
      enabled: 'boolean',
      hour: 'number',
      instanceId: 'string',
      manualDataKeepQuantity: 'number',
      scheduleType: 'string',
      week: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

