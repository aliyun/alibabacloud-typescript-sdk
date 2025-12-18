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
   * The ID of the custom list.[](~~2850217~~)
   * 
   * @example
   * 40000001
   */
  id?: number;
  /**
   * @remarks
   * The list type.
   * 
   * @example
   * ip
   */
  kind?: string;
  /**
   * @remarks
   * The length of the list information array, which indicates how many items the list contains.
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
  itemsUsage?: number;
  /**
   * @remarks
   * The array that contains list information, including list data after paging.
   */
  lists?: ListListsResponseBodyLists[];
  /**
   * @remarks
   * The page number returned.
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
   * The total number of filtered lists.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of created lists.
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

