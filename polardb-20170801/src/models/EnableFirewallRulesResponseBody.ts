// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableFirewallRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message returned.
   * 
   * > Typically returns `Successful` on success. When the request fails, this parameter returns exception information such as error codes.
   * 
   * @example
   * Message
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 99B355CE-526C-478B-B730-AD9D7C******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
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

