// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * txt_check_pro_agent_01
   */
  appId?: string;
  /**
   * @remarks
   * The category.
   * 
   * @example
   * guard-scene
   */
  classify?: string;
  /**
   * @remarks
   * The configuration details.
   * 
   * @example
   * {"agentItemConfigs": "[{\\"agentId\\":\\"ag.abcxxx\\",\\"enable\\":true,\\"name\\":\\"Agent 1\\"}]"}
   */
  customConfig?: { [key: string]: any };
  /**
   * @remarks
   * The publish status.
   * 
   * @example
   * editing
   */
  deployStatus?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-06-09 10:12:50
   */
  gmtModified?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Custom text moderation
   */
  name?: string;
  /**
   * @remarks
   * The preset options.
   * 
   * @example
   * {"models":["qwen3.7-plus","max3.7","deepseek-v4-pro","glm-5.1","glm-5.2"]}
   */
  option?: { [key: string]: any };
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * agent_text
   */
  resourceType?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * plus
   */
  type?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1785898163
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      classify: 'Classify',
      customConfig: 'CustomConfig',
      deployStatus: 'DeployStatus',
      gmtModified: 'GmtModified',
      name: 'Name',
      option: 'Option',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      classify: 'string',
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      deployStatus: 'string',
      gmtModified: 'string',
      name: 'string',
      option: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      resourceType: 'string',
      type: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.customConfig) {
      $dara.Model.validateMap(this.customConfig);
    }
    if(this.option) {
      $dara.Model.validateMap(this.option);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

