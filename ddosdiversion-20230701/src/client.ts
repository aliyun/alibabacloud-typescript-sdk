// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ConfigNetStatusRequest extends $tea.Model {
  net?: string;
  regions?: string[];
  saleId?: string;
  status?: string;
  subNets?: string[];
  static names(): { [key: string]: string } {
    return {
      net: 'Net',
      regions: 'Regions',
      saleId: 'SaleId',
      status: 'Status',
      subNets: 'SubNets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      net: 'string',
      regions: { 'type': 'array', 'itemType': 'string' },
      saleId: 'string',
      status: 'string',
      subNets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigNetStatusResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigNetStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigNetStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigNetStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRequest extends $tea.Model {
  name?: string;
  num?: number;
  page?: number;
  saleId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      num: 'Num',
      page: 'Page',
      saleId: 'SaleId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      num: 'number',
      page: 'number',
      saleId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $tea.Model {
  code?: number;
  data?: ListInstanceResponseBodyData;
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
      data: ListInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListRequest extends $tea.Model {
  mainNet?: string;
  mode?: string;
  net?: string;
  num?: number;
  page?: number;
  saleId?: string;
  static names(): { [key: string]: string } {
    return {
      mainNet: 'MainNet',
      mode: 'Mode',
      net: 'Net',
      num: 'Num',
      page: 'Page',
      saleId: 'SaleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainNet: 'string',
      mode: 'string',
      net: 'string',
      num: 'number',
      page: 'number',
      saleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBody extends $tea.Model {
  code?: number;
  data?: QueryNetListResponseBodyData;
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
      data: QueryNetListResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryNetListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryNetListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyDataInstancesSpec extends $tea.Model {
  coverage?: string;
  diversionType?: string;
  edition?: string;
  idcNumbers?: string;
  initialInstallation?: string;
  initialQty?: string;
  ipSubnetNums?: string;
  mitigationAnalysis?: string;
  mitigationAnalysisCapacity?: string;
  mitigationCapacity?: string;
  mitigationNums?: string;
  normalBandwidth?: string;
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      diversionType: 'DiversionType',
      edition: 'Edition',
      idcNumbers: 'IdcNumbers',
      initialInstallation: 'InitialInstallation',
      initialQty: 'InitialQty',
      ipSubnetNums: 'IpSubnetNums',
      mitigationAnalysis: 'MitigationAnalysis',
      mitigationAnalysisCapacity: 'MitigationAnalysisCapacity',
      mitigationCapacity: 'MitigationCapacity',
      mitigationNums: 'MitigationNums',
      normalBandwidth: 'NormalBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      diversionType: 'string',
      edition: 'string',
      idcNumbers: 'string',
      initialInstallation: 'string',
      initialQty: 'string',
      ipSubnetNums: 'string',
      mitigationAnalysis: 'string',
      mitigationAnalysisCapacity: 'string',
      mitigationCapacity: 'string',
      mitigationNums: 'string',
      normalBandwidth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyDataInstances extends $tea.Model {
  comment?: string;
  gmtCreate?: string;
  gmtExpire?: string;
  gmtModify?: string;
  instanceId?: string;
  message?: string;
  name?: string;
  saleId?: string;
  spec?: ListInstanceResponseBodyDataInstancesSpec;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      gmtCreate: 'GmtCreate',
      gmtExpire: 'GmtExpire',
      gmtModify: 'GmtModify',
      instanceId: 'InstanceId',
      message: 'Message',
      name: 'Name',
      saleId: 'SaleId',
      spec: 'Spec',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      gmtCreate: 'string',
      gmtExpire: 'string',
      gmtModify: 'string',
      instanceId: 'string',
      message: 'string',
      name: 'string',
      saleId: 'string',
      spec: ListInstanceResponseBodyDataInstancesSpec,
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyData extends $tea.Model {
  instances?: ListInstanceResponseBodyDataInstances[];
  num?: number;
  page?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      num: 'Num',
      page: 'Page',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstanceResponseBodyDataInstances },
      num: 'number',
      page: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBodyDataNetsDDoSDefenseCleanTh extends $tea.Model {
  mbps?: number;
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      mbps: 'Mbps',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mbps: 'number',
      pps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBodyDataNetsDDoSDefenseDjPolicy extends $tea.Model {
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBodyDataNetsDDoSDefenseHoleTh extends $tea.Model {
  threshMbps?: number;
  static names(): { [key: string]: string } {
    return {
      threshMbps: 'ThreshMbps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshMbps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBodyDataNetsDDoSDefense extends $tea.Model {
  cleanTh?: QueryNetListResponseBodyDataNetsDDoSDefenseCleanTh;
  djPolicy?: QueryNetListResponseBodyDataNetsDDoSDefenseDjPolicy;
  holeTh?: QueryNetListResponseBodyDataNetsDDoSDefenseHoleTh;
  static names(): { [key: string]: string } {
    return {
      cleanTh: 'CleanTh',
      djPolicy: 'DjPolicy',
      holeTh: 'HoleTh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanTh: QueryNetListResponseBodyDataNetsDDoSDefenseCleanTh,
      djPolicy: QueryNetListResponseBodyDataNetsDDoSDefenseDjPolicy,
      holeTh: QueryNetListResponseBodyDataNetsDDoSDefenseHoleTh,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBodyDataNetsDeclared extends $tea.Model {
  declared?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      declared: 'Declared',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      declared: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBodyDataNets extends $tea.Model {
  DDoSDefense?: QueryNetListResponseBodyDataNetsDDoSDefense;
  declared?: QueryNetListResponseBodyDataNetsDeclared[];
  declaredState?: number;
  fwdEffect?: number;
  gmtCreate?: string;
  gmtModify?: string;
  mode?: string;
  net?: string;
  netExtend?: string;
  netMain?: number;
  netType?: string;
  saleId?: string;
  upstreamType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      DDoSDefense: 'DDoSDefense',
      declared: 'Declared',
      declaredState: 'DeclaredState',
      fwdEffect: 'FwdEffect',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      mode: 'Mode',
      net: 'Net',
      netExtend: 'NetExtend',
      netMain: 'NetMain',
      netType: 'NetType',
      saleId: 'SaleId',
      upstreamType: 'UpstreamType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDoSDefense: QueryNetListResponseBodyDataNetsDDoSDefense,
      declared: { 'type': 'array', 'itemType': QueryNetListResponseBodyDataNetsDeclared },
      declaredState: 'number',
      fwdEffect: 'number',
      gmtCreate: 'string',
      gmtModify: 'string',
      mode: 'string',
      net: 'string',
      netExtend: 'string',
      netMain: 'number',
      netType: 'string',
      saleId: 'string',
      upstreamType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetListResponseBodyData extends $tea.Model {
  nets?: QueryNetListResponseBodyDataNets[];
  num?: number;
  page?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nets: 'Nets',
      num: 'Num',
      page: 'Page',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nets: { 'type': 'array', 'itemType': QueryNetListResponseBodyDataNets },
      num: 'number',
      page: 'number',
      total: 'number',
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
    this._endpoint = this.getEndpoint("ddosdiversion", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async configNetStatusWithOptions(request: ConfigNetStatusRequest, runtime: $Util.RuntimeOptions): Promise<ConfigNetStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.net)) {
      query["Net"] = request.net;
    }

    if (!Util.isUnset(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!Util.isUnset(request.saleId)) {
      query["SaleId"] = request.saleId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.subNets)) {
      query["SubNets"] = request.subNets;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigNetStatus",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigNetStatusResponse>(await this.callApi(params, req, runtime), new ConfigNetStatusResponse({}));
  }

  async configNetStatus(request: ConfigNetStatusRequest): Promise<ConfigNetStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configNetStatusWithOptions(request, runtime);
  }

  async listInstanceWithOptions(request: ListInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.saleId)) {
      query["SaleId"] = request.saleId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstance",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceResponse>(await this.callApi(params, req, runtime), new ListInstanceResponse({}));
  }

  async listInstance(request: ListInstanceRequest): Promise<ListInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceWithOptions(request, runtime);
  }

  async queryNetListWithOptions(request: QueryNetListRequest, runtime: $Util.RuntimeOptions): Promise<QueryNetListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mainNet)) {
      query["MainNet"] = request.mainNet;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.net)) {
      query["Net"] = request.net;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.saleId)) {
      query["SaleId"] = request.saleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryNetList",
      version: "2023-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryNetListResponse>(await this.callApi(params, req, runtime), new QueryNetListResponse({}));
  }

  async queryNetList(request: QueryNetListRequest): Promise<QueryNetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryNetListWithOptions(request, runtime);
  }

}
