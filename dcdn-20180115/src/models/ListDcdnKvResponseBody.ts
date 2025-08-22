// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDcdnKvResponseBodyKeys extends $dara.Model {
  /**
   * @remarks
   * The value of the key obtained in this traversal.
   * 
   * @example
   * Key1
   */
  name?: string;
  /**
   * @remarks
   * The time when the key was updated.
   * 
   * @example
   * 2021-12-13T07:46:03Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListDcdnKvResponseBody extends $dara.Model {
  /**
   * @remarks
   * The keys obtained in this traversal.
   */
  keys?: ListDcdnKvResponseBodyKeys[];
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 100
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D61E4801-EAFF-4A63-AAE1-FBF6CE1CFD1C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1024
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': ListDcdnKvResponseBodyKeys },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

