// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateMigrationTargetInstanceResponseBody extends $dara.Model {
  DBInstanceName?: string;
  requestId?: string;
  sourceIpAddress?: string;
  sourcePort?: number;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      sourceIpAddress: 'SourceIpAddress',
      sourcePort: 'SourcePort',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      requestId: 'string',
      sourceIpAddress: 'string',
      sourcePort: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

