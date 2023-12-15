// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetOwnerAgreementInstanceRequest extends $tea.Model {
  aliyunUid?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerAgreementInstanceResponseBody extends $tea.Model {
  data?: GetOwnerAgreementInstanceResponseBodyData;
  errCode?: string;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetOwnerAgreementInstanceResponseBodyData,
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerAgreementInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOwnerAgreementInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOwnerAgreementInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartnerByUidRequest extends $tea.Model {
  aliyunUid?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartnerByUidResponseBody extends $tea.Model {
  data?: GetPartnerByUidResponseBodyData;
  errCode?: string;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPartnerByUidResponseBodyData,
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartnerByUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPartnerByUidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPartnerByUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFusionOrderListRequest extends $tea.Model {
  endTime?: string;
  endUserId?: number;
  orderId?: number;
  pageNo?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      orderId: 'OrderId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      endUserId: 'number',
      orderId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFusionOrderListResponseBody extends $tea.Model {
  code?: string;
  data?: string[];
  msg?: string;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      msg: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFusionOrderListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFusionOrderListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFusionOrderListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerAgreementInstanceResponseBodyDataAgreementPropertyRoleDTOList extends $tea.Model {
  agreementCode?: string;
  static names(): { [key: string]: string } {
    return {
      agreementCode: 'AgreementCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerAgreementInstanceResponseBodyData extends $tea.Model {
  agreementPropertyRoleDTOList?: GetOwnerAgreementInstanceResponseBodyDataAgreementPropertyRoleDTOList[];
  name?: string;
  pid?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      agreementPropertyRoleDTOList: 'AgreementPropertyRoleDTOList',
      name: 'Name',
      pid: 'Pid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementPropertyRoleDTOList: { 'type': 'array', 'itemType': GetOwnerAgreementInstanceResponseBodyDataAgreementPropertyRoleDTOList },
      name: 'string',
      pid: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartnerByUidResponseBodyDataAgreementPropertyRoleDTOList extends $tea.Model {
  agreementCode?: string;
  static names(): { [key: string]: string } {
    return {
      agreementCode: 'AgreementCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartnerByUidResponseBodyData extends $tea.Model {
  agreementPropertyRoleDTOList?: GetPartnerByUidResponseBodyDataAgreementPropertyRoleDTOList[];
  name?: string;
  pid?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      agreementPropertyRoleDTOList: 'AgreementPropertyRoleDTOList',
      name: 'Name',
      pid: 'Pid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementPropertyRoleDTOList: { 'type': 'array', 'itemType': GetPartnerByUidResponseBodyDataAgreementPropertyRoleDTOList },
      name: 'string',
      pid: 'string',
      uid: 'string',
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
      'ap-northeast-1': "agency.aliyuncs.com",
      'ap-northeast-2-pop': "agency.aliyuncs.com",
      'ap-south-1': "agency.aliyuncs.com",
      'ap-southeast-2': "agency.aliyuncs.com",
      'ap-southeast-3': "agency.aliyuncs.com",
      'ap-southeast-5': "agency.aliyuncs.com",
      'cn-beijing': "agency.aliyuncs.com",
      'cn-beijing-finance-1': "agency.aliyuncs.com",
      'cn-beijing-finance-pop': "agency.aliyuncs.com",
      'cn-beijing-gov-1': "agency.aliyuncs.com",
      'cn-beijing-nu16-b01': "agency.aliyuncs.com",
      'cn-chengdu': "agency.aliyuncs.com",
      'cn-edge-1': "agency.aliyuncs.com",
      'cn-fujian': "agency.aliyuncs.com",
      'cn-haidian-cm12-c01': "agency.aliyuncs.com",
      'cn-hangzhou': "agency.aliyuncs.com",
      'cn-hangzhou-bj-b01': "agency.aliyuncs.com",
      'cn-hangzhou-finance': "agency.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "agency.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "agency.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "agency.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "agency.aliyuncs.com",
      'cn-hangzhou-test-306': "agency.aliyuncs.com",
      'cn-hongkong': "agency.aliyuncs.com",
      'cn-hongkong-finance-pop': "agency.aliyuncs.com",
      'cn-huhehaote': "agency.aliyuncs.com",
      'cn-huhehaote-nebula-1': "agency.aliyuncs.com",
      'cn-north-2-gov-1': "agency.aliyuncs.com",
      'cn-qingdao': "agency.aliyuncs.com",
      'cn-qingdao-nebula': "agency.aliyuncs.com",
      'cn-shanghai': "agency.aliyuncs.com",
      'cn-shanghai-et15-b01': "agency.aliyuncs.com",
      'cn-shanghai-et2-b01': "agency.aliyuncs.com",
      'cn-shanghai-finance-1': "agency.aliyuncs.com",
      'cn-shanghai-inner': "agency.aliyuncs.com",
      'cn-shanghai-internal-test-1': "agency.aliyuncs.com",
      'cn-shenzhen': "agency.aliyuncs.com",
      'cn-shenzhen-finance-1': "agency.aliyuncs.com",
      'cn-shenzhen-inner': "agency.aliyuncs.com",
      'cn-shenzhen-st4-d01': "agency.aliyuncs.com",
      'cn-shenzhen-su18-b01': "agency.aliyuncs.com",
      'cn-wuhan': "agency.aliyuncs.com",
      'cn-wulanchabu': "agency.aliyuncs.com",
      'cn-yushanfang': "agency.aliyuncs.com",
      'cn-zhangbei': "agency.aliyuncs.com",
      'cn-zhangbei-na61-b01': "agency.aliyuncs.com",
      'cn-zhangjiakou': "agency.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "agency.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "agency.aliyuncs.com",
      'eu-central-1': "agency.aliyuncs.com",
      'eu-west-1': "agency.aliyuncs.com",
      'eu-west-1-oxs': "agency.aliyuncs.com",
      'me-east-1': "agency.aliyuncs.com",
      'rus-west-1-pop': "agency.aliyuncs.com",
      'us-east-1': "agency.aliyuncs.com",
      'us-west-1': "agency.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("agency", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getOwnerAgreementInstanceWithOptions(request: GetOwnerAgreementInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetOwnerAgreementInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliyunUid)) {
      query["AliyunUid"] = request.aliyunUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOwnerAgreementInstance",
      version: "2021-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOwnerAgreementInstanceResponse>(await this.callApi(params, req, runtime), new GetOwnerAgreementInstanceResponse({}));
  }

  async getOwnerAgreementInstance(request: GetOwnerAgreementInstanceRequest): Promise<GetOwnerAgreementInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOwnerAgreementInstanceWithOptions(request, runtime);
  }

  async getPartnerByUidWithOptions(request: GetPartnerByUidRequest, runtime: $Util.RuntimeOptions): Promise<GetPartnerByUidResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliyunUid)) {
      query["AliyunUid"] = request.aliyunUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPartnerByUid",
      version: "2021-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPartnerByUidResponse>(await this.callApi(params, req, runtime), new GetPartnerByUidResponse({}));
  }

  async getPartnerByUid(request: GetPartnerByUidRequest): Promise<GetPartnerByUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPartnerByUidWithOptions(request, runtime);
  }

  async queryFusionOrderListWithOptions(request: QueryFusionOrderListRequest, runtime: $Util.RuntimeOptions): Promise<QueryFusionOrderListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFusionOrderList",
      version: "2021-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFusionOrderListResponse>(await this.callApi(params, req, runtime), new QueryFusionOrderListResponse({}));
  }

  async queryFusionOrderList(request: QueryFusionOrderListRequest): Promise<QueryFusionOrderListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFusionOrderListWithOptions(request, runtime);
  }

}
