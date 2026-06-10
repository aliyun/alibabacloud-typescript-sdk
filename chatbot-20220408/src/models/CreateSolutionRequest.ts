// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSolutionRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the business space. If this parameter is omitted, the system uses the default business space. You can obtain the key from the Business Management page of your primary account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The content of the knowledge answer.
   * 
   * This parameter is required.
   * 
   * @example
   * 答案内容
   */
  content?: string;
  /**
   * @remarks
   * The answer type. Valid values: `0` (plain text) and `1` (rich text).
   * 
   * @example
   * 1
   */
  contentType?: number;
  /**
   * @remarks
   * The ID of the knowledge.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @remarks
   * A list of perspective codes.
   * 
   * This parameter is required.
   */
  perspectiveCodes?: string[];
  /**
   * @remarks
   * A list of tag IDs.
   */
  tagIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentType: 'ContentType',
      knowledgeId: 'KnowledgeId',
      perspectiveCodes: 'PerspectiveCodes',
      tagIdList: 'TagIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentType: 'number',
      knowledgeId: 'number',
      perspectiveCodes: { 'type': 'array', 'itemType': 'string' },
      tagIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.perspectiveCodes)) {
      $dara.Model.validateArray(this.perspectiveCodes);
    }
    if(Array.isArray(this.tagIdList)) {
      $dara.Model.validateArray(this.tagIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

