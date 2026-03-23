// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceCrossBackupPolicyResponseBody extends $dara.Model {
  backupEnabled?: string;
  backupEnabledTime?: string;
  crossBackupRegion?: string;
  crossBackupType?: string;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceStatus?: string;
  engine?: string;
  engineVersion?: string;
  lockMode?: string;
  logBackupEnabled?: string;
  logBackupEnabledTime?: string;
  regionId?: string;
  requestId?: string;
  retentType?: number;
  retention?: number;
  static names(): { [key: string]: string } {
    return {
      backupEnabled: 'BackupEnabled',
      backupEnabledTime: 'BackupEnabledTime',
      crossBackupRegion: 'CrossBackupRegion',
      crossBackupType: 'CrossBackupType',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      lockMode: 'LockMode',
      logBackupEnabled: 'LogBackupEnabled',
      logBackupEnabledTime: 'LogBackupEnabledTime',
      regionId: 'RegionId',
      requestId: 'RequestId',
      retentType: 'RetentType',
      retention: 'Retention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEnabled: 'string',
      backupEnabledTime: 'string',
      crossBackupRegion: 'string',
      crossBackupType: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      engine: 'string',
      engineVersion: 'string',
      lockMode: 'string',
      logBackupEnabled: 'string',
      logBackupEnabledTime: 'string',
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

