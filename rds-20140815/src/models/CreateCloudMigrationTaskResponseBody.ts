// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudMigrationTaskResponseBody extends $dara.Model {
  DBInstanceName?: string;
  requestId?: string;
  taskId?: number;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
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

