// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the common configuration item. Valid values:
   * 
   * *   **access_failed_cnt**: the maximum number of access attempts allowed when Data Security Center (DSC) fails to access an unauthorized resource.
   * *   **access_permission_exprie_max_days**: the maximum idle period allowed for access permissions before an alert is triggered.
   * *   **log_datasize_avg_days**: the minimum percentage of the volume of logs of a specific type generated on the current day to the average volume of logs generated in the previous 10 days before an alert is triggered.
   * 
   * @example
   * access_failed_cnt
   */
  code?: string;
  /**
   * @remarks
   * The description of the common configuration item.
   * 
   * @example
   * Maximum number of access attempts allowed when DSC fails to access an unauthorized resource: 10
   */
  description?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 39.170.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The value of the common configuration item. The meaning of this parameter varies with the value of the Code parameter.
   * 
   * *   If you set the Code parameter to **access_failed_cnt**, the Value parameter specifies the maximum number of access attempts allowed when DSC fails to access an unauthorized resource.
   * *   If you set the Code parameter to **access_permission_exprie_max_days**, the Value parameter specifies the maximum idle period allowed for access permissions before an alert is triggered.
   * *   If you set the Code parameter to **log_datasize_avg_days**, the Value parameter specifies the minimum percentage of the volume of logs of a specific type generated on the current day to the average amount of logs generated in the previous 10 days before an alert is triggered.
   * 
   * @example
   * 30
   */
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
  /**
   * @remarks
   * The ID of the common alert configuration.
   * 
   * @example
   * 12300
   */
  id?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 208B016D-4CB9-4A85-96A5-0B8ED1EBF271
   */
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
  /**
   * @remarks
   * Specifies whether to enable the security audit feature. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Specifies whether to automatically trigger a re-scan after a rule is modified. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * > When a re-scan is triggered, DSC scans all data in your data asset.
   * 
   * @example
   * 1
   */
  autoScan?: number;
  /**
   * @remarks
   * The permissions. Valid values:
   * 
   * *   **ReadOnly**: read-only permissions
   * *   **ReadWrite**: read and write permissions
   * 
   * @example
   * ReadOnly
   */
  certificatePermission?: string;
  /**
   * @remarks
   * Specifies whether to enable sensitive data detection. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * > If this is your first time to authorize DSC to access the data asset, the default value is 1. If this is not your first time to authorize DSC to access the data asset, the default value is the same as that used in the last authorization operation. Both 1 and 0 are possible.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The database engine that is run by the instance. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * Specifies whether to enable anomalous event detection. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes (default)
   * 
   * @example
   * 1
   */
  eventStatus?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  instantlyScan?: boolean;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The retention period of raw logs after you enable the security audit feature. Unit: days. Valid values:
   * 
   * *   **30**
   * *   **90**
   * *   **180**
   * *   **365**
   * 
   * @example
   * 30
   */
  logStoreDay?: number;
  /**
   * @remarks
   * Specifies whether to enable optical character recognition (OCR). Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  ocrStatus?: number;
  /**
   * @remarks
   * The name of the data asset.
   * 
   * @example
   * test-11**
   */
  parentId?: string;
  /**
   * @remarks
   * The password that is used to access the database.
   * 
   * @example
   * passwd
   */
  password?: string;
  /**
   * @remarks
   * The port that is used to connect to the database.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The type of service to which the data asset belongs. Valid values:
   * 
   * *   **1** :MaxCompute
   * *   **2**: Object Storage Service (OSS)
   * *   **3**: AnalyticDB for MySQL
   * *   **4** :Tablestore
   * *   **5**: ApsaraDB RDS
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * The number of sensitive data samples that are collected after sensitive data detection is enabled. Valid values:
   * 
   * *   **0**
   * *   **5**
   * *   **10**
   * 
   * @example
   * 0
   */
  samplingSize?: number;
  /**
   * @remarks
   * The region in which the data asset resides. Valid values:
   * 
   * *   **cn-beijing**: China (Beijing).
   * *   **cn-zhangjiakou**: China (Zhangjiakou)
   * *   **cn-huhehaote**: China (Hohhot)
   * *   **cn-hangzhou**: China (Hangzhou)
   * *   **cn-shanghai**: China (Shanghai)
   * *   **cn-shenzhen**: China (Shenzhen)
   * *   **cn-hongkong**: China (Hong Kong)
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 39.170.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The username that is used to access the database.
   * 
   * @example
   * yhm
   */
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
      instantlyScan: 'InstantlyScan',
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
      instantlyScan: 'boolean',
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
  /**
   * @remarks
   * The ID of the data asset.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7C3AC882-E5A8-4855-BE77-B6837B695EF1
   */
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
  /**
   * @remarks
   * The content type of the sensitive data detection rule. Valid values:
   * 
   * *   **0**: keyword
   * *   **2**: regular expression
   * 
   * @example
   * 0
   */
  category?: number;
  /**
   * @remarks
   * The content of the sensitive data detection rule. You can specify a regular expression or keywords that are used to match sensitive fields or text.
   * 
   * This parameter is required.
   * 
   * @example
   * (?:\\\\D|^)((?:(?:25[0-4]|2[0-4]\\\\d|1\\\\d{2}|[1-9]\\\\d{1})\\\\.)(?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){2}(?:25[0-5]|2[0-4]\\\\d|1[0-9]\\\\d|[1-9]\\\\d|[1-9]))(?:\\\\D|$)
   */
  content?: string;
  /**
   * @remarks
   * The type of the content in the sensitive data detection rule. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates attempts to exploit SQL injections. The value 2 indicates bypass by using SQL injections. The value 3 indicates abuse of stored procedures. The value 4 indicates buffer overflow. The value 5 indicates SQL injections based on errors.
   * 
   * @example
   * 1
   */
  contentCategory?: number;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * ID card
   */
  description?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The match type. Valid values:
   * 
   * *   **1**: rule-based match
   * *   **2**: dictionary-based match
   * 
   * @example
   * 1
   */
  matchType?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-tst
   */
  name?: string;
  /**
   * @remarks
   * The name of the service to which data in the column of the table belongs. Valid values include **MaxCompute**, **OSS**, **ADS**, **OTS**, and **RDS**.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the data asset belongs. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates Object Storage Service (OSS). The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 2
   */
  productId?: number;
  /**
   * @remarks
   * The sensitivity level of the sensitive data that hits the sensitive data detection rule. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The type of the sensitive data detection rule. Valid values:
   * 
   * *   **1**: sensitive data detection rule
   * *   **2**: audit rule
   * *   **3**: anomalous event detection rule
   * *   **99**: custom rule
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 39.170.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The statistical expression.
   * 
   * @example
   * 1
   */
  statExpress?: string;
  /**
   * @remarks
   * Specifies whether to enable the sensitive data detection rule. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the data asset. Valid values:
   * 
   * *   **0**: all data assets
   * *   **1**: structured data asset
   * *   **2**: unstructured data asset
   * 
   * > If you set the parameter to 1 or 2, rules that support all data assets and rules that support the queried data asset type are returned.
   * 
   * @example
   * 1
   */
  supportForm?: number;
  /**
   * @remarks
   * The code of the service to which the sensitive data detection rule is applied. Valid values include **MaxCompute**, **OSS**, **ADS**, **OTS**, and **RDS**.
   * 
   * @example
   * MaxCompute
   */
  target?: string;
  /**
   * @remarks
   * The risk level of the alert that is triggered. Valid values:
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The unique ID of the sensitive data detection rule.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 208B016D-4CB9-4A85-96A5-0B8ED1EBF271
   */
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
  /**
   * @remarks
   * The unique ID of the data asset, such as an instance, a database, and a bucket. You can call the [DescribeDataLimits](~~DescribeDataLimits~~) operation to query the unique ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataLimitId?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The interval between two consecutive custom scan tasks. Unit: days. Valid values: 1 to 2147483648.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  intervalDay?: number;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The data to be scanned in the Object Storage Service (OSS) bucket. Prefix match, suffix match, and regular expression match are supported.
   * 
   * @example
   * /test/test
   */
  ossScanPath?: string;
  /**
   * @remarks
   * The type of the service to which the data assets to be scanned belong. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  resourceType?: number;
  /**
   * @remarks
   * The time when the scan task is executed next time. Unit: hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  runHour?: number;
  /**
   * @remarks
   * The time when the scan task is executed next time. Unit: minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  runMinute?: number;
  /**
   * @remarks
   * The matching rule that specifies the scan scope of the custom scan task. This parameter takes effect only if you set the **ScanRangeContent** parameter. Valid values:
   * 
   * *   **0**: exact match
   * *   **1**: prefix match
   * *   **2**: suffix match
   * *   **3**: regular expression match
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  scanRange?: number;
  /**
   * @remarks
   * The data to be scanned in a structured data asset. Prefix match, suffix match, and regular expression match are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * datamask/
   */
  scanRangeContent?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 39.170.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The name of the scan task.
   * 
   * This parameter is required.
   * 
   * @example
   * scan-test-sample****
   */
  taskName?: string;
  /**
   * @remarks
   * The account that is used to create the scan task.
   * 
   * @example
   * demo
   */
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
  /**
   * @remarks
   * The ID of the custom scan task.
   * 
   * @example
   * 100
   */
  id?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B1F2BB1F-04EC-5D36-B136-B4DE17FD8DE0
   */
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
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 39.170.XX.XX
   */
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
  /**
   * @remarks
   * Indicates whether the service-linked role was created. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  hasPermission?: boolean;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 208B016D-4CB9-4A85-96A5-0B8ED1EBF271
   */
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
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The ID of the data asset.
   * 
   * You can call the DescribeDataLimits operation to query the IDs of data assets. The value of the Id response parameter indicates the ID of a data asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 12033
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 39.170.XX.XX
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7C3AC882-E5A8-4855-BE77-B6837B695EF1
   */
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
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 122300
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values: **zh** and **en**. The value zh indicates Chinese, and the value en indicates English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 39.170.XX.XX
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7C3AC882-E5A8-4855-BE77-B6837B6*****
   */
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
  /**
   * @example
   * 1
   */
  currentPage?: number;
  featureType?: number;
  /**
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: DescribeCategoryTemplateListResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 8491DBFD-48C0-4E11-B6FC-6F38921244A9
   */
  requestId?: string;
  /**
   * @example
   * 12
   */
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
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sensitivity level of the data that is not compliant with the rule. Valid values: **1** to **11**. Default value: **null**.
   * 
   * *   **1**: No sensitive data is detected.
   * *   **2**: specifies the S1 sensitivity level.
   * *   **3**: specifies the S2 sensitivity level.
   * *   **4**: specifies the S3 sensitivity level.
   * *   **5**: specifies the S4 sensitivity level.
   * *   **6**: specifies the S5 sensitivity level.
   * *   **7**: specifies the S6 sensitivity level.
   * *   **8**: specifies the S7 sensitivity level.
   * *   **9**: specifies the S8 sensitivity level.
   * *   **10**: specifies the S9 sensitivity level.
   * *   **11**: specifies the S10 sensitivity level.
   * *   **null**: specifies all preceding sensitivity levels.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The status of the rule. Default value: **null**. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * *   **null**: all states
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of rules.
   */
  items?: DescribeCategoryTemplateRuleListResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 136082B3-B21F-5E9D-B68E-991FFD205D24
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of rules in the template.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  engineType?: string;
  /**
   * @remarks
   * The ID of the instance to which data in the column of the table belongs.
   * 
   * > You can call the [DescribeInstances](~~DescribeRules~~) operation to query the IDs of instances.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the instance to which data in the column of the table belongs.
   * 
   * @example
   * rm-bp17t1htja573l5i8****
   */
  instanceName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  modelTagId?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported.
   * 
   * For example, if you enter **test**, all columns whose names contain **test** are retrieved.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the service to which data in the column of the table belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  productId?: string;
  /**
   * @remarks
   * The sensitivity level of the sensitive data that hits the sensitive data detection rule. Valid values:
   * 
   * *   **1**: N/A
   * *   **2**: S1
   * *   **3**: S2
   * *   **4**: S3
   * *   **5**: S4
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that data in the column of the table hits.
   * 
   * > You can call the [DescribeRules](~~DescribeRules~~) operation to query the IDs of sensitive data detection rules.
   * 
   * @example
   * 11111
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule that data in the column of the table hits.
   * 
   * @example
   * ID card number (the Chinese mainland)
   */
  ruleName?: string;
  /**
   * @remarks
   * The name of the sensitivity level of the data that hits the sensitive data detection rule. Valid values:
   * 
   * *   **N/A**: No sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S2
   */
  sensLevelName?: string;
  /**
   * @remarks
   * The ID of the table to which the column belongs.
   * 
   * > You can call the [DescribeTables](~~DescribeTables~~) operation to query the IDs of tables.
   * 
   * @example
   * 11132334
   */
  tableId?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * it_table
   */
  tableName?: string;
  templateId?: string;
  templateRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      engineType: 'EngineType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lang: 'Lang',
      modelTagId: 'ModelTagId',
      name: 'Name',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sensLevelName: 'SensLevelName',
      tableId: 'TableId',
      tableName: 'TableName',
      templateId: 'TemplateId',
      templateRuleId: 'TemplateRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      engineType: 'string',
      instanceId: 'number',
      instanceName: 'string',
      lang: 'string',
      modelTagId: 'string',
      name: 'string',
      pageSize: 'number',
      productCode: 'string',
      productId: 'string',
      riskLevelId: 'number',
      ruleId: 'number',
      ruleName: 'string',
      sensLevelName: 'string',
      tableId: 'number',
      tableName: 'string',
      templateId: 'string',
      templateRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A list of columns.
   */
  items?: DescribeColumnsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-4******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
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
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the instance to which data in the column of the table belongs.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/141708.html) operation to obtain the ID of the instance to which the data in the column of the table belongs.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the instance to which data in the column of the table belongs.
   * 
   * @example
   * rm-bp17t1htja573l5i8****
   */
  instanceName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: simplified Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported.
   * 
   * For example, if you enter **test**, all columns whose names contain **test** are retrieved.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the service to which data in the column of the table belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the sensitivity level of the data that hits the sensitive data detection rule. Valid values:
   * 
   * *   **1**: N/A
   * *   **2**: S1
   * *   **3**: S2
   * *   **4**: S3
   * *   **5**: S4
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that data in the column of the table hits.
   * 
   * >  You can call the [DescribeRules](https://help.aliyun.com/document_detail/141389.html) operation to obtain the ID of the sensitive data detection rule.
   * 
   * @example
   * 11122200
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule that data in the column of the table hits.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @remarks
   * The name of the sensitivity level. Valid values:
   * 
   * *   **N/A**: indicates that no sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S2
   */
  sensLevelName?: string;
  /**
   * @remarks
   * The ID of the table to which the column belongs.
   * 
   * >  You can call the [DescribeTables](https://help.aliyun.com/document_detail/141709.html) operation to obtain the ID of the table.
   * 
   * @example
   * 11132334
   */
  tableId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * it_table
   */
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
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A list of column recognition results of the data table.
   */
  items?: DescribeColumnsV2ResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1F2BB1F-04EC-5D36-B136-B4DE17FD8DE0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
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
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
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
  /**
   * @remarks
   * An array that consists of common configuration items for alerts.
   */
  configList?: DescribeConfigsResponseBodyConfigList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
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
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The keyword that is used to search for data assets. Fuzzy search is supported.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the data asset that you want to query. Valid values:
   * 
   * *   **1**: MaxCompute project
   * *   **2**: MaxCompute table
   * *   **3**: MaxCompute package
   * *   **11**: AnalyticDB for MySQL database
   * *   **12**: AnalyticDB for MySQL table
   * *   **21**: Object Storage Service (OSS) bucket
   * *   **22**: OSS object
   * *   **31**: Tablestore instance
   * *   **32**: Tablestore table
   * *   **51**: ApsaraDB RDS database
   * *   **52**: ApsaraDB RDS table
   * *   **61**: self-managed database hosted on an Elastic Compute Service (ECS) instance
   * *   **62**: self-managed table hosted on an ECS instance
   * *   **71**: PolarDB-X database
   * *   **72**: PolarDB-X table
   * *   **81**: PolarDB database
   * *   **82**: PolarDB table
   * *   **91**: AnalyticDB for PostgreSQL database
   * *   **92**: AnalyticDB for PostgreSQL table
   * 
   * @example
   * 1
   */
  rangeId?: number;
  /**
   * @remarks
   * The sensitivity level of the data asset. Separate multiple sensitivity levels with commas (,). Valid values:
   * 
   * *   **2**: S1, indicating the low sensitivity level
   * *   **3**: S2, indicating the medium sensitivity level
   * *   **4**: S3, indicating the high sensitivity level
   * *   **5**: S4, indicating the highest sensitivity level
   * 
   * @example
   * 2
   */
  riskLevels?: string;
  /**
   * @remarks
   * The unique ID of the sensitive data detection rule that the data assets to be queried hit.
   * 
   * > If you query sensitive data detection results based on the sensitive data detection rule that the data assets hit, you can call the [DescribeRules](~~DescribeRules~~) operation to query the ID of the sensitive data detection rule.
   * 
   * @example
   * 11122200
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * An array that consists of data assets.
   */
  items?: DescribeDataAssetsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 71064826-726F-4ADA-B879-05D8055476FB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried data assets that contain sensitive data.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The unique ID of the data asset that you want to query.
   * 
   * > You can call the [DescribeDataLimits](~~DescribeDataLimits~~) operation to query the ID of the data asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 12300
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Simplified Chinese.
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The network type of the data asset that you want to query. Valid values:
   * 
   * *   **1**: virtual private cloud (VPC)
   * *   **2**: classic network
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The details of the data asset.
   */
  dataLimit?: DescribeDataLimitDetailResponseBodyDataLimit;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
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
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese (default)
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The parent asset ID of the data asset.
   * 
   * You can call the [DescribeDataLimitDetail](~~DescribeDataLimitDetail~~) or [DescribeDataLimits](~~DescribeDataLimits~~) operation to obtain the parent asset ID of the data asset from the value of the **ParentId** parameter.
   * 
   * @example
   * db
   */
  parentId?: string;
  /**
   * @remarks
   * The type of service to which the data asset belongs. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: OSS
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore
   * *   **5**: ApsaraDB RDS
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The information about the data asset.
   */
  dataLimitSet?: DescribeDataLimitSetResponseBodyDataLimitSet;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
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
  /**
   * @remarks
   * Specifies whether to enable the security audit feature. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * The data detection status. Valid values:
   * 
   * *   **0**: The data detection is ready.
   * *   **1**: The data detection is running.
   * *   **2**: The connectivity test is in progress.
   * *   **3**: The connectivity test passed.
   * *   **4**: The connectivity test failed.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether DSC has the data de-identification permissions on the data asset. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  datamaskStatus?: number;
  /**
   * @remarks
   * Specifies whether DSC has the data detection permissions on the data asset. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The end of the time range to query The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1616068534877
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the database engine. Valid values include **MySQL**, **SQLServer**, **Oracle**, **PostgreSQL**, and **MongoDB**.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The parent ID of the data asset to be queried. Valid values:
   * 
   * *   The name or ID of the MaxCompute project.
   * *   The name or ID of the OSS bucket.
   * *   The name or ID of the ApsaraDB RDS instance or database.
   * 
   * @example
   * 1112
   */
  parentId?: string;
  /**
   * @remarks
   * The type of the service to which the data asset belongs. This parameter is required. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: Object Storage Service (OSS)
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore
   * *   **5**: ApsaraDB RDS
   * *   **6**: self-managed database
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * The region in which the data asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1616068534877
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A list of data assets.
   */
  items?: DescribeDataLimitsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989***
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
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
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the service to which the de-identified data belongs. Valid values: **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 2
   */
  dstType?: number;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1583856000000
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * > If a task has one or more subtasks, the value of the parameter must be the ID of the task. Otherwise, leave this parameter empty.
   * 
   * @example
   * 366731
   */
  mainProcessId?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the source table.
   * 
   * @example
   * add
   */
  srcTableName?: string;
  /**
   * @remarks
   * The type of the service to which the data to be de-identified belongs. Valid values: **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates Object Storage Service (OSS). The value indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 2
   */
  srcType?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1582992000000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the de-identification task. Valid values:
   * 
   * *   **-1**: waiting
   * *   **0**: being executed
   * *   **1**: executed
   * *   **2**: failed to be executed
   * *   **3**: terminated
   * *   **4**: partially failed
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The ID of the de-identification task.
   * 
   * @example
   * mt4HBgtw1B******
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The execution information about the de-identification task.
   */
  items?: DescribeDataMaskingRunHistoryResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-4******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The service to which the data to be de-identified belongs. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates Object Storage Service (OSS). The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 2
   */
  dstType?: number;
  /**
   * @remarks
   * The end of the time range during which the de-identification tasks to be queried are created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1583856000000
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword used to query the de-identification tasks, which can be the task name or ID.
   * 
   * @example
   * test
   */
  searchKey?: string;
  /**
   * @remarks
   * The beginning of the time range during which the de-identification tasks to be queried are created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1582992000000
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A list of de-identification tasks.
   */
  items?: DescribeDataMaskingTasksResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-4******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
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
  /**
   * @example
   * 1
   */
  currentPage?: number;
  featureType?: number;
  /**
   * @example
   * 318248
   */
  id?: number;
  /**
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  productId?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: DescribeDataObjectColumnDetailResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 8C8036CC-961D-514E-88E8-3088B5A50CA9
   */
  requestId?: string;
  /**
   * @example
   * 61
   */
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
  /**
   * @example
   * 1
   */
  currentPage?: number;
  featureType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13456723343
   */
  id?: string;
  /**
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: DescribeDataObjectColumnDetailV2ResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @example
   * 231
   */
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
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2
   */
  domainId?: number;
  featureType?: number;
  fileCategoryCode?: number;
  fileType?: number;
  instanceId?: string;
  /**
   * @example
   * zh_cn
   */
  lang?: string;
  memberAccount?: number;
  modelIds?: string;
  /**
   * @example
   * 101,102
   */
  modelTagIds?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 234,236,238
   */
  parentCategoryIds?: string;
  /**
   * @example
   * 1,5
   */
  productIds?: string;
  /**
   * @example
   * t_sddp_selfmysql_pers0
   */
  queryName?: string;
  /**
   * @example
   * 2
   */
  riskLevels?: string;
  /**
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: DescribeDataObjectsResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * E6F6460E-4330-549A-BD89-C183FB17571E
   */
  requestId?: string;
  /**
   * @example
   * 21
   */
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
  /**
   * @example
   * zh_cn
   */
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
  /**
   * @example
   * 769FB3C1-F4C9-4******
   */
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
  /**
   * @remarks
   * The ID of the anomalous event.
   * 
   * > You can call the **DescribeEvents** operation to query the ID of the anomalous event.
   * 
   * This parameter is required.
   * 
   * @example
   * 13456723343
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
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
  /**
   * @remarks
   * The details of the anomalous event.
   */
  event?: DescribeEventDetailResponseBodyEvent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
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
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of anomalous event for which you want to query the anomalous events of subtypes. Valid values:
   * 
   * *   **01**: anomalous permission usage
   * *   **02**: anomalous data flow
   * *   **03**: anomalous data operation
   * 
   * @example
   * 01
   */
  parentTypeId?: number;
  /**
   * @remarks
   * The type of the resource. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates Object Storage Service (OSS). The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 5
   */
  resourceId?: number;
  /**
   * @remarks
   * The status of the anomalous event. Valid values:
   * 
   * *   **1**: enabled
   * *   **2**: disabled
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * An array that consists of the types of anomalous events.
   * 
   * > If you leave the ParentTypeId parameter empty, anomalous event types are returned. If you set the ParentTypeId parameter, anomalous event subtypes under the specified anomalous event type are returned.
   */
  eventTypeList?: DescribeEventTypesResponseBodyEventTypeList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
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
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the account that handles the anomalous event.
   * 
   * @example
   * yundun-***
   */
  dealUserId?: string;
  /**
   * @remarks
   * The end of the time range during which the anomalous events are detected. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1698700000
   */
  endTime?: string;
  /**
   * @remarks
   * The unique ID of the anomalous event.
   * 
   * @example
   * 789026
   */
  id?: number;
  /**
   * @remarks
   * The name of the data asset.
   * 
   * @example
   * rm-uf6yzvbc2tg90iuxk.l****
   */
  instanceName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the service to which the table belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * OSS
   */
  productCode?: string;
  /**
   * @remarks
   * The beginning of the time range during which the anomalous events are detected. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1657900000
   */
  startTime?: string;
  /**
   * @remarks
   * The handling status of the anomalous event. Valid values:
   * 
   * *   0: unhandled
   * *   1: confirmed
   * *   2: marked as false positive
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The name of the anomalous event subtype.
   * 
   * > You can call the **DescribeEventTypes** operation to query the name of the anomalous event subtype.
   * 
   * @example
   * Anomalous volume of downloaded data
   */
  subTypeCode?: string;
  /**
   * @remarks
   * The name of the destination service in an anomalous data flow. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**
   * 
   * @example
   * RDS
   */
  targetProductCode?: string;
  /**
   * @remarks
   * The name of the anomalous event type. Valid values:
   * 
   * *   01: anomalous permission usage
   * *   02: anomalous data flow
   * *   03: anomalous data operation
   * 
   * @example
   * 02
   */
  typeCode?: string;
  /**
   * @remarks
   * The ID of the account that triggered the anomalous event.
   * 
   * @example
   * 1978132506596***
   */
  userId?: number;
  /**
   * @remarks
   * The username of the RAM user.
   * 
   * @example
   * name
   */
  userName?: string;
  /**
   * @remarks
   * The risk level of the alert that is triggered. Valid values:
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * An array that consists of the anomalous events.
   */
  items?: DescribeEventsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * Specifies whether to enable the security audit feature. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Specifies whether DSC is authorized to access the data asset.
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  authStatus?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the database engine. Valid values: **MySQL, MariaDB, Oracle, PostgreSQL, and SQLServer**.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * instance-demo-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese (default)
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the service to which the data asset to query belongs. Valid values: **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the data asset to query belongs. Valid values: **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates Object Storage Service (OSS). The value indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 1
   */
  productId?: number;
  /**
   * @remarks
   * The content based on which a fuzzy search is performed.
   * 
   * @example
   * 1
   */
  searchKey?: string;
  /**
   * @remarks
   * The data asset type based on which a fuzzy search is performed.
   * 
   * *   **InstanceId**: the ID of the instance.
   * *   **InstanceName**: the name of the instance.
   * *   **DatabaseName**: the name of the database.
   * 
   * @example
   * InstanceId
   */
  searchType?: string;
  /**
   * @remarks
   * The region in which the data asset resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/214257.html).
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * An array that consists of the queried data assets.
   */
  items?: DescribeInstanceSourcesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5A7E8FB9-5011-5A90-97D9-AE587047****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The keyword that is used to search for data assets. DSC searches for data assets based on the keyword that you specify in fuzzy match mode. For example, if you specify data, all data assets whose names contain data are queried.
   * 
   * @example
   * data
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the service to which the data asset belongs, such as MaxCompute, OSS, and ApsaraDB RDS. For more information about the types of data assets from which DSC can scan for sensitive data, see [Supported data assets](https://help.aliyun.com/document_detail/212906.html).
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the data asset belongs. You can call the [DescribeDataAssets](~~DescribeDataAssets~~) operation to query the ID of the service.
   * 
   * @example
   * 1
   */
  productId?: number;
  /**
   * @remarks
   * The sensitivity level ID of the data asset. A higher sensitivity level indicates that the identified data is more sensitive. Valid values:
   * 
   * *   **1**: No sensitive data is identified.
   * *   **2**: sensitive data at level 1.
   * *   **3**: sensitive data at level 2.
   * *   **4**: sensitive data at level 3
   * *   **5**: sensitive data at level 4.
   * *   **6**: sensitive data at level 5.
   * *   **7**: sensitive data at level 6.
   * *   **8**: sensitive data at level 7.
   * *   **9**: sensitive data at level 8.
   * *   **10**: sensitive data at level 9.
   * *   **11**: sensitive data at level 10.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that the data asset hits. You can call the [DescribeRules](~~DescribeRules~~) operation and obtain the ID of the sensitive data detection rule from the **Id** response parameter.
   * 
   * @example
   * 1111111
   */
  ruleId?: number;
  /**
   * @remarks
   * The region where the data asset resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/214257.html).
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * An array that consists of the data assets.
   */
  items?: DescribeInstancesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 71064826-726F-4ADA-B879-05D8055476FB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data assets.
   * 
   * @example
   * 231
   */
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
  /**
   * @remarks
   * The ID of the OSS object.
   * 
   * >  You can call the [DescribeOssObjects](https://help.aliyun.com/document_detail/410152.html) operation to obtain the ID of the OSS object.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345213
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
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
  /**
   * @remarks
   * The details of the OSS object.
   */
  ossObjectDetail?: DescribeOssObjectDetailResponseBodyOssObjectDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
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
  bucketName?: string;
  /**
   * @example
   * 12300
   */
  id?: string;
  /**
   * @example
   * zh_cn
   */
  lang?: string;
  objectKey?: string;
  serviceRegionId?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      id: 'Id',
      lang: 'Lang',
      objectKey: 'ObjectKey',
      serviceRegionId: 'ServiceRegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      id: 'string',
      lang: 'string',
      objectKey: 'string',
      serviceRegionId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailV2ResponseBody extends $tea.Model {
  ossObjectDetail?: DescribeOssObjectDetailV2ResponseBodyOssObjectDetail;
  /**
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
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
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The code of the file type.
   * 
   * @example
   * 1
   */
  fileCategoryCode?: number;
  /**
   * @remarks
   * The ID of the instance to which the OSS object belongs.
   * 
   * > You can call the **DescribeInstances** operation to query the instance ID.
   * 
   * @example
   * ins-2222
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The end time of the last scan. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  lastScanTimeEnd?: number;
  /**
   * @remarks
   * The start time of the last scan. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  lastScanTimeStart?: number;
  marker?: number;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The sensitivity level of the OSS object. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that the OSS object hits.
   * 
   * > You can call the **DescribeRules** operation to query the ID of the sensitive data detection rule.
   * 
   * @example
   * 1222
   */
  ruleId?: number;
  /**
   * @remarks
   * The region in which the data asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The ID of the industry-specific rule template.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      fileCategoryCode: 'FileCategoryCode',
      instanceId: 'InstanceId',
      lang: 'Lang',
      lastScanTimeEnd: 'LastScanTimeEnd',
      lastScanTimeStart: 'LastScanTimeStart',
      marker: 'Marker',
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
      marker: 'number',
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A list of OSS objects.
   */
  items?: DescribeOssObjectsResponseBodyItems[];
  marker?: string;
  nextMarker?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  truncated?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      marker: 'Marker',
      nextMarker: 'NextMarker',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      truncated: 'Truncated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeOssObjectsResponseBodyItems },
      marker: 'string',
      nextMarker: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      truncated: 'boolean',
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
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the instance to which the package belongs.
   * 
   * > You can call the **DescribeInstances** operation to query the ID of the instance.
   * 
   * @example
   * 12321
   */
  instanceId?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the service to which the package belongs.
   * 
   * > You can call the **DescribeDataAssets** operation to query the ID of the service.
   * 
   * @example
   * 2566600
   */
  productId?: number;
  /**
   * @remarks
   * The sensitivity level of the package. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that the package hits.
   * 
   * > You can call the **DescribeRules** operation to query the ID of the sensitive data detection rule.
   * 
   * @example
   * 266666
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * An array that consists of the information about the packages.
   */
  items?: DescribePackagesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
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
  /**
   * @example
   * 0
   */
  authStatus?: number;
  /**
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @example
   * Running
   */
  clusterStatus?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * db_test
   */
  dbName?: string;
  /**
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @example
   * rm-azfxx
   */
  instanceId?: string;
  /**
   * @example
   * zh_cn
   */
  lang?: string;
  memberAccount?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  resourceType?: number;
  /**
   * @example
   * cn-shanghai
   */
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
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: DescribeParentInstanceResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ACEF9334-BB50-525D-8CF3-6CF504E4D1B3
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
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
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   zh_cn: Chinese (default)
   * *   en_us: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the industry-specific rule template.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 136082B3-B21F-5E9D-B68E-991FFD205D24
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of sensitivity levels.
   */
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
  /**
   * @remarks
   * The content type of the sensitive data detection rule. Valid values:
   * 
   * *   **0**: keyword
   * *   **2**: regular expression
   * 
   * @example
   * 2
   */
  category?: number;
  /**
   * @remarks
   * The type of the content in the sensitive data detection rule. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates attempts to exploit SQL injections. The value 2 indicates bypass by using SQL injections. The value 3 indicates abuse of stored procedures. The value 4 indicates buffer overflow. The value 5 indicates SQL injections based on errors.
   * 
   * @example
   * 1
   */
  contentCategory?: number;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the sensitive data detection rule. Valid values:
   * 
   * *   **0**: built-in rule
   * *   **1**: custom rule
   * 
   * @example
   * 1
   */
  customType?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The parent group type of the rule.
   * 
   * @example
   * 4_1
   */
  groupId?: string;
  /**
   * @remarks
   * Specifies whether to allow earlier versions of request parameters to support keywords that are supported in later versions of request parameters. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * > To specify keywords as the content type of the sensitive data detection rule, you can set the Category parameter to 0 for earlier versions of request parameters and set the Category parameter to 5 for later versions of request parameters. You can specify the KeywordCompatible parameter based on your business requirements.
   * 
   * @example
   * true
   */
  keywordCompatible?: boolean;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The match type. Valid values:
   * 
   * *   1: rule-based match
   * *   2: dictionary-based match
   * 
   * @example
   * 1
   */
  matchType?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule. Fuzzy match is supported.
   * 
   * @example
   * \\*\\*\\* rule
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the service to which the data asset belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: number;
  /**
   * @remarks
   * The ID of the service to which the sensitive data detection rule is applied. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates Object Storage Service (OSS). The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 1
   */
  productId?: number;
  /**
   * @remarks
   * The sensitivity level of the sensitive data that hits the sensitive data detection rule. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The type of the sensitive data detection rule. Valid values:
   * 
   * *   **1**: sensitive data detection rule
   * *   **2**: audit rule
   * *   **3**: anomalous event detection rule
   * *   **99**: custom rule
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * The status of the sensitive data detection rule. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the data asset. Valid values:
   * 
   * *   **0**: all data assets
   * *   **1**: structured data asset
   * *   **2**: unstructured data asset
   * 
   * > If you set the parameter to 1 or 2, rules that support all data assets and rules that support the queried data asset type are returned.
   * 
   * @example
   * 1
   */
  supportForm?: number;
  /**
   * @remarks
   * The severity level of the alert. Valid values:
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * An array that consists of the sensitive data detection rules.
   */
  items?: DescribeRulesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 23
   */
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
  /**
   * @remarks
   * The page number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the data asset to which the table belongs. You can call the [DescribeInstances](~~DescribeInstances~~) operation to obtain the ID of the data asset.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported. For example, if you specify test, all tables whose names contain test are retrieved.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the package to which the table belongs. You can call the [DescribePackages](~~DescribePackages~~) operation to obtain the ID of the package.
   * 
   * @example
   * 555555
   */
  packageId?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the service to which the table belongs, such as MaxCompute, OSS, and ApsaraDB RDS. For more information about the types of data assets from which Data Security Center (DSC) can scan for sensitive data, see [Supported data assets](https://help.aliyun.com/document_detail/212906.html).
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the table belongs. You can call the [DescribeDataAssets](~~DescribeDataAssets~~) operation to obtain the ID of the service.
   * 
   * @example
   * 1
   */
  productId?: number;
  /**
   * @remarks
   * The sensitivity level of the table. Each sensitivity level ID corresponds to a sensitivity level name. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that the table hits. You can call the [DescribeRules](~~DescribeRules~~) operation to obtain the ID of the sensitive data detection rule.
   * 
   * @example
   * 333322
   */
  ruleId?: number;
  /**
   * @remarks
   * The region in which DSC is activated. For more information, see [Supported regions](https://help.aliyun.com/document_detail/214257.html).
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The ID of the industry-specific rule template.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * An array that consists of tables.
   */
  items?: DescribeTablesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 13
   */
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
  /**
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 769FB3C1-F4C9-4******
   */
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
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese (default)
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the current account.
   */
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
  /**
   * @remarks
   * The code of the configuration item. You can call the [DescribeConfigs](~~DescribeConfigs~~) operation to obtain the code of the configuration item.
   * 
   * @example
   * access_failed_cnt
   */
  code?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh_cn**: Chinese (default)
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AC314611-D907-5EBF-B6D8-70425E5A8643
   */
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
  /**
   * @remarks
   * The sensitive data to be de-identified. The value is a JSON string that contains the following parameters:
   * 
   * *   **dataHeaderList**: the names of the columns in which data needs to be de-identified. Specify the column names in accordance with the order of data that needs to be de-identified.
   * *   **dataList**: the data that needs to be de-identified.
   * *   **ruleList**: the IDs of sensitive data detection rules used to detect data that needs to be de-identified. Specify the rule IDs in accordance with the order of data that needs to be de-identified. Each ID identifies a sensitive data detection rule that is used to detect a type of sensitive data. You can call the [DescribeRules](~~DescribeRules~~) operation to query the IDs of sensitive data detection rules.
   * 
   * This parameter is required.
   * 
   * @example
   * {"dataHeaderList":["name","age"],"dataList":[["lily",18],["lucy",17]],"ruleList":[1002,null]}
   */
  data?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the de-identification template. The ID is generated after you create the de-identification template in the [Data Security Center (DSC) console](https://yundun.console.aliyun.com/?\\&p=sddpnext#/sddp/dm/template). You can choose **Data desensitization** > **Desensitization Template** in the left-side navigation pane and obtain the ID of the de-identification template from the **Desensitization Template** page.
   * 
   * *   If you select **Field name** as the matching mode of the template, DSC matches data based on the columns specified by the **dataHeaderList** parameter in the **Data** parameter.
   * *   If you select **Sensitive type** as the matching mode of the template, DSC matches data based on the sensitive data detection rules specified by the **ruleList** parameter in the **Data** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The de-identified data, which is described in a JSON string. The JSON string contains the following parameters:
   * 
   * *   **dataHeaderList**: the names of columns that contain the de-identified data.
   * *   **dataList**: the de-identified data. The column order of the de-identified data is the same as that indicated by the dataHeaderList parameter.
   * *   **ruleList**: the IDs of sensitive data detection rules.
   * 
   * @example
   * {"dataHeaderList":["name","age"],"dataList":[["l***",18],["l***",17]],"ruleList":[1002,null]}
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 813BA9FA-D062-42C4-8CD5-11A7640B96E6
   */
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
  /**
   * @remarks
   * The ID of the de-identification task.
   * 
   * The ID of the de-identification task is a string. You can call the DescribeDataMaskingTasks operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response, default value zh_cn. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-4******
   */
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
  /**
   * @remarks
   * Specifies whether to enable the security audit feature. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Specifies whether to automatically trigger a re-scan after a rule is modified. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * > When a re-scan is triggered, DSC scans all data in your data asset.
   * 
   * @example
   * 1
   */
  autoScan?: number;
  /**
   * @remarks
   * The database engine that is run by the instance. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The unique ID of the data asset for which you want to modify configuration items.
   * 
   * > You can call the [DescribeDataLimits](~~DescribeDataLimits~~) operation to query the ID of the data asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The retention period of raw logs after you enable the security audit feature. Unit: days. Valid values:
   * 
   * *   **30**
   * *   **90**
   * *   **180**
   * *   **365**
   * 
   * @example
   * 30
   */
  logStoreDay?: number;
  /**
   * @remarks
   * Specifies whether to change the username and password that are used to log on to the ApsaraDB RDS database. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  modifyPassword?: boolean;
  /**
   * @remarks
   * The password used to log on to the ApsaraDB RDS database that you authorize DSC to access.
   * 
   * @example
   * ********
   */
  password?: string;
  /**
   * @remarks
   * The port that is used to connect to the database.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The name of the service to which the data asset belongs. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: Object Storage Service (OSS)
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore
   * *   **5**: ApsaraDB RDS
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  resourceType?: number;
  /**
   * @remarks
   * The number of sensitive data samples tht are collected after sensitive data detection is enabled. Valid values:
   * 
   * *   **0**
   * *   **5**
   * *   **10**
   * 
   * @example
   * 0
   */
  samplingSize?: number;
  /**
   * @remarks
   * The security group that is used by PrivateLink when you install the DSC agent.
   */
  securityGroupIdList?: string[];
  /**
   * @remarks
   * The region in which the data asset resides. Valid values:
   * 
   * *   **cn-beijing**: China (Beijing)
   * *   **cn-zhangjiakou**: China (Zhangjiakou)
   * *   **cn-huhehaote**: China (Hohhot)
   * *   **cn-hangzhou**: China (Hangzhou)
   * *   **cn-shanghai**: China (Shanghai)
   * *   **cn-shenzhen**: China (Shenzhen)
   * *   **cn-hongkong**: China (Hong Kong)
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The username used to log on to the ApsaraDB RDS database that you authorize DSC to access.
   * 
   * @example
   * User01
   */
  userName?: string;
  /**
   * @remarks
   * The vSwitch that is used by PrivateLink when you install the DSC agent.
   */
  vSwitchIdList?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the data asset belongs.
   * 
   * @example
   * vpc-2zevcqke6hh09c41****
   */
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
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7C3AC882-E5A8-4855-BE77-B6837B695EF1
   */
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
  /**
   * @remarks
   * The default sensitivity level of data that Data Security Center (DSC) cannot classify as sensitive or insensitive. Valid values:
   * 
   * *   **1**: N/A
   * *   **2**: S1
   * *   **3**: S2
   * *   **4**: S3
   * *   **5**: S4
   * 
   * @example
   * 4
   */
  defaultId?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The sensitivity level ID of data that DSC classifies as sensitive. Separate multiple IDs with commas (,). Valid values:
   * 
   * *   **1**: N/A
   * *   **2**: S1
   * *   **3**: S2
   * *   **4**: S3
   * *   **5**: S4
   * 
   * @example
   * 1,2,3,4
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 208B016D-4CB9-4A85-96A5-0B8ED1EBF271
   */
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
  /**
   * @remarks
   * Specifies whether to enhance the detection of anomalous events. If you enhance the detection of anomalous events, the detection accuracy and the rate of triggering alerts for anomalous events are improved. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  backed?: boolean;
  /**
   * @remarks
   * The reason why the anomalous event is handled.
   * 
   * @example
   * Anomaly confirmed
   */
  dealReason?: string;
  /**
   * @remarks
   * The ID of the anomalous event.
   * 
   * > You can call the **DescribeEvents** operation to query the ID of the anomalous event.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The method to handle the anomalous event. Valid values:
   * 
   * *   **1**: marks the anomalous event as a false positive.
   * *   **2**: confirms and handles the anomalous event.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8491DBFD-48C0-4E11-B6FC-6F38921244A9
   */
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
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values: **zh** and **en**. The value zh indicates Chinese, and the value en indicates English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the anomalous event subtype. Separate multiple IDs with commas (,).
   * 
   * > You can call the **DescribeEventTypes** operation to query the ID of anomalous event subtype.
   * 
   * @example
   * 020008
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 208B016D-4CB9-4A85-96A5-0B8ED1E*****
   */
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
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * Specifies the status of the report task. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * > This parameter is required.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 208B016D-4CB9-4A85-96A5-0B8ED1EBF271
   */
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
  /**
   * @remarks
   * The content type of the sensitive data detection rule. Valid values:
   * 
   * *   **2**: regular expression
   * *   **3**: algorithm
   * *   **5**: keyword
   * 
   * @example
   * 2
   */
  category?: number;
  /**
   * @remarks
   * The content of the sensitive data detection rule. You can specify a regular expression, an algorithm, or keywords that are used to match sensitive fields or text.
   * 
   * This parameter is required.
   * 
   * @example
   * (?:\\\\D|^)((?:(?:25[0-4]|2[0-4]\\\\d|1\\\\d{2}|[1-9]\\\\d{1})\\\\.)(?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){2}(?:25[0-5]|2[0-4]\\\\d|1[0-9]\\\\d|[1-9]\\\\d|[1-9]))(?:\\\\D|$)
   */
  content?: string;
  /**
   * @remarks
   * The ID of the sensitive data detection rule.
   * 
   * You can call the [DescribeRules](~~DescribeRules~~) operation to obtain the rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1****
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The match type. Valid values:
   * 
   * *   **1**: rule-based match
   * *   **2**: dictionary-based match
   * 
   * @example
   * 1
   */
  matchType?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule.
   * 
   * You can call the [DescribeRules](~~DescribeRules~~) operation to obtain the rule name.
   * 
   * This parameter is required.
   * 
   * @example
   * esw
   */
  name?: string;
  /**
   * @remarks
   * The service to which the sensitive data detection rule is applied. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the sensitive data detection rule is applied. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates Object Storage Service (OSS). The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The sensitivity level of the sensitive data that hits the sensitive data detection rule. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The type of the sensitive data detection rule. Valid values:
   * 
   * *   **1**: data detection rule
   * *   **2**: audit rule
   * *   **3**: anomalous event detection rule
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * The data assets supported by the sensitive data detection rule. Valid values:
   * 
   * *   **0**: all data assets
   * *   **1**: structured data assets
   * *   **2**: unstructured data assets
   * 
   * @example
   * 1
   */
  supportForm?: number;
  /**
   * @remarks
   * The risk level of the alert that is triggered by the sensitive data detection rule. Valid values:
   * 
   * *   **1**: low level
   * *   **2**: medium level
   * *   **3**: high level
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7C3AC882-E5A8-4855-BE77-B6837B695EF1
   */
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
  /**
   * @remarks
   * The ID of the sensitive data detection rule.
   * 
   * > You can query the ID of the sensitive data detection rule by calling the **DescribeRules** operation.
   * 
   * @example
   * 12341
   */
  id?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule. Separate multiple IDs with commas (,).
   * 
   * > You can query the ID of the sensitive data detection rule by calling the **DescribeRules** operation.
   * 
   * @example
   * 1,2,3,4
   */
  ids?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable the sensitive data detection rule. Valid values:
   * 
   * *   **0**: disables the sensitive data detection rule.
   * *   **1**: enables the sensitive data detection rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The IDs of sensitive data detection rules whose status failed to be changed. Multiple IDs are separated with commas (,).
   * 
   * @example
   * 1,2,3,4
   */
  failedIds?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7C3AC882-E5A8-4855-BE77-B6837B695EF1
   */
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
  /**
   * @remarks
   * The unique ID of the de-identification task. You can query the task ID by calling the [DescribeDataMaskingTasks](~~DescribeDataMaskingTasks~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese (default)
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
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
  /**
   * @example
   * 5
   */
  currentRiskLevel?: number;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * 1582992000000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1545277010000
   */
  gmtModified?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 2
   */
  maxCategoryLevel?: number;
  /**
   * @example
   * 5
   */
  maxRiskLevel?: number;
  /**
   * @example
   * built-in template
   */
  name?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 0
   */
  supportEdit?: number;
  /**
   * @example
   * 6
   */
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
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Rule for identifying ID card numbers
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the rule.
   * 
   * @example
   * 100
   */
  id?: number;
  /**
   * @remarks
   * The IDs of sensitive data types. Multiple IDs are separated by commas (,).
   * 
   * @example
   * 1001,1002
   */
  identificationRuleIds?: string;
  /**
   * @remarks
   * The scan scope of the rule. The value is a JSON array of the STRING type. Each element in a JSON array indicates a scan scope that contains the following fields:
   * 
   * *   **Asset**: the data asset type. Valid values: RDS, DRDS, PolarDB, OTS, ADB, and OceanBase. The value is of the STRING type.
   * 
   * *   **Content**: the scan scope. The value is of the STRING type. Each element in a JSON array indicates a scan scope that contains the following fields:
   * 
   *     *   **Range**: the matching condition. Valid values: Instance, database, table, column, project, bucket, and object. The value project is valid only for data assets in MaxCompute. The values bucket and object are valid only for data assets in Object Storage Service (OSS). The value of this parameter is of the STRING type.
   *     *   **Operator**: the operator. Valid values: equals, regex, prefix, and suffix. The operator equals indicates a full match. The operator regex indicates a match by regular expression. The operator prefix indicates a match by prefix. The operator suffix indicates a match by suffix.
   *     *   **Value**: the matching content. The value is of the STRING type.
   * 
   * @example
   * [{"Asset":"RDS","Content":[{"Range":"database","Operator":"regex","Value":"register"}]},{"Asset":"RDS","Content":[{"Range":"table","Operator":"regex","Value":"register"}]},{"Asset":"RDS","Content":[{"Range":"column","Operator":"regex","Value":"register"}]},{"Asset":"ODPS","Content":[{"Range":"project","Operator":"regex","Value":"register"}]},{"Asset":"ODPS","Content":[{"Range":"table","Operator":"regex","Value":"register"}]},{"Asset":"ODPS","Content":[{"Range":"column","Operator":"regex","Value":"register"}]}]
   */
  identificationScope?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * ID card number
   */
  name?: string;
  /**
   * @remarks
   * The sensitivity level of the data that is not compliant with the rule. Valid values: **1** to **11**.
   * 
   * *   **1**: No sensitive data is detected.
   * *   **2**: indicates the S1 sensitivity level.
   * *   **3**: indicates the S2 sensitivity level.
   * *   **4**: indicates the S3 sensitivity level.
   * *   **5**: indicates the S4 sensitivity level.
   * *   **6**: indicates the S5 sensitivity level.
   * *   **7**: indicates the S6 sensitivity level.
   * *   **8**: indicates the S7 sensitivity level.
   * *   **9**: indicates the S8 sensitivity level.
   * *   **10**: indicates the S9 sensitivity level.
   * *   **11**: indicates the S10 sensitivity level.
   * *   **null**: indicates all preceding sensitivity levels.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * *   **null**: all states
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The tag ID.
   * 
   * *   **101**: sensitive personal information
   * *   **102**: personal information
   * *   **103**: important information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * *   Sensitive personal information
   * *   Personal information
   * *   Important information
   * 
   * @example
   * personal sensitive data
   */
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
  /**
   * @remarks
   * The time when the data in the column of the table is created. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The type of data in the column of the table.
   * 
   * @example
   * String
   */
  dataType?: string;
  /**
   * @remarks
   * The ID of the column of the table.
   * 
   * @example
   * 268
   */
  id?: string;
  /**
   * @remarks
   * The ID of the instance to which data in the column of the table belongs.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the instance to which data in the column of the table belongs.
   * 
   * @example
   * rm-bp17t1htja573l5i8****
   */
  instanceName?: string;
  /**
   * @remarks
   * A list of tags for data that hits the recognition model.
   */
  modelTags?: DescribeColumnsResponseBodyItemsModelTags[];
  /**
   * @remarks
   * The name of the column of the table.
   * 
   * @example
   * gxdata
   */
  name?: string;
  /**
   * @remarks
   * The name of the sensitivity level for asset. Valid values:
   * 
   * *   **N/A**: indicates that no sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S3
   */
  odpsRiskLevelName?: string;
  /**
   * @remarks
   * The ID of the sensitivity level of the asset. Valid values:
   * 
   * *   **1**: N/A
   * *   **2**: S1
   * *   **3**: S2
   * *   **4**: S3
   * *   **5**: S4
   * 
   * @example
   * 3
   */
  odpsRiskLevelValue?: number;
  /**
   * @remarks
   * The name of the service to which data in the column of the table belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  regionId?: string;
  /**
   * @remarks
   * The ID of the revision record.
   * 
   * @example
   * 12
   */
  revisionId?: number;
  /**
   * @remarks
   * Indicates whether the column is revised. Valid values:
   * 
   * *   1: yes
   * *   0: no
   * 
   * @example
   * 1
   */
  revisionStatus?: number;
  /**
   * @remarks
   * The ID of the sensitivity level of data in the column of the table. Valid values:
   * 
   * *   **1**: N/A
   * *   **2**: S1
   * *   **3**: S2
   * *   **4**: S3
   * *   **5**: S4
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for data in the column of the table. Valid values:
   * 
   * *   **N/A**: indicates that no sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that data in the column of the table hits.
   * 
   * @example
   * 1
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule that data in the column of the table hits.
   * 
   * @example
   * \\*\\* rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The name of the sensitivity level. Valid values:
   * 
   * *   **N/A**: indicates that no sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S2
   */
  sensLevelName?: string;
  /**
   * @remarks
   * Indicates whether the column contains sensitive data. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * 123
   */
  tableId?: number;
  /**
   * @remarks
   * The name of the table to which the revised column belongs.
   * 
   * @example
   * it_table
   */
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
      regionId: 'RegionId',
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
      regionId: 'string',
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
  /**
   * @remarks
   * The tag ID. Valid values:
   * 
   * *   **101**: personal sensitive information
   * *   **102**: personal information
   * *   **107**: general information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The tag name. Valid values:
   * 
   * *   Personal sensitive information
   * *   Personal information
   * *   General information
   * 
   * @example
   * personal sensitive information
   */
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
  /**
   * @remarks
   * The time when the data in the column of the table is created. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The type of data in the column of the table.
   * 
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @remarks
   * The ID of the column of the table.
   * 
   * @example
   * 111111
   */
  id?: string;
  /**
   * @remarks
   * The ID of the instance to which data in the column of the table belongs.
   * 
   * @example
   * 1232122
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the instance to which data in the column of the table belongs.
   * 
   * @example
   * rm-1234
   */
  instanceName?: string;
  /**
   * @remarks
   * A list of data tags.
   */
  modelTags?: DescribeColumnsV2ResponseBodyItemsModelTags[];
  /**
   * @remarks
   * The name of the column of the table.
   * 
   * @example
   * obj_id
   */
  name?: string;
  /**
   * @remarks
   * The name of the sensitivity level for asset. Valid values:
   * 
   * *   **N/A**: indicates that no sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S4
   */
  odpsRiskLevelName?: string;
  /**
   * @remarks
   * The ID of the sensitivity level of the asset. Valid values:
   * 
   * *   **1**: N/A
   * *   **2**: S1
   * *   **3**: S2
   * *   **4**: S3
   * *   **5**: S4
   * >The return value <=1 means N/A.
   * 
   * @example
   * 3
   */
  odpsRiskLevelValue?: number;
  /**
   * @remarks
   * The name of the service to which data in the column of the table belongs. Valid values: **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the revision record.
   * 
   * @example
   * 12
   */
  revisionId?: number;
  /**
   * @remarks
   * Indicates whether the column is revised. Valid values:
   * 
   * *   1: yes
   * *   0: no
   * 
   * @example
   * 1
   */
  revisionStatus?: number;
  /**
   * @remarks
   * The ID of the sensitivity level of data in the column of the table. Valid values:
   * 
   * *   **1**: N/A
   * *   **2**: S1
   * *   **3**: S2
   * *   **4**: S3
   * *   **5**: S4
   * 
   * >The return value <=1 means N/A.
   * 
   * @example
   * 4
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for data in the column of the table. Valid values:
   * 
   * *   **N/A**: indicates that no sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S1
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that data in the column of the table hits.
   * 
   * @example
   * 1004
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule that data in the column of the table hits.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @remarks
   * The name of the sensitivity level. Valid values:
   * 
   * *   **N/A**: indicates that no sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S2
   */
  sensLevelName?: string;
  /**
   * @remarks
   * Indicates whether the column contains sensitive data. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * 123
   */
  tableId?: number;
  /**
   * @remarks
   * The name of the table to which the revised column belongs.
   * 
   * @example
   * it_table
   */
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
  /**
   * @remarks
   * The code of the common configuration item.
   * 
   * @example
   * 1
   */
  code?: string;
  /**
   * @remarks
   * The description of the default value for the common configuration item.
   * 
   * @example
   * The volume of logs of a specific type that are generated on the current day is less than 30% of the average volume of logs generated in the previous 10 days.
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description of the common configuration item.
   * 
   * @example
   * Anomalous log output
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the common configuration item.
   * 
   * @example
   * 2133
   */
  id?: number;
  /**
   * @remarks
   * The value of the common configuration item.
   * 
   * @example
   * 30
   */
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
  /**
   * @remarks
   * The access control list (ACL) that controls the access permissions on the OSS bucket.
   * 
   * > This parameter is returned only when you set the parameter **RangeId** to **21**.
   * 
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * The time when the data asset was created. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The data type of the data asset.
   * 
   * @example
   * OSS_BUCKET
   */
  dataType?: string;
  /**
   * @remarks
   * The ID of the data asset.
   * 
   * @example
   * 268
   */
  id?: string;
  /**
   * @remarks
   * The sensitivity tag of the data. The value is fixed as **0**. **0**, **1**, **2**, or **3** is returned for this parameter only when you set the parameter **RangeId** to **1**.
   * 
   * *   **0**: unclassified
   * *   **1**: confidential
   * *   **2**: sensitive
   * *   **3**: highly sensitive
   * 
   * @example
   * 0
   */
  labelsec?: boolean;
  /**
   * @remarks
   * The name of the data asset.
   * 
   * @example
   * gxdata
   */
  name?: string;
  /**
   * @remarks
   * The key value of the OSS object.
   * 
   * > This parameter is returned only when you set the parameter **RangeId** to **22**.
   * 
   * @example
   * Internal
   */
  objectKey?: string;
  /**
   * @remarks
   * The sensitivity level of the MaxCompute data asset. Valid values:
   * 
   * *   **S1**: low sensitivity level
   * *   **S2**: medium sensitivity level
   * *   **S3**: high sensitivity level
   * *   **S4**: highest sensitivity level
   * 
   * > This parameter is returned only when you set the parameter **RangeId** to **1**.
   * 
   * @example
   * S4
   */
  odpsRiskLevelName?: string;
  /**
   * @remarks
   * The account that owns the data asset.
   * 
   * @example
   * dtdep-239-******
   */
  owner?: string;
  /**
   * @remarks
   * The name of the service to which the data asset belongs.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the data asset belongs. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: OSS
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore
   * *   **5**: ApsaraDB RDS
   * 
   * @example
   * 5
   */
  productId?: string;
  /**
   * @remarks
   * Indicates whether the data protection mechanism is enabled for the data asset. The value is fixed as **false**. **true** or **false** is returned for this parameter only when you set the parameter **RangeId** to **1**.
   * 
   * *   **false**: The data protection mechanism is disabled.
   * *   **true**: The data protection mechanism is enabled. Only data inbound is supported. Data outbound is not supported.
   * 
   * @example
   * false
   */
  protection?: boolean;
  /**
   * @remarks
   * The sensitivity level of the data asset. A higher sensitivity level indicates that the identified data is more sensitive. Valid values:
   * 
   * *   **1**: No sensitive data is identified.
   * *   **2**: sensitive data at level 1.
   * *   **3**: sensitive data at level 2.
   * *   **3**: sensitive data at level 3.
   * *   **5**: sensitive data at level 4.
   * *   **6**: sensitive data at level 5.
   * *   **7**: sensitive data at level 6.
   * *   **8**: sensitive data at level 7.
   * *   **9**: sensitive data at level 8.
   * *   **10**: sensitive data at level 9.
   * *   **11**: sensitive data at level 10.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for the data asset.
   * 
   * @example
   * Medium sensitivity level
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The name of the sensitive data detection rule that the data asset hits.
   * 
   * @example
   * \\*\\*\\* rule
   */
  ruleName?: string;
  /**
   * @remarks
   * Indicates whether the data asset contains sensitive data. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The total number of sensitive data assets. For example, the value can be the total number of sensitive MaxCompute projects, packages, or tables, the total number of sensitive ApsaraDB RDS databases or tables, or the total number of sensitive OSS buckets or objects.
   * 
   * @example
   * 24
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The percentage of sensitive data in all data assets.
   * 
   * @example
   * 45%
   */
  sensitiveRatio?: string;
  /**
   * @remarks
   * The total number of data assets. For example, the value can be the total number of MaxCompute projects, packages, or tables, the total number of ApsaraDB RDS databases or tables, or the total number of OSS buckets or objects.
   * 
   * @example
   * 432
   */
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
  /**
   * @remarks
   * The status of the connectivity test between the data asset and DSC. Valid values:
   * 
   * *   **2**: indicates that the data asset was being connected.
   * *   **3**: indicates that the data asset was connected to DSC.
   * *   **4**: indicates that the data asset failed to be connected.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * The result that indicates the status of the connectivity test between the data asset and DSC. Valid values:
   * 
   * *   **Passed**
   * *   **Failed**
   * *   **Testing**
   * 
   * @example
   * Passed
   */
  checkStatusName?: string;
  /**
   * @remarks
   * The time when the data asset was connected to DSC. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 145600000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the data asset.
   * 
   * @example
   * 12300
   */
  id?: number;
  /**
   * @remarks
   * The region in which the data asset resides.
   * 
   * @example
   * China (Qingdao)
   */
  localName?: string;
  /**
   * @remarks
   * The ID and name of the data asset in the service to which the data asset belongs.
   * 
   * @example
   * rm-m5eup49p6o274****.RDS_example
   */
  parentId?: string;
  /**
   * @remarks
   * The port number that is used to connect to the database.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The ID of the region in which the data asset resides.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the service to which the data asset belongs. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: OSS
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore
   * *   **5**: ApsaraDB RDS
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * The service to which the data asset belongs. Valid values:
   * 
   * *   **MaxCompute**
   * *   **OSS**
   * *   **ADS**
   * *   **OTS**
   * *   **RDS**
   * 
   * @example
   * RDS
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The account of the user who manages the data asset.
   * 
   * @example
   * User01
   */
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
  /**
   * @remarks
   * Indicates whether the test of connectivity between DSC and the data asset is passed.
   * 
   * *   **2**: The connectivity test is in progress.
   * *   **3**: The connectivity test is passed.
   * *   **4**: The connectivity test failed.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * The name of the data detection status.
   * 
   * @example
   * Connectivity test status
   */
  checkStatusName?: string;
  /**
   * @remarks
   * The connection string that is used to access the data asset.
   * 
   * @example
   * Connection string
   */
  connector?: string;
  /**
   * @remarks
   * The time when the data asset was created. Unit: milliseconds.
   * 
   * @example
   * 1625587423000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the data asset.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The region in which the data asset resides.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The parent asset ID of the data asset.
   * 
   * @example
   * db
   */
  parentId?: string;
  /**
   * @remarks
   * The region in which the data asset resides.
   * 
   * @example
   * cn-****
   */
  regionId?: string;
  /**
   * @remarks
   * The type of service to which the data asset belongs. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: OSS
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore
   * *   **5**: ApsaraDB RDS
   * 
   * @example
   * 2
   */
  resourceType?: number;
  /**
   * @remarks
   * The code of the service to which the data asset belongs. Valid values:
   * 
   * *   **ODPS**
   * *   **OSS**
   * *   **ADS**
   * *   **OTS**
   * *   **RDS**
   * 
   * @example
   * OSS
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The username that is used to access the data asset.
   * 
   * @example
   * tsts
   */
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
  /**
   * @remarks
   * The name of the OSS bucket to which the OSS object belongs.
   * 
   * @example
   * oss-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The region ID of the OSS object.
   * 
   * @example
   * cn-****
   */
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
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-****
   */
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
  /**
   * @remarks
   * An array that consists of data assets that DSC is authorized to scan.
   */
  dataLimitList?: DescribeDataLimitSetResponseBodyDataLimitSetDataLimitList[];
  /**
   * @remarks
   * An array consisting of the OSS objects that DSC is authorized to scan.
   */
  ossBucketList?: DescribeDataLimitSetResponseBodyDataLimitSetOssBucketList[];
  /**
   * @remarks
   * An array consisting of the regions in which the data assets can be scanned.
   */
  regionList?: DescribeDataLimitSetResponseBodyDataLimitSetRegionList[];
  /**
   * @remarks
   * The type of service to which the data asset belongs. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: OSS
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore
   * *   **5**: ApsaraDB RDS
   * 
   * @example
   * 2
   */
  resourceType?: number;
  /**
   * @remarks
   * The service to which the data asset belongs. Valid values:
   * 
   * *   **ODPS**
   * *   **OSS**
   * *   **ADS**
   * *   **OTS**
   * *   **RDS**
   * 
   * @example
   * OSS
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The total number of data objects in the data assets.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * Indicates whether the security audit feature is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Indicates whether the data asset can be automatically scanned. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  autoScan?: number;
  /**
   * @remarks
   * The data detection status. Valid values:
   * 
   * *   **0**: The data detection is ready.
   * *   **1**: The data detection is running.
   * *   **2**: The connectivity test is in progress.
   * *   **3**: The connectivity test is passed.
   * *   **4**: The connectivity test failed.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * The name of the data detection status.
   * 
   * @example
   * Connectivity test status
   */
  checkStatusName?: string;
  /**
   * @remarks
   * Indicates whether DSC has the data de-identification permissions on the data asset. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  datamaskStatus?: number;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 2.0
   */
  dbVersion?: string;
  /**
   * @remarks
   * Indicates whether DSC has the data identification permissions on the data asset. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The type of the database engine. Valid values include **MySQL**, **SQLServer**, **Oracle**, **PostgreSQL**, and **MongoDB**.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * connect_network_error
   */
  errorCode?: string;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * The password is invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the data leak prevention feature is enabled. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes (default)
   * 
   * @example
   * 1
   */
  eventStatus?: number;
  /**
   * @remarks
   * The time when the data asset was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 145600000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The unique ID of the data asset.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * 123
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The ID of the data asset to which the table belongs.
   * 
   * @example
   * 12332
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the last scan is performed.
   * 
   * *   The value is a UNIX timestamp.
   * *   Unit: milliseconds.
   * 
   * @example
   * 145600000
   */
  lastFinishedTime?: number;
  lastStartTime?: number;
  /**
   * @remarks
   * The region in which the data asset resides.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The retention period of raw logs. Unit: days.
   * 
   * @example
   * 30
   */
  logStoreDay?: number;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * The next time when the data asset is scanned. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1676620236000
   */
  nextStartTime?: number;
  /**
   * @remarks
   * Indicates whether the optical character recognition (OCR) feature is enabled. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  ocrStatus?: number;
  /**
   * @remarks
   * The parent ID of the data asset that you want to query. Valid values include **bucket, db, and project**.
   * 
   * @example
   * project
   */
  parentId?: string;
  /**
   * @remarks
   * The port number of the self-managed database.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The status of the data asset scan. Valid values:
   * 
   * *   **-1**: invalid
   * *   **0**: waiting
   * *   **1**: being scanned
   * *   **2**: suspended
   * *   **3**: completed
   * 
   * @example
   * 3
   */
  processStatus?: number;
  /**
   * @remarks
   * The total number of data tables or files.
   * 
   * @example
   * 100
   */
  processTotalCount?: number;
  /**
   * @remarks
   * The region in which the asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the service to which the data asset belongs. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: OSS
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore
   * *   **5**: ApsaraDB RDS
   * *   **6**: self-managed database
   * 
   * @example
   * 5
   */
  resourceType?: number;
  /**
   * @remarks
   * The code of the service to which the data asset belongs. Valid values: **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * RDS
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The number of sensitive data samples. Valid values: **0**, **5**, and **10**. Unit: data entries.
   * 
   * @example
   * 5
   */
  samplingSize?: number;
  /**
   * @remarks
   * A list of the IDs of the security groups that are used by PrivateLink when you install the DSC agent.
   */
  securityGroupIdList?: string[];
  /**
   * @remarks
   * Indicates whether the security audit feature is supported. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  supportAudit?: boolean;
  /**
   * @remarks
   * Indicates whether the data de-identification feature is supported. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  supportDatamask?: boolean;
  /**
   * @remarks
   * Indicates whether anomalous event detection is supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  supportEvent?: boolean;
  /**
   * @remarks
   * Indicates whether OCR is supported. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  supportOcr?: boolean;
  /**
   * @remarks
   * Indicates whether the data asset scan feature is supported. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  supportScan?: boolean;
  /**
   * @remarks
   * The alias of the tenant.
   * 
   * @example
   * insta_gram
   */
  tenantName?: string;
  /**
   * @remarks
   * The total number of fields in the table.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The username that is used to access the data asset.
   * 
   * @example
   * tsts
   */
  userName?: string;
  /**
   * @remarks
   * A list of the IDs of the vSwitches that are used by PrivateLink when you install the DSC agent.
   */
  vSwitchIdList?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the data asset belongs.
   * 
   * @example
   * vpc-2zevcqke6hh09c41****
   */
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
      lastStartTime: 'LastStartTime',
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
      lastStartTime: 'number',
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
  /**
   * @remarks
   * The number of rows that are in conflict with the data to be de-identified in the destination table to which the data to be de-identified is moved.
   * 
   * @example
   * 0
   */
  conflictCount?: number;
  /**
   * @remarks
   * The type of the service to which the de-identified data belongs. Valid values: **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 2
   */
  dstType?: number;
  /**
   * @remarks
   * The service that stores the de-identified data. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * OSS
   */
  dstTypeCode?: string;
  /**
   * @remarks
   * The end time of the de-identification task.
   * 
   * @example
   * 1582251233000
   */
  endTime?: number;
  /**
   * @remarks
   * The error code that is returned when the de-identification task fails.
   * 
   * @example
   * masking_task_not_found
   */
  failCode?: string;
  /**
   * @remarks
   * The reason why the de-identification task fails.
   * 
   * @example
   * error
   */
  failMsg?: string;
  /**
   * @remarks
   * Indicates whether a file is available for download.
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  hasDownloadFile?: number;
  /**
   * @remarks
   * The number of created subtasks.
   * 
   * @example
   * 4
   */
  hasSubProcess?: number;
  /**
   * @remarks
   * The ID of the task execution record.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The number of rows that are de-identified.
   * 
   * @example
   * 100
   */
  maskingCount?: number;
  /**
   * @remarks
   * The progress of the de-identification task.
   * 
   * @example
   * 100
   */
  percentage?: number;
  /**
   * @remarks
   * The number of times that the de-identification task is executed.
   * 
   * @example
   * 1
   */
  runIndex?: number;
  /**
   * @remarks
   * The name of the source table.
   * 
   * @example
   * add
   */
  srcTableName?: string;
  /**
   * @remarks
   * The type of the service to which the data to be de-identified belongs. Valid values: **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 2
   */
  srcType?: number;
  /**
   * @remarks
   * The service to which the data to be de-identified belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * OSS
   */
  srcTypeCode?: string;
  /**
   * @remarks
   * The time when the de-identification task was executed. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1582251233000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the de-identification task. Valid values:
   * 
   * *   **-1**: waiting
   * *   **0**: being executed
   * *   **1**: executed
   * *   **2**: failed to be executed
   * *   **3**: terminated
   * *   **4**: partially failed
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the identification task.
   * 
   * @example
   * mt4HBgtw1B******
   */
  taskId?: string;
  /**
   * @remarks
   * The mode in which the de-identification task is executed. Valid values:
   * 
   * *   **1**: manual
   * *   **2**: scheduled
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The member account to which the desensitization target belongs.
   * 
   * @example
   * 192479427903xxxx
   */
  dstMemberAccount?: number;
  /**
   * @remarks
   * The destination path.
   */
  dstPath?: string;
  /**
   * @remarks
   * The service to which the data to be de-identified belongs. Valid values: **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 5
   */
  dstType?: number;
  /**
   * @remarks
   * The type of the service to which the de-identified data belongs. Valid values: **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * RDS
   */
  dstTypeCode?: string;
  /**
   * @remarks
   * The time when the de-identification task is created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1582992000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Indicates whether the de-identification task is running.
   * 
   * @example
   * false
   */
  hasUnfinishProcess?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the source table is de-identified.
   * 
   * @example
   * false
   */
  originalTable?: boolean;
  /**
   * @remarks
   * The user who created the de-identification task.
   * 
   * @example
   * owner
   */
  owner?: string;
  /**
   * @remarks
   * The number of times that the de-identification task is run.
   * 
   * @example
   * 1
   */
  runCount?: number;
  /**
   * @remarks
   * The member account to which the desensitization source belongs.
   * 
   * @example
   * 192479427903xxxx
   */
  srcMemberAccount?: number;
  /**
   * @remarks
   * The source path.
   */
  srcPath?: string;
  /**
   * @remarks
   * The type of the service to which the data to be de-identified belongs. Valid values: **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 5
   */
  srcType?: number;
  /**
   * @remarks
   * The type of the service to which the data to be de-identified belongs. Valid values: **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * RDS
   */
  srcTypeCode?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * mt4HBgtw1B******
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * Task name
   */
  taskName?: string;
  /**
   * @remarks
   * The mode in which the de-identification task is run. Valid values:
   * 
   * *   **1**: manual
   * *   **2**: scheduled
   * *   **3**: manual and scheduled
   * 
   * @example
   * 1
   */
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
  /**
   * @example
   * 101
   */
  id?: number;
  /**
   * @example
   * personal sensitive information
   */
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
  /**
   * @example
   * column comment
   */
  columnComment?: string;
  /**
   * @example
   * hide14
   */
  columnName?: string;
  /**
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @example
   * 1509415150052786176
   */
  id?: string;
  modelTags?: DescribeDataObjectColumnDetailResponseBodyItemsModelTags[];
  /**
   * @example
   * true
   */
  primaryKey?: boolean;
  /**
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @example
   * S1
   */
  riskLevelName?: string;
  /**
   * @example
   * 1004
   */
  ruleId?: number;
  /**
   * @example
   * name
   */
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
  /**
   * @example
   * 101
   */
  id?: number;
  /**
   * @example
   * personal sensitive information
   */
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
  /**
   * @example
   * column comment
   */
  columnComment?: string;
  /**
   * @example
   * hide14
   */
  columnName?: string;
  /**
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @example
   * 1392973973691383808
   */
  id?: string;
  modelTags?: DescribeDataObjectColumnDetailV2ResponseBodyItemsModelTags[];
  /**
   * @example
   * true
   */
  primaryKey?: boolean;
  /**
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @example
   * S1
   */
  riskLevelName?: string;
  /**
   * @example
   * 51
   */
  ruleId?: number;
  /**
   * @example
   * name
   */
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
  /**
   * @example
   * 101
   */
  id?: number;
  /**
   * @example
   * personal sensitive information
   */
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
  /**
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @example
   * S1
   */
  riskLevelName?: string;
  /**
   * @example
   * 590
   */
  ruleCount?: number;
  /**
   * @example
   * 1080
   */
  ruleId?: number;
  /**
   * @example
   * name
   */
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
  /**
   * @example
   * 20000
   */
  id?: string;
  /**
   * @example
   * instance description
   */
  instanceDescription?: string;
  /**
   * @example
   * rm-1234
   */
  instanceId?: string;
  lastModifiedTime?: number;
  /**
   * @example
   * 1687676649830
   */
  lastScanTime?: number;
  memberAccount?: number;
  modelTags?: DescribeDataObjectsResponseBodyItemsModelTags[];
  /**
   * @example
   * t_sddp_selfmysql_pers0
   */
  name?: string;
  objectFileCategory?: string;
  /**
   * @example
   * text type
   */
  objectType?: string;
  /**
   * @example
   * rm-1234.db_test
   */
  path?: string;
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
  regionId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionName?: string;
  ruleList?: DescribeDataObjectsResponseBodyItemsRuleList[];
  /**
   * @example
   * 1
   */
  sensitiveCount?: number;
  /**
   * @example
   * 1
   */
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
      regionId: 'RegionId',
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
      regionId: 'string',
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
  /**
   * @example
   * 100001
   */
  code?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * C/C++ Source Code
   */
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
  /**
   * @remarks
   * The value of the data item on the X axis.
   * 
   * @example
   * [test1,test2,...]
   */
  x?: string[];
  /**
   * @remarks
   * The value of the data item on the Y axis.
   * 
   * @example
   * [1,2,3,...]
   */
  y?: string[];
  /**
   * @remarks
   * The value of the data item for the Z axis.
   */
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
  /**
   * @remarks
   * The type of the chart. Valid values:
   * 
   * *   **1**: column chart
   * *   **2**: line chart
   * 
   * >This field will be returned only when NewAlarm is true.
   * 
   * @example
   * 1
   */
  chatType?: number;
  /**
   * @remarks
   * The data in the baseline behavior profile of the anomalous event.
   */
  data?: DescribeEventDetailResponseBodyEventDetailChartData;
  /**
   * @remarks
   * The name of the baseline behavior chart of the anomalous event.
   * 
   * @example
   * Baseline behavior chart
   */
  label?: string;
  /**
   * @remarks
   * Icon title.
   * 
   * >This field will be returned only when NewAlarm is true.
   * 
   * @example
   * misskingm
   */
  name?: string;
  /**
   * @remarks
   * The type of the chart. Valid values:
   * 
   * *   **1**: column chart
   * *   **2**: line chart
   * 
   * @example
   * 1
   */
  type?: string;
  /**
   * @remarks
   * The descriptive label of data items on the X axis.
   * 
   * @example
   * Number of days
   */
  XLabel?: string;
  /**
   * @remarks
   * The descriptive label of data items on the Y axis.
   * 
   * @example
   * Value
   */
  YLabel?: string;
  /**
   * @remarks
   * The descriptive label of data items on the Z axis.
   * 
   * >This field will be returned only when NewAlarm is true.
   * 
   * @example
   * chart description
   */
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
  /**
   * @remarks
   * The title of the content in the anomalous event.
   * 
   * @example
   * Anomaly description
   */
  label?: string;
  /**
   * @remarks
   * Exception event name.
   * 
   * @example
   * daliaoyuncom
   */
  name?: string;
  /**
   * @remarks
   * The description of the content in the anomalous event.
   * 
   * @example
   * The account was used to access OSS from an unusual terminal whose IP address is 1.2.3.4 from 00:06:45 on September 9, 2019 to 00:57:37 on September 9, 2019.
   */
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
  /**
   * @remarks
   * The source title.
   * 
   * @example
   * Risk
   */
  label?: string;
  /**
   * @remarks
   * The source description.
   * 
   * @example
   * Based on the record of authentication by using an unusual terminal, an attacker may have obtained the access permission of the account, or an employee accessed data from a personal terminal.
   */
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
  /**
   * @remarks
   * The baseline behavior chart of the anomalous event.
   */
  chart?: DescribeEventDetailResponseBodyEventDetailChart[];
  /**
   * @remarks
   * The content in the anomalous event.
   */
  content?: DescribeEventDetailResponseBodyEventDetailContent[];
  /**
   * @remarks
   * An array that consists of the source from which the information of the anomalous event is recorded.
   */
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
  /**
   * @remarks
   * The account that is used to handle the anomalous event.
   * 
   * @example
   * sddp-test2
   */
  currentValue?: string;
  /**
   * @remarks
   * The time when the account is disabled. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1611139155000
   */
  disableTime?: number;
  /**
   * @remarks
   * The time when the disabled account is enabled. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1611139155000
   */
  enableTime?: number;
  /**
   * @remarks
   * The handling method.
   * 
   * @example
   * Remove from the whitelist
   */
  handlerName?: string;
  /**
   * @remarks
   * The type of the handling method.
   * 
   * @example
   * rds_security_ip
   */
  handlerType?: string;
  /**
   * @remarks
   * The duration for which the handling operation takes effect. If you leave this parameter empty, the handling operation is permanently valid. Unit: minutes.
   * 
   * @example
   * 10
   */
  handlerValue?: number;
  /**
   * @remarks
   * The ID of the handling rule.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The status of the account that triggered the anomalous event. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * *   **-1**: failed to disable the account
   * *   **-2**: failed to enable the account
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The time when the alert for the anomalous event was generated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1545829129000
   */
  alertTime?: number;
  /**
   * @remarks
   * Indicates whether the handling result of the anomalous event is used to enhance the detection of anomalous events. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * > If you enhance the detection of anomalous events, the detection accuracy and the rate of triggering alerts for anomalous events are improved.
   * 
   * @example
   * false
   */
  backed?: boolean;
  /**
   * @remarks
   * The instance name of the service in which the anomalous event was detected.
   * 
   * @example
   * in-222***
   */
  dataInstance?: string;
  /**
   * @remarks
   * The display name of the account that is used to handle the anomalous event.
   * 
   * @example
   * yundunsr
   */
  dealDisplayName?: string;
  /**
   * @remarks
   * The username of the account that is used to handle the anomalous event.
   * 
   * @example
   * det1111
   */
  dealLoginName?: string;
  /**
   * @remarks
   * The reason why the anomalous event is handled.
   * 
   * @example
   * Anomaly confirmed
   */
  dealReason?: string;
  /**
   * @remarks
   * The time when the anomalous event was handled. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1230000
   */
  dealTime?: number;
  /**
   * @remarks
   * The ID of the account that is used to handle the anomalous event.
   * 
   * @example
   * 229157443385014***
   */
  dealUserId?: number;
  /**
   * @remarks
   * The content in the details of the anomalous event.
   */
  detail?: DescribeEventDetailResponseBodyEventDetail;
  /**
   * @remarks
   * The display name of the account that triggered the anomalous event.
   * 
   * @example
   * yundunsr
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the anomalous event occurred. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1545829129000
   */
  eventTime?: number;
  /**
   * @remarks
   * An array that consists of the handling records of the anomalous event.
   */
  handleInfoList?: DescribeEventDetailResponseBodyEventHandleInfoList[];
  /**
   * @remarks
   * The unique ID of the anomalous event.
   * 
   * @example
   * 52234
   */
  id?: number;
  /**
   * @remarks
   * The details of the alert logs.
   * 
   * @example
   * {"client_ip": ["106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX"], "start_time": "2020-05-10 00:00:01", "instance": ["omniscience-data", "punish-beaver-data"], "end_time": "2020-05-10 00:21:22", "client_ua": ["Java/1.8.0_152", "Java/1.8.0_92", "aliyun-sdk-java/2.0.0", "aliyun-sdk-java/2.8.0(Linux/4.9.151-015.ali3000.alios7.x86_64/amd64;1.8.0_152)"], "user_name": 1512222261295262}
   */
  logDetail?: string;
  /**
   * @remarks
   * The username of the account that triggered the anomalous event.
   * 
   * @example
   * det1111
   */
  loginName?: string;
  /**
   * @remarks
   * Whether it is a new version of the alarm. Value:
   * - **true**: Yes. 
   * - **false**: No.
   * 
   * @example
   * true
   */
  newAlarm?: boolean;
  /**
   * @remarks
   * The name of the service in which the anomalous event was detected. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The handling status for the anomalous event. Valid values:
   * 
   * *   **0**: unhandled
   * *   **1**: confirmed
   * *   **2**: marked as false positive
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The name of the handling status for the anomalous event.
   * 
   * @example
   * Pending
   */
  statusName?: string;
  /**
   * @remarks
   * The code of the anomalous event subtype.
   * 
   * @example
   * 020008
   */
  subTypeCode?: string;
  /**
   * @remarks
   * The name of the anomalous event subtype.
   * 
   * @example
   * Anomalous volume of downloaded data
   */
  subTypeName?: string;
  /**
   * @remarks
   * The code of the anomalous event type.
   * 
   * @example
   * 02
   */
  typeCode?: string;
  /**
   * @remarks
   * The name of the anomalous event type. Valid values:
   * 
   * *   **01**: anomalous permission usage
   * *   **02**: anomalous data flow
   * *   **03**: anomalous data operation
   * 
   * @example
   * Anomalous data flow
   */
  typeName?: string;
  /**
   * @remarks
   * The ID of the account that triggered the anomalous event.
   * 
   * @example
   * 229157443385014***
   */
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
  /**
   * @remarks
   * The service to which the anomalous event detection rule applies. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * RDS
   */
  adaptedProduct?: string;
  /**
   * @remarks
   * The code of the anomalous event subtype.
   * 
   * @example
   * 020008
   */
  code?: string;
  /**
   * @remarks
   * The code of the configuration.
   * 
   * @example
   * 0100**
   */
  configCode?: string;
  /**
   * @remarks
   * The content format of anomalous event detection rule. Valid values:
   * 
   * *   **0**: numeric values such as thresholds
   * *   **1**: text such as IP addresses
   * 
   * @example
   * 1
   */
  configContentType?: number;
  /**
   * @remarks
   * The description of the configuration.
   * 
   * @example
   * The period of time for which the permission is not used exceeds the threshold. The specified threshold is ${value} calendar days.
   */
  configDescription?: string;
  /**
   * @remarks
   * The value of the configuration.
   * 
   * @example
   * 90
   */
  configValue?: string;
  /**
   * @remarks
   * The description of the anomalous event subtype.
   * 
   * @example
   * Inappropriate configuration-No protection for the MaxCompute sensitive project, \\*\\*\\*\\*
   */
  description?: string;
  /**
   * @remarks
   * The number of times that the anomalous event hits the anomalous event detection rule.
   * 
   * @example
   * 2
   */
  eventHitCount?: number;
  /**
   * @remarks
   * The ID of the anomalous event subtype.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the anomalous event subtype.
   * 
   * @example
   * Inappropriate configuration-No protection for the MaxCompute sensitive project
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether detection is enabled for the anomalous event subtype. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The code of the anomalous event type.
   * 
   * @example
   * 01
   */
  code?: string;
  /**
   * @remarks
   * The description of the anomalous event type.
   * 
   * @example
   * Anomalous permission usage,\\*\\*\\*\\*
   */
  description?: string;
  /**
   * @remarks
   * The ID of the anomalous event type.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the anomalous event type.
   * 
   * @example
   * Anomalous permission usage
   */
  name?: string;
  /**
   * @remarks
   * An array that consists of anomalous event subtypes.
   */
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
  /**
   * @remarks
   * The time when an alert was triggered for the anomalous event. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 154529000
   */
  alertTime?: number;
  /**
   * @remarks
   * Indicates whether the detection of anomalous events is enhanced. If the detection of anomalous events is enhanced, the detection accuracy and the rate of triggering alerts for anomalous events are improved. Valid values:
   * 
   * *   true: yes
   * *   false: no
   * 
   * @example
   * false
   */
  backed?: boolean;
  /**
   * @remarks
   * The display name of the account that is used to handle the anomalous event.
   * 
   * @example
   * yundunsr
   */
  dealDisplayName?: string;
  /**
   * @remarks
   * The username of the account that is used to handle the anomalous event.
   * 
   * @example
   * det1111
   */
  dealLoginName?: string;
  /**
   * @remarks
   * The time when the anomalous event was handled. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 12223300
   */
  dealTime?: number;
  /**
   * @remarks
   * The ID of the account that is used to handle the anomalous event.
   * 
   * @example
   * 229157443385014***
   */
  dealUserId?: number;
  /**
   * @remarks
   * The display name of the account that triggered the anomalous event.
   * 
   * @example
   * yundunsr
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the anomalous event occurred. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1545829129000
   */
  eventTime?: number;
  /**
   * @remarks
   * The ID of the anomalous event.
   * 
   * @example
   * 42233335555
   */
  id?: number;
  /**
   * @remarks
   * The username of the account that triggered the anomalous event.
   * 
   * @example
   * det1111
   */
  loginName?: string;
  /**
   * @remarks
   * The name of the service in which the anomalous event was detected.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The handling status for the anomalous event. Valid values:
   * 
   * *   0: unhandled
   * *   1: confirmed
   * *   2: marked as false positive
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The name of the handling status for the anomalous event.
   * 
   * @example
   * Pending
   */
  statusName?: string;
  /**
   * @remarks
   * The code of the anomalous event subtype.
   * 
   * @example
   * 020008
   */
  subTypeCode?: string;
  /**
   * @remarks
   * The name of the anomalous event subtype.
   * 
   * @example
   * Anomalous volume of downloaded data
   */
  subTypeName?: string;
  /**
   * @remarks
   * The name of the destination service in an anomalous data flow.
   * 
   * @example
   * RDS
   */
  targetProductCode?: string;
  /**
   * @remarks
   * The code of the anomalous event type.
   * 
   * @example
   * 02
   */
  typeCode?: string;
  /**
   * @remarks
   * The name of the anomalous event type.
   * 
   * @example
   * Anomalous data flow
   */
  typeName?: string;
  /**
   * @remarks
   * The ID of the account that triggered the anomalous event.
   * 
   * @example
   * 1978132506596***
   */
  userId?: number;
  /**
   * @remarks
   * The severity of the anomalous event.
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * Indicates whether the security audit feature is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Indicates whether the automatic scan feature is enabled to detect sensitive data. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  autoScan?: number;
  /**
   * @remarks
   * Indicates whether the username and password can be changed. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  canModifyUserName?: boolean;
  /**
   * @remarks
   * The data detection status. Valid values:
   * 
   * *   **0**: The data detection is ready.
   * *   **1**: The data detection is running.
   * *   **2**: The connectivity test is in progress.
   * *   **3**: The connectivity test passed.
   * *   **4**: The connectivity test failed.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * Indicates whether DSC has the data de-identification permissions on the data asset. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  datamaskStatus?: number;
  /**
   * @remarks
   * The name of the database to which the data asset belongs.
   * 
   * @example
   * demo
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates whether sensitive data detection is enabled for the data asset. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The type of the database engine. Valid values: **MySQL, MariaDB, Oracle, PostgreSQL, and SQLServer**.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * The password is invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the data asset was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1625587423000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The unique ID of the data asset.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * Test
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * rm-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The storage space size of the instance. This parameter is valid only if the value of the ProductId parameter is 2. Unit: bytes.
   * 
   * @example
   * 409600
   */
  instanceSize?: number;
  /**
   * @remarks
   * The time when the data asset was last modified. Unit: milliseconds.
   * 
   * @example
   * 1625587423000
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The ID of the account that is last used to modify the data asset.
   * 
   * @example
   * demo
   */
  lastModifyUserId?: string;
  /**
   * @remarks
   * The retention period of raw logs. Unit: days.
   * 
   * @example
   * 30
   */
  logStoreDay?: number;
  /**
   * @remarks
   * Indicates whether the password is used. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  passwordStatus?: number;
  /**
   * @remarks
   * The ID of the service to which the data asset belongs. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 2
   */
  productId?: number;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  regionName?: string;
  /**
   * @remarks
   * The number of sensitive data samples. Valid values: **0**, **5**, and **10**. Unit: data entries.
   * 
   * @example
   * 10
   */
  samplingSize?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 11
   */
  tenantId?: string;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * user1
   */
  tenantName?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * User01
   */
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
  /**
   * @remarks
   * The ID of the tag. Valid values:
   * 
   * *   **101**: personal sensitive information
   * *   **102**: personal information
   * *   **107**: general information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The name of the tag. Valid values:
   * 
   * *   Personal sensitive information
   * *   Personal information
   * *   General information
   * 
   * @example
   * personal sensitive data
   */
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
  /**
   * @remarks
   * The time when the data asset was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1637226782000
   */
  creationTime?: number;
  /**
   * @remarks
   * The name of the department to which the data asset belongs.
   * 
   * @example
   * ***DemoCenter
   */
  departName?: string;
  /**
   * @remarks
   * The unique ID of the data asset in DSC.
   * 
   * @example
   * 11111
   */
  id?: number;
  /**
   * @remarks
   * The description of the data asset.
   * 
   * @example
   * Data asset Information 1
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The security status of the data asset. Valid values:
   * 
   * *   **true**: The data asset is secure.
   * *   **false**: The data asset is insecure.
   * 
   * @example
   * true
   */
  labelsec?: boolean;
  /**
   * @remarks
   * The time when the data asset was last scanned. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1637622793000
   */
  lastFinishTime?: number;
  /**
   * @remarks
   * A list of tags.
   */
  modelTags?: DescribeInstancesResponseBodyItemsModelTags[];
  /**
   * @remarks
   * The name of the data asset.
   * 
   * @example
   * gxdata
   */
  name?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  odpsRiskLevelName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account to which the data asset belongs.
   * 
   * @example
   * dtdep-239-******
   */
  owner?: string;
  /**
   * @remarks
   * The name of the service to which the data asset belongs, such as MaxCompute, OSS, and ApsaraDB RDS. For more information about the types of data assets that DSC can scan to detect sensitive data, see [Supported data assets](https://help.aliyun.com/document_detail/212906.html).
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the data asset belongs.
   * 
   * @example
   * 5
   */
  productId?: string;
  /**
   * @remarks
   * The protection status of the data asset. Valid values:
   * 
   * *   **true**: The data asset is being protected.
   * *   **false**: The data asset is not protected.
   * 
   * @example
   * false
   */
  protection?: boolean;
  /**
   * @remarks
   * The ID of the sensitivity level for the data asset. A higher sensitivity level ID indicates that the identified data is more sensitive.
   * 
   * *   **1**: No sensitive data is detected.
   * *   **2**: sensitive data at level 1.
   * *   **3**: sensitive data at level 2.
   * *   **4**: sensitive data at level 3.
   * *   **5**: sensitive data at level 4.
   * *   **6**: sensitive data at level 5.
   * *   **7**: sensitive data at level 6.
   * *   **8**: sensitive data at level 7.
   * *   **9**: sensitive data at level 8.
   * *   **10**: sensitive data at level 9.
   * *   **11**: sensitive data at level 10.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for the data asset.
   * 
   * @example
   * Sensitive data at level 1
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The name of the sensitive data detection rule that the data asset hits.
   * 
   * @example
   * \\*\\*\\* rule
   */
  ruleName?: string;
  /**
   * @remarks
   * Indicates whether the data asset contains sensitive data. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The number of sensitive data objects in the data asset. For example, if the data asset is an ApsaraDB RDS instance, the value indicates the number of sensitive tables in all databases of the instance.
   * 
   * @example
   * 123
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * Tenant 1
   */
  tenantName?: string;
  /**
   * @remarks
   * The total number of data objects in the data asset. For example, if the data asset is an ApsaraDB RDS instance, the value indicates the total number of tables in all databases of the instance.
   * 
   * @example
   * 231
   */
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
  /**
   * @remarks
   * The tag ID.
   * 
   * *   **101**: sensitive personal information
   * *   **102**: personal information
   * *   **103**: important information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * *   Sensitive personal information
   * *   Personal information
   * *   Important information
   * 
   * @example
   * personal sensitive data
   */
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
  /**
   * @remarks
   * The type of the OSS object.
   * 
   * @example
   * Excel file
   */
  categoryName?: string;
  /**
   * @remarks
   * The number of times that the OSS object hits the sensitive data detection rule.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * A list of tags for data that hits the recognition model.
   */
  modelTags?: DescribeOssObjectDetailResponseBodyOssObjectDetailRuleListModelTags[];
  /**
   * @remarks
   * The ID of the sensitivity level of the OSS object.
   * 
   * *   **1**: No sensitive data is detected.
   * *   **2**: indicates the low sensitivity level.
   * *   **3**: indicates the medium sensitivity level.
   * *   **4**: indicates the high sensitivity level.
   * *   **5**: indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for the OSS object.
   * 
   * @example
   * Medium sensitivity level
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The name of the sensitive data detection rule.
   * 
   * @example
   * \\*\\*\\* rule
   */
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
  /**
   * @remarks
   * The name of the OSS bucket to which the OSS object belongs.
   * 
   * @example
   * bucke***
   */
  bucketName?: string;
  /**
   * @remarks
   * The type of the OSS object.
   * 
   * @example
   * Excel file
   */
  categoryName?: string;
  /**
   * @remarks
   * The name of the OSS object.
   * 
   * @example
   * obj_id
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the OSS object.
   * 
   * @example
   * cn-***
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the sensitivity level for the OSS object.
   * 
   * @example
   * Medium sensitivity level
   */
  riskLevelName?: string;
  /**
   * @remarks
   * A list of the sensitive data detection rules that the OSS object hits.
   */
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
  /**
   * @example
   * 101
   */
  id?: number;
  /**
   * @example
   * personal sensitive data
   */
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
  /**
   * @example
   * Excel
   */
  categoryName?: string;
  /**
   * @example
   * 2
   */
  count?: number;
  modelTags?: DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleListModelTags[];
  /**
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @example
   * S1
   */
  riskLevelName?: string;
  /**
   * @example
   * name
   */
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
  /**
   * @example
   * lv-demo
   */
  bucketName?: string;
  /**
   * @example
   * Excel file
   */
  categoryName?: string;
  /**
   * @example
   * obj_id
   */
  name?: string;
  /**
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @example
   * S1
   */
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
  /**
   * @remarks
   * The number of times that the rule is hit.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported.
   * 
   * @example
   * ID card
   */
  name?: string;
  /**
   * @remarks
   * The ID of the sensitivity level of the OSS object. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * oss-duplicate-***
   */
  bucketName?: string;
  /**
   * @remarks
   * The type of the OSS object. Valid values include **900001**, **800015**, or **800005**, which indicates the MP4 file, PDF file, or OSS configuration file, respectively.
   * 
   * @example
   * 900001
   */
  category?: number;
  /**
   * @remarks
   * The name of the file type.
   * 
   * @example
   * MP4 file
   */
  categoryName?: string;
  /**
   * @remarks
   * The code of the file type.
   * 
   * @example
   * 1
   */
  fileCategoryCode?: number;
  /**
   * @remarks
   * The name of the file type.
   * 
   * @example
   * text file
   */
  fileCategoryName?: string;
  /**
   * @remarks
   * The file ID of the OSS object.
   * 
   * @example
   * file-22***
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the OSS object.
   * 
   * @example
   * 17383
   */
  id?: string;
  /**
   * @remarks
   * The ID of the instance to which the OSS object belongs.
   * 
   * @example
   * 1232122
   */
  instanceId?: number;
  /**
   * @remarks
   * The time when the file was last modified.
   * 
   * @example
   * 1536751124000
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The name of the OSS object.
   * 
   * @example
   * obj_id
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the OSS object.
   * 
   * @example
   * cn-***
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the sensitivity level of the OSS object. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for the OSS object.
   * 
   * @example
   * Medium sensitivity level
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The number of rules that are hit.
   * 
   * @example
   * 100
   */
  ruleCount?: number;
  /**
   * @remarks
   * A list of rules.
   */
  ruleList?: DescribeOssObjectsResponseBodyItemsRuleList[];
  /**
   * @remarks
   * The number of fields that are hit.
   * 
   * @example
   * 50
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * The point in time when the MaxCompute package was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The ID of the package.
   * 
   * @example
   * 111111
   */
  id?: number;
  /**
   * @remarks
   * The ID of the instance to which the package belongs.
   * 
   * @example
   * 223453332
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the package.
   * 
   * @example
   * gxdata
   */
  name?: string;
  /**
   * @remarks
   * The account of the user that owns the package.
   * 
   * @example
   * cou-2221
   */
  owner?: string;
  /**
   * @remarks
   * The sensitivity level of the package. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 4
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for the package.
   * 
   * @example
   * Highest sensitivity level
   */
  riskLevelName?: string;
  /**
   * @remarks
   * Indicates whether the package contains sensitive data. Valid values:
   * 
   * *   true: yes
   * *   false: no
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The total volume of sensitive data in the package. For example, the value can be the total number of sensitive tables in the MaxCompute package.
   * 
   * @example
   * 123
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The total volume of data in the package. For example, the value can be the total number of tables in the MaxCompute package.
   * 
   * @example
   * 321
   */
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
  /**
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @example
   * 1
   */
  authStatus?: number;
  authTime?: number;
  /**
   * @example
   * Running
   */
  clusterStatus?: string;
  /**
   * @example
   * Primary
   */
  connectNode?: string;
  /**
   * @example
   * 3
   */
  dbNum?: string;
  /**
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @example
   * instance description
   */
  instanceDescription?: string;
  /**
   * @example
   * rm-2h066mht2vz
   */
  instanceId?: string;
  /**
   * @example
   * 409600
   */
  instanceSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  localName?: string;
  memberAccount?: number;
  /**
   * @example
   * rm-uf6b9897shxxx.test
   */
  parentId?: string;
  regionId?: string;
  /**
   * @example
   * RDS
   */
  resourceType?: string;
  /**
   * @example
   * Primary,Secondary
   */
  supportConnectNodes?: string;
  /**
   * @example
   * HBJWDSBE-zh_CN
   */
  tenantId?: string;
  /**
   * @example
   * user1
   */
  tenantName?: string;
  /**
   * @example
   * 1
   */
  unConnectDbCount?: string;
  /**
   * @example
   * engine type not support
   */
  unSupportOneClickAuthReason?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      authStatus: 'AuthStatus',
      authTime: 'AuthTime',
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
      regionId: 'RegionId',
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
      authTime: 'number',
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
      regionId: 'string',
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
  /**
   * @remarks
   * The description of the sensitivity level. You can enter a custom description.
   * 
   * The following list describes the sensitivity level names and the corresponding default description:
   * 
   * *   **NA**: which indicates that no sensitive data is detected.
   * *   **S1**: which indicates the sensitive data at sensitivity level 1.
   * *   **S2**: which indicates the sensitive data at sensitivity level 2.
   * *   **S3**: which indicates the sensitive data at sensitivity level 3.
   * *   **S4**: which indicates the sensitive data at sensitivity level 4.
   * *   **S5**: which indicates the sensitive data at sensitivity level 5.
   * *   **S6**: which indicates the sensitive data at sensitivity level 6.
   * *   **S7**: which indicates the sensitive data at sensitivity level 7.
   * *   **S8**: which indicates the sensitive data at sensitivity level 8.
   * *   **S9**: which indicates the sensitive data at sensitivity level 9.
   * *   **S10**: which indicates the sensitive data at sensitivity level 10.
   * 
   * @example
   * Sensitive data at sensitivity level 1
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the sensitivity level. Valid values: 1 to 11. Each sensitivity level ID maps a sensitivity level. For example, the sensitivity level ID of 2 corresponds to the sensitivity level S1.
   * 
   * For more information, see the description of the Name parameter.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The name of the sensitivity level. The highest sensitivity level varies based on rule templates. The highest sensitivity level is S10. The highest sensitivity level of the **Built-in data security classification templates for Alibaba and Ant Group** is S4, and that of the **built-in classification templates for financial data** and **built-in classification templates for assets** is S5. For more information about the built-in classification templates for financial data, see Guidelines for Security Classification of Financial Data and Security Data - JRT 0197-2020. For a copied rule template, the highest sensitivity level is S10. The following list describes the sensitivity level names and the corresponding IDs:
   * 
   * *   **NA**: 1
   * *   **S1**: 2
   * *   **S2**: 3
   * *   **S3**: 4
   * *   **S4**: 5
   * *   **S5**: 6
   * *   **S6**: 7
   * *   **S7**: 8
   * *   **S8**: 9
   * *   **S9**: 10
   * *   **S10**: 11
   * 
   * @example
   * S1
   */
  name?: string;
  /**
   * @remarks
   * The number of times that each sensitivity level is referenced in the rule template. Default value: 0.
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * The content type of the sensitive data detection rule. Valid values:
   * 
   * *   **0**: keyword
   * *   **2**: regular expression
   * 
   * @example
   * 2
   */
  category?: number;
  /**
   * @remarks
   * The name of the content type of the sensitive data detection rule.
   * 
   * @example
   * Regular expression
   */
  categoryName?: string;
  /**
   * @remarks
   * The content in the sensitive data detection rule.
   * 
   * >  A built-in detection rule whose CustomType is 0 does not return the content of the rule.
   * 
   * @example
   * (?:\\\\D|^)((?:(?:25[0-4]|2[0-4]\\\\d|1\\\\d{2}|[1-9]\\\\d{1})\\\\.)(?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){2}(?:25[0-5]|2[0-4]\\\\d|1[0-9]\\\\d|[1-9]\\\\d|[1-9]))(?:\\\\D|$)
   */
  content?: string;
  /**
   * @remarks
   * The type of the content in the sensitive data detection rule. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates attempts to exploit SQL injections. The value 2 indicates bypass by using SQL injections. The value 3 indicates abuse of stored procedures. The value 4 indicates buffer overflow. The value 5 indicates SQL injections based on errors.
   * 
   * @example
   * 1
   */
  contentCategory?: string;
  /**
   * @remarks
   * The type of the sensitive data detection rule.
   * 
   * *   0: built-in rule
   * *   1: custom rule
   * 
   * @example
   * 1
   */
  customType?: number;
  /**
   * @remarks
   * The description of the sensitive data detection rule.
   * 
   * @example
   * The sensitive data detection rule is used to detect IP addresses.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the account that is used to create the sensitive data detection rule.
   * 
   * @example
   * ****test
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the sensitive data detection rule is created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1545277010000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the sensitive data detection rule is modified. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1545277010000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The parent group type of the rule.
   * 
   * @example
   * 4_1
   */
  groupId?: string;
  /**
   * @remarks
   * The number of times that the sensitive data detection rule is hit.
   * 
   * @example
   * 3
   */
  hitTotalCount?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule.
   * 
   * @example
   * 20000
   */
  id?: number;
  /**
   * @remarks
   * The username of the account that is used to create the sensitive data detection rule.
   * 
   * @example
   * det1111
   */
  loginName?: string;
  /**
   * @remarks
   * The key of the primary dimension.
   * 
   * @example
   * key
   */
  majorKey?: string;
  /**
   * @remarks
   * The match type. Valid values:
   * 
   * *   **1**: rule-based match
   * *   **2**: dictionary-based match
   * 
   * @example
   * 1
   */
  matchType?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule.
   * 
   * @example
   * IP address
   */
  name?: string;
  /**
   * @remarks
   * The name of the service to which the data asset belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the sensitive data detection rule is applied. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 2
   */
  productId?: number;
  /**
   * @remarks
   * The sensitivity level of the sensitive data that hits the sensitive data detection rule. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The sensitivity level of data that hits the sensitive data detection rule. Valid values:
   * 
   * *   **N/A**: indicates that no sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The statistical expression.
   * 
   * @example
   * 1
   */
  statExpress?: string;
  /**
   * @remarks
   * The status of the sensitive data detection rule. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The data asset type that is supported by the sensitive data detection rule. Valid values:
   * 
   * *   **0**: all data assets
   * *   **1**: structured data assets
   * *   **2**: unstructured data assets
   * 
   * @example
   * 2
   */
  supportForm?: number;
  /**
   * @remarks
   * The name of the service to which the data asset belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  target?: string;
  /**
   * @remarks
   * The ID of the account that is used to create the sensitive data detection rule.
   * 
   * @example
   * 0
   */
  userId?: number;
  /**
   * @remarks
   * The severity level. Valid values:
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 12
   */
  count?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * Rule name
   */
  name?: string;
  /**
   * @remarks
   * The sensitivity level of the sensitive data that hits the sensitive data detection rule. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The point in time when the table was created. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * 222
   */
  id?: number;
  /**
   * @remarks
   * The description of the data asset.
   * 
   * @example
   * Description 1
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The ID of the data asset to which the table belongs.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the data asset to which the table belongs.
   * 
   * @example
   * Data Asset 1
   */
  instanceName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * gxdata
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account to which the table belongs.
   * 
   * @example
   * dtdep-239-******
   */
  owner?: string;
  /**
   * @remarks
   * The name of the service to which the table belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**. For more information about the types of data assets from which DSC can scan for sensitive data, see [Supported data assets](https://help.aliyun.com/document_detail/212906.html).
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the table belongs.
   * 
   * @example
   * 1
   */
  productId?: string;
  /**
   * @remarks
   * The sensitivity level of the table. Each sensitivity level ID corresponds to a sensitivity level name. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for the table. Valid values:
   * 
   * *   **N/A**: indicates that no sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The information about the sensitive data detection rules that are hit.
   */
  ruleList?: DescribeTablesResponseBodyItemsRuleList[];
  /**
   * @remarks
   * Indicates whether the table contains sensitive fields. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The total number of sensitive fields in the table.
   * 
   * @example
   * 32
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The percentage of sensitive fields in the table.
   * 
   * @example
   * 21%
   */
  sensitiveRatio?: string;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * Tenant 1
   */
  tenantName?: string;
  /**
   * @remarks
   * The total number of fields in the table.
   * 
   * @example
   * 1234
   */
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
  /**
   * @example
   * 376
   */
  id?: number;
  /**
   * @example
   * Model Name
   */
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
  /**
   * @remarks
   * The AccessKey ID of the current account.
   * 
   * @example
   * LTAI4G67HRBzNRmMhfyv****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * Indicates whether the SQL Explorer feature can be disabled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  auditClosable?: boolean;
  /**
   * @remarks
   * Indicates whether the audit resources can be released.
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  auditReleasable?: boolean;
  /**
   * @remarks
   * Indicates whether DSC has permission to access user resources within the current account. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  authed?: boolean;
  /**
   * @remarks
   * The billing method of DCS that is purchased by using the current account. Valid values:
   * 
   * *   **PREPAY**: subscription
   * *   **POSTPAY**: pay-as-you-go
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The permissions that the current account has. Valid values:
   * 
   * *   **0**: The current account has the administrative permissions or read-only permissions on Data Security Center.
   * *   **1**: The current account has the permissions to manage data domains.
   * 
   * @example
   * 1
   */
  dataManagerRole?: number;
  /**
   * @remarks
   * The ID of the data security center instance purchased by the main account.
   * 
   * @example
   * sddp-cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of instances within the current account.
   * 
   * @example
   * 32
   */
  instanceNum?: number;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 10
   */
  instanceTotalCount?: number;
  /**
   * @remarks
   * Indicates whether the data security lab feature is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  labStatus?: number;
  /**
   * @remarks
   * OSS total storage capacity. Unit: Bytes.
   * 
   * @example
   * 2048
   */
  ossTotalSize?: number;
  /**
   * @remarks
   * Accumulate the number of days to protect user assets.
   * 
   * @example
   * 2
   */
  protectionDays?: number;
  /**
   * @remarks
   * Indicates whether DSC is purchased. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  purchased?: boolean;
  /**
   * @remarks
   * The grace period between when DSC is expired and when DSC is released. Unit: days.
   * 
   * @example
   * 15
   */
  releaseDays?: number;
  /**
   * @remarks
   * The time when the audit resources are released. Unit: milliseconds.
   * 
   * @example
   * 15000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The remaining period for which the data assets within the current account can be protected by DSC.
   * 
   * @example
   * 131
   */
  remainDays?: number;
  /**
   * @remarks
   * Indicates whether the current account uses a free trial of DSC. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  trail?: boolean;
  /**
   * @remarks
   * Indicates whether the agent audit feature is used. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  useAgentAudit?: boolean;
  /**
   * @remarks
   * The number of instances that are used.
   * 
   * @example
   * 125
   */
  useInstanceNum?: number;
  /**
   * @remarks
   * The occupied space of the Object Storage Service (OSS) bucket. Unit: bytes.
   * 
   * @example
   * 234
   */
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
   * Modifies the configurations of a common configuration item for alerts.
   * 
   * @remarks
   * You can call this operation to create or restore configurations based on the codes of common configuration items. This allows you to manage the configurations of common configuration items.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigResponse
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
   * Modifies the configurations of a common configuration item for alerts.
   * 
   * @remarks
   * You can call this operation to create or restore configurations based on the codes of common configuration items. This allows you to manage the configurations of common configuration items.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateConfigRequest
   * @returns CreateConfigResponse
   */
  async createConfig(request: CreateConfigRequest): Promise<CreateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConfigWithOptions(request, runtime);
  }

  /**
   * Authorizes Data Security Center (DSC) to scan data assets. The data assets can be a database, a project, or a bucket.
   * 
   * @remarks
   * You can call this operation to authorize DSC to scan data assets to ensure the security of the data assets.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateDataLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataLimitResponse
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

    if (!Util.isUnset(request.instantlyScan)) {
      query["InstantlyScan"] = request.instantlyScan;
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
   * Authorizes Data Security Center (DSC) to scan data assets. The data assets can be a database, a project, or a bucket.
   * 
   * @remarks
   * You can call this operation to authorize DSC to scan data assets to ensure the security of the data assets.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateDataLimitRequest
   * @returns CreateDataLimitResponse
   */
  async createDataLimit(request: CreateDataLimitRequest): Promise<CreateDataLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataLimitWithOptions(request, runtime);
  }

  /**
   * Creates a custom sensitive data detection rule.
   * 
   * @param request - CreateRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRuleResponse
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
   * Creates a custom sensitive data detection rule.
   * 
   * @param request - CreateRuleRequest
   * @returns CreateRuleResponse
   */
  async createRule(request: CreateRuleRequest): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  /**
   * Creates a custom scan task. The custom scan task is used to scan data assets on which Data Security Center (DSC) is granted the scan permissions for sensitive data.
   * 
   * @remarks
   * You can call this operation to create a custom scan task for authorized data assets. You can customize the interval between two consecutive scan tasks and the time when the scan task is executed next time.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateScanTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScanTaskResponse
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
   * Creates a custom scan task. The custom scan task is used to scan data assets on which Data Security Center (DSC) is granted the scan permissions for sensitive data.
   * 
   * @remarks
   * You can call this operation to create a custom scan task for authorized data assets. You can customize the interval between two consecutive scan tasks and the time when the scan task is executed next time.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateScanTaskRequest
   * @returns CreateScanTaskResponse
   */
  async createScanTask(request: CreateScanTaskRequest): Promise<CreateScanTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScanTaskWithOptions(request, runtime);
  }

  /**
   * Creates a service-linked role for Data Security Center (DSC) to grant DSC the permissions to access data assets in other services.
   * 
   * @remarks
   * You can call this operation to allow DSC to access the data assets in services such as Object Storage Service (OSS), ApsaraDB RDS, and MaxCompute. After you call this operation, the system automatically creates a service-linked role named AliyunServiceRoleForSDDP and attaches the AliyunServiceRolePolicyForSDDP policy to the role.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateSlrRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSlrRoleResponse
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
   * Creates a service-linked role for Data Security Center (DSC) to grant DSC the permissions to access data assets in other services.
   * 
   * @remarks
   * You can call this operation to allow DSC to access the data assets in services such as Object Storage Service (OSS), ApsaraDB RDS, and MaxCompute. After you call this operation, the system automatically creates a service-linked role named AliyunServiceRoleForSDDP and attaches the AliyunServiceRolePolicyForSDDP policy to the role.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateSlrRoleRequest
   * @returns CreateSlrRoleResponse
   */
  async createSlrRole(request: CreateSlrRoleRequest): Promise<CreateSlrRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSlrRoleWithOptions(request, runtime);
  }

  /**
   * Revokes the scan permissions on a data asset. The data asset can be a database, an instance, or a bucket.
   * 
   * @remarks
   * You can call this operation to revoke the permissions on a data asset from Data Security Center (DSC).
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteDataLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLimitResponse
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
   * Revokes the scan permissions on a data asset. The data asset can be a database, an instance, or a bucket.
   * 
   * @remarks
   * You can call this operation to revoke the permissions on a data asset from Data Security Center (DSC).
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteDataLimitRequest
   * @returns DeleteDataLimitResponse
   */
  async deleteDataLimit(request: DeleteDataLimitRequest): Promise<DeleteDataLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataLimitWithOptions(request, runtime);
  }

  /**
   * Deletes a custom sensitive data detection rule from Data Security Center (DSC).
   * 
   * @param request - DeleteRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRuleResponse
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
   * Deletes a custom sensitive data detection rule from Data Security Center (DSC).
   * 
   * @param request - DeleteRuleRequest
   * @returns DeleteRuleResponse
   */
  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeCategoryTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCategoryTemplateListResponse
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
   * @param request - DescribeCategoryTemplateListRequest
   * @returns DescribeCategoryTemplateListResponse
   */
  async describeCategoryTemplateList(request: DescribeCategoryTemplateListRequest): Promise<DescribeCategoryTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCategoryTemplateListWithOptions(request, runtime);
  }

  /**
   * Queries rules in a classification template by page.
   * 
   * @remarks
   * You can call this operation to query rules in a classification template.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCategoryTemplateRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCategoryTemplateRuleListResponse
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
   * Queries rules in a classification template by page.
   * 
   * @remarks
   * You can call this operation to query rules in a classification template.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCategoryTemplateRuleListRequest
   * @returns DescribeCategoryTemplateRuleListResponse
   */
  async describeCategoryTemplateRuleList(request: DescribeCategoryTemplateRuleListRequest): Promise<DescribeCategoryTemplateRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCategoryTemplateRuleListWithOptions(request, runtime);
  }

  /**
   * Queries data in the columns of the tables that Data Security Center (DSC) is authorized to access. The tables include the tables of MaxCompute and ApsaraDB RDS.
   * 
   * @remarks
   * You can call this operation to query the data in columns of a table that may contain sensitive data. This helps you analyze sensitive data.
   * ## [](#)Precautions
   * The DescribeColumns operation is changed to DescribeColumnsV2. We recommend that you call the DescribeColumnsV2 operation when you develop your applications.
   * ## [](#qps)Limits
   * Each Alibaba Cloud account can call this operation up to 10 times per second. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeColumnsResponse
   */
  async describeColumnsWithOptions(request: DescribeColumnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeColumnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.engineType)) {
      query["EngineType"] = request.engineType;
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

    if (!Util.isUnset(request.modelTagId)) {
      query["ModelTagId"] = request.modelTagId;
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

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateRuleId)) {
      query["TemplateRuleId"] = request.templateRuleId;
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
   * Queries data in the columns of the tables that Data Security Center (DSC) is authorized to access. The tables include the tables of MaxCompute and ApsaraDB RDS.
   * 
   * @remarks
   * You can call this operation to query the data in columns of a table that may contain sensitive data. This helps you analyze sensitive data.
   * ## [](#)Precautions
   * The DescribeColumns operation is changed to DescribeColumnsV2. We recommend that you call the DescribeColumnsV2 operation when you develop your applications.
   * ## [](#qps)Limits
   * Each Alibaba Cloud account can call this operation up to 10 times per second. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeColumnsRequest
   * @returns DescribeColumnsResponse
   */
  async describeColumns(request: DescribeColumnsRequest): Promise<DescribeColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeColumnsWithOptions(request, runtime);
  }

  /**
   * Queries the columns of tables in instances, such as MaxCompute projects and ApsaraDB RDS instances, that you authorize Data Security Center (DSC) to access.
   * 
   * @param request - DescribeColumnsV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeColumnsV2Response
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
   * Queries the columns of tables in instances, such as MaxCompute projects and ApsaraDB RDS instances, that you authorize Data Security Center (DSC) to access.
   * 
   * @param request - DescribeColumnsV2Request
   * @returns DescribeColumnsV2Response
   */
  async describeColumnsV2(request: DescribeColumnsV2Request): Promise<DescribeColumnsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeColumnsV2WithOptions(request, runtime);
  }

  /**
   * Queries common configuration items for alerts.
   * 
   * @param request - DescribeConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConfigsResponse
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
   * Queries common configuration items for alerts.
   * 
   * @param request - DescribeConfigsRequest
   * @returns DescribeConfigsResponse
   */
  async describeConfigs(request: DescribeConfigsRequest): Promise<DescribeConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the sensitive data detection results of data assets that Data Security Center (DSC) is authorized to access.
   * 
   * @param request - DescribeDataAssetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataAssetsResponse
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
   * Queries the sensitive data detection results of data assets that Data Security Center (DSC) is authorized to access.
   * 
   * @param request - DescribeDataAssetsRequest
   * @returns DescribeDataAssetsResponse
   */
  async describeDataAssets(request: DescribeDataAssetsRequest): Promise<DescribeDataAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataAssetsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a data asset, such as a MaxCompute project, an ApsaraDB RDS database, or an Object Storage Service (OSS) bucket, that you authorize Data Security Center (DSC) to access.
   * 
   * @param request - DescribeDataLimitDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataLimitDetailResponse
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
   * Queries the details of a data asset, such as a MaxCompute project, an ApsaraDB RDS database, or an Object Storage Service (OSS) bucket, that you authorize Data Security Center (DSC) to access.
   * 
   * @param request - DescribeDataLimitDetailRequest
   * @returns DescribeDataLimitDetailResponse
   */
  async describeDataLimitDetail(request: DescribeDataLimitDetailRequest): Promise<DescribeDataLimitDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataLimitDetailWithOptions(request, runtime);
  }

  /**
   * Queries data assets, such as instances, databases, and Object Storage Service (OSS) buckets, that you authorize Data Security Center (DSC) to scan in a service.
   * 
   * @remarks
   * You can call this operation to query the data assets that are authorized to be scanned. This facilitates resource search and aggregation.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDataLimitSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataLimitSetResponse
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
   * Queries data assets, such as instances, databases, and Object Storage Service (OSS) buckets, that you authorize Data Security Center (DSC) to scan in a service.
   * 
   * @remarks
   * You can call this operation to query the data assets that are authorized to be scanned. This facilitates resource search and aggregation.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDataLimitSetRequest
   * @returns DescribeDataLimitSetResponse
   */
  async describeDataLimitSet(request: DescribeDataLimitSetRequest): Promise<DescribeDataLimitSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataLimitSetWithOptions(request, runtime);
  }

  /**
   * Queries the data assets such as instances, databases, or buckets that Data Security Center (DSC) is authorized to access.
   * 
   * @param request - DescribeDataLimitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataLimitsResponse
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
   * Queries the data assets such as instances, databases, or buckets that Data Security Center (DSC) is authorized to access.
   * 
   * @param request - DescribeDataLimitsRequest
   * @returns DescribeDataLimitsResponse
   */
  async describeDataLimits(request: DescribeDataLimitsRequest): Promise<DescribeDataLimitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataLimitsWithOptions(request, runtime);
  }

  /**
   * Queries the execution information about a de-identification task.
   * 
   * @remarks
   * You can call this operation to query the execution information of a static de-identification task, including the status and progress.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDataMaskingRunHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataMaskingRunHistoryResponse
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
   * Queries the execution information about a de-identification task.
   * 
   * @remarks
   * You can call this operation to query the execution information of a static de-identification task, including the status and progress.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDataMaskingRunHistoryRequest
   * @returns DescribeDataMaskingRunHistoryResponse
   */
  async describeDataMaskingRunHistory(request: DescribeDataMaskingRunHistoryRequest): Promise<DescribeDataMaskingRunHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataMaskingRunHistoryWithOptions(request, runtime);
  }

  /**
   * Queries de-identification tasks.
   * 
   * @remarks
   * You can call this operation to query static de-identification tasks. This facilitates task queries and management.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDataMaskingTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataMaskingTasksResponse
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
   * Queries de-identification tasks.
   * 
   * @remarks
   * You can call this operation to query static de-identification tasks. This facilitates task queries and management.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDataMaskingTasksRequest
   * @returns DescribeDataMaskingTasksResponse
   */
  async describeDataMaskingTasks(request: DescribeDataMaskingTasksRequest): Promise<DescribeDataMaskingTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataMaskingTasksWithOptions(request, runtime);
  }

  /**
   * 查看数据对象列详情
   * 
   * @param request - DescribeDataObjectColumnDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataObjectColumnDetailResponse
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
   * 查看数据对象列详情
   * 
   * @param request - DescribeDataObjectColumnDetailRequest
   * @returns DescribeDataObjectColumnDetailResponse
   */
  async describeDataObjectColumnDetail(request: DescribeDataObjectColumnDetailRequest): Promise<DescribeDataObjectColumnDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataObjectColumnDetailWithOptions(request, runtime);
  }

  /**
   * 查看数据对象列详情V2
   * 
   * @param request - DescribeDataObjectColumnDetailV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataObjectColumnDetailV2Response
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
   * 查看数据对象列详情V2
   * 
   * @param request - DescribeDataObjectColumnDetailV2Request
   * @returns DescribeDataObjectColumnDetailV2Response
   */
  async describeDataObjectColumnDetailV2(request: DescribeDataObjectColumnDetailV2Request): Promise<DescribeDataObjectColumnDetailV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataObjectColumnDetailV2WithOptions(request, runtime);
  }

  /**
   * 分页查询数据目录对象
   * 
   * @param request - DescribeDataObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataObjectsResponse
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
   * 分页查询数据目录对象
   * 
   * @param request - DescribeDataObjectsRequest
   * @returns DescribeDataObjectsResponse
   */
  async describeDataObjects(request: DescribeDataObjectsRequest): Promise<DescribeDataObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataObjectsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDocTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDocTypesResponse
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
   * @param request - DescribeDocTypesRequest
   * @returns DescribeDocTypesResponse
   */
  async describeDocTypes(request: DescribeDocTypesRequest): Promise<DescribeDocTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDocTypesWithOptions(request, runtime);
  }

  /**
   * Queries the details of an anomalous event. The details include the time when the anomalous event occurred, and the description and handling status of the anomalous event.
   * 
   * @param request - DescribeEventDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventDetailResponse
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
   * Queries the details of an anomalous event. The details include the time when the anomalous event occurred, and the description and handling status of the anomalous event.
   * 
   * @param request - DescribeEventDetailRequest
   * @returns DescribeEventDetailResponse
   */
  async describeEventDetail(request: DescribeEventDetailRequest): Promise<DescribeEventDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventDetailWithOptions(request, runtime);
  }

  /**
   * Queries the types of anomalous events.
   * 
   * @param request - DescribeEventTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventTypesResponse
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
   * Queries the types of anomalous events.
   * 
   * @param request - DescribeEventTypesRequest
   * @returns DescribeEventTypesResponse
   */
  async describeEventTypes(request: DescribeEventTypesRequest): Promise<DescribeEventTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventTypesWithOptions(request, runtime);
  }

  /**
   * Queries anomalous events.
   * 
   * @remarks
   * You can call this operation to query anomalous events that may involve data leaks. This helps you search for and handle anomalous events.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventsResponse
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
   * Queries anomalous events.
   * 
   * @remarks
   * You can call this operation to query anomalous events that may involve data leaks. This helps you search for and handle anomalous events.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeEventsRequest
   * @returns DescribeEventsResponse
   */
  async describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventsWithOptions(request, runtime);
  }

  /**
   * Queries a list of data assets.
   * 
   * @remarks
   * You can query a list of unauthorized or authorized data assets based on the value of AuthStatus.
   * This operation is no longer used for the KMS console of the new version.
   * # [](#qps-)QPS limits
   * This operation can be called up to 10 times per second for each Alibaba Cloud account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSourcesResponse
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
   * Queries a list of data assets.
   * 
   * @remarks
   * You can query a list of unauthorized or authorized data assets based on the value of AuthStatus.
   * This operation is no longer used for the KMS console of the new version.
   * # [](#qps-)QPS limits
   * This operation can be called up to 10 times per second for each Alibaba Cloud account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceSourcesRequest
   * @returns DescribeInstanceSourcesResponse
   */
  async describeInstanceSources(request: DescribeInstanceSourcesRequest): Promise<DescribeInstanceSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSourcesWithOptions(request, runtime);
  }

  /**
   * Queries data assets such as MaxCompute, ApsaraDB RDS, and Object Storage Service (OSS) that you authorize Data Security Center (DSC) to access.
   * 
   * @remarks
   * When you call the DescribeInstances operation, you can specify parameters such as Name and RiskLevelId to query data assets that meet filter conditions.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
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
   * Queries data assets such as MaxCompute, ApsaraDB RDS, and Object Storage Service (OSS) that you authorize Data Security Center (DSC) to access.
   * 
   * @remarks
   * When you call the DescribeInstances operation, you can specify parameters such as Name and RiskLevelId to query data assets that meet filter conditions.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the details of an Object Storage Service (OSS) object that Data Security Center (DSC) is authorized to access.
   * 
   * @remarks
   * You can call this operation to query the details of an Object Storage Service (OSS) object. This helps you locate sensitive data detected in OSS.
   * ## [](#)Precautions
   * The DescribeOssObjectDetail operation is chagned to DescribeOssObjectDetailV2. We recommend that you call the DescribeOssObjectDetailV2 operation when you develop your applications.
   * ## [](#qps)Limits
   * Each Alibaba Cloud account can call this operation up to 10 times per second. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeOssObjectDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssObjectDetailResponse
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
   * Queries the details of an Object Storage Service (OSS) object that Data Security Center (DSC) is authorized to access.
   * 
   * @remarks
   * You can call this operation to query the details of an Object Storage Service (OSS) object. This helps you locate sensitive data detected in OSS.
   * ## [](#)Precautions
   * The DescribeOssObjectDetail operation is chagned to DescribeOssObjectDetailV2. We recommend that you call the DescribeOssObjectDetailV2 operation when you develop your applications.
   * ## [](#qps)Limits
   * Each Alibaba Cloud account can call this operation up to 10 times per second. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeOssObjectDetailRequest
   * @returns DescribeOssObjectDetailResponse
   */
  async describeOssObjectDetail(request: DescribeOssObjectDetailRequest): Promise<DescribeOssObjectDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssObjectDetailWithOptions(request, runtime);
  }

  /**
   * 调用本接口查询数据安全中心连接授权的OSS的单个存储对象的详细信息
   * 
   * @param request - DescribeOssObjectDetailV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssObjectDetailV2Response
   */
  async describeOssObjectDetailV2WithOptions(request: DescribeOssObjectDetailV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeOssObjectDetailV2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.objectKey)) {
      query["ObjectKey"] = request.objectKey;
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
   * 调用本接口查询数据安全中心连接授权的OSS的单个存储对象的详细信息
   * 
   * @param request - DescribeOssObjectDetailV2Request
   * @returns DescribeOssObjectDetailV2Response
   */
  async describeOssObjectDetailV2(request: DescribeOssObjectDetailV2Request): Promise<DescribeOssObjectDetailV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssObjectDetailV2WithOptions(request, runtime);
  }

  /**
   * Queries Object Storage Service (OSS) objects that you authorize Data Security Center (DSC) to access.
   * 
   * @param request - DescribeOssObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssObjectsResponse
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

    if (!Util.isUnset(request.marker)) {
      query["Marker"] = request.marker;
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
   * Queries Object Storage Service (OSS) objects that you authorize Data Security Center (DSC) to access.
   * 
   * @param request - DescribeOssObjectsRequest
   * @returns DescribeOssObjectsResponse
   */
  async describeOssObjects(request: DescribeOssObjectsRequest): Promise<DescribeOssObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssObjectsWithOptions(request, runtime);
  }

  /**
   * Queries information about the MaxCompute packages that Data Security Center (DSC) is authorized to access. The information includes the names of MaxCompute packages, the accounts of MaxCompute package owners, and the sensitivity levels of MaxCompute packages.
   * 
   * @remarks
   * You can call this operation to query MaxCompute packages that are scanned by DSC. This helps you search for MaxCompute packages and view the summary of MaxCompute packages.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePackagesResponse
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
   * Queries information about the MaxCompute packages that Data Security Center (DSC) is authorized to access. The information includes the names of MaxCompute packages, the accounts of MaxCompute package owners, and the sensitivity levels of MaxCompute packages.
   * 
   * @remarks
   * You can call this operation to query MaxCompute packages that are scanned by DSC. This helps you search for MaxCompute packages and view the summary of MaxCompute packages.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePackagesRequest
   * @returns DescribePackagesResponse
   */
  async describePackages(request: DescribePackagesRequest): Promise<DescribePackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackagesWithOptions(request, runtime);
  }

  /**
   * 获取一级授权列表
   * 
   * @param request - DescribeParentInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParentInstanceResponse
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
   * 获取一级授权列表
   * 
   * @param request - DescribeParentInstanceRequest
   * @returns DescribeParentInstanceResponse
   */
  async describeParentInstance(request: DescribeParentInstanceRequest): Promise<DescribeParentInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParentInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the sensitivity levels that are defined in a rule template provided by Data Security Center (DSC).
   * 
   * @remarks
   * You can call this operation to query the sensitivity levels that are defined in the current rule template provided by DSC. This helps you learn about the number of times that each sensitivity level is referenced in the rule template and the highest sensitivity level.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRiskLevelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRiskLevelsResponse
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
   * Queries the sensitivity levels that are defined in a rule template provided by Data Security Center (DSC).
   * 
   * @remarks
   * You can call this operation to query the sensitivity levels that are defined in the current rule template provided by DSC. This helps you learn about the number of times that each sensitivity level is referenced in the rule template and the highest sensitivity level.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRiskLevelsRequest
   * @returns DescribeRiskLevelsResponse
   */
  async describeRiskLevels(request: DescribeRiskLevelsRequest): Promise<DescribeRiskLevelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskLevelsWithOptions(request, runtime);
  }

  /**
   * Queries sensitive data detection rules.
   * 
   * @param request - DescribeRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRulesResponse
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
   * Queries sensitive data detection rules.
   * 
   * @param request - DescribeRulesRequest
   * @returns DescribeRulesResponse
   */
  async describeRules(request: DescribeRulesRequest): Promise<DescribeRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRulesWithOptions(request, runtime);
  }

  /**
   * Queries tables in data assets, such as MaxCompute projects and ApsaraDB RDS instances, that you authorize Data Security Center (DSC) to access.
   * 
   * @remarks
   * When you call the DescribeTables operation to query tables, you can specify parameters such as Name and RiskLevelId to filter tables.
   * # Limits
   * You can send up to 10 requests per second to call this operation by using your Alibaba Cloud account. If you send excessive requests, throttling is implemented, and your business may be affected.
   * 
   * @param request - DescribeTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTablesResponse
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
   * Queries tables in data assets, such as MaxCompute projects and ApsaraDB RDS instances, that you authorize Data Security Center (DSC) to access.
   * 
   * @remarks
   * When you call the DescribeTables operation to query tables, you can specify parameters such as Name and RiskLevelId to filter tables.
   * # Limits
   * You can send up to 10 requests per second to call this operation by using your Alibaba Cloud account. If you send excessive requests, throttling is implemented, and your business may be affected.
   * 
   * @param request - DescribeTablesRequest
   * @returns DescribeTablesResponse
   */
  async describeTables(request: DescribeTablesRequest): Promise<DescribeTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTemplateAllRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplateAllRulesResponse
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
   * @param request - DescribeTemplateAllRulesRequest
   * @returns DescribeTemplateAllRulesResponse
   */
  async describeTemplateAllRules(request: DescribeTemplateAllRulesRequest): Promise<DescribeTemplateAllRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTemplateAllRulesWithOptions(request, runtime);
  }

  /**
   * Queries the information about an account.
   * 
   * @remarks
   * You can call this operation to query the information about the current account. This helps you get familiar with your account that accesses Data Security Center (DSC).
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserStatusResponse
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
   * Queries the information about an account.
   * 
   * @remarks
   * You can call this operation to query the information about the current account. This helps you get familiar with your account that accesses Data Security Center (DSC).
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeUserStatusRequest
   * @returns DescribeUserStatusResponse
   */
  async describeUserStatus(request: DescribeUserStatusRequest): Promise<DescribeUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserStatusWithOptions(request, runtime);
  }

  /**
   * Disables a configuration item. After you disable a configuration item, you can call the CreateConfig operation to enable the configuration item by specifying the code of the configuration item for the Code parameter in the request.
   * 
   * @remarks
   * You can call this operation to disable a configuration item based on the code of the configuration item. This helps you modify configurations at the earliest opportunity.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DisableUserConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableUserConfigResponse
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
   * Disables a configuration item. After you disable a configuration item, you can call the CreateConfig operation to enable the configuration item by specifying the code of the configuration item for the Code parameter in the request.
   * 
   * @remarks
   * You can call this operation to disable a configuration item based on the code of the configuration item. This helps you modify configurations at the earliest opportunity.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DisableUserConfigRequest
   * @returns DisableUserConfigResponse
   */
  async disableUserConfig(request: DisableUserConfigRequest): Promise<DisableUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableUserConfigWithOptions(request, runtime);
  }

  /**
   * Dynamically de-identifies sensitive data.
   * 
   * @param request - ExecDatamaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecDatamaskResponse
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
   * Dynamically de-identifies sensitive data.
   * 
   * @param request - ExecDatamaskRequest
   * @returns ExecDatamaskResponse
   */
  async execDatamask(request: ExecDatamaskRequest): Promise<ExecDatamaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.execDatamaskWithOptions(request, runtime);
  }

  /**
   * Triggers a de-identification task.
   * 
   * @param request - ManualTriggerMaskingProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManualTriggerMaskingProcessResponse
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
   * Triggers a de-identification task.
   * 
   * @param request - ManualTriggerMaskingProcessRequest
   * @returns ManualTriggerMaskingProcessResponse
   */
  async manualTriggerMaskingProcess(request: ManualTriggerMaskingProcessRequest): Promise<ManualTriggerMaskingProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.manualTriggerMaskingProcessWithOptions(request, runtime);
  }

  /**
   * Modifies configuration items for a data asset that you authorize Data Security Center (DSC) to access.
   * 
   * @param request - ModifyDataLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataLimitResponse
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
   * Modifies configuration items for a data asset that you authorize Data Security Center (DSC) to access.
   * 
   * @param request - ModifyDataLimitRequest
   * @returns ModifyDataLimitResponse
   */
  async modifyDataLimit(request: ModifyDataLimitRequest): Promise<ModifyDataLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDataLimitWithOptions(request, runtime);
  }

  /**
   * Changes the sensitivity levels of sensitive data. You can change the default sensitivity levels of data that cannot be classified as sensitive or insensitive, and the sensitivity levels of data that can be classified as sensitive.
   * 
   * @remarks
   * You can call this operation to modify the sensitivity levels of data. This helps you manage the sensitivity levels.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyDefaultLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefaultLevelResponse
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
   * Changes the sensitivity levels of sensitive data. You can change the default sensitivity levels of data that cannot be classified as sensitive or insensitive, and the sensitivity levels of data that can be classified as sensitive.
   * 
   * @remarks
   * You can call this operation to modify the sensitivity levels of data. This helps you manage the sensitivity levels.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyDefaultLevelRequest
   * @returns ModifyDefaultLevelResponse
   */
  async modifyDefaultLevel(request: ModifyDefaultLevelRequest): Promise<ModifyDefaultLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefaultLevelWithOptions(request, runtime);
  }

  /**
   * Handles an anomalous event.
   * 
   * @remarks
   * You can call this operation to handle anomalous events that involve data leaks. This helps protect your data assets at the earliest opportunity.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyEventStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEventStatusResponse
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
   * Handles an anomalous event.
   * 
   * @remarks
   * You can call this operation to handle anomalous events that involve data leaks. This helps protect your data assets at the earliest opportunity.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyEventStatusRequest
   * @returns ModifyEventStatusResponse
   */
  async modifyEventStatus(request: ModifyEventStatusRequest): Promise<ModifyEventStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEventStatusWithOptions(request, runtime);
  }

  /**
   * Enables the detection of anomalous events of subtypes.
   * 
   * @param request - ModifyEventTypeStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEventTypeStatusResponse
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
   * Enables the detection of anomalous events of subtypes.
   * 
   * @param request - ModifyEventTypeStatusRequest
   * @returns ModifyEventTypeStatusResponse
   */
  async modifyEventTypeStatus(request: ModifyEventTypeStatusRequest): Promise<ModifyEventTypeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEventTypeStatusWithOptions(request, runtime);
  }

  /**
   * Enables or disables the report task.
   * 
   * @remarks
   * You can call this operation to enable or disable the report task. After you activate Data Security Center (DSC), the report task is enabled by default. After you disable the report task, you cannot view statistics that are newly generated in the Report Center module, on the Overview page of the Cloud Native Data Audit module, and in the Data security lab module. Existing statistics are not affected.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyReportTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyReportTaskStatusResponse
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
   * Enables or disables the report task.
   * 
   * @remarks
   * You can call this operation to enable or disable the report task. After you activate Data Security Center (DSC), the report task is enabled by default. After you disable the report task, you cannot view statistics that are newly generated in the Report Center module, on the Overview page of the Cloud Native Data Audit module, and in the Data security lab module. Existing statistics are not affected.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyReportTaskStatusRequest
   * @returns ModifyReportTaskStatusResponse
   */
  async modifyReportTaskStatus(request: ModifyReportTaskStatusRequest): Promise<ModifyReportTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyReportTaskStatusWithOptions(request, runtime);
  }

  /**
   * Modifies a custom sensitive data detection rule in Data Security Center (DSC).
   * 
   * @remarks
   * When you call this operation, you must configure request parameters to specify the rule name, rule ID, and rule content.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRuleResponse
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
   * Modifies a custom sensitive data detection rule in Data Security Center (DSC).
   * 
   * @remarks
   * When you call this operation, you must configure request parameters to specify the rule name, rule ID, and rule content.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyRuleRequest
   * @returns ModifyRuleResponse
   */
  async modifyRule(request: ModifyRuleRequest): Promise<ModifyRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRuleWithOptions(request, runtime);
  }

  /**
   * Enables or disables a sensitive data detection rule.
   * 
   * @param request - ModifyRuleStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRuleStatusResponse
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
   * Enables or disables a sensitive data detection rule.
   * 
   * @param request - ModifyRuleStatusRequest
   * @returns ModifyRuleStatusResponse
   */
  async modifyRuleStatus(request: ModifyRuleStatusRequest): Promise<ModifyRuleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRuleStatusWithOptions(request, runtime);
  }

  /**
   * Stops a de-identification task. After you stop a de-identification task, you can resume the task by calling the ManualTriggerMaskingProcess operation.
   * 
   * @remarks
   * You can call this operation to stop a de-identification task that is running. For example, you can stop a de-identification task that is used to de-identify specific data.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - StopMaskingProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopMaskingProcessResponse
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
   * Stops a de-identification task. After you stop a de-identification task, you can resume the task by calling the ManualTriggerMaskingProcess operation.
   * 
   * @remarks
   * You can call this operation to stop a de-identification task that is running. For example, you can stop a de-identification task that is used to de-identify specific data.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - StopMaskingProcessRequest
   * @returns StopMaskingProcessResponse
   */
  async stopMaskingProcess(request: StopMaskingProcessRequest): Promise<StopMaskingProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMaskingProcessWithOptions(request, runtime);
  }

}
