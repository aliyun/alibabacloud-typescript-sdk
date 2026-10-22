// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFaqShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the business space. If this parameter is not set, the default business space is accessed. You can obtain the key value from the business management page of the main account.
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
   * 1000053274
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
   * The default answer content. This parameter is required if the fallback perspective is enabled.
   * 
   * @example
   * Test answer
   */
  solutionContent?: string;
  /**
   * @remarks
   * The type of the default answer. Valid values:
   * 
   * - 0: plain text.
   * - 1: rich text.
   * 
   * @example
   * 0
   */
  solutionType?: number;
  /**
   * @remarks
   * The effective period.
   * 
   * @example
   * 2022-05-25T16:28:36Z
   */
  startDate?: string;
  /**
   * @remarks
   * The list of label IDs.
   */
  tagIdListShrink?: string;
  /**
   * @remarks
   * The title of the knowledge entry. Maximum length: 120 characters.
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
      solutionContent: 'SolutionContent',
      solutionType: 'SolutionType',
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
      solutionContent: 'string',
      solutionType: 'number',
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

