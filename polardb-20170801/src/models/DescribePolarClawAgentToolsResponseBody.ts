// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawAgentToolsResponseBodyCurrentConfig extends $dara.Model {
  /**
   * @remarks
   * The list of explicitly allowed tools.
   */
  allow?: string[];
  /**
   * @remarks
   * The list of additionally allowed tools.
   */
  alsoAllow?: string[];
  /**
   * @remarks
   * The list of denied tools.
   */
  deny?: string[];
  /**
   * @remarks
   * The tool profile.
   * 
   * @example
   * full
   */
  profile?: string;
  static names(): { [key: string]: string } {
    return {
      allow: 'Allow',
      alsoAllow: 'AlsoAllow',
      deny: 'Deny',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: { 'type': 'array', 'itemType': 'string' },
      alsoAllow: { 'type': 'array', 'itemType': 'string' },
      deny: { 'type': 'array', 'itemType': 'string' },
      profile: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allow)) {
      $dara.Model.validateArray(this.allow);
    }
    if(Array.isArray(this.alsoAllow)) {
      $dara.Model.validateArray(this.alsoAllow);
    }
    if(Array.isArray(this.deny)) {
      $dara.Model.validateArray(this.deny);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawAgentToolsResponseBodyGroupsTools extends $dara.Model {
  /**
   * @remarks
   * The list of profiles that include this tool by default.
   */
  defaultProfiles?: string[];
  /**
   * @remarks
   * The tool description.
   * 
   * @example
   * 读取指定文件内容
   */
  description?: string;
  /**
   * @remarks
   * The tool identifier.
   * 
   * @example
   * read
   */
  id?: string;
  /**
   * @remarks
   * The tool name.
   * 
   * @example
   * 读取文件
   */
  label?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * core
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      defaultProfiles: 'DefaultProfiles',
      description: 'Description',
      id: 'Id',
      label: 'Label',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultProfiles: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      id: 'string',
      label: 'string',
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.defaultProfiles)) {
      $dara.Model.validateArray(this.defaultProfiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawAgentToolsResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * The group identifier.
   * 
   * @example
   * file
   */
  id?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * 文件操作
   */
  label?: string;
  /**
   * @remarks
   * The source, which is core or a plugin ID.
   * 
   * @example
   * core
   */
  source?: string;
  /**
   * @remarks
   * The list of tools.
   */
  tools?: DescribePolarClawAgentToolsResponseBodyGroupsTools[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
      source: 'Source',
      tools: 'Tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
      source: 'string',
      tools: { 'type': 'array', 'itemType': DescribePolarClawAgentToolsResponseBodyGroupsTools },
    };
  }

  validate() {
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawAgentToolsResponseBodyProfiles extends $dara.Model {
  /**
   * @remarks
   * The profile identifier.
   * 
   * @example
   * full
   */
  id?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 全部工具
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawAgentToolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Agent ID
   * 
   * @example
   * main
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The current tool configuration.
   */
  currentConfig?: DescribePolarClawAgentToolsResponseBodyCurrentConfig;
  /**
   * @remarks
   * The list of tool groups.
   */
  groups?: DescribePolarClawAgentToolsResponseBodyGroups[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The list of available profiles.
   */
  profiles?: DescribePolarClawAgentToolsResponseBodyProfiles[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F45FFACC-xxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      code: 'Code',
      currentConfig: 'CurrentConfig',
      groups: 'Groups',
      message: 'Message',
      profiles: 'Profiles',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationId: 'string',
      code: 'number',
      currentConfig: DescribePolarClawAgentToolsResponseBodyCurrentConfig,
      groups: { 'type': 'array', 'itemType': DescribePolarClawAgentToolsResponseBodyGroups },
      message: 'string',
      profiles: { 'type': 'array', 'itemType': DescribePolarClawAgentToolsResponseBodyProfiles },
      requestId: 'string',
    };
  }

  validate() {
    if(this.currentConfig && typeof (this.currentConfig as any).validate === 'function') {
      (this.currentConfig as any).validate();
    }
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.profiles)) {
      $dara.Model.validateArray(this.profiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

