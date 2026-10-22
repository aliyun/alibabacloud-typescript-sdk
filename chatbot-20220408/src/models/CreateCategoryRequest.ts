// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If this parameter is not specified, the default business space is accessed. You can obtain the key value from the business management page of the Alibaba Cloud account.
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
   * The category name.
   * 
   * This parameter is required.
   * 
   * @example
   * Test1
   */
  name?: string;
  /**
   * @remarks
   * The parent category ID. Default value: -1, which indicates the root directory.
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

