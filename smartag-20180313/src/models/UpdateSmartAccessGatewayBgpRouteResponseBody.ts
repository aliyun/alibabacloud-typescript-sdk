// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAccessGatewayBgpRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates that the task is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message. A value of Successful indicates that the task is successful.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F0B079C-2D0E-4ABF-A970-C079F785A09C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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

