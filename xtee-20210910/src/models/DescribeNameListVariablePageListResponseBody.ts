// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNameListVariablePageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The used capacity.
   * 
   * @example
   * 3
   */
  capacity?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 变量描述
   */
  description?: string;
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
   * The named list ID.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * The remaining capacity.
   * 
   * @example
   * 99997
   */
  leftCapacity?: number;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * nl_UN8otElLb490
   */
  name?: string;
  /**
   * @remarks
   * The named list type.
   * 
   * @example
   * 手机号
   */
  nameListType?: string;
  /**
   * @remarks
   * The associated event code.
   * 
   * @example
   * -1
   */
  refObjId?: string;
  /**
   * @remarks
   * The association type.
   * 
   * @example
   * EVENT
   */
  refObjType?: number;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * SAF
   */
  sourceType?: string;
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
   * The variable type.
   * 
   * @example
   * NAME_LIST
   */
  type?: string;
  /**
   * @remarks
   * The user UID.
   * 
   * @example
   * 180650758xxxxxxx
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      capacity: 'capacity',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      leftCapacity: 'leftCapacity',
      name: 'name',
      nameListType: 'nameListType',
      refObjId: 'refObjId',
      refObjType: 'refObjType',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      leftCapacity: 'number',
      name: 'string',
      nameListType: 'string',
      refObjId: 'string',
      refObjType: 'number',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNameListVariablePageListResponseBody extends $dara.Model {
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
  resultObject?: DescribeNameListVariablePageListResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 101
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
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeNameListVariablePageListResponseBodyResultObject },
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

