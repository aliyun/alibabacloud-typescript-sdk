// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKBSyncLinkAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * kb-123456
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The unique identifier of the synchronization link.
   * 
   * This parameter is required.
   * 
   * @example
   * pkbl-123456
   */
  linkId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
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

