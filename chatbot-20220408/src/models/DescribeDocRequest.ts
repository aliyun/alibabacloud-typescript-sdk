// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001979424
   */
  knowledgeId?: number;
  /**
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

