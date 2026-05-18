// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDocumentChunksRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  chunkIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.md
   */
  documentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kb-***
   */
  kbUuid?: string;
  static names(): { [key: string]: string } {
    return {
      chunkIds: 'ChunkIds',
      documentName: 'DocumentName',
      kbUuid: 'KbUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkIds: { 'type': 'array', 'itemType': 'string' },
      documentName: 'string',
      kbUuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunkIds)) {
      $dara.Model.validateArray(this.chunkIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

