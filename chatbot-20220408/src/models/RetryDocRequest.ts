// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryDocRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the workspace. If this parameter is not specified, the default workspace is accessed. You can obtain the key on the business management page of the Alibaba Cloud account.
   * 
   * @example
   * e2a20f74cd9042558002c0f7dc873739_p_outbound_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The knowledge ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

