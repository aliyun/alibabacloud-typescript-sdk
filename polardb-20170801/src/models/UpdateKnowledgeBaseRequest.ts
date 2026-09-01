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
   * 
   * * balanced (default): balanced mode.
   * * precise: precise mode.
   * * semantic: semantic mode.
   * * knn: KNN mode.
   * * rrf: reciprocal rank fusion (RRF) mode.
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

