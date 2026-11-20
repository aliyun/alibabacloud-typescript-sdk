// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupDataResponseBodyBackupDataList extends $dara.Model {
  /**
   * @remarks
   * The backup type. Backup types are generally divided into two categories: 1) Local backup, where the snapshot and the instance belong to the same region. 2) Remote backup, where the snapshot and the instance belong to different regions. Valid values:
   * - redundant: Local backup with cross-zone multi-copy storage in the same region.
   * - redundant_remote: Remote backup with cross-zone multi-copy storage in the same region, which is a cross-region copy of the redundant type.
   * - full: Local backup with single-copy storage.
   * - full_remote: Remote backup with single-copy storage, which is a cross-region copy of the full type.
   * - local: Does not represent a specific backup type and is only used to filter local backup data.
   * - remote: Does not represent a specific backup type and is only used to filter remote backup data.
   * 
   * @example
   * redundant
   */
  backupType?: string;
  /**
   * @remarks
   * The size of the cold storage data. Unit: bytes.
   * 
   * @example
   * 32413521
   */
  coldDataSize?: number;
  /**
   * @remarks
   * The description of the backup data. This field can be updated.
   * 
   * @example
   * demo
   */
  dataDesc?: string;
  /**
   * @remarks
   * The backup granularity.
   * 
   * @example
   * instance
   */
  dataGran?: string;
  /**
   * @remarks
   * The size of the backup data. Unit: bytes.
   * 
   * @example
   * 76085723136
   */
  dataSize?: number;
  /**
   * @remarks
   * The data snapshot time. For the format, refer to StartTime.
   * 
   * @example
   * 2024-10-28T12:23:37.000+00:00
   */
  dataTime?: string;
  /**
   * @remarks
   * The end time of the backup. For the format, refer to StartTime.
   * 
   * @example
   * 2024-10-28T12:27:34.000+00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The unique ID of the backup.
   * 
   * @example
   * 1780805690994479105
   */
  id?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgpostcn-cn-pe33jdxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * my-hologres-dw
   */
  instanceName?: string;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegion?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * Warehouse
   */
  instanceType?: string;
  /**
   * @remarks
   * The zone where the instance resides.
   * 
   * @example
   * cn-hangzhou-j
   */
  instanceZoneId?: string;
  /**
   * @remarks
   * The region where the backup data resides.
   * 
   * @example
   * cn-hangzhou
   */
  snapshotRegion?: string;
  /**
   * @remarks
   * The zone where the backup data resides. For zone-redundant storage, the data is stored across multiple zones, and this field indicates one of the zones.
   * 
   * @example
   * cn-hangzhou-j
   */
  snapshotZoneId?: string;
  /**
   * @remarks
   * The start time of the backup. The time is in the UTC+8 time zone and follows the YYYY-MM-DDTHH:mm:ss.SSSTZ format. The same applies to other time fields.
   * 
   * @example
   * 2024-10-28T11:19:56.000+00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The backup status.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The trigger type.
   * 
   * @example
   * scheduled
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      coldDataSize: 'ColdDataSize',
      dataDesc: 'DataDesc',
      dataGran: 'DataGran',
      dataSize: 'DataSize',
      dataTime: 'DataTime',
      endTime: 'EndTime',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceRegion: 'InstanceRegion',
      instanceType: 'InstanceType',
      instanceZoneId: 'InstanceZoneId',
      snapshotRegion: 'SnapshotRegion',
      snapshotZoneId: 'SnapshotZoneId',
      startTime: 'StartTime',
      status: 'Status',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      coldDataSize: 'number',
      dataDesc: 'string',
      dataGran: 'string',
      dataSize: 'number',
      dataTime: 'string',
      endTime: 'string',
      id: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceRegion: 'string',
      instanceType: 'string',
      instanceZoneId: 'string',
      snapshotRegion: 'string',
      snapshotZoneId: 'string',
      startTime: 'string',
      status: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBackupDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of backups.
   */
  backupDataList?: ListBackupDataResponseBodyBackupDataList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4AA0C48F-B5BB-5FF9-A43B-6B91E0715D46
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupDataList: 'BackupDataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDataList: { 'type': 'array', 'itemType': ListBackupDataResponseBodyBackupDataList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backupDataList)) {
      $dara.Model.validateArray(this.backupDataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

