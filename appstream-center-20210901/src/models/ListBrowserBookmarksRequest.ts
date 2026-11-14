// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBrowserBookmarksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud browser group. You must specify either this parameter or BrowserInstanceGroupSetId, but not both.
   * 
   * @example
   * big-0c7loey7fzjq****
   */
  browserInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the browser delivery group set. You must specify either BrowserInstanceGroupSetId or BrowserInstanceGroupId, but not both.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  browserInstanceGroupSetId?: string;
  /**
   * @remarks
   * The keyword used for substring matching in the bookmark name or URL. Matching is case-insensitive for English letters. The value can contain up to 1,024 characters after leading and trailing whitespace is trimmed. If this parameter is not specified or contains only whitespace, no filtering is applied. Special characters are matched literally.
   * 
   * @example
   * example.com
   */
  keyword?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      browserInstanceGroupId: 'BrowserInstanceGroupId',
      browserInstanceGroupSetId: 'BrowserInstanceGroupSetId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserInstanceGroupId: 'string',
      browserInstanceGroupSetId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

