// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserDeliveryTaskResponseBody extends $dara.Model {
  dataCenter?: string;
  requestId?: string;
  status?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      dataCenter: 'DataCenter',
      requestId: 'RequestId',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCenter: 'string',
      requestId: 'string',
      status: 'string',
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

