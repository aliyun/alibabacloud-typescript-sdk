// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLocalAvailableRecoveryTimeResponseBody extends $dara.Model {
  DBInstanceId?: string;
  recoveryBeginTime?: string;
  recoveryEndTime?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      recoveryBeginTime: 'RecoveryBeginTime',
      recoveryEndTime: 'RecoveryEndTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      recoveryBeginTime: 'string',
      recoveryEndTime: 'string',
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

