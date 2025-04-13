// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class GetMqttConnectResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMqttConnectResponseBodyData extends $dara.Model {
  accessKey?: string;
  clientId?: string;
  expireTime?: number;
  instanceId?: string;
  qosLevel?: number;
  serverUri?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      clientId: 'ClientId',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      qosLevel: 'QosLevel',
      serverUri: 'ServerUri',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      clientId: 'string',
      expireTime: 'number',
      instanceId: 'string',
      qosLevel: 'number',
      serverUri: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNonceResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNonceResponseBodyData extends $dara.Model {
  expiresIn?: number;
  nonce?: string;
  static names(): { [key: string]: string } {
    return {
      expiresIn: 'ExpiresIn',
      nonce: 'Nonce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresIn: 'number',
      nonce: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMeasurePointListByNodeCodePageResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMeasurePointListByNodeCodePageResponseBodyDataDataList extends $dara.Model {
  acqFreq?: string;
  alarmAttribute?: string;
  alarmLevel?: string;
  calcAttribute?: string;
  calcFormula?: string;
  calcType?: string;
  code?: string;
  createUser?: string;
  dataSourceId?: string;
  dataType?: string;
  description?: string;
  errMsgDetail?: string;
  fullName?: string;
  gmtCreate?: number;
  gmtModify?: number;
  id?: number;
  initValue?: string;
  isEnable?: string;
  lastUploadTime?: string;
  latestValue?: string;
  lowerLimit?: string;
  measurePointState?: string;
  modifyUser?: string;
  name?: string;
  nodeCode?: string;
  nodeId?: number;
  nodeName?: string;
  parentFullName?: string;
  payLoad?: string;
  protocolConfig?: string;
  sourcePoint?: string;
  tenantCode?: string;
  time?: string;
  type?: string;
  unit?: string;
  upperLimit?: string;
  static names(): { [key: string]: string } {
    return {
      acqFreq: 'AcqFreq',
      alarmAttribute: 'AlarmAttribute',
      alarmLevel: 'AlarmLevel',
      calcAttribute: 'CalcAttribute',
      calcFormula: 'CalcFormula',
      calcType: 'CalcType',
      code: 'Code',
      createUser: 'CreateUser',
      dataSourceId: 'DataSourceId',
      dataType: 'DataType',
      description: 'Description',
      errMsgDetail: 'ErrMsgDetail',
      fullName: 'FullName',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      id: 'Id',
      initValue: 'InitValue',
      isEnable: 'IsEnable',
      lastUploadTime: 'LastUploadTime',
      latestValue: 'LatestValue',
      lowerLimit: 'LowerLimit',
      measurePointState: 'MeasurePointState',
      modifyUser: 'ModifyUser',
      name: 'Name',
      nodeCode: 'NodeCode',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      parentFullName: 'ParentFullName',
      payLoad: 'PayLoad',
      protocolConfig: 'ProtocolConfig',
      sourcePoint: 'SourcePoint',
      tenantCode: 'TenantCode',
      time: 'Time',
      type: 'Type',
      unit: 'Unit',
      upperLimit: 'UpperLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acqFreq: 'string',
      alarmAttribute: 'string',
      alarmLevel: 'string',
      calcAttribute: 'string',
      calcFormula: 'string',
      calcType: 'string',
      code: 'string',
      createUser: 'string',
      dataSourceId: 'string',
      dataType: 'string',
      description: 'string',
      errMsgDetail: 'string',
      fullName: 'string',
      gmtCreate: 'number',
      gmtModify: 'number',
      id: 'number',
      initValue: 'string',
      isEnable: 'string',
      lastUploadTime: 'string',
      latestValue: 'string',
      lowerLimit: 'string',
      measurePointState: 'string',
      modifyUser: 'string',
      name: 'string',
      nodeCode: 'string',
      nodeId: 'number',
      nodeName: 'string',
      parentFullName: 'string',
      payLoad: 'string',
      protocolConfig: 'string',
      sourcePoint: 'string',
      tenantCode: 'string',
      time: 'string',
      type: 'string',
      unit: 'string',
      upperLimit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMeasurePointListByNodeCodePageResponseBodyData extends $dara.Model {
  count?: number;
  currentPage?: number;
  dataList?: ListMeasurePointListByNodeCodePageResponseBodyDataDataList[];
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      dataList: 'DataList',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      dataList: { 'type': 'array', 'itemType': ListMeasurePointListByNodeCodePageResponseBodyDataDataList },
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiFieldBatchUploadResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiFieldBatchUploadResponseBodyDataMessage extends $dara.Model {
  errorMsg?: string;
  measurePoint?: string;
  node?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      measurePoint: 'MeasurePoint',
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      measurePoint: 'string',
      node: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiFieldBatchUploadResponseBodyData extends $dara.Model {
  count?: number;
  message?: MultiFieldBatchUploadResponseBodyDataMessage[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      message: { 'type': 'array', 'itemType': MultiFieldBatchUploadResponseBodyDataMessage },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiSourcePointBatchUploadResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiSourcePointBatchUploadResponseBodyDataMessage extends $dara.Model {
  errorMsg?: string;
  node?: string;
  sourcePoint?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      node: 'Node',
      sourcePoint: 'SourcePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      node: 'string',
      sourcePoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiSourcePointBatchUploadResponseBodyData extends $dara.Model {
  count?: number;
  message?: MultiSourcePointBatchUploadResponseBodyDataMessage[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      message: { 'type': 'array', 'itemType': MultiSourcePointBatchUploadResponseBodyDataMessage },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFieldLatestBySourcePointResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFieldLatestBySourcePointResponseBodyDataValues extends $dara.Model {
  eventTime?: string;
  processTime?: string;
  quality?: number;
  sampleType?: string;
  time?: number;
  timestamp?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      eventTime: 'EventTime',
      processTime: 'ProcessTime',
      quality: 'Quality',
      sampleType: 'SampleType',
      time: 'Time',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTime: 'string',
      processTime: 'string',
      quality: 'number',
      sampleType: 'string',
      time: 'number',
      timestamp: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFieldLatestBySourcePointResponseBodyData extends $dara.Model {
  measurePoint?: string;
  node?: string;
  sourcePoint?: string;
  valueType?: string;
  values?: QueryFieldLatestBySourcePointResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      measurePoint: 'MeasurePoint',
      node: 'Node',
      sourcePoint: 'SourcePoint',
      valueType: 'ValueType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurePoint: 'string',
      node: 'string',
      sourcePoint: 'string',
      valueType: 'string',
      values: { 'type': 'array', 'itemType': QueryFieldLatestBySourcePointResponseBodyDataValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceDataResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceDataResponseBodyDataValues extends $dara.Model {
  eventTime?: string;
  processTime?: string;
  quality?: number;
  time?: number;
  timeStamp?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      eventTime: 'EventTime',
      processTime: 'ProcessTime',
      quality: 'Quality',
      time: 'Time',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTime: 'string',
      processTime: 'string',
      quality: 'number',
      time: 'number',
      timeStamp: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceDataResponseBodyData extends $dara.Model {
  measurePoint?: string;
  node?: string;
  valueType?: string;
  values?: QueryIndustryDeviceDataResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      measurePoint: 'MeasurePoint',
      node: 'Node',
      valueType: 'ValueType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurePoint: 'string',
      node: 'string',
      valueType: 'string',
      values: { 'type': 'array', 'itemType': QueryIndustryDeviceDataResponseBodyDataValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceLimitsDataResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceLimitsDataResponseBodyDataValues extends $dara.Model {
  eventTime?: string;
  processTime?: string;
  quality?: number;
  time?: number;
  timeStamp?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      eventTime: 'EventTime',
      processTime: 'ProcessTime',
      quality: 'Quality',
      time: 'Time',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTime: 'string',
      processTime: 'string',
      quality: 'number',
      time: 'number',
      timeStamp: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceLimitsDataResponseBodyData extends $dara.Model {
  measurePoint?: string;
  node?: string;
  valueType?: string;
  values?: QueryIndustryDeviceLimitsDataResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      measurePoint: 'MeasurePoint',
      node: 'Node',
      valueType: 'ValueType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurePoint: 'string',
      node: 'string',
      valueType: 'string',
      values: { 'type': 'array', 'itemType': QueryIndustryDeviceLimitsDataResponseBodyDataValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceStatusDataResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceStatusDataResponseBodyData extends $dara.Model {
  measurePoint?: string;
  node?: string;
  valueType?: string;
  values?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      measurePoint: 'MeasurePoint',
      node: 'Node',
      valueType: 'ValueType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurePoint: 'string',
      node: 'string',
      valueType: 'string',
      values: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourcePointBatchResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourcePointBatchResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadIndustryDeviceDataResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadIndustryDeviceDataResponseBodyDataMessage extends $dara.Model {
  errorMsg?: string;
  measurePoint?: string;
  node?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      measurePoint: 'MeasurePoint',
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      measurePoint: 'string',
      node: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadIndustryDeviceDataResponseBodyData extends $dara.Model {
  count?: number;
  message?: UploadIndustryDeviceDataResponseBodyDataMessage[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      message: { 'type': 'array', 'itemType': UploadIndustryDeviceDataResponseBodyDataMessage },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMqttConnectRequest extends $dara.Model {
  request?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.request) {
      $dara.Model.validateMap(this.request);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMqttConnectResponseBody extends $dara.Model {
  accessDeniedDetail?: GetMqttConnectResponseBodyAccessDeniedDetail;
  code?: string;
  data?: GetMqttConnectResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: GetMqttConnectResponseBodyAccessDeniedDetail,
      code: 'string',
      data: GetMqttConnectResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMqttConnectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMqttConnectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMqttConnectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNonceRequest extends $dara.Model {
  request?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.request) {
      $dara.Model.validateMap(this.request);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNonceResponseBody extends $dara.Model {
  accessDeniedDetail?: GetNonceResponseBodyAccessDeniedDetail;
  code?: string;
  data?: GetNonceResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: GetNonceResponseBodyAccessDeniedDetail,
      code: 'string',
      data: GetNonceResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNonceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNonceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNonceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMeasurePointListByNodeCodePageRequest extends $dara.Model {
  request?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.request) {
      $dara.Model.validateMap(this.request);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMeasurePointListByNodeCodePageResponseBody extends $dara.Model {
  accessDeniedDetail?: ListMeasurePointListByNodeCodePageResponseBodyAccessDeniedDetail;
  code?: string;
  data?: ListMeasurePointListByNodeCodePageResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: ListMeasurePointListByNodeCodePageResponseBodyAccessDeniedDetail,
      code: 'string',
      data: ListMeasurePointListByNodeCodePageResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMeasurePointListByNodeCodePageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMeasurePointListByNodeCodePageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMeasurePointListByNodeCodePageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiFieldBatchUploadRequest extends $dara.Model {
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiFieldBatchUploadResponseBody extends $dara.Model {
  accessDeniedDetail?: MultiFieldBatchUploadResponseBodyAccessDeniedDetail;
  code?: string;
  data?: MultiFieldBatchUploadResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: MultiFieldBatchUploadResponseBodyAccessDeniedDetail,
      code: 'string',
      data: MultiFieldBatchUploadResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiFieldBatchUploadResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MultiFieldBatchUploadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MultiFieldBatchUploadResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiSourcePointBatchUploadRequest extends $dara.Model {
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiSourcePointBatchUploadResponseBody extends $dara.Model {
  accessDeniedDetail?: MultiSourcePointBatchUploadResponseBodyAccessDeniedDetail;
  code?: string;
  data?: MultiSourcePointBatchUploadResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: MultiSourcePointBatchUploadResponseBodyAccessDeniedDetail,
      code: 'string',
      data: MultiSourcePointBatchUploadResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiSourcePointBatchUploadResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MultiSourcePointBatchUploadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MultiSourcePointBatchUploadResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFieldLatestBySourcePointRequest extends $dara.Model {
  request?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.request) {
      $dara.Model.validateMap(this.request);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFieldLatestBySourcePointResponseBody extends $dara.Model {
  accessDeniedDetail?: QueryFieldLatestBySourcePointResponseBodyAccessDeniedDetail;
  code?: string;
  data?: QueryFieldLatestBySourcePointResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: QueryFieldLatestBySourcePointResponseBodyAccessDeniedDetail,
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryFieldLatestBySourcePointResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFieldLatestBySourcePointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryFieldLatestBySourcePointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFieldLatestBySourcePointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceDataRequest extends $dara.Model {
  request?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.request) {
      $dara.Model.validateMap(this.request);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceDataResponseBody extends $dara.Model {
  accessDeniedDetail?: QueryIndustryDeviceDataResponseBodyAccessDeniedDetail;
  code?: string;
  data?: QueryIndustryDeviceDataResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: QueryIndustryDeviceDataResponseBodyAccessDeniedDetail,
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryIndustryDeviceDataResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryIndustryDeviceDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryIndustryDeviceDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceLimitsDataRequest extends $dara.Model {
  request?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.request) {
      $dara.Model.validateMap(this.request);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceLimitsDataResponseBody extends $dara.Model {
  accessDeniedDetail?: QueryIndustryDeviceLimitsDataResponseBodyAccessDeniedDetail;
  code?: string;
  data?: QueryIndustryDeviceLimitsDataResponseBodyData[];
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: QueryIndustryDeviceLimitsDataResponseBodyAccessDeniedDetail,
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryIndustryDeviceLimitsDataResponseBodyData },
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceLimitsDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryIndustryDeviceLimitsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryIndustryDeviceLimitsDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceStatusDataRequest extends $dara.Model {
  request?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.request) {
      $dara.Model.validateMap(this.request);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceStatusDataResponseBody extends $dara.Model {
  accessDeniedDetail?: QueryIndustryDeviceStatusDataResponseBodyAccessDeniedDetail;
  code?: string;
  data?: QueryIndustryDeviceStatusDataResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: QueryIndustryDeviceStatusDataResponseBodyAccessDeniedDetail,
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryIndustryDeviceStatusDataResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIndustryDeviceStatusDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryIndustryDeviceStatusDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryIndustryDeviceStatusDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourcePointBatchRequest extends $dara.Model {
  request?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.request) {
      $dara.Model.validateMap(this.request);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourcePointBatchResponseBody extends $dara.Model {
  accessDeniedDetail?: SourcePointBatchResponseBodyAccessDeniedDetail;
  code?: string;
  data?: SourcePointBatchResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: SourcePointBatchResponseBodyAccessDeniedDetail,
      code: 'string',
      data: SourcePointBatchResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourcePointBatchResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SourcePointBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SourcePointBatchResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadIndustryDeviceDataRequest extends $dara.Model {
  request?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.request) {
      $dara.Model.validateMap(this.request);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadIndustryDeviceDataResponseBody extends $dara.Model {
  accessDeniedDetail?: UploadIndustryDeviceDataResponseBodyAccessDeniedDetail;
  code?: string;
  data?: UploadIndustryDeviceDataResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: UploadIndustryDeviceDataResponseBodyAccessDeniedDetail,
      code: 'string',
      data: UploadIndustryDeviceDataResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadIndustryDeviceDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadIndustryDeviceDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadIndustryDeviceDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "et-industry.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("et-industry-openapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request - GetMqttConnectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMqttConnectResponse
   */
  async getMqttConnectWithOptions(request: GetMqttConnectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetMqttConnectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.request)) {
      body["Request"] = request.request;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMqttConnect",
      version: "2020-08-24",
      protocol: "HTTPS",
      pathname: `/api/igate/collaboration/pop/getmqttconnect`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMqttConnectResponse>(await this.callApi(params, req, runtime), new GetMqttConnectResponse({}));
    } else {
      return $dara.cast<GetMqttConnectResponse>(await this.execute(params, req, runtime), new GetMqttConnectResponse({}));
    }

  }

  /**
   * @param request - GetMqttConnectRequest
   * @returns GetMqttConnectResponse
   */
  async getMqttConnect(request: GetMqttConnectRequest): Promise<GetMqttConnectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMqttConnectWithOptions(request, headers, runtime);
  }

  /**
   * @param request - GetNonceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNonceResponse
   */
  async getNonceWithOptions(request: GetNonceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetNonceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.request)) {
      body["Request"] = request.request;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNonce",
      version: "2020-08-24",
      protocol: "HTTPS",
      pathname: `/api/igate/collaboration/pop/getnonce`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetNonceResponse>(await this.callApi(params, req, runtime), new GetNonceResponse({}));
    } else {
      return $dara.cast<GetNonceResponse>(await this.execute(params, req, runtime), new GetNonceResponse({}));
    }

  }

  /**
   * @param request - GetNonceRequest
   * @returns GetNonceResponse
   */
  async getNonce(request: GetNonceRequest): Promise<GetNonceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNonceWithOptions(request, headers, runtime);
  }

  /**
   * @param request - ListMeasurePointListByNodeCodePageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMeasurePointListByNodeCodePageResponse
   */
  async listMeasurePointListByNodeCodePageWithOptions(request: ListMeasurePointListByNodeCodePageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListMeasurePointListByNodeCodePageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.request)) {
      body["Request"] = request.request;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMeasurePointListByNodeCodePage",
      version: "2020-08-24",
      protocol: "HTTPS",
      pathname: `/api/igate/node/pop/measurepointlistbynodecodepage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListMeasurePointListByNodeCodePageResponse>(await this.callApi(params, req, runtime), new ListMeasurePointListByNodeCodePageResponse({}));
    } else {
      return $dara.cast<ListMeasurePointListByNodeCodePageResponse>(await this.execute(params, req, runtime), new ListMeasurePointListByNodeCodePageResponse({}));
    }

  }

  /**
   * @param request - ListMeasurePointListByNodeCodePageRequest
   * @returns ListMeasurePointListByNodeCodePageResponse
   */
  async listMeasurePointListByNodeCodePage(request: ListMeasurePointListByNodeCodePageRequest): Promise<ListMeasurePointListByNodeCodePageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMeasurePointListByNodeCodePageWithOptions(request, headers, runtime);
  }

  /**
   * 多值批量上报
   * 
   * @param request - MultiFieldBatchUploadRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MultiFieldBatchUploadResponse
   */
  async multiFieldBatchUploadWithOptions(request: MultiFieldBatchUploadRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<MultiFieldBatchUploadResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MultiFieldBatchUpload",
      version: "2020-08-24",
      protocol: "HTTPS",
      pathname: `/api/igate/timeseries/upload/pop/multifieldbatchv2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<MultiFieldBatchUploadResponse>(await this.callApi(params, req, runtime), new MultiFieldBatchUploadResponse({}));
    } else {
      return $dara.cast<MultiFieldBatchUploadResponse>(await this.execute(params, req, runtime), new MultiFieldBatchUploadResponse({}));
    }

  }

  /**
   * 多值批量上报
   * 
   * @param request - MultiFieldBatchUploadRequest
   * @returns MultiFieldBatchUploadResponse
   */
  async multiFieldBatchUpload(request: MultiFieldBatchUploadRequest): Promise<MultiFieldBatchUploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.multiFieldBatchUploadWithOptions(request, headers, runtime);
  }

  /**
   * 多源点位批量上报
   * 
   * @param request - MultiSourcePointBatchUploadRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MultiSourcePointBatchUploadResponse
   */
  async multiSourcePointBatchUploadWithOptions(request: MultiSourcePointBatchUploadRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<MultiSourcePointBatchUploadResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MultiSourcePointBatchUpload",
      version: "2020-08-24",
      protocol: "HTTPS",
      pathname: `/api/igate/timeseries/upload/pop/sourcepointbatchv2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<MultiSourcePointBatchUploadResponse>(await this.callApi(params, req, runtime), new MultiSourcePointBatchUploadResponse({}));
    } else {
      return $dara.cast<MultiSourcePointBatchUploadResponse>(await this.execute(params, req, runtime), new MultiSourcePointBatchUploadResponse({}));
    }

  }

  /**
   * 多源点位批量上报
   * 
   * @param request - MultiSourcePointBatchUploadRequest
   * @returns MultiSourcePointBatchUploadResponse
   */
  async multiSourcePointBatchUpload(request: MultiSourcePointBatchUploadRequest): Promise<MultiSourcePointBatchUploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.multiSourcePointBatchUploadWithOptions(request, headers, runtime);
  }

  /**
   * @param request - QueryFieldLatestBySourcePointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFieldLatestBySourcePointResponse
   */
  async queryFieldLatestBySourcePointWithOptions(request: QueryFieldLatestBySourcePointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryFieldLatestBySourcePointResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.request)) {
      body["Request"] = request.request;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFieldLatestBySourcePoint",
      version: "2020-08-24",
      protocol: "HTTPS",
      pathname: `/api/igate/timeseries/query/pop/multifieldlatestbysourcepoint`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryFieldLatestBySourcePointResponse>(await this.callApi(params, req, runtime), new QueryFieldLatestBySourcePointResponse({}));
    } else {
      return $dara.cast<QueryFieldLatestBySourcePointResponse>(await this.execute(params, req, runtime), new QueryFieldLatestBySourcePointResponse({}));
    }

  }

  /**
   * @param request - QueryFieldLatestBySourcePointRequest
   * @returns QueryFieldLatestBySourcePointResponse
   */
  async queryFieldLatestBySourcePoint(request: QueryFieldLatestBySourcePointRequest): Promise<QueryFieldLatestBySourcePointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryFieldLatestBySourcePointWithOptions(request, headers, runtime);
  }

  /**
   * @param request - QueryIndustryDeviceDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryIndustryDeviceDataResponse
   */
  async queryIndustryDeviceDataWithOptions(request: QueryIndustryDeviceDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryIndustryDeviceDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.request)) {
      body["Request"] = request.request;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryIndustryDeviceData",
      version: "2020-08-24",
      protocol: "HTTPS",
      pathname: `/api/igate/timeseries/query/pop/multifieldlatest`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryIndustryDeviceDataResponse>(await this.callApi(params, req, runtime), new QueryIndustryDeviceDataResponse({}));
    } else {
      return $dara.cast<QueryIndustryDeviceDataResponse>(await this.execute(params, req, runtime), new QueryIndustryDeviceDataResponse({}));
    }

  }

  /**
   * @param request - QueryIndustryDeviceDataRequest
   * @returns QueryIndustryDeviceDataResponse
   */
  async queryIndustryDeviceData(request: QueryIndustryDeviceDataRequest): Promise<QueryIndustryDeviceDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryIndustryDeviceDataWithOptions(request, headers, runtime);
  }

  /**
   * @param request - QueryIndustryDeviceLimitsDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryIndustryDeviceLimitsDataResponse
   */
  async queryIndustryDeviceLimitsDataWithOptions(request: QueryIndustryDeviceLimitsDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryIndustryDeviceLimitsDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.request)) {
      body["Request"] = request.request;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryIndustryDeviceLimitsData",
      version: "2020-08-24",
      protocol: "HTTPS",
      pathname: `/api/igate/timeseries/query/pop/multifieldrange`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryIndustryDeviceLimitsDataResponse>(await this.callApi(params, req, runtime), new QueryIndustryDeviceLimitsDataResponse({}));
    } else {
      return $dara.cast<QueryIndustryDeviceLimitsDataResponse>(await this.execute(params, req, runtime), new QueryIndustryDeviceLimitsDataResponse({}));
    }

  }

  /**
   * @param request - QueryIndustryDeviceLimitsDataRequest
   * @returns QueryIndustryDeviceLimitsDataResponse
   */
  async queryIndustryDeviceLimitsData(request: QueryIndustryDeviceLimitsDataRequest): Promise<QueryIndustryDeviceLimitsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryIndustryDeviceLimitsDataWithOptions(request, headers, runtime);
  }

  /**
   * @param request - QueryIndustryDeviceStatusDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryIndustryDeviceStatusDataResponse
   */
  async queryIndustryDeviceStatusDataWithOptions(request: QueryIndustryDeviceStatusDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryIndustryDeviceStatusDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.request)) {
      body["Request"] = request.request;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryIndustryDeviceStatusData",
      version: "2020-08-24",
      protocol: "HTTPS",
      pathname: `/api/igate/timeseries/query/pop/multifieldrangestatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryIndustryDeviceStatusDataResponse>(await this.callApi(params, req, runtime), new QueryIndustryDeviceStatusDataResponse({}));
    } else {
      return $dara.cast<QueryIndustryDeviceStatusDataResponse>(await this.execute(params, req, runtime), new QueryIndustryDeviceStatusDataResponse({}));
    }

  }

  /**
   * @param request - QueryIndustryDeviceStatusDataRequest
   * @returns QueryIndustryDeviceStatusDataResponse
   */
  async queryIndustryDeviceStatusData(request: QueryIndustryDeviceStatusDataRequest): Promise<QueryIndustryDeviceStatusDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryIndustryDeviceStatusDataWithOptions(request, headers, runtime);
  }

  /**
   * @param request - SourcePointBatchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SourcePointBatchResponse
   */
  async sourcePointBatchWithOptions(request: SourcePointBatchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SourcePointBatchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.request)) {
      body["Request"] = request.request;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SourcePointBatch",
      version: "2020-08-24",
      protocol: "HTTPS",
      pathname: `/api/igate/timeseries/upload/pop/sourcepointbatch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SourcePointBatchResponse>(await this.callApi(params, req, runtime), new SourcePointBatchResponse({}));
    } else {
      return $dara.cast<SourcePointBatchResponse>(await this.execute(params, req, runtime), new SourcePointBatchResponse({}));
    }

  }

  /**
   * @param request - SourcePointBatchRequest
   * @returns SourcePointBatchResponse
   */
  async sourcePointBatch(request: SourcePointBatchRequest): Promise<SourcePointBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sourcePointBatchWithOptions(request, headers, runtime);
  }

  /**
   * @param request - UploadIndustryDeviceDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadIndustryDeviceDataResponse
   */
  async uploadIndustryDeviceDataWithOptions(request: UploadIndustryDeviceDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UploadIndustryDeviceDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.request)) {
      body["Request"] = request.request;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadIndustryDeviceData",
      version: "2020-08-24",
      protocol: "HTTPS",
      pathname: `/api/igate/timeseries/upload/pop/multifieldbatch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadIndustryDeviceDataResponse>(await this.callApi(params, req, runtime), new UploadIndustryDeviceDataResponse({}));
    } else {
      return $dara.cast<UploadIndustryDeviceDataResponse>(await this.execute(params, req, runtime), new UploadIndustryDeviceDataResponse({}));
    }

  }

  /**
   * @param request - UploadIndustryDeviceDataRequest
   * @returns UploadIndustryDeviceDataResponse
   */
  async uploadIndustryDeviceData(request: UploadIndustryDeviceDataRequest): Promise<UploadIndustryDeviceDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadIndustryDeviceDataWithOptions(request, headers, runtime);
  }

}
