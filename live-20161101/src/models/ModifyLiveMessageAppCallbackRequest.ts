// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveMessageAppCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application whose callback settings you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The data center. It must be the same as the data center that was specified when you called the [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html) operation to create the interactive messaging application. Valid values: cn-shanghai and ap-southeast-1 (Singapore).
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The callback URL for events such as user logon, logoff, joining a group, and leaving a group. If you leave this parameter empty, callbacks are disabled. The callback URL must start with http:// or https:// and cannot contain a private IP address or a port number.
   * 
   * @example
   * http://example.aliyundoc.com/examplecallback
   */
  eventCallbackUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataCenter: 'DataCenter',
      eventCallbackUrl: 'EventCallbackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataCenter: 'string',
      eventCallbackUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

