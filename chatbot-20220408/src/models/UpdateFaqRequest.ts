// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFaqRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace key. If not specified, the default workspace is accessed. You can obtain the key value from the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The category ID of the knowledge entry.
   * 
   * This parameter is required.
   * 
   * @example
   * 30000049006
   */
  categoryId?: number;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2030-12-31T16:00:00Z
   */
  endDate?: string;
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
  /**
   * @remarks
   * The effective period.
   * 
   * @example
   * 2022-05-27T05:18:20Z
   */
  startDate?: string;
  /**
   * @remarks
   * The list of tag IDs.
   */
  tagIdList?: number[];
  /**
   * @remarks
   * The title of the knowledge entry.
   * 
   * This parameter is required.
   * 
   * @example
   * Test title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      startDate: 'StartDate',
      tagIdList: 'TagIdList',
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
      tagIdList: { 'type': 'array', 'itemType': 'number' },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tagIdList)) {
      $dara.Model.validateArray(this.tagIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

