// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkAgentCoreKnowledgeBaseParameters extends $dara.Model {
  /**
   * @remarks
   * The AgentCore knowledge base ID.
   * 
   * This parameter is required.
   * 
   * @example
   * kb-123
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The AgentCore knowledge base role name.
   * 
   * This parameter is required.
   * 
   * @example
   * kbRole
   */
  roleName?: string;
  /**
   * @remarks
   * The AgentCore workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * kws-123
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      roleName: 'RoleName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
      roleName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

