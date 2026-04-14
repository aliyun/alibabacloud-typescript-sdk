// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OneMetaKnowledgeBaseChunk extends $dara.Model {
  chunkMtime?: string;
  chunkTitle?: string;
  content?: string;
  docName?: string;
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

