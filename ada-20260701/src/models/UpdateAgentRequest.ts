// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The new description. If this parameter is not passed, the original value is retained.
   * 
   * @example
   * Analyze CR code changes and check for correctness, security, and maintainability
   */
  description?: string;
  /**
   * @remarks
   * The new display name. If this parameter is not passed, the original value is retained.
   * 
   * @example
   * CR Code and Security Review Agent
   */
  displayName?: string;
  /**
   * @remarks
   * The expected current configuration revision number. This parameter is omitted by default. Pass the `AgentVersion` returned by the most recent `GetAgent` call when concurrency protection is required.
   * 
   * @example
   * 2
   */
  expectedVersion?: number;
  /**
   * @remarks
   * The list of knowledge base bindings, which can contain at most one element. If this parameter is not passed, the original value is retained. If a non-empty array is passed, it replaces the original value entirely. If `[ ]` is passed, all bindings are removed.
   * 
   * @example
   * [{"name":"code-review-guidelines"}]
   */
  knowledgeBases?: any;
  /**
   * @remarks
   * The name of the agent to be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * code-review-agent
   */
  name?: string;
  /**
   * @remarks
   * The list of skill references. If this parameter is not passed, the original value is retained. If a non-empty array is passed, it replaces the original value entirely. If `[ ]` is passed, all bindings are removed.
   * 
   * @example
   * [{"name":"code-review"}]
   */
  skills?: any;
  /**
   * @remarks
   * The new system prompt. If this parameter is not passed, the original value is retained.
   * 
   * @example
   * Check for code defects, security risks, and compatibility issues in the CR, and provide actionable modification suggestions
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The list of MCP server and connector name references. The same array supports the coexistence of both types of entries. Specify only one type of reference for each entry. For MCP, omitting items indicates all public tools, and historically specified items retain their original values.
   * 
   * @example
   * [{"mcpServerName":"code-repository-mcp"},{"connectorName":"code-review-data"}]
   */
  tools?: any;
  /**
   * @remarks
   * The new visibility scope. Valid values: `user` and `tenant`. If this parameter is not passed, the original value is retained.
   * 
   * @example
   * tenant
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      expectedVersion: 'ExpectedVersion',
      knowledgeBases: 'KnowledgeBases',
      name: 'Name',
      skills: 'Skills',
      systemPrompt: 'SystemPrompt',
      tools: 'Tools',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      expectedVersion: 'number',
      knowledgeBases: 'any',
      name: 'string',
      skills: 'any',
      systemPrompt: 'string',
      tools: 'any',
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

