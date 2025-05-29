// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerankResponseBodyResultsResults extends $dara.Model {
  /**
   * @remarks
   * Re-ordered document information.
   * 
   * @example
   * ADBPG is the OLAP database of Alibaba Cloud.
   */
  document?: string;
  /**
   * @remarks
   * Index of this document in the request parameter Documents, starting from 0.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Rerank similarity score.
   * 
   * @example
   * 2.31412
   */
  relevanceScore?: number;
  static names(): { [key: string]: string } {
    return {
      document: 'Document',
      index: 'Index',
      relevanceScore: 'RelevanceScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      index: 'number',
      relevanceScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

