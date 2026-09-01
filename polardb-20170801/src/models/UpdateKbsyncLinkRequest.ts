// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKBSyncLinkRequest extends $dara.Model {
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
  /**
   * @example
   * 20
   */
  syncIntervalMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      linkId: 'LinkId',
      regionId: 'RegionId',
      syncIntervalMinutes: 'SyncIntervalMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
      linkId: 'string',
      regionId: 'string',
      syncIntervalMinutes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

