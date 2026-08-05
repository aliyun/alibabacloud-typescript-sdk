// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppConfigHistoryResponseBodyHistory extends $dara.Model {
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * txt_check_agent_01
   */
  appId?: string;
  /**
   * @remarks
   * **[Deprecated]** The categorization.
   * 
   * @example
   * guard-scene
   */
  classify?: string;
  /**
   * @remarks
   * **[Deprecated]** The configuration details.
   * 
   * @example
   * {"agentItemConfigs": "[{\\"agentId\\":\\"ag.abcxxx\\",\\"enable\\":true,\\"name\\":\\"Agent 1\\"}]"}
   */
  customConfig?: { [key: string]: any };
  /**
   * @remarks
   * **[Deprecated]** The publish status.
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
   * 2026-05-29 10:05:27
   */
  gmtModified?: string;
  /**
   * @remarks
   * **[Deprecated]** The name.
   * 
   * @example
   * Custom text moderation
   */
  name?: string;
  /**
   * @remarks
   * **[Deprecated]** The preset options.
   */
  option?: { [key: string]: any };
  /**
   * @remarks
   * **[Deprecated]** The resource type.
   * 
   * @example
   * agent_text
   */
  resourceType?: string;
  /**
   * @remarks
   * **[Deprecated]** The type.
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
   * 1785888163
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

export class ListAppConfigHistoryResponseBodyPublish extends $dara.Model {
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * txt_check_agent_01
   */
  appId?: string;
  /**
   * @remarks
   * **[Deprecated]** The categorization.
   * 
   * @example
   * guard-scene
   */
  classify?: string;
  /**
   * @remarks
   * **[Deprecated]** The configuration details.
   * 
   * @example
   * {"agentItemConfigs": "[{\\"agentId\\":\\"ag.abcxxx\\",\\"enable\\":true,\\"name\\":\\"Agent 1\\"}]"}
   */
  customConfig?: { [key: string]: any };
  /**
   * @remarks
   * **[Deprecated]** The publish status.
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
   * 2026-06-25 09:52:12
   */
  gmtModified?: string;
  /**
   * @remarks
   * **[Deprecated]** The name.
   * 
   * @example
   * Custom text moderation
   */
  name?: string;
  /**
   * @remarks
   * **[Deprecated]** The preset options.
   */
  option?: { [key: string]: any };
  /**
   * @remarks
   * **[Deprecated]** The resource type.
   * 
   * @example
   * agent_text
   */
  resourceType?: string;
  /**
   * @remarks
   * **[Deprecated]** The type.
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

export class ListAppConfigHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The historical versions.
   */
  history?: ListAppConfigHistoryResponseBodyHistory[];
  /**
   * @remarks
   * The published versions.
   */
  publish?: ListAppConfigHistoryResponseBodyPublish[];
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. It can be used to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      history: 'History',
      publish: 'Publish',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      history: { 'type': 'array', 'itemType': ListAppConfigHistoryResponseBodyHistory },
      publish: { 'type': 'array', 'itemType': ListAppConfigHistoryResponseBodyPublish },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.history)) {
      $dara.Model.validateArray(this.history);
    }
    if(Array.isArray(this.publish)) {
      $dara.Model.validateArray(this.publish);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

