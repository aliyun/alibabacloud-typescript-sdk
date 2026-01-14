// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseChunkRequest extends $dara.Model {
  /**
   * @example
   * content
   */
  chunkContent?: string;
  /**
   * @example
   * Enable
   */
  chunkStatus?: string;
  static names(): { [key: string]: string } {
    return {
      chunkContent: 'ChunkContent',
      chunkStatus: 'ChunkStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkContent: 'string',
      chunkStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

