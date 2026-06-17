// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFirewallRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response message.
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
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * True
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

