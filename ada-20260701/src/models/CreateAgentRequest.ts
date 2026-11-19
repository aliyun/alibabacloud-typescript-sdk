// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the agent.
   * 
   * @example
   * Analyze code changes and generate code review comments
   */
  description?: string;
  /**
   * @remarks
   * The display name of the agent.
   * 
   * @example
   * Code review agent
   */
  displayName?: string;
  /**
   * @remarks
   * The list of knowledge base references, which can contain at most one element.
   * 
   * @example
   * [{"name":"code-review-guidelines"}]
   */
  knowledgeBases?: any;
  /**
   * @remarks
   * The name of the agent, which is also the unique identifier that cannot be modified after creation.
   * 
   * This parameter is required.
   * 
   * @example
   * code-review-agent
   */
  name?: string;
  /**
   * @remarks
   * The list of skill references. For specific fields, refer to the supplementary description of request parameters.
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
   * Check the correctness, security, and maintainability of code changes in the code review, and provide review comments based on severity
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The list of references to MCP server and connector names. The same array supports both types of entries. Specify only one type of reference for each entry. For MCP, omitting items indicates all public tools, and historically specified items retain their original values.
   * 
   * @example
   * [{"mcpServerName":"code-repository-mcp"},{"connectorName":"code-review-data"}]
   */
  tools?: any;
  /**
   * @remarks
   * The visibility scope of the agent. Valid values: user and tenant. Default value: user.
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

