// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveMessageAppRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application. The name must be 2 to 16 characters in length.
   * 
   * @example
   * testApp
   */
  appName?: string;
  /**
   * @remarks
   * The content moderation method. Valid values:
   * 
   * *   0 (default): disables content moderation.
   * *   1: uses built-in content moderation.
   * *   2: uses custom content moderation.
   * 
   * @example
   * 2
   */
  auditType?: number;
  /**
   * @remarks
   * The URL for content moderation. If you set AuditType to 2, you must specify this parameter. The URL must start with http:// or https:// and cannot contain a private IP address or a port number. For more information about custom content moderation, see the "Custom content moderation" section of this topic.
   * 
   * @example
   * http://demo.aliyundoc.com/exampleaudit
   */
  auditUrl?: string;
  /**
   * @remarks
   * The data center. Valid values:
   * 
   * *   cn-shanghai (default)
   * *   ap-southeast-1: Singapore
   * 
   * >  When you call other operations to manage the interactive messaging application, you must specify the same data center in which the application is created.
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The callback URL for events, such as logon, logoff, and joining and leaving a group. If you leave this parameter empty, event callbacks are disabled. [](~~2672836~~)The callback URL must start with http:// or https:// and cannot contain a private IP address or a port number. For information about the callback message format and authentication logic, see the "Event callbacks" and "Callback authentication" sections of this topic.
   * 
   * @example
   * http://demo.aliyundoc.com/examplecallback
   */
  eventCallbackUrl?: string;
  /**
   * @remarks
   * The retention period of group messages in the application. Valid values:
   * 
   * *   0 (default): 30 days.
   * *   1: 90 days.
   * *   2: 180 days.
   * 
   * @example
   * 1
   */
  msgLifeCycle?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      auditType: 'AuditType',
      auditUrl: 'AuditUrl',
      dataCenter: 'DataCenter',
      eventCallbackUrl: 'EventCallbackUrl',
      msgLifeCycle: 'MsgLifeCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      auditType: 'number',
      auditUrl: 'string',
      dataCenter: 'string',
      eventCallbackUrl: 'string',
      msgLifeCycle: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

