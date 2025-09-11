// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBResourcePoolResponseBodyPoolsInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the resource group was created.
   * 
   * @example
   * 2022-03-09 16:57:35.241
   */
  createTime?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * >  Each node consumes 16 cores and 64 GB memory.
   * 
   * @example
   * 2
   */
  nodeNum?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * USER_DEFAULT
   */
  poolName?: string;
  /**
   * @remarks
   * The database accounts that are associated with the resource group.
   * 
   * @example
   * testb,testc
   */
  poolUsers?: string;
  /**
   * @remarks
   * The mode in which SQL statements are executed.
   * 
   * *   **batch**
   * *   **interactive**
   * 
   * >  For more information, see [Query execution modes](https://help.aliyun.com/document_detail/189502.html).
   * 
   * @example
   * default_type
   */
  queryType?: string;
  /**
   * @remarks
   * The time when the resource group was updated.
   * 
   * @example
   * 2022-03-09 16:57:35.241
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      nodeNum: 'NodeNum',
      poolName: 'PoolName',
      poolUsers: 'PoolUsers',
      queryType: 'QueryType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      nodeNum: 'number',
      poolName: 'string',
      poolUsers: 'string',
      queryType: 'string',
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

export class DescribeDBResourcePoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Details of the resource group.
   */
  poolsInfo?: DescribeDBResourcePoolResponseBodyPoolsInfo[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      poolsInfo: 'PoolsInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      poolsInfo: { 'type': 'array', 'itemType': DescribeDBResourcePoolResponseBodyPoolsInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.poolsInfo)) {
      $dara.Model.validateArray(this.poolsInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

