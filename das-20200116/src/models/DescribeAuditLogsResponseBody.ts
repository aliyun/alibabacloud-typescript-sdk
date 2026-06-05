// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 100.104.16.251
   */
  clientIp?: string;
  /**
   * @example
   * 53815
   */
  clientPort?: string;
  /**
   * @example
   * mysql
   */
  clientUa?: string;
  /**
   * @example
   * ds
   */
  columnName?: string;
  /**
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @example
   * chngc_b2b_migration_sh
   */
  databaseName?: string;
  /**
   * @example
   * 10
   */
  effectRow?: number;
  /**
   * @example
   * 1
   */
  executeStatus?: number;
  /**
   * @example
   * 1751870592000
   */
  executeTime?: number;
  id?: number;
  /**
   * @example
   * True
   */
  inWhiteList?: boolean;
  /**
   * @example
   * 2
   */
  instanceAuditStatus?: string;
  /**
   * @example
   * instance dscription
   */
  instanceDescription?: string;
  /**
   * @example
   * test-instance-003
   */
  instanceName?: string;
  /**
   * @example
   * aliyun
   */
  ipType?: string;
  /**
   * @example
   * SLOW_SQL
   */
  logSource?: string;
  /**
   * @example
   * 1751870592000
   */
  logTime?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * Drop
   */
  operateType?: string;
  ossObjectKey?: string;
  /**
   * @example
   * test01
   */
  packageName?: string;
  /**
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @example
   * 5
   */
  productId?: number;
  /**
   * @example
   * 10
   */
  ruleCategory?: string;
  /**
   * @example
   * 9953411
   */
  ruleId?: string;
  /**
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @example
   * select * from test03
   */
  sqlText?: string;
  /**
   * @example
   * it_table
   */
  tableName?: string;
  /**
   * @example
   * 19********94
   */
  userId?: string;
  /**
   * @example
   * admin
   */
  userName?: string;
  /**
   * @example
   * 1
   */
  warnLevel?: string;
  warnLevelName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      clientPort: 'ClientPort',
      clientUa: 'ClientUa',
      columnName: 'ColumnName',
      creationTime: 'CreationTime',
      databaseName: 'DatabaseName',
      effectRow: 'EffectRow',
      executeStatus: 'ExecuteStatus',
      executeTime: 'ExecuteTime',
      id: 'Id',
      inWhiteList: 'InWhiteList',
      instanceAuditStatus: 'InstanceAuditStatus',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      ipType: 'IpType',
      logSource: 'LogSource',
      logTime: 'LogTime',
      message: 'Message',
      operateType: 'OperateType',
      ossObjectKey: 'OssObjectKey',
      packageName: 'PackageName',
      productCode: 'ProductCode',
      productId: 'ProductId',
      ruleCategory: 'RuleCategory',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sqlText: 'SqlText',
      tableName: 'TableName',
      userId: 'UserId',
      userName: 'UserName',
      warnLevel: 'WarnLevel',
      warnLevelName: 'WarnLevelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      clientPort: 'string',
      clientUa: 'string',
      columnName: 'string',
      creationTime: 'number',
      databaseName: 'string',
      effectRow: 'number',
      executeStatus: 'number',
      executeTime: 'number',
      id: 'number',
      inWhiteList: 'boolean',
      instanceAuditStatus: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      ipType: 'string',
      logSource: 'string',
      logTime: 'number',
      message: 'string',
      operateType: 'string',
      ossObjectKey: 'string',
      packageName: 'string',
      productCode: 'string',
      productId: 'number',
      ruleCategory: 'string',
      ruleId: 'string',
      ruleName: 'string',
      sqlText: 'string',
      tableName: 'string',
      userId: 'string',
      userName: 'string',
      warnLevel: 'string',
      warnLevelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogsResponseBody extends $dara.Model {
  /**
   * @example
   * 3926fba5-1774-44f4-af2d-ac7b33e86c3b
   */
  asyncRequestId?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: DescribeAuditLogsResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * A7021857-AFD9-5AD6-979D-AA7DFC5AFADF
   */
  requestId?: string;
  /**
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      asyncRequestId: 'AsyncRequestId',
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncRequestId: 'string',
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeAuditLogsResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

