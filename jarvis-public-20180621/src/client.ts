// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateConsoleAccessWhiteListRequest extends $tea.Model {
  dstPort?: number;
  instanceIdList?: string;
  instanceInfoList?: string;
  lang?: string;
  liveTime?: number;
  note?: string;
  productName?: string;
  resourceOwnerId?: number;
  sourceCode?: string;
  sourceIp?: string;
  srcIP?: string;
  whiteListType?: number;
  static names(): { [key: string]: string } {
    return {
      dstPort: 'DstPort',
      instanceIdList: 'InstanceIdList',
      instanceInfoList: 'InstanceInfoList',
      lang: 'Lang',
      liveTime: 'LiveTime',
      note: 'Note',
      productName: 'ProductName',
      resourceOwnerId: 'ResourceOwnerId',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
      srcIP: 'SrcIP',
      whiteListType: 'WhiteListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPort: 'number',
      instanceIdList: 'string',
      instanceInfoList: 'string',
      lang: 'string',
      liveTime: 'number',
      note: 'string',
      productName: 'string',
      resourceOwnerId: 'number',
      sourceCode: 'string',
      sourceIp: 'string',
      srcIP: 'string',
      whiteListType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsoleAccessWhiteListResponseBody extends $tea.Model {
  module?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsoleAccessWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConsoleAccessWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConsoleAccessWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsoleAccessWhiteListRequest extends $tea.Model {
  disableWhitelist?: string;
  lang?: string;
  sourceCode?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      disableWhitelist: 'DisableWhitelist',
      lang: 'Lang',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableWhitelist: 'string',
      lang: 'string',
      sourceCode: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsoleAccessWhiteListResponseBody extends $tea.Model {
  module?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsoleAccessWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConsoleAccessWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConsoleAccessWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessWhiteListSlbListRequest extends $tea.Model {
  lang?: string;
  sourceCode?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceCode: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessWhiteListSlbListResponseBody extends $tea.Model {
  requestId?: string;
  slbList?: DescribeAccessWhiteListSlbListResponseBodySlbList[];
  totalCount?: number;
  module?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slbList: 'SlbList',
      totalCount: 'TotalCount',
      module: 'module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slbList: { 'type': 'array', 'itemType': DescribeAccessWhiteListSlbListResponseBodySlbList },
      totalCount: 'number',
      module: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessWhiteListSlbListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccessWhiteListSlbListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccessWhiteListSlbListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessWhitelistEcsListRequest extends $tea.Model {
  lang?: string;
  sourceCode?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceCode: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessWhitelistEcsListResponseBody extends $tea.Model {
  ecsList?: DescribeAccessWhitelistEcsListResponseBodyEcsList[];
  requestId?: string;
  totalCount?: number;
  module?: string;
  static names(): { [key: string]: string } {
    return {
      ecsList: 'EcsList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      module: 'module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsList: { 'type': 'array', 'itemType': DescribeAccessWhitelistEcsListResponseBodyEcsList },
      requestId: 'string',
      totalCount: 'number',
      module: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessWhitelistEcsListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccessWhitelistEcsListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccessWhitelistEcsListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackEventRequest extends $tea.Model {
  currentPage?: number;
  endTime?: number;
  lang?: string;
  pageSize?: number;
  productType?: string;
  region?: string;
  serverIpList?: string;
  sourceIp?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      productType: 'ProductType',
      region: 'Region',
      serverIpList: 'ServerIpList',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      lang: 'string',
      pageSize: 'number',
      productType: 'string',
      region: 'string',
      serverIpList: 'string',
      sourceIp: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackEventResponseBody extends $tea.Model {
  eventList?: DescribeAttackEventResponseBodyEventList[];
  module?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeAttackEventResponseBodyEventList },
      module: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAttackEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAttackEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackedIpRequest extends $tea.Model {
  currentPage?: number;
  endTime?: number;
  lang?: string;
  pageSize?: number;
  productType?: string;
  region?: string;
  serverIpList?: string;
  sourceIp?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      productType: 'ProductType',
      region: 'Region',
      serverIpList: 'ServerIpList',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      lang: 'string',
      pageSize: 'number',
      productType: 'string',
      region: 'string',
      serverIpList: 'string',
      sourceIp: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackedIpResponseBody extends $tea.Model {
  ipList?: string[];
  module?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: { 'type': 'array', 'itemType': 'string' },
      module: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackedIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAttackedIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAttackedIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsoleAccessWhiteListRequest extends $tea.Model {
  currentPage?: number;
  dstIP?: string;
  lang?: string;
  pageSize?: number;
  sourceCode?: string;
  sourceIp?: string;
  srcIP?: string;
  status?: string;
  whiteListType?: number;
  queryProduct?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dstIP: 'DstIP',
      lang: 'Lang',
      pageSize: 'PageSize',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
      srcIP: 'SrcIP',
      status: 'Status',
      whiteListType: 'WhiteListType',
      queryProduct: 'queryProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dstIP: 'string',
      lang: 'string',
      pageSize: 'number',
      sourceCode: 'string',
      sourceIp: 'string',
      srcIP: 'string',
      status: 'string',
      whiteListType: 'number',
      queryProduct: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsoleAccessWhiteListResponseBody extends $tea.Model {
  dataList?: DescribeConsoleAccessWhiteListResponseBodyDataList[];
  pageInfo?: DescribeConsoleAccessWhiteListResponseBodyPageInfo;
  requestId?: string;
  module?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      module: 'module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeConsoleAccessWhiteListResponseBodyDataList },
      pageInfo: DescribeConsoleAccessWhiteListResponseBodyPageInfo,
      requestId: 'string',
      module: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsoleAccessWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConsoleAccessWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConsoleAccessWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCountAttackEventRequest extends $tea.Model {
  currentPage?: number;
  endTime?: number;
  lang?: string;
  pageSize?: number;
  productType?: string;
  region?: string;
  serverIpList?: string;
  sourceIp?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      productType: 'ProductType',
      region: 'Region',
      serverIpList: 'ServerIpList',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      lang: 'string',
      pageSize: 'number',
      productType: 'string',
      region: 'string',
      serverIpList: 'string',
      sourceIp: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCountAttackEventResponseBody extends $tea.Model {
  count?: number;
  module?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      module: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCountAttackEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCountAttackEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCountAttackEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneInfoRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  phoneNum?: string;
  sourceCode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      phoneNum: 'phoneNum',
      sourceCode: 'sourceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      phoneNum: 'string',
      sourceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneInfoResponseBody extends $tea.Model {
  module?: string;
  requestId?: string;
  detectTime?: string;
  phoneNum?: number;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
      detectTime: 'detectTime',
      phoneNum: 'phoneNum',
      riskLevel: 'riskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: 'string',
      requestId: 'string',
      detectTime: 'string',
      phoneNum: 'number',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePhoneInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePhoneInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessWhiteListSlbListResponseBodySlbList extends $tea.Model {
  IP?: string;
  instanceId?: string;
  instanceName?: string;
  itemSign?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      itemSign: 'ItemSign',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      instanceId: 'string',
      instanceName: 'string',
      itemSign: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessWhitelistEcsListResponseBodyEcsList extends $tea.Model {
  IP?: string;
  instanceId?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackEventResponseBodyEventList extends $tea.Model {
  attackType?: string;
  gmtCreate?: string;
  gmtCreateStamp?: number;
  gmtModified?: string;
  sourceIp?: string;
  url?: string;
  vmIp?: string;
  static names(): { [key: string]: string } {
    return {
      attackType: 'AttackType',
      gmtCreate: 'GmtCreate',
      gmtCreateStamp: 'GmtCreateStamp',
      gmtModified: 'GmtModified',
      sourceIp: 'SourceIp',
      url: 'Url',
      vmIp: 'VmIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackType: 'string',
      gmtCreate: 'string',
      gmtCreateStamp: 'number',
      gmtModified: 'string',
      sourceIp: 'string',
      url: 'string',
      vmIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsoleAccessWhiteListResponseBodyDataList extends $tea.Model {
  dstIp?: string;
  gmtCreate?: string;
  gmtRealExpire?: string;
  id?: number;
  insProduct?: string;
  regionId?: string;
  srcIp?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dstIp: 'DstIp',
      gmtCreate: 'GmtCreate',
      gmtRealExpire: 'GmtRealExpire',
      id: 'Id',
      insProduct: 'InsProduct',
      regionId: 'RegionId',
      srcIp: 'SrcIp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstIp: 'string',
      gmtCreate: 'string',
      gmtRealExpire: 'string',
      id: 'number',
      insProduct: 'string',
      regionId: 'string',
      srcIp: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsoleAccessWhiteListResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
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
    this._endpoint = this.getEndpoint("jarvis-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createConsoleAccessWhiteListWithOptions(request: CreateConsoleAccessWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<CreateConsoleAccessWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dstPort)) {
      query["DstPort"] = request.dstPort;
    }

    if (!Util.isUnset(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!Util.isUnset(request.instanceInfoList)) {
      query["InstanceInfoList"] = request.instanceInfoList;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.liveTime)) {
      query["LiveTime"] = request.liveTime;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    if (!Util.isUnset(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceCode)) {
      query["SourceCode"] = request.sourceCode;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.srcIP)) {
      query["SrcIP"] = request.srcIP;
    }

    if (!Util.isUnset(request.whiteListType)) {
      query["WhiteListType"] = request.whiteListType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateConsoleAccessWhiteList",
      version: "2018-06-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConsoleAccessWhiteListResponse>(await this.callApi(params, req, runtime), new CreateConsoleAccessWhiteListResponse({}));
  }

  async createConsoleAccessWhiteList(request: CreateConsoleAccessWhiteListRequest): Promise<CreateConsoleAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConsoleAccessWhiteListWithOptions(request, runtime);
  }

  async deleteConsoleAccessWhiteListWithOptions(request: DeleteConsoleAccessWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConsoleAccessWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.disableWhitelist)) {
      query["DisableWhitelist"] = request.disableWhitelist;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceCode)) {
      query["SourceCode"] = request.sourceCode;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConsoleAccessWhiteList",
      version: "2018-06-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteConsoleAccessWhiteListResponse>(await this.callApi(params, req, runtime), new DeleteConsoleAccessWhiteListResponse({}));
  }

  async deleteConsoleAccessWhiteList(request: DeleteConsoleAccessWhiteListRequest): Promise<DeleteConsoleAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConsoleAccessWhiteListWithOptions(request, runtime);
  }

  async describeAccessWhiteListSlbListWithOptions(request: DescribeAccessWhiteListSlbListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessWhiteListSlbListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceCode)) {
      query["SourceCode"] = request.sourceCode;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccessWhiteListSlbList",
      version: "2018-06-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccessWhiteListSlbListResponse>(await this.callApi(params, req, runtime), new DescribeAccessWhiteListSlbListResponse({}));
  }

  async describeAccessWhiteListSlbList(request: DescribeAccessWhiteListSlbListRequest): Promise<DescribeAccessWhiteListSlbListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessWhiteListSlbListWithOptions(request, runtime);
  }

  async describeAccessWhitelistEcsListWithOptions(request: DescribeAccessWhitelistEcsListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessWhitelistEcsListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceCode)) {
      query["SourceCode"] = request.sourceCode;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccessWhitelistEcsList",
      version: "2018-06-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccessWhitelistEcsListResponse>(await this.callApi(params, req, runtime), new DescribeAccessWhitelistEcsListResponse({}));
  }

  async describeAccessWhitelistEcsList(request: DescribeAccessWhitelistEcsListRequest): Promise<DescribeAccessWhitelistEcsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessWhitelistEcsListWithOptions(request, runtime);
  }

  async describeAttackEventWithOptions(request: DescribeAttackEventRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAttackEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
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

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.serverIpList)) {
      query["ServerIpList"] = request.serverIpList;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAttackEvent",
      version: "2018-06-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAttackEventResponse>(await this.callApi(params, req, runtime), new DescribeAttackEventResponse({}));
  }

  async describeAttackEvent(request: DescribeAttackEventRequest): Promise<DescribeAttackEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAttackEventWithOptions(request, runtime);
  }

  async describeAttackedIpWithOptions(request: DescribeAttackedIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAttackedIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
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

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.serverIpList)) {
      query["ServerIpList"] = request.serverIpList;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAttackedIp",
      version: "2018-06-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAttackedIpResponse>(await this.callApi(params, req, runtime), new DescribeAttackedIpResponse({}));
  }

  async describeAttackedIp(request: DescribeAttackedIpRequest): Promise<DescribeAttackedIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAttackedIpWithOptions(request, runtime);
  }

  async describeConsoleAccessWhiteListWithOptions(request: DescribeConsoleAccessWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConsoleAccessWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dstIP)) {
      query["DstIP"] = request.dstIP;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sourceCode)) {
      query["SourceCode"] = request.sourceCode;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.srcIP)) {
      query["SrcIP"] = request.srcIP;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.whiteListType)) {
      query["WhiteListType"] = request.whiteListType;
    }

    if (!Util.isUnset(request.queryProduct)) {
      query["queryProduct"] = request.queryProduct;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConsoleAccessWhiteList",
      version: "2018-06-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeConsoleAccessWhiteListResponse>(await this.callApi(params, req, runtime), new DescribeConsoleAccessWhiteListResponse({}));
  }

  async describeConsoleAccessWhiteList(request: DescribeConsoleAccessWhiteListRequest): Promise<DescribeConsoleAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConsoleAccessWhiteListWithOptions(request, runtime);
  }

  async describeCountAttackEventWithOptions(request: DescribeCountAttackEventRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCountAttackEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
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

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.serverIpList)) {
      query["ServerIpList"] = request.serverIpList;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCountAttackEvent",
      version: "2018-06-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCountAttackEventResponse>(await this.callApi(params, req, runtime), new DescribeCountAttackEventResponse({}));
  }

  async describeCountAttackEvent(request: DescribeCountAttackEventRequest): Promise<DescribeCountAttackEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCountAttackEventWithOptions(request, runtime);
  }

  async describePhoneInfoWithOptions(request: DescribePhoneInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhoneInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.phoneNum)) {
      query["phoneNum"] = request.phoneNum;
    }

    if (!Util.isUnset(request.sourceCode)) {
      query["sourceCode"] = request.sourceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePhoneInfo",
      version: "2018-06-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePhoneInfoResponse>(await this.callApi(params, req, runtime), new DescribePhoneInfoResponse({}));
  }

  async describePhoneInfo(request: DescribePhoneInfoRequest): Promise<DescribePhoneInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneInfoWithOptions(request, runtime);
  }

}
