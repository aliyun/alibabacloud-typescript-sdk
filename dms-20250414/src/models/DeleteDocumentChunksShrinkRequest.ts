// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDocumentChunksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  chunkIdsShrink?: string;
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
      chunkIdsShrink: 'ChunkIds',
      documentName: 'DocumentName',
      kbUuid: 'KbUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkIdsShrink: 'string',
      documentName: 'string',
      kbUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

