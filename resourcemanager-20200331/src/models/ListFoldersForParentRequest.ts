// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFoldersForParentRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * If you leave this parameter empty, the information of the first-level subfolders of the Root folder is queried.
   * 
   * @example
   * r-b1****
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The keyword used for the query, such as a folder name.
   * 
   * Fuzzy match is supported.
   * 
   * @example
   * rdFolder
   */
  queryKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentFolderId: 'ParentFolderId',
      queryKeyword: 'QueryKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parentFolderId: 'string',
      queryKeyword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

