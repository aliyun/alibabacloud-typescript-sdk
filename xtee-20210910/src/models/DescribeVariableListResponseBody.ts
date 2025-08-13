// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVariableListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Capacity.
   * 
   * @example
   * 100000
   */
  capacity?: number;
  /**
   * @remarks
   * Variable definition ID.
   * 
   * @example
   * 10
   */
  defineId?: string;
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
   * Extended information.
   * 
   * @example
   * 暂无
   */
  extendInfo?: { [key: string]: any };
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
   * Modification time.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Variable ID.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * Remaining capacity.
   * 
   * @example
   * 100000
   */
  leftCapacity?: number;
  /**
   * @remarks
   * Variable name
   * 
   * @example
   * __ipLocationCityCode__
   */
  name?: string;
  /**
   * @remarks
   * Variable output type
   * 
   * @example
   * STRING
   */
  outputsType?: string;
  /**
   * @remarks
   * Associated event ID.
   * 
   * @example
   * de_agdxgz0246
   */
  refObjId?: string;
  /**
   * @remarks
   * Associated event name.
   * 
   * @example
   * 注册事件
   */
  refObjName?: string;
  /**
   * @remarks
   * Associated object type of the variable
   * 
   * @example
   * EVENT
   */
  refObjType?: string;
  /**
   * @remarks
   * Source type.
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
   * 设备风险识别_标签
   */
  title?: string;
  /**
   * @remarks
   * Variable type.
   * 
   * @example
   * NATIVE
   */
  type?: string;
  /**
   * @remarks
   * User ID to which the data belongs.
   * 
   * @example
   * 100000
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      capacity: 'capacity',
      defineId: 'defineId',
      description: 'description',
      extendInfo: 'extendInfo',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      leftCapacity: 'leftCapacity',
      name: 'name',
      outputsType: 'outputsType',
      refObjId: 'refObjId',
      refObjName: 'refObjName',
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
      defineId: 'string',
      description: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      leftCapacity: 'number',
      name: 'string',
      outputsType: 'string',
      refObjId: 'string',
      refObjName: 'string',
      refObjType: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.extendInfo) {
      $dara.Model.validateMap(this.extendInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVariableListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
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
   * Page size, default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returned object.
   */
  resultObject?: DescribeVariableListResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 27
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 3
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
      resultObject: { 'type': 'array', 'itemType': DescribeVariableListResponseBodyResultObject },
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

