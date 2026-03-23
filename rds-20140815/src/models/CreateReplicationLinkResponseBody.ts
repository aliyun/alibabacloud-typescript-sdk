// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReplicationLinkResponseBody extends $dara.Model {
  DBInstanceId?: string;
  requestId?: string;
  taskId?: number;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      taskId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

