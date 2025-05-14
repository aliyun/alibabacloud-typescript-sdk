// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLiveRecordFilesResponseBodyFiles } from "./ListLiveRecordFilesResponseBodyFiles";


export class ListLiveRecordFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of index files.
   */
  files?: ListLiveRecordFilesResponseBodyFiles[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DE24625C-7C0F-4020-8448-****
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order of the index files by creation time.
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of files that meet the specified conditions.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': ListLiveRecordFilesResponseBodyFiles },
      pageNo: 'number',
      pageSize: 'string',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

