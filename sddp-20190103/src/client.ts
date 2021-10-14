// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateConfigRequest extends $tea.Model {
  code?: string;
  description?: string;
  lang?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      lang: 'Lang',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      lang: 'string',
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
  auditStatus?: number;
  autoScan?: number;
  engineType?: string;
  eventStatus?: number;
  lang?: string;
  logStoreDay?: number;
  ocrStatus?: number;
  parentId?: string;
  password?: string;
  port?: number;
  resourceType?: number;
  serviceRegionId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoScan: 'AutoScan',
      engineType: 'EngineType',
      eventStatus: 'EventStatus',
      lang: 'Lang',
      logStoreDay: 'LogStoreDay',
      ocrStatus: 'OcrStatus',
      parentId: 'ParentId',
      password: 'Password',
      port: 'Port',
      resourceType: 'ResourceType',
      serviceRegionId: 'ServiceRegionId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      autoScan: 'number',
      engineType: 'string',
      eventStatus: 'number',
      lang: 'string',
      logStoreDay: 'number',
      ocrStatus: 'number',
      parentId: 'string',
      password: 'string',
      port: 'number',
      resourceType: 'number',
      serviceRegionId: 'string',
      userName: 'string',
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
  category?: number;
  content?: string;
  contentCategory?: number;
  description?: string;
  lang?: string;
  name?: string;
  productCode?: string;
  productId?: number;
  riskLevelId?: number;
  ruleType?: number;
  statExpress?: string;
  status?: number;
  target?: string;
  warnLevel?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      contentCategory: 'ContentCategory',
      description: 'Description',
      lang: 'Lang',
      name: 'Name',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleType: 'RuleType',
      statExpress: 'StatExpress',
      status: 'Status',
      target: 'Target',
      warnLevel: 'WarnLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      content: 'string',
      contentCategory: 'number',
      description: 'string',
      lang: 'string',
      name: 'string',
      productCode: 'string',
      productId: 'number',
      riskLevelId: 'number',
      ruleType: 'number',
      statExpress: 'string',
      status: 'number',
      target: 'string',
      warnLevel: 'number',
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
  ossScanPath?: string;
  resourceType?: number;
  runHour?: number;
  runMinute?: number;
  scanRange?: number;
  scanRangeContent?: string;
  taskName?: string;
  taskUserName?: string;
  static names(): { [key: string]: string } {
    return {
      dataLimitId: 'DataLimitId',
      intervalDay: 'IntervalDay',
      ossScanPath: 'OssScanPath',
      resourceType: 'ResourceType',
      runHour: 'RunHour',
      runMinute: 'RunMinute',
      scanRange: 'ScanRange',
      scanRangeContent: 'ScanRangeContent',
      taskName: 'TaskName',
      taskUserName: 'TaskUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLimitId: 'number',
      intervalDay: 'number',
      ossScanPath: 'string',
      resourceType: 'number',
      runHour: 'number',
      runMinute: 'number',
      scanRange: 'number',
      scanRangeContent: 'string',
      taskName: 'string',
      taskUserName: 'string',
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
  id?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
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
  id?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
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

export class DescribeColumnsRequest extends $tea.Model {
  currentPage?: number;
  instanceId?: number;
  instanceName?: string;
  lang?: string;
  name?: string;
  pageSize?: number;
  productCode?: string;
  riskLevelId?: number;
  ruleId?: number;
  ruleName?: string;
  sensLevelName?: string;
  tableId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sensLevelName: 'SensLevelName',
      tableId: 'TableId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'number',
      instanceName: 'string',
      lang: 'string',
      name: 'string',
      pageSize: 'number',
      productCode: 'string',
      riskLevelId: 'number',
      ruleId: 'number',
      ruleName: 'string',
      sensLevelName: 'string',
      tableId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeColumnsResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeColumnsResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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
  configList?: DescribeConfigsResponseBodyConfigList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': DescribeConfigsResponseBodyConfigList },
      requestId: 'string',
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
  currentPage?: number;
  lang?: string;
  name?: string;
  pageSize?: number;
  rangeId?: number;
  riskLevels?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      rangeId: 'RangeId',
      riskLevels: 'RiskLevels',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      name: 'string',
      pageSize: 'number',
      rangeId: 'number',
      riskLevels: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataAssetsResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeDataAssetsResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeDataAssetsResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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
  id?: number;
  lang?: string;
  networkType?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
      networkType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitDetailResponseBody extends $tea.Model {
  dataLimit?: DescribeDataLimitDetailResponseBodyDataLimit;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataLimit: 'DataLimit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLimit: DescribeDataLimitDetailResponseBodyDataLimit,
      requestId: 'string',
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

export class DescribeDataLimitSetRequest extends $tea.Model {
  lang?: string;
  parentId?: string;
  resourceType?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      parentId: 'ParentId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      parentId: 'string',
      resourceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitSetResponseBody extends $tea.Model {
  dataLimitSet?: DescribeDataLimitSetResponseBodyDataLimitSet;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataLimitSet: 'DataLimitSet',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLimitSet: DescribeDataLimitSetResponseBodyDataLimitSet,
      requestId: 'string',
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

export class DescribeDataLimitsRequest extends $tea.Model {
  auditStatus?: number;
  checkStatus?: number;
  currentPage?: number;
  datamaskStatus?: number;
  enable?: number;
  endTime?: number;
  engineType?: string;
  lang?: string;
  pageSize?: number;
  parentId?: string;
  resourceType?: number;
  serviceRegionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      checkStatus: 'CheckStatus',
      currentPage: 'CurrentPage',
      datamaskStatus: 'DatamaskStatus',
      enable: 'Enable',
      endTime: 'EndTime',
      engineType: 'EngineType',
      lang: 'Lang',
      pageSize: 'PageSize',
      parentId: 'ParentId',
      resourceType: 'ResourceType',
      serviceRegionId: 'ServiceRegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      checkStatus: 'number',
      currentPage: 'number',
      datamaskStatus: 'number',
      enable: 'number',
      endTime: 'number',
      engineType: 'string',
      lang: 'string',
      pageSize: 'number',
      parentId: 'string',
      resourceType: 'number',
      serviceRegionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitsResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeDataLimitsResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeDataLimitsResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class DescribeDataMaskingRunHistoryRequest extends $tea.Model {
  currentPage?: number;
  dstType?: number;
  endTime?: number;
  lang?: string;
  mainProcessId?: number;
  pageSize?: number;
  srcTableName?: string;
  srcType?: number;
  startTime?: number;
  status?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dstType: 'DstType',
      endTime: 'EndTime',
      lang: 'Lang',
      mainProcessId: 'MainProcessId',
      pageSize: 'PageSize',
      srcTableName: 'SrcTableName',
      srcType: 'SrcType',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dstType: 'number',
      endTime: 'number',
      lang: 'string',
      mainProcessId: 'number',
      pageSize: 'number',
      srcTableName: 'string',
      srcType: 'number',
      startTime: 'number',
      status: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataMaskingRunHistoryResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeDataMaskingRunHistoryResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeDataMaskingRunHistoryResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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
  currentPage?: number;
  dstType?: number;
  endTime?: number;
  lang?: string;
  pageSize?: number;
  searchKey?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dstType: 'DstType',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dstType: 'number',
      endTime: 'number',
      lang: 'string',
      pageSize: 'number',
      searchKey: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataMaskingTasksResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeDataMaskingTasksResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeDataMaskingTasksResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class DescribeEventDetailRequest extends $tea.Model {
  id?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBody extends $tea.Model {
  event?: DescribeEventDetailResponseBodyEvent;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: DescribeEventDetailResponseBodyEvent,
      requestId: 'string',
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
  eventTypeList?: DescribeEventTypesResponseBodyEventTypeList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventTypeList: 'EventTypeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypeList: { 'type': 'array', 'itemType': DescribeEventTypesResponseBodyEventTypeList },
      requestId: 'string',
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

export class DescribeEventsRequest extends $tea.Model {
  currentPage?: number;
  dealUserId?: string;
  endTime?: string;
  id?: number;
  instanceName?: string;
  lang?: string;
  pageSize?: number;
  productCode?: string;
  startTime?: string;
  status?: string;
  subTypeCode?: string;
  targetProductCode?: string;
  typeCode?: string;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dealUserId: 'DealUserId',
      endTime: 'EndTime',
      id: 'Id',
      instanceName: 'InstanceName',
      lang: 'Lang',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      startTime: 'StartTime',
      status: 'Status',
      subTypeCode: 'SubTypeCode',
      targetProductCode: 'TargetProductCode',
      typeCode: 'TypeCode',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dealUserId: 'string',
      endTime: 'string',
      id: 'number',
      instanceName: 'string',
      lang: 'string',
      pageSize: 'number',
      productCode: 'string',
      startTime: 'string',
      status: 'string',
      subTypeCode: 'string',
      targetProductCode: 'string',
      typeCode: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeEventsResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeEventsResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class DescribeInstanceSourcesRequest extends $tea.Model {
  currentPage?: number;
  engineType?: string;
  instanceId?: string;
  lang?: string;
  pageSize?: number;
  productId?: number;
  serviceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      engineType: 'EngineType',
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageSize: 'PageSize',
      productId: 'ProductId',
      serviceRegionId: 'ServiceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      engineType: 'string',
      instanceId: 'string',
      lang: 'string',
      pageSize: 'number',
      productId: 'number',
      serviceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSourcesResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeInstanceSourcesResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeInstanceSourcesResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class DescribeInstancesRequest extends $tea.Model {
  currentPage?: number;
  featureType?: number;
  lang?: string;
  name?: string;
  pageSize?: number;
  productCode?: string;
  productId?: number;
  riskLevelId?: number;
  ruleId?: number;
  serviceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      featureType: 'FeatureType',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      serviceRegionId: 'ServiceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      featureType: 'number',
      lang: 'string',
      name: 'string',
      pageSize: 'number',
      productCode: 'string',
      productId: 'number',
      riskLevelId: 'number',
      ruleId: 'number',
      serviceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeInstancesResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class DescribeOssObjectDetailRequest extends $tea.Model {
  id?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailResponseBody extends $tea.Model {
  ossObjectDetail?: DescribeOssObjectDetailResponseBodyOssObjectDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ossObjectDetail: 'OssObjectDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossObjectDetail: DescribeOssObjectDetailResponseBodyOssObjectDetail,
      requestId: 'string',
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
  currentPage?: number;
  instanceId?: string;
  lang?: string;
  lastScanTimeEnd?: number;
  lastScanTimeStart?: number;
  name?: string;
  pageSize?: number;
  riskLevelId?: number;
  ruleId?: number;
  serviceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      lang: 'Lang',
      lastScanTimeEnd: 'LastScanTimeEnd',
      lastScanTimeStart: 'LastScanTimeStart',
      name: 'Name',
      pageSize: 'PageSize',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      serviceRegionId: 'ServiceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'string',
      lang: 'string',
      lastScanTimeEnd: 'number',
      lastScanTimeStart: 'number',
      name: 'string',
      pageSize: 'number',
      riskLevelId: 'number',
      ruleId: 'number',
      serviceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectsResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeOssObjectsResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeOssObjectsResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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
  currentPage?: number;
  instanceId?: number;
  lang?: string;
  name?: string;
  pageSize?: number;
  productId?: number;
  riskLevelId?: number;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'number',
      lang: 'string',
      name: 'string',
      pageSize: 'number',
      productId: 'number',
      riskLevelId: 'number',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackagesResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribePackagesResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribePackagesResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class DescribeRulesRequest extends $tea.Model {
  category?: number;
  contentCategory?: number;
  currentPage?: number;
  customType?: number;
  groupId?: string;
  keywordCompatible?: boolean;
  lang?: string;
  name?: string;
  pageSize?: number;
  productCode?: number;
  productId?: number;
  riskLevelId?: number;
  ruleType?: number;
  status?: number;
  warnLevel?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      contentCategory: 'ContentCategory',
      currentPage: 'CurrentPage',
      customType: 'CustomType',
      groupId: 'GroupId',
      keywordCompatible: 'KeywordCompatible',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleType: 'RuleType',
      status: 'Status',
      warnLevel: 'WarnLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      contentCategory: 'number',
      currentPage: 'number',
      customType: 'number',
      groupId: 'string',
      keywordCompatible: 'boolean',
      lang: 'string',
      name: 'string',
      pageSize: 'number',
      productCode: 'number',
      productId: 'number',
      riskLevelId: 'number',
      ruleType: 'number',
      status: 'number',
      warnLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeRulesResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeRulesResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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
  currentPage?: number;
  instanceId?: number;
  lang?: string;
  name?: string;
  packageId?: number;
  pageSize?: number;
  productCode?: string;
  productId?: number;
  riskLevelId?: number;
  ruleId?: number;
  serviceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      lang: 'Lang',
      name: 'Name',
      packageId: 'PackageId',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      serviceRegionId: 'ServiceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'number',
      lang: 'string',
      name: 'string',
      packageId: 'number',
      pageSize: 'number',
      productCode: 'string',
      productId: 'number',
      riskLevelId: 'number',
      ruleId: 'number',
      serviceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeTablesResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeTablesResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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
  code?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lang: 'string',
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
  data?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      templateId: 'number',
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
  id?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
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
  auditStatus?: number;
  autoScan?: number;
  engineType?: string;
  id?: number;
  lang?: string;
  logStoreDay?: number;
  modifyPassword?: boolean;
  password?: string;
  port?: number;
  resourceType?: number;
  serviceRegionId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoScan: 'AutoScan',
      engineType: 'EngineType',
      id: 'Id',
      lang: 'Lang',
      logStoreDay: 'LogStoreDay',
      modifyPassword: 'ModifyPassword',
      password: 'Password',
      port: 'Port',
      resourceType: 'ResourceType',
      serviceRegionId: 'ServiceRegionId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      autoScan: 'number',
      engineType: 'string',
      id: 'number',
      lang: 'string',
      logStoreDay: 'number',
      modifyPassword: 'boolean',
      password: 'string',
      port: 'number',
      resourceType: 'number',
      serviceRegionId: 'string',
      userName: 'string',
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
  defaultId?: number;
  lang?: string;
  sensitiveIds?: string;
  static names(): { [key: string]: string } {
    return {
      defaultId: 'DefaultId',
      lang: 'Lang',
      sensitiveIds: 'SensitiveIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultId: 'number',
      lang: 'string',
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
  backed?: boolean;
  dealReason?: string;
  id?: number;
  lang?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      backed: 'Backed',
      dealReason: 'DealReason',
      id: 'Id',
      lang: 'Lang',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backed: 'boolean',
      dealReason: 'string',
      id: 'number',
      lang: 'string',
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
  category?: number;
  content?: string;
  customType?: number;
  id?: number;
  lang?: string;
  name?: string;
  productCode?: string;
  productId?: number;
  riskLevelId?: number;
  ruleType?: number;
  statExpress?: string;
  warnLevel?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      customType: 'CustomType',
      id: 'Id',
      lang: 'Lang',
      name: 'Name',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleType: 'RuleType',
      statExpress: 'StatExpress',
      warnLevel: 'WarnLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      content: 'string',
      customType: 'number',
      id: 'number',
      lang: 'string',
      name: 'string',
      productCode: 'string',
      productId: 'number',
      riskLevelId: 'number',
      ruleType: 'number',
      statExpress: 'string',
      warnLevel: 'number',
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
  id?: number;
  ids?: string;
  lang?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ids: 'Ids',
      lang: 'Lang',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ids: 'string',
      lang: 'string',
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
  id?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
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
  code?: string;
  value?: string;
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
      code: 'string',
      value: 'string',
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
  checkStatus?: number;
  checkStatusName?: string;
  gmtCreate?: number;
  id?: number;
  localName?: string;
  parentId?: string;
  port?: number;
  regionId?: string;
  resourceType?: number;
  resourceTypeCode?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkStatusName: 'CheckStatusName',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      localName: 'LocalName',
      parentId: 'ParentId',
      port: 'Port',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceTypeCode: 'ResourceTypeCode',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'number',
      checkStatusName: 'string',
      gmtCreate: 'number',
      id: 'number',
      localName: 'string',
      parentId: 'string',
      port: 'number',
      regionId: 'string',
      resourceType: 'number',
      resourceTypeCode: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitSetResponseBodyDataLimitSetDataLimitList extends $tea.Model {
  localName?: string;
  checkStatus?: number;
  connector?: string;
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
      connector: 'Connector',
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
      connector: 'string',
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
  dataLimitList?: DescribeDataLimitSetResponseBodyDataLimitSetDataLimitList[];
  ossBucketList?: DescribeDataLimitSetResponseBodyDataLimitSetOssBucketList[];
  regionList?: DescribeDataLimitSetResponseBodyDataLimitSetRegionList[];
  resourceType?: number;
  resourceTypeCode?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataLimitList: 'DataLimitList',
      ossBucketList: 'OssBucketList',
      regionList: 'RegionList',
      resourceType: 'ResourceType',
      resourceTypeCode: 'ResourceTypeCode',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLimitList: { 'type': 'array', 'itemType': DescribeDataLimitSetResponseBodyDataLimitSetDataLimitList },
      ossBucketList: { 'type': 'array', 'itemType': DescribeDataLimitSetResponseBodyDataLimitSetOssBucketList },
      regionList: { 'type': 'array', 'itemType': DescribeDataLimitSetResponseBodyDataLimitSetRegionList },
      resourceType: 'number',
      resourceTypeCode: 'string',
      totalCount: 'number',
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
  chart?: DescribeEventDetailResponseBodyEventDetailChart[];
  content?: DescribeEventDetailResponseBodyEventDetailContent[];
  resourceInfo?: DescribeEventDetailResponseBodyEventDetailResourceInfo[];
  static names(): { [key: string]: string } {
    return {
      chart: 'Chart',
      content: 'Content',
      resourceInfo: 'ResourceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chart: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventDetailChart },
      content: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventDetailContent },
      resourceInfo: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventDetailResourceInfo },
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

export class DescribeEventDetailResponseBodyEvent extends $tea.Model {
  alertTime?: number;
  backed?: boolean;
  dataInstance?: string;
  dealDisplayName?: string;
  dealLoginName?: string;
  dealReason?: string;
  dealTime?: number;
  dealUserId?: number;
  detail?: DescribeEventDetailResponseBodyEventDetail;
  displayName?: string;
  eventTime?: number;
  handleInfoList?: DescribeEventDetailResponseBodyEventHandleInfoList[];
  id?: number;
  logDetail?: string;
  loginName?: string;
  productCode?: string;
  status?: number;
  statusName?: string;
  subTypeCode?: string;
  subTypeName?: string;
  typeCode?: string;
  typeName?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      alertTime: 'AlertTime',
      backed: 'Backed',
      dataInstance: 'DataInstance',
      dealDisplayName: 'DealDisplayName',
      dealLoginName: 'DealLoginName',
      dealReason: 'DealReason',
      dealTime: 'DealTime',
      dealUserId: 'DealUserId',
      detail: 'Detail',
      displayName: 'DisplayName',
      eventTime: 'EventTime',
      handleInfoList: 'HandleInfoList',
      id: 'Id',
      logDetail: 'LogDetail',
      loginName: 'LoginName',
      productCode: 'ProductCode',
      status: 'Status',
      statusName: 'StatusName',
      subTypeCode: 'SubTypeCode',
      subTypeName: 'SubTypeName',
      typeCode: 'TypeCode',
      typeName: 'TypeName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTime: 'number',
      backed: 'boolean',
      dataInstance: 'string',
      dealDisplayName: 'string',
      dealLoginName: 'string',
      dealReason: 'string',
      dealTime: 'number',
      dealUserId: 'number',
      detail: DescribeEventDetailResponseBodyEventDetail,
      displayName: 'string',
      eventTime: 'number',
      handleInfoList: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventHandleInfoList },
      id: 'number',
      logDetail: 'string',
      loginName: 'string',
      productCode: 'string',
      status: 'number',
      statusName: 'string',
      subTypeCode: 'string',
      subTypeName: 'string',
      typeCode: 'string',
      typeName: 'string',
      userId: 'number',
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

export class DescribeInstanceSourcesResponseBodyItems extends $tea.Model {
  lastModifyUserId?: string;
  passwordStatus?: number;
  engineType?: string;
  tenantName?: string;
  instanceId?: string;
  instanceDescription?: string;
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
  bucketName?: string;
  categoryName?: string;
  name?: string;
  regionId?: string;
  riskLevelName?: string;
  ruleList?: DescribeOssObjectDetailResponseBodyOssObjectDetailRuleList[];
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      categoryName: 'CategoryName',
      name: 'Name',
      regionId: 'RegionId',
      riskLevelName: 'RiskLevelName',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      categoryName: 'string',
      name: 'string',
      regionId: 'string',
      riskLevelName: 'string',
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
  id?: number;
  referenceNum?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      description: 'Description',
      id: 'Id',
      referenceNum: 'ReferenceNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      description: 'string',
      id: 'number',
      referenceNum: 'number',
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

export class DescribeUserStatusResponseBodyUserStatus extends $tea.Model {
  accessKeyId?: string;
  authed?: boolean;
  buyed?: boolean;
  chargeType?: string;
  dataMaskColumns?: number;
  dataMaskTasks?: number;
  datamaskColumns?: number;
  divulgeCount?: number;
  dlpTotalCount?: number;
  incSensitiveObjects?: number;
  instanceId?: string;
  instanceNum?: number;
  instanceStatus?: number;
  labStatus?: number;
  ossBucketSet?: boolean;
  ossSize?: number;
  remainDays?: number;
  sensitiveObject?: number;
  sensitiveTable?: number;
  sensitiveTables?: number;
  totalDataMaskColumns?: number;
  trail?: boolean;
  useInstanceNum?: number;
  useOssSize?: number;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      authed: 'Authed',
      buyed: 'Buyed',
      chargeType: 'ChargeType',
      dataMaskColumns: 'DataMaskColumns',
      dataMaskTasks: 'DataMaskTasks',
      datamaskColumns: 'DatamaskColumns',
      divulgeCount: 'DivulgeCount',
      dlpTotalCount: 'DlpTotalCount',
      incSensitiveObjects: 'IncSensitiveObjects',
      instanceId: 'InstanceId',
      instanceNum: 'InstanceNum',
      instanceStatus: 'InstanceStatus',
      labStatus: 'LabStatus',
      ossBucketSet: 'OssBucketSet',
      ossSize: 'OssSize',
      remainDays: 'RemainDays',
      sensitiveObject: 'SensitiveObject',
      sensitiveTable: 'SensitiveTable',
      sensitiveTables: 'SensitiveTables',
      totalDataMaskColumns: 'TotalDataMaskColumns',
      trail: 'Trail',
      useInstanceNum: 'UseInstanceNum',
      useOssSize: 'UseOssSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      authed: 'boolean',
      buyed: 'boolean',
      chargeType: 'string',
      dataMaskColumns: 'number',
      dataMaskTasks: 'number',
      datamaskColumns: 'number',
      divulgeCount: 'number',
      dlpTotalCount: 'number',
      incSensitiveObjects: 'number',
      instanceId: 'string',
      instanceNum: 'number',
      instanceStatus: 'number',
      labStatus: 'number',
      ossBucketSet: 'boolean',
      ossSize: 'number',
      remainDays: 'number',
      sensitiveObject: 'number',
      sensitiveTable: 'number',
      sensitiveTables: 'number',
      totalDataMaskColumns: 'number',
      trail: 'boolean',
      useInstanceNum: 'number',
      useOssSize: 'number',
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

  async createConfigWithOptions(request: CreateConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateConfigResponse> {
    Util.validateModel(request);
    let query = { };
    query["Code"] = request.code;
    query["Description"] = request.description;
    query["Lang"] = request.lang;
    query["Value"] = request.value;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateConfig",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateConfigResponse>(await this.callApi(params, req, runtime), new CreateConfigResponse({}));
  }

  async createConfig(request: CreateConfigRequest): Promise<CreateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConfigWithOptions(request, runtime);
  }

  async createDataLimitWithOptions(request: CreateDataLimitRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataLimitResponse> {
    Util.validateModel(request);
    let query = { };
    query["AuditStatus"] = request.auditStatus;
    query["AutoScan"] = request.autoScan;
    query["EngineType"] = request.engineType;
    query["EventStatus"] = request.eventStatus;
    query["Lang"] = request.lang;
    query["LogStoreDay"] = request.logStoreDay;
    query["OcrStatus"] = request.ocrStatus;
    query["ParentId"] = request.parentId;
    query["Password"] = request.password;
    query["Port"] = request.port;
    query["ResourceType"] = request.resourceType;
    query["ServiceRegionId"] = request.serviceRegionId;
    query["UserName"] = request.userName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataLimit",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDataLimitResponse>(await this.callApi(params, req, runtime), new CreateDataLimitResponse({}));
  }

  async createDataLimit(request: CreateDataLimitRequest): Promise<CreateDataLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataLimitWithOptions(request, runtime);
  }

  async createRuleWithOptions(request: CreateRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    Util.validateModel(request);
    let query = { };
    query["Category"] = request.category;
    query["Content"] = request.content;
    query["ContentCategory"] = request.contentCategory;
    query["Description"] = request.description;
    query["Lang"] = request.lang;
    query["Name"] = request.name;
    query["ProductCode"] = request.productCode;
    query["ProductId"] = request.productId;
    query["RiskLevelId"] = request.riskLevelId;
    query["RuleType"] = request.ruleType;
    query["StatExpress"] = request.statExpress;
    query["Status"] = request.status;
    query["Target"] = request.target;
    query["WarnLevel"] = request.warnLevel;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateRule",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRuleResponse>(await this.callApi(params, req, runtime), new CreateRuleResponse({}));
  }

  async createRule(request: CreateRuleRequest): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  async createScanTaskWithOptions(request: CreateScanTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateScanTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["DataLimitId"] = request.dataLimitId;
    query["IntervalDay"] = request.intervalDay;
    query["OssScanPath"] = request.ossScanPath;
    query["ResourceType"] = request.resourceType;
    query["RunHour"] = request.runHour;
    query["RunMinute"] = request.runMinute;
    query["ScanRange"] = request.scanRange;
    query["ScanRangeContent"] = request.scanRangeContent;
    query["TaskName"] = request.taskName;
    query["TaskUserName"] = request.taskUserName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateScanTask",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateScanTaskResponse>(await this.callApi(params, req, runtime), new CreateScanTaskResponse({}));
  }

  async createScanTask(request: CreateScanTaskRequest): Promise<CreateScanTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScanTaskWithOptions(request, runtime);
  }

  async deleteDataLimitWithOptions(request: DeleteDataLimitRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataLimitResponse> {
    Util.validateModel(request);
    let query = { };
    query["Id"] = request.id;
    query["Lang"] = request.lang;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataLimit",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataLimitResponse>(await this.callApi(params, req, runtime), new DeleteDataLimitResponse({}));
  }

  async deleteDataLimit(request: DeleteDataLimitRequest): Promise<DeleteDataLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataLimitWithOptions(request, runtime);
  }

  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleResponse> {
    Util.validateModel(request);
    let query = { };
    query["Id"] = request.id;
    query["Lang"] = request.lang;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRule",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRuleResponse>(await this.callApi(params, req, runtime), new DeleteRuleResponse({}));
  }

  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  async describeColumnsWithOptions(request: DescribeColumnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeColumnsResponse> {
    Util.validateModel(request);
    let query = { };
    query["CurrentPage"] = request.currentPage;
    query["InstanceId"] = request.instanceId;
    query["InstanceName"] = request.instanceName;
    query["Lang"] = request.lang;
    query["Name"] = request.name;
    query["PageSize"] = request.pageSize;
    query["ProductCode"] = request.productCode;
    query["RiskLevelId"] = request.riskLevelId;
    query["RuleId"] = request.ruleId;
    query["RuleName"] = request.ruleName;
    query["SensLevelName"] = request.sensLevelName;
    query["TableId"] = request.tableId;
    query["TableName"] = request.tableName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeColumns",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeColumnsResponse>(await this.callApi(params, req, runtime), new DescribeColumnsResponse({}));
  }

  async describeColumns(request: DescribeColumnsRequest): Promise<DescribeColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeColumnsWithOptions(request, runtime);
  }

  async describeConfigsWithOptions(request: DescribeConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    query["Lang"] = request.lang;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConfigs",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeConfigsResponse>(await this.callApi(params, req, runtime), new DescribeConfigsResponse({}));
  }

  async describeConfigs(request: DescribeConfigsRequest): Promise<DescribeConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConfigsWithOptions(request, runtime);
  }

  async describeDataAssetsWithOptions(request: DescribeDataAssetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataAssetsResponse> {
    Util.validateModel(request);
    let query = { };
    query["CurrentPage"] = request.currentPage;
    query["Lang"] = request.lang;
    query["Name"] = request.name;
    query["PageSize"] = request.pageSize;
    query["RangeId"] = request.rangeId;
    query["RiskLevels"] = request.riskLevels;
    query["RuleId"] = request.ruleId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataAssets",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataAssetsResponse>(await this.callApi(params, req, runtime), new DescribeDataAssetsResponse({}));
  }

  async describeDataAssets(request: DescribeDataAssetsRequest): Promise<DescribeDataAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataAssetsWithOptions(request, runtime);
  }

  async describeDataLimitDetailWithOptions(request: DescribeDataLimitDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataLimitDetailResponse> {
    Util.validateModel(request);
    let query = { };
    query["Id"] = request.id;
    query["Lang"] = request.lang;
    query["NetworkType"] = request.networkType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataLimitDetail",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataLimitDetailResponse>(await this.callApi(params, req, runtime), new DescribeDataLimitDetailResponse({}));
  }

  async describeDataLimitDetail(request: DescribeDataLimitDetailRequest): Promise<DescribeDataLimitDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataLimitDetailWithOptions(request, runtime);
  }

  async describeDataLimitSetWithOptions(request: DescribeDataLimitSetRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataLimitSetResponse> {
    Util.validateModel(request);
    let query = { };
    query["Lang"] = request.lang;
    query["ParentId"] = request.parentId;
    query["ResourceType"] = request.resourceType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataLimitSet",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataLimitSetResponse>(await this.callApi(params, req, runtime), new DescribeDataLimitSetResponse({}));
  }

  async describeDataLimitSet(request: DescribeDataLimitSetRequest): Promise<DescribeDataLimitSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataLimitSetWithOptions(request, runtime);
  }

  async describeDataLimitsWithOptions(request: DescribeDataLimitsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataLimitsResponse> {
    Util.validateModel(request);
    let query = { };
    query["AuditStatus"] = request.auditStatus;
    query["CheckStatus"] = request.checkStatus;
    query["CurrentPage"] = request.currentPage;
    query["DatamaskStatus"] = request.datamaskStatus;
    query["Enable"] = request.enable;
    query["EndTime"] = request.endTime;
    query["EngineType"] = request.engineType;
    query["Lang"] = request.lang;
    query["PageSize"] = request.pageSize;
    query["ParentId"] = request.parentId;
    query["ResourceType"] = request.resourceType;
    query["ServiceRegionId"] = request.serviceRegionId;
    query["StartTime"] = request.startTime;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataLimits",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataLimitsResponse>(await this.callApi(params, req, runtime), new DescribeDataLimitsResponse({}));
  }

  async describeDataLimits(request: DescribeDataLimitsRequest): Promise<DescribeDataLimitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataLimitsWithOptions(request, runtime);
  }

  async describeDataMaskingRunHistoryWithOptions(request: DescribeDataMaskingRunHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataMaskingRunHistoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["CurrentPage"] = request.currentPage;
    query["DstType"] = request.dstType;
    query["EndTime"] = request.endTime;
    query["Lang"] = request.lang;
    query["MainProcessId"] = request.mainProcessId;
    query["PageSize"] = request.pageSize;
    query["SrcTableName"] = request.srcTableName;
    query["SrcType"] = request.srcType;
    query["StartTime"] = request.startTime;
    query["Status"] = request.status;
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataMaskingRunHistory",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataMaskingRunHistoryResponse>(await this.callApi(params, req, runtime), new DescribeDataMaskingRunHistoryResponse({}));
  }

  async describeDataMaskingRunHistory(request: DescribeDataMaskingRunHistoryRequest): Promise<DescribeDataMaskingRunHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataMaskingRunHistoryWithOptions(request, runtime);
  }

  async describeDataMaskingTasksWithOptions(request: DescribeDataMaskingTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataMaskingTasksResponse> {
    Util.validateModel(request);
    let query = { };
    query["CurrentPage"] = request.currentPage;
    query["DstType"] = request.dstType;
    query["EndTime"] = request.endTime;
    query["Lang"] = request.lang;
    query["PageSize"] = request.pageSize;
    query["SearchKey"] = request.searchKey;
    query["StartTime"] = request.startTime;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataMaskingTasks",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataMaskingTasksResponse>(await this.callApi(params, req, runtime), new DescribeDataMaskingTasksResponse({}));
  }

  async describeDataMaskingTasks(request: DescribeDataMaskingTasksRequest): Promise<DescribeDataMaskingTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataMaskingTasksWithOptions(request, runtime);
  }

  async describeEventDetailWithOptions(request: DescribeEventDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventDetailResponse> {
    Util.validateModel(request);
    let query = { };
    query["Id"] = request.id;
    query["Lang"] = request.lang;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventDetail",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventDetailResponse>(await this.callApi(params, req, runtime), new DescribeEventDetailResponse({}));
  }

  async describeEventDetail(request: DescribeEventDetailRequest): Promise<DescribeEventDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventDetailWithOptions(request, runtime);
  }

  async describeEventTypesWithOptions(request: DescribeEventTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventTypesResponse> {
    Util.validateModel(request);
    let query = { };
    query["Lang"] = request.lang;
    query["ParentTypeId"] = request.parentTypeId;
    query["ResourceId"] = request.resourceId;
    query["Status"] = request.status;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventTypes",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventTypesResponse>(await this.callApi(params, req, runtime), new DescribeEventTypesResponse({}));
  }

  async describeEventTypes(request: DescribeEventTypesRequest): Promise<DescribeEventTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventTypesWithOptions(request, runtime);
  }

  async describeEventsWithOptions(request: DescribeEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventsResponse> {
    Util.validateModel(request);
    let query = { };
    query["CurrentPage"] = request.currentPage;
    query["DealUserId"] = request.dealUserId;
    query["EndTime"] = request.endTime;
    query["Id"] = request.id;
    query["InstanceName"] = request.instanceName;
    query["Lang"] = request.lang;
    query["PageSize"] = request.pageSize;
    query["ProductCode"] = request.productCode;
    query["StartTime"] = request.startTime;
    query["Status"] = request.status;
    query["SubTypeCode"] = request.subTypeCode;
    query["TargetProductCode"] = request.targetProductCode;
    query["TypeCode"] = request.typeCode;
    query["UserId"] = request.userId;
    query["UserName"] = request.userName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEvents",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventsResponse>(await this.callApi(params, req, runtime), new DescribeEventsResponse({}));
  }

  async describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventsWithOptions(request, runtime);
  }

  async describeInstanceSourcesWithOptions(request: DescribeInstanceSourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSourcesResponse> {
    Util.validateModel(request);
    let query = { };
    query["CurrentPage"] = request.currentPage;
    query["EngineType"] = request.engineType;
    query["InstanceId"] = request.instanceId;
    query["Lang"] = request.lang;
    query["PageSize"] = request.pageSize;
    query["ProductId"] = request.productId;
    query["ServiceRegionId"] = request.serviceRegionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceSources",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceSourcesResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSourcesResponse({}));
  }

  async describeInstanceSources(request: DescribeInstanceSourcesRequest): Promise<DescribeInstanceSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSourcesWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    query["CurrentPage"] = request.currentPage;
    query["FeatureType"] = request.featureType;
    query["Lang"] = request.lang;
    query["Name"] = request.name;
    query["PageSize"] = request.pageSize;
    query["ProductCode"] = request.productCode;
    query["ProductId"] = request.productId;
    query["RiskLevelId"] = request.riskLevelId;
    query["RuleId"] = request.ruleId;
    query["ServiceRegionId"] = request.serviceRegionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstances",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstancesResponse>(await this.callApi(params, req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeOssObjectDetailWithOptions(request: DescribeOssObjectDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssObjectDetailResponse> {
    Util.validateModel(request);
    let query = { };
    query["Id"] = request.id;
    query["Lang"] = request.lang;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOssObjectDetail",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeOssObjectDetailResponse>(await this.callApi(params, req, runtime), new DescribeOssObjectDetailResponse({}));
  }

  async describeOssObjectDetail(request: DescribeOssObjectDetailRequest): Promise<DescribeOssObjectDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssObjectDetailWithOptions(request, runtime);
  }

  async describeOssObjectsWithOptions(request: DescribeOssObjectsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssObjectsResponse> {
    Util.validateModel(request);
    let query = { };
    query["CurrentPage"] = request.currentPage;
    query["InstanceId"] = request.instanceId;
    query["Lang"] = request.lang;
    query["LastScanTimeEnd"] = request.lastScanTimeEnd;
    query["LastScanTimeStart"] = request.lastScanTimeStart;
    query["Name"] = request.name;
    query["PageSize"] = request.pageSize;
    query["RiskLevelId"] = request.riskLevelId;
    query["RuleId"] = request.ruleId;
    query["ServiceRegionId"] = request.serviceRegionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOssObjects",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeOssObjectsResponse>(await this.callApi(params, req, runtime), new DescribeOssObjectsResponse({}));
  }

  async describeOssObjects(request: DescribeOssObjectsRequest): Promise<DescribeOssObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssObjectsWithOptions(request, runtime);
  }

  async describePackagesWithOptions(request: DescribePackagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePackagesResponse> {
    Util.validateModel(request);
    let query = { };
    query["CurrentPage"] = request.currentPage;
    query["InstanceId"] = request.instanceId;
    query["Lang"] = request.lang;
    query["Name"] = request.name;
    query["PageSize"] = request.pageSize;
    query["ProductId"] = request.productId;
    query["RiskLevelId"] = request.riskLevelId;
    query["RuleId"] = request.ruleId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribePackages",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribePackagesResponse>(await this.callApi(params, req, runtime), new DescribePackagesResponse({}));
  }

  async describePackages(request: DescribePackagesRequest): Promise<DescribePackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackagesWithOptions(request, runtime);
  }

  async describeRiskLevelsWithOptions(request: DescribeRiskLevelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskLevelsResponse> {
    Util.validateModel(request);
    let query = { };
    query["Lang"] = request.lang;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskLevels",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskLevelsResponse>(await this.callApi(params, req, runtime), new DescribeRiskLevelsResponse({}));
  }

  async describeRiskLevels(request: DescribeRiskLevelsRequest): Promise<DescribeRiskLevelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskLevelsWithOptions(request, runtime);
  }

  async describeRulesWithOptions(request: DescribeRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRulesResponse> {
    Util.validateModel(request);
    let query = { };
    query["Category"] = request.category;
    query["ContentCategory"] = request.contentCategory;
    query["CurrentPage"] = request.currentPage;
    query["CustomType"] = request.customType;
    query["GroupId"] = request.groupId;
    query["KeywordCompatible"] = request.keywordCompatible;
    query["Lang"] = request.lang;
    query["Name"] = request.name;
    query["PageSize"] = request.pageSize;
    query["ProductCode"] = request.productCode;
    query["ProductId"] = request.productId;
    query["RiskLevelId"] = request.riskLevelId;
    query["RuleType"] = request.ruleType;
    query["Status"] = request.status;
    query["WarnLevel"] = request.warnLevel;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRules",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRulesResponse>(await this.callApi(params, req, runtime), new DescribeRulesResponse({}));
  }

  async describeRules(request: DescribeRulesRequest): Promise<DescribeRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRulesWithOptions(request, runtime);
  }

  async describeTablesWithOptions(request: DescribeTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTablesResponse> {
    Util.validateModel(request);
    let query = { };
    query["CurrentPage"] = request.currentPage;
    query["InstanceId"] = request.instanceId;
    query["Lang"] = request.lang;
    query["Name"] = request.name;
    query["PackageId"] = request.packageId;
    query["PageSize"] = request.pageSize;
    query["ProductCode"] = request.productCode;
    query["ProductId"] = request.productId;
    query["RiskLevelId"] = request.riskLevelId;
    query["RuleId"] = request.ruleId;
    query["ServiceRegionId"] = request.serviceRegionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTables",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeTablesResponse>(await this.callApi(params, req, runtime), new DescribeTablesResponse({}));
  }

  async describeTables(request: DescribeTablesRequest): Promise<DescribeTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  async describeUserStatusWithOptions(request: DescribeUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["Lang"] = request.lang;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserStatus",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserStatusResponse>(await this.callApi(params, req, runtime), new DescribeUserStatusResponse({}));
  }

  async describeUserStatus(request: DescribeUserStatusRequest): Promise<DescribeUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserStatusWithOptions(request, runtime);
  }

  async disableUserConfigWithOptions(request: DisableUserConfigRequest, runtime: $Util.RuntimeOptions): Promise<DisableUserConfigResponse> {
    Util.validateModel(request);
    let query = { };
    query["Code"] = request.code;
    query["Lang"] = request.lang;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DisableUserConfig",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DisableUserConfigResponse>(await this.callApi(params, req, runtime), new DisableUserConfigResponse({}));
  }

  async disableUserConfig(request: DisableUserConfigRequest): Promise<DisableUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableUserConfigWithOptions(request, runtime);
  }

  async execDatamaskWithOptions(request: ExecDatamaskRequest, runtime: $Util.RuntimeOptions): Promise<ExecDatamaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["Data"] = request.data;
    query["TemplateId"] = request.templateId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ExecDatamask",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecDatamaskResponse>(await this.callApi(params, req, runtime), new ExecDatamaskResponse({}));
  }

  async execDatamask(request: ExecDatamaskRequest): Promise<ExecDatamaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.execDatamaskWithOptions(request, runtime);
  }

  async manualTriggerMaskingProcessWithOptions(request: ManualTriggerMaskingProcessRequest, runtime: $Util.RuntimeOptions): Promise<ManualTriggerMaskingProcessResponse> {
    Util.validateModel(request);
    let query = { };
    query["Id"] = request.id;
    query["Lang"] = request.lang;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ManualTriggerMaskingProcess",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ManualTriggerMaskingProcessResponse>(await this.callApi(params, req, runtime), new ManualTriggerMaskingProcessResponse({}));
  }

  async manualTriggerMaskingProcess(request: ManualTriggerMaskingProcessRequest): Promise<ManualTriggerMaskingProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.manualTriggerMaskingProcessWithOptions(request, runtime);
  }

  async modifyDataLimitWithOptions(request: ModifyDataLimitRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDataLimitResponse> {
    Util.validateModel(request);
    let query = { };
    query["AuditStatus"] = request.auditStatus;
    query["AutoScan"] = request.autoScan;
    query["EngineType"] = request.engineType;
    query["Id"] = request.id;
    query["Lang"] = request.lang;
    query["LogStoreDay"] = request.logStoreDay;
    query["ModifyPassword"] = request.modifyPassword;
    query["Password"] = request.password;
    query["Port"] = request.port;
    query["ResourceType"] = request.resourceType;
    query["ServiceRegionId"] = request.serviceRegionId;
    query["UserName"] = request.userName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDataLimit",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyDataLimitResponse>(await this.callApi(params, req, runtime), new ModifyDataLimitResponse({}));
  }

  async modifyDataLimit(request: ModifyDataLimitRequest): Promise<ModifyDataLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDataLimitWithOptions(request, runtime);
  }

  async modifyDefaultLevelWithOptions(request: ModifyDefaultLevelRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefaultLevelResponse> {
    Util.validateModel(request);
    let query = { };
    query["DefaultId"] = request.defaultId;
    query["Lang"] = request.lang;
    query["SensitiveIds"] = request.sensitiveIds;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefaultLevel",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefaultLevelResponse>(await this.callApi(params, req, runtime), new ModifyDefaultLevelResponse({}));
  }

  async modifyDefaultLevel(request: ModifyDefaultLevelRequest): Promise<ModifyDefaultLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefaultLevelWithOptions(request, runtime);
  }

  async modifyEventStatusWithOptions(request: ModifyEventStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEventStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["Backed"] = request.backed;
    query["DealReason"] = request.dealReason;
    query["Id"] = request.id;
    query["Lang"] = request.lang;
    query["Status"] = request.status;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifyEventStatus",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyEventStatusResponse>(await this.callApi(params, req, runtime), new ModifyEventStatusResponse({}));
  }

  async modifyEventStatus(request: ModifyEventStatusRequest): Promise<ModifyEventStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEventStatusWithOptions(request, runtime);
  }

  async modifyEventTypeStatusWithOptions(request: ModifyEventTypeStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEventTypeStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["Lang"] = request.lang;
    query["SubTypeIds"] = request.subTypeIds;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifyEventTypeStatus",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyEventTypeStatusResponse>(await this.callApi(params, req, runtime), new ModifyEventTypeStatusResponse({}));
  }

  async modifyEventTypeStatus(request: ModifyEventTypeStatusRequest): Promise<ModifyEventTypeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEventTypeStatusWithOptions(request, runtime);
  }

  async modifyRuleWithOptions(request: ModifyRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRuleResponse> {
    Util.validateModel(request);
    let query = { };
    query["Category"] = request.category;
    query["Content"] = request.content;
    query["CustomType"] = request.customType;
    query["Id"] = request.id;
    query["Lang"] = request.lang;
    query["Name"] = request.name;
    query["ProductCode"] = request.productCode;
    query["ProductId"] = request.productId;
    query["RiskLevelId"] = request.riskLevelId;
    query["RuleType"] = request.ruleType;
    query["StatExpress"] = request.statExpress;
    query["WarnLevel"] = request.warnLevel;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRule",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyRuleResponse>(await this.callApi(params, req, runtime), new ModifyRuleResponse({}));
  }

  async modifyRule(request: ModifyRuleRequest): Promise<ModifyRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRuleWithOptions(request, runtime);
  }

  async modifyRuleStatusWithOptions(request: ModifyRuleStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRuleStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["Id"] = request.id;
    query["Ids"] = request.ids;
    query["Lang"] = request.lang;
    query["Status"] = request.status;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRuleStatus",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyRuleStatusResponse>(await this.callApi(params, req, runtime), new ModifyRuleStatusResponse({}));
  }

  async modifyRuleStatus(request: ModifyRuleStatusRequest): Promise<ModifyRuleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRuleStatusWithOptions(request, runtime);
  }

  async stopMaskingProcessWithOptions(request: StopMaskingProcessRequest, runtime: $Util.RuntimeOptions): Promise<StopMaskingProcessResponse> {
    Util.validateModel(request);
    let query = { };
    query["Id"] = request.id;
    query["Lang"] = request.lang;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "StopMaskingProcess",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopMaskingProcessResponse>(await this.callApi(params, req, runtime), new StopMaskingProcessResponse({}));
  }

  async stopMaskingProcess(request: StopMaskingProcessRequest): Promise<StopMaskingProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMaskingProcessWithOptions(request, runtime);
  }

}
