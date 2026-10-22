// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If this parameter is not specified, the default business space is accessed. You can obtain the key value on the business management page of the primary account.
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
   * Specifies whether to display detailed paragraph information of the document. Valid values:
   * - true: Display.
   * - false: Ignore (default).
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

