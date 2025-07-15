// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveMessageAppCallbackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The signature of the interactive messaging application. It is required by the interactive messaging SDK.
   * 
   * @example
   * **************************************************************************
   */
  appSign?: string;
  /**
   * @remarks
   * Indicates whether authentication is required for event callbacks. Default value: true.
   * 
   * @example
   * true
   */
  eventCallbackNeedAuthentication?: boolean;
  /**
   * @remarks
   * The callback URL for events such as user logon, logoff, joining a group, and leaving a group. This parameter is not returned if it has an empty value.
   * 
   * @example
   * http://example.aliyundoc.com/examplecallback
   */
  eventCallbackUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1F0FFEAD-B7D5-1D4A-A6B9-8C63ADF6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSign: 'AppSign',
      eventCallbackNeedAuthentication: 'EventCallbackNeedAuthentication',
      eventCallbackUrl: 'EventCallbackUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSign: 'string',
      eventCallbackNeedAuthentication: 'boolean',
      eventCallbackUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

