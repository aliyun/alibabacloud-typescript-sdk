// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentChunkListResponseBodyDataRecordsPos extends $dara.Model {
  axisArray?: number[];
  /**
   * @example
   * 1
   */
  page?: number;
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
   * @example
   * 28377468263482764
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * oss-xxxx-hangzhou.com/test.pdf
   */
  chunkOssUrl?: string;
  chunkText?: string;
  /**
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @example
   * 8947387648356
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * jhsdvne
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 947538465
   */
  nextChunkId?: string;
  pos?: GetDocumentChunkListResponseBodyDataRecordsPos[];
  /**
   * @example
   * 9848346548365
   */
  preChunkId?: string;
  /**
   * @example
   * 0.5
   */
  score?: number;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: GetDocumentChunkListResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  totalPages?: number;
  /**
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
   * @example
   * null
   */
  cost?: number;
  data?: GetDocumentChunkListResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 2B8F6DC9-6FAF-576F-9095-CCD90FB2BDDF
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

