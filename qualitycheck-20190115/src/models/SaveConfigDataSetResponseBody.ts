// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveConfigDataSetResponseBody extends $dara.Model {
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
   * The error message if the request fails. If the request succeeds, the value is successful.
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
   * F050E835-4E5B-4799-BAE3-D622DC529AB3
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

