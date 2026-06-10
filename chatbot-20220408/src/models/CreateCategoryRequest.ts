// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the business space. If this parameter is not specified, the default business space is used. You can obtain the key from the Business Management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The business code.
   * 
   * @example
   * bizcode123
   */
  bizCode?: string;
  /**
   * @remarks
   * The knowledge type. Valid values are 1 for an FAQ category and 3 for a document category. The default value is 1.
   * 
   * @example
   * 1
   */
  knowledgeType?: number;
  /**
   * @remarks
   * The category name.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent category. Defaults to -1, which indicates the root category.
   * 
   * @example
   * -1
   */
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      bizCode: 'BizCode',
      knowledgeType: 'KnowledgeType',
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      bizCode: 'string',
      knowledgeType: 'number',
      name: 'string',
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

