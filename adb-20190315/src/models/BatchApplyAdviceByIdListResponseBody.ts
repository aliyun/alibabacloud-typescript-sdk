// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchApplyAdviceByIdListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message returned for the operation. Valid values:
   * 
   * *   **SUCCESS** is returned if the operation is successful.
   * *   An error message is returned if the operation fails.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
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

