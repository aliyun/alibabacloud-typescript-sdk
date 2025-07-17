// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRetcodeAppByPidResponseBodyRetcodeAppTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * testValue
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

export class GetRetcodeAppByPidResponseBodyRetcodeApp extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. The parameter is an auto-increment parameter.
   * 
   * @example
   * 2787XXXX
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application that is monitored by Browser Monitoring.
   * 
   * @example
   * testRetcodeAppXXXX
   */
  appName?: string;
  /**
   * @remarks
   * The process identifier (PID) of the application.
   * 
   * @example
   * b590lhguqs@9781be0f44dXXXX
   */
  pid?: string;
  /**
   * @remarks
   * The ID of the resource group. You can obtain the resource group ID in the **Resource Management** console.
   * 
   * @example
   * rg-acfmxidtzXXXX
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the application that is monitored by Browser Monitoring. Valid values:
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
   * The tags that are attached to the instance.
   */
  tags?: GetRetcodeAppByPidResponseBodyRetcodeAppTags[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      pid: 'Pid',
      resourceGroupId: 'ResourceGroupId',
      retcodeAppType: 'RetcodeAppType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      pid: 'string',
      resourceGroupId: 'string',
      retcodeAppType: 'string',
      tags: { 'type': 'array', 'itemType': GetRetcodeAppByPidResponseBodyRetcodeAppTags },
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

export class GetRetcodeAppByPidResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2983BEF7-4A0D-47A2-94A2-8E9C5E63****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned application data.
   */
  retcodeApp?: GetRetcodeAppByPidResponseBodyRetcodeApp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      retcodeApp: 'RetcodeApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      retcodeApp: GetRetcodeAppByPidResponseBodyRetcodeApp,
    };
  }

  validate() {
    if(this.retcodeApp && typeof (this.retcodeApp as any).validate === 'function') {
      (this.retcodeApp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

