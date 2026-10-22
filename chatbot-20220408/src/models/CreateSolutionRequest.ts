// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSolutionRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the workspace. If this parameter is not specified, the default workspace is accessed. You can obtain the key on the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The content of the answer.
   * 
   * This parameter is required.
   * 
   * @example
   * Answer content
   */
  content?: string;
  /**
   * @remarks
   * The type of the answer. Valid values:
   * 
   * - 0: plain text.
   * - 1: rich text.
   * 
   * @example
   * 1
   */
  contentType?: number;
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
   * The list of perspective codes.
   * 
   * This parameter is required.
   */
  perspectiveCodes?: string[];
  /**
   * @remarks
   * The list of tag IDs.
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

