// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveMessageAppResponseBody extends $dara.Model {
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
   * The AppKey of the interactive messaging application. It is used to authorize operations related to the application ID.
   * 
   * @example
   * **********************************
   */
  appKey?: string;
  /**
   * @remarks
   * The name of the interactive messaging application.
   * 
   * @example
   * testApp
   */
  appName?: string;
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
   * The content moderation method. Valid values:
   * 
   * *   0: Content moderation is disabled.
   * *   1: Built-in content moderation is used.
   * *   2: Custom content moderation is used.
   * 
   * @example
   * 2
   */
  auditType?: number;
  /**
   * @remarks
   * The URL for content moderation. This parameter is returned when the value of AuditType is 2.
   * 
   * @example
   * http://example.aliyundoc.com/exampleaudit
   */
  auditUrl?: string;
  /**
   * @remarks
   * The time when the interactive messaging application was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1698305471
   */
  createTime?: number;
  /**
   * @remarks
   * The data center.
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * Indicates whether the interactive messaging application is disabled.
   * 
   * @example
   * false
   */
  disable?: boolean;
  /**
   * @remarks
   * The callback URL for events such as user logon, logoff, joining a group, and leaving a group. An empty value indicates that callbacks are disabled.
   * 
   * @example
   * http://example.aliyundoc.com/examplecallback
   */
  eventCallbackUrl?: string;
  /**
   * @remarks
   * The time when the interactive messaging application was modified. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1698305471
   */
  modifyTime?: number;
  /**
   * @remarks
   * The retention period of group messages in the application. Valid values:
   * 
   * *   0 (default): 30 days
   * *   1: 90 days
   * *   2: 180 days
   * 
   * @example
   * 1
   */
  msgLifeCycle?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9FB68B5B-ED07-18F0-A3CF-083F4E74****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appKey: 'AppKey',
      appName: 'AppName',
      appSign: 'AppSign',
      auditType: 'AuditType',
      auditUrl: 'AuditUrl',
      createTime: 'CreateTime',
      dataCenter: 'DataCenter',
      disable: 'Disable',
      eventCallbackUrl: 'EventCallbackUrl',
      modifyTime: 'ModifyTime',
      msgLifeCycle: 'MsgLifeCycle',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appKey: 'string',
      appName: 'string',
      appSign: 'string',
      auditType: 'number',
      auditUrl: 'string',
      createTime: 'number',
      dataCenter: 'string',
      disable: 'boolean',
      eventCallbackUrl: 'string',
      modifyTime: 'number',
      msgLifeCycle: 'number',
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

