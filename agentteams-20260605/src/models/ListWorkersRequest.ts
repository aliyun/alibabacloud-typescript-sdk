// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkersRequestGroup extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * member
   */
  role?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * team
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      role: 'Role',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      role: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkersRequestTemplate extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * 标签
   */
  label?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkersRequest extends $dara.Model {
  /**
   * @remarks
   * The Agent runtime type filter.
   * 
   * @example
   * Qwenpaw
   */
  agentType?: string;
  /**
   * @remarks
   * The credential name filter.
   * 
   * @example
   * cred-demo
   */
  credential?: string;
  /**
   * @remarks
   * The team group filter.
   * 
   * @example
   * {}
   */
  group?: ListWorkersRequestGroup;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * inst-demo
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The MCP server name filter.
   * 
   * @example
   * mcp-demo
   */
  mcp?: string;
  /**
   * @remarks
   * The model name filter.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The model provider filter.
   * 
   * @example
   * dashscope
   */
  modelProvider?: string;
  /**
   * @remarks
   * The fuzzy match filter for the Worker name.
   * 
   * @example
   * worker
   */
  nameLike?: string;
  /**
   * @remarks
   * The pagination token used to query the next page of data.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * The template filter.
   * 
   * @example
   * {}
   */
  template?: ListWorkersRequestTemplate;
  /**
   * @remarks
   * The Worker version number filter.
   * 
   * @example
   * v1.0.0
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      credential: 'Credential',
      group: 'Group',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      mcp: 'Mcp',
      modelName: 'ModelName',
      modelProvider: 'ModelProvider',
      nameLike: 'NameLike',
      nextToken: 'NextToken',
      template: 'Template',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      credential: 'string',
      group: ListWorkersRequestGroup,
      instanceId: 'string',
      maxResults: 'number',
      mcp: 'string',
      modelName: 'string',
      modelProvider: 'string',
      nameLike: 'string',
      nextToken: 'string',
      template: ListWorkersRequestTemplate,
      versionCode: 'string',
    };
  }

  validate() {
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

