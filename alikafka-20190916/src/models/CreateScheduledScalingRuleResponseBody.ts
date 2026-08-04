// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledScalingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DB6F1BEA-903B-4FD8-8809-46E7E9CE***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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

