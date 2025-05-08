// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserDeliveryTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data center. Valid values:
   * 
   * *   cn: the Chinese mainland.
   * *   sg: outside the Chinese mainland.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2CCD40B1-3F20-5FF0-8A67-E3F34B87744F
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the delivery task.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The name of the delivery task.
   * 
   * @example
   * er-http
   */
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

