// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBrowserRestrictedURLsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the browser delivery group. You must specify either this parameter or BrowserInstanceGroupSetId, but not both. If you specify this parameter, the restricted URLs configured for the delivery group are queried.
   * 
   * @example
   * big-3jm9d0abc00example
   */
  browserInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the browser delivery group set. You must specify either this parameter or BrowserInstanceGroupId, but not both.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  browserInstanceGroupSetId?: string;
  /**
   * @remarks
   * The keyword used to filter access control URLs by using a contains match. The match is case-insensitive for English characters. The keyword can be up to 1,024 characters in length after leading and trailing spaces are removed. If you do not specify this parameter or specify only spaces, no filtering is performed. Special characters are matched literally.
   * 
   * @example
   * example.com
   */
  keyword?: string;
  /**
   * @remarks
   * The page number during paging. Default value: 0. If the value is less than 1, such as 0, the first page is returned. If the value is less than 0, a parameter error is returned. Set this parameter to 1 or greater.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records to return on each page during paging. Valid values: 1 to 200. Default value: 200. If the value is less than or equal to 0 or greater than 200, a parameter error is returned.
   * 
   * @example
   * 10
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

