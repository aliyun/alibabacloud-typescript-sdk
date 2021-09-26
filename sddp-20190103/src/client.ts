// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchDeleteDataLimitResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDataLimitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchDeleteDataLimitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchDeleteDataLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigRequest extends $tea.Model {
  lang?: string;
  code?: string;
  description?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      code: 'Code',
      description: 'Description',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      code: 'string',
      description: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigResponseBody extends $tea.Model {
  id?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataLimitRequest extends $tea.Model {
  lang?: string;
  resourceType?: number;
  serviceRegionId?: string;
  parentId?: string;
  userName?: string;
  password?: string;
  auditStatus?: number;
  autoScan?: number;
  logStoreDay?: number;
  engineType?: string;
  port?: number;
  ocrStatus?: number;
  eventStatus?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceType: 'ResourceType',
      serviceRegionId: 'ServiceRegionId',
      parentId: 'ParentId',
      userName: 'UserName',
      password: 'Password',
      auditStatus: 'AuditStatus',
      autoScan: 'AutoScan',
      logStoreDay: 'LogStoreDay',
      engineType: 'EngineType',
      port: 'Port',
      ocrStatus: 'OcrStatus',
      eventStatus: 'EventStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceType: 'number',
      serviceRegionId: 'string',
      parentId: 'string',
      userName: 'string',
      password: 'string',
      auditStatus: 'number',
      autoScan: 'number',
      logStoreDay: 'number',
      engineType: 'string',
      port: 'number',
      ocrStatus: 'number',
      eventStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataLimitResponseBody extends $tea.Model {
  id?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataLimitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataLimitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequest extends $tea.Model {
  lang?: string;
  name?: string;
  category?: number;
  content?: string;
  statExpress?: string;
  riskLevelId?: number;
  ruleType?: number;
  productCode?: string;
  productId?: number;
  warnLevel?: number;
  description?: string;
  contentCategory?: number;
  status?: number;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      name: 'Name',
      category: 'Category',
      content: 'Content',
      statExpress: 'StatExpress',
      riskLevelId: 'RiskLevelId',
      ruleType: 'RuleType',
      productCode: 'ProductCode',
      productId: 'ProductId',
      warnLevel: 'WarnLevel',
      description: 'Description',
      contentCategory: 'ContentCategory',
      status: 'Status',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      name: 'string',
      category: 'number',
      content: 'string',
      statExpress: 'string',
      riskLevelId: 'number',
      ruleType: 'number',
      productCode: 'string',
      productId: 'number',
      warnLevel: 'number',
      description: 'string',
      contentCategory: 'number',
      status: 'number',
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBody extends $tea.Model {
  id?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScanTaskRequest extends $tea.Model {
  dataLimitId?: number;
  intervalDay?: number;
  runHour?: number;
  runMinute?: number;
  taskName?: string;
  taskUserName?: string;
  ossScanPath?: string;
  scanRange?: number;
  scanRangeContent?: string;
  resourceType?: number;
  static names(): { [key: string]: string } {
    return {
      dataLimitId: 'DataLimitId',
      intervalDay: 'IntervalDay',
      runHour: 'RunHour',
      runMinute: 'RunMinute',
      taskName: 'TaskName',
      taskUserName: 'TaskUserName',
      ossScanPath: 'OssScanPath',
      scanRange: 'ScanRange',
      scanRangeContent: 'ScanRangeContent',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLimitId: 'number',
      intervalDay: 'number',
      runHour: 'number',
      runMinute: 'number',
      taskName: 'string',
      taskUserName: 'string',
      ossScanPath: 'string',
      scanRange: 'number',
      scanRangeContent: 'string',
      resourceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScanTaskResponseBody extends $tea.Model {
  id?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScanTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateScanTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScanTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLimitRequest extends $tea.Model {
  lang?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLimitResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLimitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDataLimitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDataLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleRequest extends $tea.Model {
  lang?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountDetailRequest extends $tea.Model {
  lang?: string;
  userId?: number;
  accountTypeId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userId: 'UserId',
      accountTypeId: 'AccountTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userId: 'number',
      accountTypeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountDetailResponseBody extends $tea.Model {
  requestId?: string;
  account?: DescribeAccountDetailResponseBodyAccount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      account: DescribeAccountDetailResponseBodyAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccountDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccountDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $tea.Model {
  lang?: string;
  loginName?: string;
  key?: string;
  featureType?: number;
  departId?: number;
  queryType?: number;
  productCode?: string;
  operationId?: number;
  instanceId?: string;
  tableId?: string;
  packageId?: string;
  columnId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      loginName: 'LoginName',
      key: 'Key',
      featureType: 'FeatureType',
      departId: 'DepartId',
      queryType: 'QueryType',
      productCode: 'ProductCode',
      operationId: 'OperationId',
      instanceId: 'InstanceId',
      tableId: 'TableId',
      packageId: 'PackageId',
      columnId: 'ColumnId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      loginName: 'string',
      key: 'string',
      featureType: 'number',
      departId: 'number',
      queryType: 'number',
      productCode: 'string',
      operationId: 'number',
      instanceId: 'string',
      tableId: 'string',
      packageId: 'string',
      columnId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  items?: DescribeAccountsResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsRequest extends $tea.Model {
  lang?: string;
  name?: string;
  tableId?: number;
  ruleId?: number;
  productCode?: string;
  instanceId?: number;
  instanceName?: string;
  tableName?: string;
  ruleName?: string;
  sensLevelName?: string;
  pageSize?: number;
  currentPage?: number;
  riskLevelId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      name: 'Name',
      tableId: 'TableId',
      ruleId: 'RuleId',
      productCode: 'ProductCode',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      tableName: 'TableName',
      ruleName: 'RuleName',
      sensLevelName: 'SensLevelName',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      riskLevelId: 'RiskLevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      name: 'string',
      tableId: 'number',
      ruleId: 'number',
      productCode: 'string',
      instanceId: 'number',
      instanceName: 'string',
      tableName: 'string',
      ruleName: 'string',
      sensLevelName: 'string',
      pageSize: 'number',
      currentPage: 'number',
      riskLevelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  items?: DescribeColumnsResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeColumnsResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeColumnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeColumnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigsRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigsResponseBody extends $tea.Model {
  requestId?: string;
  configList?: DescribeConfigsResponseBodyConfigList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configList: { 'type': 'array', 'itemType': DescribeConfigsResponseBodyConfigList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataAssetsRequest extends $tea.Model {
  lang?: string;
  name?: string;
  riskLevels?: string;
  ruleId?: number;
  rangeId?: number;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      name: 'Name',
      riskLevels: 'RiskLevels',
      ruleId: 'RuleId',
      rangeId: 'RangeId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      name: 'string',
      riskLevels: 'string',
      ruleId: 'number',
      rangeId: 'number',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataAssetsResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  items?: DescribeDataAssetsResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeDataAssetsResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataAssetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataAssetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataAssetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitDetailRequest extends $tea.Model {
  lang?: string;
  id?: number;
  networkType?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'Id',
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
      networkType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitDetailResponseBody extends $tea.Model {
  requestId?: string;
  dataLimit?: DescribeDataLimitDetailResponseBodyDataLimit;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dataLimit: 'DataLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dataLimit: DescribeDataLimitDetailResponseBodyDataLimit,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataLimitDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataLimitDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitsRequest extends $tea.Model {
  lang?: string;
  pageSize?: number;
  currentPage?: number;
  resourceType?: number;
  parentId?: string;
  serviceRegionId?: string;
  checkStatus?: number;
  auditStatus?: number;
  engineType?: string;
  datamaskStatus?: number;
  enable?: number;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      resourceType: 'ResourceType',
      parentId: 'ParentId',
      serviceRegionId: 'ServiceRegionId',
      checkStatus: 'CheckStatus',
      auditStatus: 'AuditStatus',
      engineType: 'EngineType',
      datamaskStatus: 'DatamaskStatus',
      enable: 'Enable',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageSize: 'number',
      currentPage: 'number',
      resourceType: 'number',
      parentId: 'string',
      serviceRegionId: 'string',
      checkStatus: 'number',
      auditStatus: 'number',
      engineType: 'string',
      datamaskStatus: 'number',
      enable: 'number',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitsResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  items?: DescribeDataLimitsResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeDataLimitsResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataLimitsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataLimitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitSetRequest extends $tea.Model {
  lang?: string;
  resourceType?: number;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceType: 'ResourceType',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceType: 'number',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitSetResponseBody extends $tea.Model {
  requestId?: string;
  dataLimitSet?: DescribeDataLimitSetResponseBodyDataLimitSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dataLimitSet: 'DataLimitSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dataLimitSet: DescribeDataLimitSetResponseBodyDataLimitSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataLimitSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataLimitSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitsInstanceDimRequest extends $tea.Model {
  lang?: string;
  pageSize?: number;
  currentPage?: number;
  resourceType?: number;
  parentId?: string;
  serviceRegionId?: string;
  checkStatus?: number;
  auditStatus?: number;
  engineType?: string;
  datamaskStatus?: number;
  enable?: number;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      resourceType: 'ResourceType',
      parentId: 'ParentId',
      serviceRegionId: 'ServiceRegionId',
      checkStatus: 'CheckStatus',
      auditStatus: 'AuditStatus',
      engineType: 'EngineType',
      datamaskStatus: 'DatamaskStatus',
      enable: 'Enable',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageSize: 'number',
      currentPage: 'number',
      resourceType: 'number',
      parentId: 'string',
      serviceRegionId: 'string',
      checkStatus: 'number',
      auditStatus: 'number',
      engineType: 'string',
      datamaskStatus: 'number',
      enable: 'number',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitsInstanceDimResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  items?: DescribeDataLimitsInstanceDimResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeDataLimitsInstanceDimResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitsInstanceDimResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataLimitsInstanceDimResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataLimitsInstanceDimResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataMaskingRunHistoryRequest extends $tea.Model {
  lang?: string;
  taskId?: string;
  startTime?: number;
  endTime?: number;
  status?: number;
  srcType?: number;
  dstType?: number;
  pageSize?: number;
  currentPage?: number;
  mainProcessId?: number;
  srcTableName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      taskId: 'TaskId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      status: 'Status',
      srcType: 'SrcType',
      dstType: 'DstType',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      mainProcessId: 'MainProcessId',
      srcTableName: 'SrcTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      taskId: 'string',
      startTime: 'number',
      endTime: 'number',
      status: 'number',
      srcType: 'number',
      dstType: 'number',
      pageSize: 'number',
      currentPage: 'number',
      mainProcessId: 'number',
      srcTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataMaskingRunHistoryResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  items?: DescribeDataMaskingRunHistoryResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeDataMaskingRunHistoryResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataMaskingRunHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataMaskingRunHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataMaskingRunHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataMaskingTasksRequest extends $tea.Model {
  lang?: string;
  searchKey?: string;
  startTime?: number;
  endTime?: number;
  dstType?: number;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      searchKey: 'SearchKey',
      startTime: 'StartTime',
      endTime: 'EndTime',
      dstType: 'DstType',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      searchKey: 'string',
      startTime: 'number',
      endTime: 'number',
      dstType: 'number',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataMaskingTasksResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  items?: DescribeDataMaskingTasksResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeDataMaskingTasksResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataMaskingTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataMaskingTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataMaskingTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountRequest extends $tea.Model {
  lang?: string;
  countType?: number;
  productCode?: string;
  instanceId?: number;
  featureType?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      countType: 'CountType',
      productCode: 'ProductCode',
      instanceId: 'InstanceId',
      featureType: 'FeatureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      countType: 'number',
      productCode: 'string',
      instanceId: 'number',
      featureType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponseBody extends $tea.Model {
  requestId?: string;
  dataCount?: DescribeDataTotalCountResponseBodyDataCount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dataCount: 'DataCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dataCount: DescribeDataTotalCountResponseBodyDataCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataTotalCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataTotalCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailRequest extends $tea.Model {
  lang?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBody extends $tea.Model {
  requestId?: string;
  event?: DescribeEventDetailResponseBodyEvent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      event: 'Event',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      event: DescribeEventDetailResponseBodyEvent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEventDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEventDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsRequest extends $tea.Model {
  lang?: string;
  id?: number;
  userId?: number;
  dealUserId?: string;
  status?: string;
  typeCode?: string;
  subTypeCode?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  currentPage?: number;
  instanceName?: string;
  productCode?: string;
  targetProductCode?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'Id',
      userId: 'UserId',
      dealUserId: 'DealUserId',
      status: 'Status',
      typeCode: 'TypeCode',
      subTypeCode: 'SubTypeCode',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      instanceName: 'InstanceName',
      productCode: 'ProductCode',
      targetProductCode: 'TargetProductCode',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
      userId: 'number',
      dealUserId: 'string',
      status: 'string',
      typeCode: 'string',
      subTypeCode: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      currentPage: 'number',
      instanceName: 'string',
      productCode: 'string',
      targetProductCode: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  items?: DescribeEventsResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeEventsResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTopRequest extends $tea.Model {
  lang?: string;
  userId?: number;
  dealUserId?: string;
  status?: string;
  typeCode?: string;
  subTypeCode?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  currentPage?: number;
  instanceName?: string;
  productCode?: string;
  targetProductCode?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userId: 'UserId',
      dealUserId: 'DealUserId',
      status: 'Status',
      typeCode: 'TypeCode',
      subTypeCode: 'SubTypeCode',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      instanceName: 'InstanceName',
      productCode: 'ProductCode',
      targetProductCode: 'TargetProductCode',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userId: 'number',
      dealUserId: 'string',
      status: 'string',
      typeCode: 'string',
      subTypeCode: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      currentPage: 'number',
      instanceName: 'string',
      productCode: 'string',
      targetProductCode: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTopResponseBody extends $tea.Model {
  requestId?: string;
  dataCountList?: DescribeEventTopResponseBodyDataCountList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dataCountList: 'DataCountList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dataCountList: { 'type': 'array', 'itemType': DescribeEventTopResponseBodyDataCountList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTopResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEventTopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEventTopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTypesRequest extends $tea.Model {
  lang?: string;
  parentTypeId?: number;
  resourceId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      parentTypeId: 'ParentTypeId',
      resourceId: 'ResourceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      parentTypeId: 'number',
      resourceId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTypesResponseBody extends $tea.Model {
  requestId?: string;
  eventTypeList?: DescribeEventTypesResponseBodyEventTypeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eventTypeList: 'EventTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eventTypeList: { 'type': 'array', 'itemType': DescribeEventTypesResponseBodyEventTypeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEventTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEventTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTypesDetailRequest extends $tea.Model {
  lang?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTypesDetailResponseBody extends $tea.Model {
  requestId?: string;
  userStatus?: DescribeEventTypesDetailResponseBodyUserStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userStatus: DescribeEventTypesDetailResponseBodyUserStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTypesDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEventTypesDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEventTypesDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePortraitRequest extends $tea.Model {
  productId?: number;
  instanceId?: number;
  itemKeys?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
      instanceId: 'InstanceId',
      itemKeys: 'ItemKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'number',
      instanceId: 'number',
      itemKeys: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePortraitResponseBody extends $tea.Model {
  requestId?: string;
  content?: DescribeInstancePortraitResponseBodyContent[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: { 'type': 'array', 'itemType': DescribeInstancePortraitResponseBodyContent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePortraitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstancePortraitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancePortraitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  lang?: string;
  name?: string;
  productId?: number;
  riskLevelId?: number;
  ruleId?: number;
  serviceRegionId?: string;
  featureType?: number;
  productCode?: string;
  pageSize?: number;
  currentPage?: number;
  lastFinishTimeStart?: number;
  lastFinishTimeEnd?: number;
  userId?: number;
  userType?: number;
  sensLevelName?: string;
  source?: string;
  checkStatus?: number;
  nameAccurate?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      name: 'Name',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      serviceRegionId: 'ServiceRegionId',
      featureType: 'FeatureType',
      productCode: 'ProductCode',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      lastFinishTimeStart: 'LastFinishTimeStart',
      lastFinishTimeEnd: 'LastFinishTimeEnd',
      userId: 'UserId',
      userType: 'UserType',
      sensLevelName: 'SensLevelName',
      source: 'Source',
      checkStatus: 'CheckStatus',
      nameAccurate: 'NameAccurate',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      name: 'string',
      productId: 'number',
      riskLevelId: 'number',
      ruleId: 'number',
      serviceRegionId: 'string',
      featureType: 'number',
      productCode: 'string',
      pageSize: 'number',
      currentPage: 'number',
      lastFinishTimeStart: 'number',
      lastFinishTimeEnd: 'number',
      userId: 'number',
      userType: 'number',
      sensLevelName: 'string',
      source: 'string',
      checkStatus: 'number',
      nameAccurate: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  items?: DescribeInstancesResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSourcesRequest extends $tea.Model {
  lang?: string;
  pageSize?: number;
  currentPage?: number;
  serviceRegionId?: string;
  engineType?: string;
  instanceId?: string;
  dbName?: string;
  productId?: number;
  authed?: boolean;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      serviceRegionId: 'ServiceRegionId',
      engineType: 'EngineType',
      instanceId: 'InstanceId',
      dbName: 'DbName',
      productId: 'ProductId',
      authed: 'Authed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageSize: 'number',
      currentPage: 'number',
      serviceRegionId: 'string',
      engineType: 'string',
      instanceId: 'string',
      dbName: 'string',
      productId: 'number',
      authed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSourcesResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  items?: DescribeInstanceSourcesResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeInstanceSourcesResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailRequest extends $tea.Model {
  lang?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailResponseBody extends $tea.Model {
  requestId?: string;
  ossObjectDetail?: DescribeOssObjectDetailResponseBodyOssObjectDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ossObjectDetail: 'OssObjectDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ossObjectDetail: DescribeOssObjectDetailResponseBodyOssObjectDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOssObjectDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOssObjectDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectsRequest extends $tea.Model {
  lang?: string;
  name?: string;
  riskLevelId?: number;
  ruleId?: number;
  instanceId?: string;
  pageSize?: number;
  currentPage?: number;
  serviceRegionId?: string;
  lastScanTimeStart?: number;
  lastScanTimeEnd?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      name: 'Name',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      serviceRegionId: 'ServiceRegionId',
      lastScanTimeStart: 'LastScanTimeStart',
      lastScanTimeEnd: 'LastScanTimeEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      name: 'string',
      riskLevelId: 'number',
      ruleId: 'number',
      instanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      serviceRegionId: 'string',
      lastScanTimeStart: 'number',
      lastScanTimeEnd: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectsResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  items?: DescribeOssObjectsResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeOssObjectsResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOssObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOssObjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackagesRequest extends $tea.Model {
  lang?: string;
  name?: string;
  productId?: number;
  riskLevelId?: number;
  ruleId?: number;
  instanceId?: number;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      name: 'Name',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      name: 'string',
      productId: 'number',
      riskLevelId: 'number',
      ruleId: 'number',
      instanceId: 'number',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackagesResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  items?: DescribePackagesResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribePackagesResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskLevelsRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskLevelsResponseBody extends $tea.Model {
  requestId?: string;
  riskLevelList?: DescribeRiskLevelsResponseBodyRiskLevelList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskLevelList: 'RiskLevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskLevelList: { 'type': 'array', 'itemType': DescribeRiskLevelsResponseBodyRiskLevelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskLevelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRiskLevelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRiskLevelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleCategoryRequest extends $tea.Model {
  lang?: string;
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      productId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleCategoryResponseBody extends $tea.Model {
  requestId?: string;
  ruleList?: DescribeRuleCategoryResponseBodyRuleList[];
  productList?: DescribeRuleCategoryResponseBodyProductList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleList: 'RuleList',
      productList: 'ProductList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeRuleCategoryResponseBodyRuleList },
      productList: { 'type': 'array', 'itemType': DescribeRuleCategoryResponseBodyProductList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRuleCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRuleCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesRequest extends $tea.Model {
  lang?: string;
  pageSize?: number;
  currentPage?: number;
  customType?: number;
  category?: number;
  name?: string;
  riskLevelId?: number;
  ruleType?: number;
  productCode?: number;
  productId?: number;
  warnLevel?: number;
  contentCategory?: number;
  status?: number;
  keywordCompatible?: boolean;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      customType: 'CustomType',
      category: 'Category',
      name: 'Name',
      riskLevelId: 'RiskLevelId',
      ruleType: 'RuleType',
      productCode: 'ProductCode',
      productId: 'ProductId',
      warnLevel: 'WarnLevel',
      contentCategory: 'ContentCategory',
      status: 'Status',
      keywordCompatible: 'KeywordCompatible',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageSize: 'number',
      currentPage: 'number',
      customType: 'number',
      category: 'number',
      name: 'string',
      riskLevelId: 'number',
      ruleType: 'number',
      productCode: 'number',
      productId: 'number',
      warnLevel: 'number',
      contentCategory: 'number',
      status: 'number',
      keywordCompatible: 'boolean',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  items?: DescribeRulesResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeRulesResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesRequest extends $tea.Model {
  lang?: string;
  name?: string;
  productId?: number;
  productCode?: string;
  riskLevelId?: number;
  ruleId?: number;
  instanceId?: number;
  instanceName?: string;
  ruleName?: string;
  sensLevelName?: string;
  packageId?: number;
  pageSize?: number;
  currentPage?: number;
  lastScanTimeStart?: number;
  lastScanTimeEnd?: number;
  startTime?: number;
  endTime?: number;
  instanceDescription?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      name: 'Name',
      productId: 'ProductId',
      productCode: 'ProductCode',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ruleName: 'RuleName',
      sensLevelName: 'SensLevelName',
      packageId: 'PackageId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      lastScanTimeStart: 'LastScanTimeStart',
      lastScanTimeEnd: 'LastScanTimeEnd',
      startTime: 'StartTime',
      endTime: 'EndTime',
      instanceDescription: 'InstanceDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      name: 'string',
      productId: 'number',
      productCode: 'string',
      riskLevelId: 'number',
      ruleId: 'number',
      instanceId: 'number',
      instanceName: 'string',
      ruleName: 'string',
      sensLevelName: 'string',
      packageId: 'number',
      pageSize: 'number',
      currentPage: 'number',
      lastScanTimeStart: 'number',
      lastScanTimeEnd: 'number',
      startTime: 'number',
      endTime: 'number',
      instanceDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  items?: DescribeTablesResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeTablesResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserCountRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserCountResponseBody extends $tea.Model {
  requestId?: string;
  userCount?: DescribeUserCountResponseBodyUserCount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userCount: DescribeUserCountResponseBodyUserCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserStatusRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserStatusResponseBody extends $tea.Model {
  requestId?: string;
  userStatus?: DescribeUserStatusResponseBodyUserStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userStatus: DescribeUserStatusResponseBodyUserStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableUserConfigRequest extends $tea.Model {
  lang?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableUserConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableUserConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableUserConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableUserConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecDatamaskRequest extends $tea.Model {
  templateId?: number;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'number',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecDatamaskResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecDatamaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecDatamaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecDatamaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualTriggerMaskingProcessRequest extends $tea.Model {
  lang?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualTriggerMaskingProcessResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualTriggerMaskingProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ManualTriggerMaskingProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ManualTriggerMaskingProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataLimitRequest extends $tea.Model {
  lang?: string;
  id?: number;
  resourceType?: number;
  serviceRegionId?: string;
  userName?: string;
  password?: string;
  modifyPassword?: boolean;
  auditStatus?: number;
  logStoreDay?: number;
  engineType?: string;
  port?: number;
  autoScan?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'Id',
      resourceType: 'ResourceType',
      serviceRegionId: 'ServiceRegionId',
      userName: 'UserName',
      password: 'Password',
      modifyPassword: 'ModifyPassword',
      auditStatus: 'AuditStatus',
      logStoreDay: 'LogStoreDay',
      engineType: 'EngineType',
      port: 'Port',
      autoScan: 'AutoScan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
      resourceType: 'number',
      serviceRegionId: 'string',
      userName: 'string',
      password: 'string',
      modifyPassword: 'boolean',
      auditStatus: 'number',
      logStoreDay: 'number',
      engineType: 'string',
      port: 'number',
      autoScan: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataLimitResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataLimitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDataLimitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDataLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefaultLevelRequest extends $tea.Model {
  lang?: string;
  defaultId?: number;
  sensitiveIds?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      defaultId: 'DefaultId',
      sensitiveIds: 'SensitiveIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      defaultId: 'number',
      sensitiveIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefaultLevelResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefaultLevelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDefaultLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDefaultLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEventStatusRequest extends $tea.Model {
  lang?: string;
  id?: number;
  backed?: boolean;
  dealReason?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'Id',
      backed: 'Backed',
      dealReason: 'DealReason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
      backed: 'boolean',
      dealReason: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEventStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEventStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyEventStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyEventStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEventTypeStatusRequest extends $tea.Model {
  lang?: string;
  subTypeIds?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      subTypeIds: 'SubTypeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      subTypeIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEventTypeStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEventTypeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyEventTypeStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyEventTypeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleRequest extends $tea.Model {
  lang?: string;
  id?: number;
  customType?: number;
  name?: string;
  category?: number;
  content?: string;
  statExpress?: string;
  riskLevelId?: number;
  ruleType?: number;
  productCode?: string;
  productId?: number;
  warnLevel?: number;
  description?: string;
  contentCategory?: number;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'Id',
      customType: 'CustomType',
      name: 'Name',
      category: 'Category',
      content: 'Content',
      statExpress: 'StatExpress',
      riskLevelId: 'RiskLevelId',
      ruleType: 'RuleType',
      productCode: 'ProductCode',
      productId: 'ProductId',
      warnLevel: 'WarnLevel',
      description: 'Description',
      contentCategory: 'ContentCategory',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
      customType: 'number',
      name: 'string',
      category: 'number',
      content: 'string',
      statExpress: 'string',
      riskLevelId: 'number',
      ruleType: 'number',
      productCode: 'string',
      productId: 'number',
      warnLevel: 'number',
      description: 'string',
      contentCategory: 'number',
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleStatusRequest extends $tea.Model {
  lang?: string;
  id?: number;
  ids?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'Id',
      ids: 'Ids',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
      ids: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleStatusResponseBody extends $tea.Model {
  failedIds?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedIds: 'FailedIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedIds: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRuleStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRuleStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMaskingProcessRequest extends $tea.Model {
  lang?: string;
  id?: number;
  featureType?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'Id',
      featureType: 'FeatureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
      featureType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMaskingProcessResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMaskingProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopMaskingProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopMaskingProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountDetailResponseBodyAccountPrivilegeList extends $tea.Model {
  useAccountId?: string;
  productName?: string;
  useAccountTypeName?: string;
  useAccountCreateTime?: number;
  useAccountName?: string;
  useAccountType?: number;
  static names(): { [key: string]: string } {
    return {
      useAccountId: 'UseAccountId',
      productName: 'ProductName',
      useAccountTypeName: 'UseAccountTypeName',
      useAccountCreateTime: 'UseAccountCreateTime',
      useAccountName: 'UseAccountName',
      useAccountType: 'UseAccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      useAccountId: 'string',
      productName: 'string',
      useAccountTypeName: 'string',
      useAccountCreateTime: 'number',
      useAccountName: 'string',
      useAccountType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountDetailResponseBodyAccountEventCountTotal extends $tea.Model {
  excludeCount?: number;
  confirmCount?: number;
  totalCount?: number;
  undealCount?: number;
  static names(): { [key: string]: string } {
    return {
      excludeCount: 'ExcludeCount',
      confirmCount: 'ConfirmCount',
      totalCount: 'TotalCount',
      undealCount: 'UndealCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeCount: 'number',
      confirmCount: 'number',
      totalCount: 'number',
      undealCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountDetailResponseBodyAccountEventCount extends $tea.Model {
  total?: DescribeAccountDetailResponseBodyAccountEventCountTotal;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: DescribeAccountDetailResponseBodyAccountEventCountTotal,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountDetailResponseBodyAccount extends $tea.Model {
  dataInstance?: string;
  loginPolicyName?: string;
  loginName?: string;
  firstLevelDepartId?: number;
  createTime?: number;
  fullName?: string;
  deleteStatus?: string;
  userId?: number;
  aliUid?: number;
  roleNames?: string;
  email?: string;
  cellphoneNum?: string;
  firstLevelDepartName?: string;
  loginDataTime?: number;
  telephoneNum?: string;
  activeStatus?: string;
  id?: number;
  privilegeList?: DescribeAccountDetailResponseBodyAccountPrivilegeList[];
  eventCount?: DescribeAccountDetailResponseBodyAccountEventCount;
  static names(): { [key: string]: string } {
    return {
      dataInstance: 'DataInstance',
      loginPolicyName: 'LoginPolicyName',
      loginName: 'LoginName',
      firstLevelDepartId: 'FirstLevelDepartId',
      createTime: 'CreateTime',
      fullName: 'FullName',
      deleteStatus: 'DeleteStatus',
      userId: 'UserId',
      aliUid: 'AliUid',
      roleNames: 'RoleNames',
      email: 'Email',
      cellphoneNum: 'CellphoneNum',
      firstLevelDepartName: 'FirstLevelDepartName',
      loginDataTime: 'LoginDataTime',
      telephoneNum: 'TelephoneNum',
      activeStatus: 'ActiveStatus',
      id: 'Id',
      privilegeList: 'PrivilegeList',
      eventCount: 'EventCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInstance: 'string',
      loginPolicyName: 'string',
      loginName: 'string',
      firstLevelDepartId: 'number',
      createTime: 'number',
      fullName: 'string',
      deleteStatus: 'string',
      userId: 'number',
      aliUid: 'number',
      roleNames: 'string',
      email: 'string',
      cellphoneNum: 'string',
      firstLevelDepartName: 'string',
      loginDataTime: 'number',
      telephoneNum: 'string',
      activeStatus: 'string',
      id: 'number',
      privilegeList: { 'type': 'array', 'itemType': DescribeAccountDetailResponseBodyAccountPrivilegeList },
      eventCount: DescribeAccountDetailResponseBodyAccountEventCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyItemsEventCountTotal extends $tea.Model {
  excludeCount?: number;
  confirmCount?: number;
  totalCount?: number;
  undealCount?: number;
  static names(): { [key: string]: string } {
    return {
      excludeCount: 'ExcludeCount',
      confirmCount: 'ConfirmCount',
      totalCount: 'TotalCount',
      undealCount: 'UndealCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeCount: 'number',
      confirmCount: 'number',
      totalCount: 'number',
      undealCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyItemsEventCount extends $tea.Model {
  total?: DescribeAccountsResponseBodyItemsEventCountTotal;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: DescribeAccountsResponseBodyItemsEventCountTotal,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyItems extends $tea.Model {
  dataInstance?: string;
  loginPolicyName?: string;
  accountTypeId?: number;
  loginName?: string;
  firstLevelDepartId?: number;
  createTime?: number;
  fullName?: string;
  deleteStatus?: string;
  userId?: number;
  aliUid?: number;
  roleNames?: string;
  email?: string;
  cellphoneNum?: string;
  instanceName?: string;
  firstLevelDepartName?: string;
  loginDataTime?: number;
  telephoneNum?: string;
  activeStatus?: string;
  id?: number;
  eventCount?: DescribeAccountsResponseBodyItemsEventCount;
  static names(): { [key: string]: string } {
    return {
      dataInstance: 'DataInstance',
      loginPolicyName: 'LoginPolicyName',
      accountTypeId: 'AccountTypeId',
      loginName: 'LoginName',
      firstLevelDepartId: 'FirstLevelDepartId',
      createTime: 'CreateTime',
      fullName: 'FullName',
      deleteStatus: 'DeleteStatus',
      userId: 'UserId',
      aliUid: 'AliUid',
      roleNames: 'RoleNames',
      email: 'Email',
      cellphoneNum: 'CellphoneNum',
      instanceName: 'InstanceName',
      firstLevelDepartName: 'FirstLevelDepartName',
      loginDataTime: 'LoginDataTime',
      telephoneNum: 'TelephoneNum',
      activeStatus: 'ActiveStatus',
      id: 'Id',
      eventCount: 'EventCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInstance: 'string',
      loginPolicyName: 'string',
      accountTypeId: 'number',
      loginName: 'string',
      firstLevelDepartId: 'number',
      createTime: 'number',
      fullName: 'string',
      deleteStatus: 'string',
      userId: 'number',
      aliUid: 'number',
      roleNames: 'string',
      email: 'string',
      cellphoneNum: 'string',
      instanceName: 'string',
      firstLevelDepartName: 'string',
      loginDataTime: 'number',
      telephoneNum: 'string',
      activeStatus: 'string',
      id: 'number',
      eventCount: DescribeAccountsResponseBodyItemsEventCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBodyItems extends $tea.Model {
  creationTime?: number;
  tableName?: string;
  dataType?: string;
  odpsRiskLevelValue?: number;
  instanceId?: number;
  riskLevelId?: number;
  ruleName?: string;
  ruleId?: number;
  sensitive?: boolean;
  sensLevelName?: string;
  instanceName?: string;
  riskLevelName?: string;
  odpsRiskLevelName?: string;
  name?: string;
  tableId?: number;
  id?: string;
  productCode?: string;
  revisionStatus?: number;
  revisionId?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      tableName: 'TableName',
      dataType: 'DataType',
      odpsRiskLevelValue: 'OdpsRiskLevelValue',
      instanceId: 'InstanceId',
      riskLevelId: 'RiskLevelId',
      ruleName: 'RuleName',
      ruleId: 'RuleId',
      sensitive: 'Sensitive',
      sensLevelName: 'SensLevelName',
      instanceName: 'InstanceName',
      riskLevelName: 'RiskLevelName',
      odpsRiskLevelName: 'OdpsRiskLevelName',
      name: 'Name',
      tableId: 'TableId',
      id: 'Id',
      productCode: 'ProductCode',
      revisionStatus: 'RevisionStatus',
      revisionId: 'RevisionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      tableName: 'string',
      dataType: 'string',
      odpsRiskLevelValue: 'number',
      instanceId: 'number',
      riskLevelId: 'number',
      ruleName: 'string',
      ruleId: 'number',
      sensitive: 'boolean',
      sensLevelName: 'string',
      instanceName: 'string',
      riskLevelName: 'string',
      odpsRiskLevelName: 'string',
      name: 'string',
      tableId: 'number',
      id: 'string',
      productCode: 'string',
      revisionStatus: 'number',
      revisionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigsResponseBodyConfigList extends $tea.Model {
  code?: number;
  value?: number;
  defaultValue?: string;
  description?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
      defaultValue: 'DefaultValue',
      description: 'Description',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      value: 'number',
      defaultValue: 'string',
      description: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataAssetsResponseBodyItems extends $tea.Model {
  acl?: string;
  creationTime?: number;
  dataType?: string;
  owner?: string;
  sensitiveRatio?: string;
  protection?: boolean;
  labelsec?: boolean;
  totalCount?: number;
  riskLevelId?: number;
  ruleName?: string;
  sensitive?: boolean;
  objectKey?: string;
  riskLevelName?: string;
  odpsRiskLevelName?: string;
  productId?: string;
  name?: string;
  sensitiveCount?: number;
  id?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
      creationTime: 'CreationTime',
      dataType: 'DataType',
      owner: 'Owner',
      sensitiveRatio: 'SensitiveRatio',
      protection: 'Protection',
      labelsec: 'Labelsec',
      totalCount: 'TotalCount',
      riskLevelId: 'RiskLevelId',
      ruleName: 'RuleName',
      sensitive: 'Sensitive',
      objectKey: 'ObjectKey',
      riskLevelName: 'RiskLevelName',
      odpsRiskLevelName: 'OdpsRiskLevelName',
      productId: 'ProductId',
      name: 'Name',
      sensitiveCount: 'SensitiveCount',
      id: 'Id',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      creationTime: 'number',
      dataType: 'string',
      owner: 'string',
      sensitiveRatio: 'string',
      protection: 'boolean',
      labelsec: 'boolean',
      totalCount: 'number',
      riskLevelId: 'number',
      ruleName: 'string',
      sensitive: 'boolean',
      objectKey: 'string',
      riskLevelName: 'string',
      odpsRiskLevelName: 'string',
      productId: 'string',
      name: 'string',
      sensitiveCount: 'number',
      id: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitDetailResponseBodyDataLimit extends $tea.Model {
  localName?: string;
  checkStatus?: number;
  port?: number;
  checkStatusName?: string;
  regionId?: string;
  parentId?: string;
  resourceType?: number;
  gmtCreate?: number;
  resourceTypeCode?: string;
  userName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      checkStatus: 'CheckStatus',
      port: 'Port',
      checkStatusName: 'CheckStatusName',
      regionId: 'RegionId',
      parentId: 'ParentId',
      resourceType: 'ResourceType',
      gmtCreate: 'GmtCreate',
      resourceTypeCode: 'ResourceTypeCode',
      userName: 'UserName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      checkStatus: 'number',
      port: 'number',
      checkStatusName: 'string',
      regionId: 'string',
      parentId: 'string',
      resourceType: 'number',
      gmtCreate: 'number',
      resourceTypeCode: 'string',
      userName: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitsResponseBodyItems extends $tea.Model {
  supportEvent?: boolean;
  errorMessage?: string;
  checkStatus?: number;
  localName?: string;
  tenantName?: string;
  nextStartTime?: number;
  port?: number;
  checkStatusName?: string;
  samplingSize?: number;
  parentId?: string;
  datamaskStatus?: number;
  processTotalCount?: number;
  resourceType?: number;
  errorCode?: string;
  ocrStatus?: number;
  logStoreDay?: number;
  eventStatus?: number;
  supportScan?: boolean;
  lastFinishedTime?: number;
  userName?: string;
  auditStatus?: number;
  supportOcr?: boolean;
  engineType?: string;
  instanceId?: string;
  totalCount?: number;
  instanceDescription?: string;
  dbVersion?: string;
  regionId?: string;
  gmtCreate?: number;
  supportAudit?: boolean;
  autoScan?: number;
  resourceTypeCode?: string;
  supportDatamask?: boolean;
  processStatus?: number;
  id?: number;
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      supportEvent: 'SupportEvent',
      errorMessage: 'ErrorMessage',
      checkStatus: 'CheckStatus',
      localName: 'LocalName',
      tenantName: 'TenantName',
      nextStartTime: 'NextStartTime',
      port: 'Port',
      checkStatusName: 'CheckStatusName',
      samplingSize: 'SamplingSize',
      parentId: 'ParentId',
      datamaskStatus: 'DatamaskStatus',
      processTotalCount: 'ProcessTotalCount',
      resourceType: 'ResourceType',
      errorCode: 'ErrorCode',
      ocrStatus: 'OcrStatus',
      logStoreDay: 'LogStoreDay',
      eventStatus: 'EventStatus',
      supportScan: 'SupportScan',
      lastFinishedTime: 'LastFinishedTime',
      userName: 'UserName',
      auditStatus: 'AuditStatus',
      supportOcr: 'SupportOcr',
      engineType: 'EngineType',
      instanceId: 'InstanceId',
      totalCount: 'TotalCount',
      instanceDescription: 'InstanceDescription',
      dbVersion: 'DbVersion',
      regionId: 'RegionId',
      gmtCreate: 'GmtCreate',
      supportAudit: 'SupportAudit',
      autoScan: 'AutoScan',
      resourceTypeCode: 'ResourceTypeCode',
      supportDatamask: 'SupportDatamask',
      processStatus: 'ProcessStatus',
      id: 'Id',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportEvent: 'boolean',
      errorMessage: 'string',
      checkStatus: 'number',
      localName: 'string',
      tenantName: 'string',
      nextStartTime: 'number',
      port: 'number',
      checkStatusName: 'string',
      samplingSize: 'number',
      parentId: 'string',
      datamaskStatus: 'number',
      processTotalCount: 'number',
      resourceType: 'number',
      errorCode: 'string',
      ocrStatus: 'number',
      logStoreDay: 'number',
      eventStatus: 'number',
      supportScan: 'boolean',
      lastFinishedTime: 'number',
      userName: 'string',
      auditStatus: 'number',
      supportOcr: 'boolean',
      engineType: 'string',
      instanceId: 'string',
      totalCount: 'number',
      instanceDescription: 'string',
      dbVersion: 'string',
      regionId: 'string',
      gmtCreate: 'number',
      supportAudit: 'boolean',
      autoScan: 'number',
      resourceTypeCode: 'string',
      supportDatamask: 'boolean',
      processStatus: 'number',
      id: 'number',
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitSetResponseBodyDataLimitSetDataLimitList extends $tea.Model {
  supportEvent?: boolean;
  localName?: string;
  checkStatus?: number;
  connector?: string;
  port?: number;
  checkStatusName?: string;
  regionId?: string;
  parentId?: string;
  resourceType?: number;
  logStoreDay?: number;
  eventStatus?: number;
  gmtCreate?: number;
  resourceTypeCode?: string;
  userName?: string;
  id?: number;
  auditStatus?: number;
  static names(): { [key: string]: string } {
    return {
      supportEvent: 'SupportEvent',
      localName: 'LocalName',
      checkStatus: 'CheckStatus',
      connector: 'Connector',
      port: 'Port',
      checkStatusName: 'CheckStatusName',
      regionId: 'RegionId',
      parentId: 'ParentId',
      resourceType: 'ResourceType',
      logStoreDay: 'LogStoreDay',
      eventStatus: 'EventStatus',
      gmtCreate: 'GmtCreate',
      resourceTypeCode: 'ResourceTypeCode',
      userName: 'UserName',
      id: 'Id',
      auditStatus: 'AuditStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportEvent: 'boolean',
      localName: 'string',
      checkStatus: 'number',
      connector: 'string',
      port: 'number',
      checkStatusName: 'string',
      regionId: 'string',
      parentId: 'string',
      resourceType: 'number',
      logStoreDay: 'number',
      eventStatus: 'number',
      gmtCreate: 'number',
      resourceTypeCode: 'string',
      userName: 'string',
      id: 'number',
      auditStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitSetResponseBodyDataLimitSetOssBucketList extends $tea.Model {
  regionId?: string;
  bucketName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bucketName: 'BucketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bucketName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitSetResponseBodyDataLimitSetRegionList extends $tea.Model {
  regionId?: string;
  localName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      localName: 'LocalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      localName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitSetResponseBodyDataLimitSet extends $tea.Model {
  resourceTypeCode?: string;
  resourceType?: number;
  totalCount?: number;
  dataLimitList?: DescribeDataLimitSetResponseBodyDataLimitSetDataLimitList[];
  ossBucketList?: DescribeDataLimitSetResponseBodyDataLimitSetOssBucketList[];
  regionList?: DescribeDataLimitSetResponseBodyDataLimitSetRegionList[];
  static names(): { [key: string]: string } {
    return {
      resourceTypeCode: 'ResourceTypeCode',
      resourceType: 'ResourceType',
      totalCount: 'TotalCount',
      dataLimitList: 'DataLimitList',
      ossBucketList: 'OssBucketList',
      regionList: 'RegionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypeCode: 'string',
      resourceType: 'number',
      totalCount: 'number',
      dataLimitList: { 'type': 'array', 'itemType': DescribeDataLimitSetResponseBodyDataLimitSetDataLimitList },
      ossBucketList: { 'type': 'array', 'itemType': DescribeDataLimitSetResponseBodyDataLimitSetOssBucketList },
      regionList: { 'type': 'array', 'itemType': DescribeDataLimitSetResponseBodyDataLimitSetRegionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitsInstanceDimResponseBodyItemsDataLimitList extends $tea.Model {
  supportEvent?: boolean;
  errorMessage?: string;
  checkStatus?: number;
  localName?: string;
  nextStartTime?: number;
  port?: number;
  checkStatusName?: string;
  samplingSize?: number;
  parentId?: string;
  datamaskStatus?: number;
  processTotalCount?: number;
  resourceType?: number;
  errorCode?: string;
  ocrStatus?: number;
  logStoreDay?: number;
  eventStatus?: number;
  supportScan?: boolean;
  lastFinishedTime?: number;
  userName?: string;
  auditStatus?: number;
  autoCreateAccount?: boolean;
  supportOcr?: boolean;
  engineType?: string;
  totalCount?: number;
  dbVersion?: string;
  regionId?: string;
  gmtCreate?: number;
  supportAudit?: boolean;
  autoScan?: number;
  resourceTypeCode?: string;
  supportDatamask?: boolean;
  processStatus?: number;
  id?: number;
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      supportEvent: 'SupportEvent',
      errorMessage: 'ErrorMessage',
      checkStatus: 'CheckStatus',
      localName: 'LocalName',
      nextStartTime: 'NextStartTime',
      port: 'Port',
      checkStatusName: 'CheckStatusName',
      samplingSize: 'SamplingSize',
      parentId: 'ParentId',
      datamaskStatus: 'DatamaskStatus',
      processTotalCount: 'ProcessTotalCount',
      resourceType: 'ResourceType',
      errorCode: 'ErrorCode',
      ocrStatus: 'OcrStatus',
      logStoreDay: 'LogStoreDay',
      eventStatus: 'EventStatus',
      supportScan: 'SupportScan',
      lastFinishedTime: 'LastFinishedTime',
      userName: 'UserName',
      auditStatus: 'AuditStatus',
      autoCreateAccount: 'AutoCreateAccount',
      supportOcr: 'SupportOcr',
      engineType: 'EngineType',
      totalCount: 'TotalCount',
      dbVersion: 'DbVersion',
      regionId: 'RegionId',
      gmtCreate: 'GmtCreate',
      supportAudit: 'SupportAudit',
      autoScan: 'AutoScan',
      resourceTypeCode: 'ResourceTypeCode',
      supportDatamask: 'SupportDatamask',
      processStatus: 'ProcessStatus',
      id: 'Id',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportEvent: 'boolean',
      errorMessage: 'string',
      checkStatus: 'number',
      localName: 'string',
      nextStartTime: 'number',
      port: 'number',
      checkStatusName: 'string',
      samplingSize: 'number',
      parentId: 'string',
      datamaskStatus: 'number',
      processTotalCount: 'number',
      resourceType: 'number',
      errorCode: 'string',
      ocrStatus: 'number',
      logStoreDay: 'number',
      eventStatus: 'number',
      supportScan: 'boolean',
      lastFinishedTime: 'number',
      userName: 'string',
      auditStatus: 'number',
      autoCreateAccount: 'boolean',
      supportOcr: 'boolean',
      engineType: 'string',
      totalCount: 'number',
      dbVersion: 'string',
      regionId: 'string',
      gmtCreate: 'number',
      supportAudit: 'boolean',
      autoScan: 'number',
      resourceTypeCode: 'string',
      supportDatamask: 'boolean',
      processStatus: 'number',
      id: 'number',
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitsInstanceDimResponseBodyItems extends $tea.Model {
  errorMessage?: string;
  checkStatus?: number;
  localName?: string;
  nextStartTime?: number;
  port?: number;
  checkStatusName?: string;
  samplingSize?: number;
  parentId?: string;
  datamaskStatus?: number;
  processTotalCount?: number;
  resourceType?: number;
  errorCode?: string;
  ocrStatus?: number;
  logStoreDay?: number;
  supportScan?: boolean;
  lastFinishedTime?: number;
  userName?: string;
  auditStatus?: number;
  supportOcr?: boolean;
  engineType?: string;
  totalCount?: number;
  instanceDescription?: string;
  dbVersion?: string;
  regionId?: string;
  gmtCreate?: number;
  supportAudit?: boolean;
  autoScan?: number;
  resourceTypeCode?: string;
  supportDatamask?: boolean;
  processStatus?: number;
  id?: number;
  enable?: number;
  dataLimitList?: DescribeDataLimitsInstanceDimResponseBodyItemsDataLimitList[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      checkStatus: 'CheckStatus',
      localName: 'LocalName',
      nextStartTime: 'NextStartTime',
      port: 'Port',
      checkStatusName: 'CheckStatusName',
      samplingSize: 'SamplingSize',
      parentId: 'ParentId',
      datamaskStatus: 'DatamaskStatus',
      processTotalCount: 'ProcessTotalCount',
      resourceType: 'ResourceType',
      errorCode: 'ErrorCode',
      ocrStatus: 'OcrStatus',
      logStoreDay: 'LogStoreDay',
      supportScan: 'SupportScan',
      lastFinishedTime: 'LastFinishedTime',
      userName: 'UserName',
      auditStatus: 'AuditStatus',
      supportOcr: 'SupportOcr',
      engineType: 'EngineType',
      totalCount: 'TotalCount',
      instanceDescription: 'InstanceDescription',
      dbVersion: 'DbVersion',
      regionId: 'RegionId',
      gmtCreate: 'GmtCreate',
      supportAudit: 'SupportAudit',
      autoScan: 'AutoScan',
      resourceTypeCode: 'ResourceTypeCode',
      supportDatamask: 'SupportDatamask',
      processStatus: 'ProcessStatus',
      id: 'Id',
      enable: 'Enable',
      dataLimitList: 'DataLimitList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      checkStatus: 'number',
      localName: 'string',
      nextStartTime: 'number',
      port: 'number',
      checkStatusName: 'string',
      samplingSize: 'number',
      parentId: 'string',
      datamaskStatus: 'number',
      processTotalCount: 'number',
      resourceType: 'number',
      errorCode: 'string',
      ocrStatus: 'number',
      logStoreDay: 'number',
      supportScan: 'boolean',
      lastFinishedTime: 'number',
      userName: 'string',
      auditStatus: 'number',
      supportOcr: 'boolean',
      engineType: 'string',
      totalCount: 'number',
      instanceDescription: 'string',
      dbVersion: 'string',
      regionId: 'string',
      gmtCreate: 'number',
      supportAudit: 'boolean',
      autoScan: 'number',
      resourceTypeCode: 'string',
      supportDatamask: 'boolean',
      processStatus: 'number',
      id: 'number',
      enable: 'number',
      dataLimitList: { 'type': 'array', 'itemType': DescribeDataLimitsInstanceDimResponseBodyItemsDataLimitList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataMaskingRunHistoryResponseBodyItems extends $tea.Model {
  status?: number;
  type?: number;
  srcType?: number;
  srcTableName?: string;
  maskingCount?: number;
  percentage?: number;
  dstType?: number;
  failMsg?: string;
  failCode?: string;
  conflictCount?: number;
  dstTypeCode?: string;
  endTime?: number;
  runIndex?: number;
  startTime?: number;
  hasSubProcess?: number;
  hasDownloadFile?: number;
  taskId?: string;
  srcTypeCode?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      srcType: 'SrcType',
      srcTableName: 'SrcTableName',
      maskingCount: 'MaskingCount',
      percentage: 'Percentage',
      dstType: 'DstType',
      failMsg: 'FailMsg',
      failCode: 'FailCode',
      conflictCount: 'ConflictCount',
      dstTypeCode: 'DstTypeCode',
      endTime: 'EndTime',
      runIndex: 'RunIndex',
      startTime: 'StartTime',
      hasSubProcess: 'HasSubProcess',
      hasDownloadFile: 'HasDownloadFile',
      taskId: 'TaskId',
      srcTypeCode: 'SrcTypeCode',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'number',
      srcType: 'number',
      srcTableName: 'string',
      maskingCount: 'number',
      percentage: 'number',
      dstType: 'number',
      failMsg: 'string',
      failCode: 'string',
      conflictCount: 'number',
      dstTypeCode: 'string',
      endTime: 'number',
      runIndex: 'number',
      startTime: 'number',
      hasSubProcess: 'number',
      hasDownloadFile: 'number',
      taskId: 'string',
      srcTypeCode: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataMaskingTasksResponseBodyItems extends $tea.Model {
  status?: number;
  owner?: string;
  taskName?: string;
  srcType?: number;
  dstType?: number;
  hasUnfinishProcess?: boolean;
  originalTable?: boolean;
  triggerType?: number;
  dstTypeCode?: string;
  runCount?: number;
  gmtCreate?: number;
  taskId?: string;
  dstPath?: string;
  srcTypeCode?: string;
  id?: number;
  srcPath?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      owner: 'Owner',
      taskName: 'TaskName',
      srcType: 'SrcType',
      dstType: 'DstType',
      hasUnfinishProcess: 'HasUnfinishProcess',
      originalTable: 'OriginalTable',
      triggerType: 'TriggerType',
      dstTypeCode: 'DstTypeCode',
      runCount: 'RunCount',
      gmtCreate: 'GmtCreate',
      taskId: 'TaskId',
      dstPath: 'DstPath',
      srcTypeCode: 'SrcTypeCode',
      id: 'Id',
      srcPath: 'SrcPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      owner: 'string',
      taskName: 'string',
      srcType: 'number',
      dstType: 'number',
      hasUnfinishProcess: 'boolean',
      originalTable: 'boolean',
      triggerType: 'number',
      dstTypeCode: 'string',
      runCount: 'number',
      gmtCreate: 'number',
      taskId: 'string',
      dstPath: 'string',
      srcTypeCode: 'string',
      id: 'number',
      srcPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponseBodyDataCountInstanceRiskCountList extends $tea.Model {
  name?: string;
  id?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponseBodyDataCountInstance extends $tea.Model {
  lastSensitiveCount?: number;
  totalCount?: number;
  sensitiveCount?: number;
  count?: number;
  lastCount?: number;
  riskCountList?: DescribeDataTotalCountResponseBodyDataCountInstanceRiskCountList[];
  static names(): { [key: string]: string } {
    return {
      lastSensitiveCount: 'LastSensitiveCount',
      totalCount: 'TotalCount',
      sensitiveCount: 'SensitiveCount',
      count: 'Count',
      lastCount: 'LastCount',
      riskCountList: 'RiskCountList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastSensitiveCount: 'number',
      totalCount: 'number',
      sensitiveCount: 'number',
      count: 'number',
      lastCount: 'number',
      riskCountList: { 'type': 'array', 'itemType': DescribeDataTotalCountResponseBodyDataCountInstanceRiskCountList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponseBodyDataCountTableRiskCountList extends $tea.Model {
  name?: string;
  id?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponseBodyDataCountTable extends $tea.Model {
  lastSensitiveCount?: number;
  totalCount?: number;
  sensitiveCount?: number;
  count?: number;
  lastCount?: number;
  riskCountList?: DescribeDataTotalCountResponseBodyDataCountTableRiskCountList[];
  static names(): { [key: string]: string } {
    return {
      lastSensitiveCount: 'LastSensitiveCount',
      totalCount: 'TotalCount',
      sensitiveCount: 'SensitiveCount',
      count: 'Count',
      lastCount: 'LastCount',
      riskCountList: 'RiskCountList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastSensitiveCount: 'number',
      totalCount: 'number',
      sensitiveCount: 'number',
      count: 'number',
      lastCount: 'number',
      riskCountList: { 'type': 'array', 'itemType': DescribeDataTotalCountResponseBodyDataCountTableRiskCountList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponseBodyDataCountPackageRiskCountList extends $tea.Model {
  name?: string;
  id?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponseBodyDataCountPackage extends $tea.Model {
  lastSensitiveCount?: number;
  totalCount?: number;
  sensitiveCount?: number;
  count?: number;
  lastCount?: number;
  riskCountList?: DescribeDataTotalCountResponseBodyDataCountPackageRiskCountList[];
  static names(): { [key: string]: string } {
    return {
      lastSensitiveCount: 'LastSensitiveCount',
      totalCount: 'TotalCount',
      sensitiveCount: 'SensitiveCount',
      count: 'Count',
      lastCount: 'LastCount',
      riskCountList: 'RiskCountList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastSensitiveCount: 'number',
      totalCount: 'number',
      sensitiveCount: 'number',
      count: 'number',
      lastCount: 'number',
      riskCountList: { 'type': 'array', 'itemType': DescribeDataTotalCountResponseBodyDataCountPackageRiskCountList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponseBodyDataCountColumnRiskCountList extends $tea.Model {
  name?: string;
  id?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponseBodyDataCountColumnColumnRuleTop extends $tea.Model {
  name?: string;
  id?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponseBodyDataCountColumn extends $tea.Model {
  lastSensitiveCount?: number;
  totalCount?: number;
  sensitiveCount?: number;
  count?: number;
  lastCount?: number;
  riskCountList?: DescribeDataTotalCountResponseBodyDataCountColumnRiskCountList[];
  columnRuleTop?: DescribeDataTotalCountResponseBodyDataCountColumnColumnRuleTop[];
  static names(): { [key: string]: string } {
    return {
      lastSensitiveCount: 'LastSensitiveCount',
      totalCount: 'TotalCount',
      sensitiveCount: 'SensitiveCount',
      count: 'Count',
      lastCount: 'LastCount',
      riskCountList: 'RiskCountList',
      columnRuleTop: 'ColumnRuleTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastSensitiveCount: 'number',
      totalCount: 'number',
      sensitiveCount: 'number',
      count: 'number',
      lastCount: 'number',
      riskCountList: { 'type': 'array', 'itemType': DescribeDataTotalCountResponseBodyDataCountColumnRiskCountList },
      columnRuleTop: { 'type': 'array', 'itemType': DescribeDataTotalCountResponseBodyDataCountColumnColumnRuleTop },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponseBodyDataCountOssRiskCountList extends $tea.Model {
  name?: string;
  id?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponseBodyDataCountOssOssRuleTop extends $tea.Model {
  name?: string;
  id?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponseBodyDataCountOss extends $tea.Model {
  lastSensitiveCount?: number;
  totalCount?: number;
  sensitiveCount?: number;
  count?: number;
  lastCount?: number;
  riskCountList?: DescribeDataTotalCountResponseBodyDataCountOssRiskCountList[];
  ossRuleTop?: DescribeDataTotalCountResponseBodyDataCountOssOssRuleTop[];
  static names(): { [key: string]: string } {
    return {
      lastSensitiveCount: 'LastSensitiveCount',
      totalCount: 'TotalCount',
      sensitiveCount: 'SensitiveCount',
      count: 'Count',
      lastCount: 'LastCount',
      riskCountList: 'RiskCountList',
      ossRuleTop: 'OssRuleTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastSensitiveCount: 'number',
      totalCount: 'number',
      sensitiveCount: 'number',
      count: 'number',
      lastCount: 'number',
      riskCountList: { 'type': 'array', 'itemType': DescribeDataTotalCountResponseBodyDataCountOssRiskCountList },
      ossRuleTop: { 'type': 'array', 'itemType': DescribeDataTotalCountResponseBodyDataCountOssOssRuleTop },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataTotalCountResponseBodyDataCount extends $tea.Model {
  instance?: DescribeDataTotalCountResponseBodyDataCountInstance;
  table?: DescribeDataTotalCountResponseBodyDataCountTable;
  package?: DescribeDataTotalCountResponseBodyDataCountPackage;
  column?: DescribeDataTotalCountResponseBodyDataCountColumn;
  oss?: DescribeDataTotalCountResponseBodyDataCountOss;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      table: 'Table',
      package: 'Package',
      column: 'Column',
      oss: 'Oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DescribeDataTotalCountResponseBodyDataCountInstance,
      table: DescribeDataTotalCountResponseBodyDataCountTable,
      package: DescribeDataTotalCountResponseBodyDataCountPackage,
      column: DescribeDataTotalCountResponseBodyDataCountColumn,
      oss: DescribeDataTotalCountResponseBodyDataCountOss,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBodyEventHandleInfoList extends $tea.Model {
  status?: number;
  enableTime?: number;
  handlerValue?: number;
  disableTime?: number;
  handlerName?: string;
  handlerType?: string;
  currentValue?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      enableTime: 'EnableTime',
      handlerValue: 'HandlerValue',
      disableTime: 'DisableTime',
      handlerName: 'HandlerName',
      handlerType: 'HandlerType',
      currentValue: 'CurrentValue',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      enableTime: 'number',
      handlerValue: 'number',
      disableTime: 'number',
      handlerName: 'string',
      handlerType: 'string',
      currentValue: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBodyEventDetailContent extends $tea.Model {
  label?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBodyEventDetailChartData extends $tea.Model {
  y?: string;
  x?: string;
  static names(): { [key: string]: string } {
    return {
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      y: 'string',
      x: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBodyEventDetailChart extends $tea.Model {
  type?: string;
  label?: string;
  XLabel?: string;
  YLabel?: string;
  data?: DescribeEventDetailResponseBodyEventDetailChartData;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      label: 'Label',
      XLabel: 'XLabel',
      YLabel: 'YLabel',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      label: 'string',
      XLabel: 'string',
      YLabel: 'string',
      data: DescribeEventDetailResponseBodyEventDetailChartData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBodyEventDetailResourceInfo extends $tea.Model {
  label?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBodyEventDetail extends $tea.Model {
  content?: DescribeEventDetailResponseBodyEventDetailContent[];
  chart?: DescribeEventDetailResponseBodyEventDetailChart[];
  resourceInfo?: DescribeEventDetailResponseBodyEventDetailResourceInfo[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      chart: 'Chart',
      resourceInfo: 'ResourceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventDetailContent },
      chart: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventDetailChart },
      resourceInfo: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventDetailResourceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBodyEvent extends $tea.Model {
  displayName?: string;
  status?: number;
  dealReason?: string;
  userId?: number;
  statusName?: string;
  dealTime?: number;
  dealLoginName?: string;
  subTypeName?: string;
  backed?: boolean;
  dataInstance?: string;
  eventTime?: number;
  loginName?: string;
  subTypeCode?: string;
  logDetail?: string;
  typeCode?: string;
  alertTime?: number;
  dealUserId?: number;
  typeName?: string;
  dealDisplayName?: string;
  id?: number;
  productCode?: string;
  handleInfoList?: DescribeEventDetailResponseBodyEventHandleInfoList[];
  detail?: DescribeEventDetailResponseBodyEventDetail;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      status: 'Status',
      dealReason: 'DealReason',
      userId: 'UserId',
      statusName: 'StatusName',
      dealTime: 'DealTime',
      dealLoginName: 'DealLoginName',
      subTypeName: 'SubTypeName',
      backed: 'Backed',
      dataInstance: 'DataInstance',
      eventTime: 'EventTime',
      loginName: 'LoginName',
      subTypeCode: 'SubTypeCode',
      logDetail: 'LogDetail',
      typeCode: 'TypeCode',
      alertTime: 'AlertTime',
      dealUserId: 'DealUserId',
      typeName: 'TypeName',
      dealDisplayName: 'DealDisplayName',
      id: 'Id',
      productCode: 'ProductCode',
      handleInfoList: 'HandleInfoList',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      status: 'number',
      dealReason: 'string',
      userId: 'number',
      statusName: 'string',
      dealTime: 'number',
      dealLoginName: 'string',
      subTypeName: 'string',
      backed: 'boolean',
      dataInstance: 'string',
      eventTime: 'number',
      loginName: 'string',
      subTypeCode: 'string',
      logDetail: 'string',
      typeCode: 'string',
      alertTime: 'number',
      dealUserId: 'number',
      typeName: 'string',
      dealDisplayName: 'string',
      id: 'number',
      productCode: 'string',
      handleInfoList: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventHandleInfoList },
      detail: DescribeEventDetailResponseBodyEventDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyItems extends $tea.Model {
  displayName?: string;
  status?: number;
  warnLevel?: number;
  userId?: number;
  statusName?: string;
  dealTime?: number;
  dealLoginName?: string;
  subTypeName?: string;
  backed?: boolean;
  eventTime?: number;
  loginName?: string;
  subTypeCode?: string;
  targetProductCode?: string;
  typeCode?: string;
  alertTime?: number;
  dealUserId?: number;
  typeName?: string;
  dealDisplayName?: string;
  id?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      status: 'Status',
      warnLevel: 'WarnLevel',
      userId: 'UserId',
      statusName: 'StatusName',
      dealTime: 'DealTime',
      dealLoginName: 'DealLoginName',
      subTypeName: 'SubTypeName',
      backed: 'Backed',
      eventTime: 'EventTime',
      loginName: 'LoginName',
      subTypeCode: 'SubTypeCode',
      targetProductCode: 'TargetProductCode',
      typeCode: 'TypeCode',
      alertTime: 'AlertTime',
      dealUserId: 'DealUserId',
      typeName: 'TypeName',
      dealDisplayName: 'DealDisplayName',
      id: 'Id',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      status: 'number',
      warnLevel: 'number',
      userId: 'number',
      statusName: 'string',
      dealTime: 'number',
      dealLoginName: 'string',
      subTypeName: 'string',
      backed: 'boolean',
      eventTime: 'number',
      loginName: 'string',
      subTypeCode: 'string',
      targetProductCode: 'string',
      typeCode: 'string',
      alertTime: 'number',
      dealUserId: 'number',
      typeName: 'string',
      dealDisplayName: 'string',
      id: 'number',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTopResponseBodyDataCountList extends $tea.Model {
  eventName?: string;
  remoteIp?: string;
  instanceName?: string;
  userName?: string;
  id?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      remoteIp: 'RemoteIp',
      instanceName: 'InstanceName',
      userName: 'UserName',
      id: 'Id',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      remoteIp: 'string',
      instanceName: 'string',
      userName: 'string',
      id: 'number',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTypesResponseBodyEventTypeListSubTypeList extends $tea.Model {
  status?: number;
  description?: string;
  configContentType?: number;
  eventHitCount?: number;
  configValue?: string;
  configCode?: string;
  code?: string;
  configDescription?: string;
  name?: string;
  adaptedProduct?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      description: 'Description',
      configContentType: 'ConfigContentType',
      eventHitCount: 'EventHitCount',
      configValue: 'ConfigValue',
      configCode: 'ConfigCode',
      code: 'Code',
      configDescription: 'ConfigDescription',
      name: 'Name',
      adaptedProduct: 'AdaptedProduct',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      description: 'string',
      configContentType: 'number',
      eventHitCount: 'number',
      configValue: 'string',
      configCode: 'string',
      code: 'string',
      configDescription: 'string',
      name: 'string',
      adaptedProduct: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTypesResponseBodyEventTypeList extends $tea.Model {
  code?: string;
  description?: string;
  name?: string;
  id?: number;
  subTypeList?: DescribeEventTypesResponseBodyEventTypeListSubTypeList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      name: 'Name',
      id: 'Id',
      subTypeList: 'SubTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      name: 'string',
      id: 'number',
      subTypeList: { 'type': 'array', 'itemType': DescribeEventTypesResponseBodyEventTypeListSubTypeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTypesDetailResponseBodyUserStatus extends $tea.Model {
  status?: number;
  riskLevel?: number;
  configContentType?: number;
  dealSuggestion?: string;
  eventHitCount?: number;
  configValue?: string;
  accessCount?: number;
  configDescription?: string;
  riskName?: string;
  descEvent?: string;
  riskEvent?: string;
  parentTypeName?: string;
  description?: string;
  descModel?: string;
  configCode?: string;
  code?: string;
  parentTypeId?: number;
  name?: string;
  adaptedProduct?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      riskLevel: 'RiskLevel',
      configContentType: 'ConfigContentType',
      dealSuggestion: 'DealSuggestion',
      eventHitCount: 'EventHitCount',
      configValue: 'ConfigValue',
      accessCount: 'AccessCount',
      configDescription: 'ConfigDescription',
      riskName: 'RiskName',
      descEvent: 'DescEvent',
      riskEvent: 'RiskEvent',
      parentTypeName: 'ParentTypeName',
      description: 'Description',
      descModel: 'DescModel',
      configCode: 'ConfigCode',
      code: 'Code',
      parentTypeId: 'ParentTypeId',
      name: 'Name',
      adaptedProduct: 'AdaptedProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      riskLevel: 'number',
      configContentType: 'number',
      dealSuggestion: 'string',
      eventHitCount: 'number',
      configValue: 'string',
      accessCount: 'number',
      configDescription: 'string',
      riskName: 'string',
      descEvent: 'string',
      riskEvent: 'string',
      parentTypeName: 'string',
      description: 'string',
      descModel: 'string',
      configCode: 'string',
      code: 'string',
      parentTypeId: 'number',
      name: 'string',
      adaptedProduct: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePortraitResponseBodyContent extends $tea.Model {
  content?: string;
  itemKey?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      itemKey: 'ItemKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      itemKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyItems extends $tea.Model {
  creationTime?: number;
  acl?: string;
  lastFinishTime?: number;
  owner?: string;
  tenantName?: string;
  protection?: boolean;
  departName?: string;
  labelsec?: boolean;
  riskLevelId?: number;
  productId?: string;
  name?: string;
  totalCount?: number;
  instanceDescription?: string;
  ruleName?: string;
  sensitive?: boolean;
  riskLevelName?: string;
  odpsRiskLevelName?: string;
  sensitiveCount?: number;
  id?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      acl: 'Acl',
      lastFinishTime: 'LastFinishTime',
      owner: 'Owner',
      tenantName: 'TenantName',
      protection: 'Protection',
      departName: 'DepartName',
      labelsec: 'Labelsec',
      riskLevelId: 'RiskLevelId',
      productId: 'ProductId',
      name: 'Name',
      totalCount: 'TotalCount',
      instanceDescription: 'InstanceDescription',
      ruleName: 'RuleName',
      sensitive: 'Sensitive',
      riskLevelName: 'RiskLevelName',
      odpsRiskLevelName: 'OdpsRiskLevelName',
      sensitiveCount: 'SensitiveCount',
      id: 'Id',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      acl: 'string',
      lastFinishTime: 'number',
      owner: 'string',
      tenantName: 'string',
      protection: 'boolean',
      departName: 'string',
      labelsec: 'boolean',
      riskLevelId: 'number',
      productId: 'string',
      name: 'string',
      totalCount: 'number',
      instanceDescription: 'string',
      ruleName: 'string',
      sensitive: 'boolean',
      riskLevelName: 'string',
      odpsRiskLevelName: 'string',
      sensitiveCount: 'number',
      id: 'number',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSourcesResponseBodyItems extends $tea.Model {
  lastModifyUserId?: string;
  passwordStatus?: number;
  engineType?: string;
  tenantName?: string;
  instanceId?: string;
  instanceDescription?: string;
  dataLimitId?: number;
  regionId?: string;
  dbName?: string;
  lastModifyTime?: number;
  regionName?: string;
  canModifyUserName?: boolean;
  logStoreDay?: number;
  gmtCreate?: number;
  autoScan?: number;
  productId?: number;
  instanceSize?: number;
  userName?: string;
  auditStatus?: number;
  id?: number;
  tenantId?: string;
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      lastModifyUserId: 'LastModifyUserId',
      passwordStatus: 'PasswordStatus',
      engineType: 'EngineType',
      tenantName: 'TenantName',
      instanceId: 'InstanceId',
      instanceDescription: 'InstanceDescription',
      dataLimitId: 'DataLimitId',
      regionId: 'RegionId',
      dbName: 'DbName',
      lastModifyTime: 'LastModifyTime',
      regionName: 'RegionName',
      canModifyUserName: 'CanModifyUserName',
      logStoreDay: 'LogStoreDay',
      gmtCreate: 'GmtCreate',
      autoScan: 'AutoScan',
      productId: 'ProductId',
      instanceSize: 'InstanceSize',
      userName: 'UserName',
      auditStatus: 'AuditStatus',
      id: 'Id',
      tenantId: 'TenantId',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastModifyUserId: 'string',
      passwordStatus: 'number',
      engineType: 'string',
      tenantName: 'string',
      instanceId: 'string',
      instanceDescription: 'string',
      dataLimitId: 'number',
      regionId: 'string',
      dbName: 'string',
      lastModifyTime: 'number',
      regionName: 'string',
      canModifyUserName: 'boolean',
      logStoreDay: 'number',
      gmtCreate: 'number',
      autoScan: 'number',
      productId: 'number',
      instanceSize: 'number',
      userName: 'string',
      auditStatus: 'number',
      id: 'number',
      tenantId: 'string',
      enable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailResponseBodyOssObjectDetailRuleList extends $tea.Model {
  riskLevelName?: string;
  categoryName?: string;
  riskLevelId?: number;
  count?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevelName: 'RiskLevelName',
      categoryName: 'CategoryName',
      riskLevelId: 'RiskLevelId',
      count: 'Count',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevelName: 'string',
      categoryName: 'string',
      riskLevelId: 'number',
      count: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailResponseBodyOssObjectDetail extends $tea.Model {
  categoryName?: string;
  name?: string;
  bucketName?: string;
  riskLevelName?: string;
  regionId?: string;
  ruleList?: DescribeOssObjectDetailResponseBodyOssObjectDetailRuleList[];
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      name: 'Name',
      bucketName: 'BucketName',
      riskLevelName: 'RiskLevelName',
      regionId: 'RegionId',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      name: 'string',
      bucketName: 'string',
      riskLevelName: 'string',
      regionId: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeOssObjectDetailResponseBodyOssObjectDetailRuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectsResponseBodyItemsRuleList extends $tea.Model {
  name?: string;
  riskLevelId?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      riskLevelId: 'RiskLevelId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      riskLevelId: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectsResponseBodyItems extends $tea.Model {
  instanceId?: number;
  categoryName?: string;
  riskLevelId?: number;
  regionId?: string;
  fileId?: string;
  size?: number;
  bucketName?: string;
  riskLevelName?: string;
  category?: number;
  name?: string;
  ruleCount?: number;
  sensitiveCount?: number;
  id?: string;
  ruleList?: DescribeOssObjectsResponseBodyItemsRuleList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      categoryName: 'CategoryName',
      riskLevelId: 'RiskLevelId',
      regionId: 'RegionId',
      fileId: 'FileId',
      size: 'Size',
      bucketName: 'BucketName',
      riskLevelName: 'RiskLevelName',
      category: 'Category',
      name: 'Name',
      ruleCount: 'RuleCount',
      sensitiveCount: 'SensitiveCount',
      id: 'Id',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      categoryName: 'string',
      riskLevelId: 'number',
      regionId: 'string',
      fileId: 'string',
      size: 'number',
      bucketName: 'string',
      riskLevelName: 'string',
      category: 'number',
      name: 'string',
      ruleCount: 'number',
      sensitiveCount: 'number',
      id: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeOssObjectsResponseBodyItemsRuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackagesResponseBodyItems extends $tea.Model {
  creationTime?: number;
  sensitive?: boolean;
  owner?: string;
  riskLevelName?: string;
  instanceId?: number;
  totalCount?: number;
  name?: string;
  sensitiveCount?: number;
  riskLevelId?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      sensitive: 'Sensitive',
      owner: 'Owner',
      riskLevelName: 'RiskLevelName',
      instanceId: 'InstanceId',
      totalCount: 'TotalCount',
      name: 'Name',
      sensitiveCount: 'SensitiveCount',
      riskLevelId: 'RiskLevelId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      sensitive: 'boolean',
      owner: 'string',
      riskLevelName: 'string',
      instanceId: 'number',
      totalCount: 'number',
      name: 'string',
      sensitiveCount: 'number',
      riskLevelId: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskLevelsResponseBodyRiskLevelList extends $tea.Model {
  name?: string;
  description?: string;
  alias?: string;
  id?: number;
  referenceNum?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      description: 'Description',
      alias: 'Alias',
      id: 'Id',
      referenceNum: 'ReferenceNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      description: 'string',
      alias: 'string',
      id: 'number',
      referenceNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleCategoryResponseBodyRuleListChildList extends $tea.Model {
  parentId?: string;
  groupId?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      parentId: 'ParentId',
      groupId: 'GroupId',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'string',
      groupId: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleCategoryResponseBodyRuleList extends $tea.Model {
  name?: string;
  groupId?: string;
  childList?: DescribeRuleCategoryResponseBodyRuleListChildList[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      groupId: 'GroupId',
      childList: 'ChildList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      groupId: 'string',
      childList: { 'type': 'array', 'itemType': DescribeRuleCategoryResponseBodyRuleListChildList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleCategoryResponseBodyProductList extends $tea.Model {
  label?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponseBodyItems extends $tea.Model {
  displayName?: string;
  status?: number;
  warnLevel?: number;
  userId?: number;
  statExpress?: string;
  gmtModified?: number;
  riskLevelId?: number;
  description?: string;
  productId?: number;
  name?: string;
  content?: string;
  target?: string;
  loginName?: string;
  categoryName?: string;
  contentCategory?: string;
  hitTotalCount?: number;
  groupId?: string;
  customType?: number;
  riskLevelName?: string;
  gmtCreate?: number;
  category?: number;
  majorKey?: string;
  id?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      status: 'Status',
      warnLevel: 'WarnLevel',
      userId: 'UserId',
      statExpress: 'StatExpress',
      gmtModified: 'GmtModified',
      riskLevelId: 'RiskLevelId',
      description: 'Description',
      productId: 'ProductId',
      name: 'Name',
      content: 'Content',
      target: 'Target',
      loginName: 'LoginName',
      categoryName: 'CategoryName',
      contentCategory: 'ContentCategory',
      hitTotalCount: 'HitTotalCount',
      groupId: 'GroupId',
      customType: 'CustomType',
      riskLevelName: 'RiskLevelName',
      gmtCreate: 'GmtCreate',
      category: 'Category',
      majorKey: 'MajorKey',
      id: 'Id',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      status: 'number',
      warnLevel: 'number',
      userId: 'number',
      statExpress: 'string',
      gmtModified: 'number',
      riskLevelId: 'number',
      description: 'string',
      productId: 'number',
      name: 'string',
      content: 'string',
      target: 'string',
      loginName: 'string',
      categoryName: 'string',
      contentCategory: 'string',
      hitTotalCount: 'number',
      groupId: 'string',
      customType: 'number',
      riskLevelName: 'string',
      gmtCreate: 'number',
      category: 'number',
      majorKey: 'string',
      id: 'number',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBodyItemsRuleList extends $tea.Model {
  displayName?: string;
  name?: string;
  riskLevelId?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      name: 'Name',
      riskLevelId: 'RiskLevelId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      name: 'string',
      riskLevelId: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBodyItems extends $tea.Model {
  creationTime?: number;
  owner?: string;
  sensitiveRatio?: string;
  tenantName?: string;
  riskLevelId?: number;
  instanceName?: string;
  productId?: string;
  name?: string;
  instanceId?: number;
  totalCount?: number;
  instanceDescription?: string;
  sensitive?: boolean;
  riskLevelName?: string;
  sensitiveCount?: number;
  id?: number;
  productCode?: string;
  ruleList?: DescribeTablesResponseBodyItemsRuleList[];
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      owner: 'Owner',
      sensitiveRatio: 'SensitiveRatio',
      tenantName: 'TenantName',
      riskLevelId: 'RiskLevelId',
      instanceName: 'InstanceName',
      productId: 'ProductId',
      name: 'Name',
      instanceId: 'InstanceId',
      totalCount: 'TotalCount',
      instanceDescription: 'InstanceDescription',
      sensitive: 'Sensitive',
      riskLevelName: 'RiskLevelName',
      sensitiveCount: 'SensitiveCount',
      id: 'Id',
      productCode: 'ProductCode',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      owner: 'string',
      sensitiveRatio: 'string',
      tenantName: 'string',
      riskLevelId: 'number',
      instanceName: 'string',
      productId: 'string',
      name: 'string',
      instanceId: 'number',
      totalCount: 'number',
      instanceDescription: 'string',
      sensitive: 'boolean',
      riskLevelName: 'string',
      sensitiveCount: 'number',
      id: 'number',
      productCode: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeTablesResponseBodyItemsRuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserCountResponseBodyUserCount extends $tea.Model {
  saleInstanceId?: string;
  authed?: boolean;
  buyed?: boolean;
  saleInstanceStatus?: number;
  warnAddCount?: number;
  warnTotalCount?: number;
  unAuthCount?: number;
  totalAuthCount?: number;
  authCount?: number;
  static names(): { [key: string]: string } {
    return {
      saleInstanceId: 'SaleInstanceId',
      authed: 'Authed',
      buyed: 'Buyed',
      saleInstanceStatus: 'SaleInstanceStatus',
      warnAddCount: 'WarnAddCount',
      warnTotalCount: 'WarnTotalCount',
      unAuthCount: 'UnAuthCount',
      totalAuthCount: 'TotalAuthCount',
      authCount: 'AuthCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saleInstanceId: 'string',
      authed: 'boolean',
      buyed: 'boolean',
      saleInstanceStatus: 'number',
      warnAddCount: 'number',
      warnTotalCount: 'number',
      unAuthCount: 'number',
      totalAuthCount: 'number',
      authCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserStatusResponseBodyUserStatus extends $tea.Model {
  useOssSize?: number;
  useInstanceNum?: number;
  instanceNum?: number;
  chargeType?: string;
  incSensitiveTables?: number;
  auditUpgradeStatus?: boolean;
  dataMaskTasks?: number;
  authed?: boolean;
  labStatus?: number;
  odpsSet?: boolean;
  ossBucketSet?: boolean;
  sensitiveTable?: number;
  remainDays?: number;
  totalDataMaskColumns?: number;
  datamaskColumns?: number;
  authProductList?: string;
  trail?: boolean;
  divulgeCount?: number;
  rdsSet?: boolean;
  dbAuditStatus?: number;
  renewStatus?: boolean;
  sensitiveObjects?: number;
  dataMaskColumns?: number;
  dlpTotalCount?: number;
  sensitiveObject?: number;
  dlpCount?: number;
  instanceId?: string;
  accessKeyId?: string;
  ossSize?: number;
  sensitiveTotalTop?: string;
  sensitiveTables?: number;
  sensitiveTop?: string;
  buyed?: boolean;
  incSensitiveObjects?: number;
  instanceStatus?: number;
  assetScanned?: boolean;
  alarmCount?: number;
  displayTime?: string;
  static names(): { [key: string]: string } {
    return {
      useOssSize: 'UseOssSize',
      useInstanceNum: 'UseInstanceNum',
      instanceNum: 'InstanceNum',
      chargeType: 'ChargeType',
      incSensitiveTables: 'IncSensitiveTables',
      auditUpgradeStatus: 'AuditUpgradeStatus',
      dataMaskTasks: 'DataMaskTasks',
      authed: 'Authed',
      labStatus: 'LabStatus',
      odpsSet: 'OdpsSet',
      ossBucketSet: 'OssBucketSet',
      sensitiveTable: 'SensitiveTable',
      remainDays: 'RemainDays',
      totalDataMaskColumns: 'TotalDataMaskColumns',
      datamaskColumns: 'DatamaskColumns',
      authProductList: 'AuthProductList',
      trail: 'Trail',
      divulgeCount: 'DivulgeCount',
      rdsSet: 'RdsSet',
      dbAuditStatus: 'DbAuditStatus',
      renewStatus: 'RenewStatus',
      sensitiveObjects: 'SensitiveObjects',
      dataMaskColumns: 'DataMaskColumns',
      dlpTotalCount: 'DlpTotalCount',
      sensitiveObject: 'SensitiveObject',
      dlpCount: 'DlpCount',
      instanceId: 'InstanceId',
      accessKeyId: 'AccessKeyId',
      ossSize: 'OssSize',
      sensitiveTotalTop: 'SensitiveTotalTop',
      sensitiveTables: 'SensitiveTables',
      sensitiveTop: 'SensitiveTop',
      buyed: 'Buyed',
      incSensitiveObjects: 'IncSensitiveObjects',
      instanceStatus: 'InstanceStatus',
      assetScanned: 'AssetScanned',
      alarmCount: 'AlarmCount',
      displayTime: 'DisplayTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      useOssSize: 'number',
      useInstanceNum: 'number',
      instanceNum: 'number',
      chargeType: 'string',
      incSensitiveTables: 'number',
      auditUpgradeStatus: 'boolean',
      dataMaskTasks: 'number',
      authed: 'boolean',
      labStatus: 'number',
      odpsSet: 'boolean',
      ossBucketSet: 'boolean',
      sensitiveTable: 'number',
      remainDays: 'number',
      totalDataMaskColumns: 'number',
      datamaskColumns: 'number',
      authProductList: 'string',
      trail: 'boolean',
      divulgeCount: 'number',
      rdsSet: 'boolean',
      dbAuditStatus: 'number',
      renewStatus: 'boolean',
      sensitiveObjects: 'number',
      dataMaskColumns: 'number',
      dlpTotalCount: 'number',
      sensitiveObject: 'number',
      dlpCount: 'number',
      instanceId: 'string',
      accessKeyId: 'string',
      ossSize: 'number',
      sensitiveTotalTop: 'string',
      sensitiveTables: 'number',
      sensitiveTop: 'string',
      buyed: 'boolean',
      incSensitiveObjects: 'number',
      instanceStatus: 'number',
      assetScanned: 'boolean',
      alarmCount: 'number',
      displayTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hongkong': "sddp-api.cn-hongkong.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sddp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async batchDeleteDataLimitWithOptions(runtime: $Util.RuntimeOptions): Promise<BatchDeleteDataLimitResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<BatchDeleteDataLimitResponse>(await this.doRPCRequest("BatchDeleteDataLimit", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new BatchDeleteDataLimitResponse({}));
  }

  async batchDeleteDataLimit(): Promise<BatchDeleteDataLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteDataLimitWithOptions(runtime);
  }

  async createConfigWithOptions(request: CreateConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateConfigResponse>(await this.doRPCRequest("CreateConfig", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateConfigResponse({}));
  }

  async createConfig(request: CreateConfigRequest): Promise<CreateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConfigWithOptions(request, runtime);
  }

  async createDataLimitWithOptions(request: CreateDataLimitRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataLimitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDataLimitResponse>(await this.doRPCRequest("CreateDataLimit", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDataLimitResponse({}));
  }

  async createDataLimit(request: CreateDataLimitRequest): Promise<CreateDataLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataLimitWithOptions(request, runtime);
  }

  async createRuleWithOptions(request: CreateRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRuleResponse>(await this.doRPCRequest("CreateRule", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRuleResponse({}));
  }

  async createRule(request: CreateRuleRequest): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  async createScanTaskWithOptions(request: CreateScanTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateScanTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScanTaskResponse>(await this.doRPCRequest("CreateScanTask", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScanTaskResponse({}));
  }

  async createScanTask(request: CreateScanTaskRequest): Promise<CreateScanTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScanTaskWithOptions(request, runtime);
  }

  async deleteDataLimitWithOptions(request: DeleteDataLimitRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataLimitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDataLimitResponse>(await this.doRPCRequest("DeleteDataLimit", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDataLimitResponse({}));
  }

  async deleteDataLimit(request: DeleteDataLimitRequest): Promise<DeleteDataLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataLimitWithOptions(request, runtime);
  }

  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRuleResponse>(await this.doRPCRequest("DeleteRule", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRuleResponse({}));
  }

  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  async describeAccountDetailWithOptions(request: DescribeAccountDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccountDetailResponse>(await this.doRPCRequest("DescribeAccountDetail", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccountDetailResponse({}));
  }

  async describeAccountDetail(request: DescribeAccountDetailRequest): Promise<DescribeAccountDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountDetailWithOptions(request, runtime);
  }

  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccountsResponse>(await this.doRPCRequest("DescribeAccounts", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccountsResponse({}));
  }

  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  async describeColumnsWithOptions(request: DescribeColumnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeColumnsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeColumnsResponse>(await this.doRPCRequest("DescribeColumns", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeColumnsResponse({}));
  }

  async describeColumns(request: DescribeColumnsRequest): Promise<DescribeColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeColumnsWithOptions(request, runtime);
  }

  async describeConfigsWithOptions(request: DescribeConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeConfigsResponse>(await this.doRPCRequest("DescribeConfigs", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeConfigsResponse({}));
  }

  async describeConfigs(request: DescribeConfigsRequest): Promise<DescribeConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConfigsWithOptions(request, runtime);
  }

  async describeDataAssetsWithOptions(request: DescribeDataAssetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataAssetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataAssetsResponse>(await this.doRPCRequest("DescribeDataAssets", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataAssetsResponse({}));
  }

  async describeDataAssets(request: DescribeDataAssetsRequest): Promise<DescribeDataAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataAssetsWithOptions(request, runtime);
  }

  async describeDataLimitDetailWithOptions(request: DescribeDataLimitDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataLimitDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataLimitDetailResponse>(await this.doRPCRequest("DescribeDataLimitDetail", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataLimitDetailResponse({}));
  }

  async describeDataLimitDetail(request: DescribeDataLimitDetailRequest): Promise<DescribeDataLimitDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataLimitDetailWithOptions(request, runtime);
  }

  async describeDataLimitsWithOptions(request: DescribeDataLimitsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataLimitsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataLimitsResponse>(await this.doRPCRequest("DescribeDataLimits", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataLimitsResponse({}));
  }

  async describeDataLimits(request: DescribeDataLimitsRequest): Promise<DescribeDataLimitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataLimitsWithOptions(request, runtime);
  }

  async describeDataLimitSetWithOptions(request: DescribeDataLimitSetRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataLimitSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataLimitSetResponse>(await this.doRPCRequest("DescribeDataLimitSet", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataLimitSetResponse({}));
  }

  async describeDataLimitSet(request: DescribeDataLimitSetRequest): Promise<DescribeDataLimitSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataLimitSetWithOptions(request, runtime);
  }

  async describeDataLimitsInstanceDimWithOptions(request: DescribeDataLimitsInstanceDimRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataLimitsInstanceDimResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataLimitsInstanceDimResponse>(await this.doRPCRequest("DescribeDataLimitsInstanceDim", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataLimitsInstanceDimResponse({}));
  }

  async describeDataLimitsInstanceDim(request: DescribeDataLimitsInstanceDimRequest): Promise<DescribeDataLimitsInstanceDimResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataLimitsInstanceDimWithOptions(request, runtime);
  }

  async describeDataMaskingRunHistoryWithOptions(request: DescribeDataMaskingRunHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataMaskingRunHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataMaskingRunHistoryResponse>(await this.doRPCRequest("DescribeDataMaskingRunHistory", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataMaskingRunHistoryResponse({}));
  }

  async describeDataMaskingRunHistory(request: DescribeDataMaskingRunHistoryRequest): Promise<DescribeDataMaskingRunHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataMaskingRunHistoryWithOptions(request, runtime);
  }

  async describeDataMaskingTasksWithOptions(request: DescribeDataMaskingTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataMaskingTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataMaskingTasksResponse>(await this.doRPCRequest("DescribeDataMaskingTasks", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataMaskingTasksResponse({}));
  }

  async describeDataMaskingTasks(request: DescribeDataMaskingTasksRequest): Promise<DescribeDataMaskingTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataMaskingTasksWithOptions(request, runtime);
  }

  async describeDataTotalCountWithOptions(request: DescribeDataTotalCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataTotalCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataTotalCountResponse>(await this.doRPCRequest("DescribeDataTotalCount", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataTotalCountResponse({}));
  }

  async describeDataTotalCount(request: DescribeDataTotalCountRequest): Promise<DescribeDataTotalCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataTotalCountWithOptions(request, runtime);
  }

  async describeEventDetailWithOptions(request: DescribeEventDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEventDetailResponse>(await this.doRPCRequest("DescribeEventDetail", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEventDetailResponse({}));
  }

  async describeEventDetail(request: DescribeEventDetailRequest): Promise<DescribeEventDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventDetailWithOptions(request, runtime);
  }

  async describeEventsWithOptions(request: DescribeEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEventsResponse>(await this.doRPCRequest("DescribeEvents", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEventsResponse({}));
  }

  async describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventsWithOptions(request, runtime);
  }

  async describeEventTopWithOptions(request: DescribeEventTopRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventTopResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEventTopResponse>(await this.doRPCRequest("DescribeEventTop", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEventTopResponse({}));
  }

  async describeEventTop(request: DescribeEventTopRequest): Promise<DescribeEventTopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventTopWithOptions(request, runtime);
  }

  async describeEventTypesWithOptions(request: DescribeEventTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventTypesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEventTypesResponse>(await this.doRPCRequest("DescribeEventTypes", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEventTypesResponse({}));
  }

  async describeEventTypes(request: DescribeEventTypesRequest): Promise<DescribeEventTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventTypesWithOptions(request, runtime);
  }

  async describeEventTypesDetailWithOptions(request: DescribeEventTypesDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventTypesDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEventTypesDetailResponse>(await this.doRPCRequest("DescribeEventTypesDetail", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEventTypesDetailResponse({}));
  }

  async describeEventTypesDetail(request: DescribeEventTypesDetailRequest): Promise<DescribeEventTypesDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventTypesDetailWithOptions(request, runtime);
  }

  async describeInstancePortraitWithOptions(request: DescribeInstancePortraitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancePortraitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancePortraitResponse>(await this.doRPCRequest("DescribeInstancePortrait", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancePortraitResponse({}));
  }

  async describeInstancePortrait(request: DescribeInstancePortraitRequest): Promise<DescribeInstancePortraitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancePortraitWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancesResponse>(await this.doRPCRequest("DescribeInstances", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeInstanceSourcesWithOptions(request: DescribeInstanceSourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceSourcesResponse>(await this.doRPCRequest("DescribeInstanceSources", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceSourcesResponse({}));
  }

  async describeInstanceSources(request: DescribeInstanceSourcesRequest): Promise<DescribeInstanceSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSourcesWithOptions(request, runtime);
  }

  async describeOssObjectDetailWithOptions(request: DescribeOssObjectDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssObjectDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOssObjectDetailResponse>(await this.doRPCRequest("DescribeOssObjectDetail", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOssObjectDetailResponse({}));
  }

  async describeOssObjectDetail(request: DescribeOssObjectDetailRequest): Promise<DescribeOssObjectDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssObjectDetailWithOptions(request, runtime);
  }

  async describeOssObjectsWithOptions(request: DescribeOssObjectsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssObjectsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOssObjectsResponse>(await this.doRPCRequest("DescribeOssObjects", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOssObjectsResponse({}));
  }

  async describeOssObjects(request: DescribeOssObjectsRequest): Promise<DescribeOssObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssObjectsWithOptions(request, runtime);
  }

  async describePackagesWithOptions(request: DescribePackagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePackagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePackagesResponse>(await this.doRPCRequest("DescribePackages", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePackagesResponse({}));
  }

  async describePackages(request: DescribePackagesRequest): Promise<DescribePackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackagesWithOptions(request, runtime);
  }

  async describeRiskLevelsWithOptions(request: DescribeRiskLevelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskLevelsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRiskLevelsResponse>(await this.doRPCRequest("DescribeRiskLevels", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRiskLevelsResponse({}));
  }

  async describeRiskLevels(request: DescribeRiskLevelsRequest): Promise<DescribeRiskLevelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskLevelsWithOptions(request, runtime);
  }

  async describeRuleCategoryWithOptions(request: DescribeRuleCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRuleCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRuleCategoryResponse>(await this.doRPCRequest("DescribeRuleCategory", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRuleCategoryResponse({}));
  }

  async describeRuleCategory(request: DescribeRuleCategoryRequest): Promise<DescribeRuleCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRuleCategoryWithOptions(request, runtime);
  }

  async describeRulesWithOptions(request: DescribeRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRulesResponse>(await this.doRPCRequest("DescribeRules", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRulesResponse({}));
  }

  async describeRules(request: DescribeRulesRequest): Promise<DescribeRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRulesWithOptions(request, runtime);
  }

  async describeTablesWithOptions(request: DescribeTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTablesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTablesResponse>(await this.doRPCRequest("DescribeTables", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTablesResponse({}));
  }

  async describeTables(request: DescribeTablesRequest): Promise<DescribeTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  async describeUserCountWithOptions(request: DescribeUserCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserCountResponse>(await this.doRPCRequest("DescribeUserCount", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserCountResponse({}));
  }

  async describeUserCount(request: DescribeUserCountRequest): Promise<DescribeUserCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserCountWithOptions(request, runtime);
  }

  async describeUserStatusWithOptions(request: DescribeUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserStatusResponse>(await this.doRPCRequest("DescribeUserStatus", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserStatusResponse({}));
  }

  async describeUserStatus(request: DescribeUserStatusRequest): Promise<DescribeUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserStatusWithOptions(request, runtime);
  }

  async disableUserConfigWithOptions(request: DisableUserConfigRequest, runtime: $Util.RuntimeOptions): Promise<DisableUserConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableUserConfigResponse>(await this.doRPCRequest("DisableUserConfig", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new DisableUserConfigResponse({}));
  }

  async disableUserConfig(request: DisableUserConfigRequest): Promise<DisableUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableUserConfigWithOptions(request, runtime);
  }

  async execDatamaskWithOptions(request: ExecDatamaskRequest, runtime: $Util.RuntimeOptions): Promise<ExecDatamaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecDatamaskResponse>(await this.doRPCRequest("ExecDatamask", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new ExecDatamaskResponse({}));
  }

  async execDatamask(request: ExecDatamaskRequest): Promise<ExecDatamaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.execDatamaskWithOptions(request, runtime);
  }

  async manualTriggerMaskingProcessWithOptions(request: ManualTriggerMaskingProcessRequest, runtime: $Util.RuntimeOptions): Promise<ManualTriggerMaskingProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ManualTriggerMaskingProcessResponse>(await this.doRPCRequest("ManualTriggerMaskingProcess", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new ManualTriggerMaskingProcessResponse({}));
  }

  async manualTriggerMaskingProcess(request: ManualTriggerMaskingProcessRequest): Promise<ManualTriggerMaskingProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.manualTriggerMaskingProcessWithOptions(request, runtime);
  }

  async modifyDataLimitWithOptions(request: ModifyDataLimitRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDataLimitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDataLimitResponse>(await this.doRPCRequest("ModifyDataLimit", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDataLimitResponse({}));
  }

  async modifyDataLimit(request: ModifyDataLimitRequest): Promise<ModifyDataLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDataLimitWithOptions(request, runtime);
  }

  async modifyDefaultLevelWithOptions(request: ModifyDefaultLevelRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefaultLevelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDefaultLevelResponse>(await this.doRPCRequest("ModifyDefaultLevel", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDefaultLevelResponse({}));
  }

  async modifyDefaultLevel(request: ModifyDefaultLevelRequest): Promise<ModifyDefaultLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefaultLevelWithOptions(request, runtime);
  }

  async modifyEventStatusWithOptions(request: ModifyEventStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEventStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyEventStatusResponse>(await this.doRPCRequest("ModifyEventStatus", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyEventStatusResponse({}));
  }

  async modifyEventStatus(request: ModifyEventStatusRequest): Promise<ModifyEventStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEventStatusWithOptions(request, runtime);
  }

  async modifyEventTypeStatusWithOptions(request: ModifyEventTypeStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEventTypeStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyEventTypeStatusResponse>(await this.doRPCRequest("ModifyEventTypeStatus", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyEventTypeStatusResponse({}));
  }

  async modifyEventTypeStatus(request: ModifyEventTypeStatusRequest): Promise<ModifyEventTypeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEventTypeStatusWithOptions(request, runtime);
  }

  async modifyRuleWithOptions(request: ModifyRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyRuleResponse>(await this.doRPCRequest("ModifyRule", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyRuleResponse({}));
  }

  async modifyRule(request: ModifyRuleRequest): Promise<ModifyRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRuleWithOptions(request, runtime);
  }

  async modifyRuleStatusWithOptions(request: ModifyRuleStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRuleStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyRuleStatusResponse>(await this.doRPCRequest("ModifyRuleStatus", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyRuleStatusResponse({}));
  }

  async modifyRuleStatus(request: ModifyRuleStatusRequest): Promise<ModifyRuleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRuleStatusWithOptions(request, runtime);
  }

  async stopMaskingProcessWithOptions(request: StopMaskingProcessRequest, runtime: $Util.RuntimeOptions): Promise<StopMaskingProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopMaskingProcessResponse>(await this.doRPCRequest("StopMaskingProcess", "2019-01-03", "HTTPS", "POST", "AK", "json", req, runtime), new StopMaskingProcessResponse({}));
  }

  async stopMaskingProcess(request: StopMaskingProcessRequest): Promise<StopMaskingProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMaskingProcessWithOptions(request, runtime);
  }

}
