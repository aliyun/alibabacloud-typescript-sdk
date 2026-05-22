// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserDeliveryTaskStatusResponseBody extends $dara.Model {
  requestId?: string;
  status?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

