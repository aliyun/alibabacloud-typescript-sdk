// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcAccessAndUpdateApisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * > 
   * 
   * *   If the associated API is updated, you can use the task ID in the **DescribeUpdateVpcInfoTask** operation to query the update result.
   * 
   * @example
   * 7b6d0cb72b2e4215b0129f675c889746
   */
  operationId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C2CEC6EA-EEBA-5FD6-8BD9-2CF01980FE39
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

