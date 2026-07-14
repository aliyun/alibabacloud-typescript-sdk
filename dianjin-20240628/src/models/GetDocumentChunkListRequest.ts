// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentChunkListRequest extends $dara.Model {
  /**
   * @remarks
   * List of document chunk IDs
   */
  chunkIdList?: string[];
  /**
   * @remarks
   * Document ID
   * 
   * This parameter is required.
   * 
   * @example
   * 182364872346
   */
  docId?: string;
  /**
   * @remarks
   * Library ID
   * 
   * This parameter is required.
   * 
   * @example
   * dsjgfdjgfxxx
   */
  libraryId?: string;
  /**
   * @remarks
   * Sorting method
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * Sort field
   * 
   * @example
   * gmtCreate
   */
  orderBy?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Search query keyword
   * 
   * @example
   * test
   */
  searchQuery?: string;
  static names(): { [key: string]: string } {
    return {
      chunkIdList: 'chunkIdList',
      docId: 'docId',
      libraryId: 'libraryId',
      order: 'order',
      orderBy: 'orderBy',
      page: 'page',
      pageSize: 'pageSize',
      searchQuery: 'searchQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkIdList: { 'type': 'array', 'itemType': 'string' },
      docId: 'string',
      libraryId: 'string',
      order: 'string',
      orderBy: 'string',
      page: 'number',
      pageSize: 'number',
      searchQuery: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunkIdList)) {
      $dara.Model.validateArray(this.chunkIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

