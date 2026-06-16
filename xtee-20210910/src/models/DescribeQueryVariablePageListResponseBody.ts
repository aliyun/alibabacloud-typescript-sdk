// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQueryVariablePageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The data source code.
   * 
   * @example
   * ds_vcaoii1697
   */
  dataSourceCode?: number;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * 姓名数据源
   */
  dataSourceName?: string;
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
   * The event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * The return value type.
   * 
   * @example
   * STRING
   */
  fieldType?: string;
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
   * The primary key ID of the custom query variable.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * The name of the custom query variable.
   * 
   * @example
   * 查询变量名称
   */
  name?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 24
   */
  total?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceCode: 'dataSourceCode',
      dataSourceName: 'dataSourceName',
      description: 'description',
      eventName: 'eventName',
      fieldType: 'fieldType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      name: 'name',
      status: 'status',
      total: 'total',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceCode: 'number',
      dataSourceName: 'string',
      description: 'string',
      eventName: 'string',
      fieldType: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      name: 'string',
      status: 'string',
      total: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQueryVariablePageListResponseBody extends $dara.Model {
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
   * The returned object.
   */
  resultObject?: DescribeQueryVariablePageListResponseBodyResultObject[];
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
      resultObject: { 'type': 'array', 'itemType': DescribeQueryVariablePageListResponseBodyResultObject },
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

