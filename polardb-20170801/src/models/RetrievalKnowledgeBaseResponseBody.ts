// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrievalKnowledgeBaseResponseBodyResultsImageResources extends $dara.Model {
  /**
   * @remarks
   * The index of the source document that the image belongs to, starting from 0.
   * 
   * @example
   * 0
   */
  documentIndex?: number;
  /**
   * @remarks
   * The unique ID of the image resource.
   * 
   * @example
   * document-0/pictures/1
   */
  id?: string;
  /**
   * @remarks
   * The element reference of the image in the Docling source document structure.
   * 
   * @example
   * #/pictures/1
   */
  itemRef?: string;
  /**
   * @remarks
   * The media type of the image resource.
   * 
   * @example
   * image/png
   */
  mimeType?: string;
  /**
   * @remarks
   * The OSS URI of the image resource.
   * 
   * @example
   * oss://my-bucket/results/my-space/doc-001/artifacts/image-1.png
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      documentIndex: 'DocumentIndex',
      id: 'Id',
      itemRef: 'ItemRef',
      mimeType: 'MimeType',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentIndex: 'number',
      id: 'string',
      itemRef: 'string',
      mimeType: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrievalKnowledgeBaseResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The list of figure or table captions associated with the chunk.
   */
  captions?: string[];
  /**
   * @remarks
   * The list of Docling source document structured element references associated with the chunk. You can use these references to precisely locate original elements.
   */
  docItems?: string[];
  /**
   * @remarks
   * The unique ID of the file.
   * 
   * @example
   * 91b97b71-xxxx-xxxx-xxxx-33c6a6341cdc
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * 2024FinancialReport.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The chain of section headings that the chunk belongs to.
   */
  headings?: string[];
  /**
   * @remarks
   * The list of image resources referenced by the chunk.
   */
  imageResources?: RetrievalKnowledgeBaseResponseBodyResultsImageResources[];
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {}
   */
  metadata?: string;
  /**
   * @remarks
   * The list of page numbers that the chunk belongs to.
   */
  pageNumbers?: number[];
  /**
   * @remarks
   * The text content of the chunk.
   * 
   * @example
   * Financial report
   */
  shardContent?: string;
  /**
   * @remarks
   * The index of the chunk.
   * 
   * @example
   * 1
   */
  shardIndex?: number;
  /**
   * @remarks
   * The similarity score.
   * 
   * @example
   * 0.8
   */
  similarityScore?: number;
  static names(): { [key: string]: string } {
    return {
      captions: 'Captions',
      docItems: 'DocItems',
      fileId: 'FileId',
      fileName: 'FileName',
      headings: 'Headings',
      imageResources: 'ImageResources',
      metadata: 'Metadata',
      pageNumbers: 'PageNumbers',
      shardContent: 'ShardContent',
      shardIndex: 'ShardIndex',
      similarityScore: 'SimilarityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captions: { 'type': 'array', 'itemType': 'string' },
      docItems: { 'type': 'array', 'itemType': 'string' },
      fileId: 'string',
      fileName: 'string',
      headings: { 'type': 'array', 'itemType': 'string' },
      imageResources: { 'type': 'array', 'itemType': RetrievalKnowledgeBaseResponseBodyResultsImageResources },
      metadata: 'string',
      pageNumbers: { 'type': 'array', 'itemType': 'number' },
      shardContent: 'string',
      shardIndex: 'number',
      similarityScore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.captions)) {
      $dara.Model.validateArray(this.captions);
    }
    if(Array.isArray(this.docItems)) {
      $dara.Model.validateArray(this.docItems);
    }
    if(Array.isArray(this.headings)) {
      $dara.Model.validateArray(this.headings);
    }
    if(Array.isArray(this.imageResources)) {
      $dara.Model.validateArray(this.imageResources);
    }
    if(Array.isArray(this.pageNumbers)) {
      $dara.Model.validateArray(this.pageNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrievalKnowledgeBaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query text.
   * 
   * @example
   * Financial report
   */
  queryText?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CD35F3-F3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  /**
   * @remarks
   * The number of results.
   * 
   * @example
   * 5
   */
  resultCount?: number;
  /**
   * @remarks
   * The search results.
   */
  results?: RetrievalKnowledgeBaseResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      queryText: 'QueryText',
      requestId: 'RequestId',
      resultCount: 'ResultCount',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryText: 'string',
      requestId: 'string',
      resultCount: 'number',
      results: { 'type': 'array', 'itemType': RetrievalKnowledgeBaseResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

