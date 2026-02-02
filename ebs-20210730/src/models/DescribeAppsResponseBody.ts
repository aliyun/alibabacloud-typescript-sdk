// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppsResponseBodyAppInfosAppTags extends $dara.Model {
  /**
   * @example
   * ebs
   */
  tagKey?: string;
  /**
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
   * @example
   * app-bd5e3533
   */
  appId?: string;
  /**
   * @example
   * app1
   */
  appName?: string;
  /**
   * @example
   * default
   */
  appTags?: DescribeAppsResponseBodyAppInfosAppTags[];
  /**
   * @example
   * true
   */
  default?: boolean;
  description?: string;
  eventBridgeSendEnabled?: boolean;
  /**
   * @example
   * 2025-11-14T02:11:32Z
   */
  modifyTime?: number;
  monitorSendEnabled?: boolean;
  /**
   * @example
   * true
   */
  reportSendEnabled?: boolean;
  slsSendEnabled?: boolean;
  /**
   * @example
   * Weekly
   */
  subscribePeriod?: string;
  /**
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
   * @example
   * None
   */
  accessDeniedDetail?: string;
  appInfos?: DescribeAppsResponseBodyAppInfos[];
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * OK
   */
  dynamicCode?: string;
  /**
   * @example
   * -
   */
  dynamicMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * A1C00637-AC84-5EFD-89B5-D5CE39F0F2B1
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
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

