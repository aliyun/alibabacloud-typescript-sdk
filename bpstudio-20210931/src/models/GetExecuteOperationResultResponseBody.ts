// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExecuteOperationResultResponseBodyData } from "./GetExecuteOperationResultResponseBodyData";


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

