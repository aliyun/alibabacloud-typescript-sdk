// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveRequest extends $dara.Model {
  documentIds?: number[];
  folderIds?: string[];
  /**
   * @example
   * 0
   */
  preRetrieveTopK?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "What\\"s the meaning of the file?"
   */
  query?: string;
  /**
   * @example
   * 0.0
   */
  rerankerThreshold?: number;
  /**
   * @example
   * 10
   */
  topK?: number;
  useReranker?: boolean;
  static names(): { [key: string]: string } {
    return {
      documentIds: 'documentIds',
      folderIds: 'folderIds',
      preRetrieveTopK: 'preRetrieveTopK',
      query: 'query',
      rerankerThreshold: 'rerankerThreshold',
      topK: 'topK',
      useReranker: 'useReranker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentIds: { 'type': 'array', 'itemType': 'number' },
      folderIds: { 'type': 'array', 'itemType': 'string' },
      preRetrieveTopK: 'number',
      query: 'string',
      rerankerThreshold: 'number',
      topK: 'number',
      useReranker: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.documentIds)) {
      $dara.Model.validateArray(this.documentIds);
    }
    if(Array.isArray(this.folderIds)) {
      $dara.Model.validateArray(this.folderIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

