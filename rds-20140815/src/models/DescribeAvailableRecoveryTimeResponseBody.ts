// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableRecoveryTimeResponseBody extends $dara.Model {
  crossBackupId?: number;
  recoveryBeginTime?: string;
  recoveryEndTime?: string;
  regionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      crossBackupId: 'CrossBackupId',
      recoveryBeginTime: 'RecoveryBeginTime',
      recoveryEndTime: 'RecoveryEndTime',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossBackupId: 'number',
      recoveryBeginTime: 'string',
      recoveryEndTime: 'string',
      regionId: 'string',
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

