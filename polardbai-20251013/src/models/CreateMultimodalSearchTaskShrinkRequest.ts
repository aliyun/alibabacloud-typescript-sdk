// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultimodalSearchTaskShrinkRequest extends $dara.Model {
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
  datasetIdsShrink?: string;
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
      datasetIdsShrink: 'DatasetIds',
      embeddingModel: 'EmbeddingModel',
      query: 'Query',
      searchModel: 'SearchModel',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasetIdsShrink: 'string',
      embeddingModel: 'string',
      query: 'string',
      searchModel: 'string',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

