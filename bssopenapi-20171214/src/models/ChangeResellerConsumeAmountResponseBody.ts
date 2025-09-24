// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResellerConsumeAmountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call failed. For more information, see the "Error codes" section of the topic.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The consumption quota for the quota ledger after adjustment.
   * 
   * @example
   * 300.00
   */
  data?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D6E068C3-25BC-455A-85FE-45F0B22ECB1F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

