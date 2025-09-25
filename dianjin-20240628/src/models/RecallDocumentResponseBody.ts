// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecallDocumentResponseBodyDataChunkListPos extends $dara.Model {
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

export class RecallDocumentResponseBodyDataChunkList extends $dara.Model {
  /**
   * @example
   * 823746762354
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * http://oss-xxx-hangzhou.com/xxx
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
   * 839468263472
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * dscsbdsk
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 982374872364
   */
  nextChunkId?: string;
  pos?: RecallDocumentResponseBodyDataChunkListPos[];
  /**
   * @example
   * 827364827364832
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

export class RecallDocumentResponseBodyDataChunkPartList extends $dara.Model {
  /**
   * @example
   * 98327482364
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * http://oss-xxx-hangzhou.com/xxx
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
   * 92837482364
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * sjdhgjsd
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 2387648263542
   */
  nextChunkId?: string;
  pos?: RecallDocumentResponseBodyDataChunkPartListPos[];
  /**
   * @example
   * 32874682764
   */
  preChunkId?: string;
  /**
   * @example
   * 0.5
   */
  score?: number;
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
   * @example
   * 92837482364
   */
  docId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  documentMeta?: { [key: string]: any };
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * sjdhgjsd
   */
  libraryId?: string;
  /**
   * @example
   * test
   */
  title?: string;
  /**
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

export class RecallDocumentResponseBodyDataTextChunkList extends $dara.Model {
  /**
   * @example
   * 32874682364
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * http://oss-xxx-hangzhou.com/xxx
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
   * 8372467263542
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * djsgfsjd
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 23874682432
   */
  nextChunkId?: string;
  pos?: RecallDocumentResponseBodyDataTextChunkListPos[];
  /**
   * @example
   * 89473868346
   */
  preChunkId?: string;
  /**
   * @example
   * 0.5
   */
  score?: number;
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

export class RecallDocumentResponseBodyDataVectorChunkList extends $dara.Model {
  /**
   * @example
   * 8723642345276
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * https://oss-xxxx-hangzhou.com/test.pdf
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
   * 78326476235675372
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * djsgfsjd
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 293846872343
   */
  nextChunkId?: string;
  pos?: RecallDocumentResponseBodyDataVectorChunkListPos[];
  /**
   * @example
   * 873647326542
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
  chunkList?: RecallDocumentResponseBodyDataChunkList[];
  chunkPartList?: RecallDocumentResponseBodyDataChunkPartList[];
  chunkTextList?: string[];
  documents?: RecallDocumentResponseBodyDataDocuments[];
  /**
   * @example
   * 100
   */
  embeddingElapsedMs?: number;
  textChunkList?: RecallDocumentResponseBodyDataTextChunkList[];
  /**
   * @example
   * 100
   */
  textSearchElapsedMs?: number;
  /**
   * @example
   * 400
   */
  totalElapsedMs?: number;
  vectorChunkList?: RecallDocumentResponseBodyDataVectorChunkList[];
  /**
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
   * @example
   * 0
   */
  cost?: number;
  data?: RecallDocumentResponseBodyData;
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
   * 0bc13a9517168617617186457e401f
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

