// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDocumentChunkRequestChunks extends $dara.Model {
  /**
   * @remarks
   * Document chunk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1987834755763847
   */
  chunkId?: string;
  /**
   * @remarks
   * Document chunk text.
   * 
   * This parameter is required.
   * 
   * @example
   * 这是一段测试文本
   */
  chunkText?: string;
  static names(): { [key: string]: string } {
    return {
      chunkId: 'chunkId',
      chunkText: 'chunkText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      chunkText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocumentChunkRequest extends $dara.Model {
  /**
   * @remarks
   * List of document chunks.
   * 
   * This parameter is required.
   */
  chunks?: UpdateDocumentChunkRequestChunks[];
  /**
   * @remarks
   * Library ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sjdgdsfg
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'chunks',
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': UpdateDocumentChunkRequestChunks },
      libraryId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

