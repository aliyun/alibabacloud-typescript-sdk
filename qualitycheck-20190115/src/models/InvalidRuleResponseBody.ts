// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvalidRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. **200** indicates success. Other values indicate failure. The caller can determine the cause of failure based on this field.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the deletion was successful.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Indicates error details on failure. For success, the value is **successful**.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 9987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. The caller can determine if the request succeeded based on this field: **true** indicates success, and **false/null** indicates failure.
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
      data: 'boolean',
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

