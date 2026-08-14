// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchApplyAdviceByIdListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message returned for the request.
   * 
   * - If the request is successful, **SUCCESS** is returned.
   * 
   * - If the request fails, an error message is returned.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 86F92D26-B774-5FA1-8E53-82CBEEEBB012
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

