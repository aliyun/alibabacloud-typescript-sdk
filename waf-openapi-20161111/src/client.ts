// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateInstanceRequest extends $tea.Model {
  autoRenewDuration?: number;
  clientToken?: string;
  duration?: number;
  extBandwidth?: number;
  extDomainPackage?: number;
  isAutoRenew?: boolean;
  ownerId?: number;
  packageCode?: string;
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewDuration: 'AutoRenewDuration',
      clientToken: 'ClientToken',
      duration: 'Duration',
      extBandwidth: 'ExtBandwidth',
      extDomainPackage: 'ExtDomainPackage',
      isAutoRenew: 'IsAutoRenew',
      ownerId: 'OwnerId',
      packageCode: 'PackageCode',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewDuration: 'number',
      clientToken: 'string',
      duration: 'number',
      extBandwidth: 'number',
      extDomainPackage: 'number',
      isAutoRenew: 'boolean',
      ownerId: 'number',
      packageCode: 'string',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  instanceId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $tea.Model {
  instanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBody extends $tea.Model {
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

export class ReleaseInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  clientToken?: string;
  duration?: number;
  instanceId?: string;
  ownerId?: number;
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      duration: 'Duration',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      duration: 'number',
      instanceId: 'string',
      ownerId: 'number',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenewInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceRequest extends $tea.Model {
  clientToken?: string;
  extBandwidth?: number;
  extDomainPackage?: number;
  instanceId?: string;
  ownerId?: number;
  packageCode?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      extBandwidth: 'ExtBandwidth',
      extDomainPackage: 'ExtDomainPackage',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      packageCode: 'PackageCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      extBandwidth: 'number',
      extDomainPackage: 'number',
      instanceId: 'string',
      ownerId: 'number',
      packageCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeInstanceResponseBody,
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
      'cn-qingdao': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-chengdu': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-zhangjiakou': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-huhehaote': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-hangzhou': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-heyuan': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-wulanchabu': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'us-west-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'us-east-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'eu-central-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'me-east-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'cn-shanghai-finance-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen-finance-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-north-2-gov-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("waf-openapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenewDuration)) {
      query["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.extBandwidth)) {
      query["ExtBandwidth"] = request.extBandwidth;
    }

    if (!Util.isUnset(request.extDomainPackage)) {
      query["ExtDomainPackage"] = request.extDomainPackage;
    }

    if (!Util.isUnset(request.isAutoRenew)) {
      query["IsAutoRenew"] = request.isAutoRenew;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.packageCode)) {
      query["PackageCode"] = request.packageCode;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseInstance",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseInstanceResponse({}));
  }

  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewInstance",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewInstanceResponse>(await this.callApi(params, req, runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  async upgradeInstanceWithOptions(request: UpgradeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.extBandwidth)) {
      query["ExtBandwidth"] = request.extBandwidth;
    }

    if (!Util.isUnset(request.extDomainPackage)) {
      query["ExtDomainPackage"] = request.extDomainPackage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.packageCode)) {
      query["PackageCode"] = request.packageCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeInstance",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeInstanceResponse>(await this.callApi(params, req, runtime), new UpgradeInstanceResponse({}));
  }

  async upgradeInstance(request: UpgradeInstanceRequest): Promise<UpgradeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeInstanceWithOptions(request, runtime);
  }

}
