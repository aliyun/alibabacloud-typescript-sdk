// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExecuteOperationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The output of the operation.
   * 
   * @example
   * " "
   */
  arguments?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * “ ”
   */
  message?: string;
  /**
   * @remarks
   * The ID of the operation.
   * 
   * @example
   * op_xxxxxxxx
   */
  operationId?: string;
  /**
   * @remarks
   * The status of the operation.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'Arguments',
      message: 'Message',
      operationId: 'OperationId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'string',
      message: 'string',
      operationId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

