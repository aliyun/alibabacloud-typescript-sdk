// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFaqShrinkRequest extends $dara.Model {
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
   * 30000049006
   */
  categoryId?: number;
  /**
   * @example
   * 2030-12-31T16:00:00Z
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @example
   * 2022-05-27T05:18:20Z
   */
  startDate?: string;
  tagIdListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
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

