// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKBSyncLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the knowledge base. You can obtain the ID from the response of the CreateKnowledgeBase operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The ID of the synchronization link to delete. You can obtain the ID from the response of the CreateKBSyncLink operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pkbl-xxxxx
   */
  linkId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      linkId: 'LinkId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
      linkId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

