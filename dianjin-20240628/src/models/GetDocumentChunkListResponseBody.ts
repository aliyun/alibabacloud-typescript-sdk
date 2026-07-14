// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentChunkListResponseBodyDataRecordsPos extends $dara.Model {
  /**
   * @remarks
   * Coordinate
   */
  axisArray?: number[];
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Text highlight area, used for highlighting text-type files
   */
  textHighlightArea?: number[];
  static names(): { [key: string]: string } {
    return {
      axisArray: 'axisArray',
      page: 'page',
      textHighlightArea: 'textHighlightArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axisArray: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      textHighlightArea: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.axisArray)) {
      $dara.Model.validateArray(this.axisArray);
    }
    if(Array.isArray(this.textHighlightArea)) {
      $dara.Model.validateArray(this.textHighlightArea);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentChunkListResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * Document chunk ID
   * 
   * @example
   * 28377468263482764
   */
  chunkId?: string;
  /**
   * @remarks
   * Document chunk metadata
   * 
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @remarks
   * Document chunk OSS address
   * 
   * @example
   * oss-xxxx-hangzhou.com/test.pdf
   */
  chunkOssUrl?: string;
  /**
   * @remarks
   * Document chunk text
   * 
   * @example
   * 这是一段测试文本
   */
  chunkText?: string;
  /**
   * @remarks
   * Document chunk type
   * 
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @remarks
   * Document ID
   * 
   * @example
   * 8947387648356
   */
  docId?: string;
  /**
   * @remarks
   * Document type
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * Library ID
   * 
   * @example
   * jhsdvne
   */
  libraryId?: string;
  /**
   * @remarks
   * Library name
   * 
   * @example
   * 测试文档库
   */
  libraryName?: string;
  /**
   * @remarks
   * Next document chunk ID
   * 
   * @example
   * 947538465
   */
  nextChunkId?: string;
  /**
   * @remarks
   * Document chunk position
   */
  pos?: GetDocumentChunkListResponseBodyDataRecordsPos[];
  /**
   * @remarks
   * Previous document chunk ID
   * 
   * @example
   * 9848346548365
   */
  preChunkId?: string;
  /**
   * @remarks
   * Document chunk score
   * 
   * @example
   * 0.5
   */
  score?: number;
  /**
   * @remarks
   * Document title
   * 
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunkId: 'chunkId',
      chunkMeta: 'chunkMeta',
      chunkOssUrl: 'chunkOssUrl',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
      docId: 'docId',
      fileType: 'fileType',
      libraryId: 'libraryId',
      libraryName: 'libraryName',
      nextChunkId: 'nextChunkId',
      pos: 'pos',
      preChunkId: 'preChunkId',
      score: 'score',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOssUrl: 'string',
      chunkText: 'string',
      chunkType: 'string',
      docId: 'string',
      fileType: 'string',
      libraryId: 'string',
      libraryName: 'string',
      nextChunkId: 'string',
      pos: { 'type': 'array', 'itemType': GetDocumentChunkListResponseBodyDataRecordsPos },
      preChunkId: 'string',
      score: 'number',
      title: 'string',
    };
  }

  validate() {
    if(this.chunkMeta) {
      $dara.Model.validateMap(this.chunkMeta);
    }
    if(Array.isArray(this.pos)) {
      $dara.Model.validateArray(this.pos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentChunkListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Current page
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Records per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Records
   */
  records?: GetDocumentChunkListResponseBodyDataRecords[];
  /**
   * @remarks
   * Total pages
   * 
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @remarks
   * Total records
   * 
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      totalPages: 'totalPages',
      totalRecords: 'totalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetDocumentChunkListResponseBodyDataRecords },
      totalPages: 'number',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentChunkListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Time consumed
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Response data
   */
  data?: GetDocumentChunkListResponseBodyData;
  /**
   * @remarks
   * Data type
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 2B8F6DC9-6FAF-576F-9095-CCD90FB2BDDF
   */
  requestId?: string;
  /**
   * @remarks
   * Success status
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Timestamp
   * 
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetDocumentChunkListResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

