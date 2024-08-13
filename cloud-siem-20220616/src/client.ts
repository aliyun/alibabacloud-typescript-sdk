// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataProductListLogMapValue extends $tea.Model {
  /**
   * @remarks
   * The code of the log.
   * 
   * @example
   * cloud_siem_config_log
   */
  logCode?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * audit log
   */
  logName?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * audit log
   */
  logNameEn?: string;
  /**
   * @remarks
   * The language code of the log that is used to indicate the language in which the log is displayed.
   * 
   * @example
   * ${sas.cloudsiem.prod.cloud_siem_aegis_crack_from_beaver}
   */
  logNameKey?: string;
  /**
   * @remarks
   * The status of the log delivery. Valid values:
   * 
   * *   true: The logs are being delivered.
   * *   false: The log delivery feature is disabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * Indicates whether the log delivery feature can be enabled or disabled. The feature can be enabled or disabled only by the administrator of the threat analysis feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  canOperateOrNot?: boolean;
  /**
   * @remarks
   * The topic of the log in the Logstore. The value is an index field in the Logstore that can be used to distinguish different logs.
   * 
   * @example
   * sas_login_event
   */
  topic?: string;
  /**
   * @remarks
   * The extended parameter.
   */
  extraParameters?: DataProductListLogMapValueExtraParameters[];
  static names(): { [key: string]: string } {
    return {
      logCode: 'LogCode',
      logName: 'LogName',
      logNameEn: 'LogNameEn',
      logNameKey: 'LogNameKey',
      status: 'Status',
      canOperateOrNot: 'CanOperateOrNot',
      topic: 'Topic',
      extraParameters: 'ExtraParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logCode: 'string',
      logName: 'string',
      logNameEn: 'string',
      logNameKey: 'string',
      status: 'boolean',
      canOperateOrNot: 'boolean',
      topic: 'string',
      extraParameters: { 'type': 'array', 'itemType': DataProductListLogMapValueExtraParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123xxxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code of the cloud service provider.
   * 
   * Valid values:
   * 
   * *   qcloud
   * *   hcloud
   * *   aliyun
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * beijing_waf_kafka
   */
  dataSourceInstanceName?: string;
  /**
   * @remarks
   * The parameters of the data source. Set this parameter to a JSON array.
   * 
   * @example
   * [{"paraCode":"region_code","paraValue":"ap-guangzhou"}]
   */
  dataSourceInstanceParams?: string;
  /**
   * @remarks
   * The remarks on the data source.
   * 
   * @example
   * waf_alert_log
   */
  dataSourceInstanceRemark?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   obs: Huawei Cloud Object Storage Service (OBS)
   * *   wafApi: download API of Tencent Cloud Web Application Firewall (WAF)
   * *   ckafka: Tencent Cloud Kafka (CKafka)
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceName: 'DataSourceInstanceName',
      dataSourceInstanceParams: 'DataSourceInstanceParams',
      dataSourceInstanceRemark: 'DataSourceInstanceRemark',
      dataSourceType: 'DataSourceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceName: 'string',
      dataSourceInstanceParams: 'string',
      dataSourceInstanceRemark: 'string',
      dataSourceType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: AddDataSourceResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: AddDataSourceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDataSourceResponseBody;
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
      body: AddDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceLogRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters. You can call the [ListDataSourceLogs](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854\\&activeTabKey=api%7CListDataSourceLogs) operation to query the IDs of data sources.
   * 
   * This parameter is required.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The parameters of the data source. Set this parameter to a JSON array.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"LogCode":"cloud_siem_qcloud_waf_alert_log","LogParas":"[{\\"ParaCode\\":\\"api_name\\",\\"ParaValue\\":\\"GetAttackDownloadRecords\\"}]"}]
   */
  dataSourceInstanceLogs?: string;
  /**
   * @remarks
   * The log code.
   * 
   * @example
   * cloud_siem_waf_xxxxx
   */
  logCode?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      dataSourceInstanceLogs: 'DataSourceInstanceLogs',
      logCode: 'LogCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      dataSourceInstanceLogs: 'string',
      logCode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceLogResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: AddDataSourceLogResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: AddDataSourceLogResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDataSourceLogResponseBody;
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
      body: AddDataSourceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123XXXXXXXX
   */
  addedUserId?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      addedUserId: 'AddedUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedUserId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the cloud account is added to the threat analysis feature.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserResponseBody;
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
      body: AddUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserSourceLogConfigRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to add logs or delete added logs. Valid values:
   * 
   * *   \\-1: deletes added logs.
   * *   0: adds logs.
   * 
   * @example
   * 0
   */
  deleted?: number;
  /**
   * @remarks
   * The display details of the Logstore.
   * 
   * @example
   * cn-shanghai.siem-project.siem-logstore
   */
  disPlayLine?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The log code.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  sourceLogCode?: string;
  /**
   * @remarks
   * The details of the Logstore that you want to use in the JSON string format.
   * 
   * This parameter is required.
   * 
   * @example
   * {"project":"wafnew-project-1335759343513432-cn-hangzhou","logStore":"wafnew-logstore","regionCode":"cn-hangzhou","prodCode":"waf"}
   */
  sourceLogInfo?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * sas
   */
  sourceProdCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123XXXXXX
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      deleted: 'Deleted',
      disPlayLine: 'DisPlayLine',
      regionId: 'RegionId',
      sourceLogCode: 'SourceLogCode',
      sourceLogInfo: 'SourceLogInfo',
      sourceProdCode: 'SourceProdCode',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'number',
      disPlayLine: 'string',
      regionId: 'string',
      sourceLogCode: 'string',
      sourceLogInfo: 'string',
      sourceProdCode: 'string',
      subUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserSourceLogConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: AddUserSourceLogConfigResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: AddUserSourceLogConfigResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserSourceLogConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserSourceLogConfigResponseBody;
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
      body: AddUserSourceLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitRequest extends $tea.Model {
  /**
   * @remarks
   * The detail config of task.
   * 
   * @example
   * {{"autoSubmit":false,"configName":"test_builder","folderConfig":{"folderId":"rd-EUx7Qp","prodConfig":[{"allLogs":false,"allRegions":false,"logConfig":[{"logCode":"cloud_siem_rds_audit_log","logStorePattern":"vpc-test","projectPattern":"vpc-test"}],"prodCode":"rds","regions":["cn-shanghai"]},{"allLogs":true,"allRegions":true,"prodCode":"sas"}],"type":"folder"},"listenRdChange":false,"logConfigs":{"cloud_siem_rds_audit_log":{"logCode":"cloud_siem_rds_audit_log","logStorePattern":"vpc-test","projectPattern":"vpc-test"}}}}
   */
  jsonConfig?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      jsonConfig: 'JsonConfig',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonConfig: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: BatchJobSubmitResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ServerError
   */
  errCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5B0DFF6D-XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: BatchJobSubmitResponseBodyData,
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchJobSubmitResponseBody;
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
      body: BatchJobSubmitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The AccessKey ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * ABCXXXXXXXX
   */
  accessId?: string;
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The username of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  accountName?: string;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * *   qcloud: Tencent Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accountId: 'AccountId',
      accountName: 'AccountName',
      cloudCode: 'CloudCode',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accountId: 'string',
      accountName: 'string',
      cloudCode: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: BindAccountResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: BindAccountResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindAccountResponseBody;
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
      body: BindAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDeliveryRequest extends $tea.Model {
  /**
   * @remarks
   * The log code of the cloud service, such as the code of the process log for Security Center. You can obtain the log code from the response of the ListDelivery operation.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  logCode?: string;
  /**
   * @remarks
   * The code of the cloud service. Valid values:
   * 
   * *   qcloud_waf
   * *   qlcoud_cfw
   * *   hcloud_waf
   * *   hcloud_cfw
   * *   ddos
   * *   sas
   * *   cfw
   * *   config
   * *   csk
   * *   fc
   * *   rds
   * *   nas
   * *   apigateway
   * *   cdn
   * *   mongodb
   * *   eip
   * *   slb
   * *   vpc
   * *   actiontrail
   * *   waf
   * *   bastionhost
   * *   oss
   * *   polardb
   * 
   * This parameter is required.
   * 
   * @example
   * sas
   */
  productCode?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      logCode: 'LogCode',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logCode: 'string',
      productCode: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDeliveryResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the threat analysis feature was disabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F375A043-4F5B-55F2-A564-CC47FFC6****
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDeliveryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseDeliveryResponseBody;
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
      body: CloseDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutomateResponseConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutomateResponseConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutomateResponseConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAutomateResponseConfigResponseBody;
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
      body: DeleteAutomateResponseConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBindAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The AccessKey ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * ABCXXXXXXXX
   */
  accessId?: string;
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The ID generated when the account is added to the threat analysis feature. You can call the [ListBindAccount](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854\\&activeTabKey=api%7CListBindAccount) operation to query the ID.
   * 
   * @example
   * 10
   */
  bindId?: number;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accountId: 'AccountId',
      bindId: 'BindId',
      cloudCode: 'CloudCode',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accountId: 'string',
      bindId: 'number',
      cloudCode: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBindAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DeleteBindAccountResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: DeleteBindAccountResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBindAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBindAccountResponseBody;
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
      body: DeleteBindAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizeRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the service is deployed.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 123456789
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizeRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizeRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomizeRuleResponseBody;
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
      body: DeleteCustomizeRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters. You can call the [ListDataSourceLogs](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854\\&activeTabKey=api%7CListDataSourceLogs) operation to query the IDs of data sources.
   * 
   * This parameter is required.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DeleteDataSourceResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: DeleteDataSourceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataSourceResponseBody;
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
      body: DeleteDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceLogRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters. You can call the [ListDataSourceLogs](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854\\&activeTabKey=api%7CListDataSourceLogs) operation to query the IDs of data sources.
   * 
   * This parameter is required.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The ID of the log. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters. You can call the [ListDataSourceLogs](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854\\&activeTabKey=api%7CListDataSourceLogs) operation to query the IDs of logs.
   * 
   * This parameter is required.
   * 
   * @example
   * ef33097c9d1fdb0b9c7e8c7ca320pkl1
   */
  logInstanceId?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      logInstanceId: 'LogInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      logInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceLogResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DeleteDataSourceLogResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: DeleteDataSourceLogResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataSourceLogResponseBody;
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
      body: DeleteDataSourceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123XXXXXXXX
   */
  addedUserId?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      addedUserId: 'AddedUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedUserId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the Alibaba Cloud account is removed. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserResponseBody;
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
      body: DeleteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWhiteRuleListRequest extends $tea.Model {
  /**
   * @remarks
   * The unique ID of the whitelist rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWhiteRuleListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: any;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWhiteRuleListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWhiteRuleListResponseBody;
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
      body: DeleteWhiteRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAggregateFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAggregateFunctionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAggregateFunctionResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAggregateFunctionResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAggregateFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAggregateFunctionResponseBody;
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
      body: DescribeAggregateFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSceneRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSceneResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAlertSceneResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAlertSceneResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertSceneResponseBody;
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
      body: DescribeAlertSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSceneByEventRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the event.
   * 
   * This parameter is required.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      incidentUuid: 'IncidentUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidentUuid: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSceneByEventResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAlertSceneByEventResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAlertSceneByEventResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSceneByEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertSceneByEventResponseBody;
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
      body: DescribeAlertSceneByEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSourceRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The risk levels. The value is a JSON array. Valid values:
   * 
   * *   serious: high
   * *   suspicious: medium
   * *   remind: low
   * 
   * @example
   * ["serious","suspicious","remind"]
   */
  level?: string[];
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      level: 'Level',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      level: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAlertSourceResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAlertSourceResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertSourceResponseBody;
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
      body: DescribeAlertSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSourceWithEventRequest extends $tea.Model {
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   Valid values: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      incidentUuid: 'IncidentUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidentUuid: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSourceWithEventResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAlertSourceWithEventResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAlertSourceWithEventResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSourceWithEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertSourceWithEventResponseBody;
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
      body: DescribeAlertSourceWithEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertTypeRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The type of rule. Valid values:
   * - predefine: the defined rule by system
   * - customize: the customed rule by user
   * 
   * @example
   * customize
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAlertTypeResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAlertTypeResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertTypeResponseBody;
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
      body: DescribeAlertTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsRequest extends $tea.Model {
  /**
   * @remarks
   * The title of the alert.
   * 
   * @example
   * Unusual Logon-login_common_account
   */
  alertTitle?: string;
  /**
   * @remarks
   * The UUID of the alert.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * Specifies whether an attack is defended. Valid values:
   * 
   * *   0: detected.
   * *   1: blocked.
   * 
   * @example
   * 1
   */
  isDefend?: string;
  /**
   * @remarks
   * The risk level. The value is a JSON array. Valid values:
   * 
   * *   serious: high
   * *   suspicious: medium
   * *   remind: low
   * 
   * @example
   * ["serious","suspicious","remind"]
   */
  level?: string[];
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The source of the alert.
   * 
   * @example
   * sas
   */
  source?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account within which the alert is generated.
   * 
   * @example
   * 176555323***
   */
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      alertTitle: 'AlertTitle',
      alertUuid: 'AlertUuid',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      isDefend: 'IsDefend',
      level: 'Level',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      source: 'Source',
      startTime: 'StartTime',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTitle: 'string',
      alertUuid: 'string',
      currentPage: 'number',
      endTime: 'number',
      isDefend: 'string',
      level: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      source: 'string',
      startTime: 'number',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAlertsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeAlertsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertsResponseBody;
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
      body: DescribeAlertsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsCountRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsCountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAlertsCountResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeAlertsCountResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertsCountResponseBody;
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
      body: DescribeAlertsCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEntityRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * 123456789
   */
  entityId?: number;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The ID of the SOAR handing policy.
   * 
   * @example
   * 577bbf90-a770-44a7-8154-586aa2d318fa
   */
  sophonTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      entityId: 'EntityId',
      incidentUuid: 'IncidentUuid',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      sophonTaskId: 'SophonTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      entityId: 'number',
      incidentUuid: 'string',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      sophonTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEntityResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAlertsWithEntityResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeAlertsWithEntityResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertsWithEntityResponseBody;
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
      body: DescribeAlertsWithEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEventRequest extends $tea.Model {
  /**
   * @remarks
   * The title of the alert.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitle?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * Specifies whether an attack is defended. Valid values:
   * 
   * *   0: detected
   * *   1: blocked
   * 
   * @example
   * 1
   */
  isDefend?: string;
  /**
   * @remarks
   * The risk levels. The value is a JSON array. Valid values:
   * 
   * *   serious: high
   * *   suspicious: medium
   * *   remind: low
   * 
   * @example
   * ["serious","suspicious","remind"]
   */
  level?: string[];
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member in the resource directory.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view.
   * 
   * *   0: view of the current Alibaba Cloud account.
   * *   1: view of all accounts for the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The data source of the alert.
   * 
   * @example
   * sas
   */
  source?: string;
  /**
   * @remarks
   * The ID of the account within which the alert is generated.
   * 
   * @example
   * 176555323***
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      alertTitle: 'AlertTitle',
      currentPage: 'CurrentPage',
      incidentUuid: 'IncidentUuid',
      isDefend: 'IsDefend',
      level: 'Level',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      source: 'Source',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTitle: 'string',
      currentPage: 'number',
      incidentUuid: 'string',
      isDefend: 'string',
      level: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      source: 'string',
      subUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEventResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAlertsWithEventResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeAlertsWithEventResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertsWithEventResponseBody;
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
      body: DescribeAlertsWithEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackTimeLineRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * zsw-agentless-centos****
   */
  assetName?: string;
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577803000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      assetName: 'AssetName',
      endTime: 'EndTime',
      incidentUuid: 'IncidentUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetName: 'string',
      endTime: 'number',
      incidentUuid: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackTimeLineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAttackTimeLineResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAttackTimeLineResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackTimeLineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAttackTimeLineResponseBody;
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
      body: DescribeAttackTimeLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the SIEM system is granted the required permissions. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F539347-7D9A-51EA-8ABF-5D5507045C5C
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAuthResponseBody;
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
      body: DescribeAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigCounterRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigCounterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAutomateResponseConfigCounterResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeAutomateResponseConfigCounterResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigCounterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAutomateResponseConfigCounterResponseBody;
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
      body: DescribeAutomateResponseConfigCounterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigFeatureRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the automated response rule. Valid values:
   * 
   * *   event
   * *   alert
   * 
   * @example
   * event
   */
  autoResponseType?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      autoResponseType: 'AutoResponseType',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoResponseType: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigFeatureResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAutomateResponseConfigFeatureResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAutomateResponseConfigFeatureResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigFeatureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAutomateResponseConfigFeatureResponseBody;
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
      body: DescribeAutomateResponseConfigFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigPlayBooksRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the automated response rule. Valid values:
   * 
   * *   event
   * *   alert
   * 
   * @example
   * event
   */
  autoResponseType?: string;
  /**
   * @remarks
   * The entity type of the playbook. Valid values:
   * 
   * *   ip
   * *   process
   * *   file
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      autoResponseType: 'AutoResponseType',
      entityType: 'EntityType',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoResponseType: 'string',
      entityType: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigPlayBooksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeAutomateResponseConfigPlayBooksResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAutomateResponseConfigPlayBooksResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigPlayBooksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAutomateResponseConfigPlayBooksResponseBody;
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
      body: DescribeAutomateResponseConfigPlayBooksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   ip
   * *   domain
   * *   url
   * *   process
   * *   file
   * *   host
   * 
   * @example
   * ip
   */
  assetType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      currentPage: 'CurrentPage',
      incidentUuid: 'IncidentUuid',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      currentPage: 'number',
      incidentUuid: 'string',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeCloudSiemAssetsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeCloudSiemAssetsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudSiemAssetsResponseBody;
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
      body: DescribeCloudSiemAssetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsCounterRequest extends $tea.Model {
  /**
   * @remarks
   * The UUID of the event.
   * 
   * This parameter is required.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      incidentUuid: 'IncidentUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidentUuid: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsCounterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeCloudSiemAssetsCounterResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeCloudSiemAssetsCounterResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsCounterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudSiemAssetsCounterResponseBody;
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
      body: DescribeCloudSiemAssetsCounterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemEventDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The UUID of the event.
   * 
   * This parameter is required.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      incidentUuid: 'IncidentUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidentUuid: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemEventDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeCloudSiemEventDetailResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeCloudSiemEventDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemEventDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudSiemEventDetailResponseBody;
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
      body: DescribeCloudSiemEventDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemEventsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the asset that is associated with the event.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  assetId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * ECS unusual log in
   */
  eventName?: string;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * *   desc: descending order
   * *   asc: ascending order
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The sort field. Valid values:
   * 
   * *   GmtModified: sorts the events by creation time. This is the default value.
   * *   ThreatScore: sorts the events by risk score.
   * 
   * @example
   * ThreatScore
   */
  orderField?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   0: unhandled
   * *   1: handling
   * *   5: handling failed
   * *   10: handled
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The risk levels of the events. The value is a JSON array. Valid values:
   * 
   * *   serious: high
   * *   suspicious: medium
   * *   remind: low
   * 
   * @example
   * ["serious","suspicious","remind"]
   */
  threadLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      assetId: 'AssetId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      eventName: 'EventName',
      incidentUuid: 'IncidentUuid',
      order: 'Order',
      orderField: 'OrderField',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      startTime: 'StartTime',
      status: 'Status',
      threadLevel: 'ThreadLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'string',
      currentPage: 'number',
      endTime: 'number',
      eventName: 'string',
      incidentUuid: 'string',
      order: 'string',
      orderField: 'string',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      startTime: 'number',
      status: 'number',
      threadLevel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemEventsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeCloudSiemEventsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeCloudSiemEventsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudSiemEventsResponseBody;
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
      body: DescribeCloudSiemEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCsImportedProdStatusByUserRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * sas
   */
  sourceLogProd?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123XXXXXX
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sourceLogProd: 'SourceLogProd',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sourceLogProd: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCsImportedProdStatusByUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the cloud service is activated for the account. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCsImportedProdStatusByUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCsImportedProdStatusByUserResponseBody;
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
      body: DescribeCsImportedProdStatusByUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleCountRequest extends $tea.Model {
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleCountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeCustomizeRuleCountResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeCustomizeRuleCountResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomizeRuleCountResponseBody;
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
      body: DescribeCustomizeRuleCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleTestRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleTestResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeCustomizeRuleTestResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeCustomizeRuleTestResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleTestResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomizeRuleTestResponseBody;
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
      body: DescribeCustomizeRuleTestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleTestHistogramRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleTestHistogramResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The return value for the request.
   * 
   * @example
   * 123456
   */
  data?: DescribeCustomizeRuleTestHistogramResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeCustomizeRuleTestHistogramResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleTestHistogramResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomizeRuleTestHistogramResponseBody;
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
      body: DescribeCustomizeRuleTestHistogramResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters. You can call the [ListDataSourceLogs](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854\\&activeTabKey=api%7CListDataSourceLogs) operation to query the IDs of data sources.
   * 
   * This parameter is required.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeDataSourceInstanceResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: DescribeDataSourceInstanceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataSourceInstanceResponseBody;
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
      body: DescribeDataSourceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceParametersRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the cloud service provider.
   * 
   * Valid values:
   * 
   * *   qcloud
   * *   hcloud
   * *   aliyun
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ckafka**: Tencent Cloud TDMQ for CKafka
   * *   **obs**: Huawei Cloud Object Storage Service (OBS)
   * *   **wafApi**: download API of Tencent Cloud Web Application Firewall (WAF)
   * 
   * This parameter is required.
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudCode: 'CloudCode',
      dataSourceType: 'DataSourceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudCode: 'string',
      dataSourceType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceParametersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeDataSourceParametersResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: { 'type': 'array', 'itemType': DescribeDataSourceParametersResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataSourceParametersResponseBody;
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
      body: DescribeDataSourceParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeAndPlaybookRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The entity type. Valid values:
   * 
   * *   ip
   * *   process
   * *   file
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      entityType: 'EntityType',
      incidentUuid: 'IncidentUuid',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      entityType: 'string',
      incidentUuid: 'string',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeAndPlaybookResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeDisposeAndPlaybookResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeDisposeAndPlaybookResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeAndPlaybookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDisposeAndPlaybookResponseBody;
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
      body: DescribeDisposeAndPlaybookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeStrategyPlaybookRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeStrategyPlaybookResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeDisposeStrategyPlaybookResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeDisposeStrategyPlaybookResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeStrategyPlaybookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDisposeStrategyPlaybookResponseBody;
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
      body: DescribeDisposeStrategyPlaybookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEntityInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The logical ID of the entity.
   * 
   * @example
   * 12345
   */
  entityId?: number;
  /**
   * @remarks
   * The feature value of the entity. Fuzzy match is supported.
   * 
   * @example
   * test22.php
   */
  entityIdentity?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The ID of the SOAR handling policy.
   * 
   * @example
   * 577bbf90-a770-44a7-8154-586aa2d318fa
   */
  sophonTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityIdentity: 'EntityIdentity',
      incidentUuid: 'IncidentUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      sophonTaskId: 'SophonTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      entityIdentity: 'string',
      incidentUuid: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      sophonTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEntityInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeEntityInfoResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeEntityInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEntityInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEntityInfoResponseBody;
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
      body: DescribeEntityInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventCountByThreatLevelRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member in the resource directory.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view.
   * 
   * *   0: view of the current Alibaba Cloud account.
   * *   1: view of all accounts for the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventCountByThreatLevelResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeEventCountByThreatLevelResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeEventCountByThreatLevelResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventCountByThreatLevelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEventCountByThreatLevelResponseBody;
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
      body: DescribeEventCountByThreatLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDisposeRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 500.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      incidentUuid: 'IncidentUuid',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      incidentUuid: 'string',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDisposeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeEventDisposeResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeEventDisposeResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDisposeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEventDisposeResponseBody;
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
      body: DescribeEventDisposeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportedLogCountRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  roleFor?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportedLogCountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeImportedLogCountResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: DescribeImportedLogCountResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportedLogCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImportedLogCountResponseBody;
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
      body: DescribeImportedLogCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The region where the service resides. Default value: cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the collection task. The ID is the value of the submitId parameter in the response of the [BatchJobSubmit](https://next.api.aliyun.com/api/cloud-siem/2022-06-16/BatchSubmitJob?lang=JAVA\\&useCommon=true) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_folder_xxxxxx
   */
  submitId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      submitId: 'SubmitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      submitId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code. If the request is successful, 200 is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeJobStatusResponseBodyData;
  /**
   * @remarks
   * The error code. If the request is successful, the parameter is empty. If the request fails, an error code is returned.
   * 
   * @example
   * ServerError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. If the request is successful, the parameter is empty. If the request fails, the reason for the failure is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5B0DFF6D-XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeJobStatusResponseBodyData,
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeJobStatusResponseBody;
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
      body: DescribeJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogFieldsRequest extends $tea.Model {
  /**
   * @remarks
   * The log source of the rule.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logSource?: string;
  /**
   * @remarks
   * The log type of the rule.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logType?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      logSource: 'LogSource',
      logType: 'LogType',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logSource: 'string',
      logType: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogFieldsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeLogFieldsResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeLogFieldsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogFieldsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLogFieldsResponseBody;
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
      body: DescribeLogFieldsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogSourceRequest extends $tea.Model {
  /**
   * @remarks
   * The log type of the rule.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  logType?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogSourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeLogSourceResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeLogSourceResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLogSourceResponseBody;
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
      body: DescribeLogSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside the Chinese mainland or in the China (Hong Kong) region.
   * *   ap-southeast-1: Your assets reside in regions outside the Chinese mainland, excluding the China (Hong Kong) region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response of the threat analysis feature.
   */
  data?: DescribeLogStoreResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B9CBCEE-9225-5069-BC7F-880938A2****
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
      data: DescribeLogStoreResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLogStoreResponseBody;
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
      body: DescribeLogStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogTypeRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeLogTypeResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeLogTypeResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLogTypeResponseBody;
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
      body: DescribeLogTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperatorsRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The type of the scenario in which the operator is used. Valid values:
   * 
   * *   If you do not specify this parameter, the default scenario is used.
   * *   AGGREGATE: AGGREGATE scenario.
   * 
   * @example
   * AGGREGATE
   */
  sceneType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      sceneType: 'SceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      sceneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperatorsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeOperatorsResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeOperatorsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperatorsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOperatorsResponseBody;
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
      body: DescribeOperatorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProdCountRequest extends $tea.Model {
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProdCountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeProdCountResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: DescribeProdCountResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProdCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProdCountResponseBody;
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
      body: DescribeProdCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScopeUsersRequest extends $tea.Model {
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScopeUsersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeScopeUsersResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeScopeUsersResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScopeUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScopeUsersResponseBody;
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
      body: DescribeScopeUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the threat analysis feature is authorized to access the resource directory. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceStatusResponseBody;
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
      body: DescribeServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 137820528780****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the projects and Logstores that are created for the threat analysis feature exist in Simple Log Service. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CCEEE128-6607-503E-AAA6-C5E57D94****
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStorageResponseBody;
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
      body: DescribeStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBuyStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123XXXXXX
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBuyStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeUserBuyStatusResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 81D8EC0C-0804-51AD-8C38-17ED0BC74892
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
      data: DescribeUserBuyStatusResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBuyStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserBuyStatusResponseBody;
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
      body: DescribeUserBuyStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafScopeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * 20617784
   */
  entityId?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafScopeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeWafScopeResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeWafScopeResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafScopeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWafScopeResponseBody;
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
      body: DescribeWafScopeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * Try SNMP weak password
   */
  alertName?: string;
  /**
   * @remarks
   * The type of the alert.
   * 
   * @example
   * scan
   */
  alertType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      alertType: 'AlertType',
      currentPage: 'CurrentPage',
      incidentUuid: 'IncidentUuid',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      alertType: 'string',
      currentPage: 'number',
      incidentUuid: 'string',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeWhiteRuleListResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeWhiteRuleListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWhiteRuleListResponseBody;
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
      body: DescribeWhiteRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoQuickFieldRequest extends $tea.Model {
  /**
   * @remarks
   * The time when the quick analysis starts. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684376244
   */
  from?: number;
  /**
   * @remarks
   * The index field.
   * 
   * This parameter is required.
   * 
   * @example
   * alert_level
   */
  index?: string;
  /**
   * @remarks
   * The number of pages to return. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside the Chinese mainland or in the China (Hong Kong) region.
   * *   ap-southeast-1: Your assets reside in regions outside the Chinese mainland, excluding the China (Hong Kong) region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The sorting of the query and analysis results. By default, the results are sorted in descending order.
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The time when the quick analysis ends. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684378090
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      index: 'Index',
      page: 'Page',
      regionId: 'RegionId',
      reverse: 'Reverse',
      size: 'Size',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      index: 'string',
      page: 'number',
      regionId: 'string',
      reverse: 'boolean',
      size: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoQuickFieldResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response of the quick analysis.
   */
  data?: DoQuickFieldResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06735F17-1EDE-5212-81A3-8585368F****
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
      data: DoQuickFieldResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoQuickFieldResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DoQuickFieldResponseBody;
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
      body: DoQuickFieldResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoSelfDelegateRequest extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud account of an ordinary member of the threat analysis feature.
   * 
   * This parameter is required.
   * 
   * @example
   * 104423523217****
   */
  aliUid?: number;
  /**
   * @remarks
   * Specifies whether to use a delegated administrator account. Valid values:
   * 
   * *   1: use a delegated administrator account.
   * *   0: do not use a delegated administrator account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  delegateOrNot?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside the Chinese mainland or in the China (Hong Kong) region.
   * *   ap-southeast-1: Your assets reside in regions outside the Chinese mainland, excluding the China (Hong Kong) region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      delegateOrNot: 'DelegateOrNot',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      delegateOrNot: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoSelfDelegateResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether a regular member is authorized. Valid values:
   * 
   * *   true: The member is authorized.
   * *   false: The authorization is canceled.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B9CBCEE-9225-5069-BC7F-880938A2****
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoSelfDelegateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DoSelfDelegateResponseBody;
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
      body: DoSelfDelegateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAccessForCloudSiemRequest extends $tea.Model {
  /**
   * @remarks
   * Whether import the log of SAS alert, the log of WAF alert, the log of CFW alert or not. Valid values:
   * - 0: not imported automatically
   * - 1: imported automatically
   * 
   * @example
   * 1
   */
  autoSubmit?: number;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      autoSubmit: 'AutoSubmit',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSubmit: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAccessForCloudSiemResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAccessForCloudSiemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableAccessForCloudSiemResponseBody;
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
      body: EnableAccessForCloudSiemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableServiceForCloudSiemRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableServiceForCloudSiemResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the threat analysis feature is authorized to access the resource directory. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableServiceForCloudSiemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableServiceForCloudSiemResponseBody;
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
      body: EnableServiceForCloudSiemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCapacityRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCapacityResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the storage capacity.
   */
  data?: GetCapacityResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 27D27DCB-D76B-5064-8B3B-0900DEF7****
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
      data: GetCapacityResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCapacityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCapacityResponseBody;
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
      body: GetCapacityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistogramsRequest extends $tea.Model {
  /**
   * @remarks
   * The start time of the subinterval. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC. The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the from parameter, but does not include the end time specified by the to parameter. If you specify the same value for the from and to parameters, the interval is invalid, and an error message is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1409529600
   */
  from?: number;
  /**
   * @remarks
   * The SQL statement. Only search statements are supported. Analytic statements are not supported. For more information about the syntax and limits of search statements, see [Log search overview](https://help.aliyun.com/document_detail/29060.html).
   * 
   * @example
   * * and status: 401
   */
  query?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside the Chinese mainland or in the China (Hong Kong) region.
   * *   ap-southeast-1: Your assets reside in regions outside the Chinese mainland, excluding the China (Hong Kong) region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The end time of the subinterval. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC. The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the from parameter, but does not include the end time specified by the to parameter. If you specify the same value for the from and to parameters, the interval is invalid, and an error message is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1409569200
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      query: 'Query',
      regionId: 'RegionId',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      query: 'string',
      regionId: 'string',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistogramsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data of the charts.
   */
  data?: GetHistogramsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 97A31C3A-3F9F-5866-8979-5159E3DC****
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
      data: GetHistogramsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistogramsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHistogramsResponseBody;
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
      body: GetHistogramsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsRequest extends $tea.Model {
  /**
   * @remarks
   * The time when the query starts. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684377190
   */
  from?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 0 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search statement or the analytic statement. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * 
   * @example
   * status: 401 | SELECT remote_addr,COUNT(*) as pv GROUP by remote_addr ORDER by pv desc limit 5
   */
  query?: string;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to sort the results of the log query by time in minutes in descending order. Default value: true. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  reverseOrNot?: boolean;
  /**
   * @remarks
   * The time when the query ends. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684378326
   */
  to?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      reverseOrNot: 'ReverseOrNot',
      to: 'To',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      reverseOrNot: 'boolean',
      to: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The results of the log query.
   * 
   * @example
   * 123456
   */
  data?: GetLogsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 93A8B186-A5F1-5B20-9BCF-5605C5E9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetLogsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLogsResponseBody;
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
      body: GetLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuickQueryRequest extends $tea.Model {
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in the Chinese mainland or in the China (Hong Kong) region.
   * *   ap-southeast-1: Your assets reside in regions outside the Chinese mainland, excluding the China (Hong Kong) region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the saved search.
   * 
   * This parameter is required.
   * 
   * @example
   * display_login_ip_search
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      searchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuickQueryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The query statement.
   * 
   * @example
   * status: 401 | SELECT remote_addr,COUNT(*) as pv GROUP by remote_addr ORDER by pv desc limit 5
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 27D27DCB-D76B-5064-8B3B-0900DEF7****
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

export class GetQuickQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQuickQueryResponseBody;
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
      body: GetQuickQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageRequest extends $tea.Model {
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 127XXXX
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the storage.
   */
  data?: GetStorageResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 97A31C3A-3F9F-5866-8979-5159E3DC****
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
      data: GetStorageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStorageResponseBody;
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
      body: GetStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountAccessIdRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the cloud service provider.
   * 
   * Valid values:
   * 
   * *   qcloud
   * *   hcloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 0
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      cloudCode: 'CloudCode',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudCode: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountAccessIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListAccountAccessIdResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListAccountAccessIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountAccessIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccountAccessIdResponseBody;
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
      body: ListAccountAccessIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsByLogRequest extends $tea.Model {
  /**
   * @remarks
   * The code that is used for multi-cloud environments.
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The codes of logs. The value is a JSON array.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cloud_siem_hcloud_waf_alert_log"]
   */
  logCodes?: string[];
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * qcloud_waf
   */
  prodCode?: string;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      cloudCode: 'CloudCode',
      logCodes: 'LogCodes',
      prodCode: 'ProdCode',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudCode: 'string',
      logCodes: { 'type': 'array', 'itemType': 'string' },
      prodCode: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsByLogResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListAccountsByLogResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: { 'type': 'array', 'itemType': ListAccountsByLogResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsByLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccountsByLogResponseBody;
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
      body: ListAccountsByLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllProdsRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllProdsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListAllProdsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: ListAllProdsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllProdsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAllProdsResponseBody;
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
      body: ListAllProdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutomateResponseConfigsRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the handling action. Valid values:
   * 
   * *   doPlaybook: runs a playbook.
   * *   changeEventStatus: changes the status of an event.
   * *   changeThreatLevel: changes the risk level of an event.
   * 
   * @example
   * doPlaybook
   */
  actionType?: string;
  /**
   * @remarks
   * The type of the automated response rule. Valid values:
   * 
   * *   event
   * *   alert
   * 
   * @example
   * event
   */
  autoResponseType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the automated response rule.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * system_aliyun_aegis_kill_quara_book
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The name of the automated response rule.
   * 
   * @example
   * cfw kill quara book
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   0: disabled
   * *   100: enabled
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The ID of the user who created the rule.
   * 
   * @example
   * 17108579417****
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      autoResponseType: 'AutoResponseType',
      currentPage: 'CurrentPage',
      id: 'Id',
      pageSize: 'PageSize',
      playbookUuid: 'PlaybookUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleName: 'RuleName',
      status: 'Status',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      autoResponseType: 'string',
      currentPage: 'number',
      id: 'number',
      pageSize: 'number',
      playbookUuid: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ruleName: 'string',
      status: 'number',
      subUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutomateResponseConfigsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: ListAutomateResponseConfigsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListAutomateResponseConfigsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutomateResponseConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAutomateResponseConfigsResponseBody;
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
      body: ListAutomateResponseConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      cloudCode: 'CloudCode',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudCode: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListBindAccountResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: { 'type': 'array', 'itemType': ListBindAccountResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBindAccountResponseBody;
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
      body: ListBindAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindDataSourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code of the cloud service provider.
   * 
   * Valid values:
   * 
   * *   qcloud
   * *   hcloud
   * *   aliyun
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindDataSourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListBindDataSourcesResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: { 'type': 'array', 'itemType': ListBindDataSourcesResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindDataSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBindDataSourcesResponseBody;
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
      body: ListBindDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudSiemCustomizeRulesRequest extends $tea.Model {
  /**
   * @remarks
   * The alert type.
   * 
   * @example
   * scan
   */
  alertType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the custom rule.
   * 
   * @example
   * 10223
   */
  id?: string;
  /**
   * @remarks
   * The sort method. Valid values:
   * 
   * *   desc: descending order.
   * *   asc: ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The field that is used to sort the rules. Valid values:
   * 
   * *   GmtModified: The rules are sorted based on the modification time.
   * *   Id (default): The rules are sorted based on the rule ID.
   * 
   * @example
   * Id
   */
  orderField?: string;
  /**
   * @remarks
   * The number of entries per page. The value can be up to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   **cn-hangzhou**: Your assets reside in regions in China.
   * *   **ap-southeast-1**: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the destination account to which you switch the view from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * *   0: view of the current Alibaba Cloud account.
   * *   1: view of all accounts for the enterprise.
   * 
   * @example
   * 0
   */
  roleType?: number;
  /**
   * @remarks
   * The name of the rule. The name can contain letters, digits, underscores (_), and periods (.).
   * 
   * @example
   * waf_scan
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **predefine**
   * *   **customize**
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **0**: The rule is in the initial state.
   * *   **10**: The simulation data is tested.
   * *   **15**: The business data is being tested.
   * *   **20**: The business data test is complete.
   * *   **100**: The rule is in effect.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The threat level. The value must be a JSON array. Valid values:
   * 
   * *   **serious**: high-risk.
   * *   **suspicious**: medium-risk.
   * *   **remind**: low-risk.
   * 
   * @example
   * ["serious","suspicious","remind"]
   */
  threatLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      id: 'Id',
      order: 'Order',
      orderField: 'OrderField',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      startTime: 'StartTime',
      status: 'Status',
      threatLevel: 'ThreatLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      currentPage: 'number',
      endTime: 'number',
      id: 'string',
      order: 'string',
      orderField: 'string',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ruleName: 'string',
      ruleType: 'string',
      startTime: 'number',
      status: 'number',
      threatLevel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudSiemCustomizeRulesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: ListCloudSiemCustomizeRulesResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListCloudSiemCustomizeRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudSiemCustomizeRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCloudSiemCustomizeRulesResponseBody;
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
      body: ListCloudSiemCustomizeRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudSiemPredefinedRulesRequest extends $tea.Model {
  /**
   * @remarks
   * The alert type.
   * 
   * @example
   * scan
   */
  alertType?: string;
  /**
   * @remarks
   * The ATT\\&CK information.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The method that is used to generate an event. Valid values:
   * 
   * *   default: built-in method.
   * *   singleToSingle: The system generates an event for each alert.
   * *   allToSingle: The system generates an event for alerts within a period of time.
   * 
   * @example
   * allToSingle
   */
  eventTransferType?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 10223
   */
  id?: string;
  /**
   * @remarks
   * The log source.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logSource?: string;
  /**
   * @remarks
   * The sort method. Valid values:
   * 
   * *   desc: descending order.
   * *   asc: ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The field that is used to sort the rules. Valid values:
   * 
   * *   GmtModified: The rules are sorted based on the modification time.
   * *   Id (default): The rules are sorted based on the rule ID.
   * 
   * @example
   * Id
   */
  orderField?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the destination account to which you switch the view from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view.
   * 
   * *   0: view of the current Alibaba Cloud account.
   * *   1: view of all accounts for the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The name of the rule. The name can contain letters, digits, underscores (_), and periods (.).
   * 
   * @example
   * waf_scan
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   predefine
   * *   customize
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   0: The rule is in the initial state.
   * *   10: The simulation data is tested.
   * *   15: The business data is being tested.
   * *   20: The business data test ends.
   * *   100: The rule takes effect.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The risk level. The value is a JSON array. Valid values:
   * 
   * *   serious: high
   * *   suspicious: medium
   * *   remind: low
   * 
   * @example
   * ["serious","suspicious","remind"]
   */
  threatLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      attCk: 'AttCk',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      eventTransferType: 'EventTransferType',
      id: 'Id',
      logSource: 'LogSource',
      order: 'Order',
      orderField: 'OrderField',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      startTime: 'StartTime',
      status: 'Status',
      threatLevel: 'ThreatLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      attCk: 'string',
      currentPage: 'number',
      endTime: 'number',
      eventTransferType: 'string',
      id: 'string',
      logSource: 'string',
      order: 'string',
      orderField: 'string',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ruleName: 'string',
      ruleType: 'string',
      startTime: 'number',
      status: 'number',
      threatLevel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudSiemPredefinedRulesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: ListCloudSiemPredefinedRulesResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListCloudSiemPredefinedRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudSiemPredefinedRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCloudSiemPredefinedRulesResponseBody;
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
      body: ListCloudSiemPredefinedRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomizeRuleTestResultRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      id: 'Id',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      id: 'number',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomizeRuleTestResultResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: ListCustomizeRuleTestResultResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListCustomizeRuleTestResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomizeRuleTestResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomizeRuleTestResultResponseBody;
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
      body: ListCustomizeRuleTestResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceLogsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123xxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code that is used for multi-cloud environments. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. The value is obtained after the threat analysis feature calculates the MD5 hash value of a parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceLogsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListDataSourceLogsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: ListDataSourceLogsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourceLogsResponseBody;
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
      body: ListDataSourceLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTypesRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the third-party cloud service.
   * 
   * Valid values:
   * 
   * *   qcloud
   * *   hcloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudCode: 'CloudCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudCode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTypesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListDataSourceTypesResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: { 'type': 'array', 'itemType': ListDataSourceTypesResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTypesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourceTypesResponseBody;
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
      body: ListDataSourceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListDeliveryResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-58D4-55B2-87B9-74D413F7****
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
      data: ListDeliveryResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeliveryResponseBody;
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
      body: ListDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisposeStrategyRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   0: invalid
   * *   1: valid
   * 
   * @example
   * 0
   */
  effectiveStatus?: number;
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The feature value of the entity. Fuzzy match is supported.
   * 
   * @example
   * test22.php
   */
  entityIdentity?: string;
  /**
   * @remarks
   * The entity type of the playbook. Valid values:
   * 
   * *   ip
   * *   process
   * *   file
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * *   desc: descending order.
   * *   asc: ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The sort field. Valid values:
   * 
   * *   GmtModified: sorts the policies by update time.
   * *   GmtCreate: sorts the policies by creation time.
   * *   FinishTime: sorts the policies by end time.
   * 
   * @example
   * GmtModified
   */
  orderField?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the playbook, which is the unique identifier of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  playbookName?: string;
  /**
   * @remarks
   * The type of the playbook. Valid values:
   * 
   * *   system: user-triggered playbook
   * *   custom: event-triggered playbook
   * *   custom_alert: alert-triggered playbook
   * *   soar-manual: user-run playbook
   * *   soar-mdr: MDR-run playbook
   * 
   * @example
   * system
   */
  playbookTypes?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * system_aliyun_clb_process_book
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The ID of the SOAR handling policy.
   * 
   * @example
   * a50a49b7-6044-4593-ab15-2b46567caadd
   */
  sophonTaskId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      effectiveStatus: 'EffectiveStatus',
      endTime: 'EndTime',
      entityIdentity: 'EntityIdentity',
      entityType: 'EntityType',
      order: 'Order',
      orderField: 'OrderField',
      pageSize: 'PageSize',
      playbookName: 'PlaybookName',
      playbookTypes: 'PlaybookTypes',
      playbookUuid: 'PlaybookUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      sophonTaskId: 'SophonTaskId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      effectiveStatus: 'number',
      endTime: 'number',
      entityIdentity: 'string',
      entityType: 'string',
      order: 'string',
      orderField: 'string',
      pageSize: 'number',
      playbookName: 'string',
      playbookTypes: 'string',
      playbookUuid: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      sophonTaskId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisposeStrategyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: ListDisposeStrategyResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListDisposeStrategyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisposeStrategyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDisposeStrategyResponseBody;
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
      body: ListDisposeStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImportedLogsByProdRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud.
   * *   aliyun: Alibaba Cloud.
   * *   hcloud: Huawei Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * qcloud_waf
   */
  prodCode?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      cloudCode: 'CloudCode',
      prodCode: 'ProdCode',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudCode: 'string',
      prodCode: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImportedLogsByProdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListImportedLogsByProdResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: { 'type': 'array', 'itemType': ListImportedLogsByProdResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImportedLogsByProdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImportedLogsByProdResponseBody;
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
      body: ListImportedLogsByProdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationRequest extends $tea.Model {
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in the Chinese mainland or in the China (Hong Kong) region.
   * *   ap-southeast-1: Your assets reside in regions outside the Chinese mainland, excluding the China (Hong Kong) region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListOperationResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CCEEE128-6607-503E-AAA6-C5E57D94****
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
      data: ListOperationResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOperationResponseBody;
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
      body: ListOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectLogStoresRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The log code.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  sourceLogCode?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * sas
   */
  sourceProdCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sourceLogCode: 'SourceLogCode',
      sourceProdCode: 'SourceProdCode',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sourceLogCode: 'string',
      sourceProdCode: 'string',
      subUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectLogStoresResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListProjectLogStoresResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: { 'type': 'array', 'itemType': ListProjectLogStoresResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectLogStoresResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectLogStoresResponseBody;
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
      body: ListProjectLogStoresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuickQueryRequest extends $tea.Model {
  /**
   * @remarks
   * The line from which the query starts. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside the Chinese mainland or in the China (Hong Kong) region.
   * *   ap-southeast-1: Your assets reside in regions outside the Chinese mainland, excluding the China (Hong Kong) region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuickQueryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListQuickQueryResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F375A043-4F5B-55F2-A564-CC47FFC6****
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
      data: ListQuickQueryResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuickQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQuickQueryResponseBody;
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
      body: ListQuickQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRdUsersRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRdUsersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListRdUsersResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: { 'type': 'array', 'itemType': ListRdUsersResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRdUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRdUsersResponseBody;
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
      body: ListRdUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProdLogsRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 管理员切换成其他成员视角的用户ID。
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * 视图类型。
   * 
   * - 0：当前阿里云账号视图。
   * - 1：企业下所有账号的视图。
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The log code.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  sourceLogCode?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * sas
   */
  sourceProdCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      sourceLogCode: 'SourceLogCode',
      sourceProdCode: 'SourceProdCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      sourceLogCode: 'string',
      sourceProdCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProdLogsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListUserProdLogsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: { 'type': 'array', 'itemType': ListUserProdLogsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProdLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserProdLogsResponseBody;
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
      body: ListUserProdLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersByProdRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * sas
   */
  sourceProdCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      sourceProdCode: 'SourceProdCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      sourceProdCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersByProdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListUsersByProdResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: { 'type': 'array', 'itemType': ListUsersByProdResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersByProdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersByProdResponseBody;
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
      body: ListUsersByProdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBindAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The AccessKey ID of the cloud account.
   * 
   * @example
   * ABCXXXXXXXXX
   */
  accessId?: string;
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The username of the cloud account.
   * 
   * @example
   * sas_account_xxx
   */
  accountName?: string;
  /**
   * @remarks
   * The ID that is generated by the system when the account is added. You can call the ListBindAccount operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  bindId?: number;
  /**
   * @remarks
   * The code of the cloud service provider.
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accountId: 'AccountId',
      accountName: 'AccountName',
      bindId: 'BindId',
      cloudCode: 'CloudCode',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accountId: 'string',
      accountName: 'string',
      bindId: 'number',
      cloudCode: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBindAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ModifyBindAccountResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: ModifyBindAccountResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBindAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyBindAccountResponseBody;
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
      body: ModifyBindAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123xxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters. You can call the [DescribeDataSourceInstance](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854\\&activeTabKey=api%7CDescribeDataSourceInstance) operation to query the IDs of data sources.
   * 
   * This parameter is required.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * beijing_waf_kafka
   */
  dataSourceInstanceName?: string;
  /**
   * @remarks
   * The parameters of the data source in the JSON string format.
   * 
   * @example
   * [{"paraCode":"region_code","paraValue":"ap-guangzhou"}]
   */
  dataSourceInstanceParams?: string;
  /**
   * @remarks
   * The remarks on the data source.
   * 
   * @example
   * waf_alert_log
   */
  dataSourceInstanceRemark?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   ckafka: Tencent Cloud Kafka (CKafka)
   * *   obs: Huawei Cloud Object Storage Service (OBS)
   * *   wafApi: download API of Tencent Cloud Web Application Firewall (WAF)
   * 
   * This parameter is required.
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      dataSourceInstanceName: 'DataSourceInstanceName',
      dataSourceInstanceParams: 'DataSourceInstanceParams',
      dataSourceInstanceRemark: 'DataSourceInstanceRemark',
      dataSourceType: 'DataSourceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      dataSourceInstanceName: 'string',
      dataSourceInstanceParams: 'string',
      dataSourceInstanceRemark: 'string',
      dataSourceType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ModifyDataSourceResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: ModifyDataSourceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDataSourceResponseBody;
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
      body: ModifyDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceLogRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters. You can call the [DescribeDataSourceInstance](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854\\&activeTabKey=api%7CDescribeDataSourceInstance) operation to query the IDs of data sources.
   * 
   * This parameter is required.
   * 
   * @example
   * ef33097c9d1fdb0b9c7e8c7ca320pkl1
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The parameters of the data source. Set this parameter to a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"LogCode":"cloud_siem_qcloud_waf_alert_log","LogParas":"[{\\"ParaCode\\":\\"api_name\\",\\"ParaValue\\":\\"GetAttackDownloadRecords\\"}]"}]
   */
  dataSourceInstanceLogs?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   obs: Huawei Cloud Object Storage Service (OBS)
   * *   wafApi: download API of Tencent Cloud Web Application Firewall (WAF)
   * *   ckafka: Tencent Cloud Kafka (CKafka)
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The log code.
   * 
   * @example
   * cloud_siem_waf_xxxxx
   */
  logCode?: string;
  /**
   * @remarks
   * The ID of the log. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters. You can call the [ListDataSourceLogs](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854\\&activeTabKey=api%7CListDataSourceLogs) to query log IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ef33097c9d1fdb0b9c7e8c7ca320pkl1
   */
  logInstanceId?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      dataSourceInstanceLogs: 'DataSourceInstanceLogs',
      dataSourceType: 'DataSourceType',
      logCode: 'LogCode',
      logInstanceId: 'LogInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      dataSourceInstanceLogs: 'string',
      dataSourceType: 'string',
      logCode: 'string',
      logInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceLogResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ModifyDataSourceLogResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: ModifyDataSourceLogResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDataSourceLogResponseBody;
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
      body: ModifyDataSourceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDeliveryRequest extends $tea.Model {
  /**
   * @remarks
   * The log code of the cloud service, such as the code of the process log for Security Center. This parameter is optional. If you leave this parameter empty, operations are performed on all logs of the cloud service.
   * 
   * @example
   * cloud_siem_cfw_flow
   */
  logCode?: string;
  /**
   * @remarks
   * The code of the cloud service. Valid values:
   * 
   * *   qcloud_waf
   * *   qlcoud_cfw
   * *   hcloud_waf
   * *   hcloud_cfw
   * *   ddos
   * *   sas
   * *   cfw
   * *   config
   * *   csk
   * *   fc
   * *   rds
   * *   nas
   * *   apigateway
   * *   cdn
   * *   mongodb
   * *   eip
   * *   slb
   * *   vpc
   * *   actiontrail
   * *   waf
   * *   bastionhost
   * *   oss
   * *   polardb
   * 
   * This parameter is required.
   * 
   * @example
   * cfw
   */
  productCode?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      logCode: 'LogCode',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logCode: 'string',
      productCode: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDeliveryResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the log delivery feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15FD134E-D69B-51E8-B052-73F97BD8****
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDeliveryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenDeliveryResponseBody;
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
      body: OpenDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostAutomateResponseConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The action configuration of the automated response rule. The value is in the JSON format.
   * 
   * @example
   * [
   *       {
   *             "actionType": "doPlaybook",
   *             "playbookName": "WafBlockIP",
   *             "playbookUuid": "bdad6220-6584-41b2-9704-fc6584568758"
   *       }
   * ]
   */
  actionConfig?: string;
  /**
   * @remarks
   * The type of the handling action. Multiple types are separated by commas (,). Valid values:
   * 
   * *   **doPlaybook**: runs the playbook.
   * *   **changeEventStatus**: changes the event status.
   * *   **changeThreatLevel**: changes the threat level of the event.
   * 
   * @example
   * doPlaybook,changeEventStatus
   */
  actionType?: string;
  /**
   * @remarks
   * The type of the automated response rule. Valid values:
   * 
   * *   **event**
   * *   **alert**
   * 
   * @example
   * event
   */
  autoResponseType?: string;
  /**
   * @remarks
   * The trigger condition of the automated response rule. The value is in the JSON format.
   * 
   * @example
   * [{"left":{"value":"alert_name"},"operator":"containsString","right":{"value":"webshell_online"}}]
   */
  executionCondition?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   **cn-hangzhou**: Your assets reside in regions in China.
   * *   **ap-southeast-1**: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * cfw kill quara book
   */
  ruleName?: string;
  /**
   * @remarks
   * The ID of the user who created the rule.
   * 
   * @example
   * 17108579417****
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      actionConfig: 'ActionConfig',
      actionType: 'ActionType',
      autoResponseType: 'AutoResponseType',
      executionCondition: 'ExecutionCondition',
      id: 'Id',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleName: 'RuleName',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionConfig: 'string',
      actionType: 'string',
      autoResponseType: 'string',
      executionCondition: 'string',
      id: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ruleName: 'string',
      subUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostAutomateResponseConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostAutomateResponseConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PostAutomateResponseConfigResponseBody;
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
      body: PostAutomateResponseConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostCustomizeRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The risk type.
   * 
   * @example
   * WEBSHELL
   */
  alertType?: string;
  /**
   * @remarks
   * The internal code of the risk type.
   * 
   * @example
   * ${siem_rule_type_process_abnormal_command}
   */
  alertTypeMds?: string;
  /**
   * @remarks
   * att&ck.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The extended information about event generation. If eventTransferType is set to allToSingle, the value of this parameter indicates the length and unit of the alert aggregation window.
   * 
   * @example
   * {"time":"1","unit":"MINUTE"}
   */
  eventTransferExt?: string;
  /**
   * @remarks
   * Specifies whether to convert an alert to an event. Valid values:
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 1
   */
  eventTransferSwitch?: number;
  /**
   * @remarks
   * The event generation method. Valid values:
   * 
   * *   default: The default method is used.
   * *   singleToSingle: The system generates an event for each alert.
   * *   allToSingle: The system generates an event for alerts within a period of time.
   * 
   * @example
   * allToSingle
   */
  eventTransferType?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The log source of the rule.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logSource?: string;
  /**
   * @remarks
   * The internal code of the log source.
   * 
   * @example
   * ${sas.cloudsiem.prod.cloud_siem_aegis_sas_alert}
   */
  logSourceMds?: string;
  /**
   * @remarks
   * The log type of the rule.
   * 
   * @example
   * ALERT_ACTIVITY
   */
  logType?: string;
  /**
   * @remarks
   * The internal code of the log type.
   * 
   * @example
   * ${security_event_config.event_name.webshellName_clientav}
   */
  logTypeMds?: string;
  /**
   * @remarks
   * The window length of the rule.
   * 
   * @example
   * {"time":"1","unit":"HOUR"}
   */
  queryCycle?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The query condition of the rule. The value is in the JSON format.
   * 
   * @example
   * [[{"not":false,"left":"alert_name","operator":"=","right":"WEBSHELL"}]]
   */
  ruleCondition?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * this rule is for waf scan
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The log aggregation field of the rule. The value is a JSON string.
   * 
   * @example
   * ["asset_id"]
   */
  ruleGroup?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * waf_scan
   */
  ruleName?: string;
  /**
   * @remarks
   * The threshold configuration of the rule. The value is in the JSON format.
   * 
   * @example
   * {"aggregateFunction":"count","aggregateFunctionName":"count","field":"activity_name","operator":"&lt;=","value":1}
   */
  ruleThreshold?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   serious: high
   * *   suspicious: medium
   * *   remind: low
   * 
   * @example
   * remind
   */
  threatLevel?: string;
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      alertTypeMds: 'AlertTypeMds',
      attCk: 'AttCk',
      eventTransferExt: 'EventTransferExt',
      eventTransferSwitch: 'EventTransferSwitch',
      eventTransferType: 'EventTransferType',
      id: 'Id',
      logSource: 'LogSource',
      logSourceMds: 'LogSourceMds',
      logType: 'LogType',
      logTypeMds: 'LogTypeMds',
      queryCycle: 'QueryCycle',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleCondition: 'RuleCondition',
      ruleDesc: 'RuleDesc',
      ruleGroup: 'RuleGroup',
      ruleName: 'RuleName',
      ruleThreshold: 'RuleThreshold',
      threatLevel: 'ThreatLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      alertTypeMds: 'string',
      attCk: 'string',
      eventTransferExt: 'string',
      eventTransferSwitch: 'number',
      eventTransferType: 'string',
      id: 'number',
      logSource: 'string',
      logSourceMds: 'string',
      logType: 'string',
      logTypeMds: 'string',
      queryCycle: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ruleCondition: 'string',
      ruleDesc: 'string',
      ruleGroup: 'string',
      ruleName: 'string',
      ruleThreshold: 'string',
      threatLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostCustomizeRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: PostCustomizeRuleResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: PostCustomizeRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostCustomizeRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PostCustomizeRuleResponseBody;
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
      body: PostCustomizeRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostCustomizeRuleTestRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The simulation data for the test. This parameter is available only when TestType is set to simulate.
   * 
   * @example
   * [{"key1":"value1","key2":"value2","key3":"value3","key4":"value4","key5":"value5"}]
   */
  simulatedData?: string;
  /**
   * @remarks
   * The test type. Valid values:
   * 
   * *   simulate: simulation data test
   * *   business: business data test
   * 
   * @example
   * simulate
   */
  testType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      simulatedData: 'SimulatedData',
      testType: 'TestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      simulatedData: 'string',
      testType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostCustomizeRuleTestResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: any;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostCustomizeRuleTestResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PostCustomizeRuleTestResponseBody;
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
      body: PostCustomizeRuleTestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostEventDisposeAndWhiteruleListRequest extends $tea.Model {
  /**
   * @remarks
   * The configuration of event handling. The value is a JSON object.
   * 
   * @example
   * [
   *       {
   *             "playbookName": "WafBlockIP",
   *             "entityId": "104466118",
   *             "scope": [
   *                   "176618589410****"
   *             ],
   *             "startTime": 1604168946281,
   *             "endTime": 1614168946281
   *       },
   *       {
   *             "playbookName": "WafBlockIP",
   *             "entityId": "104466118",
   *             "scope": [
   *                   {
   *                         "instanceId": "waf-cn-n6w1oy1****",
   *                         "domains": [
   *                               "lmfip.wafqax.***"
   *                         ]
   *                   }
   *             ],
   *             "startTime": 1604168946281,
   *             "endTime": 1614168946281
   *       }
   * ]
   */
  eventDispose?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The configuration of the alert recipient. The value is a JSON object.
   * 
   * @example
   * {
   *       "messageTitle": "test",
   *       "receiver": "xiaowang",
   *       "channel": "message"
   * }
   */
  receiverInfo?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the event.
   * 
   * @example
   * dealed
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   0: unhandled
   * *   1: handing
   * *   5: handling failed
   * *   10: handled
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      eventDispose: 'EventDispose',
      incidentUuid: 'IncidentUuid',
      receiverInfo: 'ReceiverInfo',
      regionId: 'RegionId',
      remark: 'Remark',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDispose: 'string',
      incidentUuid: 'string',
      receiverInfo: 'string',
      regionId: 'string',
      remark: 'string',
      roleFor: 'number',
      roleType: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostEventDisposeAndWhiteruleListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostEventDisposeAndWhiteruleListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PostEventDisposeAndWhiteruleListResponseBody;
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
      body: PostEventDisposeAndWhiteruleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostEventWhiteruleListRequest extends $tea.Model {
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The alert whitelist rule. The value is a JSON object.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *       {
   *             "alertName": "webshell",
   *             "alertNameId": "webshell",
   *             "alertType": "command",
   *             "alertTypeId": "command",
   *             "expression": {
   *                   "status": 1,
   *                   "conditions": [
   *                         {
   *                               "isNot": false,
   *                               "left": {
   *                                     "value": "file_path"
   *                               },
   *                               "operator": "gt",
   *                               "right": {
   *                                     "value": "cp"
   *                               }
   *                         }
   *                   ]
   *             }
   *       }
   * ]
   */
  whiteruleList?: string;
  static names(): { [key: string]: string } {
    return {
      incidentUuid: 'IncidentUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      whiteruleList: 'WhiteruleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidentUuid: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      whiteruleList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostEventWhiteruleListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostEventWhiteruleListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PostEventWhiteruleListResponseBody;
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
      body: PostEventWhiteruleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostFinishCustomizeRuleTestRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostFinishCustomizeRuleTestResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: any;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostFinishCustomizeRuleTestResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PostFinishCustomizeRuleTestResponseBody;
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
      body: PostFinishCustomizeRuleTestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostRuleStatusChangeRequest extends $tea.Model {
  /**
   * @remarks
   * The rule IDs. The value is a JSON array.
   * 
   * @example
   * [123,345]
   */
  ids?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  inUse?: boolean;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   predefine
   * *   customize
   * 
   * @example
   * customize
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      inUse: 'InUse',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      inUse: 'boolean',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostRuleStatusChangeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: any;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostRuleStatusChangeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PostRuleStatusChangeResponseBody;
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
      body: PostRuleStatusChangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreCapacityRequest extends $tea.Model {
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreCapacityResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the release command has been sent. Valid values:
   * 
   * *   true: The command has been sent and the storage space is being released.
   * *   false: The command failed to be sent.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-58D4-55B2-87B9-74D413F7****
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreCapacityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestoreCapacityResponseBody;
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
      body: RestoreCapacityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveQuickQueryRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the saved search.
   * 
   * This parameter is required.
   * 
   * @example
   * no_1_created_search_used_for_dispaly_ip
   */
  displayName?: string;
  /**
   * @remarks
   * The query statement.
   * 
   * This parameter is required.
   * 
   * @example
   * * and dst_ip : "121.43.234.***"
   */
  query?: string;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in the Chinese mainland or in the China (Hong Kong) region.
   * *   ap-southeast-1: Your assets reside in regions outside the Chinese mainland, excluding the China (Hong Kong) region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      query: 'Query',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      query: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveQuickQueryResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the query statement is saved as a saved search. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06735F17-1EDE-5212-81A3-8585368F****
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveQuickQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveQuickQueryResponseBody;
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
      body: SaveQuickQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetStorageRequest extends $tea.Model {
  /**
   * @remarks
   * The storage region of logs.
   * 
   * If the data management center is **cn-hangzhou**, the default value of **Region** is cn-shanghai, which specifies the China (Shanghai) region. If the data management center is **ap-southeast-1**, the default value of **Region** is ap-southeast-1, which specifies the Singapore region.
   * 
   * The region for log storage cannot be changed. To change the region, contact the technical support of threat analysis.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The storage duration of logs. Default value: 180. Minimum value: 30. Maximum value: 3000. Unit: days.
   * 
   * This parameter is required.
   * 
   * @example
   * 180
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetStorageResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the settings are saved. Valid values:
   * 
   * *   true:
   * *   false:
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-58D4-55B2-87B9-74D413F7****
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetStorageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetStorageResponseBody;
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
      body: SetStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShowQuickAnalysisRequest extends $tea.Model {
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in the Chinese mainland or in the China (Hong Kong) region.
   * *   ap-southeast-1: Your assets reside in regions outside the Chinese mainland, excluding the China (Hong Kong) region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShowQuickAnalysisResponseBody extends $tea.Model {
  /**
   * @remarks
   * The index fields.
   */
  data?: ShowQuickAnalysisResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2A4FBD89-C29D-5973-B882-CB2D23F6****
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
      data: ShowQuickAnalysisResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShowQuickAnalysisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ShowQuickAnalysisResponseBody;
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
      body: ShowQuickAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImportLogTasksRequest extends $tea.Model {
  /**
   * @remarks
   * The accounts that you want to add. The value is a JSON array. Valid values:
   * 
   * *   AccountId: the IDs of the accounts.
   * 
   * *   Imported: specifies whether to add the accounts. Valid values:
   * 
   *     *   0: no
   *     *   1: yes
   * 
   * @example
   * [{"AccountId":"123123","Imported":1}]
   */
  accounts?: string;
  /**
   * @remarks
   * Specifies whether to automatically add the account for which the logging feature is configured. Valid values:
   * 
   * *   1: yes
   * *   0: no
   * 
   * @example
   * ["cloud_siem_qcloud_cfw_alert_log"]
   */
  autoImported?: number;
  /**
   * @remarks
   * The code that is used for multi-cloud environments. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The logs that you want to collect. The value is a JSON array.
   * 
   * @example
   * ["cloud_siem_qcloud_cfw_alert_log"]
   */
  logCodes?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * qcloud_waf
   */
  prodCode?: string;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 0
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      autoImported: 'AutoImported',
      cloudCode: 'CloudCode',
      logCodes: 'LogCodes',
      prodCode: 'ProdCode',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: 'string',
      autoImported: 'number',
      cloudCode: 'string',
      logCodes: 'string',
      prodCode: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImportLogTasksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: SubmitImportLogTasksResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: SubmitImportLogTasksResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImportLogTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitImportLogTasksResponseBody;
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
      body: SubmitImportLogTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsRequest extends $tea.Model {
  /**
   * @remarks
   * The parameters of the logs that you want to add. The value is a JSON array, which contains the following parameters:\\
   * 
   * 
   * *   SourceProdCode: the code of the cloud service.
   * 
   * *   SourceLogCode: the code of the log.
   * 
   * *   Deleted: specifies whether to add the log. Valid values:
   * 
   *     *   0: yes
   *     *   1: no
   * 
   * This parameter is required.
   * 
   * @example
   * [{"SourceLogCode":"cloud_siem_aegis_health_check","SourceProdCode":"sas","SubUserId":120xxxxxxx,"Deleted":0},{"SourceLogCode":"cloud_siem_aegis_health_check","SourceProdCode":"sas","SubUserId":121xxxxxxxx,"Deleted":0},{"SourceLogCode":"cloud_siem_aegis_health_check","SourceProdCode":"sas","SubUserId":122xxxxxxx,"Deleted":1}]
   */
  jsonParam?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      jsonParam: 'JsonParam',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonParam: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 5
   */
  data?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitJobsResponseBody;
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
      body: SubmitJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutomateResponseConfigStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of the automatic response rules. The value is a JSON array.
   * 
   * @example
   * [123,345]
   */
  ids?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  inUse?: boolean;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      inUse: 'InUse',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      inUse: 'boolean',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutomateResponseConfigStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutomateResponseConfigStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAutomateResponseConfigStatusResponseBody;
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
      body: UpdateAutomateResponseConfigStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWhiteRuleListRequest extends $tea.Model {
  /**
   * @remarks
   * The alert whitelist rule. The value is a JSON object.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *       {
   *             "alertName": "webshell",
   *             "alertNameId": "webshell",
   *             "alertType": "command",
   *             "alertTypeId": "command",
   *             "expression": {
   *                   "status": 1,
   *                   "conditions": [
   *                         {
   *                               "isNot": false,
   *                               "left": {
   *                                     "value": "file_path"
   *                               },
   *                               "operator": "gt",
   *                               "right": {
   *                                     "value": "cp"
   *                               }
   *                         }
   *                   ]
   *             }
   *       }
   * ]
   */
  expression?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  /**
   * @remarks
   * The unique ID of the whitelist rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  whiteRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      incidentUuid: 'IncidentUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      whiteRuleId: 'WhiteRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      incidentUuid: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      whiteRuleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWhiteRuleListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: any;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWhiteRuleListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWhiteRuleListResponseBody;
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
      body: UpdateWhiteRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataProductListLogMapValueExtraParameters extends $tea.Model {
  /**
   * @remarks
   * The ID of the extended parameter.
   * 
   * @example
   * flag
   */
  key?: string;
  /**
   * @remarks
   * The value of the extended parameter.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of data sources that are added. The value 1 indicates that data source is added, and a value less than or equal to 0 indicates that the data source failed to be added.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The ID of the data source. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      dataSourceInstanceId: 'DataSourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      dataSourceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceLogResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of logs that are added. The value 1 indicates that the log is added, and a value less than or equal to 0 indicates that the log failed to be added.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The ID of the log. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters.
   * 
   * @example
   * ef33097c9d1fdb0b9c7e8c7ca320pkl1
   */
  logInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      logInstanceId: 'LogInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      logInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserSourceLogConfigResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The display details of the Logstore.
   * 
   * @example
   * cn-shanghai.siem-project.siem-logstore
   */
  diplayLine?: string;
  /**
   * @remarks
   * Indicates whether the details of added logs are returned. Valid values: true false
   * 
   * @example
   * 0
   */
  displayed?: boolean;
  /**
   * @remarks
   * Indicates whether the logs are added to the threat analysis feature. Valid values: true false
   * 
   * @example
   * 0
   */
  imported?: boolean;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The log code.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  sourceLogCode?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * sas
   */
  sourceProdCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that can be used to perform operations supported by the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The username of the Alibaba Cloud account that can be used to perform operations supported by the threat analysis feature.
   * 
   * @example
   * sas_account_xxx
   */
  subUserName?: string;
  static names(): { [key: string]: string } {
    return {
      diplayLine: 'DiplayLine',
      displayed: 'Displayed',
      imported: 'Imported',
      mainUserId: 'MainUserId',
      sourceLogCode: 'SourceLogCode',
      sourceProdCode: 'SourceProdCode',
      subUserId: 'SubUserId',
      subUserName: 'SubUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diplayLine: 'string',
      displayed: 'boolean',
      imported: 'boolean',
      mainUserId: 'number',
      sourceLogCode: 'string',
      sourceProdCode: 'string',
      subUserId: 'number',
      subUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitResponseBodyDataConfigListProductListLogList extends $tea.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * ProjectLogstoreNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The log code.
   * 
   * @example
   * cloud_siem_cfw_flow
   */
  logCode?: string;
  /**
   * @remarks
   * The pattern of SLS log store name.
   * 
   * @example
   * vpc-test-logstore
   */
  logStoreNamePattern?: string;
  /**
   * @remarks
   * The code of product.
   * 
   * @example
   * sas
   */
  productCode?: string;
  /**
   * @remarks
   * The pattern of SLS project name.
   * 
   * @example
   * vpc-test-project
   */
  projectNamePattern?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-shanghai
   */
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      logCode: 'LogCode',
      logStoreNamePattern: 'LogStoreNamePattern',
      productCode: 'ProductCode',
      projectNamePattern: 'ProjectNamePattern',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      logCode: 'string',
      logStoreNamePattern: 'string',
      productCode: 'string',
      projectNamePattern: 'string',
      regionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitResponseBodyDataConfigListProductList extends $tea.Model {
  /**
   * @remarks
   * The list of log.
   */
  logList?: BatchJobSubmitResponseBodyDataConfigListProductListLogList[];
  /**
   * @remarks
   * The code of the product.
   * 
   * @example
   * sas
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: { 'type': 'array', 'itemType': BatchJobSubmitResponseBodyDataConfigListProductListLogList },
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitResponseBodyDataConfigList extends $tea.Model {
  /**
   * @remarks
   * The list of product.
   */
  productList?: BatchJobSubmitResponseBodyDataConfigListProductList[];
  /**
   * @remarks
   * The account id of aliyun.
   * 
   * @example
   * 123xxxxxx
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      productList: 'ProductList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productList: { 'type': 'array', 'itemType': BatchJobSubmitResponseBodyDataConfigListProductList },
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the task configuration.
   * 
   * @example
   * xxxx_folder_xxxx
   */
  configId?: string;
  /**
   * @remarks
   * The list of task configure.
   */
  configList?: BatchJobSubmitResponseBodyDataConfigList[];
  /**
   * @remarks
   * The id of task.
   * 
   * @example
   * BATCH_JOB_XXXXXX
   */
  submitId?: string;
  /**
   * @remarks
   * The number of existing tasks that are created to add logs within the data source.
   * 
   * @example
   * 20
   */
  taskCount?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configList: 'ConfigList',
      submitId: 'SubmitId',
      taskCount: 'TaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      configList: { 'type': 'array', 'itemType': BatchJobSubmitResponseBodyDataConfigList },
      submitId: 'string',
      taskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAccountResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of the cloud accounts that are added to the threat analysis feature.
   * 
   * @example
   * 1
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBindAccountResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of cloud accounts that are removed. The value 1 indicates that cloud account is removed, and a value less than or equal to 0 indicates that the cloud account failed to be removed.
   * 
   * @example
   * 1
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of data sources that are removed. The value 1 indicates that data source is removed, and a value less than or equal to 0 indicates that the data source failed to be removed.
   * 
   * @example
   * 1
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceLogResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of logs that are removed. The value 1 indicates that the log is removed, and a value less than or equal to 0 indicates that the log failed to be removed.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The ID of the log. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters.
   * 
   * @example
   * ef33097c9d1fdb0b9c7e8c7ca320pkl1
   */
  logInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      logInstanceId: 'LogInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      logInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAggregateFunctionResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The aggregate function.
   * 
   * @example
   * count
   */
  function?: string;
  /**
   * @remarks
   * The display name of the aggregate function.
   * 
   * @example
   * Count
   */
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSceneResponseBodyDataTargets extends $tea.Model {
  /**
   * @remarks
   * The display name of the attribute for the entity.
   * 
   * @example
   * HOST UUID
   */
  name?: string;
  /**
   * @remarks
   * The attribute of the entity.
   * 
   * @example
   * host_uuid
   */
  type?: string;
  /**
   * @remarks
   * The right operand that is displayed by default in the whitelist rule.
   * 
   * @example
   * 441862da-a539-4cc0-a00d-47395582****
   */
  value?: string;
  /**
   * @remarks
   * The right operands supported by the whitelist rule.
   * 
   * @example
   * ["441862da-a539-4cc0-a00d-473955826881"]
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSceneResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The name of the alert. The value varies based on the display language (Chinese or English) of the Security Center console.
   * 
   * @example
   * login_common_ip
   */
  alertName?: string;
  /**
   * @remarks
   * The ID of the alert name.
   * 
   * @example
   * login_common_ip
   */
  alertNameId?: string;
  /**
   * @remarks
   * The title of the alert notification. The value varies based on the display language (Chinese or English) of the Security Center console.
   * 
   * @example
   * unusual login-login_common_ip
   */
  alertTile?: string;
  /**
   * @remarks
   * The ID of the alert title.
   * 
   * @example
   * unusual login-login_common_ip
   */
  alertTileId?: string;
  /**
   * @remarks
   * The type of the alert. The value varies based on the display language (Chinese or English) of the Security Center console.
   * 
   * @example
   * unusual login
   */
  alertType?: string;
  /**
   * @remarks
   * The ID of the alert type.
   * 
   * @example
   * unusual login
   */
  alertTypeId?: string;
  /**
   * @remarks
   * The information about the entities for which you need to add the alert to the whitelist.
   * 
   * @example
   * [{"Type": "host_uuid","Value": "441862da-a539-4cc0-a00d-473955826881","Values": ["441862da-a539-4cc0-a00d-473955826881"],"Name": "${aliyun.siem.entity.host_uuid}"}]
   */
  targets?: DescribeAlertSceneResponseBodyDataTargets[];
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      alertNameId: 'AlertNameId',
      alertTile: 'AlertTile',
      alertTileId: 'AlertTileId',
      alertType: 'AlertType',
      alertTypeId: 'AlertTypeId',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      alertNameId: 'string',
      alertTile: 'string',
      alertTileId: 'string',
      alertType: 'string',
      alertTypeId: 'string',
      targets: { 'type': 'array', 'itemType': DescribeAlertSceneResponseBodyDataTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSceneByEventResponseBodyDataTargets extends $tea.Model {
  /**
   * @remarks
   * The display name of the entity attribute field that can be added to the whitelist.
   * 
   * @example
   * host uuid
   */
  name?: string;
  /**
   * @remarks
   * The entity attribute field that can be added to the whitelist.
   * 
   * @example
   * host_uuid
   */
  type?: string;
  /**
   * @remarks
   * The right operand that is displayed by default in the whitelist rule.
   * 
   * @example
   * 441862da-a539-4cc0-a00d-47395582****
   */
  value?: string;
  /**
   * @remarks
   * The supported right operands of the whitelist rule.
   * 
   * @example
   * ["441862da-a539-4cc0-a00d-473955826881"]
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSceneByEventResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The alert name. The display name of the alert name varies based on the language of the system, such as Chinese and English.
   * 
   * @example
   * login_common_ip
   */
  alertName?: string;
  /**
   * @remarks
   * The ID of the alert name.
   * 
   * @example
   * login_common_ip
   */
  alertNameId?: string;
  /**
   * @remarks
   * The alert title. The display name of the alert title varies based on the language of the system, such as Chinese and English.
   * 
   * @example
   * Unusual Logon-login_common_ip
   */
  alertTile?: string;
  /**
   * @remarks
   * The ID of the alert title.
   * 
   * @example
   * Unusual Logon-login_common_ip
   */
  alertTileId?: string;
  /**
   * @remarks
   * The alert type. The display name of the alert type varies based on the language of the system, such as Chinese and English.
   * 
   * @example
   * Unusual Logon
   */
  alertType?: string;
  /**
   * @remarks
   * The ID of the alert type.
   * 
   * @example
   * Unusual Logon
   */
  alertTypeId?: string;
  /**
   * @remarks
   * The objects that can be added to the whitelist.
   * 
   * @example
   * [{"Type": "host_uuid","Value": "441862da-a539-4cc0-a00d-473955826881","Values": ["441862da-a539-4cc0-a00d-473955826881"],"Name": "${aliyun.siem.entity.host_uuid}"}]
   */
  targets?: DescribeAlertSceneByEventResponseBodyDataTargets[];
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      alertNameId: 'AlertNameId',
      alertTile: 'AlertTile',
      alertTileId: 'AlertTileId',
      alertType: 'AlertType',
      alertTypeId: 'AlertTypeId',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      alertNameId: 'string',
      alertTile: 'string',
      alertTileId: 'string',
      alertType: 'string',
      alertTypeId: 'string',
      targets: { 'type': 'array', 'itemType': DescribeAlertSceneByEventResponseBodyDataTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSourceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The internal code of the alert data source.
   * 
   * @example
   * aliyun.siem.alert_datasource.sas
   */
  source?: string;
  /**
   * @remarks
   * The name of the alert data source.
   * 
   * @example
   * sas
   */
  sourceName?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      sourceName: 'SourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSourceWithEventResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The internal code of the alert data source.
   * 
   * @example
   * aliyun.siem.alert_datasource.sas
   */
  source?: string;
  /**
   * @remarks
   * The name of the alert data source.
   * 
   * @example
   * sas
   */
  sourceName?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      sourceName: 'SourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertTypeResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The type of the risk.
   * 
   * @example
   * WEBSHELL
   */
  alertType?: string;
  /**
   * @remarks
   * The internal code of the risk type.
   * 
   * @example
   * siem_rule_type_process_abnormal_command
   */
  alertTypeMds?: string;
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      alertTypeMds: 'AlertTypeMds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      alertTypeMds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsResponseBodyDataPageInfo extends $tea.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsResponseBodyDataResponseDataAlertInfoList extends $tea.Model {
  /**
   * @remarks
   * The attribute key.
   * 
   * @example
   * suspicious.wbd.wb.trojanpath
   */
  key?: string;
  /**
   * @remarks
   * The name of the key.
   * 
   * @example
   * Trojan Path
   */
  keyName?: string;
  /**
   * @remarks
   * The value of the key.
   * 
   * @example
   * /root/test33.php
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyName: 'KeyName',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyName: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsResponseBodyDataResponseData extends $tea.Model {
  /**
   * @remarks
   * The description of the alert.
   * 
   * @example
   * The detection model found a suspicious Webshell file on your server, which may be a backdoor file implanted to maintain permissions after the attacker successfully invaded the website.
   */
  alertDesc?: string;
  /**
   * @remarks
   * The internal code of the alert description.
   * 
   * @example
   * security_event_config.event_name.webshell
   */
  alertDescCode?: string;
  /**
   * @remarks
   * The description of the alert in English.
   * 
   * @example
   * The detection model found a suspicious Webshell file on your server, which may be a backdoor file implanted to maintain permissions after the attacker successfully invaded the website.
   */
  alertDescEn?: string;
  /**
   * @remarks
   * The details of the alert.
   * 
   * @example
   * {"main_user_id": "165295629792****";"log_uuid_count": "99";"attack_ip": "21.92.*.*"}
   */
  alertDetail?: string;
  /**
   * @remarks
   * The displayed details of the alert.
   * 
   * @example
   * aliyun
   */
  alertInfoList?: DescribeAlertsResponseBodyDataResponseDataAlertInfoList[];
  /**
   * @remarks
   * The threat level. Valid values:
   * 
   * *   serious: high
   * *   suspicious: medium
   * *   remind: low
   * 
   * @example
   * remind
   */
  alertLevel?: string;
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * Try SNMP weak password
   */
  alertName?: string;
  /**
   * @remarks
   * The internal code of the alert name.
   * 
   * @example
   * security_event_config.event_name.webshell
   */
  alertNameCode?: string;
  /**
   * @remarks
   * The name of the alert in English.
   * 
   * @example
   * Try SNMP weak password
   */
  alertNameEn?: string;
  /**
   * @remarks
   * The service for which the alert associated with the event is generated.
   * 
   * @example
   * sas
   */
  alertSrcProd?: string;
  /**
   * @remarks
   * The sub-module of ther alert source.
   * 
   * @example
   * waf
   */
  alertSrcProdModule?: string;
  /**
   * @remarks
   * The title of the alert.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitle?: string;
  /**
   * @remarks
   * The title of the alert in English.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitleEn?: string;
  /**
   * @remarks
   * The alert type.
   * 
   * @example
   * Scan
   */
  alertType?: string;
  /**
   * @remarks
   * The internal code of the alert type.
   * 
   * @example
   * security_event_config.event_name.webshellName
   */
  alertTypeCode?: string;
  /**
   * @remarks
   * The type of the alert in English.
   * 
   * @example
   * Scan
   */
  alertTypeEn?: string;
  /**
   * @remarks
   * The UUID of the alert.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The details of the asset.
   * 
   * @example
   * [
   *       {
   *             "is_main_asset": "1",
   *             "asset_name": "47.245.*",
   *             "port": "22",
   *             "ip": "47.245.*",
   *             "asset_type": "ip",
   *             "location": "ap-southeast-1",
   *             "asset_id": "47.245.*",
   *             "net_connect_dir": "in"
   *       }
   * ]
   */
  assetList?: string;
  /**
   * @remarks
   * The tag of the ATT\\&CK attack.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The cloud code. Valid values:
   * 
   * *   aliyun: Alibaba Cloud
   * *   qcloud: Tencent Cloud
   * *   hcloud: Huawei Cloud
   * 
   * @example
   * aliyun
   */
  cloudCode?: string;
  /**
   * @remarks
   * The time when the alert was closed.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the alert was received.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the alert was last updated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique ID of the alert.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * Indicates whether an attack is defended. Valid values:
   * 
   * *   0: detected.
   * *   1: blocked.
   * 
   * @example
   * 1
   */
  isDefend?: string;
  /**
   * @remarks
   * The time when the alert was recorded.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  logTime?: string;
  /**
   * @remarks
   * The UUID of the alert log.
   * 
   * @example
   * cfw_d12e285a-a042-4d7e-be89-f8a795ef****
   */
  logUuid?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is associated with the alert in SIEM.
   * 
   * @example
   * 127608589417****
   */
  mainUserId?: number;
  /**
   * @remarks
   * The time when the alert is triggered.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  occurTime?: string;
  /**
   * @remarks
   * The time at which the alert was first generated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account within which the alert is generated.
   * 
   * @example
   * 176555323***
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      alertDesc: 'AlertDesc',
      alertDescCode: 'AlertDescCode',
      alertDescEn: 'AlertDescEn',
      alertDetail: 'AlertDetail',
      alertInfoList: 'AlertInfoList',
      alertLevel: 'AlertLevel',
      alertName: 'AlertName',
      alertNameCode: 'AlertNameCode',
      alertNameEn: 'AlertNameEn',
      alertSrcProd: 'AlertSrcProd',
      alertSrcProdModule: 'AlertSrcProdModule',
      alertTitle: 'AlertTitle',
      alertTitleEn: 'AlertTitleEn',
      alertType: 'AlertType',
      alertTypeCode: 'AlertTypeCode',
      alertTypeEn: 'AlertTypeEn',
      alertUuid: 'AlertUuid',
      assetList: 'AssetList',
      attCk: 'AttCk',
      cloudCode: 'CloudCode',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentUuid: 'IncidentUuid',
      isDefend: 'IsDefend',
      logTime: 'LogTime',
      logUuid: 'LogUuid',
      mainUserId: 'MainUserId',
      occurTime: 'OccurTime',
      startTime: 'StartTime',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertDesc: 'string',
      alertDescCode: 'string',
      alertDescEn: 'string',
      alertDetail: 'string',
      alertInfoList: { 'type': 'array', 'itemType': DescribeAlertsResponseBodyDataResponseDataAlertInfoList },
      alertLevel: 'string',
      alertName: 'string',
      alertNameCode: 'string',
      alertNameEn: 'string',
      alertSrcProd: 'string',
      alertSrcProdModule: 'string',
      alertTitle: 'string',
      alertTitleEn: 'string',
      alertType: 'string',
      alertTypeCode: 'string',
      alertTypeEn: 'string',
      alertUuid: 'string',
      assetList: 'string',
      attCk: 'string',
      cloudCode: 'string',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentUuid: 'string',
      isDefend: 'string',
      logTime: 'string',
      logUuid: 'string',
      mainUserId: 'number',
      occurTime: 'string',
      startTime: 'string',
      subUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeAlertsResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: DescribeAlertsResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeAlertsResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': DescribeAlertsResponseBodyDataResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsCountResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The total number of alerts.
   * 
   * @example
   * 75
   */
  all?: number;
  /**
   * @remarks
   * The number of high-risk alerts.
   * 
   * @example
   * 25
   */
  high?: number;
  /**
   * @remarks
   * The number of low-risk alerts.
   * 
   * @example
   * 25
   */
  low?: number;
  /**
   * @remarks
   * The number of medium-risk alerts.
   * 
   * @example
   * 25
   */
  medium?: number;
  /**
   * @remarks
   * The number of connected services.
   * 
   * @example
   * 3
   */
  productNum?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      high: 'High',
      low: 'Low',
      medium: 'Medium',
      productNum: 'ProductNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      high: 'number',
      low: 'number',
      medium: 'number',
      productNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEntityResponseBodyDataPageInfo extends $tea.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEntityResponseBodyDataResponseDataAlertInfoList extends $tea.Model {
  /**
   * @remarks
   * The attribute key.
   * 
   * @example
   * suspicious.wbd.wb.trojanpath
   */
  key?: string;
  /**
   * @remarks
   * The name of the key.
   * 
   * @example
   * Trojan Path
   */
  keyName?: string;
  /**
   * @remarks
   * The value of the key.
   * 
   * @example
   * /root/test33.php
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyName: 'KeyName',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyName: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEntityResponseBodyDataResponseData extends $tea.Model {
  /**
   * @remarks
   * The description of the alert.
   * 
   * @example
   * The detection model found a suspicious Webshell file on your server, which may be a backdoor file implanted to maintain permissions after the attacker successfully invaded the website.
   */
  alertDesc?: string;
  /**
   * @remarks
   * The internal code of the alert description.
   * 
   * @example
   * security_event_config.event_name.webshell
   */
  alertDescCode?: string;
  /**
   * @remarks
   * The alert description in English.
   * 
   * @example
   * The detection model found a suspicious Webshell file on your server, which may be a backdoor file implanted to maintain permissions after the attacker successfully invaded the website.
   */
  alertDescEn?: string;
  /**
   * @remarks
   * The details of the alert.
   * 
   * @example
   * {"main_user_id": "165295629792****";"log_uuid_count": "99";"attack_ip": "21.92.*.*"}
   */
  alertDetail?: string;
  /**
   * @remarks
   * The displayed details of the alert.
   * 
   * @example
   * aliyun
   */
  alertInfoList?: DescribeAlertsWithEntityResponseBodyDataResponseDataAlertInfoList[];
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   serious: high
   * *   suspicious: medium
   * *   remind: low
   * 
   * @example
   * remind
   */
  alertLevel?: string;
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * Try SNMP weak password
   */
  alertName?: string;
  /**
   * @remarks
   * The internal code of the alert name.
   * 
   * @example
   * security_event_config.event_name.webshell
   */
  alertNameCode?: string;
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * Try SNMP weak password
   */
  alertNameEn?: string;
  /**
   * @remarks
   * The source of the alert.
   * 
   * @example
   * sas
   */
  alertSrcProd?: string;
  /**
   * @remarks
   * The sub-module of the alert source.
   * 
   * @example
   * waf
   */
  alertSrcProdModule?: string;
  /**
   * @remarks
   * The title of the alert.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitle?: string;
  /**
   * @remarks
   * The alert title in English.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitleEn?: string;
  /**
   * @remarks
   * The type of the alert.
   * 
   * @example
   * Scan
   */
  alertType?: string;
  /**
   * @remarks
   * The internal code of the alert type.
   * 
   * @example
   * security_event_config.event_name.webshellName
   */
  alertTypeCode?: string;
  /**
   * @remarks
   * The alert type in English.
   * 
   * @example
   * Scan
   */
  alertTypeEn?: string;
  /**
   * @remarks
   * The UUID of the alert.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The details of the asset.
   * 
   * @example
   * [
   *       {
   *             "is_main_asset": "1",
   *             "asset_name": "47.245.*",
   *             "port": "22",
   *             "ip": "47.245.*",
   *             "asset_type": "ip",
   *             "location": "ap-southeast-1",
   *             "asset_id": "47.245.*",
   *             "net_connect_dir": "in"
   *       }
   * ]
   */
  assetList?: string;
  /**
   * @remarks
   * The tag of the ATT\\&CK attack.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The cloud code. Valid values:
   * 
   * *   aliyun: Alibaba Cloud
   * *   qcloud: Tencent Cloud
   * *   hcloud: Huawei Cloud
   * 
   * @example
   * aliyun
   */
  cloudCode?: string;
  /**
   * @remarks
   * The time when the alert was closed.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the alert was received.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the alert was last updated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique ID of the alert.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * Specifies whether an attack is defended. Valid values:
   * 
   * *   0: detected
   * *   1: blocked
   * 
   * @example
   * 1
   */
  isDefend?: string;
  /**
   * @remarks
   * The time when the alert was recorded.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  logTime?: string;
  /**
   * @remarks
   * The UUID of the alert log.
   * 
   * @example
   * cfw_d12e285a-a042-4d7e-be89-f8a795ef****
   */
  logUuid?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is associated with the alert in SIEM.
   * 
   * @example
   * 127608589417****
   */
  mainUserId?: number;
  /**
   * @remarks
   * The time when the alert was triggered.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  occurTime?: string;
  /**
   * @remarks
   * The time at which the alert was first generated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account within which the alert is generated.
   * 
   * @example
   * 176555323***
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      alertDesc: 'AlertDesc',
      alertDescCode: 'AlertDescCode',
      alertDescEn: 'AlertDescEn',
      alertDetail: 'AlertDetail',
      alertInfoList: 'AlertInfoList',
      alertLevel: 'AlertLevel',
      alertName: 'AlertName',
      alertNameCode: 'AlertNameCode',
      alertNameEn: 'AlertNameEn',
      alertSrcProd: 'AlertSrcProd',
      alertSrcProdModule: 'AlertSrcProdModule',
      alertTitle: 'AlertTitle',
      alertTitleEn: 'AlertTitleEn',
      alertType: 'AlertType',
      alertTypeCode: 'AlertTypeCode',
      alertTypeEn: 'AlertTypeEn',
      alertUuid: 'AlertUuid',
      assetList: 'AssetList',
      attCk: 'AttCk',
      cloudCode: 'CloudCode',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentUuid: 'IncidentUuid',
      isDefend: 'IsDefend',
      logTime: 'LogTime',
      logUuid: 'LogUuid',
      mainUserId: 'MainUserId',
      occurTime: 'OccurTime',
      startTime: 'StartTime',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertDesc: 'string',
      alertDescCode: 'string',
      alertDescEn: 'string',
      alertDetail: 'string',
      alertInfoList: { 'type': 'array', 'itemType': DescribeAlertsWithEntityResponseBodyDataResponseDataAlertInfoList },
      alertLevel: 'string',
      alertName: 'string',
      alertNameCode: 'string',
      alertNameEn: 'string',
      alertSrcProd: 'string',
      alertSrcProdModule: 'string',
      alertTitle: 'string',
      alertTitleEn: 'string',
      alertType: 'string',
      alertTypeCode: 'string',
      alertTypeEn: 'string',
      alertUuid: 'string',
      assetList: 'string',
      attCk: 'string',
      cloudCode: 'string',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentUuid: 'string',
      isDefend: 'string',
      logTime: 'string',
      logUuid: 'string',
      mainUserId: 'number',
      occurTime: 'string',
      startTime: 'string',
      subUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEntityResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeAlertsWithEntityResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: DescribeAlertsWithEntityResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeAlertsWithEntityResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': DescribeAlertsWithEntityResponseBodyDataResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEventResponseBodyDataPageInfo extends $tea.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEventResponseBodyDataResponseDataAlertInfoList extends $tea.Model {
  /**
   * @remarks
   * The attribute key.
   * 
   * @example
   * suspicious.wbd.wb.trojanpath
   */
  key?: string;
  /**
   * @remarks
   * The name of the key.
   * 
   * @example
   * Trojan Path
   */
  keyName?: string;
  /**
   * @remarks
   * The value of the key.
   * 
   * @example
   * /root/test33.php
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyName: 'KeyName',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyName: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEventResponseBodyDataResponseData extends $tea.Model {
  /**
   * @remarks
   * The description of the alert.
   * 
   * @example
   * The detection model found a suspicious Webshell file on your server, which may be a backdoor file implanted to maintain permissions after the attacker successfully invaded the website.
   */
  alertDesc?: string;
  /**
   * @remarks
   * The internal code of the alert description.
   * 
   * @example
   * security_event_config.event_name.webshell
   */
  alertDescCode?: string;
  /**
   * @remarks
   * The alert description in English.
   * 
   * @example
   * The detection model found a suspicious Webshell file on your server, which may be a backdoor file implanted to maintain permissions after the attacker successfully invaded the website.
   */
  alertDescEn?: string;
  /**
   * @remarks
   * The details of the alert.
   * 
   * @example
   * {"main_user_id": "165295629792****";"log_uuid_count": "99";"attack_ip": "21.92.*.*"}
   */
  alertDetail?: string;
  /**
   * @remarks
   * The displayed details of the alert.
   * 
   * @example
   * aliyun
   */
  alertInfoList?: DescribeAlertsWithEventResponseBodyDataResponseDataAlertInfoList[];
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   serious: high.
   * *   suspicious: medium.
   * *   remind: low.
   * 
   * @example
   * remind
   */
  alertLevel?: string;
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * Try SNMP weak password
   */
  alertName?: string;
  /**
   * @remarks
   * The internal code of the alert name.
   * 
   * @example
   * security_event_config.event_name.webshell
   */
  alertNameCode?: string;
  /**
   * @remarks
   * The alert name in English.
   * 
   * @example
   * Try SNMP weak password
   */
  alertNameEn?: string;
  /**
   * @remarks
   * The source of the alert.
   * 
   * @example
   * sas
   */
  alertSrcProd?: string;
  /**
   * @remarks
   * The sub-module of the alert source.
   * 
   * @example
   * waf
   */
  alertSrcProdModule?: string;
  /**
   * @remarks
   * The title of the alert.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitle?: string;
  /**
   * @remarks
   * The alert title in English.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitleEn?: string;
  /**
   * @remarks
   * The type of the alert.
   * 
   * @example
   * Scan
   */
  alertType?: string;
  /**
   * @remarks
   * The internal code of the alert type.
   * 
   * @example
   * security_event_config.event_name.webshellName
   */
  alertTypeCode?: string;
  /**
   * @remarks
   * The alert type in English.
   * 
   * @example
   * Scan
   */
  alertTypeEn?: string;
  /**
   * @remarks
   * The UUID of the alert.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The details of the asset.
   * 
   * @example
   * [
   *       {
   *             "is_main_asset": "1",
   *             "asset_name": "47.245.*",
   *             "port": "22",
   *             "ip": "47.245.*",
   *             "asset_type": "ip",
   *             "location": "ap-southeast-1",
   *             "asset_id": "47.245.*",
   *             "net_connect_dir": "in"
   *       }
   * ]
   */
  assetList?: string;
  /**
   * @remarks
   * The tag of the ATT\\&CK technique.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   aliyun: Alibaba Cloud.
   * *   qcloud: Tencent Cloud.
   * *   hcloud: Huawei Cloud.
   * 
   * @example
   * aliyun
   */
  cloudCode?: string;
  /**
   * @remarks
   * The time when the alert was closed.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  endTime?: string;
  /**
   * @remarks
   * The details of the entity.
   * 
   * @example
   * [{&quot;entity_user_id&quot;:&quot;198921674491****&quot;,&quot;entity_account_id&quot;:&quot;N/A&quot;,&quot;entity_uuid&quot;:&quot;6245f979d5dd9ef8dd19bdc72228****&quot;,&quot;entity_type&quot;:&quot;host&quot;,&quot;entity_name&quot;:&quot;zhh-test-20240409&quot;,&quot;is_comprised&quot;:&quot;1&quot;,&quot;os_type&quot;:&quot;linux&quot;,&quot;entity_id&quot;:&quot;a88f44dd-b8d4-4ded-831c-77a4835****&quot;,&quot;host_uuid&quot;:&quot;a88f44dd-b8d4-4ded-831c-77a4835****&quot;,&quot;host_name&quot;:&quot;zhh-test-2024****&quot;}]
   */
  entityList?: string;
  /**
   * @remarks
   * The time when the alert was received.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the alert was last updated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique ID of the alert.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * Indicates whether an attack is defended against. Valid values:
   * 
   * *   0: detected.
   * *   1: blocked.
   * 
   * @example
   * 1
   */
  isDefend?: string;
  /**
   * @remarks
   * The time when the alert was recorded.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  logTime?: string;
  /**
   * @remarks
   * The UUID of the alert log.
   * 
   * @example
   * cfw_d12e285a-a042-4d7e-be89-f8a795ef****
   */
  logUuid?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is associated with the alert in SIEM.
   * 
   * @example
   * 127608589417****
   */
  mainUserId?: number;
  /**
   * @remarks
   * The time when the alert was triggered.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  occurTime?: string;
  /**
   * @remarks
   * The time at which the alert was first generated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account within which the alert is generated.
   * 
   * @example
   * 176555323***
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      alertDesc: 'AlertDesc',
      alertDescCode: 'AlertDescCode',
      alertDescEn: 'AlertDescEn',
      alertDetail: 'AlertDetail',
      alertInfoList: 'AlertInfoList',
      alertLevel: 'AlertLevel',
      alertName: 'AlertName',
      alertNameCode: 'AlertNameCode',
      alertNameEn: 'AlertNameEn',
      alertSrcProd: 'AlertSrcProd',
      alertSrcProdModule: 'AlertSrcProdModule',
      alertTitle: 'AlertTitle',
      alertTitleEn: 'AlertTitleEn',
      alertType: 'AlertType',
      alertTypeCode: 'AlertTypeCode',
      alertTypeEn: 'AlertTypeEn',
      alertUuid: 'AlertUuid',
      assetList: 'AssetList',
      attCk: 'AttCk',
      cloudCode: 'CloudCode',
      endTime: 'EndTime',
      entityList: 'EntityList',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentUuid: 'IncidentUuid',
      isDefend: 'IsDefend',
      logTime: 'LogTime',
      logUuid: 'LogUuid',
      mainUserId: 'MainUserId',
      occurTime: 'OccurTime',
      startTime: 'StartTime',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertDesc: 'string',
      alertDescCode: 'string',
      alertDescEn: 'string',
      alertDetail: 'string',
      alertInfoList: { 'type': 'array', 'itemType': DescribeAlertsWithEventResponseBodyDataResponseDataAlertInfoList },
      alertLevel: 'string',
      alertName: 'string',
      alertNameCode: 'string',
      alertNameEn: 'string',
      alertSrcProd: 'string',
      alertSrcProdModule: 'string',
      alertTitle: 'string',
      alertTitleEn: 'string',
      alertType: 'string',
      alertTypeCode: 'string',
      alertTypeEn: 'string',
      alertUuid: 'string',
      assetList: 'string',
      attCk: 'string',
      cloudCode: 'string',
      endTime: 'string',
      entityList: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentUuid: 'string',
      isDefend: 'string',
      logTime: 'string',
      logUuid: 'string',
      mainUserId: 'number',
      occurTime: 'string',
      startTime: 'string',
      subUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEventResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeAlertsWithEventResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: DescribeAlertsWithEventResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeAlertsWithEventResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': DescribeAlertsWithEventResponseBodyDataResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackTimeLineResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   serious: high
   * *   suspicious: medium
   * *   remind: low
   * 
   * @example
   * remind
   */
  alertLevel?: string;
  /**
   * @remarks
   * The alert name in English.
   * 
   * @example
   * Try SNMP weak password
   */
  alertName?: string;
  /**
   * @remarks
   * The internal code of the alert name.
   * 
   * @example
   * security_event_config.event_name.webshell
   */
  alertNameCode?: string;
  /**
   * @remarks
   * The alert name in English.
   * 
   * @example
   * Try SNMP weak password
   */
  alertNameEn?: string;
  /**
   * @remarks
   * The source of the alert.
   * 
   * @example
   * sas
   */
  alertSrcProd?: string;
  /**
   * @remarks
   * The sub-module of the alert source.
   * 
   * @example
   * waf
   */
  alertSrcProdModule?: string;
  /**
   * @remarks
   * The time when the alert was triggered.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  alertTime?: number;
  /**
   * @remarks
   * The title of the alert.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitle?: string;
  /**
   * @remarks
   * The alert title in English.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitleEn?: string;
  /**
   * @remarks
   * The type of the alert.
   * 
   * @example
   * Scan
   */
  alertType?: string;
  /**
   * @remarks
   * The internal code of the alert type.
   * 
   * @example
   * security_event_config.event_name.webshellName
   */
  alertTypeCode?: string;
  /**
   * @remarks
   * The alert type in English.
   * 
   * @example
   * Scan
   */
  alertTypeEn?: string;
  /**
   * @remarks
   * The UUID of the alert
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The logical ID of the asset.
   * 
   * @example
   * 0616caeb-acb8-45e0-8520-4ee5fbe251f0
   */
  assetId?: string;
  /**
   * @remarks
   * The details of the asset.
   * 
   * @example
   * [
   *       {
   *             "is_main_asset": "1",
   *             "asset_name": "47.245.*",
   *             "port": "22",
   *             "ip": "47.245.*",
   *             "asset_type": "ip",
   *             "location": "ap-southeast-1",
   *             "asset_id": "47.245.*",
   *             "net_connect_dir": "in"
   *       }
   * ]
   */
  assetList?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * zsw-agentless-centos****
   */
  assetName?: string;
  /**
   * @remarks
   * The tag of the ATT\\&CK attack.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The cloud code. Valid values:
   * 
   * *   aliyun: Alibaba Cloud
   * *   qcloud: Tencent Cloud
   * *   hcloud: Huawei Cloud
   * 
   * @example
   * aliyun
   */
  cloudCode?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The time when the alert was recorded.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  logTime?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      alertName: 'AlertName',
      alertNameCode: 'AlertNameCode',
      alertNameEn: 'AlertNameEn',
      alertSrcProd: 'AlertSrcProd',
      alertSrcProdModule: 'AlertSrcProdModule',
      alertTime: 'AlertTime',
      alertTitle: 'AlertTitle',
      alertTitleEn: 'AlertTitleEn',
      alertType: 'AlertType',
      alertTypeCode: 'AlertTypeCode',
      alertTypeEn: 'AlertTypeEn',
      alertUuid: 'AlertUuid',
      assetId: 'AssetId',
      assetList: 'AssetList',
      assetName: 'AssetName',
      attCk: 'AttCk',
      cloudCode: 'CloudCode',
      incidentUuid: 'IncidentUuid',
      logTime: 'LogTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevel: 'string',
      alertName: 'string',
      alertNameCode: 'string',
      alertNameEn: 'string',
      alertSrcProd: 'string',
      alertSrcProdModule: 'string',
      alertTime: 'number',
      alertTitle: 'string',
      alertTitleEn: 'string',
      alertType: 'string',
      alertTypeCode: 'string',
      alertTypeEn: 'string',
      alertUuid: 'string',
      assetId: 'string',
      assetList: 'string',
      assetName: 'string',
      attCk: 'string',
      cloudCode: 'string',
      incidentUuid: 'string',
      logTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigCounterResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 20
   */
  all?: number;
  /**
   * @remarks
   * The number of enabled rules.
   * 
   * @example
   * 10
   */
  online?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      online: 'Online',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      online: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigFeatureResponseBodyDataRightValueEnums extends $tea.Model {
  /**
   * @remarks
   * The enumerated value of the right operand.
   * 
   * @example
   * serious
   */
  value?: string;
  /**
   * @remarks
   * The internal code of the enumerated value.
   * 
   * @example
   * aliyun.siem.automate.feature.alert_level.serious
   */
  valueMds?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      valueMds: 'ValueMds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      valueMds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigFeatureResponseBodyDataSupportOperators extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the right operand is required. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  hasRightValue?: boolean;
  /**
   * @remarks
   * The position of the operator in the operator list.
   * 
   * @example
   * 3
   */
  index?: number;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * <=
   */
  operator?: string;
  /**
   * @remarks
   * The description of the operator in Chinese.
   * 
   * @example
   * larger than or equal to
   */
  operatorDescCn?: string;
  /**
   * @remarks
   * The description of the operator in English.
   * 
   * @example
   * larger than or equal to
   */
  operatorDescEn?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * <=
   */
  operatorName?: string;
  /**
   * @remarks
   * The data types that are supported by the operator. The data types are separated by commas (,).
   * 
   * @example
   * varchar
   */
  supportDataType?: string;
  /**
   * @remarks
   * The scenarios that are supported by the operator. Multiple scenarios are separated by commas (,), such as aggregation scenarios. By default, this parameter is empty.
   * 
   * @example
   * [AGGREGATE]
   */
  supportTag?: string[];
  static names(): { [key: string]: string } {
    return {
      hasRightValue: 'HasRightValue',
      index: 'Index',
      operator: 'Operator',
      operatorDescCn: 'OperatorDescCn',
      operatorDescEn: 'OperatorDescEn',
      operatorName: 'OperatorName',
      supportDataType: 'SupportDataType',
      supportTag: 'SupportTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasRightValue: 'boolean',
      index: 'number',
      operator: 'string',
      operatorDescCn: 'string',
      operatorDescEn: 'string',
      operatorName: 'string',
      supportDataType: 'string',
      supportTag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigFeatureResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The data type of the condition field in the automated response rule.
   * 
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @remarks
   * The name of the condition field in the automated response rule.
   * 
   * @example
   * alert_desc
   */
  feature?: string;
  /**
   * @remarks
   * The enumerated values of the right operand for the field.
   */
  rightValueEnums?: DescribeAutomateResponseConfigFeatureResponseBodyDataRightValueEnums[];
  /**
   * @remarks
   * The operators that are supported for the condition field.
   */
  supportOperators?: DescribeAutomateResponseConfigFeatureResponseBodyDataSupportOperators[];
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      feature: 'Feature',
      rightValueEnums: 'RightValueEnums',
      supportOperators: 'SupportOperators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      feature: 'string',
      rightValueEnums: { 'type': 'array', 'itemType': DescribeAutomateResponseConfigFeatureResponseBodyDataRightValueEnums },
      supportOperators: { 'type': 'array', 'itemType': DescribeAutomateResponseConfigFeatureResponseBodyDataSupportOperators },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutomateResponseConfigPlayBooksResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The description of the playbook.
   * 
   * @example
   * Waf Block IP
   */
  description?: string;
  /**
   * @remarks
   * The display name of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  displayName?: string;
  /**
   * @remarks
   * The unique identifier name of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  name?: string;
  /**
   * @remarks
   * The input parameter template of the playbook. Valid values:
   * 
   * *   template-ip: IP address
   * *   template-process: process
   * *   template-filee: file
   * 
   * @example
   * template-ip
   */
  paramType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * system_aliyun_clb_process_book
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      paramType: 'ParamType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      name: 'string',
      paramType: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsResponseBodyDataPageInfo extends $tea.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsResponseBodyDataResponseDataAssetInfo extends $tea.Model {
  /**
   * @remarks
   * The attribute key.
   * 
   * @example
   * suspicious.wbd.wb.trojanpath
   */
  key?: string;
  /**
   * @remarks
   * The name of the key.
   * 
   * @example
   * Trojan Path
   */
  keyName?: string;
  /**
   * @remarks
   * The value of the key.
   * 
   * @example
   * /root/test33.php
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyName: 'KeyName',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyName: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsResponseBodyDataResponseData extends $tea.Model {
  /**
   * @remarks
   * The UUID of the alert associated with the event.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account in SIEM.
   * 
   * @example
   * 1276085894174392
   */
  aliuid?: number;
  /**
   * @remarks
   * The logical ID of the asset.
   * 
   * @example
   * 0616caeb-acb8-45e0-8520-4ee5fbe251f0
   */
  assetId?: string;
  /**
   * @remarks
   * The display information of the asset is in the JSON format.
   * 
   * @example
   * [{"KeyName": "${aliyun.siem.asset.asset_name}","Values": "zsw-agentless-ubuntu20","Key": "asset_name"}]
   */
  assetInfo?: DescribeCloudSiemAssetsResponseBodyDataResponseDataAssetInfo[];
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * zsw-agentless-centos****
   */
  assetName?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   ip
   * *   domain
   * *   url
   * *   process
   * *   file
   * *   host
   * 
   * @example
   * domain
   */
  assetType?: string;
  /**
   * @remarks
   * The cloud code of the entity. Valid values:
   * 
   * *   aliyun: Alibaba Cloud
   * *   qcloud: Tencent Cloud
   * *   hcloud: Huawei Cloud
   * 
   * @example
   * aliyun
   */
  cloudCode?: string;
  /**
   * @remarks
   * The time when the asset was synchronized.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the asset was last updated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the asset.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The ID of the associated account to which the asset belongs.
   * 
   * @example
   * 176555323***
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      alertUuid: 'AlertUuid',
      aliuid: 'Aliuid',
      assetId: 'AssetId',
      assetInfo: 'AssetInfo',
      assetName: 'AssetName',
      assetType: 'AssetType',
      cloudCode: 'CloudCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentUuid: 'IncidentUuid',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertUuid: 'string',
      aliuid: 'number',
      assetId: 'string',
      assetInfo: { 'type': 'array', 'itemType': DescribeCloudSiemAssetsResponseBodyDataResponseDataAssetInfo },
      assetName: 'string',
      assetType: 'string',
      cloudCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentUuid: 'string',
      subUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeCloudSiemAssetsResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: DescribeCloudSiemAssetsResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeCloudSiemAssetsResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': DescribeCloudSiemAssetsResponseBodyDataResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsCounterResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of assets.
   * 
   * @example
   * 1
   */
  assetNum?: number;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   ip
   * *   domain
   * *   url
   * *   process
   * *   file
   * *   host
   * 
   * @example
   * domain
   */
  assetType?: string;
  static names(): { [key: string]: string } {
    return {
      assetNum: 'AssetNum',
      assetType: 'AssetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetNum: 'number',
      assetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemEventDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of alerts that are associated with the event.
   * 
   * @example
   * 4
   */
  alertNum?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the event belongs.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The number of assets that are associated with the event.
   * 
   * @example
   * 4
   */
  assetNum?: number;
  /**
   * @remarks
   * The tags of the ATT\\&CK attacks.
   * 
   * @example
   * ["T1595.002 Vulnerability Scanning"]
   */
  attCkLabels?: string[];
  /**
   * @remarks
   * The source of the alert.
   * 
   * @example
   * [sas,waf]
   */
  dataSources?: string[];
  /**
   * @remarks
   * The description of the event.
   * 
   * @example
   * The threat event contains 13 Miner Network,1 Execute suspicious encoded commands on Linux, etc
   */
  description?: string;
  /**
   * @remarks
   * The description of the event in English.
   * 
   * @example
   * The threat event contains 13 Miner Network,1 Execute suspicious encoded commands on Linux, etc
   */
  descriptionEn?: string;
  /**
   * @remarks
   * The extended information of the event in the JSON format.
   * 
   * @example
   * {"event_transfer_type":"customize_rule"}
   */
  extContent?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the event was last updated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * Multiple type of alerts, including Miner Network, Command line download and run malicious files, Backdoor Process, etc
   */
  incidentName?: string;
  /**
   * @remarks
   * The name of the event in English.
   * 
   * @example
   * Multiple type of alerts, including Miner Network, Command line download and run malicious files, Backdoor Process, etc
   */
  incidentNameEn?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * Users associated with the event.
   */
  referAccount?: string;
  /**
   * @remarks
   * The remarks of the event.
   * 
   * @example
   * dealed
   */
  remark?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   0: not handled
   * *   1: handing
   * *   5: handling failed
   * *   10: handled
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   serious: high
   * *   suspicious: medium
   * *   remind: low
   * 
   * @example
   * remind
   */
  threatLevel?: string;
  /**
   * @remarks
   * The risk score of the event. The score ranges from 0 to 100. A higher score indicates a higher risk level.
   * 
   * @example
   * 90.2
   */
  threatScore?: number;
  static names(): { [key: string]: string } {
    return {
      alertNum: 'AlertNum',
      aliuid: 'Aliuid',
      assetNum: 'AssetNum',
      attCkLabels: 'AttCkLabels',
      dataSources: 'DataSources',
      description: 'Description',
      descriptionEn: 'DescriptionEn',
      extContent: 'ExtContent',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      incidentName: 'IncidentName',
      incidentNameEn: 'IncidentNameEn',
      incidentUuid: 'IncidentUuid',
      referAccount: 'ReferAccount',
      remark: 'Remark',
      status: 'Status',
      threatLevel: 'ThreatLevel',
      threatScore: 'ThreatScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNum: 'number',
      aliuid: 'number',
      assetNum: 'number',
      attCkLabels: { 'type': 'array', 'itemType': 'string' },
      dataSources: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      descriptionEn: 'string',
      extContent: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      incidentName: 'string',
      incidentNameEn: 'string',
      incidentUuid: 'string',
      referAccount: 'string',
      remark: 'string',
      status: 'number',
      threatLevel: 'string',
      threatScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemEventsResponseBodyDataPageInfo extends $tea.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemEventsResponseBodyDataResponseData extends $tea.Model {
  /**
   * @remarks
   * The number of alerts that are associated with the event.
   * 
   * @example
   * 4
   */
  alertNum?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the event belongs.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The number of assets that are associated with the event.
   * 
   * @example
   * 4
   */
  assetNum?: number;
  /**
   * @remarks
   * The tags of the ATT\\&CK techniques.
   * 
   * @example
   * ["T1595.002 Vulnerability Scanning"]
   */
  attCkLabels?: string[];
  /**
   * @remarks
   * The sources of the alert.
   * 
   * @example
   * [sas,waf]
   */
  dataSources?: string[];
  /**
   * @remarks
   * The description of the event.
   * 
   * @example
   * The threat event contains 13 Miner Network,1 Execute suspicious encoded commands on Linux, etc
   */
  description?: string;
  /**
   * @remarks
   * The event description in English.
   * 
   * @example
   * The threat event contains 13 Miner Network,1 Execute suspicious encoded commands on Linux, etc
   */
  descriptionEn?: string;
  /**
   * @remarks
   * The extended event information in the JSON format.
   * 
   * @example
   * {"event_transfer_type":"customize_rule"}
   */
  extContent?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the event was last updated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * Multiple type of alerts, including Miner Network, Command line download and run malicious files, Backdoor Process, etc
   */
  incidentName?: string;
  /**
   * @remarks
   * The event name in English.
   * 
   * @example
   * Multiple type of alerts, including Miner Network, Command line download and run malicious files, Backdoor Process, etc
   */
  incidentNameEn?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * the refer account info.
   * 
   * @example
   * 127608589417****
   */
  referAccount?: string;
  /**
   * @remarks
   * The remarks of the event.
   * 
   * @example
   * dealed
   */
  remark?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   0: unhandled.
   * *   1: handling.
   * *   5: handling failed.
   * *   10: handled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   serious: high.
   * *   suspicious: medium.
   * *   remind: low.
   * 
   * @example
   * remind
   */
  threatLevel?: string;
  /**
   * @remarks
   * The risk score of the event. Valid values: 0 to 100. A higher value indicates a higher risk level.
   * 
   * @example
   * 90.2
   */
  threatScore?: number;
  static names(): { [key: string]: string } {
    return {
      alertNum: 'AlertNum',
      aliuid: 'Aliuid',
      assetNum: 'AssetNum',
      attCkLabels: 'AttCkLabels',
      dataSources: 'DataSources',
      description: 'Description',
      descriptionEn: 'DescriptionEn',
      extContent: 'ExtContent',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      incidentName: 'IncidentName',
      incidentNameEn: 'IncidentNameEn',
      incidentUuid: 'IncidentUuid',
      referAccount: 'ReferAccount',
      remark: 'Remark',
      status: 'Status',
      threatLevel: 'ThreatLevel',
      threatScore: 'ThreatScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNum: 'number',
      aliuid: 'number',
      assetNum: 'number',
      attCkLabels: { 'type': 'array', 'itemType': 'string' },
      dataSources: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      descriptionEn: 'string',
      extContent: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      incidentName: 'string',
      incidentNameEn: 'string',
      incidentUuid: 'string',
      referAccount: 'string',
      remark: 'string',
      status: 'number',
      threatLevel: 'string',
      threatScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemEventsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeCloudSiemEventsResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: DescribeCloudSiemEventsResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeCloudSiemEventsResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': DescribeCloudSiemEventsResponseBodyDataResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleCountResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * 同类聚合规则数。
   * 
   * @example
   * 3
   */
  aggregationRuleNum?: number;
  /**
   * @remarks
   * 自定义规则数。
   * 
   * @example
   * 10
   */
  customizeRuleNum?: number;
  /**
   * @remarks
   * 专家规则数。
   * 
   * @example
   * 7
   */
  expertRuleNum?: number;
  /**
   * @remarks
   * 图计算规则数。
   * 
   * @example
   * 2
   */
  graphComputingRuleNum?: number;
  /**
   * @remarks
   * The number of rules that are used to identify high-risk threats.
   * 
   * @example
   * 12
   */
  highRuleNum?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 20
   */
  inUseRuleNum?: number;
  /**
   * @remarks
   * The number of rules that are used to identify low-risk threats.
   * 
   * @example
   * 3
   */
  lowRuleNum?: number;
  /**
   * @remarks
   * The number of rules that are used to identify medium-risk threats.
   * 
   * @example
   * 5
   */
  mediumRuleNum?: number;
  /**
   * @remarks
   * 预定义规则数。
   * 
   * @example
   * 10
   */
  predefinedRuleNum?: number;
  /**
   * @remarks
   * 告警透传规则数。
   * 
   * @example
   * 3
   */
  singleAlertRuleNum?: number;
  /**
   * @remarks
   * 总规则数。
   * 
   * @example
   * 10
   */
  totalRuleNum?: number;
  /**
   * @remarks
   * 不产生事件规则数。
   * 
   * @example
   * 3
   */
  unEventRuleNum?: number;
  static names(): { [key: string]: string } {
    return {
      aggregationRuleNum: 'AggregationRuleNum',
      customizeRuleNum: 'CustomizeRuleNum',
      expertRuleNum: 'ExpertRuleNum',
      graphComputingRuleNum: 'GraphComputingRuleNum',
      highRuleNum: 'HighRuleNum',
      inUseRuleNum: 'InUseRuleNum',
      lowRuleNum: 'LowRuleNum',
      mediumRuleNum: 'MediumRuleNum',
      predefinedRuleNum: 'PredefinedRuleNum',
      singleAlertRuleNum: 'SingleAlertRuleNum',
      totalRuleNum: 'TotalRuleNum',
      unEventRuleNum: 'UnEventRuleNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationRuleNum: 'number',
      customizeRuleNum: 'number',
      expertRuleNum: 'number',
      graphComputingRuleNum: 'number',
      highRuleNum: 'number',
      inUseRuleNum: 'number',
      lowRuleNum: 'number',
      mediumRuleNum: 'number',
      predefinedRuleNum: 'number',
      singleAlertRuleNum: 'number',
      totalRuleNum: 'number',
      unEventRuleNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleTestResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The historical data that is used in the simulation test.
   * 
   * @example
   * [{"key1":"value1","key2":"value2","key3":"value3","key4":"value4","key5":"value5"}]
   */
  simulateData?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   0: The rule is in the initial state.
   * *   10: The simulation data is tested.
   * *   15: The business data is being tested.
   * *   20: The business data test ends.
   * *   100: The rule takes effect.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      simulateData: 'SimulateData',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      simulateData: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleTestHistogramResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of alerts that are generated in the query time range.
   * 
   * @example
   * 125
   */
  count?: number;
  /**
   * @remarks
   * The start of the time range for querying alerts. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1599897188
   */
  from?: number;
  /**
   * @remarks
   * The end of the time range for querying alerts. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1599997188
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      from: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceInstanceResponseBodyDataDataSourceInstanceParams extends $tea.Model {
  /**
   * @remarks
   * The code of the parameter.
   * 
   * @example
   * region_code
   */
  paraCode?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * ap-guangzhou
   */
  paraValue?: string;
  static names(): { [key: string]: string } {
    return {
      paraCode: 'ParaCode',
      paraValue: 'ParaValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paraCode: 'string',
      paraValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The parameters of the data source.
   */
  dataSourceInstanceParams?: DescribeDataSourceInstanceResponseBodyDataDataSourceInstanceParams[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      dataSourceInstanceParams: 'DataSourceInstanceParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      dataSourceInstanceParams: { 'type': 'array', 'itemType': DescribeDataSourceInstanceResponseBodyDataDataSourceInstanceParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceParametersResponseBodyDataParamValue extends $tea.Model {
  /**
   * @remarks
   * The display value.
   * 
   * @example
   * guangzhou
   */
  label?: string;
  /**
   * @remarks
   * The actual value.
   * 
   * @example
   * ap-guangzhou
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

export class DescribeDataSourceParametersResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the edit operation is supported. Valid values:
   * 
   * *   **0**
   * *   **1**
   * 
   * @example
   * wafApi
   */
  canEditted?: number;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   **qcloud**: Tencent Cloud
   * *   **aliyun**: Alibaba Cloud
   * *   **hcloud**: Huawei Cloud
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **obs**: Huawei Cloud Object Storage Service (OBS)
   * *   **wafApi**: download API of Tencent Cloud Web Application Firewall (WAF)
   * *   **ckafka**: Tencent Cloud TDMQ for CKafka
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * wafApi
   */
  defaultValue?: string;
  /**
   * @remarks
   * Indicates whether the modification operation is forbidden. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * wafApi
   */
  disabled?: boolean;
  /**
   * @remarks
   * The method that is used to check the parameter format.
   * 
   * @example
   * email
   */
  formatCheck?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * obs docment
   */
  hit?: string;
  /**
   * @remarks
   * The code of the parameter.
   * 
   * @example
   * region_code
   */
  paraCode?: string;
  /**
   * @remarks
   * The parameter level. Valid values:
   * 
   * *   **1**: the parameters of the data source
   * *   **2**: the parameters of the log
   * 
   * @example
   * 1
   */
  paraLevel?: number;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * region local
   */
  paraName?: string;
  /**
   * @remarks
   * The data type of the parameter.
   * 
   * @example
   * string
   */
  paraType?: string;
  /**
   * @remarks
   * The value of the parameter.
   */
  paramValue?: DescribeDataSourceParametersResponseBodyDataParamValue[];
  /**
   * @remarks
   * Indicates whether the parameter is required. Valid values:
   * 
   * *   **1**: required
   * *   **0**: optional
   * 
   * @example
   * string
   */
  required?: number;
  /**
   * @remarks
   * The note for the parameter value.
   * 
   * @example
   * obs bucket name
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      canEditted: 'CanEditted',
      cloudCode: 'CloudCode',
      dataSourceType: 'DataSourceType',
      defaultValue: 'DefaultValue',
      disabled: 'Disabled',
      formatCheck: 'FormatCheck',
      hit: 'Hit',
      paraCode: 'ParaCode',
      paraLevel: 'ParaLevel',
      paraName: 'ParaName',
      paraType: 'ParaType',
      paramValue: 'ParamValue',
      required: 'Required',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canEditted: 'number',
      cloudCode: 'string',
      dataSourceType: 'string',
      defaultValue: 'string',
      disabled: 'boolean',
      formatCheck: 'string',
      hit: 'string',
      paraCode: 'string',
      paraLevel: 'number',
      paraName: 'string',
      paraType: 'string',
      paramValue: { 'type': 'array', 'itemType': DescribeDataSourceParametersResponseBodyDataParamValue },
      required: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeAndPlaybookResponseBodyDataPageInfo extends $tea.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeAndPlaybookResponseBodyDataResponseDataPlaybookList extends $tea.Model {
  /**
   * @remarks
   * The playbook description.
   * 
   * @example
   * WafBlockIP
   */
  description?: string;
  /**
   * @remarks
   * The display name of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  displayName?: string;
  /**
   * @remarks
   * The playbook name, which is the unique identifier of the playbook.
   * 
   * @example
   * kill_process_isolate_file
   */
  name?: string;
  /**
   * @remarks
   * The opcode of the playbook, which corresponds to the opcode of the playbook recommended for entity handling.
   * 
   * @example
   * 7
   */
  opCode?: string;
  /**
   * @remarks
   * Indicates whether quick event handling is selected by default. Valid values:
   * 
   * *   2: Quick event handling is selected.
   * *   1: Quick event handling is displayed but not selected.
   * 
   * @example
   * 2
   */
  opLevel?: string;
  /**
   * @remarks
   * The playbook parameters and the corresponding properties.
   */
  paramConfig?: any[];
  /**
   * @remarks
   * The opcode configuration.
   * 
   * @example
   * {"opCode":"3"}
   */
  taskConfig?: string;
  /**
   * @remarks
   * Indicates whether the playbook is intended for Web Application Firewall (WAF). Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  wafPlaybook?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      opCode: 'OpCode',
      opLevel: 'OpLevel',
      paramConfig: 'ParamConfig',
      taskConfig: 'TaskConfig',
      wafPlaybook: 'WafPlaybook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      name: 'string',
      opCode: 'string',
      opLevel: 'string',
      paramConfig: { 'type': 'array', 'itemType': 'any' },
      taskConfig: 'string',
      wafPlaybook: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeAndPlaybookResponseBodyDataResponseData extends $tea.Model {
  /**
   * @remarks
   * The number of alerts that are associated with the entity.
   * 
   * @example
   * 1
   */
  alertNum?: number;
  /**
   * @remarks
   * The object for handling.
   * 
   * @example
   * 192.168.1.1
   */
  dispose?: string;
  /**
   * @remarks
   * The entity ID
   * 
   * @example
   * 12345
   */
  entityId?: number;
  /**
   * @remarks
   * The entity information.
   * 
   * @example
   * {"file_path": "c:/www/leixi.jsp","file_hash": "aa0ca926ad948cd820e0a3d9a18c09d0","host_uuid": "efed2cf7-0b77-45d9-a97b-d2cf246bcbb3","malware_type": "${aliyun.siem.sas.alert_tag.webshell}","host_name": "launch-advisor-20230531"}
   */
  entityInfo?: { [key: string]: any };
  /**
   * @remarks
   * The key-value pairs each of which consists of opcode and oplevel.
   * 
   * @example
   * 12345
   */
  opcodeMap?: { [key: string]: string };
  /**
   * @remarks
   * The codes of the playbooks that are recommended for entity handling.
   * 
   * @example
   * [1,3]
   */
  opcodeSet?: string[];
  /**
   * @remarks
   * The playbooks that can handle the entity.
   * 
   * @example
   * [{"name":"云安全中心-云服务器安全","code":"1"}]
   */
  playbookList?: DescribeDisposeAndPlaybookResponseBodyDataResponseDataPlaybookList[];
  /**
   * @remarks
   * The IDs of the users who can handle objects.
   * 
   * @example
   * 176618589410****
   */
  scope?: any[];
  static names(): { [key: string]: string } {
    return {
      alertNum: 'AlertNum',
      dispose: 'Dispose',
      entityId: 'EntityId',
      entityInfo: 'EntityInfo',
      opcodeMap: 'OpcodeMap',
      opcodeSet: 'OpcodeSet',
      playbookList: 'PlaybookList',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNum: 'number',
      dispose: 'string',
      entityId: 'number',
      entityInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      opcodeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      opcodeSet: { 'type': 'array', 'itemType': 'string' },
      playbookList: { 'type': 'array', 'itemType': DescribeDisposeAndPlaybookResponseBodyDataResponseDataPlaybookList },
      scope: { 'type': 'array', 'itemType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeAndPlaybookResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeDisposeAndPlaybookResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: DescribeDisposeAndPlaybookResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeDisposeAndPlaybookResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': DescribeDisposeAndPlaybookResponseBodyDataResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeStrategyPlaybookResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The playbook name, which is the unique identifier of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  playbookName?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * system_aliyun_clb_process_book
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      playbookName: 'PlaybookName',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookName: 'string',
      playbookUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEntityInfoResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The logical ID of the entity.
   * 
   * @example
   * 12345
   */
  entityId?: number;
  /**
   * @remarks
   * The information about the entry.
   * 
   * @example
   * { location: "xian", net_connect_dir: "in", malware_type: "${aliyun.siem.sas.alert_tag.login_unusual_account}" }
   */
  entityInfo?: { [key: string]: any };
  /**
   * @remarks
   * The type of the entity. Valid values:
   * 
   * *   ip
   * *   domain
   * *   url
   * *   process
   * *   file
   * *   host
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The information about the risk Intelligence.
   * 
   * @example
   * {
   *       "Ip": {
   *             "queryHot": "0",
   *             "country": "China",
   *             "province": "shanxi",
   *             "ip": "221.11.XX.XXX",
   *             "asn": "4837",
   *             "asn_label": "CHINAXXX-Backbone - CHINA UNICOM ChinaXXX Backbone, CN"
   *       }
   * }
   */
  tipInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityInfo: 'EntityInfo',
      entityType: 'EntityType',
      tipInfo: 'TipInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      entityInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      entityType: 'string',
      tipInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventCountByThreatLevelResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The total number of events.
   * 
   * @example
   * 100
   */
  eventNum?: number;
  /**
   * @remarks
   * The number of high-risk events.
   * 
   * @example
   * 20
   */
  highLevelEventNum?: number;
  /**
   * @remarks
   * The number of low-risk events.
   * 
   * @example
   * 52
   */
  lowLevelEventNum?: number;
  /**
   * @remarks
   * The number of medium-risk events.
   * 
   * @example
   * 3
   */
  mediumLevelEventNum?: number;
  /**
   * @remarks
   * The number of unhandled events.
   * 
   * @example
   * 75
   */
  undealEventNum?: number;
  static names(): { [key: string]: string } {
    return {
      eventNum: 'EventNum',
      highLevelEventNum: 'HighLevelEventNum',
      lowLevelEventNum: 'LowLevelEventNum',
      mediumLevelEventNum: 'MediumLevelEventNum',
      undealEventNum: 'UndealEventNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventNum: 'number',
      highLevelEventNum: 'number',
      lowLevelEventNum: 'number',
      mediumLevelEventNum: 'number',
      undealEventNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDisposeResponseBodyDataReceiverInfo extends $tea.Model {
  /**
   * @remarks
   * The channel of the contact information. Valid values:
   * 
   * *   message
   * *   mail
   * 
   * @example
   * message
   */
  channel?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the recipient who receives the event handling result.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The message title.
   * 
   * @example
   * siem event dealed message
   */
  messageTitle?: string;
  /**
   * @remarks
   * The contact information of the recipient.
   * 
   * @example
   * 138xxxxxx
   */
  receiver?: string;
  /**
   * @remarks
   * Indicates whether the message is sent. Valid values:
   * 
   * *   0: not sent
   * *   1: sent
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentUuid: 'IncidentUuid',
      messageTitle: 'MessageTitle',
      receiver: 'Receiver',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentUuid: 'string',
      messageTitle: 'string',
      receiver: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDisposeResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * An array consisting of JSON objects that are configured for event handling.
   * 
   * @example
   * { playbookName: "使用安全组封禁入方向IP", sophonTaskId: "400442a5-4f98-45ed-97db-5ab117eb0b8f", … }
   */
  eventDispose?: any[];
  /**
   * @remarks
   * The JSON object that is configured for an alert recipient.
   */
  receiverInfo?: DescribeEventDisposeResponseBodyDataReceiverInfo;
  /**
   * @remarks
   * The description of the event.
   * 
   * @example
   * dealed
   */
  remark?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   0: not handled
   * *   1: handing
   * *   5: handling failed
   * *   10: handled
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      eventDispose: 'EventDispose',
      receiverInfo: 'ReceiverInfo',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDispose: { 'type': 'array', 'itemType': 'any' },
      receiverInfo: DescribeEventDisposeResponseBodyDataReceiverInfo,
      remark: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportedLogCountResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of logs that are added.
   * 
   * @example
   * 10
   */
  importedLogCount?: number;
  /**
   * @remarks
   * The total number of logs.
   * 
   * @example
   * 59
   */
  totalLogCount?: number;
  /**
   * @remarks
   * The number of logs that are not added.
   * 
   * @example
   * 49
   */
  unImportedLogCount?: number;
  static names(): { [key: string]: string } {
    return {
      importedLogCount: 'ImportedLogCount',
      totalLogCount: 'TotalLogCount',
      unImportedLogCount: 'UnImportedLogCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importedLogCount: 'number',
      totalLogCount: 'number',
      unImportedLogCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobStatusResponseBodyDataErrTaskListProductListLogList extends $tea.Model {
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * ProjectLogStoreNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The code of the logs.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  logCode?: string;
  /**
   * @remarks
   * The pattern for the name of the Simple Log Service Logstore from which logs are collected.
   * 
   * @example
   * vpc_project_test
   */
  logStoreNamePattern?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * sas
   */
  productCode?: string;
  /**
   * @remarks
   * The pattern for the name of the Simple Log Service project from which logs are collected.
   * 
   * @example
   * vpc-project-test
   */
  projectNamePattern?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shanghai
   */
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      logCode: 'LogCode',
      logStoreNamePattern: 'LogStoreNamePattern',
      productCode: 'ProductCode',
      projectNamePattern: 'ProjectNamePattern',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      logCode: 'string',
      logStoreNamePattern: 'string',
      productCode: 'string',
      projectNamePattern: 'string',
      regionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobStatusResponseBodyDataErrTaskListProductList extends $tea.Model {
  /**
   * @remarks
   * The list of logs that fail to be collected.
   */
  logList?: DescribeJobStatusResponseBodyDataErrTaskListProductListLogList[];
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * sas
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: { 'type': 'array', 'itemType': DescribeJobStatusResponseBodyDataErrTaskListProductListLogList },
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobStatusResponseBodyDataErrTaskList extends $tea.Model {
  /**
   * @remarks
   * The list of services in failed tasks.
   */
  productList?: DescribeJobStatusResponseBodyDataErrTaskListProductList[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123XXXXX
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      productList: 'ProductList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productList: { 'type': 'array', 'itemType': DescribeJobStatusResponseBodyDataErrTaskListProductList },
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobStatusResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the task configuration.
   * 
   * @example
   * xxxx_folder_xxxx
   */
  configId?: string;
  /**
   * @remarks
   * The list of failed tasks. The value contains the Alibaba Cloud account and service code of each failed task.
   */
  errTaskList?: DescribeJobStatusResponseBodyDataErrTaskList[];
  /**
   * @remarks
   * The total number of tasks that fail.
   * 
   * @example
   * 8
   */
  failedCount?: number;
  /**
   * @remarks
   * The total number of tasks that are complete.
   * 
   * @example
   * 52
   */
  finishCount?: number;
  /**
   * @remarks
   * The ID of the resource directory folder.
   * 
   * @example
   * fd-xxxxx
   */
  folderId?: string;
  /**
   * @remarks
   * The total number of collection tasks that are created.
   * 
   * @example
   * 60
   */
  taskCount?: number;
  /**
   * @remarks
   * The status of the submitted task.
   * 
   * Valid values:
   * 
   * *   submit
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   finish
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * finish
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      errTaskList: 'ErrTaskList',
      failedCount: 'FailedCount',
      finishCount: 'FinishCount',
      folderId: 'FolderId',
      taskCount: 'TaskCount',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      errTaskList: { 'type': 'array', 'itemType': DescribeJobStatusResponseBodyDataErrTaskList },
      failedCount: 'number',
      finishCount: 'number',
      folderId: 'string',
      taskCount: 'number',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogFieldsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The type of the log to which the field belongs.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  activityName?: string;
  /**
   * @remarks
   * The internal code of the field description.
   * 
   * @example
   * sas.cloudsiem.prod.activity_name
   */
  fieldDesc?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * activity_name
   */
  fieldName?: string;
  /**
   * @remarks
   * The data type of the field. Valid values:
   * 
   * *   varchar
   * *   bigint
   * 
   * @example
   * varchar
   */
  fieldType?: string;
  /**
   * @remarks
   * The log source to which the field belongs.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      fieldDesc: 'FieldDesc',
      fieldName: 'FieldName',
      fieldType: 'FieldType',
      logCode: 'LogCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      fieldDesc: 'string',
      fieldName: 'string',
      fieldType: 'string',
      logCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogSourceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The log source of the rule.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logSource?: string;
  /**
   * @remarks
   * The internal code of the log source.
   * 
   * @example
   * sas.cloudsiem.prod.cloud_siem_aegis_sas_alert
   */
  logSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      logSource: 'LogSource',
      logSourceName: 'LogSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logSource: 'string',
      logSourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the following time points are added after the log arrives: the time points when the public IP address of the client and the log arrive. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  appendMeta?: boolean;
  /**
   * @remarks
   * Indicates whether the automatic sharding feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  autoSplit?: boolean;
  /**
   * @remarks
   * Indicates whether the web tracking feature is enabled to collect user information from browsers, iOS applications, or Android applications. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableTracking?: boolean;
  /**
   * @remarks
   * The name of the Logstore in Simple Log Service.
   * 
   * @example
   * cloud-siem
   */
  logStoreName?: string;
  /**
   * @remarks
   * The maximum number of shards that can be generated by using the automatic sharding feature.
   * 
   * @example
   * 64
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * The number of shards in Log Service.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The retention period of data. Unit: day.
   * 
   * @example
   * 180
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      appendMeta: 'AppendMeta',
      autoSplit: 'AutoSplit',
      enableTracking: 'EnableTracking',
      logStoreName: 'LogStoreName',
      maxSplitShard: 'MaxSplitShard',
      shardCount: 'ShardCount',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendMeta: 'boolean',
      autoSplit: 'boolean',
      enableTracking: 'boolean',
      logStoreName: 'string',
      maxSplitShard: 'number',
      shardCount: 'number',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogTypeResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The log type of the rule.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  logType?: string;
  /**
   * @remarks
   * The internal code of the log type.
   * 
   * @example
   * sas.cloudsiem.prod.http_activity
   */
  logTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      logTypeName: 'LogTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      logTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperatorsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The position of the operator in the operator list.
   * 
   * @example
   * 3
   */
  index?: number;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * <=
   */
  operator?: string;
  /**
   * @remarks
   * The description of the operator in Chinese.
   * 
   * @example
   * arger than or equal to
   */
  operatorDescCn?: string;
  /**
   * @remarks
   * The description of the operator in English.
   * 
   * @example
   * larger than or equal to
   */
  operatorDescEn?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * <=
   */
  operatorName?: string;
  /**
   * @remarks
   * The data types that are supported by the operator. The data types are separated by commas (,).
   * 
   * @example
   * varchar
   */
  supportDataType?: string;
  /**
   * @remarks
   * The scenarios that are supported by the operator. Multiple scenarios are separated by commas (,), such as AGGREGATE scenarios. By default, this parameter is empty.
   * 
   * @example
   * [AGGREGATE]
   */
  supportTag?: string[];
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      operator: 'Operator',
      operatorDescCn: 'OperatorDescCn',
      operatorDescEn: 'OperatorDescEn',
      operatorName: 'OperatorName',
      supportDataType: 'SupportDataType',
      supportTag: 'SupportTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      operator: 'string',
      operatorDescCn: 'string',
      operatorDescEn: 'string',
      operatorName: 'string',
      supportDataType: 'string',
      supportTag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProdCountResponseBodyData extends $tea.Model {
  aliyunImportedCount?: number;
  /**
   * @remarks
   * The number of Alibaba Cloud services.
   * 
   * @example
   * 19
   */
  aliyunProdCount?: number;
  hcloudImportedCount?: number;
  /**
   * @remarks
   * The number of Huawei Cloud services.
   * 
   * @example
   * 2
   */
  hcloudProdCount?: number;
  idcImportedCount?: number;
  /**
   * @example
   * 2
   */
  idcProdCount?: number;
  qcloudImportedCount?: number;
  /**
   * @remarks
   * The number of Tencent Cloud services.
   * 
   * @example
   * 2
   */
  qcloudProdCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunImportedCount: 'AliyunImportedCount',
      aliyunProdCount: 'AliyunProdCount',
      hcloudImportedCount: 'HcloudImportedCount',
      hcloudProdCount: 'HcloudProdCount',
      idcImportedCount: 'IdcImportedCount',
      idcProdCount: 'IdcProdCount',
      qcloudImportedCount: 'QcloudImportedCount',
      qcloudProdCount: 'QcloudProdCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunImportedCount: 'number',
      aliyunProdCount: 'number',
      hcloudImportedCount: 'number',
      hcloudProdCount: 'number',
      idcImportedCount: 'number',
      idcProdCount: 'number',
      qcloudImportedCount: 'number',
      qcloudProdCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScopeUsersResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the security information and event management (SIEM) user.
   * 
   * @example
   * 123456789****
   */
  aliUid?: number;
  /**
   * @remarks
   * 云code。  取值：
   * - qcloud：腾讯云
   * - hcloud：华为云
   * 
   * @example
   * qcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * An array consisting of the domain names that are protected by the WAF instance.
   * 
   * @example
   * [123.com, 456.com]
   */
  domains?: string[];
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * @example
   * waf-cn-tl123ast****
   */
  instanceId?: string;
  /**
   * @remarks
   * 多云用户ID。
   * 
   * @example
   * 123456789****
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test001
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      cloudCode: 'CloudCode',
      domains: 'Domains',
      instanceId: 'InstanceId',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      cloudCode: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBuyStatusResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the logon Alibaba Cloud account can be used to place orders for the threat analysis feature, such as purchase, upgrade, and specifications change orders. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  canBuy?: boolean;
  /**
   * @remarks
   * The log storage capacity that is purchased for the threat analysis feature. Unit: GB.
   * 
   * @example
   * 1024
   */
  capacity?: number;
  /**
   * @remarks
   * The number of days before the expiration time of the threat analysis feature.
   * 
   * @example
   * 3
   */
  durationDays?: number;
  /**
   * @remarks
   * The timestamp when the threat analysis feature expires. Unit: milliseconds.
   * 
   * @example
   * 1669823999000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * 123XXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The username of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * sas_account_xxx
   */
  mainUserName?: string;
  /**
   * @remarks
   * The ID of the management account of the resource directory.
   * 
   * @example
   * 123XXXXXX
   */
  masterUserId?: number;
  /**
   * @remarks
   * The display name of the management account of the resource directory.
   * 
   * @example
   * rd_master_xxx
   */
  masterUserName?: string;
  /**
   * @example
   * 1
   */
  rdOrder?: number;
  /**
   * @remarks
   * The instance ID of Security Center.
   * 
   * @example
   * sas-instance-xxxxx
   */
  sasInstanceId?: string;
  /**
   * @remarks
   * The ID of the logon Alibaba Cloud account.
   * 
   * @example
   * 123XXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The username of the logon Alibaba Cloud account.
   * 
   * @example
   * sas_account_xxx
   */
  subUserName?: string;
  static names(): { [key: string]: string } {
    return {
      canBuy: 'CanBuy',
      capacity: 'Capacity',
      durationDays: 'DurationDays',
      endTime: 'EndTime',
      mainUserId: 'MainUserId',
      mainUserName: 'MainUserName',
      masterUserId: 'MasterUserId',
      masterUserName: 'MasterUserName',
      rdOrder: 'RdOrder',
      sasInstanceId: 'SasInstanceId',
      subUserId: 'SubUserId',
      subUserName: 'SubUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBuy: 'boolean',
      capacity: 'number',
      durationDays: 'number',
      endTime: 'number',
      mainUserId: 'number',
      mainUserName: 'string',
      masterUserId: 'number',
      masterUserName: 'string',
      rdOrder: 'number',
      sasInstanceId: 'string',
      subUserId: 'number',
      subUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafScopeResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account in SIEM.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The domain names that are protected by the WAF instance.
   * 
   * @example
   * [123.com, 456.com]
   */
  domains?: string[];
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * @example
   * waf-cn-tl123ast****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      domains: 'Domains',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'number',
      domains: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBodyDataPageInfo extends $tea.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsLeft extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the left operand is a variable. Valid values:
   * 
   * *   true: variable.
   * *   false: constant.
   * 
   * @example
   * true
   */
  isVar?: boolean;
  /**
   * @remarks
   * The remarks on the right operand.
   * 
   * @example
   * length
   */
  modifier?: string;
  /**
   * @remarks
   * The key-value pair information of the remarks.
   */
  modifierParam?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether the left operand is a constant. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  type?: string;
  /**
   * @remarks
   * The variable of the left operand.
   * 
   * @example
   * ip
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isVar: 'IsVar',
      modifier: 'Modifier',
      modifierParam: 'ModifierParam',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isVar: 'boolean',
      modifier: 'string',
      modifierParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsRight extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the right operand is a constant or a runtime variable that is obtained from the runtime context. Valid values:
   * 
   * *   true: runtime variable.
   * *   false: constant.
   * 
   * @example
   * false
   */
  isVar?: boolean;
  /**
   * @remarks
   * The remarks on the right operand.
   * 
   * @example
   * length
   */
  modifier?: string;
  /**
   * @remarks
   * The key-value pair information of the remarks.
   */
  modifierParam?: { [key: string]: any };
  /**
   * @remarks
   * The data type of the right operand.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The right operand.
   * 
   * @example
   * 12345
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isVar: 'IsVar',
      modifier: 'Modifier',
      modifierParam: 'ModifierParam',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isVar: 'boolean',
      modifier: 'string',
      modifierParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditions extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the result is inverted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isNot?: boolean;
  /**
   * @remarks
   * The ID of the rule condition.
   * 
   * @example
   * 1
   */
  itemId?: number;
  /**
   * @remarks
   * The left operand of the rule condition.
   */
  left?: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsLeft;
  /**
   * @remarks
   * The logical operator of the rule condition. Valid values:
   * 
   * *   `=`: equals to.
   * *   `<>`: does not equal to.
   * *   `in`: contains.
   * *   `not in`: does not contain.
   * *   `REGEXP`: matches a regular expression.
   * *   `NOT REGEXP`: does not match a regular expression.
   * 
   * @example
   * REGEXP
   */
  operator?: string;
  /**
   * @remarks
   * The right operand of the rule condition.
   */
  right?: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsRight;
  static names(): { [key: string]: string } {
    return {
      isNot: 'IsNot',
      itemId: 'ItemId',
      left: 'Left',
      operator: 'Operator',
      right: 'Right',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isNot: 'boolean',
      itemId: 'number',
      left: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsLeft,
      operator: 'string',
      right: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsRight,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBodyDataResponseDataExpression extends $tea.Model {
  /**
   * @remarks
   * The rule conditions.
   */
  conditions?: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditions[];
  /**
   * @remarks
   * The logical relationships among the rule conditions.
   * 
   * @example
   * (1&2)|(3&4)
   */
  logic?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditions },
      logic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBodyDataResponseData extends $tea.Model {
  /**
   * @remarks
   * The alert name.
   * 
   * @example
   * Try SNMP weak password
   */
  alertName?: string;
  /**
   * @remarks
   * The ID of the alert name.
   * 
   * @example
   * Try SNMP weak password
   */
  alertNameId?: string;
  /**
   * @remarks
   * The alert type.
   * 
   * @example
   * scan
   */
  alertType?: string;
  /**
   * @remarks
   * The ID of the alert type.
   * 
   * @example
   * scan
   */
  alertTypeId?: string;
  /**
   * @remarks
   * The UUID of the alert.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The conditions in the rule. The value is a JSON array.
   * 
   * @example
   * [{"conditions":[{"isNot":false,"itemId":0,"left":{"value":"host_uuid.host_name"},"operator":"containsString","right":{"value":"Cloud-MCH"}}]}]
   */
  expression?: DescribeWhiteRuleListResponseBodyDataResponseDataExpression;
  /**
   * @remarks
   * The time when the whitelist rule was created.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the whitelist rule was modified.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the whitelist rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The status of the whitelist rule. Valid values:
   * 
   * *   1: enabled.
   * *   0: disabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the whitelist rule.
   * 
   * @example
   * 176555323***
   */
  subAliuid?: number;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      alertNameId: 'AlertNameId',
      alertType: 'AlertType',
      alertTypeId: 'AlertTypeId',
      alertUuid: 'AlertUuid',
      aliuid: 'Aliuid',
      expression: 'Expression',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentUuid: 'IncidentUuid',
      status: 'Status',
      subAliuid: 'SubAliuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      alertNameId: 'string',
      alertType: 'string',
      alertTypeId: 'string',
      alertUuid: 'string',
      aliuid: 'number',
      expression: DescribeWhiteRuleListResponseBodyDataResponseDataExpression,
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentUuid: 'string',
      status: 'number',
      subAliuid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteRuleListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeWhiteRuleListResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: DescribeWhiteRuleListResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeWhiteRuleListResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': DescribeWhiteRuleListResponseBodyDataResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoQuickFieldResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * ""
   */
  aggQueryd?: string;
  /**
   * @remarks
   * Indicates whether the quick analysis was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  completeOrNot?: boolean;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * true
   */
  hasSQL?: boolean;
  /**
   * @remarks
   * This parameter is deprecated.
   */
  keys?: string[];
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 0
   */
  limited?: number;
  /**
   * @remarks
   * The logs queried by using the quick analysis feature.
   */
  logs?: any[];
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * ""
   */
  PQuery?: string;
  /**
   * @remarks
   * The number of entries queried.
   * 
   * @example
   * 1000
   */
  processedRows?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 0
   */
  queryMode?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * * and alert_level : remind | with_pack_meta
   */
  whereQuery?: string;
  static names(): { [key: string]: string } {
    return {
      aggQueryd: 'AggQueryd',
      completeOrNot: 'CompleteOrNot',
      count: 'Count',
      hasSQL: 'HasSQL',
      keys: 'Keys',
      limited: 'Limited',
      logs: 'Logs',
      PQuery: 'PQuery',
      processedRows: 'ProcessedRows',
      queryMode: 'QueryMode',
      whereQuery: 'WhereQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggQueryd: 'string',
      completeOrNot: 'boolean',
      count: 'number',
      hasSQL: 'boolean',
      keys: { 'type': 'array', 'itemType': 'string' },
      limited: 'number',
      logs: { 'type': 'array', 'itemType': 'any' },
      PQuery: 'string',
      processedRows: 'number',
      queryMode: 'number',
      whereQuery: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCapacityResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the Logstores for the threat analysis feature exist on the user side. Valid values:
   * 
   * *   true: The logs are in the normal state. The log analysis feature is available.
   * *   false: The logs are being cleared. The log analysis feature is unavailable.
   * 
   * @example
   * true
   */
  existLogStore?: boolean;
  /**
   * @remarks
   * The purchased storage capacity of the threat analysis feature. Unit: GB.
   * 
   * @example
   * 9000
   */
  preservedCapacity?: number;
  /**
   * @remarks
   * The billable storage capacity of the threat analysis feature. Unit: GB.
   * 
   * @example
   * 10
   */
  usedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      existLogStore: 'ExistLogStore',
      preservedCapacity: 'PreservedCapacity',
      usedCapacity: 'UsedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existLogStore: 'boolean',
      preservedCapacity: 'number',
      usedCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistogramsResponseBodyDataHistograms extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the query results within the subinterval is complete. Valid values:
   * 
   * *   true: The query is complete and the returned result is complete.
   * *   false: The query is complete but the returned result is incomplete. You must repeat the request to obtain the complete result.
   * 
   * @example
   * true
   */
  completedOrNot?: boolean;
  /**
   * @remarks
   * The number of logs within the subinterval.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The start time of the subinterval. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1409529600
   */
  from?: number;
  /**
   * @remarks
   * The end time of the subinterval. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1409569200
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      completedOrNot: 'CompletedOrNot',
      count: 'Count',
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedOrNot: 'boolean',
      count: 'number',
      from: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistogramsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The distribution of logs.
   */
  histograms?: GetHistogramsResponseBodyDataHistograms[];
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * nginx
   */
  server?: string;
  /**
   * @remarks
   * The number of logs that are generated within the subinterval.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      histograms: 'Histograms',
      server: 'Server',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      histograms: { 'type': 'array', 'itemType': GetHistogramsResponseBodyDataHistograms },
      server: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsResponseBodyDataPageInfo extends $tea.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of logs.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsResponseBodyDataResponseData extends $tea.Model {
  /**
   * @remarks
   * The status of the log query. Valid values:
   * 
   * *   true: The query is complete and the returned result is complete.
   * *   false: The query is complete but the returned result is incomplete. You must resend the request to obtain the complete result.
   * 
   * @example
   * true
   */
  completeOrNot?: boolean;
  /**
   * @remarks
   * The time period of the log query. Unit: milliseconds.
   * 
   * @example
   * 28
   */
  cost?: number;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * Indicated whether an analytic statement is contained. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  hasSql?: boolean;
  /**
   * @remarks
   * The index fields of the logs.
   */
  keys?: string[];
  /**
   * @remarks
   * The raw data generated in the query.
   */
  lines?: any[];
  static names(): { [key: string]: string } {
    return {
      completeOrNot: 'CompleteOrNot',
      cost: 'Cost',
      count: 'Count',
      hasSql: 'HasSql',
      keys: 'Keys',
      lines: 'Lines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeOrNot: 'boolean',
      cost: 'number',
      count: 'number',
      hasSql: 'boolean',
      keys: { 'type': 'array', 'itemType': 'string' },
      lines: { 'type': 'array', 'itemType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The result on the current page.
   */
  pageInfo?: GetLogsResponseBodyDataPageInfo;
  /**
   * @remarks
   * The content of the log.
   */
  responseData?: GetLogsResponseBodyDataResponseData;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: GetLogsResponseBodyDataPageInfo,
      responseData: GetLogsResponseBodyDataResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the storage region can be changed for once. Default value: false Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  canOperate?: boolean;
  /**
   * @remarks
   * Indicates whether the storage region can be changed. Default value: false Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  displayRegion?: boolean;
  /**
   * @remarks
   * The region where the data is stored.
   * 
   * If the data management center is **cn-hangzhou**, the default value of **Region** is cn-shanghai, which specifies the China (Shanghai) region. If the data management center is **ap-southeast-1**, the default value of **Region** is ap-southeast-1, which specifies the Singapore region.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The storage period of logs. Unit: day. Default value: 180. Valid values: 30 to 3000.
   * 
   * @example
   * 180
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      canOperate: 'CanOperate',
      displayRegion: 'DisplayRegion',
      region: 'Region',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canOperate: 'boolean',
      displayRegion: 'boolean',
      region: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountAccessIdResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The AccessKey ID of the cloud account that is added to the threat analysis feature.
   * 
   * @example
   * ABCXXXXXXXX
   */
  accessId?: string;
  /**
   * @remarks
   * The MD5 hash value of the AccessKey ID.
   * 
   * @example
   * abcXXXXXXXX
   */
  accessIdMd5?: string;
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The information about the cloud account to which the AccessKey ID belongs. The value is in the following format: Alibaba Cloud account ID|Alibaba Cloud account username|AccessKey ID.
   * 
   * @example
   * 123xxxxxx|xxxx|ABCXXXXX
   */
  accountStr?: string;
  /**
   * @remarks
   * Indicates whether the cloud account to which the AccessKey ID belongs is added to the threat analysis feature. Valid values:
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 1
   */
  bound?: number;
  /**
   * @remarks
   * The code of the cloud service provider.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to add the third-party cloud account.
   * 
   * @example
   * ABCXXXXXXXX
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accessIdMd5: 'AccessIdMd5',
      accountId: 'AccountId',
      accountStr: 'AccountStr',
      bound: 'Bound',
      cloudCode: 'CloudCode',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessIdMd5: 'string',
      accountId: 'string',
      accountStr: 'string',
      bound: 'number',
      cloudCode: 'string',
      subUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsByLogResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the cloud account.
   * 
   * @example
   * sas_account_xxx
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the account is added. Valid values: -1: yes -0: no
   * 
   * @example
   * 123xxxxxxx
   */
  imported?: number;
  /**
   * @remarks
   * The code of the log.
   * 
   * @example
   * cloud_siem_waf_xxxxx
   */
  logCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * qcloud_waf
   */
  prodCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account for which the threat analysis feature is enabled.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      imported: 'Imported',
      logCode: 'LogCode',
      mainUserId: 'MainUserId',
      prodCode: 'ProdCode',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      imported: 'number',
      logCode: 'string',
      mainUserId: 'number',
      prodCode: 'string',
      subUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllProdsResponseBodyDataProdList extends $tea.Model {
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud.
   * *   aliyun: Alibaba Cloud.
   * *   hcloud: Huawei Cloud.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The number of logs within the cloud service that are added to the threat analysis feature.
   * 
   * @example
   * 10
   */
  importedLogCount?: number;
  /**
   * @remarks
   * The time when the logs within the cloud service were last added to the threat analysis feature.
   * 
   * @example
   * 2023-11-23 12:12:12
   */
  modifyTime?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * sas
   */
  prodCode?: string;
  /**
   * @remarks
   * The total number of logs within the cloud service.
   * 
   * @example
   * 19
   */
  totalLogCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudCode: 'CloudCode',
      importedLogCount: 'ImportedLogCount',
      modifyTime: 'ModifyTime',
      prodCode: 'ProdCode',
      totalLogCount: 'TotalLogCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudCode: 'string',
      importedLogCount: 'number',
      modifyTime: 'string',
      prodCode: 'string',
      totalLogCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllProdsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The cloud services.
   * 
   * @example
   * 1
   */
  prodList?: ListAllProdsResponseBodyDataProdList[];
  /**
   * @remarks
   * The total number of logs.
   * 
   * @example
   * 19
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      prodList: 'ProdList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      prodList: { 'type': 'array', 'itemType': ListAllProdsResponseBodyDataProdList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutomateResponseConfigsResponseBodyDataPageInfo extends $tea.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutomateResponseConfigsResponseBodyDataResponseData extends $tea.Model {
  /**
   * @remarks
   * The configuration of the action that is performed after the automated response rule is hit. The value is in the JSON format.
   * 
   * @example
   * [
   *       {
   *             "actionType": "doPlaybook",
   *             "playbookName": "WafBlockIP",
   *             "playbookUuid": "bdad6220-6584-41b2-9704-fc6584568758"
   *       }
   * ]
   */
  actionConfig?: string;
  /**
   * @remarks
   * The type of the handling action. Multiple types are separated by commas (,). Valid values:
   * 
   * *   **doPlaybook**: runs the playbook.
   * *   **changeEventStatus**: changes the event status.
   * *   **changeThreatLevel**: changes the risk level of the event.
   * 
   * @example
   * doPlaybook,changeEventStatus
   */
  actionType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is associated with the rule in SIEM.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The type of the automated response rule. Valid values:
   * 
   * *   **event**
   * *   **alert**
   * 
   * @example
   * event
   */
  autoResponseType?: string;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * 0: the current Alibaba Cloud account
   * 1: the global account
   * 
   * @example
   * 1
   */
  dataType?: number;
  /**
   * @remarks
   * The trigger condition of the automated response rule. The value is in the JSON format.
   * 
   * @example
   * [{"left":{"value":"alert_name"},"operator":"containsString","right":{"value":"webshell_online"}}]
   */
  executionCondition?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the automated response rule.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The name of the automated response rule.
   * 
   * @example
   * cfw kill quara book
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **0**: disabled.
   * *   **100**: enabled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The ID of the user who created the rule.
   * 
   * @example
   * 17108579417****
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      actionConfig: 'ActionConfig',
      actionType: 'ActionType',
      aliuid: 'Aliuid',
      autoResponseType: 'AutoResponseType',
      dataType: 'DataType',
      executionCondition: 'ExecutionCondition',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ruleName: 'RuleName',
      status: 'Status',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionConfig: 'string',
      actionType: 'string',
      aliuid: 'number',
      autoResponseType: 'string',
      dataType: 'number',
      executionCondition: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      ruleName: 'string',
      status: 'number',
      subUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutomateResponseConfigsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListAutomateResponseConfigsResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: ListAutomateResponseConfigsResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListAutomateResponseConfigsResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': ListAutomateResponseConfigsResponseBodyDataResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindAccountResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The AccessKey ID of the cloud account.
   * 
   * @example
   * ABCXXXXXXXX
   */
  accessId?: string;
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The username of the cloud account.
   * 
   * @example
   * sas_account_xxx
   */
  accountName?: string;
  /**
   * @remarks
   * The ID that is generated when the cloud account is added.
   * 
   * @example
   * 123xxxxxxx
   */
  bindId?: number;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the account that is used to add the cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  createUser?: string;
  /**
   * @remarks
   * The number of data sources that are added to the threat analysis feature within the cloud account.
   * 
   * @example
   * 2
   */
  dataSourceCount?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2023-11-10 12:20:35
   */
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accountId: 'AccountId',
      accountName: 'AccountName',
      bindId: 'BindId',
      cloudCode: 'CloudCode',
      createUser: 'CreateUser',
      dataSourceCount: 'DataSourceCount',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accountId: 'string',
      accountName: 'string',
      bindId: 'number',
      cloudCode: 'string',
      createUser: 'string',
      dataSourceCount: 'number',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindDataSourcesResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The username of the cloud account.
   * 
   * @example
   * sas_tq_account_xxxx
   */
  accountName?: string;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * waf_kafka
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The remarks on the data source.
   * 
   * @example
   * waf_kafka
   */
  dataSourceRemark?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   obs: Huawei Cloud Object Storage Service (OBS)
   * *   wafApi: download API of Tencent Cloud Web Application Firewall (WAF)
   * *   ckafka: Tencent Cloud Kafka (CKafka)
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The number of logs that are added within the data source.
   * 
   * @example
   * 1
   */
  logCount?: number;
  /**
   * @remarks
   * The number of existing tasks that are created to add logs within the data source.
   * 
   * @example
   * 0
   */
  taskCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      dataSourceName: 'DataSourceName',
      dataSourceRemark: 'DataSourceRemark',
      dataSourceType: 'DataSourceType',
      logCount: 'LogCount',
      taskCount: 'TaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      dataSourceName: 'string',
      dataSourceRemark: 'string',
      dataSourceType: 'string',
      logCount: 'number',
      taskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudSiemCustomizeRulesResponseBodyDataPageInfo extends $tea.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudSiemCustomizeRulesResponseBodyDataResponseData extends $tea.Model {
  /**
   * @remarks
   * The type of the risk.
   * 
   * @example
   * WEBSHELL
   */
  alertType?: string;
  /**
   * @remarks
   * The internal code of the risk type.
   * 
   * @example
   * ${siem_rule_type_process_abnormal_command}
   */
  alertTypeMds?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account in SIEM.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The alert additional field for ATT\\&CK.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * 0: view of the current Alibaba Cloud account. 1: view of all accounts for the enterprise.
   * 
   * @example
   * 1
   */
  dataType?: number;
  /**
   * @remarks
   * The extended information about event generation. If the value of **eventTransferType** is **allToSingle**, the value of this parameter indicates the length and unit of the alert aggregation window. The HTML escape characters are reversed.
   * 
   * @example
   * {&quot;time&quot;:&quot;1&quot;,&quot;unit&quot;:&quot;MINUTE&quot;}
   */
  eventTransferExt?: string;
  /**
   * @remarks
   * Indicates whether the system generates an event for the alert. Valid values:
   * 
   * *   **0**: no.
   * *   **1**: yes.
   * 
   * @example
   * 1
   */
  eventTransferSwitch?: number;
  /**
   * @remarks
   * The method that is used to generate an event. Valid values:
   * 
   * *   **default**: built-in method.
   * *   **singleToSingle**: The system generates an event for each alert.
   * *   **allToSingle**: The system generates an event for alerts within a period of time.
   * 
   * @example
   * allToSingle
   */
  eventTransferType?: string;
  /**
   * @remarks
   * The time when the custom rule was created.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the custom rule was last updated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the custom rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The log source of the rule.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logSource?: string;
  /**
   * @remarks
   * The internal code of the log source.
   * 
   * @example
   * ${sas.cloudsiem.prod.cloud_siem_aegis_sas_alert}
   */
  logSourceMds?: string;
  /**
   * @remarks
   * The log type of the rule.
   * 
   * @example
   * ALERT_ACTIVITY
   */
  logType?: string;
  /**
   * @remarks
   * The internal code of the log type.
   * 
   * @example
   * ${sas.cloudsiem.prod.alert_activity}
   */
  logTypeMds?: string;
  /**
   * @remarks
   * The window length of the rule. The HTML escape characters are reversed.
   * 
   * @example
   * {&quot;time&quot;:&quot;1&quot;,&quot;unit&quot;:&quot;HOUR&quot;}
   */
  queryCycle?: string;
  /**
   * @remarks
   * The query condition of the rule. The value is in the JSON format. The HTML escape characters are reversed.
   * 
   * @example
   * [[{&quot;not&quot;:false,&quot;left&quot;:&quot;alert_name&quot;,&quot;operator&quot;:&quot;=&quot;,&quot;right&quot;:&quot;WEBSHELL&quot;}]]
   */
  ruleCondition?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * this rule is for waf scan
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The log aggregation field. The value is in the JSON format. The HTML escape characters are reversed.
   * 
   * @example
   * [&quot;asset_id&quot;]
   */
  ruleGroup?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * waf_scan
   */
  ruleName?: string;
  /**
   * @remarks
   * The threshold configurations of the rule in the JSON format. The HTML escape characters are reversed.
   * 
   * @example
   * {&quot;aggregateFunction&quot;:&quot;count&quot;,&quot;aggregateFunctionName&quot;:&quot;count&quot;,&quot;field&quot;:&quot;activity_name&quot;,&quot;operator&quot;:&quot;&lt;=&quot;,&quot;value&quot;:1}
   */
  ruleThreshold?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **predefine**
   * *   **customize**
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **0**: The rule is in the initial state.
   * *   **10**: The simulation data is tested.
   * *   **15**: The business data is being tested.
   * *   **20**: The business data test is complete.
   * *   **100**: The rule is in effect.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **serious**: high-risk.
   * *   **suspicious**: medium-risk.
   * *   **remind**: low-risk.
   * 
   * @example
   * remind
   */
  threatLevel?: string;
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      alertTypeMds: 'AlertTypeMds',
      aliuid: 'Aliuid',
      attCk: 'AttCk',
      dataType: 'DataType',
      eventTransferExt: 'EventTransferExt',
      eventTransferSwitch: 'EventTransferSwitch',
      eventTransferType: 'EventTransferType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      logSource: 'LogSource',
      logSourceMds: 'LogSourceMds',
      logType: 'LogType',
      logTypeMds: 'LogTypeMds',
      queryCycle: 'QueryCycle',
      ruleCondition: 'RuleCondition',
      ruleDesc: 'RuleDesc',
      ruleGroup: 'RuleGroup',
      ruleName: 'RuleName',
      ruleThreshold: 'RuleThreshold',
      ruleType: 'RuleType',
      status: 'Status',
      threatLevel: 'ThreatLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      alertTypeMds: 'string',
      aliuid: 'number',
      attCk: 'string',
      dataType: 'number',
      eventTransferExt: 'string',
      eventTransferSwitch: 'number',
      eventTransferType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      logSource: 'string',
      logSourceMds: 'string',
      logType: 'string',
      logTypeMds: 'string',
      queryCycle: 'string',
      ruleCondition: 'string',
      ruleDesc: 'string',
      ruleGroup: 'string',
      ruleName: 'string',
      ruleThreshold: 'string',
      ruleType: 'string',
      status: 'number',
      threatLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudSiemCustomizeRulesResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCloudSiemCustomizeRulesResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: ListCloudSiemCustomizeRulesResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListCloudSiemCustomizeRulesResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': ListCloudSiemCustomizeRulesResponseBodyDataResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudSiemPredefinedRulesResponseBodyDataPageInfo extends $tea.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudSiemPredefinedRulesResponseBodyDataResponseData extends $tea.Model {
  /**
   * @remarks
   * The type of the risk.
   * 
   * @example
   * WEBSHELL
   */
  alertType?: string;
  /**
   * @remarks
   * The alert additional field for ATT\\&CK.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The method that is used to generate an event. Valid values:
   * 
   * *   default: built-in method.
   * *   singleToSingle: The system generates an event for each alert.
   * *   allToSingle: The system generates an event for alerts within a period of time.
   * 
   * @example
   * allToSingle
   */
  eventTransferType?: string;
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the rule was modified.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the predefined rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The internal code of the rule description.
   * 
   * @example
   * ${siem_rule_description_siem_cfw-attack-count-level-up_cfw-attack}
   */
  ruleDescMds?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * siem_base64-command-exec_aegis-proc
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule name in Chinese.
   * 
   * @example
   * siem_base64-command-exec_aegis-proc
   */
  ruleNameCn?: string;
  /**
   * @remarks
   * The rule name in English.
   * 
   * @example
   * siem_base64-command-exec_aegis-proc
   */
  ruleNameEn?: string;
  /**
   * @remarks
   * The internal code of the rule name.
   * 
   * @example
   * ${siem_rule_name_siem_cfw-attack-count-level-up_cfw-attack}
   */
  ruleNameMds?: string;
  /**
   * @remarks
   * The log source of the rule.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  source?: string;
  /**
   * @remarks
   * The status of the predefined rule. Valid values:
   * 
   * *   0: The rule is in the initial state.
   * *   100: The rule takes effect.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   serious: high.
   * *   suspicious: medium.
   * *   remind: low.
   * 
   * @example
   * remind
   */
  threatLevel?: string;
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      attCk: 'AttCk',
      eventTransferType: 'EventTransferType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ruleDescMds: 'RuleDescMds',
      ruleName: 'RuleName',
      ruleNameCn: 'RuleNameCn',
      ruleNameEn: 'RuleNameEn',
      ruleNameMds: 'RuleNameMds',
      source: 'Source',
      status: 'Status',
      threatLevel: 'ThreatLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      attCk: 'string',
      eventTransferType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      ruleDescMds: 'string',
      ruleName: 'string',
      ruleNameCn: 'string',
      ruleNameEn: 'string',
      ruleNameMds: 'string',
      source: 'string',
      status: 'number',
      threatLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudSiemPredefinedRulesResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCloudSiemPredefinedRulesResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: ListCloudSiemPredefinedRulesResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListCloudSiemPredefinedRulesResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': ListCloudSiemPredefinedRulesResponseBodyDataResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomizeRuleTestResultResponseBodyDataPageInfo extends $tea.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomizeRuleTestResultResponseBodyDataResponseData extends $tea.Model {
  /**
   * @remarks
   * The description of the alert.
   * 
   * @example
   * The account you logged in this time is not in the legal account category defined by you. Please confirm the legality of the login behavior.
   */
  alertDesc?: string;
  /**
   * @remarks
   * The alert details in the JSON format.
   * 
   * @example
   * {"main_user_id": "165295629792****";"log_uuid_count": "99";"attack_ip": "218.92.XX.XX"}
   */
  alertDetail?: string;
  /**
   * @remarks
   * The source of the alert.
   * 
   * @example
   * sas
   */
  alertSrcProd?: string;
  /**
   * @remarks
   * The sub-module of the source.
   * 
   * @example
   * waf
   */
  alertSrcProdModule?: string;
  /**
   * @remarks
   * The tag of the ATT\\&CK attack.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The name of the alert, which corresponds to the name of the custom rule.
   * 
   * @example
   * waf_scan
   */
  eventName?: string;
  /**
   * @remarks
   * The threat type, which indicates the alert type.
   * 
   * @example
   * WEBSHELL
   */
  eventType?: string;
  /**
   * @remarks
   * The threat level. Valid values:
   * 
   * *   serious: high.
   * *   suspicious: medium.
   * *   remind: low.
   * 
   * @example
   * remind
   */
  level?: string;
  /**
   * @remarks
   * The log source of the rule.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logSource?: string;
  /**
   * @remarks
   * The time when the alert was recorded.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  logTime?: string;
  /**
   * @remarks
   * The log type of the rule.
   * 
   * @example
   * ALERT_ACTIVITY
   */
  logType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is associated with the alert in SIEM.
   * 
   * @example
   * 127608589417****
   */
  mainUserId?: string;
  /**
   * @remarks
   * The status of the alert data. Valid values:
   * 
   * *   test: business test data.
   * *   online: online data.
   * 
   * @example
   * test
   */
  onlineStatus?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account within which the alert is generated.
   * 
   * @example
   * 176555323***
   */
  subUserId?: string;
  /**
   * @remarks
   * The UUID of the alert.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertDesc: 'AlertDesc',
      alertDetail: 'AlertDetail',
      alertSrcProd: 'AlertSrcProd',
      alertSrcProdModule: 'AlertSrcProdModule',
      attCk: 'AttCk',
      eventName: 'EventName',
      eventType: 'EventType',
      level: 'Level',
      logSource: 'LogSource',
      logTime: 'LogTime',
      logType: 'LogType',
      mainUserId: 'MainUserId',
      onlineStatus: 'OnlineStatus',
      subUserId: 'SubUserId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertDesc: 'string',
      alertDetail: 'string',
      alertSrcProd: 'string',
      alertSrcProdModule: 'string',
      attCk: 'string',
      eventName: 'string',
      eventType: 'string',
      level: 'string',
      logSource: 'string',
      logTime: 'string',
      logType: 'string',
      mainUserId: 'string',
      onlineStatus: 'string',
      subUserId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomizeRuleTestResultResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCustomizeRuleTestResultResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: ListCustomizeRuleTestResultResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListCustomizeRuleTestResultResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': ListCustomizeRuleTestResultResponseBodyDataResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceLogsResponseBodyDataDataSourceInstanceLogsLogParams extends $tea.Model {
  /**
   * @remarks
   * The parameter code of the log.
   * 
   * @example
   * region_code
   */
  paraCode?: string;
  /**
   * @remarks
   * The parameter value of the log.
   * 
   * @example
   * ap-guangzhou
   */
  paraValue?: string;
  static names(): { [key: string]: string } {
    return {
      paraCode: 'ParaCode',
      paraValue: 'ParaValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paraCode: 'string',
      paraValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceLogsResponseBodyDataDataSourceInstanceLogs extends $tea.Model {
  /**
   * @remarks
   * The code of the log.
   * 
   * @example
   * cloud_siem_waf_xxxxx
   */
  logCode?: string;
  /**
   * @remarks
   * The ID of the log. The value is obtained after the threat analysis feature calculates the MD5 hash value of a parameter.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  logInstanceId?: string;
  /**
   * @remarks
   * The display code of the log.
   * 
   * @example
   * ${siem.prod.cloud_siem_waf_xxxxx}
   */
  logMdsCode?: string;
  /**
   * @remarks
   * The parameters of the log.
   */
  logParams?: ListDataSourceLogsResponseBodyDataDataSourceInstanceLogsLogParams[];
  /**
   * @remarks
   * Indicates whether the task for which logs are collected is enabled. Valid values:
   * 
   * *   1: yes
   * *   0: no
   * 
   * @example
   * 1
   */
  taskStatus?: number;
  static names(): { [key: string]: string } {
    return {
      logCode: 'LogCode',
      logInstanceId: 'LogInstanceId',
      logMdsCode: 'LogMdsCode',
      logParams: 'LogParams',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logCode: 'string',
      logInstanceId: 'string',
      logMdsCode: 'string',
      logParams: { 'type': 'array', 'itemType': ListDataSourceLogsResponseBodyDataDataSourceInstanceLogsLogParams },
      taskStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceLogsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code that is used for multi-cloud environments. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. The value is obtained after the threat analysis feature calculates the MD5 hash value of a parameter.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The logs of the data source.
   */
  dataSourceInstanceLogs?: ListDataSourceLogsResponseBodyDataDataSourceInstanceLogs[];
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * waf kafka
   */
  dataSourceInstanceName?: string;
  /**
   * @remarks
   * The remarks of the data source.
   * 
   * @example
   * waf kafka
   */
  dataSourceInstanceRemark?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      dataSourceInstanceLogs: 'DataSourceInstanceLogs',
      dataSourceInstanceName: 'DataSourceInstanceName',
      dataSourceInstanceRemark: 'DataSourceInstanceRemark',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      dataSourceInstanceLogs: { 'type': 'array', 'itemType': ListDataSourceLogsResponseBodyDataDataSourceInstanceLogs },
      dataSourceInstanceName: 'string',
      dataSourceInstanceRemark: 'string',
      subUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTypesResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The code of the third-party cloud service.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   obs: Huawei Cloud Object Storage Service (OBS)
   * *   wafApi: download API of Tencent Cloud Web Application Firewall (WAF)
   * *   ckafka: Tencent Cloud Kafka (CKafka)
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      cloudCode: 'CloudCode',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudCode: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryResponseBodyDataProductListLogListExtraParameters extends $tea.Model {
  /**
   * @remarks
   * The ID of the extended parameter.
   * 
   * @example
   * flag
   */
  key?: string;
  /**
   * @remarks
   * The value of the extended parameter.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryResponseBodyDataProductListLogList extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the log delivery feature can be enabled or disabled. The feature can be enabled or disabled only by the administrator of the threat analysis feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  canOperateOrNot?: boolean;
  /**
   * @remarks
   * The extended parameter.
   */
  extraParameters?: ListDeliveryResponseBodyDataProductListLogListExtraParameters[];
  /**
   * @remarks
   * The code of the log.
   * 
   * @example
   * cloud_siem_config_log
   */
  logCode?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * audit log
   */
  logName?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * audit log
   */
  logNameEn?: string;
  /**
   * @remarks
   * The language code of the log that is used to indicate the language in which the log is displayed.
   * 
   * @example
   * ${sas.cloudsiem.prod.cloud_siem_aegis_crack_from_beaver}
   */
  logNameKey?: string;
  /**
   * @remarks
   * The status of the log delivery. Valid values:
   * 
   * *   true: The logs are being delivered.
   * *   false: The log delivery feature is disabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The topic of the log in the Logstore. The value is an index field in the Logstore that can be used to distinguish different logs.
   * 
   * @example
   * sas_login_event
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      canOperateOrNot: 'CanOperateOrNot',
      extraParameters: 'ExtraParameters',
      logCode: 'LogCode',
      logName: 'LogName',
      logNameEn: 'LogNameEn',
      logNameKey: 'LogNameKey',
      status: 'Status',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canOperateOrNot: 'boolean',
      extraParameters: { 'type': 'array', 'itemType': ListDeliveryResponseBodyDataProductListLogListExtraParameters },
      logCode: 'string',
      logName: 'string',
      logNameEn: 'string',
      logNameKey: 'string',
      status: 'boolean',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryResponseBodyDataProductList extends $tea.Model {
  /**
   * @remarks
   * The logs of the cloud services.
   */
  logList?: ListDeliveryResponseBodyDataProductListLogList[];
  /**
   * @remarks
   * The log group. For example, in Security Center, the logs of hosts and networks are stored in different groups. Key indicates the group information, and value indicates the logs in the group.
   */
  logMap?: { [key: string]: DataProductListLogMapValue[] };
  /**
   * @remarks
   * The code of the cloud service. Valid values:
   * 
   * *   qcloud_waf
   * *   qlcoud_cfw
   * *   hcloud_waf
   * *   hcloud_cfw
   * *   ddos
   * *   sas
   * *   cfw
   * *   config
   * *   csk
   * *   fc
   * *   rds
   * *   nas
   * *   apigateway
   * *   cdn
   * *   mongodb
   * *   eip
   * *   slb
   * *   vpc
   * *   actiontrail
   * *   waf
   * *   bastionhost
   * *   oss
   * *   polardb
   * 
   * @example
   * sas
   */
  productCode?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * Security Center
   */
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      logMap: 'LogMap',
      productCode: 'ProductCode',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: { 'type': 'array', 'itemType': ListDeliveryResponseBodyDataProductListLogList },
      logMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataProductListLogMapValue } },
      productCode: 'string',
      productName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The URL that is displayed in charts.
   * 
   * @example
   * https://sls4service.console.aliyun.com/lognext/project/aliyun-cloudsiem-data-127608589417****-cn-shanghai
   * /dashboard/cloud-siem?isShare=true&hideTopbar=true&hideSidebar=true&ignoreTabLocalStorage=true
   */
  dashboardUrl?: string;
  /**
   * @remarks
   * Indicates whether the log delivery switch is displayed. Default value: true. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  displaySwitchOrNot?: boolean;
  /**
   * @remarks
   * The name of the Logstore for the threat analysis feature on the user side. The value is in the cloud_siem format.
   * 
   * @example
   * cloud-siem
   */
  logStoreName?: string;
  /**
   * @remarks
   * The cloud services.
   */
  productList?: ListDeliveryResponseBodyDataProductList[];
  /**
   * @remarks
   * The name of the project for the threat analysis feature in Simple Log service on the user side. The value is in the aliyun-cloudsiem-data-${aliUid}-${region} format.
   * 
   * @example
   * aliyun-cloudsiem-data-127608589417****-cn-shanghai
   */
  projectName?: string;
  /**
   * @remarks
   * The URL that is used for log analysis.
   * 
   * @example
   * https://sls4service.console.aliyun.com/lognext/project/aliyun-cloudsiem-data-127608589417****-cn-shanghai
   * /logsearch/cloud-siem?isShare=true&hideTopbar=true&hideSidebar=true&ignoreTabLocalStorage=true
   */
  searchUrl?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardUrl: 'DashboardUrl',
      displaySwitchOrNot: 'DisplaySwitchOrNot',
      logStoreName: 'LogStoreName',
      productList: 'ProductList',
      projectName: 'ProjectName',
      searchUrl: 'SearchUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardUrl: 'string',
      displaySwitchOrNot: 'boolean',
      logStoreName: 'string',
      productList: { 'type': 'array', 'itemType': ListDeliveryResponseBodyDataProductList },
      projectName: 'string',
      searchUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisposeStrategyResponseBodyDataPageInfo extends $tea.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisposeStrategyResponseBodyDataResponseData extends $tea.Model {
  /**
   * @remarks
   * The UUID of the alert.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is associated with the policy in SIEM.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   0: invalid
   * *   1: valid
   * 
   * @example
   * 0
   */
  effectiveStatus?: number;
  /**
   * @remarks
   * The details of the entity. The value is a JSON array.
   * 
   * @example
   * [{"ip":"1.1.1.1"}]
   */
  entity?: any[];
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * 123456789
   */
  entityId?: number;
  /**
   * @remarks
   * The type of the entity. Valid values:
   * 
   * *   ip
   * *   process
   * *   file
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The summary information about the failed task.
   * 
   * @example
   * DisposalEntity failed which description is Aegis Quarantine File , return_info failed which description is Check Aegis Process Result , [ERROR DETAIL] *******.php:file not found
   */
  errorMessage?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2021-08-10 21:34:07
   */
  finishTime?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * Multiple type of alerts, including Miner Network, Command line download and run malicious files, Backdoor Process, etc
   */
  incidentName?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The name of the playbook, which is the unique identifier of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  playbookName?: string;
  /**
   * @remarks
   * The type of the playbook. Valid values:
   * 
   * *   system: user-triggered playbook
   * *   custom: event-triggered playbook
   * *   custom_alert: alert-triggered playbook
   * *   soar-manual: user-run playbook
   * *   soar-mdr: MDR-run playbook
   * 
   * @example
   * system
   */
  playbookType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * system_aliyun_clb_process_book
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The scope of the policy.
   * 
   * @example
   * [{ aliUid: 1766185894104675 }]
   */
  scope?: any[];
  /**
   * @remarks
   * The ID of the SOAR handling policy.
   * 
   * @example
   * 577bbf90-a770-44a7-8154-586aa2d318fa
   */
  sophonTaskId?: string;
  /**
   * @remarks
   * The running status of the playbook. Valid values:
   * 
   * *   200: successful
   * *   10: deleted
   * *   5: failed
   * *   0: initial
   * 
   * @example
   * 10
   */
  status?: number;
  /**
   * @remarks
   * The ID of the Alibaba account that is used to configure the policy.
   * 
   * @example
   * 176555323***
   */
  subAliuid?: number;
  /**
   * @remarks
   * The parameters that are used to trigger the playbook. The value is in the JSON format.
   * 
   * @example
   * {
   *       "file": {
   *             "op_code": "2",
   *             "file_path": "/root/alert0913/a886.jsp",
   *             "entity_type": "file",
   *             "entity_name": "a886.jsp",
   *             "file_name": "a886.jsp",
   *             "file_owner": "USER:,GROUP:",
   *             "hash_value": "5def10c9a4287d0920d86b42420b20b0",
   *             "op_level": "2",
   *             "entity_id": "/root/alert0913/a886.jsp",
   *             "host_uuid": {
   *                   "entity_type": "host",
   *                   "entity_name": "N/A",
   *                   "is_comprised": "1",
   *                   "os_type": "linux",
   *                   "entity_id": "5f58ef67-8803-4314-8d67-c87dc92b****",
   *                   "host_uuid": "5f58ef67-8803-4314-8d67-c87dc92b****",
   *                   "host_name": "N/A"
   *             },
   *             "malware_type": "${aliyun.siem.sas.alert_tag.webshell}"
   *       },
   *       "_sys_siem": {
   *             "cloudCode": "aliyun",
   *             "alertId": "89416745494****"
   *       },
   *       "scope": [
   *             {
   *                   "aliUid": 1766185894104****
   *             }
   *       ]
   * }
   */
  taskParam?: string;
  static names(): { [key: string]: string } {
    return {
      alertUuid: 'AlertUuid',
      aliuid: 'Aliuid',
      effectiveStatus: 'EffectiveStatus',
      entity: 'Entity',
      entityId: 'EntityId',
      entityType: 'EntityType',
      errorMessage: 'ErrorMessage',
      finishTime: 'FinishTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentName: 'IncidentName',
      incidentUuid: 'IncidentUuid',
      playbookName: 'PlaybookName',
      playbookType: 'PlaybookType',
      playbookUuid: 'PlaybookUuid',
      scope: 'Scope',
      sophonTaskId: 'SophonTaskId',
      status: 'Status',
      subAliuid: 'SubAliuid',
      taskParam: 'TaskParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertUuid: 'string',
      aliuid: 'number',
      effectiveStatus: 'number',
      entity: { 'type': 'array', 'itemType': 'any' },
      entityId: 'number',
      entityType: 'string',
      errorMessage: 'string',
      finishTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentName: 'string',
      incidentUuid: 'string',
      playbookName: 'string',
      playbookType: 'string',
      playbookUuid: 'string',
      scope: { 'type': 'array', 'itemType': 'any' },
      sophonTaskId: 'string',
      status: 'number',
      subAliuid: 'number',
      taskParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisposeStrategyResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListDisposeStrategyResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: ListDisposeStrategyResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListDisposeStrategyResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': ListDisposeStrategyResponseBodyDataResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImportedLogsByProdResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the log is automatically added to the threat analysis feature within newly added accounts. Valid values:
   * 
   * *   1: yes.
   * *   0: no.
   * 
   * @example
   * 2023-11-23 12:30:00
   */
  autoImported?: number;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud.
   * *   aliyun: Alibaba Cloud.
   * *   hcloud: Huawei Cloud.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * Indicates whether the log is added to the threat analysis feature. Valid values:
   * 
   * *   1: yes.
   * *   0: no.
   * 
   * @example
   * 2023-11-23 12:30:00
   */
  imported?: number;
  /**
   * @remarks
   * The number of users who have added the log.
   * 
   * @example
   * 2
   */
  importedUserCount?: number;
  /**
   * @remarks
   * The code of the log.
   * 
   * @example
   * cloud_siem_waf_xxxxx
   */
  logCode?: string;
  /**
   * @remarks
   * The display code of the log.
   * 
   * @example
   * ${siem.prod. cloud_siem_waf_xxxxx}
   */
  logMdsCode?: string;
  /**
   * @remarks
   * The type of log. Valid values:
   *  - 1: the log produced by other product
   *  - 2: the predefined log
   *  - 3: the custom log
   * 
   * @example
   * 1
   */
  logType?: number;
  /**
   * @remarks
   * The time when the log was last added.
   * 
   * @example
   * 2023-11-23 12:30:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The code of the cloud service to which the log belongs.
   * 
   * @example
   * qcloud_waf
   */
  prodCode?: string;
  /**
   * @remarks
   * The total number of users who have the log.
   * 
   * @example
   * 5
   */
  totalUserCount?: number;
  /**
   * @remarks
   * The number of users who have not added the log.
   * 
   * @example
   * 3
   */
  unImportedUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoImported: 'AutoImported',
      cloudCode: 'CloudCode',
      imported: 'Imported',
      importedUserCount: 'ImportedUserCount',
      logCode: 'LogCode',
      logMdsCode: 'LogMdsCode',
      logType: 'LogType',
      modifyTime: 'ModifyTime',
      prodCode: 'ProdCode',
      totalUserCount: 'TotalUserCount',
      unImportedUserCount: 'UnImportedUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoImported: 'number',
      cloudCode: 'string',
      imported: 'number',
      importedUserCount: 'number',
      logCode: 'string',
      logMdsCode: 'string',
      logType: 'number',
      modifyTime: 'string',
      prodCode: 'string',
      totalUserCount: 'number',
      unImportedUserCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the user is an administrator. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  adminOrNot?: boolean;
  /**
   * @remarks
   * The resources on which the permissions are granted.
   */
  operationList?: string[];
  static names(): { [key: string]: string } {
    return {
      adminOrNot: 'AdminOrNot',
      operationList: 'OperationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminOrNot: 'boolean',
      operationList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectLogStoresResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The endpoint of the Simple Log Service project.
   * 
   * @example
   * cn-hangzhou.log.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @remarks
   * The name of the region in which the Simple Log Service project resides.
   * 
   * @example
   * hangzhou
   */
  localName?: string;
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * cloud-siem-logstore
   */
  logStore?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * cloud-siem-project
   */
  project?: string;
  /**
   * @remarks
   * The ID of the region in which the Simple Log Service project resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that can be used to perform operations supported by the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The username of the Alibaba Cloud account that can be used to perform operations supported by the threat analysis feature.
   * 
   * @example
   * sas_account_xxxx
   */
  subUserName?: string;
  static names(): { [key: string]: string } {
    return {
      endPoint: 'EndPoint',
      localName: 'LocalName',
      logStore: 'LogStore',
      mainUserId: 'MainUserId',
      project: 'Project',
      regionId: 'RegionId',
      subUserId: 'SubUserId',
      subUserName: 'SubUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPoint: 'string',
      localName: 'string',
      logStore: 'string',
      mainUserId: 'number',
      project: 'string',
      regionId: 'string',
      subUserId: 'number',
      subUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuickQueryResponseBodyDataQuickQueryList extends $tea.Model {
  /**
   * @remarks
   * The alias of the saved search.
   * 
   * @example
   * no_1_created_search_used_for_dispaly_ip
   */
  displayName?: string;
  /**
   * @remarks
   * The query statement corresponding to the saved search.
   * 
   * @example
   * * and SamplerAddress:\\"172.18.1.1\\" and OutIf:\\"105\\"
   */
  query?: string;
  /**
   * @remarks
   * The name of the saved search.
   * 
   * @example
   * data_analysis
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      query: 'Query',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      query: 'string',
      searchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuickQueryResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of saved searches per page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The saved search.
   */
  quickQueryList?: ListQuickQueryResponseBodyDataQuickQueryList[];
  /**
   * @remarks
   * The total number of saved searches that meet the query conditions.
   * 
   * @example
   * 101
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      quickQueryList: 'QuickQueryList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      quickQueryList: { 'type': 'array', 'itemType': ListQuickQueryResponseBodyDataQuickQueryList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRdUsersResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the account can be used to view the logs and alerts within the account.
   * 
   * @example
   * true
   */
  delegatedOrNot?: boolean;
  /**
   * @remarks
   * Indicates whether the account is added to the threat analysis feature for centralized management. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  joined?: boolean;
  /**
   * @remarks
   * The time when the account was added to the threat analysis feature.
   * 
   * @example
   * 2013-10-01 00:00:00
   */
  joinedTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to perform operations supported by the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The username of the Alibaba Cloud account that can be used to perform operations supported by the threat analysis feature.
   * 
   * @example
   * sas_account_xxx
   */
  subUserName?: string;
  static names(): { [key: string]: string } {
    return {
      delegatedOrNot: 'DelegatedOrNot',
      joined: 'Joined',
      joinedTime: 'JoinedTime',
      mainUserId: 'MainUserId',
      subUserId: 'SubUserId',
      subUserName: 'SubUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegatedOrNot: 'boolean',
      joined: 'boolean',
      joinedTime: 'string',
      mainUserId: 'number',
      subUserId: 'number',
      subUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProdLogsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The display details of the Logstore.
   * 
   * @example
   * cn-shanghai.siem-project.siem-logstore
   */
  displayLine?: string;
  /**
   * @remarks
   * Indicates whether the details of the added log are returned. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  displayed?: boolean;
  /**
   * @remarks
   * Indicates whether the log is added to the threat analysis feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  imported?: boolean;
  /**
   * @remarks
   * Indicates whether the log is added to the threat analysis feature. Valid values:
   * 
   * *   0: yes
   * *   1: no
   * 
   * @example
   * 0
   */
  isDeleted?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The log code.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  sourceLogCode?: string;
  /**
   * @remarks
   * The details of the Logstore. The value is a JSON string.
   * 
   * @example
   * {"project":"wafnew-project-1335759343513432-cn-hangzhou","logStore":"wafnew-logstore","regionCode":"cn-hangzhou","prodCode":"waf"}
   */
  sourceLogInfo?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * sas
   */
  sourceProdCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that can be used to perform operations supported by the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The username of the Alibaba Cloud account that can be used to perform operations supported by the threat analysis feature.
   * 
   * @example
   * sas_account_xxx
   */
  subUserName?: string;
  static names(): { [key: string]: string } {
    return {
      displayLine: 'DisplayLine',
      displayed: 'Displayed',
      imported: 'Imported',
      isDeleted: 'IsDeleted',
      mainUserId: 'MainUserId',
      sourceLogCode: 'SourceLogCode',
      sourceLogInfo: 'SourceLogInfo',
      sourceProdCode: 'SourceProdCode',
      subUserId: 'SubUserId',
      subUserName: 'SubUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayLine: 'string',
      displayed: 'boolean',
      imported: 'boolean',
      isDeleted: 'number',
      mainUserId: 'number',
      sourceLogCode: 'string',
      sourceLogInfo: 'string',
      sourceProdCode: 'string',
      subUserId: 'number',
      subUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersByProdResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud.
   * *   aliyun: Alibaba Cloud.
   * *   hcloud: Huawei Cloud.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * Indicates whether the log is added to the threat analysis feature.
   * 
   * @example
   * true
   */
  imported?: boolean;
  /**
   * @remarks
   * The display log code. The value varies based on your console settings.
   * 
   * @example
   * ${siem.xxx.xxxxxxxxx}
   */
  logMdsCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The log code.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  sourceLogCode?: string;
  /**
   * @remarks
   * The log name.
   * 
   * @example
   * the process startup log
   */
  sourceLogName?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * sas
   */
  sourceProdCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account for threat analysis.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The display name of the Alibaba Cloud account for threat analysis.
   * 
   * @example
   * sas_account_xxx
   */
  subUserName?: string;
  static names(): { [key: string]: string } {
    return {
      cloudCode: 'CloudCode',
      imported: 'Imported',
      logMdsCode: 'LogMdsCode',
      mainUserId: 'MainUserId',
      sourceLogCode: 'SourceLogCode',
      sourceLogName: 'SourceLogName',
      sourceProdCode: 'SourceProdCode',
      subUserId: 'SubUserId',
      subUserName: 'SubUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudCode: 'string',
      imported: 'boolean',
      logMdsCode: 'string',
      mainUserId: 'number',
      sourceLogCode: 'string',
      sourceLogName: 'string',
      sourceProdCode: 'string',
      subUserId: 'number',
      subUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBindAccountResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of the accounts that are modified. The value 1 indicates that the modification is successful, and a value less than or equal to 0 indicates that the modification failed.
   * 
   * @example
   * 1
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of data sources that are modified. The value 1 indicates that the modification is successful, and a value less than or equal to 0 indicates that the modification failed.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The ID of the data source. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      dataSourceInstanceId: 'DataSourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      dataSourceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceLogResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of logs that are modified. The value 1 indicates that the modification is successful, and a value less than or equal to 0 indicates that the modification failed.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The ID of the log. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  logInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      logInstanceId: 'LogInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      logInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostCustomizeRuleResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The risk type.
   * 
   * @example
   * WEBSHELL
   */
  alertType?: string;
  /**
   * @remarks
   * The internal code of the risk type.
   * 
   * @example
   * ${siem_rule_type_process_abnormal_command}
   */
  alertTypeMds?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * 告警附加字段attck
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * 自动化响应规则条件字段数据类型。
   * 
   * @example
   * varchar
   */
  dataType?: number;
  /**
   * @remarks
   * The extended information about event generation. If eventTransferType is set to allToSingle, the value of this parameter indicates the length and unit of the alert aggregation window. The HTML escape characters are reversed.
   * 
   * @example
   * {&quot;time&quot;:&quot;1&quot;,&quot;unit&quot;:&quot;MINUTE&quot;}
   */
  eventTransferExt?: string;
  /**
   * @remarks
   * Indicates whether the system generates an event for the alert. Valid values:
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 1
   */
  eventTransferSwitch?: number;
  /**
   * @remarks
   * The event generation method. Valid values:
   * 
   * *   default: The default method is used.
   * *   singleToSingle: The system generates an event for each alert.
   * *   allToSingle: The system generates an event for alerts within a period of time.
   * 
   * @example
   * allToSingle
   */
  eventTransferType?: string;
  /**
   * @remarks
   * The time when the custom rule was created.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the custom rule was last updated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the custom rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The log source of the rule.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logSource?: string;
  /**
   * @remarks
   * The internal code of the log source.
   * 
   * @example
   * ${sas.cloudsiem.prod.cloud_siem_aegis_sas_alert}
   */
  logSourceMds?: string;
  /**
   * @remarks
   * The log type of the rule.
   * 
   * @example
   * ALERT_ACTIVITY
   */
  logType?: string;
  /**
   * @remarks
   * The internal code of the log type.
   * 
   * @example
   * ${security_event_config.event_name.webshellName_clientav}
   */
  logTypeMds?: string;
  /**
   * @remarks
   * The window length of the rule. The HTML escape characters are reversed.
   * 
   * @example
   * {&quot;time&quot;:&quot;1&quot;,&quot;unit&quot;:&quot;HOUR&quot;}
   */
  queryCycle?: string;
  /**
   * @remarks
   * The query condition of the rule. The value is in the JSON format. The HTML escape characters are reversed.
   * 
   * @example
   * [[{&quot;not&quot;:false,&quot;left&quot;:&quot;alert_name&quot;,&quot;operator&quot;:&quot;=&quot;,&quot;right&quot;:&quot;WEBSHELL&quot;}]]
   */
  ruleCondition?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * this rule is for waf scan
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The log aggregation field of the rule. The value is a JSON string. The HTML escape characters are reversed.
   * 
   * @example
   * [&quot;asset_id&quot;]
   */
  ruleGroup?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * waf_scan
   */
  ruleName?: string;
  /**
   * @remarks
   * The threshold configuration of the rule. The value is in the JSON format. The HTML escape characters are reversed.
   * 
   * @example
   * {&quot;aggregateFunction&quot;:&quot;count&quot;,&quot;aggregateFunctionName&quot;:&quot;count&quot;,&quot;field&quot;:&quot;activity_name&quot;,&quot;operator&quot;:&quot;&lt;=&quot;,&quot;value&quot;:1}
   */
  ruleThreshold?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   predefine
   * *   customize
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The rule status. Valid values:
   * 
   * *   0: The rule is in the initial state.
   * *   10: The simulation data is tested.
   * *   15: The business data is being tested.
   * *   20: The business data test ends.
   * *   100: The rule takes effect.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   serious: high
   * *   suspicious: medium
   * *   remind: low
   * 
   * @example
   * remind
   */
  threatLevel?: string;
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      alertTypeMds: 'AlertTypeMds',
      aliuid: 'Aliuid',
      attCk: 'AttCk',
      dataType: 'DataType',
      eventTransferExt: 'EventTransferExt',
      eventTransferSwitch: 'EventTransferSwitch',
      eventTransferType: 'EventTransferType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      logSource: 'LogSource',
      logSourceMds: 'LogSourceMds',
      logType: 'LogType',
      logTypeMds: 'LogTypeMds',
      queryCycle: 'QueryCycle',
      ruleCondition: 'RuleCondition',
      ruleDesc: 'RuleDesc',
      ruleGroup: 'RuleGroup',
      ruleName: 'RuleName',
      ruleThreshold: 'RuleThreshold',
      ruleType: 'RuleType',
      status: 'Status',
      threatLevel: 'ThreatLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      alertTypeMds: 'string',
      aliuid: 'number',
      attCk: 'string',
      dataType: 'number',
      eventTransferExt: 'string',
      eventTransferSwitch: 'number',
      eventTransferType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      logSource: 'string',
      logSourceMds: 'string',
      logType: 'string',
      logTypeMds: 'string',
      queryCycle: 'string',
      ruleCondition: 'string',
      ruleDesc: 'string',
      ruleGroup: 'string',
      ruleName: 'string',
      ruleThreshold: 'string',
      ruleType: 'string',
      status: 'number',
      threatLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShowQuickAnalysisResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The index fields of the logs.
   */
  indexList?: string[];
  static names(): { [key: string]: string } {
    return {
      indexList: 'IndexList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImportLogTasksResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The number of log collection tasks that are submitted.
   * 
   * @example
   * 10
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloud-siem", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a data source to a cloud account that is added to the threat analysis feature.
   * 
   * @param request - AddDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDataSourceResponse
   */
  async addDataSourceWithOptions(request: AddDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<AddDataSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.dataSourceInstanceName)) {
      body["DataSourceInstanceName"] = request.dataSourceInstanceName;
    }

    if (!Util.isUnset(request.dataSourceInstanceParams)) {
      body["DataSourceInstanceParams"] = request.dataSourceInstanceParams;
    }

    if (!Util.isUnset(request.dataSourceInstanceRemark)) {
      body["DataSourceInstanceRemark"] = request.dataSourceInstanceRemark;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddDataSource",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDataSourceResponse>(await this.callApi(params, req, runtime), new AddDataSourceResponse({}));
  }

  /**
   * Adds a data source to a cloud account that is added to the threat analysis feature.
   * 
   * @param request - AddDataSourceRequest
   * @returns AddDataSourceResponse
   */
  async addDataSource(request: AddDataSourceRequest): Promise<AddDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDataSourceWithOptions(request, runtime);
  }

  /**
   * Adds logs of a cloud account to the threat analysis feature.
   * 
   * @param request - AddDataSourceLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDataSourceLogResponse
   */
  async addDataSourceLogWithOptions(request: AddDataSourceLogRequest, runtime: $Util.RuntimeOptions): Promise<AddDataSourceLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.dataSourceInstanceId)) {
      body["DataSourceInstanceId"] = request.dataSourceInstanceId;
    }

    if (!Util.isUnset(request.dataSourceInstanceLogs)) {
      body["DataSourceInstanceLogs"] = request.dataSourceInstanceLogs;
    }

    if (!Util.isUnset(request.logCode)) {
      body["LogCode"] = request.logCode;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddDataSourceLog",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDataSourceLogResponse>(await this.callApi(params, req, runtime), new AddDataSourceLogResponse({}));
  }

  /**
   * Adds logs of a cloud account to the threat analysis feature.
   * 
   * @param request - AddDataSourceLogRequest
   * @returns AddDataSourceLogResponse
   */
  async addDataSourceLog(request: AddDataSourceLogRequest): Promise<AddDataSourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDataSourceLogWithOptions(request, runtime);
  }

  /**
   * Adds a cloud account to the threat analysis feature for centralized management. After you add the account, you can use the account to perform operations that are supported by the threat analysis feature. For example, you can add logs of the account to the threat analysis feature.
   * 
   * @param request - AddUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserResponse
   */
  async addUserWithOptions(request: AddUserRequest, runtime: $Util.RuntimeOptions): Promise<AddUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addedUserId)) {
      body["AddedUserId"] = request.addedUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddUser",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddUserResponse>(await this.callApi(params, req, runtime), new AddUserResponse({}));
  }

  /**
   * Adds a cloud account to the threat analysis feature for centralized management. After you add the account, you can use the account to perform operations that are supported by the threat analysis feature. For example, you can add logs of the account to the threat analysis feature.
   * 
   * @param request - AddUserRequest
   * @returns AddUserResponse
   */
  async addUser(request: AddUserRequest): Promise<AddUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserWithOptions(request, runtime);
  }

  /**
   * Adds the logs of a cloud service within a cloud account to the threat analysis feature for alert and event anslysis.
   * 
   * @param request - AddUserSourceLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserSourceLogConfigResponse
   */
  async addUserSourceLogConfigWithOptions(request: AddUserSourceLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddUserSourceLogConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deleted)) {
      body["Deleted"] = request.deleted;
    }

    if (!Util.isUnset(request.disPlayLine)) {
      body["DisPlayLine"] = request.disPlayLine;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceLogCode)) {
      body["SourceLogCode"] = request.sourceLogCode;
    }

    if (!Util.isUnset(request.sourceLogInfo)) {
      body["SourceLogInfo"] = request.sourceLogInfo;
    }

    if (!Util.isUnset(request.sourceProdCode)) {
      body["SourceProdCode"] = request.sourceProdCode;
    }

    if (!Util.isUnset(request.subUserId)) {
      body["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddUserSourceLogConfig",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddUserSourceLogConfigResponse>(await this.callApi(params, req, runtime), new AddUserSourceLogConfigResponse({}));
  }

  /**
   * Adds the logs of a cloud service within a cloud account to the threat analysis feature for alert and event anslysis.
   * 
   * @param request - AddUserSourceLogConfigRequest
   * @returns AddUserSourceLogConfigResponse
   */
  async addUserSourceLogConfig(request: AddUserSourceLogConfigRequest): Promise<AddUserSourceLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserSourceLogConfigWithOptions(request, runtime);
  }

  /**
   * Configures log collection tasks based on resource directories.
   * 
   * @param request - BatchJobSubmitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchJobSubmitResponse
   */
  async batchJobSubmitWithOptions(request: BatchJobSubmitRequest, runtime: $Util.RuntimeOptions): Promise<BatchJobSubmitResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jsonConfig)) {
      body["JsonConfig"] = request.jsonConfig;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchJobSubmit",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchJobSubmitResponse>(await this.callApi(params, req, runtime), new BatchJobSubmitResponse({}));
  }

  /**
   * Configures log collection tasks based on resource directories.
   * 
   * @param request - BatchJobSubmitRequest
   * @returns BatchJobSubmitResponse
   */
  async batchJobSubmit(request: BatchJobSubmitRequest): Promise<BatchJobSubmitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchJobSubmitWithOptions(request, runtime);
  }

  /**
   * Adds a third-party cloud account that is displayed on the Multi-cloud assets tab of the Feature Settings page to the threat analysis feature.
   * 
   * @param request - BindAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAccountResponse
   */
  async bindAccountWithOptions(request: BindAccountRequest, runtime: $Util.RuntimeOptions): Promise<BindAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessId)) {
      body["AccessId"] = request.accessId;
    }

    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BindAccount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindAccountResponse>(await this.callApi(params, req, runtime), new BindAccountResponse({}));
  }

  /**
   * Adds a third-party cloud account that is displayed on the Multi-cloud assets tab of the Feature Settings page to the threat analysis feature.
   * 
   * @param request - BindAccountRequest
   * @returns BindAccountResponse
   */
  async bindAccount(request: BindAccountRequest): Promise<BindAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAccountWithOptions(request, runtime);
  }

  /**
   * Disables the log delivery feature for a cloud service.
   * 
   * @param request - CloseDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseDeliveryResponse
   */
  async closeDeliveryWithOptions(request: CloseDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<CloseDeliveryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logCode)) {
      body["LogCode"] = request.logCode;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CloseDelivery",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseDeliveryResponse>(await this.callApi(params, req, runtime), new CloseDeliveryResponse({}));
  }

  /**
   * Disables the log delivery feature for a cloud service.
   * 
   * @param request - CloseDeliveryRequest
   * @returns CloseDeliveryResponse
   */
  async closeDelivery(request: CloseDeliveryRequest): Promise<CloseDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeDeliveryWithOptions(request, runtime);
  }

  /**
   * Deletes the automated response rule with a specified ID.
   * 
   * @param request - DeleteAutomateResponseConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutomateResponseConfigResponse
   */
  async deleteAutomateResponseConfigWithOptions(request: DeleteAutomateResponseConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAutomateResponseConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAutomateResponseConfig",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAutomateResponseConfigResponse>(await this.callApi(params, req, runtime), new DeleteAutomateResponseConfigResponse({}));
  }

  /**
   * Deletes the automated response rule with a specified ID.
   * 
   * @param request - DeleteAutomateResponseConfigRequest
   * @returns DeleteAutomateResponseConfigResponse
   */
  async deleteAutomateResponseConfig(request: DeleteAutomateResponseConfigRequest): Promise<DeleteAutomateResponseConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutomateResponseConfigWithOptions(request, runtime);
  }

  /**
   * Removes a third-party cloud account that is added to the threat analysis feature by using its AccessKey ID. You can add another cloud account based on your business requirements.
   * 
   * @param request - DeleteBindAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBindAccountResponse
   */
  async deleteBindAccountWithOptions(request: DeleteBindAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBindAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessId)) {
      body["AccessId"] = request.accessId;
    }

    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.bindId)) {
      body["BindId"] = request.bindId;
    }

    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBindAccount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBindAccountResponse>(await this.callApi(params, req, runtime), new DeleteBindAccountResponse({}));
  }

  /**
   * Removes a third-party cloud account that is added to the threat analysis feature by using its AccessKey ID. You can add another cloud account based on your business requirements.
   * 
   * @param request - DeleteBindAccountRequest
   * @returns DeleteBindAccountResponse
   */
  async deleteBindAccount(request: DeleteBindAccountRequest): Promise<DeleteBindAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBindAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a rule by rule ID.
   * 
   * @param request - DeleteCustomizeRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomizeRuleResponse
   */
  async deleteCustomizeRuleWithOptions(request: DeleteCustomizeRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomizeRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomizeRule",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomizeRuleResponse>(await this.callApi(params, req, runtime), new DeleteCustomizeRuleResponse({}));
  }

  /**
   * Deletes a rule by rule ID.
   * 
   * @param request - DeleteCustomizeRuleRequest
   * @returns DeleteCustomizeRuleResponse
   */
  async deleteCustomizeRule(request: DeleteCustomizeRuleRequest): Promise<DeleteCustomizeRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomizeRuleWithOptions(request, runtime);
  }

  /**
   * Removes a data source that is no longer required.
   * 
   * @param request - DeleteDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSourceWithOptions(request: DeleteDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.dataSourceInstanceId)) {
      body["DataSourceInstanceId"] = request.dataSourceInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataSource",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataSourceResponse>(await this.callApi(params, req, runtime), new DeleteDataSourceResponse({}));
  }

  /**
   * Removes a data source that is no longer required.
   * 
   * @param request - DeleteDataSourceRequest
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSource(request: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  /**
   * Removes a log.
   * 
   * @param request - DeleteDataSourceLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceLogResponse
   */
  async deleteDataSourceLogWithOptions(request: DeleteDataSourceLogRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.dataSourceInstanceId)) {
      body["DataSourceInstanceId"] = request.dataSourceInstanceId;
    }

    if (!Util.isUnset(request.logInstanceId)) {
      body["LogInstanceId"] = request.logInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataSourceLog",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataSourceLogResponse>(await this.callApi(params, req, runtime), new DeleteDataSourceLogResponse({}));
  }

  /**
   * Removes a log.
   * 
   * @param request - DeleteDataSourceLogRequest
   * @returns DeleteDataSourceLogResponse
   */
  async deleteDataSourceLog(request: DeleteDataSourceLogRequest): Promise<DeleteDataSourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceLogWithOptions(request, runtime);
  }

  /**
   * Removes an Alibaba Cloud account that is added to the threat analysis feature for centralized management. You can add the account to the feature again if required.
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addedUserId)) {
      body["AddedUserId"] = request.addedUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  /**
   * Removes an Alibaba Cloud account that is added to the threat analysis feature for centralized management. You can add the account to the feature again if required.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * Deletes an alert whitelist rule with a specified ID.
   * 
   * @param request - DeleteWhiteRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWhiteRuleListResponse
   */
  async deleteWhiteRuleListWithOptions(request: DeleteWhiteRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWhiteRuleListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWhiteRuleList",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWhiteRuleListResponse>(await this.callApi(params, req, runtime), new DeleteWhiteRuleListResponse({}));
  }

  /**
   * Deletes an alert whitelist rule with a specified ID.
   * 
   * @param request - DeleteWhiteRuleListRequest
   * @returns DeleteWhiteRuleListResponse
   */
  async deleteWhiteRuleList(request: DeleteWhiteRuleListRequest): Promise<DeleteWhiteRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWhiteRuleListWithOptions(request, runtime);
  }

  /**
   * Queries the aggregate functions that are supported for a custom rule.
   * 
   * @param request - DescribeAggregateFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAggregateFunctionResponse
   */
  async describeAggregateFunctionWithOptions(request: DescribeAggregateFunctionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAggregateFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAggregateFunction",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAggregateFunctionResponse>(await this.callApi(params, req, runtime), new DescribeAggregateFunctionResponse({}));
  }

  /**
   * Queries the aggregate functions that are supported for a custom rule.
   * 
   * @param request - DescribeAggregateFunctionRequest
   * @returns DescribeAggregateFunctionResponse
   */
  async describeAggregateFunction(request: DescribeAggregateFunctionRequest): Promise<DescribeAggregateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAggregateFunctionWithOptions(request, runtime);
  }

  /**
   * Queries the scenarios in which an alert needs to be added to the whitelist.
   * 
   * @param request - DescribeAlertSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertSceneResponse
   */
  async describeAlertSceneWithOptions(request: DescribeAlertSceneRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertSceneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertScene",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertSceneResponse>(await this.callApi(params, req, runtime), new DescribeAlertSceneResponse({}));
  }

  /**
   * Queries the scenarios in which an alert needs to be added to the whitelist.
   * 
   * @param request - DescribeAlertSceneRequest
   * @returns DescribeAlertSceneResponse
   */
  async describeAlertScene(request: DescribeAlertSceneRequest): Promise<DescribeAlertSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertSceneWithOptions(request, runtime);
  }

  /**
   * Queries the scenarios and objects that can be added to an alert whitelist rule.
   * 
   * @param request - DescribeAlertSceneByEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertSceneByEventResponse
   */
  async describeAlertSceneByEventWithOptions(request: DescribeAlertSceneByEventRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertSceneByEventResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertSceneByEvent",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertSceneByEventResponse>(await this.callApi(params, req, runtime), new DescribeAlertSceneByEventResponse({}));
  }

  /**
   * Queries the scenarios and objects that can be added to an alert whitelist rule.
   * 
   * @param request - DescribeAlertSceneByEventRequest
   * @returns DescribeAlertSceneByEventResponse
   */
  async describeAlertSceneByEvent(request: DescribeAlertSceneByEventRequest): Promise<DescribeAlertSceneByEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertSceneByEventWithOptions(request, runtime);
  }

  /**
   * Queries alert data sources.
   * 
   * @param request - DescribeAlertSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertSourceResponse
   */
  async describeAlertSourceWithOptions(request: DescribeAlertSourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.level)) {
      body["Level"] = request.level;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertSource",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertSourceResponse>(await this.callApi(params, req, runtime), new DescribeAlertSourceResponse({}));
  }

  /**
   * Queries alert data sources.
   * 
   * @param request - DescribeAlertSourceRequest
   * @returns DescribeAlertSourceResponse
   */
  async describeAlertSource(request: DescribeAlertSourceRequest): Promise<DescribeAlertSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertSourceWithOptions(request, runtime);
  }

  /**
   * Queries the data sources of the alert that is associated with an event.
   * 
   * @param request - DescribeAlertSourceWithEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertSourceWithEventResponse
   */
  async describeAlertSourceWithEventWithOptions(request: DescribeAlertSourceWithEventRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertSourceWithEventResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertSourceWithEvent",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertSourceWithEventResponse>(await this.callApi(params, req, runtime), new DescribeAlertSourceWithEventResponse({}));
  }

  /**
   * Queries the data sources of the alert that is associated with an event.
   * 
   * @param request - DescribeAlertSourceWithEventRequest
   * @returns DescribeAlertSourceWithEventResponse
   */
  async describeAlertSourceWithEvent(request: DescribeAlertSourceWithEventRequest): Promise<DescribeAlertSourceWithEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertSourceWithEventWithOptions(request, runtime);
  }

  /**
   * Queries the threat types that you can select when you create a custom rule.
   * 
   * @param request - DescribeAlertTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertTypeResponse
   */
  async describeAlertTypeWithOptions(request: DescribeAlertTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertTypeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertType",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertTypeResponse>(await this.callApi(params, req, runtime), new DescribeAlertTypeResponse({}));
  }

  /**
   * Queries the threat types that you can select when you create a custom rule.
   * 
   * @param request - DescribeAlertTypeRequest
   * @returns DescribeAlertTypeResponse
   */
  async describeAlertType(request: DescribeAlertTypeRequest): Promise<DescribeAlertTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertTypeWithOptions(request, runtime);
  }

  /**
   * Queries alerts within your account.
   * 
   * @param request - DescribeAlertsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertsResponse
   */
  async describeAlertsWithOptions(request: DescribeAlertsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertTitle)) {
      body["AlertTitle"] = request.alertTitle;
    }

    if (!Util.isUnset(request.alertUuid)) {
      body["AlertUuid"] = request.alertUuid;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.isDefend)) {
      body["IsDefend"] = request.isDefend;
    }

    if (!Util.isUnset(request.level)) {
      body["Level"] = request.level;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.source)) {
      body["Source"] = request.source;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.subUserId)) {
      body["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlerts",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertsResponse>(await this.callApi(params, req, runtime), new DescribeAlertsResponse({}));
  }

  /**
   * Queries alerts within your account.
   * 
   * @param request - DescribeAlertsRequest
   * @returns DescribeAlertsResponse
   */
  async describeAlerts(request: DescribeAlertsRequest): Promise<DescribeAlertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertsWithOptions(request, runtime);
  }

  /**
   * Queries the number of alerts of different severities.
   * 
   * @param request - DescribeAlertsCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertsCountResponse
   */
  async describeAlertsCountWithOptions(request: DescribeAlertsCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertsCountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertsCount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertsCountResponse>(await this.callApi(params, req, runtime), new DescribeAlertsCountResponse({}));
  }

  /**
   * Queries the number of alerts of different severities.
   * 
   * @param request - DescribeAlertsCountRequest
   * @returns DescribeAlertsCountResponse
   */
  async describeAlertsCount(request: DescribeAlertsCountRequest): Promise<DescribeAlertsCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertsCountWithOptions(request, runtime);
  }

  /**
   * Queries the alerts that are associated with an entity.
   * 
   * @param request - DescribeAlertsWithEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertsWithEntityResponse
   */
  async describeAlertsWithEntityWithOptions(request: DescribeAlertsWithEntityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertsWithEntityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.sophonTaskId)) {
      body["SophonTaskId"] = request.sophonTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertsWithEntity",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertsWithEntityResponse>(await this.callApi(params, req, runtime), new DescribeAlertsWithEntityResponse({}));
  }

  /**
   * Queries the alerts that are associated with an entity.
   * 
   * @param request - DescribeAlertsWithEntityRequest
   * @returns DescribeAlertsWithEntityResponse
   */
  async describeAlertsWithEntity(request: DescribeAlertsWithEntityRequest): Promise<DescribeAlertsWithEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertsWithEntityWithOptions(request, runtime);
  }

  /**
   * Queries the alerts that are associated with an event.
   * 
   * @param request - DescribeAlertsWithEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertsWithEventResponse
   */
  async describeAlertsWithEventWithOptions(request: DescribeAlertsWithEventRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertsWithEventResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertTitle)) {
      body["AlertTitle"] = request.alertTitle;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.isDefend)) {
      body["IsDefend"] = request.isDefend;
    }

    if (!Util.isUnset(request.level)) {
      body["Level"] = request.level;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.source)) {
      body["Source"] = request.source;
    }

    if (!Util.isUnset(request.subUserId)) {
      body["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertsWithEvent",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertsWithEventResponse>(await this.callApi(params, req, runtime), new DescribeAlertsWithEventResponse({}));
  }

  /**
   * Queries the alerts that are associated with an event.
   * 
   * @param request - DescribeAlertsWithEventRequest
   * @returns DescribeAlertsWithEventResponse
   */
  async describeAlertsWithEvent(request: DescribeAlertsWithEventRequest): Promise<DescribeAlertsWithEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertsWithEventWithOptions(request, runtime);
  }

  /**
   * Queries the timeline of the alerts that are associated with an event.
   * 
   * @param request - DescribeAttackTimeLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAttackTimeLineResponse
   */
  async describeAttackTimeLineWithOptions(request: DescribeAttackTimeLineRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAttackTimeLineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assetName)) {
      body["AssetName"] = request.assetName;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAttackTimeLine",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAttackTimeLineResponse>(await this.callApi(params, req, runtime), new DescribeAttackTimeLineResponse({}));
  }

  /**
   * Queries the timeline of the alerts that are associated with an event.
   * 
   * @param request - DescribeAttackTimeLineRequest
   * @returns DescribeAttackTimeLineResponse
   */
  async describeAttackTimeLine(request: DescribeAttackTimeLineRequest): Promise<DescribeAttackTimeLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAttackTimeLineWithOptions(request, runtime);
  }

  /**
   * Checks whether the security information and event management (SIEM) system is granted the required permissions to access other cloud resources within your Alibaba Cloud account and whether the AliyunServiceRoleForSasCloudSiem service-linked role is created.
   * 
   * @param request - DescribeAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuthResponse
   */
  async describeAuthWithOptions(request: DescribeAuthRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuthResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAuth",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuthResponse>(await this.callApi(params, req, runtime), new DescribeAuthResponse({}));
  }

  /**
   * Checks whether the security information and event management (SIEM) system is granted the required permissions to access other cloud resources within your Alibaba Cloud account and whether the AliyunServiceRoleForSasCloudSiem service-linked role is created.
   * 
   * @param request - DescribeAuthRequest
   * @returns DescribeAuthResponse
   */
  async describeAuth(request: DescribeAuthRequest): Promise<DescribeAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuthWithOptions(request, runtime);
  }

  /**
   * Queries the number of automated response rules.
   * 
   * @param request - DescribeAutomateResponseConfigCounterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutomateResponseConfigCounterResponse
   */
  async describeAutomateResponseConfigCounterWithOptions(request: DescribeAutomateResponseConfigCounterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutomateResponseConfigCounterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAutomateResponseConfigCounter",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAutomateResponseConfigCounterResponse>(await this.callApi(params, req, runtime), new DescribeAutomateResponseConfigCounterResponse({}));
  }

  /**
   * Queries the number of automated response rules.
   * 
   * @param request - DescribeAutomateResponseConfigCounterRequest
   * @returns DescribeAutomateResponseConfigCounterResponse
   */
  async describeAutomateResponseConfigCounter(request: DescribeAutomateResponseConfigCounterRequest): Promise<DescribeAutomateResponseConfigCounterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutomateResponseConfigCounterWithOptions(request, runtime);
  }

  /**
   * Queries the configurable fields and operators of an automated response rule.
   * 
   * @param request - DescribeAutomateResponseConfigFeatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutomateResponseConfigFeatureResponse
   */
  async describeAutomateResponseConfigFeatureWithOptions(request: DescribeAutomateResponseConfigFeatureRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutomateResponseConfigFeatureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoResponseType)) {
      body["AutoResponseType"] = request.autoResponseType;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAutomateResponseConfigFeature",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAutomateResponseConfigFeatureResponse>(await this.callApi(params, req, runtime), new DescribeAutomateResponseConfigFeatureResponse({}));
  }

  /**
   * Queries the configurable fields and operators of an automated response rule.
   * 
   * @param request - DescribeAutomateResponseConfigFeatureRequest
   * @returns DescribeAutomateResponseConfigFeatureResponse
   */
  async describeAutomateResponseConfigFeature(request: DescribeAutomateResponseConfigFeatureRequest): Promise<DescribeAutomateResponseConfigFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutomateResponseConfigFeatureWithOptions(request, runtime);
  }

  /**
   * Queries user-defined playbooks.
   * 
   * @param request - DescribeAutomateResponseConfigPlayBooksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutomateResponseConfigPlayBooksResponse
   */
  async describeAutomateResponseConfigPlayBooksWithOptions(request: DescribeAutomateResponseConfigPlayBooksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutomateResponseConfigPlayBooksResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoResponseType)) {
      body["AutoResponseType"] = request.autoResponseType;
    }

    if (!Util.isUnset(request.entityType)) {
      body["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAutomateResponseConfigPlayBooks",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAutomateResponseConfigPlayBooksResponse>(await this.callApi(params, req, runtime), new DescribeAutomateResponseConfigPlayBooksResponse({}));
  }

  /**
   * Queries user-defined playbooks.
   * 
   * @param request - DescribeAutomateResponseConfigPlayBooksRequest
   * @returns DescribeAutomateResponseConfigPlayBooksResponse
   */
  async describeAutomateResponseConfigPlayBooks(request: DescribeAutomateResponseConfigPlayBooksRequest): Promise<DescribeAutomateResponseConfigPlayBooksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutomateResponseConfigPlayBooksWithOptions(request, runtime);
  }

  /**
   * Queries the assets that are associated with an event.
   * 
   * @param request - DescribeCloudSiemAssetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudSiemAssetsResponse
   */
  async describeCloudSiemAssetsWithOptions(request: DescribeCloudSiemAssetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudSiemAssetsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assetType)) {
      body["AssetType"] = request.assetType;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudSiemAssets",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudSiemAssetsResponse>(await this.callApi(params, req, runtime), new DescribeCloudSiemAssetsResponse({}));
  }

  /**
   * Queries the assets that are associated with an event.
   * 
   * @param request - DescribeCloudSiemAssetsRequest
   * @returns DescribeCloudSiemAssetsResponse
   */
  async describeCloudSiemAssets(request: DescribeCloudSiemAssetsRequest): Promise<DescribeCloudSiemAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudSiemAssetsWithOptions(request, runtime);
  }

  /**
   * Queries the number of assets that are associated with an event by asset type.
   * 
   * @param request - DescribeCloudSiemAssetsCounterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudSiemAssetsCounterResponse
   */
  async describeCloudSiemAssetsCounterWithOptions(request: DescribeCloudSiemAssetsCounterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudSiemAssetsCounterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudSiemAssetsCounter",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudSiemAssetsCounterResponse>(await this.callApi(params, req, runtime), new DescribeCloudSiemAssetsCounterResponse({}));
  }

  /**
   * Queries the number of assets that are associated with an event by asset type.
   * 
   * @param request - DescribeCloudSiemAssetsCounterRequest
   * @returns DescribeCloudSiemAssetsCounterResponse
   */
  async describeCloudSiemAssetsCounter(request: DescribeCloudSiemAssetsCounterRequest): Promise<DescribeCloudSiemAssetsCounterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudSiemAssetsCounterWithOptions(request, runtime);
  }

  /**
   * Queries the details of an event.
   * 
   * @param request - DescribeCloudSiemEventDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudSiemEventDetailResponse
   */
  async describeCloudSiemEventDetailWithOptions(request: DescribeCloudSiemEventDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudSiemEventDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudSiemEventDetail",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudSiemEventDetailResponse>(await this.callApi(params, req, runtime), new DescribeCloudSiemEventDetailResponse({}));
  }

  /**
   * Queries the details of an event.
   * 
   * @param request - DescribeCloudSiemEventDetailRequest
   * @returns DescribeCloudSiemEventDetailResponse
   */
  async describeCloudSiemEventDetail(request: DescribeCloudSiemEventDetailRequest): Promise<DescribeCloudSiemEventDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudSiemEventDetailWithOptions(request, runtime);
  }

  /**
   * Queries events in SIEM.
   * 
   * @param request - DescribeCloudSiemEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudSiemEventsResponse
   */
  async describeCloudSiemEventsWithOptions(request: DescribeCloudSiemEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudSiemEventsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assetId)) {
      body["AssetId"] = request.assetId;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventName)) {
      body["EventName"] = request.eventName;
    }

    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.order)) {
      body["Order"] = request.order;
    }

    if (!Util.isUnset(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.threadLevel)) {
      body["ThreadLevel"] = request.threadLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudSiemEvents",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudSiemEventsResponse>(await this.callApi(params, req, runtime), new DescribeCloudSiemEventsResponse({}));
  }

  /**
   * Queries events in SIEM.
   * 
   * @param request - DescribeCloudSiemEventsRequest
   * @returns DescribeCloudSiemEventsResponse
   */
  async describeCloudSiemEvents(request: DescribeCloudSiemEventsRequest): Promise<DescribeCloudSiemEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudSiemEventsWithOptions(request, runtime);
  }

  /**
   * Checks whether an Alibaba Cloud service is activated for an Alibaba Cloud account.
   * 
   * @param request - DescribeCsImportedProdStatusByUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCsImportedProdStatusByUserResponse
   */
  async describeCsImportedProdStatusByUserWithOptions(request: DescribeCsImportedProdStatusByUserRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCsImportedProdStatusByUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceLogProd)) {
      body["SourceLogProd"] = request.sourceLogProd;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCsImportedProdStatusByUser",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCsImportedProdStatusByUserResponse>(await this.callApi(params, req, runtime), new DescribeCsImportedProdStatusByUserResponse({}));
  }

  /**
   * Checks whether an Alibaba Cloud service is activated for an Alibaba Cloud account.
   * 
   * @param request - DescribeCsImportedProdStatusByUserRequest
   * @returns DescribeCsImportedProdStatusByUserResponse
   */
  async describeCsImportedProdStatusByUser(request: DescribeCsImportedProdStatusByUserRequest): Promise<DescribeCsImportedProdStatusByUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCsImportedProdStatusByUserWithOptions(request, runtime);
  }

  /**
   * Queries the number of custom rules.
   * 
   * @param request - DescribeCustomizeRuleCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomizeRuleCountResponse
   */
  async describeCustomizeRuleCountWithOptions(request: DescribeCustomizeRuleCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomizeRuleCountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomizeRuleCount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomizeRuleCountResponse>(await this.callApi(params, req, runtime), new DescribeCustomizeRuleCountResponse({}));
  }

  /**
   * Queries the number of custom rules.
   * 
   * @param request - DescribeCustomizeRuleCountRequest
   * @returns DescribeCustomizeRuleCountResponse
   */
  async describeCustomizeRuleCount(request: DescribeCustomizeRuleCountRequest): Promise<DescribeCustomizeRuleCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomizeRuleCountWithOptions(request, runtime);
  }

  /**
   * Queries the historical simulation data that is used in a simulation test scenario.
   * 
   * @param request - DescribeCustomizeRuleTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomizeRuleTestResponse
   */
  async describeCustomizeRuleTestWithOptions(request: DescribeCustomizeRuleTestRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomizeRuleTestResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomizeRuleTest",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomizeRuleTestResponse>(await this.callApi(params, req, runtime), new DescribeCustomizeRuleTestResponse({}));
  }

  /**
   * Queries the historical simulation data that is used in a simulation test scenario.
   * 
   * @param request - DescribeCustomizeRuleTestRequest
   * @returns DescribeCustomizeRuleTestResponse
   */
  async describeCustomizeRuleTest(request: DescribeCustomizeRuleTestRequest): Promise<DescribeCustomizeRuleTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomizeRuleTestWithOptions(request, runtime);
  }

  /**
   * Queries the chart that displays the test results of business data for a custom rule.
   * 
   * @param request - DescribeCustomizeRuleTestHistogramRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomizeRuleTestHistogramResponse
   */
  async describeCustomizeRuleTestHistogramWithOptions(request: DescribeCustomizeRuleTestHistogramRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomizeRuleTestHistogramResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomizeRuleTestHistogram",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomizeRuleTestHistogramResponse>(await this.callApi(params, req, runtime), new DescribeCustomizeRuleTestHistogramResponse({}));
  }

  /**
   * Queries the chart that displays the test results of business data for a custom rule.
   * 
   * @param request - DescribeCustomizeRuleTestHistogramRequest
   * @returns DescribeCustomizeRuleTestHistogramResponse
   */
  async describeCustomizeRuleTestHistogram(request: DescribeCustomizeRuleTestHistogramRequest): Promise<DescribeCustomizeRuleTestHistogramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomizeRuleTestHistogramWithOptions(request, runtime);
  }

  /**
   * Queries the details of a data source.
   * 
   * @param request - DescribeDataSourceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataSourceInstanceResponse
   */
  async describeDataSourceInstanceWithOptions(request: DescribeDataSourceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataSourceInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.dataSourceInstanceId)) {
      body["DataSourceInstanceId"] = request.dataSourceInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataSourceInstance",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataSourceInstanceResponse>(await this.callApi(params, req, runtime), new DescribeDataSourceInstanceResponse({}));
  }

  /**
   * Queries the details of a data source.
   * 
   * @param request - DescribeDataSourceInstanceRequest
   * @returns DescribeDataSourceInstanceResponse
   */
  async describeDataSourceInstance(request: DescribeDataSourceInstanceRequest): Promise<DescribeDataSourceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataSourceInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the parameters of a data source.
   * 
   * @param request - DescribeDataSourceParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataSourceParametersResponse
   */
  async describeDataSourceParametersWithOptions(request: DescribeDataSourceParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataSourceParametersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataSourceParameters",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataSourceParametersResponse>(await this.callApi(params, req, runtime), new DescribeDataSourceParametersResponse({}));
  }

  /**
   * Queries the parameters of a data source.
   * 
   * @param request - DescribeDataSourceParametersRequest
   * @returns DescribeDataSourceParametersResponse
   */
  async describeDataSourceParameters(request: DescribeDataSourceParametersRequest): Promise<DescribeDataSourceParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataSourceParametersWithOptions(request, runtime);
  }

  /**
   * Queries the list of entities and playbooks that need to be handled.
   * 
   * @param request - DescribeDisposeAndPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDisposeAndPlaybookResponse
   */
  async describeDisposeAndPlaybookWithOptions(request: DescribeDisposeAndPlaybookRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDisposeAndPlaybookResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.entityType)) {
      body["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDisposeAndPlaybook",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDisposeAndPlaybookResponse>(await this.callApi(params, req, runtime), new DescribeDisposeAndPlaybookResponse({}));
  }

  /**
   * Queries the list of entities and playbooks that need to be handled.
   * 
   * @param request - DescribeDisposeAndPlaybookRequest
   * @returns DescribeDisposeAndPlaybookResponse
   */
  async describeDisposeAndPlaybook(request: DescribeDisposeAndPlaybookRequest): Promise<DescribeDisposeAndPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDisposeAndPlaybookWithOptions(request, runtime);
  }

  /**
   * Queries the list of playbooks that are used by a handling policy.
   * 
   * @param request - DescribeDisposeStrategyPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDisposeStrategyPlaybookResponse
   */
  async describeDisposeStrategyPlaybookWithOptions(request: DescribeDisposeStrategyPlaybookRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDisposeStrategyPlaybookResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDisposeStrategyPlaybook",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDisposeStrategyPlaybookResponse>(await this.callApi(params, req, runtime), new DescribeDisposeStrategyPlaybookResponse({}));
  }

  /**
   * Queries the list of playbooks that are used by a handling policy.
   * 
   * @param request - DescribeDisposeStrategyPlaybookRequest
   * @returns DescribeDisposeStrategyPlaybookResponse
   */
  async describeDisposeStrategyPlaybook(request: DescribeDisposeStrategyPlaybookRequest): Promise<DescribeDisposeStrategyPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDisposeStrategyPlaybookWithOptions(request, runtime);
  }

  /**
   * Queries the details of an entity.
   * 
   * @param request - DescribeEntityInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEntityInfoResponse
   */
  async describeEntityInfoWithOptions(request: DescribeEntityInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEntityInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.entityIdentity)) {
      body["EntityIdentity"] = request.entityIdentity;
    }

    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.sophonTaskId)) {
      body["SophonTaskId"] = request.sophonTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEntityInfo",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEntityInfoResponse>(await this.callApi(params, req, runtime), new DescribeEntityInfoResponse({}));
  }

  /**
   * Queries the details of an entity.
   * 
   * @param request - DescribeEntityInfoRequest
   * @returns DescribeEntityInfoResponse
   */
  async describeEntityInfo(request: DescribeEntityInfoRequest): Promise<DescribeEntityInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEntityInfoWithOptions(request, runtime);
  }

  /**
   * Queries the number of events by type.
   * 
   * @param request - DescribeEventCountByThreatLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventCountByThreatLevelResponse
   */
  async describeEventCountByThreatLevelWithOptions(request: DescribeEventCountByThreatLevelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventCountByThreatLevelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventCountByThreatLevel",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventCountByThreatLevelResponse>(await this.callApi(params, req, runtime), new DescribeEventCountByThreatLevelResponse({}));
  }

  /**
   * Queries the number of events by type.
   * 
   * @param request - DescribeEventCountByThreatLevelRequest
   * @returns DescribeEventCountByThreatLevelResponse
   */
  async describeEventCountByThreatLevel(request: DescribeEventCountByThreatLevelRequest): Promise<DescribeEventCountByThreatLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventCountByThreatLevelWithOptions(request, runtime);
  }

  /**
   * Queries the handling policies of a historical event.
   * 
   * @param request - DescribeEventDisposeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventDisposeResponse
   */
  async describeEventDisposeWithOptions(request: DescribeEventDisposeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventDisposeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventDispose",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventDisposeResponse>(await this.callApi(params, req, runtime), new DescribeEventDisposeResponse({}));
  }

  /**
   * Queries the handling policies of a historical event.
   * 
   * @param request - DescribeEventDisposeRequest
   * @returns DescribeEventDisposeResponse
   */
  async describeEventDispose(request: DescribeEventDisposeRequest): Promise<DescribeEventDisposeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventDisposeWithOptions(request, runtime);
  }

  /**
   * Queries the number of logs that are added to the threat analysis feature.
   * 
   * @param request - DescribeImportedLogCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImportedLogCountResponse
   */
  async describeImportedLogCountWithOptions(request: DescribeImportedLogCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImportedLogCountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImportedLogCount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImportedLogCountResponse>(await this.callApi(params, req, runtime), new DescribeImportedLogCountResponse({}));
  }

  /**
   * Queries the number of logs that are added to the threat analysis feature.
   * 
   * @param request - DescribeImportedLogCountRequest
   * @returns DescribeImportedLogCountResponse
   */
  async describeImportedLogCount(request: DescribeImportedLogCountRequest): Promise<DescribeImportedLogCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImportedLogCountWithOptions(request, runtime);
  }

  /**
   * Queries the status of collection tasks by using the submitId parameter of the tasks.
   * 
   * @param request - DescribeJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobStatusResponse
   */
  async describeJobStatusWithOptions(request: DescribeJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.submitId)) {
      body["SubmitId"] = request.submitId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeJobStatus",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobStatusResponse>(await this.callApi(params, req, runtime), new DescribeJobStatusResponse({}));
  }

  /**
   * Queries the status of collection tasks by using the submitId parameter of the tasks.
   * 
   * @param request - DescribeJobStatusRequest
   * @returns DescribeJobStatusResponse
   */
  async describeJobStatus(request: DescribeJobStatusRequest): Promise<DescribeJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobStatusWithOptions(request, runtime);
  }

  /**
   * Queries the fields that can be configured for a custom rule.
   * 
   * @param request - DescribeLogFieldsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogFieldsResponse
   */
  async describeLogFieldsWithOptions(request: DescribeLogFieldsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogFieldsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logSource)) {
      body["LogSource"] = request.logSource;
    }

    if (!Util.isUnset(request.logType)) {
      body["LogType"] = request.logType;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogFields",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogFieldsResponse>(await this.callApi(params, req, runtime), new DescribeLogFieldsResponse({}));
  }

  /**
   * Queries the fields that can be configured for a custom rule.
   * 
   * @param request - DescribeLogFieldsRequest
   * @returns DescribeLogFieldsResponse
   */
  async describeLogFields(request: DescribeLogFieldsRequest): Promise<DescribeLogFieldsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogFieldsWithOptions(request, runtime);
  }

  /**
   * Queries the log sources that can be configured for a custom rule.
   * 
   * @param request - DescribeLogSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogSourceResponse
   */
  async describeLogSourceWithOptions(request: DescribeLogSourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logType)) {
      body["LogType"] = request.logType;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogSource",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogSourceResponse>(await this.callApi(params, req, runtime), new DescribeLogSourceResponse({}));
  }

  /**
   * Queries the log sources that can be configured for a custom rule.
   * 
   * @param request - DescribeLogSourceRequest
   * @returns DescribeLogSourceResponse
   */
  async describeLogSource(request: DescribeLogSourceRequest): Promise<DescribeLogSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogSourceWithOptions(request, runtime);
  }

  /**
   * Queries the information about a Logstore that is used in the threat analysis feature of Simple Log Service on the user side. The information may be the Logstore name or the time-to-live (TTL) period of data in the Logstore.
   * 
   * @param request - DescribeLogStoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogStoreResponse
   */
  async describeLogStoreWithOptions(request: DescribeLogStoreRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogStoreResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogStore",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogStoreResponse>(await this.callApi(params, req, runtime), new DescribeLogStoreResponse({}));
  }

  /**
   * Queries the information about a Logstore that is used in the threat analysis feature of Simple Log Service on the user side. The information may be the Logstore name or the time-to-live (TTL) period of data in the Logstore.
   * 
   * @param request - DescribeLogStoreRequest
   * @returns DescribeLogStoreResponse
   */
  async describeLogStore(request: DescribeLogStoreRequest): Promise<DescribeLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogStoreWithOptions(request, runtime);
  }

  /**
   * Queries the log types that can be configured for a custom rule.
   * 
   * @param request - DescribeLogTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogTypeResponse
   */
  async describeLogTypeWithOptions(request: DescribeLogTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogTypeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogType",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogTypeResponse>(await this.callApi(params, req, runtime), new DescribeLogTypeResponse({}));
  }

  /**
   * Queries the log types that can be configured for a custom rule.
   * 
   * @param request - DescribeLogTypeRequest
   * @returns DescribeLogTypeResponse
   */
  async describeLogType(request: DescribeLogTypeRequest): Promise<DescribeLogTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogTypeWithOptions(request, runtime);
  }

  /**
   * Queries the operator of a custom rule.
   * 
   * @param request - DescribeOperatorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOperatorsResponse
   */
  async describeOperatorsWithOptions(request: DescribeOperatorsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOperatorsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.sceneType)) {
      body["SceneType"] = request.sceneType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOperators",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOperatorsResponse>(await this.callApi(params, req, runtime), new DescribeOperatorsResponse({}));
  }

  /**
   * Queries the operator of a custom rule.
   * 
   * @param request - DescribeOperatorsRequest
   * @returns DescribeOperatorsResponse
   */
  async describeOperators(request: DescribeOperatorsRequest): Promise<DescribeOperatorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOperatorsWithOptions(request, runtime);
  }

  /**
   * Queries the number of services that can be added to the threat analysis feature in Alibaba Cloud, Tenant Cloud, and Huawei Cloud.
   * 
   * @param request - DescribeProdCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProdCountResponse
   */
  async describeProdCountWithOptions(request: DescribeProdCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProdCountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProdCount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProdCountResponse>(await this.callApi(params, req, runtime), new DescribeProdCountResponse({}));
  }

  /**
   * Queries the number of services that can be added to the threat analysis feature in Alibaba Cloud, Tenant Cloud, and Huawei Cloud.
   * 
   * @param request - DescribeProdCountRequest
   * @returns DescribeProdCountResponse
   */
  async describeProdCount(request: DescribeProdCountRequest): Promise<DescribeProdCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProdCountWithOptions(request, runtime);
  }

  /**
   * Queries the list of users in the playbook scope.
   * 
   * @param request - DescribeScopeUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScopeUsersResponse
   */
  async describeScopeUsersWithOptions(request: DescribeScopeUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScopeUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScopeUsers",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScopeUsersResponse>(await this.callApi(params, req, runtime), new DescribeScopeUsersResponse({}));
  }

  /**
   * Queries the list of users in the playbook scope.
   * 
   * @param request - DescribeScopeUsersRequest
   * @returns DescribeScopeUsersResponse
   */
  async describeScopeUsers(request: DescribeScopeUsersRequest): Promise<DescribeScopeUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScopeUsersWithOptions(request, runtime);
  }

  /**
   * Checks whether the threat analysis feature is authorized to access a resource directory.
   * 
   * @param request - DescribeServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceStatusResponse
   */
  async describeServiceStatusWithOptions(request: DescribeServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceStatus",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceStatusResponse>(await this.callApi(params, req, runtime), new DescribeServiceStatusResponse({}));
  }

  /**
   * Checks whether the threat analysis feature is authorized to access a resource directory.
   * 
   * @param request - DescribeServiceStatusRequest
   * @returns DescribeServiceStatusResponse
   */
  async describeServiceStatus(request: DescribeServiceStatusRequest): Promise<DescribeServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the status of the Logstores for the threat analysis feature in Simple Log Service on the user side.
   * 
   * @param request - DescribeStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStorageResponse
   */
  async describeStorageWithOptions(request: DescribeStorageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStorageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStorage",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStorageResponse>(await this.callApi(params, req, runtime), new DescribeStorageResponse({}));
  }

  /**
   * Queries the status of the Logstores for the threat analysis feature in Simple Log Service on the user side.
   * 
   * @param request - DescribeStorageRequest
   * @returns DescribeStorageResponse
   */
  async describeStorage(request: DescribeStorageRequest): Promise<DescribeStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStorageWithOptions(request, runtime);
  }

  /**
   * Checks whether the current Alibaba Cloud account or the management account of a resource directory is used to purchase the threat analysis feature.
   * 
   * @param request - DescribeUserBuyStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserBuyStatusResponse
   */
  async describeUserBuyStatusWithOptions(request: DescribeUserBuyStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserBuyStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.subUserId)) {
      body["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserBuyStatus",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserBuyStatusResponse>(await this.callApi(params, req, runtime), new DescribeUserBuyStatusResponse({}));
  }

  /**
   * Checks whether the current Alibaba Cloud account or the management account of a resource directory is used to purchase the threat analysis feature.
   * 
   * @param request - DescribeUserBuyStatusRequest
   * @returns DescribeUserBuyStatusResponse
   */
  async describeUserBuyStatus(request: DescribeUserBuyStatusRequest): Promise<DescribeUserBuyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserBuyStatusWithOptions(request, runtime);
  }

  /**
   * Queries the protected domain names of the WAF instance for a user to which an entity belongs.
   * 
   * @param request - DescribeWafScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWafScopeResponse
   */
  async describeWafScopeWithOptions(request: DescribeWafScopeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWafScopeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWafScope",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWafScopeResponse>(await this.callApi(params, req, runtime), new DescribeWafScopeResponse({}));
  }

  /**
   * Queries the protected domain names of the WAF instance for a user to which an entity belongs.
   * 
   * @param request - DescribeWafScopeRequest
   * @returns DescribeWafScopeResponse
   */
  async describeWafScope(request: DescribeWafScopeRequest): Promise<DescribeWafScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWafScopeWithOptions(request, runtime);
  }

  /**
   * Queries a list of whitelist rules for alerts.
   * 
   * @param request - DescribeWhiteRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWhiteRuleListResponse
   */
  async describeWhiteRuleListWithOptions(request: DescribeWhiteRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWhiteRuleListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertName)) {
      body["AlertName"] = request.alertName;
    }

    if (!Util.isUnset(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWhiteRuleList",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWhiteRuleListResponse>(await this.callApi(params, req, runtime), new DescribeWhiteRuleListResponse({}));
  }

  /**
   * Queries a list of whitelist rules for alerts.
   * 
   * @param request - DescribeWhiteRuleListRequest
   * @returns DescribeWhiteRuleListResponse
   */
  async describeWhiteRuleList(request: DescribeWhiteRuleListRequest): Promise<DescribeWhiteRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWhiteRuleListWithOptions(request, runtime);
  }

  /**
   * Queries and analyzes the distribution of specific fields by using quick analysis.
   * 
   * @param request - DoQuickFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DoQuickFieldResponse
   */
  async doQuickFieldWithOptions(request: DoQuickFieldRequest, runtime: $Util.RuntimeOptions): Promise<DoQuickFieldResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.from)) {
      body["From"] = request.from;
    }

    if (!Util.isUnset(request.index)) {
      body["Index"] = request.index;
    }

    if (!Util.isUnset(request.page)) {
      body["Page"] = request.page;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.reverse)) {
      body["Reverse"] = request.reverse;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.to)) {
      body["To"] = request.to;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DoQuickField",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DoQuickFieldResponse>(await this.callApi(params, req, runtime), new DoQuickFieldResponse({}));
  }

  /**
   * Queries and analyzes the distribution of specific fields by using quick analysis.
   * 
   * @param request - DoQuickFieldRequest
   * @returns DoQuickFieldResponse
   */
  async doQuickField(request: DoQuickFieldRequest): Promise<DoQuickFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doQuickFieldWithOptions(request, runtime);
  }

  /**
   * Grants permissions to or revokes permissions from a regular member on the threat analysis feature. This helps manage the authorization to view information such as log analysis and alerts.
   * 
   * @param request - DoSelfDelegateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DoSelfDelegateResponse
   */
  async doSelfDelegateWithOptions(request: DoSelfDelegateRequest, runtime: $Util.RuntimeOptions): Promise<DoSelfDelegateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliUid)) {
      body["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.delegateOrNot)) {
      body["DelegateOrNot"] = request.delegateOrNot;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DoSelfDelegate",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DoSelfDelegateResponse>(await this.callApi(params, req, runtime), new DoSelfDelegateResponse({}));
  }

  /**
   * Grants permissions to or revokes permissions from a regular member on the threat analysis feature. This helps manage the authorization to view information such as log analysis and alerts.
   * 
   * @param request - DoSelfDelegateRequest
   * @returns DoSelfDelegateResponse
   */
  async doSelfDelegate(request: DoSelfDelegateRequest): Promise<DoSelfDelegateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doSelfDelegateWithOptions(request, runtime);
  }

  /**
   * Creates a service-linked role named AliyunServiceRoleForSasCloudSiem for the threat analysis feature. The feature can assume this role to access cloud services.
   * 
   * @param request - EnableAccessForCloudSiemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAccessForCloudSiemResponse
   */
  async enableAccessForCloudSiemWithOptions(request: EnableAccessForCloudSiemRequest, runtime: $Util.RuntimeOptions): Promise<EnableAccessForCloudSiemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoSubmit)) {
      body["AutoSubmit"] = request.autoSubmit;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableAccessForCloudSiem",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableAccessForCloudSiemResponse>(await this.callApi(params, req, runtime), new EnableAccessForCloudSiemResponse({}));
  }

  /**
   * Creates a service-linked role named AliyunServiceRoleForSasCloudSiem for the threat analysis feature. The feature can assume this role to access cloud services.
   * 
   * @param request - EnableAccessForCloudSiemRequest
   * @returns EnableAccessForCloudSiemResponse
   */
  async enableAccessForCloudSiem(request: EnableAccessForCloudSiemRequest): Promise<EnableAccessForCloudSiemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableAccessForCloudSiemWithOptions(request, runtime);
  }

  /**
   * Authorizes the threat analysis feature to access a resource directory. This operation must be called by the management account of the resource directory.
   * 
   * @param request - EnableServiceForCloudSiemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableServiceForCloudSiemResponse
   */
  async enableServiceForCloudSiemWithOptions(request: EnableServiceForCloudSiemRequest, runtime: $Util.RuntimeOptions): Promise<EnableServiceForCloudSiemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableServiceForCloudSiem",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableServiceForCloudSiemResponse>(await this.callApi(params, req, runtime), new EnableServiceForCloudSiemResponse({}));
  }

  /**
   * Authorizes the threat analysis feature to access a resource directory. This operation must be called by the management account of the resource directory.
   * 
   * @param request - EnableServiceForCloudSiemRequest
   * @returns EnableServiceForCloudSiemResponse
   */
  async enableServiceForCloudSiem(request: EnableServiceForCloudSiemRequest): Promise<EnableServiceForCloudSiemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableServiceForCloudSiemWithOptions(request, runtime);
  }

  /**
   * Queries the storage capacity usage of the threat analysis feature and the purchased storage capacity
   * 
   * @param request - GetCapacityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCapacityResponse
   */
  async getCapacityWithOptions(request: GetCapacityRequest, runtime: $Util.RuntimeOptions): Promise<GetCapacityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCapacity",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCapacityResponse>(await this.callApi(params, req, runtime), new GetCapacityResponse({}));
  }

  /**
   * Queries the storage capacity usage of the threat analysis feature and the purchased storage capacity
   * 
   * @param request - GetCapacityRequest
   * @returns GetCapacityResponse
   */
  async getCapacity(request: GetCapacityRequest): Promise<GetCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCapacityWithOptions(request, runtime);
  }

  /**
   * Queries the results of of search statements that are displayed in histograms.
   * 
   * @param request - GetHistogramsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHistogramsResponse
   */
  async getHistogramsWithOptions(request: GetHistogramsRequest, runtime: $Util.RuntimeOptions): Promise<GetHistogramsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.from)) {
      body["From"] = request.from;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.to)) {
      body["To"] = request.to;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetHistograms",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHistogramsResponse>(await this.callApi(params, req, runtime), new GetHistogramsResponse({}));
  }

  /**
   * Queries the results of of search statements that are displayed in histograms.
   * 
   * @param request - GetHistogramsRequest
   * @returns GetHistogramsResponse
   */
  async getHistograms(request: GetHistogramsRequest): Promise<GetHistogramsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHistogramsWithOptions(request, runtime);
  }

  /**
   * Queries the results of a log query by using SQL statements.
   * 
   * @param request - GetLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogsResponse
   */
  async getLogsWithOptions(request: GetLogsRequest, runtime: $Util.RuntimeOptions): Promise<GetLogsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.from)) {
      body["From"] = request.from;
    }

    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.reverseOrNot)) {
      body["ReverseOrNot"] = request.reverseOrNot;
    }

    if (!Util.isUnset(request.to)) {
      body["To"] = request.to;
    }

    if (!Util.isUnset(request.total)) {
      body["Total"] = request.total;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLogs",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLogsResponse>(await this.callApi(params, req, runtime), new GetLogsResponse({}));
  }

  /**
   * Queries the results of a log query by using SQL statements.
   * 
   * @param request - GetLogsRequest
   * @returns GetLogsResponse
   */
  async getLogs(request: GetLogsRequest): Promise<GetLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogsWithOptions(request, runtime);
  }

  /**
   * Queries a query statement that is saved as a saved search in log analysis by name.
   * 
   * @param request - GetQuickQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuickQueryResponse
   */
  async getQuickQueryWithOptions(request: GetQuickQueryRequest, runtime: $Util.RuntimeOptions): Promise<GetQuickQueryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.searchName)) {
      body["SearchName"] = request.searchName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetQuickQuery",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQuickQueryResponse>(await this.callApi(params, req, runtime), new GetQuickQueryResponse({}));
  }

  /**
   * Queries a query statement that is saved as a saved search in log analysis by name.
   * 
   * @param request - GetQuickQueryRequest
   * @returns GetQuickQueryResponse
   */
  async getQuickQuery(request: GetQuickQueryRequest): Promise<GetQuickQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQuickQueryWithOptions(request, runtime);
  }

  /**
   * Queries the storage configurations for the threat analysis feature on the user side.
   * 
   * @param request - GetStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStorageResponse
   */
  async getStorageWithOptions(request: GetStorageRequest, runtime: $Util.RuntimeOptions): Promise<GetStorageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetStorage",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStorageResponse>(await this.callApi(params, req, runtime), new GetStorageResponse({}));
  }

  /**
   * Queries the storage configurations for the threat analysis feature on the user side.
   * 
   * @param request - GetStorageRequest
   * @returns GetStorageResponse
   */
  async getStorage(request: GetStorageRequest): Promise<GetStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStorageWithOptions(request, runtime);
  }

  /**
   * Queries a list of AccessKey IDs of third-party cloud accounts that are added to the threat analysis feature.
   * 
   * @param request - ListAccountAccessIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountAccessIdResponse
   */
  async listAccountAccessIdWithOptions(request: ListAccountAccessIdRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountAccessIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAccountAccessId",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccountAccessIdResponse>(await this.callApi(params, req, runtime), new ListAccountAccessIdResponse({}));
  }

  /**
   * Queries a list of AccessKey IDs of third-party cloud accounts that are added to the threat analysis feature.
   * 
   * @param request - ListAccountAccessIdRequest
   * @returns ListAccountAccessIdResponse
   */
  async listAccountAccessId(request: ListAccountAccessIdRequest): Promise<ListAccountAccessIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountAccessIdWithOptions(request, runtime);
  }

  /**
   * Query accounts by log.
   * 
   * @param request - ListAccountsByLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountsByLogResponse
   */
  async listAccountsByLogWithOptions(request: ListAccountsByLogRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountsByLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.logCodes)) {
      body["LogCodes"] = request.logCodes;
    }

    if (!Util.isUnset(request.prodCode)) {
      body["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAccountsByLog",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccountsByLogResponse>(await this.callApi(params, req, runtime), new ListAccountsByLogResponse({}));
  }

  /**
   * Query accounts by log.
   * 
   * @param request - ListAccountsByLogRequest
   * @returns ListAccountsByLogResponse
   */
  async listAccountsByLog(request: ListAccountsByLogRequest): Promise<ListAccountsByLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountsByLogWithOptions(request, runtime);
  }

  /**
   * Queries a list of cloud services that can be added to the threat analysis feature.
   * 
   * @param request - ListAllProdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllProdsResponse
   */
  async listAllProdsWithOptions(request: ListAllProdsRequest, runtime: $Util.RuntimeOptions): Promise<ListAllProdsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAllProds",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAllProdsResponse>(await this.callApi(params, req, runtime), new ListAllProdsResponse({}));
  }

  /**
   * Queries a list of cloud services that can be added to the threat analysis feature.
   * 
   * @param request - ListAllProdsRequest
   * @returns ListAllProdsResponse
   */
  async listAllProds(request: ListAllProdsRequest): Promise<ListAllProdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAllProdsWithOptions(request, runtime);
  }

  /**
   * Queries automated response rules.
   * 
   * @param request - ListAutomateResponseConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAutomateResponseConfigsResponse
   */
  async listAutomateResponseConfigsWithOptions(request: ListAutomateResponseConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListAutomateResponseConfigsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionType)) {
      body["ActionType"] = request.actionType;
    }

    if (!Util.isUnset(request.autoResponseType)) {
      body["AutoResponseType"] = request.autoResponseType;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.subUserId)) {
      body["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAutomateResponseConfigs",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAutomateResponseConfigsResponse>(await this.callApi(params, req, runtime), new ListAutomateResponseConfigsResponse({}));
  }

  /**
   * Queries automated response rules.
   * 
   * @param request - ListAutomateResponseConfigsRequest
   * @returns ListAutomateResponseConfigsResponse
   */
  async listAutomateResponseConfigs(request: ListAutomateResponseConfigsRequest): Promise<ListAutomateResponseConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAutomateResponseConfigsWithOptions(request, runtime);
  }

  /**
   * Queries a list of cloud accounts that are added to the threat analysis feature.
   * 
   * @param request - ListBindAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBindAccountResponse
   */
  async listBindAccountWithOptions(request: ListBindAccountRequest, runtime: $Util.RuntimeOptions): Promise<ListBindAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListBindAccount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBindAccountResponse>(await this.callApi(params, req, runtime), new ListBindAccountResponse({}));
  }

  /**
   * Queries a list of cloud accounts that are added to the threat analysis feature.
   * 
   * @param request - ListBindAccountRequest
   * @returns ListBindAccountResponse
   */
  async listBindAccount(request: ListBindAccountRequest): Promise<ListBindAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBindAccountWithOptions(request, runtime);
  }

  /**
   * Queries a list of data sources that are added to the threat analysis feature.
   * 
   * @param request - ListBindDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBindDataSourcesResponse
   */
  async listBindDataSourcesWithOptions(request: ListBindDataSourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListBindDataSourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListBindDataSources",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBindDataSourcesResponse>(await this.callApi(params, req, runtime), new ListBindDataSourcesResponse({}));
  }

  /**
   * Queries a list of data sources that are added to the threat analysis feature.
   * 
   * @param request - ListBindDataSourcesRequest
   * @returns ListBindDataSourcesResponse
   */
  async listBindDataSources(request: ListBindDataSourcesRequest): Promise<ListBindDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBindDataSourcesWithOptions(request, runtime);
  }

  /**
   * Queries custom rules.
   * 
   * @param request - ListCloudSiemCustomizeRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudSiemCustomizeRulesResponse
   */
  async listCloudSiemCustomizeRulesWithOptions(request: ListCloudSiemCustomizeRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListCloudSiemCustomizeRulesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.order)) {
      body["Order"] = request.order;
    }

    if (!Util.isUnset(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.threatLevel)) {
      body["ThreatLevel"] = request.threatLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCloudSiemCustomizeRules",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCloudSiemCustomizeRulesResponse>(await this.callApi(params, req, runtime), new ListCloudSiemCustomizeRulesResponse({}));
  }

  /**
   * Queries custom rules.
   * 
   * @param request - ListCloudSiemCustomizeRulesRequest
   * @returns ListCloudSiemCustomizeRulesResponse
   */
  async listCloudSiemCustomizeRules(request: ListCloudSiemCustomizeRulesRequest): Promise<ListCloudSiemCustomizeRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCloudSiemCustomizeRulesWithOptions(request, runtime);
  }

  /**
   * Queries predefined rules.
   * 
   * @param request - ListCloudSiemPredefinedRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudSiemPredefinedRulesResponse
   */
  async listCloudSiemPredefinedRulesWithOptions(request: ListCloudSiemPredefinedRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListCloudSiemPredefinedRulesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!Util.isUnset(request.attCk)) {
      body["AttCk"] = request.attCk;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventTransferType)) {
      body["EventTransferType"] = request.eventTransferType;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.logSource)) {
      body["LogSource"] = request.logSource;
    }

    if (!Util.isUnset(request.order)) {
      body["Order"] = request.order;
    }

    if (!Util.isUnset(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.threatLevel)) {
      body["ThreatLevel"] = request.threatLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCloudSiemPredefinedRules",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCloudSiemPredefinedRulesResponse>(await this.callApi(params, req, runtime), new ListCloudSiemPredefinedRulesResponse({}));
  }

  /**
   * Queries predefined rules.
   * 
   * @param request - ListCloudSiemPredefinedRulesRequest
   * @returns ListCloudSiemPredefinedRulesResponse
   */
  async listCloudSiemPredefinedRules(request: ListCloudSiemPredefinedRulesRequest): Promise<ListCloudSiemPredefinedRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCloudSiemPredefinedRulesWithOptions(request, runtime);
  }

  /**
   * Queries the test results of a custom rule.
   * 
   * @param request - ListCustomizeRuleTestResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomizeRuleTestResultResponse
   */
  async listCustomizeRuleTestResultWithOptions(request: ListCustomizeRuleTestResultRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomizeRuleTestResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCustomizeRuleTestResult",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomizeRuleTestResultResponse>(await this.callApi(params, req, runtime), new ListCustomizeRuleTestResultResponse({}));
  }

  /**
   * Queries the test results of a custom rule.
   * 
   * @param request - ListCustomizeRuleTestResultRequest
   * @returns ListCustomizeRuleTestResultResponse
   */
  async listCustomizeRuleTestResult(request: ListCustomizeRuleTestResultRequest): Promise<ListCustomizeRuleTestResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomizeRuleTestResultWithOptions(request, runtime);
  }

  /**
   * Queries the logs of a data source.
   * 
   * @param request - ListDataSourceLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceLogsResponse
   */
  async listDataSourceLogsWithOptions(request: ListDataSourceLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSourceLogsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.dataSourceInstanceId)) {
      body["DataSourceInstanceId"] = request.dataSourceInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataSourceLogs",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourceLogsResponse>(await this.callApi(params, req, runtime), new ListDataSourceLogsResponse({}));
  }

  /**
   * Queries the logs of a data source.
   * 
   * @param request - ListDataSourceLogsRequest
   * @returns ListDataSourceLogsResponse
   */
  async listDataSourceLogs(request: ListDataSourceLogsRequest): Promise<ListDataSourceLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourceLogsWithOptions(request, runtime);
  }

  /**
   * Queries a list of data source types in third-party cloud services that can be added to the threat analysis feature.
   * 
   * @param request - ListDataSourceTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceTypesResponse
   */
  async listDataSourceTypesWithOptions(request: ListDataSourceTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSourceTypesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataSourceTypes",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourceTypesResponse>(await this.callApi(params, req, runtime), new ListDataSourceTypesResponse({}));
  }

  /**
   * Queries a list of data source types in third-party cloud services that can be added to the threat analysis feature.
   * 
   * @param request - ListDataSourceTypesRequest
   * @returns ListDataSourceTypesResponse
   */
  async listDataSourceTypes(request: ListDataSourceTypesRequest): Promise<ListDataSourceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourceTypesWithOptions(request, runtime);
  }

  /**
   * Queries the information about the cloud services that are integrated with the threat analysis feature, the logs of the cloud services, and the delivery of the logs.
   * 
   * @param request - ListDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeliveryResponse
   */
  async listDeliveryWithOptions(request: ListDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<ListDeliveryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDelivery",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeliveryResponse>(await this.callApi(params, req, runtime), new ListDeliveryResponse({}));
  }

  /**
   * Queries the information about the cloud services that are integrated with the threat analysis feature, the logs of the cloud services, and the delivery of the logs.
   * 
   * @param request - ListDeliveryRequest
   * @returns ListDeliveryResponse
   */
  async listDelivery(request: ListDeliveryRequest): Promise<ListDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeliveryWithOptions(request, runtime);
  }

  /**
   * Queries handling policies.
   * 
   * @param request - ListDisposeStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDisposeStrategyResponse
   */
  async listDisposeStrategyWithOptions(request: ListDisposeStrategyRequest, runtime: $Util.RuntimeOptions): Promise<ListDisposeStrategyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.effectiveStatus)) {
      body["EffectiveStatus"] = request.effectiveStatus;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.entityIdentity)) {
      body["EntityIdentity"] = request.entityIdentity;
    }

    if (!Util.isUnset(request.entityType)) {
      body["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.order)) {
      body["Order"] = request.order;
    }

    if (!Util.isUnset(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.playbookName)) {
      body["PlaybookName"] = request.playbookName;
    }

    if (!Util.isUnset(request.playbookTypes)) {
      body["PlaybookTypes"] = request.playbookTypes;
    }

    if (!Util.isUnset(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.sophonTaskId)) {
      body["SophonTaskId"] = request.sophonTaskId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDisposeStrategy",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDisposeStrategyResponse>(await this.callApi(params, req, runtime), new ListDisposeStrategyResponse({}));
  }

  /**
   * Queries handling policies.
   * 
   * @param request - ListDisposeStrategyRequest
   * @returns ListDisposeStrategyResponse
   */
  async listDisposeStrategy(request: ListDisposeStrategyRequest): Promise<ListDisposeStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDisposeStrategyWithOptions(request, runtime);
  }

  /**
   * Queries the details of the logs in a cloud service that is added to the threat analysis feature.
   * 
   * @param request - ListImportedLogsByProdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImportedLogsByProdResponse
   */
  async listImportedLogsByProdWithOptions(request: ListImportedLogsByProdRequest, runtime: $Util.RuntimeOptions): Promise<ListImportedLogsByProdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.prodCode)) {
      body["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListImportedLogsByProd",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListImportedLogsByProdResponse>(await this.callApi(params, req, runtime), new ListImportedLogsByProdResponse({}));
  }

  /**
   * Queries the details of the logs in a cloud service that is added to the threat analysis feature.
   * 
   * @param request - ListImportedLogsByProdRequest
   * @returns ListImportedLogsByProdResponse
   */
  async listImportedLogsByProd(request: ListImportedLogsByProdRequest): Promise<ListImportedLogsByProdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listImportedLogsByProdWithOptions(request, runtime);
  }

  /**
   * Queries the resource-related permissions granted to the current user. The threat analysis feature supports two types of identities: administrators and common members. An administrator is granted all permissions, and a common member is granted permissions to access only specific resources.
   * 
   * @param request - ListOperationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOperationResponse
   */
  async listOperationWithOptions(request: ListOperationRequest, runtime: $Util.RuntimeOptions): Promise<ListOperationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListOperation",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOperationResponse>(await this.callApi(params, req, runtime), new ListOperationResponse({}));
  }

  /**
   * Queries the resource-related permissions granted to the current user. The threat analysis feature supports two types of identities: administrators and common members. An administrator is granted all permissions, and a common member is granted permissions to access only specific resources.
   * 
   * @param request - ListOperationRequest
   * @returns ListOperationResponse
   */
  async listOperation(request: ListOperationRequest): Promise<ListOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOperationWithOptions(request, runtime);
  }

  /**
   * Queries the dedicated Simple Log Service project and Logstore for a cloud service based on the patterns of the project and Logstore names.
   * 
   * @param request - ListProjectLogStoresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectLogStoresResponse
   */
  async listProjectLogStoresWithOptions(request: ListProjectLogStoresRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectLogStoresResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceLogCode)) {
      body["SourceLogCode"] = request.sourceLogCode;
    }

    if (!Util.isUnset(request.sourceProdCode)) {
      body["SourceProdCode"] = request.sourceProdCode;
    }

    if (!Util.isUnset(request.subUserId)) {
      body["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProjectLogStores",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectLogStoresResponse>(await this.callApi(params, req, runtime), new ListProjectLogStoresResponse({}));
  }

  /**
   * Queries the dedicated Simple Log Service project and Logstore for a cloud service based on the patterns of the project and Logstore names.
   * 
   * @param request - ListProjectLogStoresRequest
   * @returns ListProjectLogStoresResponse
   */
  async listProjectLogStores(request: ListProjectLogStoresRequest): Promise<ListProjectLogStoresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectLogStoresWithOptions(request, runtime);
  }

  /**
   * Queries the saved searches of the Logstore.
   * 
   * @param request - ListQuickQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuickQueryResponse
   */
  async listQuickQueryWithOptions(request: ListQuickQueryRequest, runtime: $Util.RuntimeOptions): Promise<ListQuickQueryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.offset)) {
      body["Offset"] = request.offset;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListQuickQuery",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListQuickQueryResponse>(await this.callApi(params, req, runtime), new ListQuickQueryResponse({}));
  }

  /**
   * Queries the saved searches of the Logstore.
   * 
   * @param request - ListQuickQueryRequest
   * @returns ListQuickQueryResponse
   */
  async listQuickQuery(request: ListQuickQueryRequest): Promise<ListQuickQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQuickQueryWithOptions(request, runtime);
  }

  /**
   * Queries a list of Alibaba Cloud accounts that are added to the threat analysis feature for centralized management. These accounts can be used to perform operations supported by the threat analysis feature, such as adding logs and handling events.
   * 
   * @param request - ListRdUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRdUsersResponse
   */
  async listRdUsersWithOptions(request: ListRdUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListRdUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRdUsers",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRdUsersResponse>(await this.callApi(params, req, runtime), new ListRdUsersResponse({}));
  }

  /**
   * Queries a list of Alibaba Cloud accounts that are added to the threat analysis feature for centralized management. These accounts can be used to perform operations supported by the threat analysis feature, such as adding logs and handling events.
   * 
   * @param request - ListRdUsersRequest
   * @returns ListRdUsersResponse
   */
  async listRdUsers(request: ListRdUsersRequest): Promise<ListRdUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRdUsersWithOptions(request, runtime);
  }

  /**
   * Queries a list of logs that are added to the threat analysis feature by cloud service.
   * 
   * @param request - ListUserProdLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserProdLogsResponse
   */
  async listUserProdLogsWithOptions(request: ListUserProdLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserProdLogsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.sourceLogCode)) {
      body["SourceLogCode"] = request.sourceLogCode;
    }

    if (!Util.isUnset(request.sourceProdCode)) {
      body["SourceProdCode"] = request.sourceProdCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUserProdLogs",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserProdLogsResponse>(await this.callApi(params, req, runtime), new ListUserProdLogsResponse({}));
  }

  /**
   * Queries a list of logs that are added to the threat analysis feature by cloud service.
   * 
   * @param request - ListUserProdLogsRequest
   * @returns ListUserProdLogsResponse
   */
  async listUserProdLogs(request: ListUserProdLogsRequest): Promise<ListUserProdLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserProdLogsWithOptions(request, runtime);
  }

  /**
   * Queries the details of the logs that are added to the threat analysis feature by cloud service.
   * 
   * @param request - ListUsersByProdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersByProdResponse
   */
  async listUsersByProdWithOptions(request: ListUsersByProdRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersByProdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.sourceProdCode)) {
      body["SourceProdCode"] = request.sourceProdCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUsersByProd",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsersByProdResponse>(await this.callApi(params, req, runtime), new ListUsersByProdResponse({}));
  }

  /**
   * Queries the details of the logs that are added to the threat analysis feature by cloud service.
   * 
   * @param request - ListUsersByProdRequest
   * @returns ListUsersByProdResponse
   */
  async listUsersByProd(request: ListUsersByProdRequest): Promise<ListUsersByProdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersByProdWithOptions(request, runtime);
  }

  /**
   * Modifies a third-party cloud account that is added to the threat analysis feature.
   * 
   * @param request - ModifyBindAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBindAccountResponse
   */
  async modifyBindAccountWithOptions(request: ModifyBindAccountRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBindAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessId)) {
      body["AccessId"] = request.accessId;
    }

    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.bindId)) {
      body["BindId"] = request.bindId;
    }

    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBindAccount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBindAccountResponse>(await this.callApi(params, req, runtime), new ModifyBindAccountResponse({}));
  }

  /**
   * Modifies a third-party cloud account that is added to the threat analysis feature.
   * 
   * @param request - ModifyBindAccountRequest
   * @returns ModifyBindAccountResponse
   */
  async modifyBindAccount(request: ModifyBindAccountRequest): Promise<ModifyBindAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBindAccountWithOptions(request, runtime);
  }

  /**
   * Modifies a data source that is added to the threat analysis feature.
   * 
   * @param request - ModifyDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataSourceResponse
   */
  async modifyDataSourceWithOptions(request: ModifyDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDataSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.dataSourceInstanceId)) {
      body["DataSourceInstanceId"] = request.dataSourceInstanceId;
    }

    if (!Util.isUnset(request.dataSourceInstanceName)) {
      body["DataSourceInstanceName"] = request.dataSourceInstanceName;
    }

    if (!Util.isUnset(request.dataSourceInstanceParams)) {
      body["DataSourceInstanceParams"] = request.dataSourceInstanceParams;
    }

    if (!Util.isUnset(request.dataSourceInstanceRemark)) {
      body["DataSourceInstanceRemark"] = request.dataSourceInstanceRemark;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDataSource",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDataSourceResponse>(await this.callApi(params, req, runtime), new ModifyDataSourceResponse({}));
  }

  /**
   * Modifies a data source that is added to the threat analysis feature.
   * 
   * @param request - ModifyDataSourceRequest
   * @returns ModifyDataSourceResponse
   */
  async modifyDataSource(request: ModifyDataSourceRequest): Promise<ModifyDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDataSourceWithOptions(request, runtime);
  }

  /**
   * Modifies the description of the logs that are added to the threat analysis feature for a data source within a cloud account.
   * 
   * @param request - ModifyDataSourceLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataSourceLogResponse
   */
  async modifyDataSourceLogWithOptions(request: ModifyDataSourceLogRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDataSourceLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.dataSourceInstanceId)) {
      body["DataSourceInstanceId"] = request.dataSourceInstanceId;
    }

    if (!Util.isUnset(request.dataSourceInstanceLogs)) {
      body["DataSourceInstanceLogs"] = request.dataSourceInstanceLogs;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.logCode)) {
      body["LogCode"] = request.logCode;
    }

    if (!Util.isUnset(request.logInstanceId)) {
      body["LogInstanceId"] = request.logInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDataSourceLog",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDataSourceLogResponse>(await this.callApi(params, req, runtime), new ModifyDataSourceLogResponse({}));
  }

  /**
   * Modifies the description of the logs that are added to the threat analysis feature for a data source within a cloud account.
   * 
   * @param request - ModifyDataSourceLogRequest
   * @returns ModifyDataSourceLogResponse
   */
  async modifyDataSourceLog(request: ModifyDataSourceLogRequest): Promise<ModifyDataSourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDataSourceLogWithOptions(request, runtime);
  }

  /**
   * Enables the log delivery feature for a cloud service that is integrated with Simple Log Service.
   * 
   * @param request - OpenDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenDeliveryResponse
   */
  async openDeliveryWithOptions(request: OpenDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<OpenDeliveryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logCode)) {
      body["LogCode"] = request.logCode;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenDelivery",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenDeliveryResponse>(await this.callApi(params, req, runtime), new OpenDeliveryResponse({}));
  }

  /**
   * Enables the log delivery feature for a cloud service that is integrated with Simple Log Service.
   * 
   * @param request - OpenDeliveryRequest
   * @returns OpenDeliveryResponse
   */
  async openDelivery(request: OpenDeliveryRequest): Promise<OpenDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openDeliveryWithOptions(request, runtime);
  }

  /**
   * Creates or updates an automatic response rule.
   * 
   * @param request - PostAutomateResponseConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostAutomateResponseConfigResponse
   */
  async postAutomateResponseConfigWithOptions(request: PostAutomateResponseConfigRequest, runtime: $Util.RuntimeOptions): Promise<PostAutomateResponseConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionConfig)) {
      body["ActionConfig"] = request.actionConfig;
    }

    if (!Util.isUnset(request.actionType)) {
      body["ActionType"] = request.actionType;
    }

    if (!Util.isUnset(request.autoResponseType)) {
      body["AutoResponseType"] = request.autoResponseType;
    }

    if (!Util.isUnset(request.executionCondition)) {
      body["ExecutionCondition"] = request.executionCondition;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.subUserId)) {
      body["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PostAutomateResponseConfig",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PostAutomateResponseConfigResponse>(await this.callApi(params, req, runtime), new PostAutomateResponseConfigResponse({}));
  }

  /**
   * Creates or updates an automatic response rule.
   * 
   * @param request - PostAutomateResponseConfigRequest
   * @returns PostAutomateResponseConfigResponse
   */
  async postAutomateResponseConfig(request: PostAutomateResponseConfigRequest): Promise<PostAutomateResponseConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postAutomateResponseConfigWithOptions(request, runtime);
  }

  /**
   * Creates or updates a custom rule.
   * 
   * @param request - PostCustomizeRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostCustomizeRuleResponse
   */
  async postCustomizeRuleWithOptions(request: PostCustomizeRuleRequest, runtime: $Util.RuntimeOptions): Promise<PostCustomizeRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!Util.isUnset(request.alertTypeMds)) {
      body["AlertTypeMds"] = request.alertTypeMds;
    }

    if (!Util.isUnset(request.attCk)) {
      body["AttCk"] = request.attCk;
    }

    if (!Util.isUnset(request.eventTransferExt)) {
      body["EventTransferExt"] = request.eventTransferExt;
    }

    if (!Util.isUnset(request.eventTransferSwitch)) {
      body["EventTransferSwitch"] = request.eventTransferSwitch;
    }

    if (!Util.isUnset(request.eventTransferType)) {
      body["EventTransferType"] = request.eventTransferType;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.logSource)) {
      body["LogSource"] = request.logSource;
    }

    if (!Util.isUnset(request.logSourceMds)) {
      body["LogSourceMds"] = request.logSourceMds;
    }

    if (!Util.isUnset(request.logType)) {
      body["LogType"] = request.logType;
    }

    if (!Util.isUnset(request.logTypeMds)) {
      body["LogTypeMds"] = request.logTypeMds;
    }

    if (!Util.isUnset(request.queryCycle)) {
      body["QueryCycle"] = request.queryCycle;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.ruleCondition)) {
      body["RuleCondition"] = request.ruleCondition;
    }

    if (!Util.isUnset(request.ruleDesc)) {
      body["RuleDesc"] = request.ruleDesc;
    }

    if (!Util.isUnset(request.ruleGroup)) {
      body["RuleGroup"] = request.ruleGroup;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.ruleThreshold)) {
      body["RuleThreshold"] = request.ruleThreshold;
    }

    if (!Util.isUnset(request.threatLevel)) {
      body["ThreatLevel"] = request.threatLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PostCustomizeRule",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PostCustomizeRuleResponse>(await this.callApi(params, req, runtime), new PostCustomizeRuleResponse({}));
  }

  /**
   * Creates or updates a custom rule.
   * 
   * @param request - PostCustomizeRuleRequest
   * @returns PostCustomizeRuleResponse
   */
  async postCustomizeRule(request: PostCustomizeRuleRequest): Promise<PostCustomizeRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postCustomizeRuleWithOptions(request, runtime);
  }

  /**
   * Submits a custom rule for testing.
   * 
   * @param request - PostCustomizeRuleTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostCustomizeRuleTestResponse
   */
  async postCustomizeRuleTestWithOptions(request: PostCustomizeRuleTestRequest, runtime: $Util.RuntimeOptions): Promise<PostCustomizeRuleTestResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.simulatedData)) {
      body["SimulatedData"] = request.simulatedData;
    }

    if (!Util.isUnset(request.testType)) {
      body["TestType"] = request.testType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PostCustomizeRuleTest",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PostCustomizeRuleTestResponse>(await this.callApi(params, req, runtime), new PostCustomizeRuleTestResponse({}));
  }

  /**
   * Submits a custom rule for testing.
   * 
   * @param request - PostCustomizeRuleTestRequest
   * @returns PostCustomizeRuleTestResponse
   */
  async postCustomizeRuleTest(request: PostCustomizeRuleTestRequest): Promise<PostCustomizeRuleTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postCustomizeRuleTestWithOptions(request, runtime);
  }

  /**
   * Submits event handling information.
   * 
   * @param request - PostEventDisposeAndWhiteruleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostEventDisposeAndWhiteruleListResponse
   */
  async postEventDisposeAndWhiteruleListWithOptions(request: PostEventDisposeAndWhiteruleListRequest, runtime: $Util.RuntimeOptions): Promise<PostEventDisposeAndWhiteruleListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eventDispose)) {
      body["EventDispose"] = request.eventDispose;
    }

    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.receiverInfo)) {
      body["ReceiverInfo"] = request.receiverInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PostEventDisposeAndWhiteruleList",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PostEventDisposeAndWhiteruleListResponse>(await this.callApi(params, req, runtime), new PostEventDisposeAndWhiteruleListResponse({}));
  }

  /**
   * Submits event handling information.
   * 
   * @param request - PostEventDisposeAndWhiteruleListRequest
   * @returns PostEventDisposeAndWhiteruleListResponse
   */
  async postEventDisposeAndWhiteruleList(request: PostEventDisposeAndWhiteruleListRequest): Promise<PostEventDisposeAndWhiteruleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postEventDisposeAndWhiteruleListWithOptions(request, runtime);
  }

  /**
   * Submits an alert whitelist rule.
   * 
   * @param request - PostEventWhiteruleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostEventWhiteruleListResponse
   */
  async postEventWhiteruleListWithOptions(request: PostEventWhiteruleListRequest, runtime: $Util.RuntimeOptions): Promise<PostEventWhiteruleListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.whiteruleList)) {
      body["WhiteruleList"] = request.whiteruleList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PostEventWhiteruleList",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PostEventWhiteruleListResponse>(await this.callApi(params, req, runtime), new PostEventWhiteruleListResponse({}));
  }

  /**
   * Submits an alert whitelist rule.
   * 
   * @param request - PostEventWhiteruleListRequest
   * @returns PostEventWhiteruleListResponse
   */
  async postEventWhiteruleList(request: PostEventWhiteruleListRequest): Promise<PostEventWhiteruleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postEventWhiteruleListWithOptions(request, runtime);
  }

  /**
   * Ends the test of a custom rule.
   * 
   * @param request - PostFinishCustomizeRuleTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostFinishCustomizeRuleTestResponse
   */
  async postFinishCustomizeRuleTestWithOptions(request: PostFinishCustomizeRuleTestRequest, runtime: $Util.RuntimeOptions): Promise<PostFinishCustomizeRuleTestResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PostFinishCustomizeRuleTest",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PostFinishCustomizeRuleTestResponse>(await this.callApi(params, req, runtime), new PostFinishCustomizeRuleTestResponse({}));
  }

  /**
   * Ends the test of a custom rule.
   * 
   * @param request - PostFinishCustomizeRuleTestRequest
   * @returns PostFinishCustomizeRuleTestResponse
   */
  async postFinishCustomizeRuleTest(request: PostFinishCustomizeRuleTestRequest): Promise<PostFinishCustomizeRuleTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postFinishCustomizeRuleTestWithOptions(request, runtime);
  }

  /**
   * Updates the status of a custom rule.
   * 
   * @param request - PostRuleStatusChangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostRuleStatusChangeResponse
   */
  async postRuleStatusChangeWithOptions(request: PostRuleStatusChangeRequest, runtime: $Util.RuntimeOptions): Promise<PostRuleStatusChangeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ids)) {
      body["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.inUse)) {
      body["InUse"] = request.inUse;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PostRuleStatusChange",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PostRuleStatusChangeResponse>(await this.callApi(params, req, runtime), new PostRuleStatusChangeResponse({}));
  }

  /**
   * Updates the status of a custom rule.
   * 
   * @param request - PostRuleStatusChangeRequest
   * @returns PostRuleStatusChangeResponse
   */
  async postRuleStatusChange(request: PostRuleStatusChangeRequest): Promise<PostRuleStatusChangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postRuleStatusChangeWithOptions(request, runtime);
  }

  /**
   * Releases storage to reduce the storage usage. The release operation is irreversible and may cause data loss. Proceed with caution.
   * 
   * @param request - RestoreCapacityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreCapacityResponse
   */
  async restoreCapacityWithOptions(request: RestoreCapacityRequest, runtime: $Util.RuntimeOptions): Promise<RestoreCapacityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RestoreCapacity",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestoreCapacityResponse>(await this.callApi(params, req, runtime), new RestoreCapacityResponse({}));
  }

  /**
   * Releases storage to reduce the storage usage. The release operation is irreversible and may cause data loss. Proceed with caution.
   * 
   * @param request - RestoreCapacityRequest
   * @returns RestoreCapacityResponse
   */
  async restoreCapacity(request: RestoreCapacityRequest): Promise<RestoreCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreCapacityWithOptions(request, runtime);
  }

  /**
   * Saves a query statement in log analysis as a saved search. This helps save the time required to write the query statement.
   * 
   * @param request - SaveQuickQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveQuickQueryResponse
   */
  async saveQuickQueryWithOptions(request: SaveQuickQueryRequest, runtime: $Util.RuntimeOptions): Promise<SaveQuickQueryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveQuickQuery",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveQuickQueryResponse>(await this.callApi(params, req, runtime), new SaveQuickQueryResponse({}));
  }

  /**
   * Saves a query statement in log analysis as a saved search. This helps save the time required to write the query statement.
   * 
   * @param request - SaveQuickQueryRequest
   * @returns SaveQuickQueryResponse
   */
  async saveQuickQuery(request: SaveQuickQueryRequest): Promise<SaveQuickQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveQuickQueryWithOptions(request, runtime);
  }

  /**
   * Configures the settings of log storage, such as the storage duration and storage region.
   * 
   * @param request - SetStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetStorageResponse
   */
  async setStorageWithOptions(request: SetStorageRequest, runtime: $Util.RuntimeOptions): Promise<SetStorageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.ttl)) {
      body["Ttl"] = request.ttl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetStorage",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetStorageResponse>(await this.callApi(params, req, runtime), new SetStorageResponse({}));
  }

  /**
   * Configures the settings of log storage, such as the storage duration and storage region.
   * 
   * @param request - SetStorageRequest
   * @returns SetStorageResponse
   */
  async setStorage(request: SetStorageRequest): Promise<SetStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setStorageWithOptions(request, runtime);
  }

  /**
   * Configures index fields to display in log analysis. The index fields can be used for quick analysis.
   * 
   * @param request - ShowQuickAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ShowQuickAnalysisResponse
   */
  async showQuickAnalysisWithOptions(request: ShowQuickAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<ShowQuickAnalysisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ShowQuickAnalysis",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ShowQuickAnalysisResponse>(await this.callApi(params, req, runtime), new ShowQuickAnalysisResponse({}));
  }

  /**
   * Configures index fields to display in log analysis. The index fields can be used for quick analysis.
   * 
   * @param request - ShowQuickAnalysisRequest
   * @returns ShowQuickAnalysisResponse
   */
  async showQuickAnalysis(request: ShowQuickAnalysisRequest): Promise<ShowQuickAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.showQuickAnalysisWithOptions(request, runtime);
  }

  /**
   * Submits log collection tasks at a time.
   * 
   * @param request - SubmitImportLogTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitImportLogTasksResponse
   */
  async submitImportLogTasksWithOptions(request: SubmitImportLogTasksRequest, runtime: $Util.RuntimeOptions): Promise<SubmitImportLogTasksResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accounts)) {
      body["Accounts"] = request.accounts;
    }

    if (!Util.isUnset(request.autoImported)) {
      body["AutoImported"] = request.autoImported;
    }

    if (!Util.isUnset(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!Util.isUnset(request.logCodes)) {
      body["LogCodes"] = request.logCodes;
    }

    if (!Util.isUnset(request.prodCode)) {
      body["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitImportLogTasks",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitImportLogTasksResponse>(await this.callApi(params, req, runtime), new SubmitImportLogTasksResponse({}));
  }

  /**
   * Submits log collection tasks at a time.
   * 
   * @param request - SubmitImportLogTasksRequest
   * @returns SubmitImportLogTasksResponse
   */
  async submitImportLogTasks(request: SubmitImportLogTasksRequest): Promise<SubmitImportLogTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitImportLogTasksWithOptions(request, runtime);
  }

  /**
   * Submits multiple tasks that add logs to the threat analysis feature at a time. After the logs are added, you can perform alert and event analysis.
   * 
   * @param request - SubmitJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitJobsResponse
   */
  async submitJobsWithOptions(request: SubmitJobsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitJobsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jsonParam)) {
      body["JsonParam"] = request.jsonParam;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitJobs",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitJobsResponse>(await this.callApi(params, req, runtime), new SubmitJobsResponse({}));
  }

  /**
   * Submits multiple tasks that add logs to the threat analysis feature at a time. After the logs are added, you can perform alert and event analysis.
   * 
   * @param request - SubmitJobsRequest
   * @returns SubmitJobsResponse
   */
  async submitJobs(request: SubmitJobsRequest): Promise<SubmitJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitJobsWithOptions(request, runtime);
  }

  /**
   * Updates the status of an automatic response rule.
   * 
   * @param request - UpdateAutomateResponseConfigStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAutomateResponseConfigStatusResponse
   */
  async updateAutomateResponseConfigStatusWithOptions(request: UpdateAutomateResponseConfigStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAutomateResponseConfigStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ids)) {
      body["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.inUse)) {
      body["InUse"] = request.inUse;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAutomateResponseConfigStatus",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAutomateResponseConfigStatusResponse>(await this.callApi(params, req, runtime), new UpdateAutomateResponseConfigStatusResponse({}));
  }

  /**
   * Updates the status of an automatic response rule.
   * 
   * @param request - UpdateAutomateResponseConfigStatusRequest
   * @returns UpdateAutomateResponseConfigStatusResponse
   */
  async updateAutomateResponseConfigStatus(request: UpdateAutomateResponseConfigStatusRequest): Promise<UpdateAutomateResponseConfigStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAutomateResponseConfigStatusWithOptions(request, runtime);
  }

  /**
   * Creates or updates an alert whitelist rule.
   * 
   * @param request - UpdateWhiteRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWhiteRuleListResponse
   */
  async updateWhiteRuleListWithOptions(request: UpdateWhiteRuleListRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWhiteRuleListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.expression)) {
      body["Expression"] = request.expression;
    }

    if (!Util.isUnset(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!Util.isUnset(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.whiteRuleId)) {
      body["WhiteRuleId"] = request.whiteRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWhiteRuleList",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWhiteRuleListResponse>(await this.callApi(params, req, runtime), new UpdateWhiteRuleListResponse({}));
  }

  /**
   * Creates or updates an alert whitelist rule.
   * 
   * @param request - UpdateWhiteRuleListRequest
   * @returns UpdateWhiteRuleListResponse
   */
  async updateWhiteRuleList(request: UpdateWhiteRuleListRequest): Promise<UpdateWhiteRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWhiteRuleListWithOptions(request, runtime);
  }

}
