// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyResponseBody extends $dara.Model {
  compressType?: string;
  DBInstanceID?: string;
  enableBackupLog?: string;
  highSpaceUsageProtection?: string;
  localLogRetentionHours?: number;
  localLogRetentionSpace?: string;
  logBackupLocalRetentionNumber?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compressType: 'CompressType',
      DBInstanceID: 'DBInstanceID',
      enableBackupLog: 'EnableBackupLog',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      logBackupLocalRetentionNumber: 'LogBackupLocalRetentionNumber',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressType: 'string',
      DBInstanceID: 'string',
      enableBackupLog: 'string',
      highSpaceUsageProtection: 'string',
      localLogRetentionHours: 'number',
      localLogRetentionSpace: 'string',
      logBackupLocalRetentionNumber: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

