// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDocumentChunkRequestChunks extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1987834755763847
   */
  chunkId?: string;
  /**
   * @remarks
   * This parameter is required.
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

