// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDatasetDocumentsResponseBodyDataDocumentsChunkInfos extends $dara.Model {
  chunk?: string;
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
  categoryUuid?: string;
  chunk?: string;
  chunkInfos?: SearchDatasetDocumentsResponseBodyDataDocumentsChunkInfos[];
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * 用户指定的文档唯一ID
   */
  docId?: string;
  docType?: string;
  /**
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  extend1?: string;
  extend2?: string;
  extend3?: string;
  /**
   * @example
   * 2024-12-09 17:09:40
   */
  pubTime?: string;
  score?: number;
  searchSource?: string;
  searchSourceName?: string;
  searchSourceType?: string;
  /**
   * @example
   * 来源
   */
  sourceFrom?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  tags?: string[];
  /**
   * @example
   * xx
   */
  title?: string;
  /**
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
   * @example
   * NoData
   */
  code?: string;
  data?: SearchDatasetDocumentsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
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

