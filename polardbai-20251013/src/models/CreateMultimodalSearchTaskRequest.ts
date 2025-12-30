// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultimodalSearchTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  DBClusterId?: string;
  /**
   * @example
   * ["ds-1", "ds-2"]
   */
  datasetIds?: string[];
  /**
   * @example
   * Multimodal-Embedding
   */
  embeddingModel?: string;
  /**
   * @example
   * 指示牌
   */
  query?: string;
  /**
   * @example
   * Multimodal-Search
   */
  searchModel?: string;
  /**
   * @example
   * 20
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      datasetIds: 'DatasetIds',
      embeddingModel: 'EmbeddingModel',
      query: 'Query',
      searchModel: 'SearchModel',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasetIds: { 'type': 'array', 'itemType': 'string' },
      embeddingModel: 'string',
      query: 'string',
      searchModel: 'string',
      topK: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasetIds)) {
      $dara.Model.validateArray(this.datasetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

