// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RecallDocumentResponseBodyDataTextChunkListPos } from "./RecallDocumentResponseBodyDataTextChunkListPos";


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

