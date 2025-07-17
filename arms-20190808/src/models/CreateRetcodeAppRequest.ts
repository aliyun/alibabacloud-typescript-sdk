// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRetcodeAppRequestTags extends $dara.Model {
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

export class CreateRetcodeAppRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. You can obtain the resource group ID in the **Resource Management** console.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * SdkTest
   */
  retcodeAppName?: string;
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
   * This parameter is required.
   * 
   * @example
   * mini_dd
   */
  retcodeAppType?: string;
  /**
   * @remarks
   * The tags that you want to add to the task.
   */
  tags?: CreateRetcodeAppRequestTags[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      retcodeAppName: 'RetcodeAppName',
      retcodeAppType: 'RetcodeAppType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      retcodeAppName: 'string',
      retcodeAppType: 'string',
      tags: { 'type': 'array', 'itemType': CreateRetcodeAppRequestTags },
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

