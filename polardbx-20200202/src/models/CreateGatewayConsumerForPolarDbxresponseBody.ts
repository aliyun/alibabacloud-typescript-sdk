// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayConsumerForPolarDBXResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-**************
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
   */
  requestId?: string;
  /**
   * @remarks
   * The backend task ID.
   * 
   * @example
   * 422922413
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      requestId: 'string',
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

