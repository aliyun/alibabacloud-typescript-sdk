// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDatasetDocumentsResponseBodyDataDocumentsChunkInfos extends $dara.Model {
  /**
   * @remarks
   * The content of the chunk.
   * 
   * @example
   * xx
   */
  chunk?: string;
  /**
   * @remarks
   * The relevance score of the chunk.
   * 
   * @example
   * 0.77
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      chunk: 'Chunk',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunk: 'string',
      score: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatasetDocumentsResponseBodyDataDocuments extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for the category.
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * The content of the relevant chunk. This field is returned only in `chunk` mode.
   * 
   * @example
   * xx
   */
  chunk?: string;
  /**
   * @remarks
   * A list of relevant chunks from the document. This field is returned only in `document` mode.
   */
  chunkInfos?: SearchDatasetDocumentsResponseBodyDataDocumentsChunkInfos[];
  /**
   * @remarks
   * The content of the document.
   * 
   * @example
   * xx
   */
  content?: string;
  /**
   * @remarks
   * The user-defined unique ID for the document.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * The document type.
   * 
   * @example
   * text
   */
  docType?: string;
  /**
   * @remarks
   * The unique system ID of the document.
   * 
   * @example
   * xxx
   */
  docUuid?: string;
  /**
   * @remarks
   * Custom extension field 1.
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Custom extension field 2.
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Custom extension field 3.
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * The publication time, in `yyyy-MM-dd HH:mm:ss` format.
   * 
   * @example
   * 2024-12-09 17:09:40
   */
  pubTime?: string;
  /**
   * @remarks
   * The relevance score.
   * 
   * @example
   * 0.5
   */
  score?: number;
  /**
   * @remarks
   * The unique identifier for the dataset.
   * 
   * @example
   * xx
   */
  searchSource?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * xx
   */
  searchSourceName?: string;
  /**
   * @remarks
   * The dataset type.
   * 
   * @example
   * xx
   */
  searchSourceType?: string;
  /**
   * @remarks
   * The source of the document.
   * 
   * @example
   * 来源
   */
  sourceFrom?: string;
  /**
   * @remarks
   * The summary of the document.
   * 
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: string[];
  /**
   * @remarks
   * The title of the document.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * The URL of the document.
   * 
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      chunk: 'Chunk',
      chunkInfos: 'ChunkInfos',
      content: 'Content',
      docId: 'DocId',
      docType: 'DocType',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      sourceFrom: 'SourceFrom',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      chunk: 'string',
      chunkInfos: { 'type': 'array', 'itemType': SearchDatasetDocumentsResponseBodyDataDocumentsChunkInfos },
      content: 'string',
      docId: 'string',
      docType: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      sourceFrom: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunkInfos)) {
      $dara.Model.validateArray(this.chunkInfos);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatasetDocumentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The document list.
   */
  documents?: SearchDatasetDocumentsResponseBodyDataDocuments[];
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': SearchDatasetDocumentsResponseBodyDataDocuments },
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatasetDocumentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: SearchDatasetDocumentsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The status message.
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
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the request succeeded (`true`) or failed (`false`).
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SearchDatasetDocumentsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

