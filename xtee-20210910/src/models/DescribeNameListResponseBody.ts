// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNameListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The name list content ID.
   * 
   * @example
   * 30
   */
  id?: number;
  /**
   * @remarks
   * The variable identifier.
   * 
   * @example
   * NAME_LIST
   */
  identifier?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 变量的title
   */
  title?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * 321311193502064288
   */
  value?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * @example
   * 393314
   */
  variableId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      identifier: 'identifier',
      title: 'title',
      value: 'value',
      variableId: 'variableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      identifier: 'string',
      title: 'string',
      value: 'string',
      variableId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNameListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned objects.
   */
  resultObject?: DescribeNameListResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      resultObject: 'resultObject',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      resultObject: { 'type': 'array', 'itemType': DescribeNameListResponseBodyResultObject },
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

