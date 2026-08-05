// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveMessageAppRequest extends $dara.Model {
  /**
   * @remarks
   * The application name. The name must be 2 to 16 characters in length.
   * 
   * @example
   * testApp
   */
  appName?: string;
  /**
   * @remarks
   * The security audit mode. Valid values:
   * - 0: default value. Security audit is disabled.
   * - 1: built-in security audit.
   * - 2: custom security audit.
   * 
   * @example
   * 2
   */
  auditType?: number;
  /**
   * @remarks
   * The URL for custom security audit. This parameter is required when custom security audit is selected (AuditType=2). The URL must start with http:// or https://, must not contain private IP addresses, and must not include port numbers. For the format of custom security audit content, see the following section.
   * 
   * @example
   * http://demo.aliyundoc.com/exampleaudit
   */
  auditUrl?: string;
  /**
   * @remarks
   * The data center. Valid values:
   * - cn-shanghai: default value. Shanghai.
   * - ap-southeast-1: Singapore.
   * 
   * > When calling other interactive messaging API operations, the data center must be the same as the one specified when creating the interactive messaging application.
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The event callback URL for client logon, logout, join group, and leave group events. If this parameter is empty, event callbacks are disabled. For the callback API operations that are triggered, see [Client access](https://help.aliyun.com/document_detail/2672836.html). The event callback URL must start with http:// or https://, must not contain private IP addresses, and must not include port numbers. For the event callback format and callback authentication logic, see the following section.
   * 
   * @example
   * http://demo.aliyundoc.com/examplecallback
   */
  eventCallbackUrl?: string;
  /**
   * @remarks
   * The storage duration tier for group messages within the application. Valid values:
   * - 0: default value. Messages are stored for 30 days.
   * - 1: messages are stored for 90 days.
   * - 2: messages are stored for 180 days.
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

