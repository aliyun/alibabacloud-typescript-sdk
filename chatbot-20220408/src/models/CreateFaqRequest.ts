// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFaqRequest extends $dara.Model {
  /**
   * @remarks
   * The agent key. If omitted, the default agent is used. Find this key on the Agent Management page.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The ID of the knowledge category.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000053274
   */
  categoryId?: number;
  /**
   * @remarks
   * The knowledge end time. The time is in UTC and in ISO 8601 format.
   * 
   * @example
   * 2030-12-31T16:00:00Z
   */
  endDate?: string;
  /**
   * @remarks
   * The content of the default solution. Required if the fallback feature is enabled.
   * 
   * @example
   * 测试答案
   */
  solutionContent?: string;
  /**
   * @remarks
   * The type of the default solution. Valid values: `0` (plain text) and `1` (rich text).
   * 
   * @example
   * 0
   */
  solutionType?: number;
  /**
   * @remarks
   * The knowledge start time. The time is in UTC and in ISO 8601 format.
   * 
   * @example
   * 2022-05-25T16:28:36Z
   */
  startDate?: string;
  /**
   * @remarks
   * A list of tag IDs to associate with the knowledge.
   */
  tagIdList?: number[];
  /**
   * @remarks
   * The knowledge title. Max length: 120 characters.
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
      solutionContent: 'SolutionContent',
      solutionType: 'SolutionType',
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
      solutionContent: 'string',
      solutionType: 'number',
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

