// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDTCSecurityIpHostsForSQLServerResponseBody extends $dara.Model {
  DBInstanceId?: string;
  DTCSetResult?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DTCSetResult: 'DTCSetResult',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DTCSetResult: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

