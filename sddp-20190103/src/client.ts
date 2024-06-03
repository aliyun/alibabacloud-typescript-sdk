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
  featureType?: number;
  lang?: string;
  sourceIp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      featureType: 'FeatureType',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      featureType: 'number',
      lang: 'string',
      sourceIp: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  certificatePermission?: string;
  enable?: number;
  engineType?: string;
  eventStatus?: number;
  featureType?: number;
  lang?: string;
  logStoreDay?: number;
  ocrStatus?: number;
  parentId?: string;
  password?: string;
  port?: number;
  resourceType?: number;
  samplingSize?: number;
  serviceRegionId?: string;
  sourceIp?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoScan: 'AutoScan',
      certificatePermission: 'CertificatePermission',
      enable: 'Enable',
      engineType: 'EngineType',
      eventStatus: 'EventStatus',
      featureType: 'FeatureType',
      lang: 'Lang',
      logStoreDay: 'LogStoreDay',
      ocrStatus: 'OcrStatus',
      parentId: 'ParentId',
      password: 'Password',
      port: 'Port',
      resourceType: 'ResourceType',
      samplingSize: 'SamplingSize',
      serviceRegionId: 'ServiceRegionId',
      sourceIp: 'SourceIp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      autoScan: 'number',
      certificatePermission: 'string',
      enable: 'number',
      engineType: 'string',
      eventStatus: 'number',
      featureType: 'number',
      lang: 'string',
      logStoreDay: 'number',
      ocrStatus: 'number',
      parentId: 'string',
      password: 'string',
      port: 'number',
      resourceType: 'number',
      samplingSize: 'number',
      serviceRegionId: 'string',
      sourceIp: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDataLimitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  matchType?: number;
  name?: string;
  productCode?: string;
  productId?: number;
  riskLevelId?: number;
  ruleType?: number;
  sourceIp?: string;
  statExpress?: string;
  status?: number;
  supportForm?: number;
  target?: string;
  warnLevel?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      contentCategory: 'ContentCategory',
      description: 'Description',
      lang: 'Lang',
      matchType: 'MatchType',
      name: 'Name',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleType: 'RuleType',
      sourceIp: 'SourceIp',
      statExpress: 'StatExpress',
      status: 'Status',
      supportForm: 'SupportForm',
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
      matchType: 'number',
      name: 'string',
      productCode: 'string',
      productId: 'number',
      riskLevelId: 'number',
      ruleType: 'number',
      sourceIp: 'string',
      statExpress: 'string',
      status: 'number',
      supportForm: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScanTaskRequest extends $tea.Model {
  dataLimitId?: number;
  featureType?: number;
  intervalDay?: number;
  lang?: string;
  ossScanPath?: string;
  resourceType?: number;
  runHour?: number;
  runMinute?: number;
  scanRange?: number;
  scanRangeContent?: string;
  sourceIp?: string;
  taskName?: string;
  taskUserName?: string;
  static names(): { [key: string]: string } {
    return {
      dataLimitId: 'DataLimitId',
      featureType: 'FeatureType',
      intervalDay: 'IntervalDay',
      lang: 'Lang',
      ossScanPath: 'OssScanPath',
      resourceType: 'ResourceType',
      runHour: 'RunHour',
      runMinute: 'RunMinute',
      scanRange: 'ScanRange',
      scanRangeContent: 'ScanRangeContent',
      sourceIp: 'SourceIp',
      taskName: 'TaskName',
      taskUserName: 'TaskUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLimitId: 'number',
      featureType: 'number',
      intervalDay: 'number',
      lang: 'string',
      ossScanPath: 'string',
      resourceType: 'number',
      runHour: 'number',
      runMinute: 'number',
      scanRange: 'number',
      scanRangeContent: 'string',
      sourceIp: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateScanTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateScanTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlrRoleRequest extends $tea.Model {
  featureType?: number;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlrRoleResponseBody extends $tea.Model {
  hasPermission?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hasPermission: 'HasPermission',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPermission: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlrRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSlrRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSlrRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLimitRequest extends $tea.Model {
  featureType?: number;
  id?: number;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      id: 'Id',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
      id: 'number',
      lang: 'string',
      sourceIp: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataLimitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDataLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleRequest extends $tea.Model {
  featureType?: number;
  id?: number;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      id: 'Id',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
      id: 'number',
      lang: 'string',
      sourceIp: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryTemplateListRequest extends $tea.Model {
  currentPage?: number;
  featureType?: number;
  lang?: string;
  pageSize?: number;
  usageScenario?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      featureType: 'FeatureType',
      lang: 'Lang',
      pageSize: 'PageSize',
      usageScenario: 'UsageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      featureType: 'number',
      lang: 'string',
      pageSize: 'number',
      usageScenario: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryTemplateListResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeCategoryTemplateListResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': DescribeCategoryTemplateListResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryTemplateListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCategoryTemplateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCategoryTemplateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryTemplateRuleListRequest extends $tea.Model {
  currentPage?: number;
  featureType?: number;
  lang?: string;
  pageSize?: number;
  riskLevelId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      featureType: 'FeatureType',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskLevelId: 'RiskLevelId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      featureType: 'number',
      lang: 'string',
      pageSize: 'number',
      riskLevelId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryTemplateRuleListResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeCategoryTemplateRuleListResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': DescribeCategoryTemplateRuleListResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryTemplateRuleListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCategoryTemplateRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCategoryTemplateRuleListResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeColumnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeColumnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsV2Request extends $tea.Model {
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
  tableId?: string;
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
      tableId: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsV2ResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeColumnsV2ResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': DescribeColumnsV2ResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeColumnsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeColumnsV2ResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataAssetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDataAssetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitDetailRequest extends $tea.Model {
  featureType?: number;
  id?: number;
  lang?: string;
  networkType?: number;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      id: 'Id',
      lang: 'Lang',
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataLimitDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDataLimitDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitSetRequest extends $tea.Model {
  featureType?: number;
  lang?: string;
  parentId?: string;
  resourceType?: number;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
      parentId: 'ParentId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataLimitSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  featureType?: number;
  lang?: string;
  memberAccount?: number;
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
      featureType: 'FeatureType',
      lang: 'Lang',
      memberAccount: 'MemberAccount',
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
      featureType: 'number',
      lang: 'string',
      memberAccount: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataLimitsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataMaskingRunHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataMaskingTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDataMaskingTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectColumnDetailRequest extends $tea.Model {
  currentPage?: number;
  featureType?: number;
  id?: number;
  lang?: string;
  pageSize?: number;
  productId?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      featureType: 'FeatureType',
      id: 'Id',
      lang: 'Lang',
      pageSize: 'PageSize',
      productId: 'ProductId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      featureType: 'number',
      id: 'number',
      lang: 'string',
      pageSize: 'number',
      productId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectColumnDetailResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeDataObjectColumnDetailResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': DescribeDataObjectColumnDetailResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectColumnDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataObjectColumnDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDataObjectColumnDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectColumnDetailV2Request extends $tea.Model {
  currentPage?: number;
  featureType?: number;
  id?: string;
  lang?: string;
  pageSize?: number;
  productId?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      featureType: 'FeatureType',
      id: 'Id',
      lang: 'Lang',
      pageSize: 'PageSize',
      productId: 'ProductId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      featureType: 'number',
      id: 'string',
      lang: 'string',
      pageSize: 'number',
      productId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectColumnDetailV2ResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeDataObjectColumnDetailV2ResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': DescribeDataObjectColumnDetailV2ResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectColumnDetailV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataObjectColumnDetailV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDataObjectColumnDetailV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectsRequest extends $tea.Model {
  currentPage?: number;
  domainId?: number;
  featureType?: number;
  fileCategoryCode?: number;
  fileType?: number;
  instanceId?: string;
  lang?: string;
  memberAccount?: number;
  modelIds?: string;
  modelTagIds?: string;
  pageSize?: number;
  parentCategoryIds?: string;
  productIds?: string;
  queryName?: string;
  riskLevels?: string;
  serviceRegionId?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      domainId: 'DomainId',
      featureType: 'FeatureType',
      fileCategoryCode: 'FileCategoryCode',
      fileType: 'FileType',
      instanceId: 'InstanceId',
      lang: 'Lang',
      memberAccount: 'MemberAccount',
      modelIds: 'ModelIds',
      modelTagIds: 'ModelTagIds',
      pageSize: 'PageSize',
      parentCategoryIds: 'ParentCategoryIds',
      productIds: 'ProductIds',
      queryName: 'QueryName',
      riskLevels: 'RiskLevels',
      serviceRegionId: 'ServiceRegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      domainId: 'number',
      featureType: 'number',
      fileCategoryCode: 'number',
      fileType: 'number',
      instanceId: 'string',
      lang: 'string',
      memberAccount: 'number',
      modelIds: 'string',
      modelTagIds: 'string',
      pageSize: 'number',
      parentCategoryIds: 'string',
      productIds: 'string',
      queryName: 'string',
      riskLevels: 'string',
      serviceRegionId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectsResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeDataObjectsResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': DescribeDataObjectsResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDataObjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocTypesRequest extends $tea.Model {
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

export class DescribeDocTypesResponseBody extends $tea.Model {
  docTypeList?: DescribeDocTypesResponseBodyDocTypeList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      docTypeList: 'DocTypeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docTypeList: { 'type': 'array', 'itemType': DescribeDocTypesResponseBodyDocTypeList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocTypesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDocTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDocTypesResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEventDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEventDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTypesRequest extends $tea.Model {
  featureType?: number;
  lang?: string;
  parentTypeId?: number;
  resourceId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
      parentTypeId: 'ParentTypeId',
      resourceId: 'ResourceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEventTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  warnLevel?: number;
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
      warnLevel: 'WarnLevel',
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
      warnLevel: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSourcesRequest extends $tea.Model {
  auditStatus?: number;
  authStatus?: number;
  currentPage?: number;
  engineType?: string;
  featureType?: number;
  instanceId?: string;
  lang?: string;
  pageSize?: number;
  productCode?: string;
  productId?: number;
  searchKey?: string;
  searchType?: string;
  serviceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      authStatus: 'AuthStatus',
      currentPage: 'CurrentPage',
      engineType: 'EngineType',
      featureType: 'FeatureType',
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      searchKey: 'SearchKey',
      searchType: 'SearchType',
      serviceRegionId: 'ServiceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      authStatus: 'number',
      currentPage: 'number',
      engineType: 'string',
      featureType: 'number',
      instanceId: 'string',
      lang: 'string',
      pageSize: 'number',
      productCode: 'string',
      productId: 'number',
      searchKey: 'string',
      searchType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOssObjectDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOssObjectDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailV2Request extends $tea.Model {
  id?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailV2ResponseBody extends $tea.Model {
  ossObjectDetail?: DescribeOssObjectDetailV2ResponseBodyOssObjectDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ossObjectDetail: 'OssObjectDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossObjectDetail: DescribeOssObjectDetailV2ResponseBodyOssObjectDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOssObjectDetailV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOssObjectDetailV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectsRequest extends $tea.Model {
  currentPage?: number;
  fileCategoryCode?: number;
  instanceId?: string;
  lang?: string;
  lastScanTimeEnd?: number;
  lastScanTimeStart?: number;
  name?: string;
  pageSize?: number;
  riskLevelId?: number;
  ruleId?: number;
  serviceRegionId?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      fileCategoryCode: 'FileCategoryCode',
      instanceId: 'InstanceId',
      lang: 'Lang',
      lastScanTimeEnd: 'LastScanTimeEnd',
      lastScanTimeStart: 'LastScanTimeStart',
      name: 'Name',
      pageSize: 'PageSize',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      serviceRegionId: 'ServiceRegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      fileCategoryCode: 'number',
      instanceId: 'string',
      lang: 'string',
      lastScanTimeEnd: 'number',
      lastScanTimeStart: 'number',
      name: 'string',
      pageSize: 'number',
      riskLevelId: 'number',
      ruleId: 'number',
      serviceRegionId: 'string',
      templateId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOssObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentInstanceRequest extends $tea.Model {
  authStatus?: number;
  checkStatus?: number;
  clusterStatus?: string;
  currentPage?: number;
  dbName?: string;
  engineType?: string;
  instanceId?: string;
  lang?: string;
  memberAccount?: number;
  pageSize?: number;
  resourceType?: number;
  serviceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      authStatus: 'AuthStatus',
      checkStatus: 'CheckStatus',
      clusterStatus: 'ClusterStatus',
      currentPage: 'CurrentPage',
      dbName: 'DbName',
      engineType: 'EngineType',
      instanceId: 'InstanceId',
      lang: 'Lang',
      memberAccount: 'MemberAccount',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      serviceRegionId: 'ServiceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authStatus: 'number',
      checkStatus: 'number',
      clusterStatus: 'string',
      currentPage: 'number',
      dbName: 'string',
      engineType: 'string',
      instanceId: 'string',
      lang: 'string',
      memberAccount: 'number',
      pageSize: 'number',
      resourceType: 'number',
      serviceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentInstanceResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeParentInstanceResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': DescribeParentInstanceResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeParentInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeParentInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskLevelsRequest extends $tea.Model {
  featureType?: number;
  lang?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
      lang: 'string',
      templateId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRiskLevelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  featureType?: number;
  groupId?: string;
  keywordCompatible?: boolean;
  lang?: string;
  matchType?: number;
  name?: string;
  pageSize?: number;
  productCode?: number;
  productId?: number;
  riskLevelId?: number;
  ruleType?: number;
  status?: number;
  supportForm?: number;
  warnLevel?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      contentCategory: 'ContentCategory',
      currentPage: 'CurrentPage',
      customType: 'CustomType',
      featureType: 'FeatureType',
      groupId: 'GroupId',
      keywordCompatible: 'KeywordCompatible',
      lang: 'Lang',
      matchType: 'MatchType',
      name: 'Name',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleType: 'RuleType',
      status: 'Status',
      supportForm: 'SupportForm',
      warnLevel: 'WarnLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      contentCategory: 'number',
      currentPage: 'number',
      customType: 'number',
      featureType: 'number',
      groupId: 'string',
      keywordCompatible: 'boolean',
      lang: 'string',
      matchType: 'number',
      name: 'string',
      pageSize: 'number',
      productCode: 'number',
      productId: 'number',
      riskLevelId: 'number',
      ruleType: 'number',
      status: 'number',
      supportForm: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  templateId?: number;
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
      templateId: 'TemplateId',
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
      templateId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateAllRulesRequest extends $tea.Model {
  featureType?: number;
  lang?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
      lang: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateAllRulesResponseBody extends $tea.Model {
  requestId?: string;
  ruleList?: DescribeTemplateAllRulesResponseBodyRuleList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeTemplateAllRulesResponseBodyRuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateAllRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTemplateAllRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTemplateAllRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserStatusRequest extends $tea.Model {
  featureType?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableUserConfigRequest extends $tea.Model {
  code?: string;
  featureType?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      featureType: 'FeatureType',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      featureType: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableUserConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableUserConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecDatamaskRequest extends $tea.Model {
  data?: string;
  featureType?: number;
  lang?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      featureType: 'FeatureType',
      lang: 'Lang',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      featureType: 'number',
      lang: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecDatamaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ManualTriggerMaskingProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  featureType?: number;
  id?: number;
  lang?: string;
  logStoreDay?: number;
  modifyPassword?: boolean;
  password?: string;
  port?: number;
  resourceType?: number;
  samplingSize?: number;
  securityGroupIdList?: string[];
  serviceRegionId?: string;
  userName?: string;
  vSwitchIdList?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoScan: 'AutoScan',
      engineType: 'EngineType',
      featureType: 'FeatureType',
      id: 'Id',
      lang: 'Lang',
      logStoreDay: 'LogStoreDay',
      modifyPassword: 'ModifyPassword',
      password: 'Password',
      port: 'Port',
      resourceType: 'ResourceType',
      samplingSize: 'SamplingSize',
      securityGroupIdList: 'SecurityGroupIdList',
      serviceRegionId: 'ServiceRegionId',
      userName: 'UserName',
      vSwitchIdList: 'VSwitchIdList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      autoScan: 'number',
      engineType: 'string',
      featureType: 'number',
      id: 'number',
      lang: 'string',
      logStoreDay: 'number',
      modifyPassword: 'boolean',
      password: 'string',
      port: 'number',
      resourceType: 'number',
      samplingSize: 'number',
      securityGroupIdList: { 'type': 'array', 'itemType': 'string' },
      serviceRegionId: 'string',
      userName: 'string',
      vSwitchIdList: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDataLimitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefaultLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyEventStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyEventStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEventTypeStatusRequest extends $tea.Model {
  featureType?: number;
  lang?: string;
  subTypeIds?: string;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
      subTypeIds: 'SubTypeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyEventTypeStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyEventTypeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReportTaskStatusRequest extends $tea.Model {
  featureType?: number;
  lang?: string;
  reportTaskStatus?: number;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
      reportTaskStatus: 'ReportTaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
      lang: 'string',
      reportTaskStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReportTaskStatusResponseBody extends $tea.Model {
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

export class ModifyReportTaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyReportTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyReportTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleRequest extends $tea.Model {
  category?: number;
  content?: string;
  id?: number;
  lang?: string;
  matchType?: number;
  name?: string;
  productCode?: string;
  productId?: number;
  riskLevelId?: number;
  ruleType?: number;
  supportForm?: number;
  warnLevel?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      id: 'Id',
      lang: 'Lang',
      matchType: 'MatchType',
      name: 'Name',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleType: 'RuleType',
      supportForm: 'SupportForm',
      warnLevel: 'WarnLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      content: 'string',
      id: 'number',
      lang: 'string',
      matchType: 'number',
      name: 'string',
      productCode: 'string',
      productId: 'number',
      riskLevelId: 'number',
      ruleType: 'number',
      supportForm: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRuleStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopMaskingProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopMaskingProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryTemplateListResponseBodyItems extends $tea.Model {
  currentRiskLevel?: number;
  description?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  maxCategoryLevel?: number;
  maxRiskLevel?: number;
  name?: string;
  status?: number;
  supportEdit?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      currentRiskLevel: 'CurrentRiskLevel',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      maxCategoryLevel: 'MaxCategoryLevel',
      maxRiskLevel: 'MaxRiskLevel',
      name: 'Name',
      status: 'Status',
      supportEdit: 'SupportEdit',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentRiskLevel: 'number',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      maxCategoryLevel: 'number',
      maxRiskLevel: 'number',
      name: 'string',
      status: 'number',
      supportEdit: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryTemplateRuleListResponseBodyItems extends $tea.Model {
  description?: string;
  id?: number;
  identificationRuleIds?: string;
  identificationScope?: string;
  name?: string;
  riskLevelId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      identificationRuleIds: 'IdentificationRuleIds',
      identificationScope: 'IdentificationScope',
      name: 'Name',
      riskLevelId: 'RiskLevelId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      identificationRuleIds: 'string',
      identificationScope: 'string',
      name: 'string',
      riskLevelId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBodyItemsModelTags extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBodyItems extends $tea.Model {
  creationTime?: number;
  dataType?: string;
  id?: string;
  instanceId?: number;
  instanceName?: string;
  modelTags?: DescribeColumnsResponseBodyItemsModelTags[];
  name?: string;
  odpsRiskLevelName?: string;
  odpsRiskLevelValue?: number;
  productCode?: string;
  revisionId?: number;
  revisionStatus?: number;
  riskLevelId?: number;
  riskLevelName?: string;
  ruleId?: number;
  ruleName?: string;
  sensLevelName?: string;
  sensitive?: boolean;
  tableId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      dataType: 'DataType',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      modelTags: 'ModelTags',
      name: 'Name',
      odpsRiskLevelName: 'OdpsRiskLevelName',
      odpsRiskLevelValue: 'OdpsRiskLevelValue',
      productCode: 'ProductCode',
      revisionId: 'RevisionId',
      revisionStatus: 'RevisionStatus',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sensLevelName: 'SensLevelName',
      sensitive: 'Sensitive',
      tableId: 'TableId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      dataType: 'string',
      id: 'string',
      instanceId: 'number',
      instanceName: 'string',
      modelTags: { 'type': 'array', 'itemType': DescribeColumnsResponseBodyItemsModelTags },
      name: 'string',
      odpsRiskLevelName: 'string',
      odpsRiskLevelValue: 'number',
      productCode: 'string',
      revisionId: 'number',
      revisionStatus: 'number',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleId: 'number',
      ruleName: 'string',
      sensLevelName: 'string',
      sensitive: 'boolean',
      tableId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsV2ResponseBodyItemsModelTags extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsV2ResponseBodyItems extends $tea.Model {
  creationTime?: number;
  dataType?: string;
  id?: string;
  instanceId?: number;
  instanceName?: string;
  modelTags?: DescribeColumnsV2ResponseBodyItemsModelTags[];
  name?: string;
  odpsRiskLevelName?: string;
  odpsRiskLevelValue?: number;
  productCode?: string;
  revisionId?: number;
  revisionStatus?: number;
  riskLevelId?: number;
  riskLevelName?: string;
  ruleId?: number;
  ruleName?: string;
  sensLevelName?: string;
  sensitive?: boolean;
  tableId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      dataType: 'DataType',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      modelTags: 'ModelTags',
      name: 'Name',
      odpsRiskLevelName: 'OdpsRiskLevelName',
      odpsRiskLevelValue: 'OdpsRiskLevelValue',
      productCode: 'ProductCode',
      revisionId: 'RevisionId',
      revisionStatus: 'RevisionStatus',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sensLevelName: 'SensLevelName',
      sensitive: 'Sensitive',
      tableId: 'TableId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      dataType: 'string',
      id: 'string',
      instanceId: 'number',
      instanceName: 'string',
      modelTags: { 'type': 'array', 'itemType': DescribeColumnsV2ResponseBodyItemsModelTags },
      name: 'string',
      odpsRiskLevelName: 'string',
      odpsRiskLevelValue: 'number',
      productCode: 'string',
      revisionId: 'number',
      revisionStatus: 'number',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleId: 'number',
      ruleName: 'string',
      sensLevelName: 'string',
      sensitive: 'boolean',
      tableId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigsResponseBodyConfigList extends $tea.Model {
  code?: string;
  defaultValue?: string;
  description?: string;
  id?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      defaultValue: 'DefaultValue',
      description: 'Description',
      id: 'Id',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      defaultValue: 'string',
      description: 'string',
      id: 'number',
      value: 'string',
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
  id?: string;
  labelsec?: boolean;
  name?: string;
  objectKey?: string;
  odpsRiskLevelName?: string;
  owner?: string;
  productCode?: string;
  productId?: string;
  protection?: boolean;
  riskLevelId?: number;
  riskLevelName?: string;
  ruleName?: string;
  sensitive?: boolean;
  sensitiveCount?: number;
  sensitiveRatio?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
      creationTime: 'CreationTime',
      dataType: 'DataType',
      id: 'Id',
      labelsec: 'Labelsec',
      name: 'Name',
      objectKey: 'ObjectKey',
      odpsRiskLevelName: 'OdpsRiskLevelName',
      owner: 'Owner',
      productCode: 'ProductCode',
      productId: 'ProductId',
      protection: 'Protection',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleName: 'RuleName',
      sensitive: 'Sensitive',
      sensitiveCount: 'SensitiveCount',
      sensitiveRatio: 'SensitiveRatio',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      creationTime: 'number',
      dataType: 'string',
      id: 'string',
      labelsec: 'boolean',
      name: 'string',
      objectKey: 'string',
      odpsRiskLevelName: 'string',
      owner: 'string',
      productCode: 'string',
      productId: 'string',
      protection: 'boolean',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleName: 'string',
      sensitive: 'boolean',
      sensitiveCount: 'number',
      sensitiveRatio: 'string',
      totalCount: 'number',
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
  checkStatus?: number;
  checkStatusName?: string;
  connector?: string;
  gmtCreate?: number;
  id?: number;
  localName?: string;
  parentId?: string;
  regionId?: string;
  resourceType?: number;
  resourceTypeCode?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkStatusName: 'CheckStatusName',
      connector: 'Connector',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      localName: 'LocalName',
      parentId: 'ParentId',
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
      connector: 'string',
      gmtCreate: 'number',
      id: 'number',
      localName: 'string',
      parentId: 'string',
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

export class DescribeDataLimitSetResponseBodyDataLimitSetOssBucketList extends $tea.Model {
  bucketName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataLimitSetResponseBodyDataLimitSetRegionList extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
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
  auditStatus?: number;
  autoScan?: number;
  checkStatus?: number;
  checkStatusName?: string;
  datamaskStatus?: number;
  dbVersion?: string;
  enable?: number;
  engineType?: string;
  errorCode?: string;
  errorMessage?: string;
  eventStatus?: number;
  gmtCreate?: number;
  id?: number;
  instanceDescription?: string;
  instanceId?: string;
  lastFinishedTime?: number;
  localName?: string;
  logStoreDay?: number;
  memberAccount?: number;
  nextStartTime?: number;
  ocrStatus?: number;
  parentId?: string;
  port?: number;
  processStatus?: number;
  processTotalCount?: number;
  regionId?: string;
  resourceType?: number;
  resourceTypeCode?: string;
  samplingSize?: number;
  securityGroupIdList?: string[];
  supportAudit?: boolean;
  supportDatamask?: boolean;
  supportEvent?: boolean;
  supportOcr?: boolean;
  supportScan?: boolean;
  tenantName?: string;
  totalCount?: number;
  userName?: string;
  vSwitchIdList?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoScan: 'AutoScan',
      checkStatus: 'CheckStatus',
      checkStatusName: 'CheckStatusName',
      datamaskStatus: 'DatamaskStatus',
      dbVersion: 'DbVersion',
      enable: 'Enable',
      engineType: 'EngineType',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      eventStatus: 'EventStatus',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      lastFinishedTime: 'LastFinishedTime',
      localName: 'LocalName',
      logStoreDay: 'LogStoreDay',
      memberAccount: 'MemberAccount',
      nextStartTime: 'NextStartTime',
      ocrStatus: 'OcrStatus',
      parentId: 'ParentId',
      port: 'Port',
      processStatus: 'ProcessStatus',
      processTotalCount: 'ProcessTotalCount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceTypeCode: 'ResourceTypeCode',
      samplingSize: 'SamplingSize',
      securityGroupIdList: 'SecurityGroupIdList',
      supportAudit: 'SupportAudit',
      supportDatamask: 'SupportDatamask',
      supportEvent: 'SupportEvent',
      supportOcr: 'SupportOcr',
      supportScan: 'SupportScan',
      tenantName: 'TenantName',
      totalCount: 'TotalCount',
      userName: 'UserName',
      vSwitchIdList: 'VSwitchIdList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      autoScan: 'number',
      checkStatus: 'number',
      checkStatusName: 'string',
      datamaskStatus: 'number',
      dbVersion: 'string',
      enable: 'number',
      engineType: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      eventStatus: 'number',
      gmtCreate: 'number',
      id: 'number',
      instanceDescription: 'string',
      instanceId: 'string',
      lastFinishedTime: 'number',
      localName: 'string',
      logStoreDay: 'number',
      memberAccount: 'number',
      nextStartTime: 'number',
      ocrStatus: 'number',
      parentId: 'string',
      port: 'number',
      processStatus: 'number',
      processTotalCount: 'number',
      regionId: 'string',
      resourceType: 'number',
      resourceTypeCode: 'string',
      samplingSize: 'number',
      securityGroupIdList: { 'type': 'array', 'itemType': 'string' },
      supportAudit: 'boolean',
      supportDatamask: 'boolean',
      supportEvent: 'boolean',
      supportOcr: 'boolean',
      supportScan: 'boolean',
      tenantName: 'string',
      totalCount: 'number',
      userName: 'string',
      vSwitchIdList: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataMaskingRunHistoryResponseBodyItems extends $tea.Model {
  conflictCount?: number;
  dstType?: number;
  dstTypeCode?: string;
  endTime?: number;
  failCode?: string;
  failMsg?: string;
  hasDownloadFile?: number;
  hasSubProcess?: number;
  id?: number;
  maskingCount?: number;
  percentage?: number;
  runIndex?: number;
  srcTableName?: string;
  srcType?: number;
  srcTypeCode?: string;
  startTime?: number;
  status?: number;
  taskId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      conflictCount: 'ConflictCount',
      dstType: 'DstType',
      dstTypeCode: 'DstTypeCode',
      endTime: 'EndTime',
      failCode: 'FailCode',
      failMsg: 'FailMsg',
      hasDownloadFile: 'HasDownloadFile',
      hasSubProcess: 'HasSubProcess',
      id: 'Id',
      maskingCount: 'MaskingCount',
      percentage: 'Percentage',
      runIndex: 'RunIndex',
      srcTableName: 'SrcTableName',
      srcType: 'SrcType',
      srcTypeCode: 'SrcTypeCode',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictCount: 'number',
      dstType: 'number',
      dstTypeCode: 'string',
      endTime: 'number',
      failCode: 'string',
      failMsg: 'string',
      hasDownloadFile: 'number',
      hasSubProcess: 'number',
      id: 'number',
      maskingCount: 'number',
      percentage: 'number',
      runIndex: 'number',
      srcTableName: 'string',
      srcType: 'number',
      srcTypeCode: 'string',
      startTime: 'number',
      status: 'number',
      taskId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataMaskingTasksResponseBodyItems extends $tea.Model {
  dstMemberAccount?: number;
  dstPath?: string;
  dstType?: number;
  dstTypeCode?: string;
  gmtCreate?: number;
  hasUnfinishProcess?: boolean;
  id?: number;
  originalTable?: boolean;
  owner?: string;
  runCount?: number;
  srcMemberAccount?: number;
  srcPath?: string;
  srcType?: number;
  srcTypeCode?: string;
  status?: number;
  taskId?: string;
  taskName?: string;
  triggerType?: number;
  static names(): { [key: string]: string } {
    return {
      dstMemberAccount: 'DstMemberAccount',
      dstPath: 'DstPath',
      dstType: 'DstType',
      dstTypeCode: 'DstTypeCode',
      gmtCreate: 'GmtCreate',
      hasUnfinishProcess: 'HasUnfinishProcess',
      id: 'Id',
      originalTable: 'OriginalTable',
      owner: 'Owner',
      runCount: 'RunCount',
      srcMemberAccount: 'SrcMemberAccount',
      srcPath: 'SrcPath',
      srcType: 'SrcType',
      srcTypeCode: 'SrcTypeCode',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstMemberAccount: 'number',
      dstPath: 'string',
      dstType: 'number',
      dstTypeCode: 'string',
      gmtCreate: 'number',
      hasUnfinishProcess: 'boolean',
      id: 'number',
      originalTable: 'boolean',
      owner: 'string',
      runCount: 'number',
      srcMemberAccount: 'number',
      srcPath: 'string',
      srcType: 'number',
      srcTypeCode: 'string',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
      triggerType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectColumnDetailResponseBodyItemsModelTags extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectColumnDetailResponseBodyItems extends $tea.Model {
  categories?: string[];
  columnComment?: string;
  columnName?: string;
  dataType?: string;
  id?: string;
  modelTags?: DescribeDataObjectColumnDetailResponseBodyItemsModelTags[];
  primaryKey?: boolean;
  riskLevelId?: number;
  riskLevelName?: string;
  ruleId?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      columnComment: 'ColumnComment',
      columnName: 'ColumnName',
      dataType: 'DataType',
      id: 'Id',
      modelTags: 'ModelTags',
      primaryKey: 'PrimaryKey',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      columnComment: 'string',
      columnName: 'string',
      dataType: 'string',
      id: 'string',
      modelTags: { 'type': 'array', 'itemType': DescribeDataObjectColumnDetailResponseBodyItemsModelTags },
      primaryKey: 'boolean',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectColumnDetailV2ResponseBodyItemsModelTags extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectColumnDetailV2ResponseBodyItems extends $tea.Model {
  categories?: string[];
  columnComment?: string;
  columnName?: string;
  dataType?: string;
  id?: string;
  modelTags?: DescribeDataObjectColumnDetailV2ResponseBodyItemsModelTags[];
  primaryKey?: boolean;
  riskLevelId?: number;
  riskLevelName?: string;
  ruleId?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      columnComment: 'ColumnComment',
      columnName: 'ColumnName',
      dataType: 'DataType',
      id: 'Id',
      modelTags: 'ModelTags',
      primaryKey: 'PrimaryKey',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      columnComment: 'string',
      columnName: 'string',
      dataType: 'string',
      id: 'string',
      modelTags: { 'type': 'array', 'itemType': DescribeDataObjectColumnDetailV2ResponseBodyItemsModelTags },
      primaryKey: 'boolean',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectsResponseBodyItemsModelTags extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectsResponseBodyItemsRuleList extends $tea.Model {
  riskLevelId?: number;
  riskLevelName?: string;
  ruleCount?: number;
  ruleId?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleCount: 'RuleCount',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleCount: 'number',
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectsResponseBodyItems extends $tea.Model {
  categories?: string[];
  id?: string;
  instanceDescription?: string;
  instanceId?: string;
  lastModifiedTime?: number;
  lastScanTime?: number;
  memberAccount?: number;
  modelTags?: DescribeDataObjectsResponseBodyItemsModelTags[];
  name?: string;
  objectFileCategory?: string;
  objectType?: string;
  path?: string;
  productCode?: string;
  productId?: number;
  regionName?: string;
  ruleList?: DescribeDataObjectsResponseBodyItemsRuleList[];
  sensitiveCount?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      id: 'Id',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      lastModifiedTime: 'LastModifiedTime',
      lastScanTime: 'LastScanTime',
      memberAccount: 'MemberAccount',
      modelTags: 'ModelTags',
      name: 'Name',
      objectFileCategory: 'ObjectFileCategory',
      objectType: 'ObjectType',
      path: 'Path',
      productCode: 'ProductCode',
      productId: 'ProductId',
      regionName: 'RegionName',
      ruleList: 'RuleList',
      sensitiveCount: 'SensitiveCount',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      lastModifiedTime: 'number',
      lastScanTime: 'number',
      memberAccount: 'number',
      modelTags: { 'type': 'array', 'itemType': DescribeDataObjectsResponseBodyItemsModelTags },
      name: 'string',
      objectFileCategory: 'string',
      objectType: 'string',
      path: 'string',
      productCode: 'string',
      productId: 'number',
      regionName: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeDataObjectsResponseBodyItemsRuleList },
      sensitiveCount: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocTypesResponseBodyDocTypeList extends $tea.Model {
  code?: number;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBodyEventDetailChartData extends $tea.Model {
  x?: string[];
  y?: string[];
  z?: string[];
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': 'string' },
      z: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBodyEventDetailChart extends $tea.Model {
  chatType?: number;
  data?: DescribeEventDetailResponseBodyEventDetailChartData;
  label?: string;
  name?: string;
  type?: string;
  XLabel?: string;
  YLabel?: string;
  ZLabel?: string;
  static names(): { [key: string]: string } {
    return {
      chatType: 'ChatType',
      data: 'Data',
      label: 'Label',
      name: 'Name',
      type: 'Type',
      XLabel: 'XLabel',
      YLabel: 'YLabel',
      ZLabel: 'ZLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatType: 'number',
      data: DescribeEventDetailResponseBodyEventDetailChartData,
      label: 'string',
      name: 'string',
      type: 'string',
      XLabel: 'string',
      YLabel: 'string',
      ZLabel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBodyEventDetailContent extends $tea.Model {
  label?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      name: 'string',
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
  currentValue?: string;
  disableTime?: number;
  enableTime?: number;
  handlerName?: string;
  handlerType?: string;
  handlerValue?: number;
  id?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentValue: 'CurrentValue',
      disableTime: 'DisableTime',
      enableTime: 'EnableTime',
      handlerName: 'HandlerName',
      handlerType: 'HandlerType',
      handlerValue: 'HandlerValue',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentValue: 'string',
      disableTime: 'number',
      enableTime: 'number',
      handlerName: 'string',
      handlerType: 'string',
      handlerValue: 'number',
      id: 'number',
      status: 'number',
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
  newAlarm?: boolean;
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
      newAlarm: 'NewAlarm',
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
      newAlarm: 'boolean',
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
  adaptedProduct?: string;
  code?: string;
  configCode?: string;
  configContentType?: number;
  configDescription?: string;
  configValue?: string;
  description?: string;
  eventHitCount?: number;
  id?: number;
  name?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      adaptedProduct: 'AdaptedProduct',
      code: 'Code',
      configCode: 'ConfigCode',
      configContentType: 'ConfigContentType',
      configDescription: 'ConfigDescription',
      configValue: 'ConfigValue',
      description: 'Description',
      eventHitCount: 'EventHitCount',
      id: 'Id',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptedProduct: 'string',
      code: 'string',
      configCode: 'string',
      configContentType: 'number',
      configDescription: 'string',
      configValue: 'string',
      description: 'string',
      eventHitCount: 'number',
      id: 'number',
      name: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTypesResponseBodyEventTypeList extends $tea.Model {
  code?: string;
  description?: string;
  id?: number;
  name?: string;
  subTypeList?: DescribeEventTypesResponseBodyEventTypeListSubTypeList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      subTypeList: 'SubTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      subTypeList: { 'type': 'array', 'itemType': DescribeEventTypesResponseBodyEventTypeListSubTypeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyItems extends $tea.Model {
  alertTime?: number;
  backed?: boolean;
  dealDisplayName?: string;
  dealLoginName?: string;
  dealTime?: number;
  dealUserId?: number;
  displayName?: string;
  eventTime?: number;
  id?: number;
  loginName?: string;
  productCode?: string;
  status?: number;
  statusName?: string;
  subTypeCode?: string;
  subTypeName?: string;
  targetProductCode?: string;
  typeCode?: string;
  typeName?: string;
  userId?: number;
  warnLevel?: number;
  static names(): { [key: string]: string } {
    return {
      alertTime: 'AlertTime',
      backed: 'Backed',
      dealDisplayName: 'DealDisplayName',
      dealLoginName: 'DealLoginName',
      dealTime: 'DealTime',
      dealUserId: 'DealUserId',
      displayName: 'DisplayName',
      eventTime: 'EventTime',
      id: 'Id',
      loginName: 'LoginName',
      productCode: 'ProductCode',
      status: 'Status',
      statusName: 'StatusName',
      subTypeCode: 'SubTypeCode',
      subTypeName: 'SubTypeName',
      targetProductCode: 'TargetProductCode',
      typeCode: 'TypeCode',
      typeName: 'TypeName',
      userId: 'UserId',
      warnLevel: 'WarnLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTime: 'number',
      backed: 'boolean',
      dealDisplayName: 'string',
      dealLoginName: 'string',
      dealTime: 'number',
      dealUserId: 'number',
      displayName: 'string',
      eventTime: 'number',
      id: 'number',
      loginName: 'string',
      productCode: 'string',
      status: 'number',
      statusName: 'string',
      subTypeCode: 'string',
      subTypeName: 'string',
      targetProductCode: 'string',
      typeCode: 'string',
      typeName: 'string',
      userId: 'number',
      warnLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSourcesResponseBodyItems extends $tea.Model {
  auditStatus?: number;
  autoScan?: number;
  canModifyUserName?: boolean;
  checkStatus?: number;
  datamaskStatus?: number;
  dbName?: string;
  enable?: number;
  engineType?: string;
  errorMessage?: string;
  gmtCreate?: number;
  id?: number;
  instanceDescription?: string;
  instanceId?: string;
  instanceSize?: number;
  lastModifyTime?: number;
  lastModifyUserId?: string;
  logStoreDay?: number;
  passwordStatus?: number;
  productId?: number;
  regionId?: string;
  regionName?: string;
  samplingSize?: number;
  tenantId?: string;
  tenantName?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoScan: 'AutoScan',
      canModifyUserName: 'CanModifyUserName',
      checkStatus: 'CheckStatus',
      datamaskStatus: 'DatamaskStatus',
      dbName: 'DbName',
      enable: 'Enable',
      engineType: 'EngineType',
      errorMessage: 'ErrorMessage',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceSize: 'InstanceSize',
      lastModifyTime: 'LastModifyTime',
      lastModifyUserId: 'LastModifyUserId',
      logStoreDay: 'LogStoreDay',
      passwordStatus: 'PasswordStatus',
      productId: 'ProductId',
      regionId: 'RegionId',
      regionName: 'RegionName',
      samplingSize: 'SamplingSize',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      autoScan: 'number',
      canModifyUserName: 'boolean',
      checkStatus: 'number',
      datamaskStatus: 'number',
      dbName: 'string',
      enable: 'number',
      engineType: 'string',
      errorMessage: 'string',
      gmtCreate: 'number',
      id: 'number',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceSize: 'number',
      lastModifyTime: 'number',
      lastModifyUserId: 'string',
      logStoreDay: 'number',
      passwordStatus: 'number',
      productId: 'number',
      regionId: 'string',
      regionName: 'string',
      samplingSize: 'number',
      tenantId: 'string',
      tenantName: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyItemsModelTags extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyItems extends $tea.Model {
  creationTime?: number;
  departName?: string;
  id?: number;
  instanceDescription?: string;
  labelsec?: boolean;
  lastFinishTime?: number;
  modelTags?: DescribeInstancesResponseBodyItemsModelTags[];
  name?: string;
  odpsRiskLevelName?: string;
  owner?: string;
  productCode?: string;
  productId?: string;
  protection?: boolean;
  riskLevelId?: number;
  riskLevelName?: string;
  ruleName?: string;
  sensitive?: boolean;
  sensitiveCount?: number;
  tenantName?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      departName: 'DepartName',
      id: 'Id',
      instanceDescription: 'InstanceDescription',
      labelsec: 'Labelsec',
      lastFinishTime: 'LastFinishTime',
      modelTags: 'ModelTags',
      name: 'Name',
      odpsRiskLevelName: 'OdpsRiskLevelName',
      owner: 'Owner',
      productCode: 'ProductCode',
      productId: 'ProductId',
      protection: 'Protection',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleName: 'RuleName',
      sensitive: 'Sensitive',
      sensitiveCount: 'SensitiveCount',
      tenantName: 'TenantName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      departName: 'string',
      id: 'number',
      instanceDescription: 'string',
      labelsec: 'boolean',
      lastFinishTime: 'number',
      modelTags: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyItemsModelTags },
      name: 'string',
      odpsRiskLevelName: 'string',
      owner: 'string',
      productCode: 'string',
      productId: 'string',
      protection: 'boolean',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleName: 'string',
      sensitive: 'boolean',
      sensitiveCount: 'number',
      tenantName: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailResponseBodyOssObjectDetailRuleListModelTags extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailResponseBodyOssObjectDetailRuleList extends $tea.Model {
  categoryName?: string;
  count?: number;
  modelTags?: DescribeOssObjectDetailResponseBodyOssObjectDetailRuleListModelTags[];
  riskLevelId?: number;
  riskLevelName?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      count: 'Count',
      modelTags: 'ModelTags',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      count: 'number',
      modelTags: { 'type': 'array', 'itemType': DescribeOssObjectDetailResponseBodyOssObjectDetailRuleListModelTags },
      riskLevelId: 'number',
      riskLevelName: 'string',
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

export class DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleListModelTags extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleList extends $tea.Model {
  categoryName?: string;
  count?: number;
  modelTags?: DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleListModelTags[];
  riskLevelId?: number;
  riskLevelName?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      count: 'Count',
      modelTags: 'ModelTags',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      count: 'number',
      modelTags: { 'type': 'array', 'itemType': DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleListModelTags },
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailV2ResponseBodyOssObjectDetail extends $tea.Model {
  bucketName?: string;
  categoryName?: string;
  name?: string;
  regionId?: string;
  riskLevelName?: string;
  ruleList?: DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleList[];
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
      ruleList: { 'type': 'array', 'itemType': DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectsResponseBodyItemsRuleList extends $tea.Model {
  count?: number;
  name?: string;
  riskLevelId?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
      riskLevelId: 'RiskLevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      name: 'string',
      riskLevelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectsResponseBodyItems extends $tea.Model {
  bucketName?: string;
  category?: number;
  categoryName?: string;
  fileCategoryCode?: number;
  fileCategoryName?: string;
  fileId?: string;
  id?: string;
  instanceId?: number;
  lastModifiedTime?: number;
  name?: string;
  regionId?: string;
  riskLevelId?: number;
  riskLevelName?: string;
  ruleCount?: number;
  ruleList?: DescribeOssObjectsResponseBodyItemsRuleList[];
  sensitiveCount?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      category: 'Category',
      categoryName: 'CategoryName',
      fileCategoryCode: 'FileCategoryCode',
      fileCategoryName: 'FileCategoryName',
      fileId: 'FileId',
      id: 'Id',
      instanceId: 'InstanceId',
      lastModifiedTime: 'LastModifiedTime',
      name: 'Name',
      regionId: 'RegionId',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleCount: 'RuleCount',
      ruleList: 'RuleList',
      sensitiveCount: 'SensitiveCount',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      category: 'number',
      categoryName: 'string',
      fileCategoryCode: 'number',
      fileCategoryName: 'string',
      fileId: 'string',
      id: 'string',
      instanceId: 'number',
      lastModifiedTime: 'number',
      name: 'string',
      regionId: 'string',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleCount: 'number',
      ruleList: { 'type': 'array', 'itemType': DescribeOssObjectsResponseBodyItemsRuleList },
      sensitiveCount: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackagesResponseBodyItems extends $tea.Model {
  creationTime?: number;
  id?: number;
  instanceId?: number;
  name?: string;
  owner?: string;
  riskLevelId?: number;
  riskLevelName?: string;
  sensitive?: boolean;
  sensitiveCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      id: 'Id',
      instanceId: 'InstanceId',
      name: 'Name',
      owner: 'Owner',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      sensitive: 'Sensitive',
      sensitiveCount: 'SensitiveCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      id: 'number',
      instanceId: 'number',
      name: 'string',
      owner: 'string',
      riskLevelId: 'number',
      riskLevelName: 'string',
      sensitive: 'boolean',
      sensitiveCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentInstanceResponseBodyItems extends $tea.Model {
  auditStatus?: number;
  authStatus?: number;
  clusterStatus?: string;
  connectNode?: string;
  dbNum?: string;
  engineType?: string;
  instanceDescription?: string;
  instanceId?: string;
  instanceSize?: number;
  localName?: string;
  memberAccount?: number;
  parentId?: string;
  resourceType?: string;
  supportConnectNodes?: string;
  tenantId?: string;
  tenantName?: string;
  unConnectDbCount?: string;
  unSupportOneClickAuthReason?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      authStatus: 'AuthStatus',
      clusterStatus: 'ClusterStatus',
      connectNode: 'ConnectNode',
      dbNum: 'DbNum',
      engineType: 'EngineType',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceSize: 'InstanceSize',
      localName: 'LocalName',
      memberAccount: 'MemberAccount',
      parentId: 'ParentId',
      resourceType: 'ResourceType',
      supportConnectNodes: 'SupportConnectNodes',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      unConnectDbCount: 'UnConnectDbCount',
      unSupportOneClickAuthReason: 'UnSupportOneClickAuthReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      authStatus: 'number',
      clusterStatus: 'string',
      connectNode: 'string',
      dbNum: 'string',
      engineType: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceSize: 'number',
      localName: 'string',
      memberAccount: 'number',
      parentId: 'string',
      resourceType: 'string',
      supportConnectNodes: 'string',
      tenantId: 'string',
      tenantName: 'string',
      unConnectDbCount: 'string',
      unSupportOneClickAuthReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskLevelsResponseBodyRiskLevelList extends $tea.Model {
  description?: string;
  id?: number;
  name?: string;
  referenceNum?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      referenceNum: 'ReferenceNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
      referenceNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponseBodyItems extends $tea.Model {
  category?: number;
  categoryName?: string;
  content?: string;
  contentCategory?: string;
  customType?: number;
  description?: string;
  displayName?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupId?: string;
  hitTotalCount?: number;
  id?: number;
  loginName?: string;
  majorKey?: string;
  matchType?: number;
  name?: string;
  productCode?: string;
  productId?: number;
  riskLevelId?: number;
  riskLevelName?: string;
  statExpress?: string;
  status?: number;
  supportForm?: number;
  target?: string;
  userId?: number;
  warnLevel?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      categoryName: 'CategoryName',
      content: 'Content',
      contentCategory: 'ContentCategory',
      customType: 'CustomType',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupId: 'GroupId',
      hitTotalCount: 'HitTotalCount',
      id: 'Id',
      loginName: 'LoginName',
      majorKey: 'MajorKey',
      matchType: 'MatchType',
      name: 'Name',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      statExpress: 'StatExpress',
      status: 'Status',
      supportForm: 'SupportForm',
      target: 'Target',
      userId: 'UserId',
      warnLevel: 'WarnLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      categoryName: 'string',
      content: 'string',
      contentCategory: 'string',
      customType: 'number',
      description: 'string',
      displayName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupId: 'string',
      hitTotalCount: 'number',
      id: 'number',
      loginName: 'string',
      majorKey: 'string',
      matchType: 'number',
      name: 'string',
      productCode: 'string',
      productId: 'number',
      riskLevelId: 'number',
      riskLevelName: 'string',
      statExpress: 'string',
      status: 'number',
      supportForm: 'number',
      target: 'string',
      userId: 'number',
      warnLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBodyItemsRuleList extends $tea.Model {
  count?: number;
  name?: string;
  riskLevelId?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
      riskLevelId: 'RiskLevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      name: 'string',
      riskLevelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBodyItems extends $tea.Model {
  creationTime?: number;
  id?: number;
  instanceDescription?: string;
  instanceId?: number;
  instanceName?: string;
  name?: string;
  owner?: string;
  productCode?: string;
  productId?: string;
  riskLevelId?: number;
  riskLevelName?: string;
  ruleList?: DescribeTablesResponseBodyItemsRuleList[];
  sensitive?: boolean;
  sensitiveCount?: number;
  sensitiveRatio?: string;
  tenantName?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      id: 'Id',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      name: 'Name',
      owner: 'Owner',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleList: 'RuleList',
      sensitive: 'Sensitive',
      sensitiveCount: 'SensitiveCount',
      sensitiveRatio: 'SensitiveRatio',
      tenantName: 'TenantName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      id: 'number',
      instanceDescription: 'string',
      instanceId: 'number',
      instanceName: 'string',
      name: 'string',
      owner: 'string',
      productCode: 'string',
      productId: 'string',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeTablesResponseBodyItemsRuleList },
      sensitive: 'boolean',
      sensitiveCount: 'number',
      sensitiveRatio: 'string',
      tenantName: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateAllRulesResponseBodyRuleList extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserStatusResponseBodyUserStatus extends $tea.Model {
  accessKeyId?: string;
  auditClosable?: boolean;
  auditReleasable?: boolean;
  authed?: boolean;
  chargeType?: string;
  dataManagerRole?: number;
  instanceId?: string;
  instanceNum?: number;
  instanceTotalCount?: number;
  labStatus?: number;
  ossTotalSize?: number;
  protectionDays?: number;
  purchased?: boolean;
  releaseDays?: number;
  releaseTime?: number;
  remainDays?: number;
  trail?: boolean;
  useAgentAudit?: boolean;
  useInstanceNum?: number;
  useOssSize?: number;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      auditClosable: 'AuditClosable',
      auditReleasable: 'AuditReleasable',
      authed: 'Authed',
      chargeType: 'ChargeType',
      dataManagerRole: 'DataManagerRole',
      instanceId: 'InstanceId',
      instanceNum: 'InstanceNum',
      instanceTotalCount: 'InstanceTotalCount',
      labStatus: 'LabStatus',
      ossTotalSize: 'OssTotalSize',
      protectionDays: 'ProtectionDays',
      purchased: 'Purchased',
      releaseDays: 'ReleaseDays',
      releaseTime: 'ReleaseTime',
      remainDays: 'RemainDays',
      trail: 'Trail',
      useAgentAudit: 'UseAgentAudit',
      useInstanceNum: 'UseInstanceNum',
      useOssSize: 'UseOssSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      auditClosable: 'boolean',
      auditReleasable: 'boolean',
      authed: 'boolean',
      chargeType: 'string',
      dataManagerRole: 'number',
      instanceId: 'string',
      instanceNum: 'number',
      instanceTotalCount: 'number',
      labStatus: 'number',
      ossTotalSize: 'number',
      protectionDays: 'number',
      purchased: 'boolean',
      releaseDays: 'number',
      releaseTime: 'number',
      remainDays: 'number',
      trail: 'boolean',
      useAgentAudit: 'boolean',
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

  /**
   * @summary Modifies the configurations of a common configuration item for alerts.
   *
   * @description You can call this operation to create or restore configurations based on the codes of common configuration items. This allows you to manage the configurations of common configuration items.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request CreateConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateConfigResponse
   */
  async createConfigWithOptions(request: CreateConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateConfig",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConfigResponse>(await this.callApi(params, req, runtime), new CreateConfigResponse({}));
  }

  /**
   * @summary Modifies the configurations of a common configuration item for alerts.
   *
   * @description You can call this operation to create or restore configurations based on the codes of common configuration items. This allows you to manage the configurations of common configuration items.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request CreateConfigRequest
   * @return CreateConfigResponse
   */
  async createConfig(request: CreateConfigRequest): Promise<CreateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConfigWithOptions(request, runtime);
  }

  /**
   * @summary Authorizes Data Security Center (DSC) to scan data assets. The data assets can be a database, a project, or a bucket.
   *
   * @description You can call this operation to authorize DSC to scan data assets to ensure the security of the data assets.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request CreateDataLimitRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDataLimitResponse
   */
  async createDataLimitWithOptions(request: CreateDataLimitRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataLimitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!Util.isUnset(request.autoScan)) {
      query["AutoScan"] = request.autoScan;
    }

    if (!Util.isUnset(request.certificatePermission)) {
      query["CertificatePermission"] = request.certificatePermission;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!Util.isUnset(request.eventStatus)) {
      query["EventStatus"] = request.eventStatus;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.logStoreDay)) {
      query["LogStoreDay"] = request.logStoreDay;
    }

    if (!Util.isUnset(request.ocrStatus)) {
      query["OcrStatus"] = request.ocrStatus;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.samplingSize)) {
      query["SamplingSize"] = request.samplingSize;
    }

    if (!Util.isUnset(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataLimit",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataLimitResponse>(await this.callApi(params, req, runtime), new CreateDataLimitResponse({}));
  }

  /**
   * @summary Authorizes Data Security Center (DSC) to scan data assets. The data assets can be a database, a project, or a bucket.
   *
   * @description You can call this operation to authorize DSC to scan data assets to ensure the security of the data assets.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request CreateDataLimitRequest
   * @return CreateDataLimitResponse
   */
  async createDataLimit(request: CreateDataLimitRequest): Promise<CreateDataLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataLimitWithOptions(request, runtime);
  }

  /**
   * @summary Creates a custom sensitive data detection rule.
   *
   * @param request CreateRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateRuleResponse
   */
  async createRuleWithOptions(request: CreateRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentCategory)) {
      query["ContentCategory"] = request.contentCategory;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.statExpress)) {
      query["StatExpress"] = request.statExpress;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.supportForm)) {
      query["SupportForm"] = request.supportForm;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    if (!Util.isUnset(request.warnLevel)) {
      query["WarnLevel"] = request.warnLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRule",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRuleResponse>(await this.callApi(params, req, runtime), new CreateRuleResponse({}));
  }

  /**
   * @summary Creates a custom sensitive data detection rule.
   *
   * @param request CreateRuleRequest
   * @return CreateRuleResponse
   */
  async createRule(request: CreateRuleRequest): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  /**
   * @summary Creates a custom scan task. The custom scan task is used to scan data assets on which Data Security Center (DSC) is granted the scan permissions for sensitive data.
   *
   * @description You can call this operation to create a custom scan task for authorized data assets. You can customize the interval between two consecutive scan tasks and the time when the scan task is executed next time.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request CreateScanTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateScanTaskResponse
   */
  async createScanTaskWithOptions(request: CreateScanTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateScanTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataLimitId)) {
      query["DataLimitId"] = request.dataLimitId;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.intervalDay)) {
      query["IntervalDay"] = request.intervalDay;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.ossScanPath)) {
      query["OssScanPath"] = request.ossScanPath;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.runHour)) {
      query["RunHour"] = request.runHour;
    }

    if (!Util.isUnset(request.runMinute)) {
      query["RunMinute"] = request.runMinute;
    }

    if (!Util.isUnset(request.scanRange)) {
      query["ScanRange"] = request.scanRange;
    }

    if (!Util.isUnset(request.scanRangeContent)) {
      query["ScanRangeContent"] = request.scanRangeContent;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskUserName)) {
      query["TaskUserName"] = request.taskUserName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateScanTask",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateScanTaskResponse>(await this.callApi(params, req, runtime), new CreateScanTaskResponse({}));
  }

  /**
   * @summary Creates a custom scan task. The custom scan task is used to scan data assets on which Data Security Center (DSC) is granted the scan permissions for sensitive data.
   *
   * @description You can call this operation to create a custom scan task for authorized data assets. You can customize the interval between two consecutive scan tasks and the time when the scan task is executed next time.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request CreateScanTaskRequest
   * @return CreateScanTaskResponse
   */
  async createScanTask(request: CreateScanTaskRequest): Promise<CreateScanTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScanTaskWithOptions(request, runtime);
  }

  /**
   * @summary Creates a service-linked role for Data Security Center (DSC) to grant DSC the permissions to access data assets in other services.
   *
   * @description You can call this operation to allow DSC to access the data assets in services such as Object Storage Service (OSS), ApsaraDB RDS, and MaxCompute. After you call this operation, the system automatically creates a service-linked role named AliyunServiceRoleForSDDP and attaches the AliyunServiceRolePolicyForSDDP policy to the role.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request CreateSlrRoleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateSlrRoleResponse
   */
  async createSlrRoleWithOptions(request: CreateSlrRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateSlrRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSlrRole",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSlrRoleResponse>(await this.callApi(params, req, runtime), new CreateSlrRoleResponse({}));
  }

  /**
   * @summary Creates a service-linked role for Data Security Center (DSC) to grant DSC the permissions to access data assets in other services.
   *
   * @description You can call this operation to allow DSC to access the data assets in services such as Object Storage Service (OSS), ApsaraDB RDS, and MaxCompute. After you call this operation, the system automatically creates a service-linked role named AliyunServiceRoleForSDDP and attaches the AliyunServiceRolePolicyForSDDP policy to the role.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request CreateSlrRoleRequest
   * @return CreateSlrRoleResponse
   */
  async createSlrRole(request: CreateSlrRoleRequest): Promise<CreateSlrRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSlrRoleWithOptions(request, runtime);
  }

  /**
   * @summary Revokes the scan permissions on a data asset. The data asset can be a database, an instance, or a bucket.
   *
   * @description You can call this operation to revoke the permissions on a data asset from Data Security Center (DSC).
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DeleteDataLimitRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDataLimitResponse
   */
  async deleteDataLimitWithOptions(request: DeleteDataLimitRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataLimitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataLimit",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataLimitResponse>(await this.callApi(params, req, runtime), new DeleteDataLimitResponse({}));
  }

  /**
   * @summary Revokes the scan permissions on a data asset. The data asset can be a database, an instance, or a bucket.
   *
   * @description You can call this operation to revoke the permissions on a data asset from Data Security Center (DSC).
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DeleteDataLimitRequest
   * @return DeleteDataLimitResponse
   */
  async deleteDataLimit(request: DeleteDataLimitRequest): Promise<DeleteDataLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataLimitWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a custom sensitive data detection rule from Data Security Center (DSC).
   *
   * @param request DeleteRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteRuleResponse
   */
  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRule",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRuleResponse>(await this.callApi(params, req, runtime), new DeleteRuleResponse({}));
  }

  /**
   * @summary Deletes a custom sensitive data detection rule from Data Security Center (DSC).
   *
   * @param request DeleteRuleRequest
   * @return DeleteRuleResponse
   */
  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  /**
   * @param request DescribeCategoryTemplateListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCategoryTemplateListResponse
   */
  async describeCategoryTemplateListWithOptions(request: DescribeCategoryTemplateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCategoryTemplateListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.usageScenario)) {
      query["UsageScenario"] = request.usageScenario;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCategoryTemplateList",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCategoryTemplateListResponse>(await this.callApi(params, req, runtime), new DescribeCategoryTemplateListResponse({}));
  }

  /**
   * @param request DescribeCategoryTemplateListRequest
   * @return DescribeCategoryTemplateListResponse
   */
  async describeCategoryTemplateList(request: DescribeCategoryTemplateListRequest): Promise<DescribeCategoryTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCategoryTemplateListWithOptions(request, runtime);
  }

  /**
   * @summary Queries rules in a classification template by page.
   *
   * @description You can call this operation to query rules in a classification template.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeCategoryTemplateRuleListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCategoryTemplateRuleListResponse
   */
  async describeCategoryTemplateRuleListWithOptions(request: DescribeCategoryTemplateRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCategoryTemplateRuleListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCategoryTemplateRuleList",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCategoryTemplateRuleListResponse>(await this.callApi(params, req, runtime), new DescribeCategoryTemplateRuleListResponse({}));
  }

  /**
   * @summary Queries rules in a classification template by page.
   *
   * @description You can call this operation to query rules in a classification template.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeCategoryTemplateRuleListRequest
   * @return DescribeCategoryTemplateRuleListResponse
   */
  async describeCategoryTemplateRuleList(request: DescribeCategoryTemplateRuleListRequest): Promise<DescribeCategoryTemplateRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCategoryTemplateRuleListWithOptions(request, runtime);
  }

  /**
   * @summary Queries data in the columns of the tables that Data Security Center (DSC) is authorized to access. The tables include the tables of MaxCompute and ApsaraDB RDS.
   *
   * @description You can call this operation to query the data in columns of a table that may contain sensitive data. This helps you analyze sensitive data.
   * ## [](#)Precautions
   * The DescribeColumns operation is changed to DescribeColumnsV2. We recommend that you call the DescribeColumnsV2 operation when you develop your applications.
   * ## [](#qps)Limits
   * Each Alibaba Cloud account can call this operation up to 10 times per second. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeColumnsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeColumnsResponse
   */
  async describeColumnsWithOptions(request: DescribeColumnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeColumnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.sensLevelName)) {
      query["SensLevelName"] = request.sensLevelName;
    }

    if (!Util.isUnset(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeColumns",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeColumnsResponse>(await this.callApi(params, req, runtime), new DescribeColumnsResponse({}));
  }

  /**
   * @summary Queries data in the columns of the tables that Data Security Center (DSC) is authorized to access. The tables include the tables of MaxCompute and ApsaraDB RDS.
   *
   * @description You can call this operation to query the data in columns of a table that may contain sensitive data. This helps you analyze sensitive data.
   * ## [](#)Precautions
   * The DescribeColumns operation is changed to DescribeColumnsV2. We recommend that you call the DescribeColumnsV2 operation when you develop your applications.
   * ## [](#qps)Limits
   * Each Alibaba Cloud account can call this operation up to 10 times per second. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeColumnsRequest
   * @return DescribeColumnsResponse
   */
  async describeColumns(request: DescribeColumnsRequest): Promise<DescribeColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeColumnsWithOptions(request, runtime);
  }

  /**
   * @summary 查询数据安全中心连接授权的MaxCompute、RDS等数据资产表中列的数据
   *
   * @param request DescribeColumnsV2Request
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeColumnsV2Response
   */
  async describeColumnsV2WithOptions(request: DescribeColumnsV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeColumnsV2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.sensLevelName)) {
      query["SensLevelName"] = request.sensLevelName;
    }

    if (!Util.isUnset(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeColumnsV2",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeColumnsV2Response>(await this.callApi(params, req, runtime), new DescribeColumnsV2Response({}));
  }

  /**
   * @summary 查询数据安全中心连接授权的MaxCompute、RDS等数据资产表中列的数据
   *
   * @param request DescribeColumnsV2Request
   * @return DescribeColumnsV2Response
   */
  async describeColumnsV2(request: DescribeColumnsV2Request): Promise<DescribeColumnsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeColumnsV2WithOptions(request, runtime);
  }

  /**
   * @summary Queries common configuration items for alerts.
   *
   * @param request DescribeConfigsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeConfigsResponse
   */
  async describeConfigsWithOptions(request: DescribeConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConfigs",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeConfigsResponse>(await this.callApi(params, req, runtime), new DescribeConfigsResponse({}));
  }

  /**
   * @summary Queries common configuration items for alerts.
   *
   * @param request DescribeConfigsRequest
   * @return DescribeConfigsResponse
   */
  async describeConfigs(request: DescribeConfigsRequest): Promise<DescribeConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConfigsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the sensitive data detection results of data assets that Data Security Center (DSC) is authorized to access.
   *
   * @param request DescribeDataAssetsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDataAssetsResponse
   */
  async describeDataAssetsWithOptions(request: DescribeDataAssetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataAssetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.rangeId)) {
      query["RangeId"] = request.rangeId;
    }

    if (!Util.isUnset(request.riskLevels)) {
      query["RiskLevels"] = request.riskLevels;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataAssets",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataAssetsResponse>(await this.callApi(params, req, runtime), new DescribeDataAssetsResponse({}));
  }

  /**
   * @summary Queries the sensitive data detection results of data assets that Data Security Center (DSC) is authorized to access.
   *
   * @param request DescribeDataAssetsRequest
   * @return DescribeDataAssetsResponse
   */
  async describeDataAssets(request: DescribeDataAssetsRequest): Promise<DescribeDataAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataAssetsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a data asset, such as a MaxCompute project, an ApsaraDB RDS database, or an Object Storage Service (OSS) bucket, that you authorize Data Security Center (DSC) to access.
   *
   * @param request DescribeDataLimitDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDataLimitDetailResponse
   */
  async describeDataLimitDetailWithOptions(request: DescribeDataLimitDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataLimitDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataLimitDetail",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataLimitDetailResponse>(await this.callApi(params, req, runtime), new DescribeDataLimitDetailResponse({}));
  }

  /**
   * @summary Queries the details of a data asset, such as a MaxCompute project, an ApsaraDB RDS database, or an Object Storage Service (OSS) bucket, that you authorize Data Security Center (DSC) to access.
   *
   * @param request DescribeDataLimitDetailRequest
   * @return DescribeDataLimitDetailResponse
   */
  async describeDataLimitDetail(request: DescribeDataLimitDetailRequest): Promise<DescribeDataLimitDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataLimitDetailWithOptions(request, runtime);
  }

  /**
   * @summary Queries data assets, such as instances, databases, and Object Storage Service (OSS) buckets, that you authorize Data Security Center (DSC) to scan in a service.
   *
   * @description You can call this operation to query the data assets that are authorized to be scanned. This facilitates resource search and aggregation.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeDataLimitSetRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDataLimitSetResponse
   */
  async describeDataLimitSetWithOptions(request: DescribeDataLimitSetRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataLimitSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataLimitSet",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataLimitSetResponse>(await this.callApi(params, req, runtime), new DescribeDataLimitSetResponse({}));
  }

  /**
   * @summary Queries data assets, such as instances, databases, and Object Storage Service (OSS) buckets, that you authorize Data Security Center (DSC) to scan in a service.
   *
   * @description You can call this operation to query the data assets that are authorized to be scanned. This facilitates resource search and aggregation.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeDataLimitSetRequest
   * @return DescribeDataLimitSetResponse
   */
  async describeDataLimitSet(request: DescribeDataLimitSetRequest): Promise<DescribeDataLimitSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataLimitSetWithOptions(request, runtime);
  }

  /**
   * @summary Queries the data assets such as instances, databases, or buckets that Data Security Center (DSC) is authorized to access.
   *
   * @param request DescribeDataLimitsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDataLimitsResponse
   */
  async describeDataLimitsWithOptions(request: DescribeDataLimitsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataLimitsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!Util.isUnset(request.checkStatus)) {
      query["CheckStatus"] = request.checkStatus;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.datamaskStatus)) {
      query["DatamaskStatus"] = request.datamaskStatus;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberAccount)) {
      query["MemberAccount"] = request.memberAccount;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataLimits",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataLimitsResponse>(await this.callApi(params, req, runtime), new DescribeDataLimitsResponse({}));
  }

  /**
   * @summary Queries the data assets such as instances, databases, or buckets that Data Security Center (DSC) is authorized to access.
   *
   * @param request DescribeDataLimitsRequest
   * @return DescribeDataLimitsResponse
   */
  async describeDataLimits(request: DescribeDataLimitsRequest): Promise<DescribeDataLimitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataLimitsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the execution information about a de-identification task.
   *
   * @description You can call this operation to query the execution information of a static de-identification task, including the status and progress.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeDataMaskingRunHistoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDataMaskingRunHistoryResponse
   */
  async describeDataMaskingRunHistoryWithOptions(request: DescribeDataMaskingRunHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataMaskingRunHistoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dstType)) {
      query["DstType"] = request.dstType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.mainProcessId)) {
      query["MainProcessId"] = request.mainProcessId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.srcTableName)) {
      query["SrcTableName"] = request.srcTableName;
    }

    if (!Util.isUnset(request.srcType)) {
      query["SrcType"] = request.srcType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataMaskingRunHistory",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataMaskingRunHistoryResponse>(await this.callApi(params, req, runtime), new DescribeDataMaskingRunHistoryResponse({}));
  }

  /**
   * @summary Queries the execution information about a de-identification task.
   *
   * @description You can call this operation to query the execution information of a static de-identification task, including the status and progress.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeDataMaskingRunHistoryRequest
   * @return DescribeDataMaskingRunHistoryResponse
   */
  async describeDataMaskingRunHistory(request: DescribeDataMaskingRunHistoryRequest): Promise<DescribeDataMaskingRunHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataMaskingRunHistoryWithOptions(request, runtime);
  }

  /**
   * @summary Queries de-identification tasks.
   *
   * @description You can call this operation to query static de-identification tasks. This facilitates task queries and management.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeDataMaskingTasksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDataMaskingTasksResponse
   */
  async describeDataMaskingTasksWithOptions(request: DescribeDataMaskingTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataMaskingTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dstType)) {
      query["DstType"] = request.dstType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataMaskingTasks",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataMaskingTasksResponse>(await this.callApi(params, req, runtime), new DescribeDataMaskingTasksResponse({}));
  }

  /**
   * @summary Queries de-identification tasks.
   *
   * @description You can call this operation to query static de-identification tasks. This facilitates task queries and management.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeDataMaskingTasksRequest
   * @return DescribeDataMaskingTasksResponse
   */
  async describeDataMaskingTasks(request: DescribeDataMaskingTasksRequest): Promise<DescribeDataMaskingTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataMaskingTasksWithOptions(request, runtime);
  }

  /**
   * @summary 查看数据对象列详情
   *
   * @param request DescribeDataObjectColumnDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDataObjectColumnDetailResponse
   */
  async describeDataObjectColumnDetailWithOptions(request: DescribeDataObjectColumnDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataObjectColumnDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataObjectColumnDetail",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataObjectColumnDetailResponse>(await this.callApi(params, req, runtime), new DescribeDataObjectColumnDetailResponse({}));
  }

  /**
   * @summary 查看数据对象列详情
   *
   * @param request DescribeDataObjectColumnDetailRequest
   * @return DescribeDataObjectColumnDetailResponse
   */
  async describeDataObjectColumnDetail(request: DescribeDataObjectColumnDetailRequest): Promise<DescribeDataObjectColumnDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataObjectColumnDetailWithOptions(request, runtime);
  }

  /**
   * @summary 查看数据对象列详情V2
   *
   * @param request DescribeDataObjectColumnDetailV2Request
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDataObjectColumnDetailV2Response
   */
  async describeDataObjectColumnDetailV2WithOptions(request: DescribeDataObjectColumnDetailV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeDataObjectColumnDetailV2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataObjectColumnDetailV2",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataObjectColumnDetailV2Response>(await this.callApi(params, req, runtime), new DescribeDataObjectColumnDetailV2Response({}));
  }

  /**
   * @summary 查看数据对象列详情V2
   *
   * @param request DescribeDataObjectColumnDetailV2Request
   * @return DescribeDataObjectColumnDetailV2Response
   */
  async describeDataObjectColumnDetailV2(request: DescribeDataObjectColumnDetailV2Request): Promise<DescribeDataObjectColumnDetailV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataObjectColumnDetailV2WithOptions(request, runtime);
  }

  /**
   * @summary 分页查询数据目录对象
   *
   * @param request DescribeDataObjectsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDataObjectsResponse
   */
  async describeDataObjectsWithOptions(request: DescribeDataObjectsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataObjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.fileCategoryCode)) {
      query["FileCategoryCode"] = request.fileCategoryCode;
    }

    if (!Util.isUnset(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberAccount)) {
      query["MemberAccount"] = request.memberAccount;
    }

    if (!Util.isUnset(request.modelIds)) {
      query["ModelIds"] = request.modelIds;
    }

    if (!Util.isUnset(request.modelTagIds)) {
      query["ModelTagIds"] = request.modelTagIds;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentCategoryIds)) {
      query["ParentCategoryIds"] = request.parentCategoryIds;
    }

    if (!Util.isUnset(request.productIds)) {
      query["ProductIds"] = request.productIds;
    }

    if (!Util.isUnset(request.queryName)) {
      query["QueryName"] = request.queryName;
    }

    if (!Util.isUnset(request.riskLevels)) {
      query["RiskLevels"] = request.riskLevels;
    }

    if (!Util.isUnset(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataObjects",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataObjectsResponse>(await this.callApi(params, req, runtime), new DescribeDataObjectsResponse({}));
  }

  /**
   * @summary 分页查询数据目录对象
   *
   * @param request DescribeDataObjectsRequest
   * @return DescribeDataObjectsResponse
   */
  async describeDataObjects(request: DescribeDataObjectsRequest): Promise<DescribeDataObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataObjectsWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDocTypesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDocTypesResponse
   */
  async describeDocTypesWithOptions(request: DescribeDocTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDocTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDocTypes",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDocTypesResponse>(await this.callApi(params, req, runtime), new DescribeDocTypesResponse({}));
  }

  /**
   * @param request DescribeDocTypesRequest
   * @return DescribeDocTypesResponse
   */
  async describeDocTypes(request: DescribeDocTypesRequest): Promise<DescribeDocTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDocTypesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of an anomalous event. The details include the time when the anomalous event occurred, and the description and handling status of the anomalous event.
   *
   * @param request DescribeEventDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeEventDetailResponse
   */
  async describeEventDetailWithOptions(request: DescribeEventDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventDetail",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventDetailResponse>(await this.callApi(params, req, runtime), new DescribeEventDetailResponse({}));
  }

  /**
   * @summary Queries the details of an anomalous event. The details include the time when the anomalous event occurred, and the description and handling status of the anomalous event.
   *
   * @param request DescribeEventDetailRequest
   * @return DescribeEventDetailResponse
   */
  async describeEventDetail(request: DescribeEventDetailRequest): Promise<DescribeEventDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventDetailWithOptions(request, runtime);
  }

  /**
   * @summary Queries the types of anomalous events.
   *
   * @param request DescribeEventTypesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeEventTypesResponse
   */
  async describeEventTypesWithOptions(request: DescribeEventTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.parentTypeId)) {
      query["ParentTypeId"] = request.parentTypeId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventTypes",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventTypesResponse>(await this.callApi(params, req, runtime), new DescribeEventTypesResponse({}));
  }

  /**
   * @summary Queries the types of anomalous events.
   *
   * @param request DescribeEventTypesRequest
   * @return DescribeEventTypesResponse
   */
  async describeEventTypes(request: DescribeEventTypesRequest): Promise<DescribeEventTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventTypesWithOptions(request, runtime);
  }

  /**
   * @summary Queries anomalous events.
   *
   * @description You can call this operation to query anomalous events that may involve data leaks. This helps you search for and handle anomalous events.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeEventsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeEventsResponse
   */
  async describeEventsWithOptions(request: DescribeEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dealUserId)) {
      query["DealUserId"] = request.dealUserId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.subTypeCode)) {
      query["SubTypeCode"] = request.subTypeCode;
    }

    if (!Util.isUnset(request.targetProductCode)) {
      query["TargetProductCode"] = request.targetProductCode;
    }

    if (!Util.isUnset(request.typeCode)) {
      query["TypeCode"] = request.typeCode;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.warnLevel)) {
      query["WarnLevel"] = request.warnLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEvents",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventsResponse>(await this.callApi(params, req, runtime), new DescribeEventsResponse({}));
  }

  /**
   * @summary Queries anomalous events.
   *
   * @description You can call this operation to query anomalous events that may involve data leaks. This helps you search for and handle anomalous events.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeEventsRequest
   * @return DescribeEventsResponse
   */
  async describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventsWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of data assets.
   *
   * @description You can query a list of unauthorized or authorized data assets based on the value of AuthStatus.
   * This operation is no longer used for the KMS console of the new version.
   * # [](#qps-)QPS limits
   * This operation can be called up to 10 times per second for each Alibaba Cloud account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeInstanceSourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceSourcesResponse
   */
  async describeInstanceSourcesWithOptions(request: DescribeInstanceSourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!Util.isUnset(request.authStatus)) {
      query["AuthStatus"] = request.authStatus;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.searchType)) {
      query["SearchType"] = request.searchType;
    }

    if (!Util.isUnset(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceSources",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceSourcesResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSourcesResponse({}));
  }

  /**
   * @summary Queries a list of data assets.
   *
   * @description You can query a list of unauthorized or authorized data assets based on the value of AuthStatus.
   * This operation is no longer used for the KMS console of the new version.
   * # [](#qps-)QPS limits
   * This operation can be called up to 10 times per second for each Alibaba Cloud account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeInstanceSourcesRequest
   * @return DescribeInstanceSourcesResponse
   */
  async describeInstanceSources(request: DescribeInstanceSourcesRequest): Promise<DescribeInstanceSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSourcesWithOptions(request, runtime);
  }

  /**
   * @summary Queries data assets such as MaxCompute, ApsaraDB RDS, and Object Storage Service (OSS) that you authorize Data Security Center (DSC) to access.
   *
   * @description When you call the DescribeInstances operation, you can specify parameters such as Name and RiskLevelId to query data assets that meet filter conditions.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstances",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstancesResponse>(await this.callApi(params, req, runtime), new DescribeInstancesResponse({}));
  }

  /**
   * @summary Queries data assets such as MaxCompute, ApsaraDB RDS, and Object Storage Service (OSS) that you authorize Data Security Center (DSC) to access.
   *
   * @description When you call the DescribeInstances operation, you can specify parameters such as Name and RiskLevelId to query data assets that meet filter conditions.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeInstancesRequest
   * @return DescribeInstancesResponse
   */
  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of an Object Storage Service (OSS) object that Data Security Center (DSC) is authorized to access.
   *
   * @description You can call this operation to query the details of an Object Storage Service (OSS) object. This helps you locate sensitive data detected in OSS.
   * ## [](#)Precautions
   * The DescribeOssObjectDetail operation is chagned to DescribeOssObjectDetailV2. We recommend that you call the DescribeOssObjectDetailV2 operation when you develop your applications.
   * ## [](#qps)Limits
   * Each Alibaba Cloud account can call this operation up to 10 times per second. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeOssObjectDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeOssObjectDetailResponse
   */
  async describeOssObjectDetailWithOptions(request: DescribeOssObjectDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssObjectDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOssObjectDetail",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOssObjectDetailResponse>(await this.callApi(params, req, runtime), new DescribeOssObjectDetailResponse({}));
  }

  /**
   * @summary Queries the details of an Object Storage Service (OSS) object that Data Security Center (DSC) is authorized to access.
   *
   * @description You can call this operation to query the details of an Object Storage Service (OSS) object. This helps you locate sensitive data detected in OSS.
   * ## [](#)Precautions
   * The DescribeOssObjectDetail operation is chagned to DescribeOssObjectDetailV2. We recommend that you call the DescribeOssObjectDetailV2 operation when you develop your applications.
   * ## [](#qps)Limits
   * Each Alibaba Cloud account can call this operation up to 10 times per second. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeOssObjectDetailRequest
   * @return DescribeOssObjectDetailResponse
   */
  async describeOssObjectDetail(request: DescribeOssObjectDetailRequest): Promise<DescribeOssObjectDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssObjectDetailWithOptions(request, runtime);
  }

  /**
   * @summary 调用本接口查询数据安全中心连接授权的OSS的单个存储对象的详细信息
   *
   * @param request DescribeOssObjectDetailV2Request
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeOssObjectDetailV2Response
   */
  async describeOssObjectDetailV2WithOptions(request: DescribeOssObjectDetailV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeOssObjectDetailV2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOssObjectDetailV2",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOssObjectDetailV2Response>(await this.callApi(params, req, runtime), new DescribeOssObjectDetailV2Response({}));
  }

  /**
   * @summary 调用本接口查询数据安全中心连接授权的OSS的单个存储对象的详细信息
   *
   * @param request DescribeOssObjectDetailV2Request
   * @return DescribeOssObjectDetailV2Response
   */
  async describeOssObjectDetailV2(request: DescribeOssObjectDetailV2Request): Promise<DescribeOssObjectDetailV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssObjectDetailV2WithOptions(request, runtime);
  }

  /**
   * @summary Queries Object Storage Service (OSS) objects that you authorize Data Security Center (DSC) to access.
   *
   * @param request DescribeOssObjectsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeOssObjectsResponse
   */
  async describeOssObjectsWithOptions(request: DescribeOssObjectsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssObjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.fileCategoryCode)) {
      query["FileCategoryCode"] = request.fileCategoryCode;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lastScanTimeEnd)) {
      query["LastScanTimeEnd"] = request.lastScanTimeEnd;
    }

    if (!Util.isUnset(request.lastScanTimeStart)) {
      query["LastScanTimeStart"] = request.lastScanTimeStart;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOssObjects",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOssObjectsResponse>(await this.callApi(params, req, runtime), new DescribeOssObjectsResponse({}));
  }

  /**
   * @summary Queries Object Storage Service (OSS) objects that you authorize Data Security Center (DSC) to access.
   *
   * @param request DescribeOssObjectsRequest
   * @return DescribeOssObjectsResponse
   */
  async describeOssObjects(request: DescribeOssObjectsRequest): Promise<DescribeOssObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssObjectsWithOptions(request, runtime);
  }

  /**
   * @summary Queries information about the MaxCompute packages that Data Security Center (DSC) is authorized to access. The information includes the names of MaxCompute packages, the accounts of MaxCompute package owners, and the sensitivity levels of MaxCompute packages.
   *
   * @description You can call this operation to query MaxCompute packages that are scanned by DSC. This helps you search for MaxCompute packages and view the summary of MaxCompute packages.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribePackagesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePackagesResponse
   */
  async describePackagesWithOptions(request: DescribePackagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePackagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePackages",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePackagesResponse>(await this.callApi(params, req, runtime), new DescribePackagesResponse({}));
  }

  /**
   * @summary Queries information about the MaxCompute packages that Data Security Center (DSC) is authorized to access. The information includes the names of MaxCompute packages, the accounts of MaxCompute package owners, and the sensitivity levels of MaxCompute packages.
   *
   * @description You can call this operation to query MaxCompute packages that are scanned by DSC. This helps you search for MaxCompute packages and view the summary of MaxCompute packages.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribePackagesRequest
   * @return DescribePackagesResponse
   */
  async describePackages(request: DescribePackagesRequest): Promise<DescribePackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackagesWithOptions(request, runtime);
  }

  /**
   * @summary 获取一级授权列表
   *
   * @param request DescribeParentInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeParentInstanceResponse
   */
  async describeParentInstanceWithOptions(request: DescribeParentInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParentInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authStatus)) {
      query["AuthStatus"] = request.authStatus;
    }

    if (!Util.isUnset(request.checkStatus)) {
      query["CheckStatus"] = request.checkStatus;
    }

    if (!Util.isUnset(request.clusterStatus)) {
      query["ClusterStatus"] = request.clusterStatus;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberAccount)) {
      query["MemberAccount"] = request.memberAccount;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeParentInstance",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeParentInstanceResponse>(await this.callApi(params, req, runtime), new DescribeParentInstanceResponse({}));
  }

  /**
   * @summary 获取一级授权列表
   *
   * @param request DescribeParentInstanceRequest
   * @return DescribeParentInstanceResponse
   */
  async describeParentInstance(request: DescribeParentInstanceRequest): Promise<DescribeParentInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParentInstanceWithOptions(request, runtime);
  }

  /**
   * @summary Queries the sensitivity levels that are defined in a rule template provided by Data Security Center (DSC).
   *
   * @description You can call this operation to query the sensitivity levels that are defined in the current rule template provided by DSC. This helps you learn about the number of times that each sensitivity level is referenced in the rule template and the highest sensitivity level.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeRiskLevelsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRiskLevelsResponse
   */
  async describeRiskLevelsWithOptions(request: DescribeRiskLevelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskLevelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskLevels",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskLevelsResponse>(await this.callApi(params, req, runtime), new DescribeRiskLevelsResponse({}));
  }

  /**
   * @summary Queries the sensitivity levels that are defined in a rule template provided by Data Security Center (DSC).
   *
   * @description You can call this operation to query the sensitivity levels that are defined in the current rule template provided by DSC. This helps you learn about the number of times that each sensitivity level is referenced in the rule template and the highest sensitivity level.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeRiskLevelsRequest
   * @return DescribeRiskLevelsResponse
   */
  async describeRiskLevels(request: DescribeRiskLevelsRequest): Promise<DescribeRiskLevelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskLevelsWithOptions(request, runtime);
  }

  /**
   * @summary Queries sensitive data detection rules.
   *
   * @param request DescribeRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRulesResponse
   */
  async describeRulesWithOptions(request: DescribeRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.contentCategory)) {
      query["ContentCategory"] = request.contentCategory;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.customType)) {
      query["CustomType"] = request.customType;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.keywordCompatible)) {
      query["KeywordCompatible"] = request.keywordCompatible;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.supportForm)) {
      query["SupportForm"] = request.supportForm;
    }

    if (!Util.isUnset(request.warnLevel)) {
      query["WarnLevel"] = request.warnLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRules",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRulesResponse>(await this.callApi(params, req, runtime), new DescribeRulesResponse({}));
  }

  /**
   * @summary Queries sensitive data detection rules.
   *
   * @param request DescribeRulesRequest
   * @return DescribeRulesResponse
   */
  async describeRules(request: DescribeRulesRequest): Promise<DescribeRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRulesWithOptions(request, runtime);
  }

  /**
   * @summary Queries tables in data assets, such as MaxCompute projects and ApsaraDB RDS instances, that you authorize Data Security Center (DSC) to access.
   *
   * @description When you call the DescribeTables operation to query tables, you can specify parameters such as Name and RiskLevelId to filter tables.
   * # Limits
   * You can send up to 10 requests per second to call this operation by using your Alibaba Cloud account. If you send excessive requests, throttling is implemented, and your business may be affected.
   *
   * @param request DescribeTablesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTablesResponse
   */
  async describeTablesWithOptions(request: DescribeTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.packageId)) {
      query["PackageId"] = request.packageId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTables",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTablesResponse>(await this.callApi(params, req, runtime), new DescribeTablesResponse({}));
  }

  /**
   * @summary Queries tables in data assets, such as MaxCompute projects and ApsaraDB RDS instances, that you authorize Data Security Center (DSC) to access.
   *
   * @description When you call the DescribeTables operation to query tables, you can specify parameters such as Name and RiskLevelId to filter tables.
   * # Limits
   * You can send up to 10 requests per second to call this operation by using your Alibaba Cloud account. If you send excessive requests, throttling is implemented, and your business may be affected.
   *
   * @param request DescribeTablesRequest
   * @return DescribeTablesResponse
   */
  async describeTables(request: DescribeTablesRequest): Promise<DescribeTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  /**
   * @param request DescribeTemplateAllRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTemplateAllRulesResponse
   */
  async describeTemplateAllRulesWithOptions(request: DescribeTemplateAllRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTemplateAllRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTemplateAllRules",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTemplateAllRulesResponse>(await this.callApi(params, req, runtime), new DescribeTemplateAllRulesResponse({}));
  }

  /**
   * @param request DescribeTemplateAllRulesRequest
   * @return DescribeTemplateAllRulesResponse
   */
  async describeTemplateAllRules(request: DescribeTemplateAllRulesRequest): Promise<DescribeTemplateAllRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTemplateAllRulesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about an account.
   *
   * @description You can call this operation to query the information about the current account. This helps you get familiar with your account that accesses Data Security Center (DSC).
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeUserStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeUserStatusResponse
   */
  async describeUserStatusWithOptions(request: DescribeUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserStatus",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserStatusResponse>(await this.callApi(params, req, runtime), new DescribeUserStatusResponse({}));
  }

  /**
   * @summary Queries the information about an account.
   *
   * @description You can call this operation to query the information about the current account. This helps you get familiar with your account that accesses Data Security Center (DSC).
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeUserStatusRequest
   * @return DescribeUserStatusResponse
   */
  async describeUserStatus(request: DescribeUserStatusRequest): Promise<DescribeUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserStatusWithOptions(request, runtime);
  }

  /**
   * @summary Disables a configuration item. After you disable a configuration item, you can call the CreateConfig operation to enable the configuration item by specifying the code of the configuration item for the Code parameter in the request.
   *
   * @description You can call this operation to disable a configuration item based on the code of the configuration item. This helps you modify configurations at the earliest opportunity.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DisableUserConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableUserConfigResponse
   */
  async disableUserConfigWithOptions(request: DisableUserConfigRequest, runtime: $Util.RuntimeOptions): Promise<DisableUserConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableUserConfig",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableUserConfigResponse>(await this.callApi(params, req, runtime), new DisableUserConfigResponse({}));
  }

  /**
   * @summary Disables a configuration item. After you disable a configuration item, you can call the CreateConfig operation to enable the configuration item by specifying the code of the configuration item for the Code parameter in the request.
   *
   * @description You can call this operation to disable a configuration item based on the code of the configuration item. This helps you modify configurations at the earliest opportunity.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DisableUserConfigRequest
   * @return DisableUserConfigResponse
   */
  async disableUserConfig(request: DisableUserConfigRequest): Promise<DisableUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableUserConfigWithOptions(request, runtime);
  }

  /**
   * @summary Dynamically de-identifies sensitive data.
   *
   * @param request ExecDatamaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ExecDatamaskResponse
   */
  async execDatamaskWithOptions(request: ExecDatamaskRequest, runtime: $Util.RuntimeOptions): Promise<ExecDatamaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecDatamask",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecDatamaskResponse>(await this.callApi(params, req, runtime), new ExecDatamaskResponse({}));
  }

  /**
   * @summary Dynamically de-identifies sensitive data.
   *
   * @param request ExecDatamaskRequest
   * @return ExecDatamaskResponse
   */
  async execDatamask(request: ExecDatamaskRequest): Promise<ExecDatamaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.execDatamaskWithOptions(request, runtime);
  }

  /**
   * @summary Triggers a de-identification task.
   *
   * @param request ManualTriggerMaskingProcessRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ManualTriggerMaskingProcessResponse
   */
  async manualTriggerMaskingProcessWithOptions(request: ManualTriggerMaskingProcessRequest, runtime: $Util.RuntimeOptions): Promise<ManualTriggerMaskingProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ManualTriggerMaskingProcess",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ManualTriggerMaskingProcessResponse>(await this.callApi(params, req, runtime), new ManualTriggerMaskingProcessResponse({}));
  }

  /**
   * @summary Triggers a de-identification task.
   *
   * @param request ManualTriggerMaskingProcessRequest
   * @return ManualTriggerMaskingProcessResponse
   */
  async manualTriggerMaskingProcess(request: ManualTriggerMaskingProcessRequest): Promise<ManualTriggerMaskingProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.manualTriggerMaskingProcessWithOptions(request, runtime);
  }

  /**
   * @summary Modifies configuration items for a data asset that you authorize Data Security Center (DSC) to access.
   *
   * @param request ModifyDataLimitRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDataLimitResponse
   */
  async modifyDataLimitWithOptions(request: ModifyDataLimitRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDataLimitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!Util.isUnset(request.autoScan)) {
      query["AutoScan"] = request.autoScan;
    }

    if (!Util.isUnset(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.logStoreDay)) {
      query["LogStoreDay"] = request.logStoreDay;
    }

    if (!Util.isUnset(request.modifyPassword)) {
      query["ModifyPassword"] = request.modifyPassword;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.samplingSize)) {
      query["SamplingSize"] = request.samplingSize;
    }

    if (!Util.isUnset(request.securityGroupIdList)) {
      query["SecurityGroupIdList"] = request.securityGroupIdList;
    }

    if (!Util.isUnset(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.vSwitchIdList)) {
      query["VSwitchIdList"] = request.vSwitchIdList;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDataLimit",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDataLimitResponse>(await this.callApi(params, req, runtime), new ModifyDataLimitResponse({}));
  }

  /**
   * @summary Modifies configuration items for a data asset that you authorize Data Security Center (DSC) to access.
   *
   * @param request ModifyDataLimitRequest
   * @return ModifyDataLimitResponse
   */
  async modifyDataLimit(request: ModifyDataLimitRequest): Promise<ModifyDataLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDataLimitWithOptions(request, runtime);
  }

  /**
   * @summary Changes the sensitivity levels of sensitive data. You can change the default sensitivity levels of data that cannot be classified as sensitive or insensitive, and the sensitivity levels of data that can be classified as sensitive.
   *
   * @description You can call this operation to modify the sensitivity levels of data. This helps you manage the sensitivity levels.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ModifyDefaultLevelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDefaultLevelResponse
   */
  async modifyDefaultLevelWithOptions(request: ModifyDefaultLevelRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefaultLevelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defaultId)) {
      query["DefaultId"] = request.defaultId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sensitiveIds)) {
      query["SensitiveIds"] = request.sensitiveIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefaultLevel",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefaultLevelResponse>(await this.callApi(params, req, runtime), new ModifyDefaultLevelResponse({}));
  }

  /**
   * @summary Changes the sensitivity levels of sensitive data. You can change the default sensitivity levels of data that cannot be classified as sensitive or insensitive, and the sensitivity levels of data that can be classified as sensitive.
   *
   * @description You can call this operation to modify the sensitivity levels of data. This helps you manage the sensitivity levels.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ModifyDefaultLevelRequest
   * @return ModifyDefaultLevelResponse
   */
  async modifyDefaultLevel(request: ModifyDefaultLevelRequest): Promise<ModifyDefaultLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefaultLevelWithOptions(request, runtime);
  }

  /**
   * @summary Handles an anomalous event.
   *
   * @description You can call this operation to handle anomalous events that involve data leaks. This helps protect your data assets at the earliest opportunity.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ModifyEventStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyEventStatusResponse
   */
  async modifyEventStatusWithOptions(request: ModifyEventStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEventStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backed)) {
      query["Backed"] = request.backed;
    }

    if (!Util.isUnset(request.dealReason)) {
      query["DealReason"] = request.dealReason;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyEventStatus",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyEventStatusResponse>(await this.callApi(params, req, runtime), new ModifyEventStatusResponse({}));
  }

  /**
   * @summary Handles an anomalous event.
   *
   * @description You can call this operation to handle anomalous events that involve data leaks. This helps protect your data assets at the earliest opportunity.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ModifyEventStatusRequest
   * @return ModifyEventStatusResponse
   */
  async modifyEventStatus(request: ModifyEventStatusRequest): Promise<ModifyEventStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEventStatusWithOptions(request, runtime);
  }

  /**
   * @summary Enables the detection of anomalous events of subtypes.
   *
   * @param request ModifyEventTypeStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyEventTypeStatusResponse
   */
  async modifyEventTypeStatusWithOptions(request: ModifyEventTypeStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEventTypeStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.subTypeIds)) {
      query["SubTypeIds"] = request.subTypeIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyEventTypeStatus",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyEventTypeStatusResponse>(await this.callApi(params, req, runtime), new ModifyEventTypeStatusResponse({}));
  }

  /**
   * @summary Enables the detection of anomalous events of subtypes.
   *
   * @param request ModifyEventTypeStatusRequest
   * @return ModifyEventTypeStatusResponse
   */
  async modifyEventTypeStatus(request: ModifyEventTypeStatusRequest): Promise<ModifyEventTypeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEventTypeStatusWithOptions(request, runtime);
  }

  /**
   * @summary Enables or disables the report task.
   *
   * @description You can call this operation to enable or disable the report task. After you activate Data Security Center (DSC), the report task is enabled by default. After you disable the report task, you cannot view statistics that are newly generated in the Report Center module, on the Overview page of the Cloud Native Data Audit module, and in the Data security lab module. Existing statistics are not affected.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ModifyReportTaskStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyReportTaskStatusResponse
   */
  async modifyReportTaskStatusWithOptions(request: ModifyReportTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyReportTaskStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.reportTaskStatus)) {
      query["ReportTaskStatus"] = request.reportTaskStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyReportTaskStatus",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyReportTaskStatusResponse>(await this.callApi(params, req, runtime), new ModifyReportTaskStatusResponse({}));
  }

  /**
   * @summary Enables or disables the report task.
   *
   * @description You can call this operation to enable or disable the report task. After you activate Data Security Center (DSC), the report task is enabled by default. After you disable the report task, you cannot view statistics that are newly generated in the Report Center module, on the Overview page of the Cloud Native Data Audit module, and in the Data security lab module. Existing statistics are not affected.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ModifyReportTaskStatusRequest
   * @return ModifyReportTaskStatusResponse
   */
  async modifyReportTaskStatus(request: ModifyReportTaskStatusRequest): Promise<ModifyReportTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyReportTaskStatusWithOptions(request, runtime);
  }

  /**
   * @summary Modifies a custom sensitive data detection rule in Data Security Center (DSC).
   *
   * @description When you call this operation, you must configure request parameters to specify the rule name, rule ID, and rule content.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ModifyRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyRuleResponse
   */
  async modifyRuleWithOptions(request: ModifyRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.supportForm)) {
      query["SupportForm"] = request.supportForm;
    }

    if (!Util.isUnset(request.warnLevel)) {
      query["WarnLevel"] = request.warnLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRule",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyRuleResponse>(await this.callApi(params, req, runtime), new ModifyRuleResponse({}));
  }

  /**
   * @summary Modifies a custom sensitive data detection rule in Data Security Center (DSC).
   *
   * @description When you call this operation, you must configure request parameters to specify the rule name, rule ID, and rule content.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ModifyRuleRequest
   * @return ModifyRuleResponse
   */
  async modifyRule(request: ModifyRuleRequest): Promise<ModifyRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRuleWithOptions(request, runtime);
  }

  /**
   * @summary Enables or disables a sensitive data detection rule.
   *
   * @param request ModifyRuleStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyRuleStatusResponse
   */
  async modifyRuleStatusWithOptions(request: ModifyRuleStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRuleStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRuleStatus",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyRuleStatusResponse>(await this.callApi(params, req, runtime), new ModifyRuleStatusResponse({}));
  }

  /**
   * @summary Enables or disables a sensitive data detection rule.
   *
   * @param request ModifyRuleStatusRequest
   * @return ModifyRuleStatusResponse
   */
  async modifyRuleStatus(request: ModifyRuleStatusRequest): Promise<ModifyRuleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRuleStatusWithOptions(request, runtime);
  }

  /**
   * @summary Stops a de-identification task. After you stop a de-identification task, you can resume the task by calling the ManualTriggerMaskingProcess operation.
   *
   * @description You can call this operation to stop a de-identification task that is running. For example, you can stop a de-identification task that is used to de-identify specific data.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request StopMaskingProcessRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopMaskingProcessResponse
   */
  async stopMaskingProcessWithOptions(request: StopMaskingProcessRequest, runtime: $Util.RuntimeOptions): Promise<StopMaskingProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopMaskingProcess",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopMaskingProcessResponse>(await this.callApi(params, req, runtime), new StopMaskingProcessResponse({}));
  }

  /**
   * @summary Stops a de-identification task. After you stop a de-identification task, you can resume the task by calling the ManualTriggerMaskingProcess operation.
   *
   * @description You can call this operation to stop a de-identification task that is running. For example, you can stop a de-identification task that is used to de-identify specific data.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request StopMaskingProcessRequest
   * @return StopMaskingProcessResponse
   */
  async stopMaskingProcess(request: StopMaskingProcessRequest): Promise<StopMaskingProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMaskingProcessWithOptions(request, runtime);
  }

}
