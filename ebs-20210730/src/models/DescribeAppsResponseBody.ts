// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppsResponseBodyAppInfosAppTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * ebs
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyAppInfos extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-bd5e3533
   */
  appId?: string;
  /**
   * @remarks
   * The application name. This parameter takes effect only when ReportType is set to present.
   * 
   * @example
   * app1
   */
  appName?: string;
  /**
   * @remarks
   * The tags contained in the user application.
   * 
   * @example
   * default
   */
  appTags?: DescribeAppsResponseBodyAppInfosAppTags[];
  /**
   * @remarks
   * The default time zone.
   * 
   * @example
   * true
   */
  default?: boolean;
  /**
   * @remarks
   * The event description.
   * 
   * @example
   * This app is used to collect cloud disk usage statistics across the network
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether delivery to EventBridge is enabled.
   */
  eventBridgeSendEnabled?: boolean;
  /**
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2025-11-14T02:11:32Z
   */
  modifyTime?: number;
  /**
   * @remarks
   * Indicates whether delivery to CloudMonitor is enabled.
   */
  monitorSendEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether report sending is enabled.
   * 
   * @example
   * true
   */
  reportSendEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether delivery to Simple Log Service (SLS) is enabled.
   */
  slsSendEnabled?: boolean;
  /**
   * @remarks
   * The report subscription period.
   * 
   * @example
   * Weekly
   */
  subscribePeriod?: string;
  /**
   * @remarks
   * The subscription status. Valid values:
   * 
   * - Subscribe: subscribed.
   * - UnSubscribe: not subscribed.
   * 
   * @example
   * Subscribe
   */
  subscribeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appTags: 'AppTags',
      default: 'Default',
      description: 'Description',
      eventBridgeSendEnabled: 'EventBridgeSendEnabled',
      modifyTime: 'ModifyTime',
      monitorSendEnabled: 'MonitorSendEnabled',
      reportSendEnabled: 'ReportSendEnabled',
      slsSendEnabled: 'SlsSendEnabled',
      subscribePeriod: 'SubscribePeriod',
      subscribeStatus: 'SubscribeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appTags: { 'type': 'array', 'itemType': DescribeAppsResponseBodyAppInfosAppTags },
      default: 'boolean',
      description: 'string',
      eventBridgeSendEnabled: 'boolean',
      modifyTime: 'number',
      monitorSendEnabled: 'boolean',
      reportSendEnabled: 'boolean',
      slsSendEnabled: 'boolean',
      subscribePeriod: 'string',
      subscribeStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appTags)) {
      $dara.Model.validateArray(this.appTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The application information.
   */
  appInfos?: DescribeAppsResponseBodyAppInfos[];
  /**
   * @remarks
   * The internal error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * OK
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the %s variable in the ErrMessage error message.
   * 
   * @example
   * -
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1C00637-AC84-5EFD-89B5-D5CE39F0F2B1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The user error code.
   * 
   * @example
   * OK
   */
  userCode?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      appInfos: 'AppInfos',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userCode: 'UserCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      appInfos: { 'type': 'array', 'itemType': DescribeAppsResponseBodyAppInfos },
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appInfos)) {
      $dara.Model.validateArray(this.appInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

