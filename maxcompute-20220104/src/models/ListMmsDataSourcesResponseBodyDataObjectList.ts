// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMmsDataSourcesResponseBodyDataObjectListConfig } from "./ListMmsDataSourcesResponseBodyDataObjectListConfig";


export class ListMmsDataSourcesResponseBodyDataObjectList extends $dara.Model {
  /**
   * @example
   * true
   */
  agentIsOnline?: boolean;
  config?: ListMmsDataSourcesResponseBodyDataObjectListConfig[];
  /**
   * @example
   * 2024-12-17 09:29:58
   */
  createTime?: string;
  /**
   * @example
   * 3
   */
  dbNum?: number;
  /**
   * @example
   * unexpected exception
   */
  errMsg?: string;
  /**
   * @example
   * 2000015
   */
  id?: number;
  /**
   * @example
   * 2024-12-17 15:44:17
   */
  lastUpdateTime?: string;
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * vpc-2zebqp6uojhdla46677tl:cn-beijing
   */
  networklink?: string;
  /**
   * @example
   * 10000000
   */
  partitionNum?: number;
  /**
   * @example
   * 2332
   */
  partitionsDoingNum?: number;
  /**
   * @example
   * 23
   */
  partitionsDoneNum?: number;
  /**
   * @example
   * 2323
   */
  partitionsFailedNum?: number;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * 1000253
   */
  scanId?: number;
  /**
   * @example
   * STARTED
   */
  status?: string;
  /**
   * @example
   * 1000
   */
  tableNum?: number;
  /**
   * @example
   * 18
   */
  tablesDoingNum?: number;
  /**
   * @example
   * 2323
   */
  tablesDoneNum?: number;
  /**
   * @example
   * 2
   */
  tablesFailedNum?: number;
  /**
   * @example
   * 22
   */
  tablesPartDoneNum?: number;
  /**
   * @example
   * BIGQUERY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agentIsOnline: 'agentIsOnline',
      config: 'config',
      createTime: 'createTime',
      dbNum: 'dbNum',
      errMsg: 'errMsg',
      id: 'id',
      lastUpdateTime: 'lastUpdateTime',
      name: 'name',
      networklink: 'networklink',
      partitionNum: 'partitionNum',
      partitionsDoingNum: 'partitionsDoingNum',
      partitionsDoneNum: 'partitionsDoneNum',
      partitionsFailedNum: 'partitionsFailedNum',
      region: 'region',
      scanId: 'scanId',
      status: 'status',
      tableNum: 'tableNum',
      tablesDoingNum: 'tablesDoingNum',
      tablesDoneNum: 'tablesDoneNum',
      tablesFailedNum: 'tablesFailedNum',
      tablesPartDoneNum: 'tablesPartDoneNum',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIsOnline: 'boolean',
      config: { 'type': 'array', 'itemType': ListMmsDataSourcesResponseBodyDataObjectListConfig },
      createTime: 'string',
      dbNum: 'number',
      errMsg: 'string',
      id: 'number',
      lastUpdateTime: 'string',
      name: 'string',
      networklink: 'string',
      partitionNum: 'number',
      partitionsDoingNum: 'number',
      partitionsDoneNum: 'number',
      partitionsFailedNum: 'number',
      region: 'string',
      scanId: 'number',
      status: 'string',
      tableNum: 'number',
      tablesDoingNum: 'number',
      tablesDoneNum: 'number',
      tablesFailedNum: 'number',
      tablesPartDoneNum: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.config)) {
      $dara.Model.validateArray(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

