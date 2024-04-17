// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataProductListLogMapValue extends $tea.Model {
  logCode?: string;
  logName?: string;
  logNameEn?: string;
  logNameKey?: string;
  status?: boolean;
  canOperateOrNot?: boolean;
  topic?: string;
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
  accountId?: string;
  cloudCode?: string;
  dataSourceInstanceName?: string;
  dataSourceInstanceParams?: string;
  dataSourceInstanceRemark?: string;
  dataSourceType?: string;
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
  data?: AddDataSourceResponseBodyData;
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
  accountId?: string;
  cloudCode?: string;
  dataSourceInstanceId?: string;
  dataSourceInstanceLogs?: string;
  logCode?: string;
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
  data?: AddDataSourceLogResponseBodyData;
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
  addedUserId?: number;
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
  data?: boolean;
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
  deleted?: number;
  disPlayLine?: string;
  regionId?: string;
  sourceLogCode?: string;
  sourceLogInfo?: string;
  sourceProdCode?: string;
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
  data?: AddUserSourceLogConfigResponseBodyData;
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

export class BatchJobCheckRequest extends $tea.Model {
  regionId?: string;
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

export class BatchJobCheckResponseBody extends $tea.Model {
  code?: number;
  data?: BatchJobCheckResponseBodyData;
  errCode?: string;
  message?: string;
  requestId?: string;
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
      data: BatchJobCheckResponseBodyData,
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

export class BatchJobCheckResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchJobCheckResponseBody;
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
      body: BatchJobCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitRequest extends $tea.Model {
  jsonConfig?: string;
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
  code?: number;
  data?: BatchJobSubmitResponseBodyData;
  errCode?: string;
  message?: string;
  requestId?: string;
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
  accessId?: string;
  accountId?: string;
  accountName?: string;
  cloudCode?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accountId: 'AccountId',
      accountName: 'AccountName',
      cloudCode: 'CloudCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accountId: 'string',
      accountName: 'string',
      cloudCode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAccountResponseBody extends $tea.Model {
  data?: BindAccountResponseBodyData;
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
  logCode?: string;
  productCode?: string;
  regionId?: string;
  roleFor?: number;
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
  data?: boolean;
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
  id?: number;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
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
  accessId?: string;
  accountId?: string;
  bindId?: number;
  cloudCode?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accountId: 'AccountId',
      bindId: 'BindId',
      cloudCode: 'CloudCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accountId: 'string',
      bindId: 'number',
      cloudCode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBindAccountResponseBody extends $tea.Model {
  data?: DeleteBindAccountResponseBodyData;
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
  regionId?: string;
  roleFor?: number;
  roleType?: number;
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
  code?: number;
  data?: number;
  message?: string;
  requestId?: string;
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
  accountId?: string;
  cloudCode?: string;
  dataSourceInstanceId?: string;
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
  data?: DeleteDataSourceResponseBodyData;
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
  accountId?: string;
  cloudCode?: string;
  dataSourceInstanceId?: string;
  logInstanceId?: string;
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
  data?: DeleteDataSourceLogResponseBodyData;
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

export class DeleteQuickQueryRequest extends $tea.Model {
  regionId?: string;
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

export class DeleteQuickQueryResponseBody extends $tea.Model {
  data?: boolean;
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

export class DeleteQuickQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteQuickQueryResponseBody;
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
      body: DeleteQuickQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  addedUserId?: number;
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
  data?: boolean;
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
  id?: number;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: any;
  message?: string;
  requestId?: string;
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

export class DescribeAggregateFunctionResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAggregateFunctionResponseBodyData[];
  message?: string;
  requestId?: string;
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

export class DescribeAlertSceneResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAlertSceneResponseBodyData[];
  message?: string;
  requestId?: string;
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
  incidentUuid?: string;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeAlertSceneByEventResponseBodyData[];
  message?: string;
  requestId?: string;
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
  endTime?: number;
  level?: string[];
  regionId?: string;
  roleFor?: number;
  roleType?: number;
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
  code?: number;
  data?: DescribeAlertSourceResponseBodyData[];
  message?: string;
  requestId?: string;
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
  incidentUuid?: string;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeAlertSourceWithEventResponseBodyData[];
  message?: string;
  requestId?: string;
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
  regionId?: string;
  roleFor?: number;
  roleType?: number;
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
  code?: number;
  data?: DescribeAlertTypeResponseBodyData[];
  message?: string;
  requestId?: string;
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
  alertTitle?: string;
  alertUuid?: string;
  currentPage?: number;
  endTime?: number;
  isDefend?: string;
  level?: string[];
  pageSize?: number;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  source?: string;
  startTime?: number;
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
  code?: number;
  data?: DescribeAlertsResponseBodyData;
  message?: string;
  requestId?: string;
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
  endTime?: number;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
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
  code?: number;
  data?: DescribeAlertsCountResponseBodyData;
  message?: string;
  requestId?: string;
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
  currentPage?: number;
  entityId?: number;
  incidentUuid?: string;
  pageSize?: number;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
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
  code?: number;
  data?: DescribeAlertsWithEntityResponseBodyData;
  message?: string;
  requestId?: string;
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
  alertTitle?: string;
  currentPage?: number;
  incidentUuid?: string;
  isDefend?: string;
  level?: string[];
  pageSize?: number;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  source?: string;
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
  code?: number;
  data?: DescribeAlertsWithEventResponseBodyData;
  message?: string;
  requestId?: string;
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
  assetName?: string;
  endTime?: number;
  incidentUuid?: string;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
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
  code?: number;
  data?: DescribeAttackTimeLineResponseBodyData[];
  message?: string;
  requestId?: string;
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
  data?: boolean;
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

export class DescribeAutomateResponseConfigCounterResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAutomateResponseConfigCounterResponseBodyData;
  message?: string;
  requestId?: string;
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
  autoResponseType?: string;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeAutomateResponseConfigFeatureResponseBodyData[];
  message?: string;
  requestId?: string;
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
  autoResponseType?: string;
  entityType?: string;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeAutomateResponseConfigPlayBooksResponseBodyData[];
  message?: string;
  requestId?: string;
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
  assetType?: string;
  currentPage?: number;
  incidentUuid?: string;
  pageSize?: number;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeCloudSiemAssetsResponseBodyData;
  message?: string;
  requestId?: string;
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
  incidentUuid?: string;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeCloudSiemAssetsCounterResponseBodyData[];
  message?: string;
  requestId?: string;
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
  incidentUuid?: string;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeCloudSiemEventDetailResponseBodyData;
  message?: string;
  requestId?: string;
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
  assetId?: string;
  currentPage?: number;
  endTime?: number;
  eventName?: string;
  incidentUuid?: string;
  order?: string;
  orderField?: string;
  pageSize?: number;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  startTime?: number;
  status?: number;
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
  code?: number;
  data?: DescribeCloudSiemEventsResponseBodyData;
  message?: string;
  requestId?: string;
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
  regionId?: string;
  sourceLogProd?: string;
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
  data?: boolean;
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

export class DescribeCustomizeRuleRequest extends $tea.Model {
  regionId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeCustomizeRuleResponseBodyData;
  message?: string;
  requestId?: string;
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
      data: DescribeCustomizeRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomizeRuleResponseBody;
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
      body: DescribeCustomizeRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleCountRequest extends $tea.Model {
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

export class DescribeCustomizeRuleCountResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeCustomizeRuleCountResponseBodyData;
  message?: string;
  requestId?: string;
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
  id?: number;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeCustomizeRuleTestResponseBodyData;
  message?: string;
  requestId?: string;
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
  id?: number;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeCustomizeRuleTestHistogramResponseBodyData[];
  message?: string;
  requestId?: string;
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
  accountId?: string;
  cloudCode?: string;
  dataSourceInstanceId?: string;
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
  data?: DescribeDataSourceInstanceResponseBodyData;
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
  cloudCode?: string;
  dataSourceType?: string;
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
  data?: DescribeDataSourceParametersResponseBodyData[];
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
  currentPage?: number;
  entityType?: string;
  incidentUuid?: string;
  pageSize?: number;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeDisposeAndPlaybookResponseBodyData;
  message?: string;
  requestId?: string;
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
  endTime?: number;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
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
  code?: number;
  data?: DescribeDisposeStrategyPlaybookResponseBodyData[];
  message?: string;
  requestId?: string;
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
  entityId?: number;
  entityIdentity?: string;
  incidentUuid?: string;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
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
  code?: number;
  data?: DescribeEntityInfoResponseBodyData;
  message?: string;
  requestId?: string;
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
  endTime?: number;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
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
  code?: number;
  data?: DescribeEventCountByThreatLevelResponseBodyData;
  message?: string;
  requestId?: string;
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
  currentPage?: number;
  incidentUuid?: string;
  pageSize?: number;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeEventDisposeResponseBodyData;
  message?: string;
  requestId?: string;
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

export class DescribeImportedLogCountResponseBody extends $tea.Model {
  data?: DescribeImportedLogCountResponseBodyData;
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
  regionId?: string;
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
  code?: number;
  data?: DescribeJobStatusResponseBodyData;
  errCode?: string;
  message?: string;
  requestId?: string;
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
  logSource?: string;
  logType?: string;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeLogFieldsResponseBodyData[];
  message?: string;
  requestId?: string;
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
  logType?: string;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeLogSourceResponseBodyData[];
  message?: string;
  requestId?: string;
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
  data?: DescribeLogStoreResponseBodyData;
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

export class DescribeLogTypeResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeLogTypeResponseBodyData[];
  message?: string;
  requestId?: string;
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
  regionId?: string;
  roleFor?: number;
  roleType?: number;
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
  code?: number;
  data?: DescribeOperatorsResponseBodyData[];
  message?: string;
  requestId?: string;
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

export class DescribeProdCountResponseBody extends $tea.Model {
  data?: DescribeProdCountResponseBodyData;
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

export class DescribeScopeUsersResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeScopeUsersResponseBodyData[];
  message?: string;
  requestId?: string;
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
  data?: boolean;
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

export class DescribeStorageResponseBody extends $tea.Model {
  data?: boolean;
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
  regionId?: string;
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
  data?: DescribeUserBuyStatusResponseBodyData;
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
  entityId?: number;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeWafScopeResponseBodyData[];
  message?: string;
  requestId?: string;
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
  alertName?: string;
  alertType?: string;
  currentPage?: number;
  incidentUuid?: string;
  pageSize?: number;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: DescribeWhiteRuleListResponseBodyData;
  message?: string;
  requestId?: string;
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
  from?: number;
  index?: string;
  page?: number;
  regionId?: string;
  reverse?: boolean;
  size?: number;
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
  data?: DoQuickFieldResponseBodyData;
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
  aliUid?: number;
  delegateOrNot?: number;
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
  data?: boolean;
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
  autoSubmit?: number;
  regionId?: string;
  roleFor?: number;
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
  data?: boolean;
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
  data?: boolean;
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

export class GetCapacityResponseBody extends $tea.Model {
  data?: GetCapacityResponseBodyData;
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
  from?: number;
  query?: string;
  regionId?: string;
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
  data?: GetHistogramsResponseBodyData;
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
  from?: number;
  pageIndex?: number;
  pageSize?: number;
  query?: string;
  regionId?: string;
  reverseOrNot?: boolean;
  to?: number;
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
  code?: number;
  data?: GetLogsResponseBodyData;
  message?: string;
  requestId?: string;
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
  regionId?: string;
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

export class GetStorageResponseBody extends $tea.Model {
  data?: GetStorageResponseBodyData;
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
  cloudCode?: string;
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

export class ListAccountAccessIdResponseBody extends $tea.Model {
  code?: number;
  data?: ListAccountAccessIdResponseBodyData[];
  message?: string;
  requestId?: string;
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
  cloudCode?: string;
  logCodes?: string[];
  prodCode?: string;
  regionId?: string;
  roleFor?: number;
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
  data?: ListAccountsByLogResponseBodyData[];
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

export class ListAllProdsResponseBody extends $tea.Model {
  data?: ListAllProdsResponseBodyData;
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
  actionType?: string;
  autoResponseType?: string;
  currentPage?: number;
  id?: number;
  pageSize?: number;
  playbookUuid?: string;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  ruleName?: string;
  status?: number;
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
  code?: number;
  data?: ListAutomateResponseConfigsResponseBodyData;
  message?: string;
  requestId?: string;
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
  cloudCode?: string;
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

export class ListBindAccountResponseBody extends $tea.Model {
  data?: ListBindAccountResponseBodyData[];
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
  accountId?: string;
  cloudCode?: string;
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
  data?: ListBindDataSourcesResponseBodyData[];
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
  alertType?: string;
  currentPage?: number;
  endTime?: number;
  id?: string;
  order?: string;
  orderField?: string;
  pageSize?: number;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  ruleName?: string;
  ruleType?: string;
  startTime?: number;
  status?: number;
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
  code?: number;
  data?: ListCloudSiemCustomizeRulesResponseBodyData;
  message?: string;
  requestId?: string;
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
  alertType?: string;
  attCk?: string;
  currentPage?: number;
  endTime?: number;
  eventTransferType?: string;
  id?: string;
  logSource?: string;
  order?: string;
  orderField?: string;
  pageSize?: number;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  ruleName?: string;
  ruleType?: string;
  startTime?: number;
  status?: number;
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
  code?: number;
  data?: ListCloudSiemPredefinedRulesResponseBodyData;
  message?: string;
  requestId?: string;
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
  currentPage?: number;
  id?: number;
  pageSize?: number;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: ListCustomizeRuleTestResultResponseBodyData;
  message?: string;
  requestId?: string;
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
  accountId?: string;
  cloudCode?: string;
  dataSourceInstanceId?: string;
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
  data?: ListDataSourceLogsResponseBodyData;
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
  cloudCode?: string;
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
  data?: ListDataSourceTypesResponseBodyData[];
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

export class ListDeliveryResponseBody extends $tea.Model {
  data?: ListDeliveryResponseBodyData;
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
  currentPage?: number;
  effectiveStatus?: number;
  endTime?: number;
  entityIdentity?: string;
  entityType?: string;
  order?: string;
  orderField?: string;
  pageSize?: number;
  playbookName?: string;
  playbookTypes?: string;
  playbookUuid?: string;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  sophonTaskId?: string;
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
  code?: number;
  data?: ListDisposeStrategyResponseBodyData;
  message?: string;
  requestId?: string;
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
  cloudCode?: string;
  prodCode?: string;
  regionId?: string;
  roleFor?: number;
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
  data?: ListImportedLogsByProdResponseBodyData[];
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
  data?: ListOperationResponseBodyData;
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
  regionId?: string;
  sourceLogCode?: string;
  sourceProdCode?: string;
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
  data?: ListProjectLogStoresResponseBodyData[];
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
  offset?: number;
  pageSize?: number;
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
  data?: ListQuickQueryResponseBodyData;
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
  data?: ListRdUsersResponseBodyData[];
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
  regionId?: string;
  sourceLogCode?: string;
  sourceProdCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sourceLogCode: 'SourceLogCode',
      sourceProdCode: 'SourceProdCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sourceLogCode: 'string',
      sourceProdCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProdLogsResponseBody extends $tea.Model {
  data?: ListUserProdLogsResponseBodyData[];
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
  regionId?: string;
  sourceProdCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sourceProdCode: 'SourceProdCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sourceProdCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersByProdResponseBody extends $tea.Model {
  data?: ListUsersByProdResponseBodyData[];
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
  accessId?: string;
  accountId?: string;
  accountName?: string;
  bindId?: number;
  cloudCode?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accountId: 'AccountId',
      accountName: 'AccountName',
      bindId: 'BindId',
      cloudCode: 'CloudCode',
      regionId: 'RegionId',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBindAccountResponseBody extends $tea.Model {
  data?: ModifyBindAccountResponseBodyData;
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
  accountId?: string;
  cloudCode?: string;
  dataSourceInstanceId?: string;
  dataSourceInstanceName?: string;
  dataSourceInstanceParams?: string;
  dataSourceInstanceRemark?: string;
  dataSourceType?: string;
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
  data?: ModifyDataSourceResponseBodyData;
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
  accountId?: string;
  cloudCode?: string;
  dataSourceInstanceId?: string;
  dataSourceInstanceLogs?: string;
  dataSourceType?: string;
  logCode?: string;
  logInstanceId?: string;
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
  data?: ModifyDataSourceLogResponseBodyData;
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
  logCode?: string;
  productCode?: string;
  regionId?: string;
  roleFor?: number;
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
  data?: boolean;
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
  actionConfig?: string;
  actionType?: string;
  autoResponseType?: string;
  executionCondition?: string;
  id?: number;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  ruleName?: string;
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
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
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
  alertType?: string;
  alertTypeMds?: string;
  attCk?: string;
  eventTransferExt?: string;
  eventTransferSwitch?: number;
  eventTransferType?: string;
  id?: number;
  logSource?: string;
  logSourceMds?: string;
  logType?: string;
  logTypeMds?: string;
  queryCycle?: string;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  ruleCondition?: string;
  ruleDesc?: string;
  ruleGroup?: string;
  ruleName?: string;
  ruleThreshold?: string;
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
  code?: number;
  data?: PostCustomizeRuleResponseBodyData;
  message?: string;
  requestId?: string;
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
  id?: number;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
  simulatedData?: string;
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
  code?: number;
  data?: any;
  message?: string;
  requestId?: string;
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
  eventDispose?: string;
  incidentUuid?: string;
  receiverInfo?: string;
  regionId?: string;
  remark?: string;
  roleFor?: number;
  roleType?: number;
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
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
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
  incidentUuid?: string;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
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
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
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
  id?: number;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: any;
  message?: string;
  requestId?: string;
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
  ids?: string;
  inUse?: boolean;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
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
  code?: number;
  data?: any;
  message?: string;
  requestId?: string;
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

export class RestoreCapacityResponseBody extends $tea.Model {
  data?: boolean;
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
  displayName?: string;
  query?: string;
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
  data?: boolean;
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
  region?: string;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
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
  data?: boolean;
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
  data?: ShowQuickAnalysisResponseBodyData;
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
  accounts?: string;
  autoImported?: number;
  cloudCode?: string;
  logCodes?: string;
  prodCode?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      autoImported: 'AutoImported',
      cloudCode: 'CloudCode',
      logCodes: 'LogCodes',
      prodCode: 'ProdCode',
      regionId: 'RegionId',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImportLogTasksResponseBody extends $tea.Model {
  data?: SubmitImportLogTasksResponseBodyData;
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
  jsonParam?: string;
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
  data?: number;
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
  ids?: string;
  inUse?: boolean;
  regionId?: string;
  roleFor?: number;
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
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
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
  expression?: string;
  incidentUuid?: string;
  regionId?: string;
  roleFor?: number;
  roleType?: number;
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
  code?: number;
  data?: any;
  message?: string;
  requestId?: string;
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
  key?: string;
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
  count?: number;
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
  count?: number;
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
  diplayLine?: string;
  displayed?: boolean;
  imported?: boolean;
  mainUserId?: number;
  sourceLogCode?: string;
  sourceProdCode?: string;
  subUserId?: number;
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

export class BatchJobCheckResponseBodyDataErrTaskListProductListLogList extends $tea.Model {
  errorCode?: string;
  logCode?: string;
  logStoreNamePattern?: string;
  productCode?: string;
  projectNamePattern?: string;
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

export class BatchJobCheckResponseBodyDataErrTaskListProductList extends $tea.Model {
  logList?: BatchJobCheckResponseBodyDataErrTaskListProductListLogList[];
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: { 'type': 'array', 'itemType': BatchJobCheckResponseBodyDataErrTaskListProductListLogList },
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobCheckResponseBodyDataErrTaskList extends $tea.Model {
  productList?: BatchJobCheckResponseBodyDataErrTaskListProductList[];
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      productList: 'ProductList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productList: { 'type': 'array', 'itemType': BatchJobCheckResponseBodyDataErrTaskListProductList },
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobCheckResponseBodyData extends $tea.Model {
  configId?: string;
  errTaskList?: BatchJobCheckResponseBodyDataErrTaskList[];
  failedCount?: number;
  finishCount?: number;
  folderId?: string;
  taskCount?: number;
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
      errTaskList: { 'type': 'array', 'itemType': BatchJobCheckResponseBodyDataErrTaskList },
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

export class BatchJobSubmitResponseBodyDataConfigListProductListLogList extends $tea.Model {
  errorCode?: string;
  logCode?: string;
  logStoreNamePattern?: string;
  productCode?: string;
  projectNamePattern?: string;
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
  logList?: BatchJobSubmitResponseBodyDataConfigListProductListLogList[];
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
  productList?: BatchJobSubmitResponseBodyDataConfigListProductList[];
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
  configId?: string;
  configList?: BatchJobSubmitResponseBodyDataConfigList[];
  submitId?: string;
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
  count?: number;
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
  function?: string;
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
  name?: string;
  type?: string;
  value?: string;
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
  alertName?: string;
  alertNameId?: string;
  alertTile?: string;
  alertTileId?: string;
  alertType?: string;
  alertTypeId?: string;
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
  name?: string;
  type?: string;
  value?: string;
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
  alertName?: string;
  alertNameId?: string;
  alertTile?: string;
  alertTileId?: string;
  alertType?: string;
  alertTypeId?: string;
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
  source?: string;
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
  source?: string;
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
  alertType?: string;
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
  currentPage?: number;
  pageSize?: number;
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
  key?: string;
  keyName?: string;
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
  alertDesc?: string;
  alertDescCode?: string;
  alertDescEn?: string;
  alertDetail?: string;
  alertInfoList?: DescribeAlertsResponseBodyDataResponseDataAlertInfoList[];
  alertLevel?: string;
  alertName?: string;
  alertNameCode?: string;
  alertNameEn?: string;
  alertSrcProd?: string;
  alertSrcProdModule?: string;
  alertTitle?: string;
  alertTitleEn?: string;
  alertType?: string;
  alertTypeCode?: string;
  alertTypeEn?: string;
  alertUuid?: string;
  assetList?: string;
  attCk?: string;
  cloudCode?: string;
  endTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  incidentUuid?: string;
  isDefend?: string;
  logTime?: string;
  logUuid?: string;
  mainUserId?: number;
  occurTime?: string;
  startTime?: string;
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
  pageInfo?: DescribeAlertsResponseBodyDataPageInfo;
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
  all?: number;
  high?: number;
  low?: number;
  medium?: number;
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
  currentPage?: number;
  pageSize?: number;
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
  key?: string;
  keyName?: string;
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
  alertDesc?: string;
  alertDescCode?: string;
  alertDescEn?: string;
  alertDetail?: string;
  alertInfoList?: DescribeAlertsWithEntityResponseBodyDataResponseDataAlertInfoList[];
  alertLevel?: string;
  alertName?: string;
  alertNameCode?: string;
  alertNameEn?: string;
  alertSrcProd?: string;
  alertSrcProdModule?: string;
  alertTitle?: string;
  alertTitleEn?: string;
  alertType?: string;
  alertTypeCode?: string;
  alertTypeEn?: string;
  alertUuid?: string;
  assetList?: string;
  attCk?: string;
  cloudCode?: string;
  endTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  incidentUuid?: string;
  isDefend?: string;
  logTime?: string;
  logUuid?: string;
  mainUserId?: number;
  occurTime?: string;
  startTime?: string;
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
  pageInfo?: DescribeAlertsWithEntityResponseBodyDataPageInfo;
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
  currentPage?: number;
  pageSize?: number;
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
  key?: string;
  keyName?: string;
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
  alertDesc?: string;
  alertDescCode?: string;
  alertDescEn?: string;
  alertDetail?: string;
  alertInfoList?: DescribeAlertsWithEventResponseBodyDataResponseDataAlertInfoList[];
  alertLevel?: string;
  alertName?: string;
  alertNameCode?: string;
  alertNameEn?: string;
  alertSrcProd?: string;
  alertSrcProdModule?: string;
  alertTitle?: string;
  alertTitleEn?: string;
  alertType?: string;
  alertTypeCode?: string;
  alertTypeEn?: string;
  alertUuid?: string;
  assetList?: string;
  attCk?: string;
  cloudCode?: string;
  endTime?: string;
  entityList?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  incidentUuid?: string;
  isDefend?: string;
  logTime?: string;
  logUuid?: string;
  mainUserId?: number;
  occurTime?: string;
  startTime?: string;
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
  pageInfo?: DescribeAlertsWithEventResponseBodyDataPageInfo;
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
  alertLevel?: string;
  alertName?: string;
  alertNameCode?: string;
  alertNameEn?: string;
  alertSrcProd?: string;
  alertSrcProdModule?: string;
  alertTime?: number;
  alertTitle?: string;
  alertTitleEn?: string;
  alertType?: string;
  alertTypeCode?: string;
  alertTypeEn?: string;
  alertUuid?: string;
  assetId?: string;
  assetList?: string;
  assetName?: string;
  attCk?: string;
  cloudCode?: string;
  incidentUuid?: string;
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
  all?: number;
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
  value?: string;
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
  hasRightValue?: boolean;
  index?: number;
  operator?: string;
  operatorDescCn?: string;
  operatorDescEn?: string;
  operatorName?: string;
  supportDataType?: string;
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
  dataType?: string;
  feature?: string;
  rightValueEnums?: DescribeAutomateResponseConfigFeatureResponseBodyDataRightValueEnums[];
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
  description?: string;
  displayName?: string;
  name?: string;
  paramType?: string;
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
  currentPage?: number;
  pageSize?: number;
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
  key?: string;
  keyName?: string;
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
  alertUuid?: string;
  aliuid?: number;
  assetId?: string;
  assetInfo?: DescribeCloudSiemAssetsResponseBodyDataResponseDataAssetInfo[];
  assetName?: string;
  assetType?: string;
  cloudCode?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  incidentUuid?: string;
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
  pageInfo?: DescribeCloudSiemAssetsResponseBodyDataPageInfo;
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
  assetNum?: number;
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
  alertNum?: number;
  aliuid?: number;
  assetNum?: number;
  attCkLabels?: string[];
  dataSources?: string[];
  description?: string;
  descriptionEn?: string;
  extContent?: string;
  gmtCreate?: string;
  gmtModified?: string;
  incidentName?: string;
  incidentNameEn?: string;
  incidentUuid?: string;
  referAccount?: string;
  remark?: string;
  status?: number;
  threatLevel?: string;
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
  currentPage?: number;
  pageSize?: number;
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
  alertNum?: number;
  aliuid?: number;
  assetNum?: number;
  attCkLabels?: string[];
  dataSources?: string[];
  description?: string;
  descriptionEn?: string;
  extContent?: string;
  gmtCreate?: string;
  gmtModified?: string;
  incidentName?: string;
  incidentNameEn?: string;
  incidentUuid?: string;
  referAccount?: string;
  remark?: string;
  status?: number;
  threatLevel?: string;
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
  pageInfo?: DescribeCloudSiemEventsResponseBodyDataPageInfo;
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

export class DescribeCustomizeRuleResponseBodyData extends $tea.Model {
  alertType?: string;
  alertTypeMds?: string;
  aliuid?: number;
  eventTransferExt?: string;
  eventTransferSwitch?: number;
  eventTransferType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  logSource?: string;
  logSourceMds?: string;
  logType?: string;
  logTypeMds?: string;
  queryCycle?: string;
  ruleCondition?: string;
  ruleDesc?: string;
  ruleGroup?: string;
  ruleName?: string;
  ruleThreshold?: string;
  ruleType?: string;
  status?: number;
  threatLevel?: string;
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      alertTypeMds: 'AlertTypeMds',
      aliuid: 'Aliuid',
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

export class DescribeCustomizeRuleCountResponseBodyData extends $tea.Model {
  aggregationRuleNum?: number;
  customizeRuleNum?: number;
  expertRuleNum?: number;
  graphComputingRuleNum?: number;
  highRuleNum?: number;
  inUseRuleNum?: number;
  lowRuleNum?: number;
  mediumRuleNum?: number;
  predefinedRuleNum?: number;
  singleAlertRuleNum?: number;
  totalRuleNum?: number;
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
  id?: number;
  simulateData?: string;
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
  count?: number;
  from?: number;
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
  paraCode?: string;
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
  accountId?: string;
  cloudCode?: string;
  dataSourceInstanceId?: string;
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

export class DescribeDataSourceParametersResponseBodyData extends $tea.Model {
  canEditted?: number;
  cloudCode?: string;
  dataSourceType?: string;
  defaultValue?: string;
  disabled?: boolean;
  formatCheck?: string;
  hit?: string;
  paraCode?: string;
  paraLevel?: number;
  paraName?: string;
  paraType?: string;
  paramValue?: DescribeDataSourceParametersResponseBodyDataParamValue[];
  required?: number;
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
  currentPage?: number;
  pageSize?: number;
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
  description?: string;
  displayName?: string;
  name?: string;
  opCode?: string;
  opLevel?: string;
  paramConfig?: any[];
  taskConfig?: string;
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
  alertNum?: number;
  dispose?: string;
  entityId?: number;
  entityInfo?: { [key: string]: any };
  opcodeMap?: { [key: string]: string };
  opcodeSet?: string[];
  playbookList?: DescribeDisposeAndPlaybookResponseBodyDataResponseDataPlaybookList[];
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
  pageInfo?: DescribeDisposeAndPlaybookResponseBodyDataPageInfo;
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
  playbookName?: string;
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
  entityId?: number;
  entityInfo?: { [key: string]: any };
  entityType?: string;
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
  eventNum?: number;
  highLevelEventNum?: number;
  lowLevelEventNum?: number;
  mediumLevelEventNum?: number;
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
  channel?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  incidentUuid?: string;
  messageTitle?: string;
  receiver?: string;
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
  eventDispose?: any[];
  receiverInfo?: DescribeEventDisposeResponseBodyDataReceiverInfo;
  remark?: string;
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
  importedLogCount?: number;
  totalLogCount?: number;
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
  errorCode?: string;
  logCode?: string;
  logStoreNamePattern?: string;
  productCode?: string;
  projectNamePattern?: string;
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
  logList?: DescribeJobStatusResponseBodyDataErrTaskListProductListLogList[];
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
  productList?: DescribeJobStatusResponseBodyDataErrTaskListProductList[];
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
  configId?: string;
  errTaskList?: DescribeJobStatusResponseBodyDataErrTaskList[];
  failedCount?: number;
  finishCount?: number;
  folderId?: string;
  taskCount?: number;
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
  activityName?: string;
  fieldDesc?: string;
  fieldName?: string;
  fieldType?: string;
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
  logSource?: string;
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
  appendMeta?: boolean;
  autoSplit?: boolean;
  enableTracking?: boolean;
  logStoreName?: string;
  maxSplitShard?: number;
  shardCount?: number;
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
  logType?: string;
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
  index?: number;
  operator?: string;
  operatorDescCn?: string;
  operatorDescEn?: string;
  operatorName?: string;
  supportDataType?: string;
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
  aliyunProdCount?: number;
  hcloudProdCount?: number;
  qcloudProdCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunProdCount: 'AliyunProdCount',
      hcloudProdCount: 'HcloudProdCount',
      qcloudProdCount: 'QcloudProdCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunProdCount: 'number',
      hcloudProdCount: 'number',
      qcloudProdCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScopeUsersResponseBodyData extends $tea.Model {
  aliUid?: number;
  cloudCode?: string;
  domains?: string[];
  instanceId?: string;
  userId?: string;
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
  canBuy?: boolean;
  capacity?: number;
  durationDays?: number;
  endTime?: number;
  mainUserId?: number;
  mainUserName?: string;
  masterUserId?: number;
  masterUserName?: string;
  rdOrder?: number;
  sasInstanceId?: string;
  subUserId?: number;
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
  aliuid?: number;
  domains?: string[];
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
  currentPage?: number;
  pageSize?: number;
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
  isVar?: boolean;
  modifier?: string;
  modifierParam?: { [key: string]: any };
  type?: string;
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
  isVar?: boolean;
  modifier?: string;
  modifierParam?: { [key: string]: any };
  type?: string;
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
  isNot?: boolean;
  itemId?: number;
  left?: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsLeft;
  operator?: string;
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
  conditions?: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditions[];
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
  alertName?: string;
  alertNameId?: string;
  alertType?: string;
  alertTypeId?: string;
  alertUuid?: string;
  aliuid?: number;
  expression?: DescribeWhiteRuleListResponseBodyDataResponseDataExpression;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  incidentUuid?: string;
  status?: number;
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
  pageInfo?: DescribeWhiteRuleListResponseBodyDataPageInfo;
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
  aggQueryd?: string;
  completeOrNot?: boolean;
  count?: number;
  hasSQL?: boolean;
  keys?: string[];
  limited?: number;
  logs?: any[];
  PQuery?: string;
  processedRows?: number;
  queryMode?: number;
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
  existLogStore?: boolean;
  preservedCapacity?: number;
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
  completedOrNot?: boolean;
  count?: number;
  from?: number;
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
  histograms?: GetHistogramsResponseBodyDataHistograms[];
  server?: string;
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
  currentPage?: number;
  pageSize?: number;
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
  completeOrNot?: boolean;
  cost?: number;
  count?: number;
  hasSql?: boolean;
  keys?: string[];
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
  pageInfo?: GetLogsResponseBodyDataPageInfo;
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
  canOperate?: boolean;
  displayRegion?: boolean;
  region?: string;
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
  accessId?: string;
  accessIdMd5?: string;
  accountId?: string;
  accountStr?: string;
  bound?: number;
  cloudCode?: string;
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
  accountId?: string;
  accountName?: string;
  imported?: number;
  logCode?: string;
  mainUserId?: number;
  prodCode?: string;
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
  cloudCode?: string;
  importedLogCount?: number;
  modifyTime?: string;
  prodCode?: string;
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
  currentPage?: number;
  pageSize?: number;
  prodList?: ListAllProdsResponseBodyDataProdList[];
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
  currentPage?: number;
  pageSize?: number;
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
  actionConfig?: string;
  actionType?: string;
  aliuid?: number;
  autoResponseType?: string;
  dataType?: number;
  executionCondition?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  ruleName?: string;
  status?: number;
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
  pageInfo?: ListAutomateResponseConfigsResponseBodyDataPageInfo;
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
  accessId?: string;
  accountId?: string;
  accountName?: string;
  bindId?: number;
  cloudCode?: string;
  createUser?: string;
  dataSourceCount?: number;
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
  accountId?: string;
  accountName?: string;
  cloudCode?: string;
  dataSourceInstanceId?: string;
  dataSourceName?: string;
  dataSourceRemark?: string;
  dataSourceType?: string;
  logCount?: number;
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
  currentPage?: number;
  pageSize?: number;
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
  alertType?: string;
  alertTypeMds?: string;
  aliuid?: number;
  attCk?: string;
  dataType?: number;
  eventTransferExt?: string;
  eventTransferSwitch?: number;
  eventTransferType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  logSource?: string;
  logSourceMds?: string;
  logType?: string;
  logTypeMds?: string;
  queryCycle?: string;
  ruleCondition?: string;
  ruleDesc?: string;
  ruleGroup?: string;
  ruleName?: string;
  ruleThreshold?: string;
  ruleType?: string;
  status?: number;
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
  pageInfo?: ListCloudSiemCustomizeRulesResponseBodyDataPageInfo;
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
  currentPage?: number;
  pageSize?: number;
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
  alertType?: string;
  attCk?: string;
  eventTransferType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  ruleDescMds?: string;
  ruleName?: string;
  ruleNameCn?: string;
  ruleNameEn?: string;
  ruleNameMds?: string;
  source?: string;
  status?: number;
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
  pageInfo?: ListCloudSiemPredefinedRulesResponseBodyDataPageInfo;
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
  currentPage?: number;
  pageSize?: number;
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
  alertDesc?: string;
  alertDetail?: string;
  alertSrcProd?: string;
  alertSrcProdModule?: string;
  attCk?: string;
  eventName?: string;
  eventType?: string;
  level?: string;
  logSource?: string;
  logTime?: string;
  logType?: string;
  mainUserId?: string;
  onlineStatus?: string;
  subUserId?: string;
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
  pageInfo?: ListCustomizeRuleTestResultResponseBodyDataPageInfo;
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
  paraCode?: string;
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
  logCode?: string;
  logInstanceId?: string;
  logMdsCode?: string;
  logParams?: ListDataSourceLogsResponseBodyDataDataSourceInstanceLogsLogParams[];
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
  accountId?: string;
  cloudCode?: string;
  dataSourceInstanceId?: string;
  dataSourceInstanceLogs?: ListDataSourceLogsResponseBodyDataDataSourceInstanceLogs[];
  dataSourceInstanceName?: string;
  dataSourceInstanceRemark?: string;
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
  cloudCode?: string;
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
  key?: string;
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
  canOperateOrNot?: boolean;
  extraParameters?: ListDeliveryResponseBodyDataProductListLogListExtraParameters[];
  logCode?: string;
  logName?: string;
  logNameEn?: string;
  logNameKey?: string;
  status?: boolean;
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
  logList?: ListDeliveryResponseBodyDataProductListLogList[];
  logMap?: { [key: string]: DataProductListLogMapValue[] };
  productCode?: string;
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
  dashboardUrl?: string;
  displaySwitchOrNot?: boolean;
  logStoreName?: string;
  productList?: ListDeliveryResponseBodyDataProductList[];
  projectName?: string;
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
  currentPage?: number;
  pageSize?: number;
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
  alertUuid?: string;
  aliuid?: number;
  effectiveStatus?: number;
  entity?: any[];
  entityId?: number;
  entityType?: string;
  errorMessage?: string;
  finishTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  incidentName?: string;
  incidentUuid?: string;
  playbookName?: string;
  playbookType?: string;
  playbookUuid?: string;
  scope?: any[];
  sophonTaskId?: string;
  status?: number;
  subAliuid?: number;
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
  pageInfo?: ListDisposeStrategyResponseBodyDataPageInfo;
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
  autoImported?: number;
  cloudCode?: string;
  imported?: number;
  importedUserCount?: number;
  logCode?: string;
  logMdsCode?: string;
  logType?: number;
  modifyTime?: string;
  prodCode?: string;
  totalUserCount?: number;
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
  adminOrNot?: boolean;
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
  endPoint?: string;
  localName?: string;
  logStore?: string;
  mainUserId?: number;
  project?: string;
  regionId?: string;
  subUserId?: number;
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
  displayName?: string;
  query?: string;
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
  count?: number;
  quickQueryList?: ListQuickQueryResponseBodyDataQuickQueryList[];
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
  delegatedOrNot?: boolean;
  joined?: boolean;
  joinedTime?: string;
  mainUserId?: number;
  subUserId?: number;
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
  displayLine?: string;
  displayed?: boolean;
  imported?: boolean;
  isDeleted?: number;
  mainUserId?: number;
  sourceLogCode?: string;
  sourceLogInfo?: string;
  sourceProdCode?: string;
  subUserId?: number;
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
  cloudCode?: string;
  imported?: boolean;
  logMdsCode?: string;
  mainUserId?: number;
  sourceLogCode?: string;
  sourceLogName?: string;
  sourceProdCode?: string;
  subUserId?: number;
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
  count?: number;
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
  count?: number;
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
  alertType?: string;
  alertTypeMds?: string;
  aliuid?: number;
  attCk?: string;
  dataType?: number;
  eventTransferExt?: string;
  eventTransferSwitch?: number;
  eventTransferType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  logSource?: string;
  logSourceMds?: string;
  logType?: string;
  logTypeMds?: string;
  queryCycle?: string;
  ruleCondition?: string;
  ruleDesc?: string;
  ruleGroup?: string;
  ruleName?: string;
  ruleThreshold?: string;
  ruleType?: string;
  status?: number;
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

  async addDataSource(request: AddDataSourceRequest): Promise<AddDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDataSourceWithOptions(request, runtime);
  }

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

  async addDataSourceLog(request: AddDataSourceLogRequest): Promise<AddDataSourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDataSourceLogWithOptions(request, runtime);
  }

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

  async addUser(request: AddUserRequest): Promise<AddUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserWithOptions(request, runtime);
  }

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

  async addUserSourceLogConfig(request: AddUserSourceLogConfigRequest): Promise<AddUserSourceLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserSourceLogConfigWithOptions(request, runtime);
  }

  async batchJobCheckWithOptions(request: BatchJobCheckRequest, runtime: $Util.RuntimeOptions): Promise<BatchJobCheckResponse> {
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
      action: "BatchJobCheck",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchJobCheckResponse>(await this.callApi(params, req, runtime), new BatchJobCheckResponse({}));
  }

  async batchJobCheck(request: BatchJobCheckRequest): Promise<BatchJobCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchJobCheckWithOptions(request, runtime);
  }

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

  async batchJobSubmit(request: BatchJobSubmitRequest): Promise<BatchJobSubmitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchJobSubmitWithOptions(request, runtime);
  }

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

  async bindAccount(request: BindAccountRequest): Promise<BindAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAccountWithOptions(request, runtime);
  }

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

  async closeDelivery(request: CloseDeliveryRequest): Promise<CloseDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeDeliveryWithOptions(request, runtime);
  }

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

  async deleteAutomateResponseConfig(request: DeleteAutomateResponseConfigRequest): Promise<DeleteAutomateResponseConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutomateResponseConfigWithOptions(request, runtime);
  }

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

  async deleteBindAccount(request: DeleteBindAccountRequest): Promise<DeleteBindAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBindAccountWithOptions(request, runtime);
  }

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

  async deleteCustomizeRule(request: DeleteCustomizeRuleRequest): Promise<DeleteCustomizeRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomizeRuleWithOptions(request, runtime);
  }

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

  async deleteDataSource(request: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

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

  async deleteDataSourceLog(request: DeleteDataSourceLogRequest): Promise<DeleteDataSourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceLogWithOptions(request, runtime);
  }

  async deleteQuickQueryWithOptions(request: DeleteQuickQueryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQuickQueryResponse> {
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
      action: "DeleteQuickQuery",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQuickQueryResponse>(await this.callApi(params, req, runtime), new DeleteQuickQueryResponse({}));
  }

  async deleteQuickQuery(request: DeleteQuickQueryRequest): Promise<DeleteQuickQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQuickQueryWithOptions(request, runtime);
  }

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

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

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

  async deleteWhiteRuleList(request: DeleteWhiteRuleListRequest): Promise<DeleteWhiteRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWhiteRuleListWithOptions(request, runtime);
  }

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

  async describeAggregateFunction(request: DescribeAggregateFunctionRequest): Promise<DescribeAggregateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAggregateFunctionWithOptions(request, runtime);
  }

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

  async describeAlertScene(request: DescribeAlertSceneRequest): Promise<DescribeAlertSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertSceneWithOptions(request, runtime);
  }

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

  async describeAlertSceneByEvent(request: DescribeAlertSceneByEventRequest): Promise<DescribeAlertSceneByEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertSceneByEventWithOptions(request, runtime);
  }

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

  async describeAlertSource(request: DescribeAlertSourceRequest): Promise<DescribeAlertSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertSourceWithOptions(request, runtime);
  }

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

  async describeAlertSourceWithEvent(request: DescribeAlertSourceWithEventRequest): Promise<DescribeAlertSourceWithEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertSourceWithEventWithOptions(request, runtime);
  }

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

  async describeAlertType(request: DescribeAlertTypeRequest): Promise<DescribeAlertTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertTypeWithOptions(request, runtime);
  }

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

  async describeAlerts(request: DescribeAlertsRequest): Promise<DescribeAlertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertsWithOptions(request, runtime);
  }

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

  async describeAlertsCount(request: DescribeAlertsCountRequest): Promise<DescribeAlertsCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertsCountWithOptions(request, runtime);
  }

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

  async describeAlertsWithEntity(request: DescribeAlertsWithEntityRequest): Promise<DescribeAlertsWithEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertsWithEntityWithOptions(request, runtime);
  }

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

  async describeAlertsWithEvent(request: DescribeAlertsWithEventRequest): Promise<DescribeAlertsWithEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertsWithEventWithOptions(request, runtime);
  }

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

  async describeAttackTimeLine(request: DescribeAttackTimeLineRequest): Promise<DescribeAttackTimeLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAttackTimeLineWithOptions(request, runtime);
  }

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

  async describeAuth(request: DescribeAuthRequest): Promise<DescribeAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuthWithOptions(request, runtime);
  }

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

  async describeAutomateResponseConfigCounter(request: DescribeAutomateResponseConfigCounterRequest): Promise<DescribeAutomateResponseConfigCounterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutomateResponseConfigCounterWithOptions(request, runtime);
  }

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

  async describeAutomateResponseConfigFeature(request: DescribeAutomateResponseConfigFeatureRequest): Promise<DescribeAutomateResponseConfigFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutomateResponseConfigFeatureWithOptions(request, runtime);
  }

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

  async describeAutomateResponseConfigPlayBooks(request: DescribeAutomateResponseConfigPlayBooksRequest): Promise<DescribeAutomateResponseConfigPlayBooksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutomateResponseConfigPlayBooksWithOptions(request, runtime);
  }

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

  async describeCloudSiemAssets(request: DescribeCloudSiemAssetsRequest): Promise<DescribeCloudSiemAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudSiemAssetsWithOptions(request, runtime);
  }

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

  async describeCloudSiemAssetsCounter(request: DescribeCloudSiemAssetsCounterRequest): Promise<DescribeCloudSiemAssetsCounterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudSiemAssetsCounterWithOptions(request, runtime);
  }

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

