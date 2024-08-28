// This file is auto-generated, don't edit it
/**
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BillingApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30GRJUY95TMYWBYJ
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  nextToken?: number;
  /**
   * @example
   * 1713597738
   */
  refId?: string;
  /**
   * @example
   * rg-aekz44tg3bnpyba
   */
  resourceGroupId?: string;
  /**
   * @example
   * vsw-xxxxxxxxxxxx
   */
  resourceId?: string;
  /**
   * @example
   * rgm-ecs
   */
  resourceName?: string;
  /**
   * @example
   * ecs
   */
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
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetDeployDetailResponseBodyData[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 0
   */
  nextToken?: number;
  /**
   * @example
   * E15B71B4-5D8F-5484-BC07-989E2987EE7C
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeployDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * ecsDelete
   */
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

export class GetDeployDetailResponseBodyDataResourceListResourceTimeList extends $tea.Model {
  bizId?: string;
  creationEndTime?: number;
  creationStartTime?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      creationEndTime: 'CreationEndTime',
      creationStartTime: 'CreationStartTime',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      creationEndTime: 'number',
      creationStartTime: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployDetailResponseBodyDataResourceList extends $tea.Model {
  buyDuration?: string;
  /**
   * @example
   * Free
   */
  chargeType?: string;
  /**
   * @example
   * OpenApi
   */
  executionStrategy?: string;
  /**
   * @example
   * 1714031840000
   */
  modifiedTime?: number;
  /**
   * @example
   * https://cloudmonitor.console.aliyun.com/?#/generalcharts/product=vpc&group=&type=&return&region=cn-hangzhou&dimension=instanceId:vpc-bp1n6uc5jqxtff2euhnx5
   */
  monitorURL?: string;
  /**
   * @example
   * vpc
   */
  nodeName?: string;
  operation?: GetDeployDetailResponseBodyDataResourceListOperation;
  /**
   * @example
   * 1716049421
   */
  refId?: number;
  /**
   * @example
   * {\\"Description\\":\\"\\",\\"ClassicLinkEnabled\\":false,\\"ResourceGroupId\\":\\"rg-acfm4mlwqjalz7a\\",\\"SecondaryCidrBlocks\\":[],\\"CidrBlock\\":\\"192.168.0.0/16\\",\\"UserCidrs\\":[],\\"NetworkAclNum\\":\\"0\\",\\"VRouterId\\":\\"vrt-m5ek7vcyld0x5ym8m9hix\\",\\"OwnerId\\":1986207497633020,\\"AssociatedCens\\":[],\\"id\\":\\"vpc-m5e3c9nz4lj19byan9m2g\\",\\"CloudResources\\":[{\\"ResourceCount\\":1,\\"ResourceType\\":\\"VSwitch\\"},{\\"ResourceCount\\":1,\\"ResourceType\\":\\"VRouter\\"},{\\"ResourceCount\\":1,\\"ResourceType\\":\\"RouteTable\\"}],\\"Tags\\":[],\\"Status\\":\\"Available\\",\\"IsDefault\\":false,\\"RequestId\\":\\"494646FB-14C0-5B4C-9684-B6EFBF4DF01C\\",\\"SupportIpv4Gateway\\":false,\\"Ipv4GatewayId\\":\\"\\",\\"VSwitchIds\\":[\\"vsw-m5egl9wtppiadysjwlgb1\\"],\\"VpcId\\":\\"vpc-m5e3c9nz4lj19byan9m2g\\",\\"CreationTime\\":\\"2024-04-25T07:56:59Z\\",\\"VpcName\\":\\"vpc\\",\\"refId\\":\\"1714031764_0\\",\\"RegionId\\":\\"cn-qingdao\\",\\"Ipv6CidrBlock\\":\\"\\",\\"Ipv6CidrBlocks\\":[]}
   */
  remark?: string;
  /**
   * @example
   * ecs
   */
  resourceCode?: string;
  /**
   * @example
   * i-2zehnzxqixu1pywsfbx1
   */
  resourceId?: string;
  resourceTimeList?: GetDeployDetailResponseBodyDataResourceListResourceTimeList[];
  /**
   * @example
   * vpc
   */
  resourceType?: string;
  /**
   * @example
   * Finish
   */
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
      resourceTimeList: 'ResourceTimeList',
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
      resourceTimeList: { 'type': 'array', 'itemType': GetDeployDetailResponseBodyDataResourceListResourceTimeList },
      resourceType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployDetailResponseBodyData extends $tea.Model {
  /**
   * @example
   * EQ4W772D0VJ33IV1
   */
  appId?: string;
  /**
   * @example
   * 1645516991000
   */
  createTime?: number;
  /**
   * @example
   * DEPLOY
   */
  currentProcess?: string;
  deletingNodeList?: { [key: string]: any }[];
  /**
   * @example
   * 0
   */
  deployPercent?: number;
  deployedNodeList?: { [key: string]: any }[];
  deployingNodeList?: { [key: string]: any }[];
  /**
   * @example
   * OperationNotSupport.SubscriptionCommodityCanNotDelete
   */
  error?: string;
  executionTime?: number;
  failStatus?: number;
  orderIdList?: string[];
  /**
   * @example
   * https://cadt-studio-publish.oss-cn-hangzhou.aliyuncs.com/1986207497633020/deployReport-EXN4FNUR12M35KJM.pdf?Expires=1716967763&OSSAccessKeyId=********nw4rvYAweFuQc3&Signature=*******fKo6164wykT9jBOsSGeQ%3D
   */
  pdfUrl?: string;
  /**
   * @example
   * rg-aekzhfgmw4e6fwq
   */
  resourceGroupId?: string;
  resourceList?: GetDeployDetailResponseBodyDataResourceList[];
  /**
   * @example
   * Revised
   */
  status?: string;
  /**
   * @example
   * https://cadt-studio-publish.oss-cn-hangzhou.aliyuncs.com/1986207497633020/app_EXN4FNUR12M35KJM.tf?Expires=1716967763&OSSAccessKeyId=*******nw4rvYAweFuQc3&Signature=%2********lYROqJLNvyA8g6qD9U%3D
   */
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

  /**
   * BillingApplication
   * 
   * @param request - BillingApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BillingApplicationResponse
   */
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

  /**
   * BillingApplication
   * 
   * @param request - BillingApplicationRequest
   * @returns BillingApplicationResponse
   */
  async billingApplication(request: BillingApplicationRequest): Promise<BillingApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.billingApplicationWithOptions(request, runtime);
  }

  /**
   * 分页查询部署清单
   * 
   * @param request - GetDeployDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeployDetailResponse
   */
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

  /**
   * 分页查询部署清单
   * 
   * @param request - GetDeployDetailRequest
   * @returns GetDeployDetailResponse
   */
  async getDeployDetail(request: GetDeployDetailRequest): Promise<GetDeployDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeployDetailWithOptions(request, runtime);
  }

}
