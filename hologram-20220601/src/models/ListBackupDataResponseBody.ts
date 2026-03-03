// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupDataResponseBodyBackupDataList extends $dara.Model {
  /**
   * @remarks
   * The backup type. In general, the following two types are supported: local backup and remote backup. In the local backup type, snapshots reside in the same region as your instance. The following two sub-types are available: full (single backup, single replica) and redundant (zone-redundant storage, multiple replicas). In the remote backup type, snapshots and your instance reside in different regions. Remote backups are the replicas of the backups of the full or redundant type in another region. The values local and remote do not represent specific types, but are used only for data filtering. The value local indicates all local backups, and the value remote indicates all remote backups.
   * 
   * @example
   * redundant
   */
  backupType?: string;
  /**
   * @remarks
   * The size of cold data. Unit: bytes.
   * 
   * @example
   * 32413521
   */
  coldDataSize?: number;
  /**
   * @remarks
   * The description of the backup data.
   * 
   * @example
   * demo
   */
  dataDesc?: string;
  /**
   * @remarks
   * The backup granularity.
   * 
   * Valid values:
   * 
   * *   instance
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
   * The snapshot time. The value format of this parameter follows the same standard as that of the StartTime parameter.
   * 
   * @example
   * 2024-10-28T12:23:37.000+00:00
   */
  dataTime?: string;
  /**
   * @remarks
   * The end time of the backup task. The value format of this parameter follows the same standard as that of the StartTime parameter.
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
   * The name of the instance.
   * 
   * @example
   * my-hologres-dw
   */
  instanceName?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegion?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * Valid values:
   * 
   * *   Warehouse: virtual warehouse instance
   * *   Standard: general-purpose instance
   * 
   * @example
   * Warehouse
   */
  instanceType?: string;
  /**
   * @remarks
   * The zone in which the instance resides.
   * 
   * @example
   * cn-hangzhou-j
   */
  instanceZoneId?: string;
  /**
   * @remarks
   * The region in which the backup data resides.
   * 
   * @example
   * cn-hangzhou
   */
  snapshotRegion?: string;
  /**
   * @remarks
   * The zone in which the backup data resides. In zone-redundant storage mode, backup data is stored in different zones, including the current zone.
   * 
   * @example
   * cn-hangzhou-j
   */
  snapshotZoneId?: string;
  /**
   * @remarks
   * The start time of the backup task. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ss.SSSTZ format. The time is displayed in UTC (the same below).
   * 
   * @example
   * 2024-10-28T11:19:56.000+00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the backup task.
   * 
   * Valid values:
   * 
   * *   processing
   * *   completed
   * *   failed
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The mode in which the backup task is triggered.
   * 
   * Valid values:
   * 
   * *   scheduled: periodic backup
   * *   manual: manual backup
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
   * The backups.
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

