// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecallDocumentResponseBodyDataChunkListPos extends $dara.Model {
  /**
   * @remarks
   * Coordinates.
   */
  axisArray?: number[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Text highlight area, used for text-type file highlighting.
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

export class RecallDocumentResponseBodyDataChunkList extends $dara.Model {
  /**
   * @remarks
   * Document chunk ID.
   * 
   * @example
   * 823746762354
   */
  chunkId?: string;
  /**
   * @remarks
   * Document chunk metadata.
   * 
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @remarks
   * Document chunk OSS address.
   * 
   * @example
   * http://oss-xxx-hangzhou.com/xxx
   */
  chunkOssUrl?: string;
  /**
   * @remarks
   * Document chunk text.
   * 
   * @example
   * 测试文档块
   */
  chunkText?: string;
  /**
   * @remarks
   * Document chunk type.
   * 
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @remarks
   * Document ID.
   * 
   * @example
   * 839468263472
   */
  docId?: string;
  /**
   * @remarks
   * Document type.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * Document library ID.
   * 
   * @example
   * dscsbdsk
   */
  libraryId?: string;
  /**
   * @remarks
   * Document library name.
   * 
   * @example
   * 测试文档库
   */
  libraryName?: string;
  /**
   * @remarks
   * Next document chunk ID.
   * 
   * @example
   * 982374872364
   */
  nextChunkId?: string;
  /**
   * @remarks
   * Document chunk position.
   */
  pos?: RecallDocumentResponseBodyDataChunkListPos[];
  /**
   * @remarks
   * Previous document chunk ID.
   * 
   * @example
   * 827364827364832
   */
  preChunkId?: string;
  /**
   * @remarks
   * Document chunk score.
   * 
   * @example
   * 0.5
   */
  score?: number;
  /**
   * @remarks
   * Document title.
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
      pos: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataChunkListPos },
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

export class RecallDocumentResponseBodyDataChunkPartListPos extends $dara.Model {
  /**
   * @remarks
   * Coordinates.
   */
  axisArray?: number[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Text highlight area, used for text-type file highlighting.
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

export class RecallDocumentResponseBodyDataChunkPartList extends $dara.Model {
  /**
   * @remarks
   * Document chunk ID.
   * 
   * @example
   * 98327482364
   */
  chunkId?: string;
  /**
   * @remarks
   * Document chunk metadata.
   * 
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @remarks
   * Document chunk OSS address.
   * 
   * @example
   * http://oss-xxx-hangzhou.com/xxx
   */
  chunkOssUrl?: string;
  /**
   * @remarks
   * Document chunk text.
   * 
   * @example
   * 测试文档块
   */
  chunkText?: string;
  /**
   * @remarks
   * Document chunk type.
   * 
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @remarks
   * Document ID.
   * 
   * @example
   * 92837482364
   */
  docId?: string;
  /**
   * @remarks
   * Document type.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * Document library ID.
   * 
   * @example
   * sjdhgjsd
   */
  libraryId?: string;
  /**
   * @remarks
   * Document library name.
   * 
   * @example
   * 测试文档库
   */
  libraryName?: string;
  /**
   * @remarks
   * Next document chunk ID.
   * 
   * @example
   * 2387648263542
   */
  nextChunkId?: string;
  /**
   * @remarks
   * Document chunk position.
   */
  pos?: RecallDocumentResponseBodyDataChunkPartListPos[];
  /**
   * @remarks
   * Previous document chunk ID.
   * 
   * @example
   * 32874682764
   */
  preChunkId?: string;
  /**
   * @remarks
   * Document chunk score.
   * 
   * @example
   * 0.5
   */
  score?: number;
  /**
   * @remarks
   * Document title.
   * 
   * @example
   * 测试文档标题
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
      pos: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataChunkPartListPos },
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

export class RecallDocumentResponseBodyDataDocuments extends $dara.Model {
  /**
   * @remarks
   * Document ID.
   * 
   * @example
   * 92837482364
   */
  docId?: string;
  /**
   * @remarks
   * Document metadata.
   * 
   * @example
   * {"a":"1"}
   */
  documentMeta?: { [key: string]: any };
  /**
   * @remarks
   * Document type.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Document library ID.
   * 
   * @example
   * sjdhgjsd
   */
  libraryId?: string;
  /**
   * @remarks
   * Document title.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * Document link.
   * 
   * @example
   * http://oss-xxx-hangzhou.com/test.pdf
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      documentMeta: 'documentMeta',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      libraryId: 'libraryId',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      documentMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileType: 'string',
      gmtCreate: 'string',
      libraryId: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.documentMeta) {
      $dara.Model.validateMap(this.documentMeta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataTextChunkListPos extends $dara.Model {
  /**
   * @remarks
   * Coordinates.
   */
  axisArray?: number[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Text highlight area, used for text-type file highlighting.
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

export class RecallDocumentResponseBodyDataTextChunkList extends $dara.Model {
  /**
   * @remarks
   * Document chunk ID.
   * 
   * @example
   * 32874682364
   */
  chunkId?: string;
  /**
   * @remarks
   * Document chunk metadata.
   * 
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @remarks
   * Document chunk OSS address.
   * 
   * @example
   * http://oss-xxx-hangzhou.com/xxx
   */
  chunkOssUrl?: string;
  /**
   * @remarks
   * Document chunk text.
   * 
   * @example
   * 这是一段测试文档块
   */
  chunkText?: string;
  /**
   * @remarks
   * Document chunk type.
   * 
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @remarks
   * Document ID.
   * 
   * @example
   * 8372467263542
   */
  docId?: string;
  /**
   * @remarks
   * Document type.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * Document library ID.
   * 
   * @example
   * djsgfsjd
   */
  libraryId?: string;
  /**
   * @remarks
   * Document library name.
   * 
   * @example
   * 测试文档库
   */
  libraryName?: string;
  /**
   * @remarks
   * Next document chunk ID.
   * 
   * @example
   * 23874682432
   */
  nextChunkId?: string;
  /**
   * @remarks
   * Document chunk position.
   */
  pos?: RecallDocumentResponseBodyDataTextChunkListPos[];
  /**
   * @remarks
   * Previous document chunk ID.
   * 
   * @example
   * 89473868346
   */
  preChunkId?: string;
  /**
   * @remarks
   * Document chunk score.
   * 
   * @example
   * 0.5
   */
  score?: number;
  /**
   * @remarks
   * Document title.
   * 
   * @example
   * 测试文档标题
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
      pos: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataTextChunkListPos },
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

export class RecallDocumentResponseBodyDataVectorChunkListPos extends $dara.Model {
  /**
   * @remarks
   * Coordinates.
   */
  axisArray?: number[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Text highlight area, used for text-type file highlighting.
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

export class RecallDocumentResponseBodyDataVectorChunkList extends $dara.Model {
  /**
   * @remarks
   * Document chunk ID.
   * 
   * @example
   * 8723642345276
   */
  chunkId?: string;
  /**
   * @remarks
   * Document chunk metadata.
   * 
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @remarks
   * Document chunk OSS address.
   * 
   * @example
   * https://oss-xxxx-hangzhou.com/test.pdf
   */
  chunkOssUrl?: string;
  /**
   * @remarks
   * Document chunk text.
   * 
   * @example
   * 这是一段测试文本
   */
  chunkText?: string;
  /**
   * @remarks
   * Document chunk type.
   * 
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @remarks
   * Document ID.
   * 
   * @example
   * 78326476235675372
   */
  docId?: string;
  /**
   * @remarks
   * Document type.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * Document library ID.
   * 
   * @example
   * djsgfsjd
   */
  libraryId?: string;
  /**
   * @remarks
   * Document library name.
   * 
   * @example
   * 测试文档库
   */
  libraryName?: string;
  /**
   * @remarks
   * Next document chunk ID.
   * 
   * @example
   * 293846872343
   */
  nextChunkId?: string;
  /**
   * @remarks
   * Document chunk position.
   */
  pos?: RecallDocumentResponseBodyDataVectorChunkListPos[];
  /**
   * @remarks
   * Previous document chunk ID.
   * 
   * @example
   * 873647326542
   */
  preChunkId?: string;
  /**
   * @remarks
   * Document chunk score.
   * 
   * @example
   * 0.5
   */
  score?: number;
  /**
   * @remarks
   * Document title.
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
      pos: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataVectorChunkListPos },
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

export class RecallDocumentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Chunk list.
   */
  chunkList?: RecallDocumentResponseBodyDataChunkList[];
  /**
   * @remarks
   * Chunk part (layout recognition result) list.
   */
  chunkPartList?: RecallDocumentResponseBodyDataChunkPartList[];
  /**
   * @remarks
   * Chunk text list.
   */
  chunkTextList?: string[];
  /**
   * @remarks
   * Document list.
   */
  documents?: RecallDocumentResponseBodyDataDocuments[];
  /**
   * @remarks
   * Vector computation time elapsed.
   * 
   * @example
   * 100
   */
  embeddingElapsedMs?: number;
  /**
   * @remarks
   * List of chunks retrieved from the text index.
   */
  textChunkList?: RecallDocumentResponseBodyDataTextChunkList[];
  /**
   * @remarks
   * Text search time elapsed.
   * 
   * @example
   * 100
   */
  textSearchElapsedMs?: number;
  /**
   * @remarks
   * Total time elapsed, including vector computation time, vector search time, and text search time (depending on retrieval parameters).
   * 
   * @example
   * 400
   */
  totalElapsedMs?: number;
  /**
   * @remarks
   * List of chunks retrieved from the vector index.
   */
  vectorChunkList?: RecallDocumentResponseBodyDataVectorChunkList[];
  /**
   * @remarks
   * Vector search time elapsed.
   * 
   * @example
   * 100
   */
  vectorSearchElapsedMs?: number;
  static names(): { [key: string]: string } {
    return {
      chunkList: 'chunkList',
      chunkPartList: 'chunkPartList',
      chunkTextList: 'chunkTextList',
      documents: 'documents',
      embeddingElapsedMs: 'embeddingElapsedMs',
      textChunkList: 'textChunkList',
      textSearchElapsedMs: 'textSearchElapsedMs',
      totalElapsedMs: 'totalElapsedMs',
      vectorChunkList: 'vectorChunkList',
      vectorSearchElapsedMs: 'vectorSearchElapsedMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkList: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataChunkList },
      chunkPartList: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataChunkPartList },
      chunkTextList: { 'type': 'array', 'itemType': 'string' },
      documents: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataDocuments },
      embeddingElapsedMs: 'number',
      textChunkList: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataTextChunkList },
      textSearchElapsedMs: 'number',
      totalElapsedMs: 'number',
      vectorChunkList: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataVectorChunkList },
      vectorSearchElapsedMs: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.chunkList)) {
      $dara.Model.validateArray(this.chunkList);
    }
    if(Array.isArray(this.chunkPartList)) {
      $dara.Model.validateArray(this.chunkPartList);
    }
    if(Array.isArray(this.chunkTextList)) {
      $dara.Model.validateArray(this.chunkTextList);
    }
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    if(Array.isArray(this.textChunkList)) {
      $dara.Model.validateArray(this.textChunkList);
    }
    if(Array.isArray(this.vectorChunkList)) {
      $dara.Model.validateArray(this.vectorChunkList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Time elapsed.
   * 
   * @example
   * 0
   */
  cost?: number;
  /**
   * @remarks
   * Response data.
   */
  data?: RecallDocumentResponseBodyData;
  /**
   * @remarks
   * Data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0bc13a9517168617617186457e401f
   */
  requestId?: string;
  /**
   * @remarks
   * Success.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Timestamp.
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
      data: RecallDocumentResponseBodyData,
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

