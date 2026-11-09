// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBrowserBookmarksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bookmark folder.
   * 
   * @example
   * Work
   */
  bookmarkFolder?: string;
  /**
   * @remarks
   * The bookmark ID.
   * 
   * @example
   * bm-0c7loey7fzjq****
   */
  bookmarkId?: string;
  /**
   * @remarks
   * The bookmark name.
   * 
   * @example
   * Alibaba Cloud
   */
  bookmarkName?: string;
  /**
   * @remarks
   * The bookmark URL.
   * 
   * @example
   * https://www.aliyun.com
   */
  bookmarkURL?: string;
  static names(): { [key: string]: string } {
    return {
      bookmarkFolder: 'BookmarkFolder',
      bookmarkId: 'BookmarkId',
      bookmarkName: 'BookmarkName',
      bookmarkURL: 'BookmarkURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookmarkFolder: 'string',
      bookmarkId: 'string',
      bookmarkName: 'string',
      bookmarkURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBrowserBookmarksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of bookmarks on the current page.
   */
  data?: ListBrowserBookmarksResponseBodyData[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which is used to troubleshoot issues.
   * 
   * @example
   * 01A0C2ED-95F2-1A37-9FC6-4A395179****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of bookmarks that meet the filtering conditions.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListBrowserBookmarksResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

