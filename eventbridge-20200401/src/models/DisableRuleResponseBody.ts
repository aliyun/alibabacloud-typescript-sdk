// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. The value Success indicates that the request is successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * EventRuleNotExisted
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C36345A1-75F3-5A1A-BFCF-33B8271971FA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true and false.
   * 
   * @example
   * true
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
      code: 'string',
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

