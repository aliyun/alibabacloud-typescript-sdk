// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChunkItem extends $dara.Model {
  chunkContent?: string;
  chunkId?: string;
  docElsIds?: string[];
  docId?: string;
  docName?: string;
  docUrl?: string;
  rerankScore?: number;
  score?: number;
  weightedScore?: number;
  static names(): { [key: string]: string } {
    return {
      chunkContent: 'chunkContent',
      chunkId: 'chunkId',
      docElsIds: 'docElsIds',
      docId: 'docId',
      docName: 'docName',
      docUrl: 'docUrl',
      rerankScore: 'rerankScore',
      score: 'score',
      weightedScore: 'weightedScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkContent: 'string',
      chunkId: 'string',
      docElsIds: { 'type': 'array', 'itemType': 'string' },
      docId: 'string',
      docName: 'string',
      docUrl: 'string',
      rerankScore: 'number',
      score: 'number',
      weightedScore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.docElsIds)) {
      $dara.Model.validateArray(this.docElsIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

