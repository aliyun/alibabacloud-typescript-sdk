// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePredefinedDocumentRequestChunks extends $dara.Model {
  /**
   * @remarks
   * The metadata for the document chunk.
   * 
   * @example
   * {"a": "1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @remarks
   * The order of the chunk. This parameter is optional.
   * 
   * @example
   * 1
   */
  chunkOrder?: number;
  /**
   * @remarks
   * The text content of the document chunk.
   * 
   * @example
   * 这是一段测试文本
   */
  chunkText?: string;
  /**
   * @remarks
   * The type of the document chunk.
   * 
   * @example
   * text
   */
  chunkType?: string;
  static names(): { [key: string]: string } {
    return {
      chunkMeta: 'chunkMeta',
      chunkOrder: 'chunkOrder',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOrder: 'number',
      chunkText: 'string',
      chunkType: 'string',
    };
  }

  validate() {
    if(this.chunkMeta) {
      $dara.Model.validateMap(this.chunkMeta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePredefinedDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * A list of document chunks.
   */
  chunks?: CreatePredefinedDocumentRequestChunks[];
  /**
   * @remarks
   * The ID of the document library.
   * 
   * @example
   * a1b2c3
   */
  libraryId?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {"a": "1"}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The title of the document.
   * 
   * @example
   * 测试文档
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'chunks',
      libraryId: 'libraryId',
      metadata: 'metadata',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': CreatePredefinedDocumentRequestChunks },
      libraryId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

