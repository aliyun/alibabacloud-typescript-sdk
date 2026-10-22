// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the business space. If not specified, the default business space is accessed. Obtain the key value from the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The knowledge type. Valid values:
   * 
   * - 1: FAQ category.
   * - 3: Document category.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  knowledgeType?: number;
  /**
   * @remarks
   * The ID of the parent category.
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

