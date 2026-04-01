// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceCrossBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the cross-region backup feature on the instance. Valid values:
   * 
   * *   **Disable**
   * *   **Enable**
   * 
   * @example
   * Enable
   */
  backupEnabled?: string;
  /**
   * @remarks
   * The ID of the region in which the cross-region backup files of the instance are stored.
   * 
   * @example
   * cn-shanghai
   */
  crossBackupRegion?: string;
  /**
   * @remarks
   * The policy that is used to save the cross-region backup files of the instance. Default value: **1**. The value 1 indicates that all cross-region backup files are saved.
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
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The status of the cross-region log backup feature on the instance. Valid values:
   * 
   * *   **Disable**
   * *   **Enable**
   * 
   * @example
   * Enable
   */
  logBackupEnabled?: string;
  /**
   * @remarks
   * The region ID of the source instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 50A6059D-6DBB-46C6-A851-1EE93C9013CF
   */
  requestId?: string;
  /**
   * @remarks
   * The policy that is used to retain the cross-region backup files of the instance. Default value: **1**. The value 1 indicates that the cross-region backup files of the instance are retained based on the specified retention period.
   * 
   * @example
   * 1
   */
  retentType?: number;
  /**
   * @remarks
   * The number of days for which the cross-region backup files of the instance are retained. Valid values: **7 to 1825**.
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

