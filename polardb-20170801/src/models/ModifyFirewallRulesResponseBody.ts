// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFirewallRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request is successful, Successful is returned. If the request fails, an error message is returned, such as an error code.
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
   * A8DBA3A7-82FB-5CBE-A002-8959E47D1D61
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request. Valid values:
   * 
   * - **true**: The request is successful.
   * 
   * - **false**: The request fails.
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

