// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListsResponseBodyLists extends $dara.Model {
  /**
   * @remarks
   * The list description.
   * 
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom list. You can obtain the ID by calling the [ListLists](https://help.aliyun.com/document_detail/2850217.html) operation.
   * 
   * @example
   * 40000001
   */
  id?: number;
  /**
   * @remarks
   * The kind of the list.
   * 
   * @example
   * ip
   */
  kind?: string;
  /**
   * @remarks
   * The length of the list content array, which indicates the number of items in the list.
   * 
   * @example
   * 100
   */
  length?: number;
  /**
   * @remarks
   * The list name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The time when the list was last modified.
   * 
   * Format: RFC 3339 / ISO 8601, UTC time zone (ending with Z).
   * 
   * Example: 2026-06-10T14:23:45Z
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      kind: 'Kind',
      length: 'Length',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      kind: 'string',
      length: 'number',
      name: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total item usage.
   * 
   * @example
   * 5000
   */
  itemsUsage?: number;
  /**
   * @remarks
   * The array of list information, which contains the paginated list data.
   */
  lists?: ListListsResponseBodyLists[];
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
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records after filtering.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * The amount of usage consumed by the user.
   * 
   * @example
   * 10
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      itemsUsage: 'ItemsUsage',
      lists: 'Lists',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemsUsage: 'number',
      lists: { 'type': 'array', 'itemType': ListListsResponseBodyLists },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      usage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lists)) {
      $dara.Model.validateArray(this.lists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

