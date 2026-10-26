// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceCrossBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the overall cross-region backup feature is enabled. Valid values:
   * * **Disable**: The feature is disabled.
   * * **Enable**: The feature is enabled.
   * 
   * @example
   * Enable
   */
  backupEnabled?: string;
  /**
   * @remarks
   * The ID of the destination region for cross-region backup.
   * 
   * @example
   * cn-shanghai
   */
  crossBackupRegion?: string;
  /**
   * @remarks
   * The retention type of cross-region backups. Default value: **1**, which indicates that all backups are retained.
   * 
   * @example
   * 1
   */
  crossBackupType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Indicates whether cross-region log backup is enabled. Valid values:
   * * **Disable**: Cross-region log backup is disabled.
   * * **Enable**: Cross-region log backup is enabled.
   * 
   * @example
   * Enable
   */
  logBackupEnabled?: string;
  /**
   * @remarks
   * The region ID of the source instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 50A6059D-6DBB-46C6-A851-1EE93C9013CF
   */
  requestId?: string;
  /**
   * @remarks
   * The retention method for cross-region backups. Default value: **1**, which indicates that backups are retained based on a specified retention period.
   * 
   * @example
   * 1
   */
  retentType?: number;
  /**
   * @remarks
   * The retention period of cross-region backups. Valid values: **7 to 1825**. Unit: days.
   * 
   * @example
   * 15
   */
  retention?: number;
  static names(): { [key: string]: string } {
    return {
      backupEnabled: 'BackupEnabled',
      crossBackupRegion: 'CrossBackupRegion',
      crossBackupType: 'CrossBackupType',
      DBInstanceId: 'DBInstanceId',
      logBackupEnabled: 'LogBackupEnabled',
      regionId: 'RegionId',
      requestId: 'RequestId',
      retentType: 'RetentType',
      retention: 'Retention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEnabled: 'string',
      crossBackupRegion: 'string',
      crossBackupType: 'string',
      DBInstanceId: 'string',
      logBackupEnabled: 'string',
      regionId: 'string',
      requestId: 'string',
      retentType: 'number',
      retention: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

