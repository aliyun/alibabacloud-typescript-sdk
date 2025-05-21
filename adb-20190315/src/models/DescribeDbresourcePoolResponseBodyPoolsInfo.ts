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

