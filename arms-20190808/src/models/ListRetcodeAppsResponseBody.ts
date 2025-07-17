// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRetcodeAppsResponseBodyRetcodeAppsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRetcodeAppsResponseBodyRetcodeApps extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. The parameter is an auto-increment parameter.
   * 
   * @example
   * 16064
   */
  appId?: number;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * A1
   */
  appName?: string;
  /**
   * @remarks
   * The alias of the application monitored by Browser Monitoring.
   * 
   * @example
   * B1
   */
  nickName?: string;
  /**
   * @remarks
   * The process identifier (PID) of the application.
   * 
   * @example
   * atc889zkcf@d8deedfa9bf****
   */
  pid?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   `web`: web application
   * *   `weex`: Weex mobile app
   * *   `mini_dd`: DingTalk mini program
   * *   `mini_alipay`: Alipay mini program
   * *   `mini_wx`: WeChat mini program
   * *   `mini_common`: mini program on other platforms
   * 
   * @example
   * web
   */
  retcodeAppType?: string;
  /**
   * @remarks
   * The tags of the task.
   */
  tags?: ListRetcodeAppsResponseBodyRetcodeAppsTags[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      nickName: 'NickName',
      pid: 'Pid',
      resourceGroupId: 'ResourceGroupId',
      retcodeAppType: 'RetcodeAppType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      nickName: 'string',
      pid: 'string',
      resourceGroupId: 'string',
      retcodeAppType: 'string',
      tags: { 'type': 'array', 'itemType': ListRetcodeAppsResponseBodyRetcodeAppsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRetcodeAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 99A663CB-8D7B-4B0D-A006-03C8EE38E7BB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of applications monitored by Browser Monitoring.
   */
  retcodeApps?: ListRetcodeAppsResponseBodyRetcodeApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      retcodeApps: 'RetcodeApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      retcodeApps: { 'type': 'array', 'itemType': ListRetcodeAppsResponseBodyRetcodeApps },
    };
  }

  validate() {
    if(Array.isArray(this.retcodeApps)) {
      $dara.Model.validateArray(this.retcodeApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

