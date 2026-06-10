// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFaqShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If this parameter is omitted, the default business space is used. You can find this key on the Business Management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The ID of the knowledge entry\\"s category.
   * 
   * This parameter is required.
   * 
   * @example
   * 30000049006
   */
  categoryId?: number;
  /**
   * @remarks
   * The expiration date and time. The value must be in ISO 8601 format.
   * 
   * @example
   * 2030-12-31T16:00:00Z
   */
  endDate?: string;
  /**
   * @remarks
   * The ID of the knowledge entry.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @remarks
   * The effective start date and time. The value must be in ISO 8601 format.
   * 
   * @example
   * 2022-05-27T05:18:20Z
   */
  startDate?: string;
  /**
   * @remarks
   * A list of tag IDs.
   */
  tagIdListShrink?: string;
  /**
   * @remarks
   * The knowledge title.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      startDate: 'StartDate',
      tagIdListShrink: 'TagIdList',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
      endDate: 'string',
      knowledgeId: 'number',
      startDate: 'string',
      tagIdListShrink: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

