// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDocumentChunkRequestChunks } from "./UpdateDocumentChunkRequestChunks";


export class UpdateDocumentChunkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  chunks?: UpdateDocumentChunkRequestChunks[];
  /**
   * @remarks
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

