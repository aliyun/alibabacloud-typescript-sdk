// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadDocumentJobResponseBodyChunkResult extends $dara.Model {
  /**
   * @remarks
   * The URL of the file after chunking. The validity period of the URL is 2 hours. The file is in the JSONL format. Each line is in the `{"page_content":"*****", "metadata": {"**":"***","**":"***"}` format.
   * 
   * @example
   * http://xxx/test.jsonl
   */
  chunkFileUrl?: string;
  /**
   * @remarks
   * The URL of the file that does not contain metadata after chunking. The validity period of the URL is 2 hours. The file is in the TXT format. Each line is a chunk. The file can be easily used for embedding.
   * 
   * @example
   * http://xxx/test.txt
   */
  plainChunkFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      chunkFileUrl: 'ChunkFileUrl',
      plainChunkFileUrl: 'PlainChunkFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkFileUrl: 'string',
      plainChunkFileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

