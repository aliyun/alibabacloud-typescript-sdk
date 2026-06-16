// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNameListPageListResponseBodyResultObject extends $dara.Model {
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
   * The ID of the list variable content data.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * 本迭代测试
   */
  memo?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * nl_UN8otElLb490
   */
  name?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * accountId
   */
  nameListType?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 白名单
   */
  title?: string;
  /**
   * @remarks
   * The user UID.
   * 
   * @example
   * 130433202307074287
   */
  userId?: string;
  /**
   * @remarks
   * The variable value.
   * 
   * @example
   * 130433202307074287
   */
  value?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * @example
   * 762
   */
  variableId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      memo: 'memo',
      name: 'name',
      nameListType: 'nameListType',
      title: 'title',
      userId: 'userId',
      value: 'value',
      variableId: 'variableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      memo: 'string',
      name: 'string',
      nameListType: 'string',
      title: 'string',
      userId: 'string',
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

export class DescribeNameListPageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeNameListPageListResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 101
   */
  totalItem?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 9
   */
  totalPage?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      requestId: 'requestId',
      resultObject: 'resultObject',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      pageSize: 'string',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeNameListPageListResponseBodyResultObject },
      totalItem: 'string',
      totalPage: 'string',
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

