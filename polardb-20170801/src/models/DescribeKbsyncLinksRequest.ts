// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKBSyncLinksRequest extends $dara.Model {
  /**
   * @remarks
   * The source channel of the synchronization link.
   * 
   * @example
   * FEISHU
   */
  imPlatform?: string;
  /**
   * @remarks
   * The unique ID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
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
      imPlatform: 'ImPlatform',
      knowledgeBaseId: 'KnowledgeBaseId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imPlatform: 'string',
      knowledgeBaseId: 'string',
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

