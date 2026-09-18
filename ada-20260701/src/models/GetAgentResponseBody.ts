// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Agent ID。
   * 
   * @example
   * agent_00000000000000000000000000000001
   */
  agentId?: string;
  /**
   * @remarks
   * The current configuration revision number.
   * 
   * @example
   * 2
   */
  agentVersion?: number;
  /**
   * @remarks
   * Indicates whether the current identity can delete the agent.
   * 
   * @example
   * true
   */
  canDelete?: boolean;
  /**
   * @remarks
   * Indicates whether the current identity can modify the agent.
   * 
   * @example
   * true
   */
  canModify?: boolean;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1788332400000
   */
  createdAt?: number;
  /**
   * @remarks
   * The description of the agent. This field may not be returned if it is not configured.
   * 
   * @example
   * Analyzes code changes and generates CR review comments
   */
  description?: string;
  /**
   * @remarks
   * The display name of the agent. This field may not be returned if it is not configured.
   * 
   * @example
   * CR Code Review Agent
   */
  displayName?: string;
  /**
   * @remarks
   * The list of knowledge base references. The list contains at most one element.
   * 
   * @example
   * [{"name":"code-review-guidelines"}]
   */
  knowledgeBases?: any;
  /**
   * @remarks
   * The display metadata of the agent. For specific fields, see "Supplementary description of response elements".
   * 
   * @example
   * {"iconUrl":"https://example.com/icons/code-review-agent.png"}
   */
  metadata?: any;
  /**
   * @remarks
   * The saved model configuration. This field is returned only for official agents. The value supports an object array and is compatible with legacy single objects and strings. An empty array returns [ \\]. Object arrays preserve the original order, duplicate names, and object fields.
   * 
   * @example
   * [{"name":"base","default":true},{"name":"base"},{"name":"base","settings":{"thinking":false,"topK":5}}]
   */
  model?: any;
  /**
   * @remarks
   * The name of the agent.
   * 
   * @example
   * code-review-agent
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the agent is an official agent provided by the platform.
   * 
   * @example
   * false
   */
  official?: boolean;
  /**
   * @remarks
   * The request ID, which is used for Tracing Analysis and troubleshooting.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  /**
   * @remarks
   * The list of skill references. For specific fields, see "Supplementary description of response elements".
   * 
   * @example
   * [{"name":"code-review"}]
   */
  skills?: any;
  /**
   * @remarks
   * The status of the agent. The default status of a newly created agent is `draft`.
   * 
   * @example
   * draft
   */
  status?: string;
  /**
   * @remarks
   * The system prompt. This field may not be returned if it is not configured.
   * 
   * @example
   * Check the correctness, security, and maintainability of code changes in the CR, and provide review comments by severity
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The list of MCP Server and Connector name references. For element fields, see the following section.
   * 
   * @example
   * [{"mcpServerName":"code-repository-mcp"},{"connectorName":"code-review-data"}]
   */
  tools?: any;
  /**
   * @remarks
   * The most recent update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1788332700000
   */
  updatedAt?: number;
  /**
   * @remarks
   * The visibility scope of the agent. Valid values: `user` and `tenant`.
   * 
   * @example
   * user
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentVersion: 'AgentVersion',
      canDelete: 'CanDelete',
      canModify: 'CanModify',
      createdAt: 'CreatedAt',
      description: 'Description',
      displayName: 'DisplayName',
      knowledgeBases: 'KnowledgeBases',
      metadata: 'Metadata',
      model: 'Model',
      name: 'Name',
      official: 'Official',
      requestId: 'RequestId',
      skills: 'Skills',
      status: 'Status',
      systemPrompt: 'SystemPrompt',
      tools: 'Tools',
      updatedAt: 'UpdatedAt',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'number',
      canDelete: 'boolean',
      canModify: 'boolean',
      createdAt: 'number',
      description: 'string',
      displayName: 'string',
      knowledgeBases: 'any',
      metadata: 'any',
      model: 'any',
      name: 'string',
      official: 'boolean',
      requestId: 'string',
      skills: 'any',
      status: 'string',
      systemPrompt: 'string',
      tools: 'any',
      updatedAt: 'number',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

