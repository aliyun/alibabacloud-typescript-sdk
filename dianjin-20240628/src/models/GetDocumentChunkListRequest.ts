// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentChunkListRequest extends $dara.Model {
  chunkIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 182364872346
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dsjgfdjgfxxx
   */
  libraryId?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * gmtCreate
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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

