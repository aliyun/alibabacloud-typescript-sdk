// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier for the request. Alibaba Cloud generates this ID to help you troubleshoot issues.
   * 
   * @example
   * 3808cf26-dde2-4286-8503-b0a2cd4065a7
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful. Valid values:
   * 
   * - `true`: The request succeeded.
   * 
   * - `false`: The request failed.
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

