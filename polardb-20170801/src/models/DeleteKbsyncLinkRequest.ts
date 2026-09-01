// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKBSyncLinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pkbl-xxxxx
   */
  linkId?: string;
  /**
   * @remarks
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

