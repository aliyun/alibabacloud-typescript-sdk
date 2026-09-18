// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the Agent.
   * 
   * @example
   * Analyzes code changes and generates CR review comments
   */
  description?: string;
  /**
   * @remarks
   * The display name of the Agent.
   * 
   * @example
   * CR Code Review Agent
   */
  displayName?: string;
  /**
   * @remarks
   * The knowledge base reference list, which contains at most one element.
   * 
   * @example
   * [{"name":"code-review-guidelines"}]
   */
  knowledgeBases?: any;
  /**
   * @remarks
   * The Agent name, which is also the unique identifier that cannot be modified after creation.
   * 
   * This parameter is required.
   * 
   * @example
   * code-review-agent
   */
  name?: string;
  /**
   * @remarks
   * The Skill reference list. For specific fields, see "Supplementary description of request parameters".
   * 
   * @example
   * [{"name":"code-review"}]
   */
  skills?: any;
  /**
   * @remarks
   * The system prompt.
   * 
   * @example
   * Check the correctness, security, and maintainability of code changes in the CR, and provide review comments by severity
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The reference list of MCP Server and Connector names. The same array supports both types of entries. Each entry specifies one type of reference. If items is omitted for an MCP Server, all public tools are included. Previously specified items retain their original values.
   * 
   * @example
   * [{"mcpServerName":"code-repository-mcp"},{"connectorName":"code-review-data"}]
   */
  tools?: any;
  /**
   * @remarks
   * The visibility scope of the Agent. Valid values:
   * - user
   * - tenant
   * 
   * Default value: user.
   * 
   * @example
   * user
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
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

