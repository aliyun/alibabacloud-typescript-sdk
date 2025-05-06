// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMaskingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message that is returned for the request.
   * 
   * > If the request is successful, Successful is returned. If the request fails, an error message such as an error code is returned.
   * 
   * @example
   * Message
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 99B355CE-526C-478B-B730-AD9D7C******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid value:
   * 
   * *   **true**:
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

