// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkersShrinkRequest extends $dara.Model {
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
  groupShrink?: string;
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
  templateShrink?: string;
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
      groupShrink: 'Group',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      mcp: 'Mcp',
      modelName: 'ModelName',
      modelProvider: 'ModelProvider',
      nameLike: 'NameLike',
      nextToken: 'NextToken',
      templateShrink: 'Template',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      credential: 'string',
      groupShrink: 'string',
      instanceId: 'string',
      maxResults: 'number',
      mcp: 'string',
      modelName: 'string',
      modelProvider: 'string',
      nameLike: 'string',
      nextToken: 'string',
      templateShrink: 'string',
      versionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

