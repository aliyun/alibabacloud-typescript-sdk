// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChunkItem extends $dara.Model {
  chunkContent?: string;
  /**
   * @example
   * b0x7,b1x10
   */
  chunkId?: string;
  docElsIds?: string[];
  /**
   * @example
   * b4620821aea92c062d8d19ad793243669cf9ae2b900e6967dee6ee9f3bf5feed
   */
  docId?: string;
  docName?: string;
  /**
   * @example
   * jobs/a4123b3f-9287-4c61-b59d-32e40fcb0a31/document/8b24a2e06669427fb3dc9812374d9d1a.pdf
   */
  docUrl?: string;
  /**
   * @example
   * 0.5053711
   */
  rerankScore?: number;
  /**
   * @example
   * 0.4295678
   */
  score?: number;
  /**
   * @example
   * 0.47252458
   */
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

