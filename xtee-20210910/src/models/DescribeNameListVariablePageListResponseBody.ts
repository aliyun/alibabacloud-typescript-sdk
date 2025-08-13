// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNameListVariablePageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Used capacity
   * 
   * @example
   * 3
   */
  capacity?: number;
  /**
   * @remarks
   * Description information.
   * 
   * @example
   * 变量描述
   */
  description?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Name list ID
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * Remaining capacity
   * 
   * @example
   * 99997
   */
  leftCapacity?: number;
  /**
   * @remarks
   * Parameter name.
   * 
   * @example
   * nl_UN8otElLb490
   */
  name?: string;
  /**
   * @remarks
   * Name list type
   * 
   * @example
   * 手机号
   */
  nameListType?: string;
  /**
   * @remarks
   * Associated event eventCode
   * 
   * @example
   * -1
   */
  refObjId?: string;
  /**
   * @remarks
   * Association type
   * 
   * @example
   * EVENT
   */
  refObjType?: number;
  /**
   * @remarks
   * Data source
   * 
   * @example
   * SAF
   */
  sourceType?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 白名单
   */
  title?: string;
  /**
   * @remarks
   * Variable type
   * 
   * @example
   * NAME_LIST
   */
  type?: string;
  /**
   * @remarks
   * User UID
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Page size, default value is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeNameListVariablePageListResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 101
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages
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

