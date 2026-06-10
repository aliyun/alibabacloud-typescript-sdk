// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocRequest extends $dara.Model {
  /**
   * @remarks
   * The key that identifies the workspace. If this parameter is omitted, the default workspace is used. You can find this key on the workspace management page of your root account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The knowledge ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001979424
   */
  knowledgeId?: number;
  /**
   * @remarks
   * Specifies whether to return detailed information for paragraphs. true: Detailed information is returned. false: Detailed information is not returned (default).
   * 
   * @example
   * false
   */
  showDetail?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeId: 'KnowledgeId',
      showDetail: 'ShowDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeId: 'number',
      showDetail: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

