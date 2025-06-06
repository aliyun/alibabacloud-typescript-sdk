// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableFirewallRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message that is returned for the request.
   * 
   * > If the request was successful, Successful is returned. If the request failed, an error message that contains information such as an error code is returned.
   * 
   * @example
   * Message
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 99B355CE-526C-478B-B730-AD9D7C******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
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

