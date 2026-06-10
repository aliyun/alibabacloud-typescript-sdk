// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If you omit this parameter, the default business space is used. You can obtain the key on the Business Management page of your primary account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The knowledge type. Valid values: `1` (FAQ category) and `3` (document category). The default value is `1`.
   * 
   * @example
   * 1
   */
  knowledgeType?: number;
  /**
   * @remarks
   * The parent category ID.
   * 
   * @example
   * -1
   */
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      knowledgeType: 'KnowledgeType',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      knowledgeType: 'number',
      parentCategoryId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

