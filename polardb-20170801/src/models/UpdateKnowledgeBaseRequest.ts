// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the knowledge base.
   * 
   * @example
   * test desc
   */
  description?: string;
  /**
   * @remarks
   * The ID of the knowledge base to update. You can obtain the ID from the response of the CreateKnowledgeBase operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The name of the knowledge base.
   * 
   * @example
   * testName
   */
  name?: string;
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
  /**
   * @remarks
   * The search mode. Valid values:
   * * balanced: Balanced mode. This is the default value.
   * * precise: Precise mode.
   * * semantic: Semantic mode.
   * * knn: KNN mode.
   * * rrf: RRF fusion.
   * 
   * @example
   * balanced
   */
  searchMode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      knowledgeBaseId: 'KnowledgeBaseId',
      name: 'Name',
      regionId: 'RegionId',
      searchMode: 'SearchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      knowledgeBaseId: 'string',
      name: 'string',
      regionId: 'string',
      searchMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

