// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskAssignRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. A value of **200** indicates success. Any other value indicates failure. Use this field to identify the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * ID of the created rule.
   * 
   * @example
   * 54
   */
  data?: string;
  /**
   * @remarks
   * Error details if the request fails. Returns "successful" on success.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. A value of true means success. A value of false or null means failure.
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

