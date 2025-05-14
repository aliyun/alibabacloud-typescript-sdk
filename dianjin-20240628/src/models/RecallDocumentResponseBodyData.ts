// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RecallDocumentResponseBodyDataChunkList } from "./RecallDocumentResponseBodyDataChunkList";
import { RecallDocumentResponseBodyDataChunkPartList } from "./RecallDocumentResponseBodyDataChunkPartList";
import { RecallDocumentResponseBodyDataDocuments } from "./RecallDocumentResponseBodyDataDocuments";
import { RecallDocumentResponseBodyDataTextChunkList } from "./RecallDocumentResponseBodyDataTextChunkList";
import { RecallDocumentResponseBodyDataVectorChunkList } from "./RecallDocumentResponseBodyDataVectorChunkList";


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

