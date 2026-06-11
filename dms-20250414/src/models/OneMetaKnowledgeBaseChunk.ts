// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OneMetaKnowledgeBaseChunk extends $dara.Model {
  /**
   * @remarks
   * The time when the chunk was last modified.
   * 
   * @example
   * 2026-04-20 15:51:27
   */
  chunkMtime?: string;
  /**
   * @remarks
   * The title of the chunk.
   * 
   * @example
   * titile1
   */
  chunkTitle?: string;
  /**
   * @remarks
   * The content of the chunk.
   * 
   * @example
   * abc
   */
  content?: string;
  /**
   * @remarks
   * The name of the document.
   * 
   * @example
   * test.md
   */
  docName?: string;
  /**
   * @remarks
   * The unique identifier for the chunk.
   * 
   * @example
   * 2e12aeb5-52cd-4834-bcd8-****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      chunkMtime: 'ChunkMtime',
      chunkTitle: 'ChunkTitle',
      content: 'Content',
      docName: 'DocName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkMtime: 'string',
      chunkTitle: 'string',
      content: 'string',
      docName: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