  async describeCloudSiemEventDetail(request: DescribeCloudSiemEventDetailRequest): Promise<DescribeCloudSiemEventDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudSiemEventDetailWithOptions(request, runtime);
  }

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

  async describeCloudSiemEvents(request: DescribeCloudSiemEventsRequest): Promise<DescribeCloudSiemEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudSiemEventsWithOptions(request, runtime);
  }

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

  async describeCsImportedProdStatusByUser(request: DescribeCsImportedProdStatusByUserRequest): Promise<DescribeCsImportedProdStatusByUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCsImportedProdStatusByUserWithOptions(request, runtime);
  }

  async describeCustomizeRuleWithOptions(request: DescribeCustomizeRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomizeRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomizeRule",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomizeRuleResponse>(await this.callApi(params, req, runtime), new DescribeCustomizeRuleResponse({}));
  }

  async describeCustomizeRule(request: DescribeCustomizeRuleRequest): Promise<DescribeCustomizeRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomizeRuleWithOptions(request, runtime);
  }

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

  async describeCustomizeRuleCount(request: DescribeCustomizeRuleCountRequest): Promise<DescribeCustomizeRuleCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomizeRuleCountWithOptions(request, runtime);
  }

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

  async describeCustomizeRuleTest(request: DescribeCustomizeRuleTestRequest): Promise<DescribeCustomizeRuleTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomizeRuleTestWithOptions(request, runtime);
  }

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

  async describeCustomizeRuleTestHistogram(request: DescribeCustomizeRuleTestHistogramRequest): Promise<DescribeCustomizeRuleTestHistogramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomizeRuleTestHistogramWithOptions(request, runtime);
  }

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

  async describeDataSourceInstance(request: DescribeDataSourceInstanceRequest): Promise<DescribeDataSourceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataSourceInstanceWithOptions(request, runtime);
  }

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

  async describeDataSourceParameters(request: DescribeDataSourceParametersRequest): Promise<DescribeDataSourceParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataSourceParametersWithOptions(request, runtime);
  }

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

  async describeDisposeAndPlaybook(request: DescribeDisposeAndPlaybookRequest): Promise<DescribeDisposeAndPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDisposeAndPlaybookWithOptions(request, runtime);
  }

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

  async describeDisposeStrategyPlaybook(request: DescribeDisposeStrategyPlaybookRequest): Promise<DescribeDisposeStrategyPlaybookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDisposeStrategyPlaybookWithOptions(request, runtime);
  }

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

  async describeEntityInfo(request: DescribeEntityInfoRequest): Promise<DescribeEntityInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEntityInfoWithOptions(request, runtime);
  }

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

  async describeEventCountByThreatLevel(request: DescribeEventCountByThreatLevelRequest): Promise<DescribeEventCountByThreatLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventCountByThreatLevelWithOptions(request, runtime);
  }

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

  async describeEventDispose(request: DescribeEventDisposeRequest): Promise<DescribeEventDisposeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventDisposeWithOptions(request, runtime);
  }

  async describeImportedLogCountWithOptions(request: DescribeImportedLogCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImportedLogCountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
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

  async describeImportedLogCount(request: DescribeImportedLogCountRequest): Promise<DescribeImportedLogCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImportedLogCountWithOptions(request, runtime);
  }

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

  async describeJobStatus(request: DescribeJobStatusRequest): Promise<DescribeJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobStatusWithOptions(request, runtime);
  }

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

  async describeLogFields(request: DescribeLogFieldsRequest): Promise<DescribeLogFieldsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogFieldsWithOptions(request, runtime);
  }

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

  async describeLogSource(request: DescribeLogSourceRequest): Promise<DescribeLogSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogSourceWithOptions(request, runtime);
  }

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

  async describeLogStore(request: DescribeLogStoreRequest): Promise<DescribeLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogStoreWithOptions(request, runtime);
  }

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

  async describeLogType(request: DescribeLogTypeRequest): Promise<DescribeLogTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogTypeWithOptions(request, runtime);
  }

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

  async describeOperators(request: DescribeOperatorsRequest): Promise<DescribeOperatorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOperatorsWithOptions(request, runtime);
  }

  async describeProdCountWithOptions(request: DescribeProdCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProdCountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
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

  async describeProdCount(request: DescribeProdCountRequest): Promise<DescribeProdCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProdCountWithOptions(request, runtime);
  }

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

  async describeScopeUsers(request: DescribeScopeUsersRequest): Promise<DescribeScopeUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScopeUsersWithOptions(request, runtime);
  }

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

  async describeServiceStatus(request: DescribeServiceStatusRequest): Promise<DescribeServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceStatusWithOptions(request, runtime);
  }

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

  async describeStorage(request: DescribeStorageRequest): Promise<DescribeStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStorageWithOptions(request, runtime);
  }

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

  async describeUserBuyStatus(request: DescribeUserBuyStatusRequest): Promise<DescribeUserBuyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserBuyStatusWithOptions(request, runtime);
  }

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

  async describeWafScope(request: DescribeWafScopeRequest): Promise<DescribeWafScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWafScopeWithOptions(request, runtime);
  }

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

  async describeWhiteRuleList(request: DescribeWhiteRuleListRequest): Promise<DescribeWhiteRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWhiteRuleListWithOptions(request, runtime);
  }

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

  async doQuickField(request: DoQuickFieldRequest): Promise<DoQuickFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doQuickFieldWithOptions(request, runtime);
  }

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

  async doSelfDelegate(request: DoSelfDelegateRequest): Promise<DoSelfDelegateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doSelfDelegateWithOptions(request, runtime);
  }

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

  async enableAccessForCloudSiem(request: EnableAccessForCloudSiemRequest): Promise<EnableAccessForCloudSiemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableAccessForCloudSiemWithOptions(request, runtime);
  }

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

  async enableServiceForCloudSiem(request: EnableServiceForCloudSiemRequest): Promise<EnableServiceForCloudSiemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableServiceForCloudSiemWithOptions(request, runtime);
  }

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

  async getCapacity(request: GetCapacityRequest): Promise<GetCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCapacityWithOptions(request, runtime);
  }

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

  async getHistograms(request: GetHistogramsRequest): Promise<GetHistogramsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHistogramsWithOptions(request, runtime);
  }

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

  async getLogs(request: GetLogsRequest): Promise<GetLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogsWithOptions(request, runtime);
  }

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

  async getQuickQuery(request: GetQuickQueryRequest): Promise<GetQuickQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQuickQueryWithOptions(request, runtime);
  }

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

  async getStorage(request: GetStorageRequest): Promise<GetStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStorageWithOptions(request, runtime);
  }

  async listAccountAccessIdWithOptions(request: ListAccountAccessIdRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountAccessIdResponse> {
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

  async listAccountAccessId(request: ListAccountAccessIdRequest): Promise<ListAccountAccessIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountAccessIdWithOptions(request, runtime);
  }

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

  async listAccountsByLog(request: ListAccountsByLogRequest): Promise<ListAccountsByLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountsByLogWithOptions(request, runtime);
  }

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

  async listAllProds(request: ListAllProdsRequest): Promise<ListAllProdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAllProdsWithOptions(request, runtime);
  }

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

  async listAutomateResponseConfigs(request: ListAutomateResponseConfigsRequest): Promise<ListAutomateResponseConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAutomateResponseConfigsWithOptions(request, runtime);
  }

  async listBindAccountWithOptions(request: ListBindAccountRequest, runtime: $Util.RuntimeOptions): Promise<ListBindAccountResponse> {
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

  async listBindAccount(request: ListBindAccountRequest): Promise<ListBindAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBindAccountWithOptions(request, runtime);
  }

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

  async listBindDataSources(request: ListBindDataSourcesRequest): Promise<ListBindDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBindDataSourcesWithOptions(request, runtime);
  }

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

  async listCloudSiemCustomizeRules(request: ListCloudSiemCustomizeRulesRequest): Promise<ListCloudSiemCustomizeRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCloudSiemCustomizeRulesWithOptions(request, runtime);
  }

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

  async listCloudSiemPredefinedRules(request: ListCloudSiemPredefinedRulesRequest): Promise<ListCloudSiemPredefinedRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCloudSiemPredefinedRulesWithOptions(request, runtime);
  }

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

  async listCustomizeRuleTestResult(request: ListCustomizeRuleTestResultRequest): Promise<ListCustomizeRuleTestResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomizeRuleTestResultWithOptions(request, runtime);
  }

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

  async listDataSourceLogs(request: ListDataSourceLogsRequest): Promise<ListDataSourceLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourceLogsWithOptions(request, runtime);
  }

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

  async listDataSourceTypes(request: ListDataSourceTypesRequest): Promise<ListDataSourceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourceTypesWithOptions(request, runtime);
  }

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

  async listDelivery(request: ListDeliveryRequest): Promise<ListDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeliveryWithOptions(request, runtime);
  }

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

  async listDisposeStrategy(request: ListDisposeStrategyRequest): Promise<ListDisposeStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDisposeStrategyWithOptions(request, runtime);
  }

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

  async listImportedLogsByProd(request: ListImportedLogsByProdRequest): Promise<ListImportedLogsByProdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listImportedLogsByProdWithOptions(request, runtime);
  }

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

  async listOperation(request: ListOperationRequest): Promise<ListOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOperationWithOptions(request, runtime);
  }

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

  async listProjectLogStores(request: ListProjectLogStoresRequest): Promise<ListProjectLogStoresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectLogStoresWithOptions(request, runtime);
  }

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

  async listQuickQuery(request: ListQuickQueryRequest): Promise<ListQuickQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQuickQueryWithOptions(request, runtime);
  }

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

  async listRdUsers(request: ListRdUsersRequest): Promise<ListRdUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRdUsersWithOptions(request, runtime);
  }

  async listUserProdLogsWithOptions(request: ListUserProdLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserProdLogsResponse> {
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

  async listUserProdLogs(request: ListUserProdLogsRequest): Promise<ListUserProdLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserProdLogsWithOptions(request, runtime);
  }

  async listUsersByProdWithOptions(request: ListUsersByProdRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersByProdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
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

  async listUsersByProd(request: ListUsersByProdRequest): Promise<ListUsersByProdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersByProdWithOptions(request, runtime);
  }

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

  async modifyBindAccount(request: ModifyBindAccountRequest): Promise<ModifyBindAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBindAccountWithOptions(request, runtime);
  }

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

  async modifyDataSource(request: ModifyDataSourceRequest): Promise<ModifyDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDataSourceWithOptions(request, runtime);
  }

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

  async modifyDataSourceLog(request: ModifyDataSourceLogRequest): Promise<ModifyDataSourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDataSourceLogWithOptions(request, runtime);
  }

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

  async openDelivery(request: OpenDeliveryRequest): Promise<OpenDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openDeliveryWithOptions(request, runtime);
  }

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

  async postAutomateResponseConfig(request: PostAutomateResponseConfigRequest): Promise<PostAutomateResponseConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postAutomateResponseConfigWithOptions(request, runtime);
  }

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

  async postCustomizeRule(request: PostCustomizeRuleRequest): Promise<PostCustomizeRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postCustomizeRuleWithOptions(request, runtime);
  }

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

  async postCustomizeRuleTest(request: PostCustomizeRuleTestRequest): Promise<PostCustomizeRuleTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postCustomizeRuleTestWithOptions(request, runtime);
  }

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

  async postEventDisposeAndWhiteruleList(request: PostEventDisposeAndWhiteruleListRequest): Promise<PostEventDisposeAndWhiteruleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postEventDisposeAndWhiteruleListWithOptions(request, runtime);
  }

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

  async postEventWhiteruleList(request: PostEventWhiteruleListRequest): Promise<PostEventWhiteruleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postEventWhiteruleListWithOptions(request, runtime);
  }

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

  async postFinishCustomizeRuleTest(request: PostFinishCustomizeRuleTestRequest): Promise<PostFinishCustomizeRuleTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postFinishCustomizeRuleTestWithOptions(request, runtime);
  }

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

  async postRuleStatusChange(request: PostRuleStatusChangeRequest): Promise<PostRuleStatusChangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.postRuleStatusChangeWithOptions(request, runtime);
  }

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

  async restoreCapacity(request: RestoreCapacityRequest): Promise<RestoreCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreCapacityWithOptions(request, runtime);
  }

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

  async saveQuickQuery(request: SaveQuickQueryRequest): Promise<SaveQuickQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveQuickQueryWithOptions(request, runtime);
  }

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

  async setStorage(request: SetStorageRequest): Promise<SetStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setStorageWithOptions(request, runtime);
  }

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

  async showQuickAnalysis(request: ShowQuickAnalysisRequest): Promise<ShowQuickAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.showQuickAnalysisWithOptions(request, runtime);
  }

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

  async submitImportLogTasks(request: SubmitImportLogTasksRequest): Promise<SubmitImportLogTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitImportLogTasksWithOptions(request, runtime);
  }

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

  async submitJobs(request: SubmitJobsRequest): Promise<SubmitJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitJobsWithOptions(request, runtime);
  }

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

  async updateAutomateResponseConfigStatus(request: UpdateAutomateResponseConfigStatusRequest): Promise<UpdateAutomateResponseConfigStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAutomateResponseConfigStatusWithOptions(request, runtime);
  }

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

  async updateWhiteRuleList(request: UpdateWhiteRuleListRequest): Promise<UpdateWhiteRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWhiteRuleListWithOptions(request, runtime);
  }

}
