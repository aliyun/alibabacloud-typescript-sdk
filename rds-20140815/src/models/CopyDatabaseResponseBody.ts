// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDatabaseResponseBody extends $dara.Model {
  DBName?: string;
  DBStatus?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      DBStatus: 'DBStatus',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      DBStatus: 'string',
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

