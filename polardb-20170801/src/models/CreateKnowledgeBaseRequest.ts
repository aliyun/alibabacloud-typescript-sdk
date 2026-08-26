// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the knowledge base.
   * 
   * @example
   * testkbDesc
   */
  description?: string;
  /**
   * @remarks
   * The type of the knowledge base: PERSONAL or PUBLIC.
   * 
   * @example
   * PUBLIC
   */
  knowledgeBaseType?: string;
  /**
   * @remarks
   * The unique identifier of the knowledge space.
   * 
   * This parameter is required.
   * 
   * @example
   * pks-xxxxxx
   */
  knowledgeSpaceId?: string;
  /**
   * @remarks
   * The name of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * testkb
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
   * * balanced (default): balanced mode
   * * precise: precise mode
   * * semantic: semantic mode
   * * knn: KNN mode
   * * rrf: reciprocal rank fusion
   * 
   * @example
   * balanced
   */
  searchMode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      knowledgeBaseType: 'KnowledgeBaseType',
      knowledgeSpaceId: 'KnowledgeSpaceId',
      name: 'Name',
      regionId: 'RegionId',
      searchMode: 'SearchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      knowledgeBaseType: 'string',
      knowledgeSpaceId: 'string',
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

