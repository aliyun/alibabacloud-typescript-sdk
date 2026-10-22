// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSolutionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace key. If this parameter is not specified, the default workspace is accessed. You can obtain the key from the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The answer content.
   * 
   * This parameter is required.
   * 
   * @example
   * Updated answer content
   */
  content?: string;
  /**
   * @remarks
   * The answer type. Valid values:
   * 
   * - 0: plain text
   * - 1: rich text
   * 
   * @example
   * 1
   */
  contentType?: number;
  /**
   * @remarks
   * The list of perspective codes.
   * 
   * This parameter is required.
   */
  perspectiveCodes?: string[];
  /**
   * @remarks
   * The answer ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100001333260
   */
  solutionId?: number;
  /**
   * @remarks
   * The list of tag IDs.
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

