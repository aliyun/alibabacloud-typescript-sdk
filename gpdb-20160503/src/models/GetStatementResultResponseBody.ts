// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStatementResultResponseBodyData } from "./GetStatementResultResponseBodyData";


export class GetStatementResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the asynchronous call.
   */
  data?: GetStatementResultResponseBodyData;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * API execution status, with values as follows:
   * 
   * - **false**: Execution failed.
   * - **true**: Execution succeeded.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetStatementResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

