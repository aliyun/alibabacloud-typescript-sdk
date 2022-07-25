// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateSandboxInstanceRequest extends $tea.Model {
  backupPlanId?: string;
  backupSetId?: string;
  restoreTime?: string;
  sandboxInstanceName?: string;
  sandboxPassword?: string;
  sandboxSpecification?: string;
  sandboxType?: string;
  sandboxUser?: string;
  vpcId?: string;
  vpcSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupSetId: 'BackupSetId',
      restoreTime: 'RestoreTime',
      sandboxInstanceName: 'SandboxInstanceName',
      sandboxPassword: 'SandboxPassword',
      sandboxSpecification: 'SandboxSpecification',
      sandboxType: 'SandboxType',
      sandboxUser: 'SandboxUser',
      vpcId: 'VpcId',
      vpcSwitchId: 'VpcSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupSetId: 'string',
      restoreTime: 'string',
      sandboxInstanceName: 'string',
      sandboxPassword: 'string',
      sandboxSpecification: 'string',
      sandboxType: 'string',
      sandboxUser: 'string',
      vpcId: 'string',
      vpcSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSandboxInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: CreateSandboxInstanceResponseBodyData;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateSandboxInstanceResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSandboxInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSandboxInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSandboxInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSandboxInstanceRequest extends $tea.Model {
  backupPlanId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSandboxInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSandboxInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSandboxInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSandboxInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxBackupSetsRequest extends $tea.Model {
  backupPlanId?: string;
  backupSetId?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupSetId: 'BackupSetId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupSetId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxBackupSetsResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxBackupSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSandboxBackupSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSandboxBackupSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxInstancesRequest extends $tea.Model {
  backupPlanId?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxInstancesResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSandboxInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSandboxInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxRecoveryTimeRequest extends $tea.Model {
  backupPlanId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxRecoveryTimeResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeSandboxRecoveryTimeResponseBodyData;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeSandboxRecoveryTimeResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxRecoveryTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSandboxRecoveryTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSandboxRecoveryTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSandboxInstanceResponseBodyData extends $tea.Model {
  backupPlanId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxRecoveryTimeResponseBodyData extends $tea.Model {
  backupPlanId?: string;
  recoveryBeginTime?: string;
  recoveryEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      recoveryBeginTime: 'RecoveryBeginTime',
      recoveryEndTime: 'RecoveryEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      recoveryBeginTime: 'string',
      recoveryEndTime: 'string',
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
      'cn-qingdao': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-chengdu': "dbs-api.cn-chengdu.aliyuncs.com",
      'cn-zhangjiakou': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-huhehaote': "dbs-api.cn-huhehaote.aliyuncs.com",
      'cn-hangzhou': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "dbs-api.cn-hangzhou.aliyuncs.com",
      'ap-southeast-1': "dbs-api.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "dbs-api.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "dbs-api.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "dbs-api.ap-southeast-5.aliyuncs.com",
      'ap-northeast-1': "dbs-api.ap-northeast-1.aliyuncs.com",
      'us-west-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'us-east-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'eu-central-1': "dbs-api.eu-central-1.aliyuncs.com",
      'cn-hangzhou-finance': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shanghai-finance-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen-finance-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'ap-south-1': "dbs-api.ap-south-1.aliyuncs.com",
      'eu-west-1': "dbs-api.eu-west-1.aliyuncs.com",
      'me-east-1': "dbs-api.me-east-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dbs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createSandboxInstanceWithOptions(request: CreateSandboxInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateSandboxInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!Util.isUnset(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!Util.isUnset(request.sandboxInstanceName)) {
      query["SandboxInstanceName"] = request.sandboxInstanceName;
    }

    if (!Util.isUnset(request.sandboxPassword)) {
      query["SandboxPassword"] = request.sandboxPassword;
    }

    if (!Util.isUnset(request.sandboxSpecification)) {
      query["SandboxSpecification"] = request.sandboxSpecification;
    }

    if (!Util.isUnset(request.sandboxType)) {
      query["SandboxType"] = request.sandboxType;
    }

    if (!Util.isUnset(request.sandboxUser)) {
      query["SandboxUser"] = request.sandboxUser;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcSwitchId)) {
      query["VpcSwitchId"] = request.vpcSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSandboxInstance",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSandboxInstanceResponse>(await this.callApi(params, req, runtime), new CreateSandboxInstanceResponse({}));
  }

  async createSandboxInstance(request: CreateSandboxInstanceRequest): Promise<CreateSandboxInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSandboxInstanceWithOptions(request, runtime);
  }

  async deleteSandboxInstanceWithOptions(request: DeleteSandboxInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSandboxInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSandboxInstance",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSandboxInstanceResponse>(await this.callApi(params, req, runtime), new DeleteSandboxInstanceResponse({}));
  }

  async deleteSandboxInstance(request: DeleteSandboxInstanceRequest): Promise<DeleteSandboxInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSandboxInstanceWithOptions(request, runtime);
  }

  async describeSandboxBackupSetsWithOptions(request: DescribeSandboxBackupSetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSandboxBackupSetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSandboxBackupSets",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSandboxBackupSetsResponse>(await this.callApi(params, req, runtime), new DescribeSandboxBackupSetsResponse({}));
  }

  async describeSandboxBackupSets(request: DescribeSandboxBackupSetsRequest): Promise<DescribeSandboxBackupSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSandboxBackupSetsWithOptions(request, runtime);
  }

  async describeSandboxInstancesWithOptions(request: DescribeSandboxInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSandboxInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSandboxInstances",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSandboxInstancesResponse>(await this.callApi(params, req, runtime), new DescribeSandboxInstancesResponse({}));
  }

  async describeSandboxInstances(request: DescribeSandboxInstancesRequest): Promise<DescribeSandboxInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSandboxInstancesWithOptions(request, runtime);
  }

  async describeSandboxRecoveryTimeWithOptions(request: DescribeSandboxRecoveryTimeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSandboxRecoveryTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSandboxRecoveryTime",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSandboxRecoveryTimeResponse>(await this.callApi(params, req, runtime), new DescribeSandboxRecoveryTimeResponse({}));
  }

  async describeSandboxRecoveryTime(request: DescribeSandboxRecoveryTimeRequest): Promise<DescribeSandboxRecoveryTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSandboxRecoveryTimeWithOptions(request, runtime);
  }

}
