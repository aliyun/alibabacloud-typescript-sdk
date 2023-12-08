// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BillingApplicationRequest extends $tea.Model {
  month?: number;
  resourceGroupId?: string;
  year?: number;
  static names(): { [key: string]: string } {
    return {
      month: 'Month',
      resourceGroupId: 'ResourceGroupId',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      month: 'number',
      resourceGroupId: 'string',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BillingApplicationResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BillingApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BillingApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BillingApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployDetailRequest extends $tea.Model {
  appId?: string;
  maxResults?: number;
  nextToken?: number;
  refId?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      refId: 'RefId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      maxResults: 'number',
      nextToken: 'number',
      refId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployDetailResponseBody extends $tea.Model {
  code?: number;
  data?: GetDeployDetailResponseBodyData[];
  message?: string;
  nextToken?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetDeployDetailResponseBodyData },
      message: 'string',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeployDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeployDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployDetailResponseBodyDataResourceListOperation extends $tea.Model {
  name?: string;
  operations?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operations: 'Operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployDetailResponseBodyDataResourceList extends $tea.Model {
  buyDuration?: string;
  chargeType?: string;
  executionStrategy?: string;
  modifiedTime?: number;
  monitorURL?: string;
  nodeName?: string;
  operation?: GetDeployDetailResponseBodyDataResourceListOperation;
  refId?: number;
  remark?: string;
  resourceCode?: string;
  resourceId?: string;
  resourceType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      buyDuration: 'BuyDuration',
      chargeType: 'ChargeType',
      executionStrategy: 'ExecutionStrategy',
      modifiedTime: 'ModifiedTime',
      monitorURL: 'MonitorURL',
      nodeName: 'NodeName',
      operation: 'Operation',
      refId: 'RefId',
      remark: 'Remark',
      resourceCode: 'ResourceCode',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyDuration: 'string',
      chargeType: 'string',
      executionStrategy: 'string',
      modifiedTime: 'number',
      monitorURL: 'string',
      nodeName: 'string',
      operation: GetDeployDetailResponseBodyDataResourceListOperation,
      refId: 'number',
      remark: 'string',
      resourceCode: 'string',
      resourceId: 'string',
      resourceType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployDetailResponseBodyData extends $tea.Model {
  appId?: string;
  createTime?: number;
  currentProcess?: string;
  deletingNodeList?: { [key: string]: any }[];
  deployPercent?: number;
  deployedNodeList?: { [key: string]: any }[];
  deployingNodeList?: { [key: string]: any }[];
  error?: string;
  executionTime?: number;
  failStatus?: number;
  orderIdList?: string[];
  pdfUrl?: string;
  resourceGroupId?: string;
  resourceList?: GetDeployDetailResponseBodyDataResourceList[];
  status?: string;
  terraformScriptUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      currentProcess: 'CurrentProcess',
      deletingNodeList: 'DeletingNodeList',
      deployPercent: 'DeployPercent',
      deployedNodeList: 'DeployedNodeList',
      deployingNodeList: 'DeployingNodeList',
      error: 'Error',
      executionTime: 'ExecutionTime',
      failStatus: 'FailStatus',
      orderIdList: 'OrderIdList',
      pdfUrl: 'PdfUrl',
      resourceGroupId: 'ResourceGroupId',
      resourceList: 'ResourceList',
      status: 'Status',
      terraformScriptUrl: 'TerraformScriptUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      currentProcess: 'string',
      deletingNodeList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      deployPercent: 'number',
      deployedNodeList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      deployingNodeList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      error: 'string',
      executionTime: 'number',
      failStatus: 'number',
      orderIdList: { 'type': 'array', 'itemType': 'string' },
      pdfUrl: 'string',
      resourceGroupId: 'string',
      resourceList: { 'type': 'array', 'itemType': GetDeployDetailResponseBodyDataResourceList },
      status: 'string',
      terraformScriptUrl: 'string',
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
    this._endpoint = this.getEndpoint("bpstudio", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async billingApplicationWithOptions(request: BillingApplicationRequest, runtime: $Util.RuntimeOptions): Promise<BillingApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.month)) {
      body["Month"] = request.month;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.year)) {
      body["Year"] = request.year;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BillingApplication",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BillingApplicationResponse>(await this.callApi(params, req, runtime), new BillingApplicationResponse({}));
  }

  async billingApplication(request: BillingApplicationRequest): Promise<BillingApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.billingApplicationWithOptions(request, runtime);
  }

  async getDeployDetailWithOptions(request: GetDeployDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetDeployDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.refId)) {
      body["RefId"] = request.refId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceName)) {
      body["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDeployDetail",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeployDetailResponse>(await this.callApi(params, req, runtime), new GetDeployDetailResponse({}));
  }

  async getDeployDetail(request: GetDeployDetailRequest): Promise<GetDeployDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeployDetailWithOptions(request, runtime);
  }

}
