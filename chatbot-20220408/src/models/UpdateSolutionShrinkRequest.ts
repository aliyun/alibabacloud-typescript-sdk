// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSolutionShrinkRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @example
   * 1
   */
  contentType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  perspectiveCodes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100001333260
   */
  solutionId?: number;
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

