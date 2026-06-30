// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Any other value indicates failure. Use this field to identify the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * xxx
   */
  data?: string;
  /**
   * @remarks
   * Details about the error if the call fails. Returns **successful** if the call succeeds.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Use this field to determine success:
   * 
   * - **true** means success
   * 
   * - false or **null** means failure
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

