// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsDataSourceResponseBodyDataConfig extends $dara.Model {
  desc?: string;
  enums?: string[];
  /**
   * @example
   * basic_group
   */
  group?: string;
  /**
   * @example
   * bigquery.range.partition.migrate.type
   */
  key?: string;
  name?: string;
  /**
   * @example
   * Cluster or Partition
   */
  placeHolder?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * .keytab
   */
  subType?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * Partition
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      enums: 'enums',
      group: 'group',
      key: 'key',
      name: 'name',
      placeHolder: 'placeHolder',
      required: 'required',
      subType: 'subType',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enums: { 'type': 'array', 'itemType': 'string' },
      group: 'string',
      key: 'string',
      name: 'string',
      placeHolder: 'string',
      required: 'boolean',
      subType: 'string',
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    if(Array.isArray(this.enums)) {
      $dara.Model.validateArray(this.enums);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsDataSourceResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  agentIsOnline?: boolean;
  config?: GetMmsDataSourceResponseBodyDataConfig[];
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
   * vpc-2zebqp6uojhdla46677tl:cn-shanghai
   */
  networklink?: string;
  /**
   * @example
   * 10000000
   */
  partitionNum?: number;
  /**
   * @example
   * 23322
   */
  partitionsDoingNum?: number;
  /**
   * @example
   * 11113
   */
  partitionsDoneNum?: number;
  /**
   * @example
   * 32
   */
  partitionsFailedNum?: number;
  /**
   * @example
   * cn-shanghai
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
   * 19
   */
  tablesDoingNum?: number;
  /**
   * @example
   * 16
   */
  tablesDoneNum?: number;
  /**
   * @example
   * 2
   */
  tablesFailedNum?: number;
  /**
   * @example
   * 123
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
      config: { 'type': 'array', 'itemType': GetMmsDataSourceResponseBodyDataConfig },
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

export class GetMmsDataSourceResponseBody extends $dara.Model {
  data?: GetMmsDataSourceResponseBodyData;
  /**
   * @example
   * 98EC8C47-3D6D-560C-808B-84E494220A32
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMmsDataSourceResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

