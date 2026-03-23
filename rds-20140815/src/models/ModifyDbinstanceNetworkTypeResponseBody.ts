// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceNetworkTypeResponseBody extends $dara.Model {
  connectionString?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
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

