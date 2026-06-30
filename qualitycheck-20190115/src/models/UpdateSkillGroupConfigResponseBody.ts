// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillGroupConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of 200 indicates success. Other values indicate failure. Use this field to identify the reason for a failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * If an error occurs, this field provides error details. If the request is successful, the value is \\`successful\\`.
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
   * 38E7E948-0876-4FEE-B0AA-6*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of \\`true\\` indicates success. A value of \\`false\\` or \\`null\\` indicates failure.
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

