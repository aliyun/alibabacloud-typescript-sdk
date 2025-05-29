// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocumentCollectionsResponseBodyItemsCollectionList extends $dara.Model {
  /**
   * @remarks
   * The name of the document collection.
   * 
   * @example
   * document
   */
  collectionName?: string;
  /**
   * @remarks
   * The number of vector dimensions.
   * 
   * @example
   * 1536
   */
  dimension?: number;
  /**
   * @remarks
   * The name of the vector algorithm.
   * 
   * @example
   * text-embeddding-v1
   */
  embeddingModel?: string;
  /**
   * @remarks
   * The fields that are used for full-text search. Multiple fields are separated by commas (,).
   * 
   * @example
   * title
   */
  fullTextRetrievalFields?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {\\"page\\": \\"int\\", \\"title\\": \\"text\\"}
   */
  metadata?: string;
  /**
   * @remarks
   * The vector similarity algorithm.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The analyzer that is used for full-text search.
   * 
   * @example
   * zh_cn
   */
  parser?: string;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'CollectionName',
      dimension: 'Dimension',
      embeddingModel: 'EmbeddingModel',
      fullTextRetrievalFields: 'FullTextRetrievalFields',
      metadata: 'Metadata',
      metrics: 'Metrics',
      parser: 'Parser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionName: 'string',
      dimension: 'number',
      embeddingModel: 'string',
      fullTextRetrievalFields: 'string',
      metadata: 'string',
      metrics: 'string',
      parser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

