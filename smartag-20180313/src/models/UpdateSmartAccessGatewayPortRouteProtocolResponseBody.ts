// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAccessGatewayPortRouteProtocolResponseBody extends $dara.Model {
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
   * A7DB1241-17CB-5457-83A9-638162A514C6
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

