// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListsResponseBodyLists extends $dara.Model {
  /**
   * @remarks
   * The description of the list.
   * 
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom list. To get this ID, call the [ListLists](https://help.aliyun.com/document_detail/2850217.html) operation.
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
   * The number of items in the list.
   * 
   * @example
   * 100
   */
  length?: number;
  /**
   * @remarks
   * The name of the list.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The time when the list was last updated.
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
   * The total number of items across all lists.
   * 
   * @example
   * 5000
   */
  itemsUsage?: number;
  /**
   * @remarks
   * A paginated array of lists.
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
   * The page size.
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
   * The total number of filtered records.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of lists used by the account.
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

