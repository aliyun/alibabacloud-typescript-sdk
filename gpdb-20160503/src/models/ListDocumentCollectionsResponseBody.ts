// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocumentCollectionsResponseBodyItemsCollectionList extends $dara.Model {
  collectionName?: string;
  dimension?: number;
  embeddingModel?: string;
  fullTextRetrievalFields?: string;
  metadata?: string;
  metrics?: string;
  parser?: string;
  sparseRetrievalFields?: string;
  supportSparse?: boolean;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'CollectionName',
      dimension: 'Dimension',
      embeddingModel: 'EmbeddingModel',
      fullTextRetrievalFields: 'FullTextRetrievalFields',
      metadata: 'Metadata',
      metrics: 'Metrics',
      parser: 'Parser',
      sparseRetrievalFields: 'SparseRetrievalFields',
      supportSparse: 'SupportSparse',
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
      sparseRetrievalFields: 'string',
      supportSparse: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentCollectionsResponseBodyItems extends $dara.Model {
  collectionList?: ListDocumentCollectionsResponseBodyItemsCollectionList[];
  static names(): { [key: string]: string } {
    return {
      collectionList: 'CollectionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionList: { 'type': 'array', 'itemType': ListDocumentCollectionsResponseBodyItemsCollectionList },
    };
  }

  validate() {
    if(Array.isArray(this.collectionList)) {
      $dara.Model.validateArray(this.collectionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentCollectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  count?: number;
  items?: ListDocumentCollectionsResponseBodyItems;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      items: 'Items',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      items: ListDocumentCollectionsResponseBodyItems,
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

