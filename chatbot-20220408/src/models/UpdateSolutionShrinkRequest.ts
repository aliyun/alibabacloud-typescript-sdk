// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSolutionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The agent key. If you omit this parameter, the default agent is used. You can obtain the key on the Business Management page of your primary account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The content of the solution.
   * 
   * This parameter is required.
   * 
   * @example
   * 修改的答案内容
   */
  content?: string;
  /**
   * @remarks
   * The content type. Valid values: 0 for plain text and 1 for rich text.
   * 
   * @example
   * 1
   */
  contentType?: number;
  /**
   * @remarks
   * A list of perspective codes.
   * 
   * This parameter is required.
   */
  perspectiveCodes?: string[];
  /**
   * @remarks
   * The ID of the solution.
   * 
   * This parameter is required.
   * 
   * @example
   * 100001333260
   */
  solutionId?: number;
  /**
   * @remarks
   * A list of tag IDs.
   */
  tagIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentType: 'ContentType',
      perspectiveCodes: 'PerspectiveCodes',
      solutionId: 'SolutionId',
      tagIdListShrink: 'TagIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentType: 'number',
      perspectiveCodes: { 'type': 'array', 'itemType': 'string' },
      solutionId: 'number',
      tagIdListShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.perspectiveCodes)) {
      $dara.Model.validateArray(this.perspectiveCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

