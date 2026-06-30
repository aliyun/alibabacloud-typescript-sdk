// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error message, if any.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. The caller can use this field to determine whether the request was successful. Valid values:
   * - true: The request was successful.
   * - false/null: The request failed.
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

