// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDocumentChunkListResponseBodyDataRecordsPos } from "./GetDocumentChunkListResponseBodyDataRecordsPos";


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

