// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListsResponseBodyLists extends $dara.Model {
  /**
   * @remarks
   * 自定义响应页面描述
   * 
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @example
   * 40000001
   */
  id?: number;
  /**
   * @example
   * ip
   */
  kind?: string;
  /**
   * @example
   * 100
   */
  length?: number;
  /**
   * @example
   * example
   */
  name?: string;
  /**
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
  lists?: ListListsResponseBodyLists[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  /**
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

