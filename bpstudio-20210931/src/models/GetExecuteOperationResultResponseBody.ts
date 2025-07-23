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

export class GetExecuteOperationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The detailed result of the queried operation.
   */
  data?: GetExecuteOperationResultResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * " "
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetExecuteOperationResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

