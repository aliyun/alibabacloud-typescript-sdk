// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSolutionShrinkRequest extends $dara.Model {
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
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  perspectiveCodes?: string[];
  tagIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentType: 'ContentType',
      knowledgeId: 'KnowledgeId',
      perspectiveCodes: 'PerspectiveCodes',
      tagIdListShrink: 'TagIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentType: 'number',
      knowledgeId: 'number',
      perspectiveCodes: { 'type': 'array', 'itemType': 'string' },
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

