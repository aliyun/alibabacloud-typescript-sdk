// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The new description. If not specified, the existing value is retained.
   * 
   * @example
   * Analyzes CR code changes and checks for correctness, security, and maintainability
   */
  description?: string;
  /**
   * @remarks
   * The new display name. If not specified, the existing value is retained.
   * 
   * @example
   * CR Code and Security Review Agent
   */
  displayName?: string;
  /**
   * @remarks
   * The expected current configuration revision number. This parameter is omitted by default. For concurrency protection, pass in the `AgentVersion` returned by the most recent `GetAgent` call.
   * 
   * @example
   * 2
   */
  expectedVersion?: number;
  /**
   * @remarks
   * The list of knowledge base bindings, which contains at most one element. If not specified, the existing value is retained. A non-empty array replaces the entire value. Passing `[ ]` removes all bindings.
   * 
   * @example
   * [{"name":"code-review-guidelines"}]
   */
  knowledgeBases?: any;
  /**
   * @remarks
   * The name of the Agent to update.
   * 
   * This parameter is required.
   * 
   * @example
   * code-review-agent
   */
  name?: string;
  /**
   * @remarks
   * The list of Skill references. If not specified, the existing value is retained. A non-empty array replaces the entire value. Passing `[ ]` removes all bindings.
   * 
   * @example
   * [{"name":"code-review"}]
   */
  skills?: any;
  /**
   * @remarks
   * The new system prompt. If not specified, the existing value is retained.
   * 
   * @example
   * Check the CR for code defects, security risks, and compatibility issues, and provide actionable suggestions for fixes
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The list of MCP Server and Connector name references. The same array supports both types of entries. Each entry specifies one type of reference. If items is omitted for an MCP entry, all public tools are included. Previously specified items retain their existing values.
   * 
   * @example
   * [{"mcpServerName":"code-repository-mcp"},{"connectorName":"code-review-data"}]
   */
  tools?: any;
  /**
   * @remarks
   * The new visibility scope. Valid values:
   * - user
   * - tenant
   * 
   * If not specified, the existing value is retained.
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

