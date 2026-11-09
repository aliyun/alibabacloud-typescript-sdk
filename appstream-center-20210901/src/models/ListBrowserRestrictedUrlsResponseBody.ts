// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBrowserRestrictedURLsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the restricted URL record.
   * 
   * @example
   * ru-3jm9d0abc00example
   */
  restrictedURLId?: string;
  /**
   * @remarks
   * The URL address that is restricted from access.
   * 
   * @example
   * https://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      restrictedURLId: 'RestrictedURLId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restrictedURLId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBrowserRestrictedURLsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of restricted URLs on the current page. Each record contains a restricted URL and its unique identifier. If no restricted URLs are configured under the specified conditions, an empty array is returned.
   */
  data?: ListBrowserRestrictedURLsResponseBodyData[];
  /**
   * @remarks
   * The actual page number used in this query. This is the echoed value of the PageNumber request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The actual number of entries returned per page in this query. This is the echoed value of the PageSize request parameter.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request. You can use the ID to locate call records and troubleshoot issues. The example value is partially masked.
   * 
   * @example
   * D4A13D91-****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of restricted URL records that meet the filter conditions. This value is independent of the number of records returned on the current page and can be used with PageSize to calculate the total number of pages. If no records meet the conditions, 0 is returned.
   * 
   * @example
   * 2
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
      data: { 'type': 'array', 'itemType': ListBrowserRestrictedURLsResponseBodyData },
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

