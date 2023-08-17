// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeAdvicesRequest extends $tea.Model {
  adviceId?: number;
  checkId?: string;
  clientUid?: number;
  excludeAdviceId?: number;
  filterType?: string;
  filterValue?: string;
  language?: string;
  product?: string;
  region?: string;
  resourceId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      adviceId: 'AdviceId',
      checkId: 'CheckId',
      clientUid: 'ClientUid',
      excludeAdviceId: 'ExcludeAdviceId',
      filterType: 'FilterType',
      filterValue: 'FilterValue',
      language: 'Language',
      product: 'Product',
      region: 'Region',
      resourceId: 'ResourceId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceId: 'number',
      checkId: 'string',
      clientUid: 'number',
      excludeAdviceId: 'number',
      filterType: 'string',
      filterValue: 'string',
      language: 'string',
      product: 'string',
      region: 'string',
      resourceId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesResponseBody extends $tea.Model {
  data?: DescribeAdvicesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAdvicesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAdvicesResponseBody;
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
      body: DescribeAdvicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesPageRequest extends $tea.Model {
  adviceId?: number;
  associateUid?: number;
  checkId?: string;
  excludeAdviceId?: string;
  language?: string;
  pageNumber?: number;
  pageSize?: number;
  product?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      adviceId: 'AdviceId',
      associateUid: 'AssociateUid',
      checkId: 'CheckId',
      excludeAdviceId: 'ExcludeAdviceId',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceId: 'number',
      associateUid: 'number',
      checkId: 'string',
      excludeAdviceId: 'string',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesPageResponseBody extends $tea.Model {
  data?: DescribeAdvicesPageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAdvicesPageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAdvicesPageResponseBody;
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
      body: DescribeAdvicesPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorChecksRequest extends $tea.Model {
  checkId?: string;
  language?: string;
  product?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      language: 'Language',
      product: 'Product',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      language: 'string',
      product: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorChecksResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeAdvisorChecksResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeAdvisorChecksResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorChecksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAdvisorChecksResponseBody;
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
      body: DescribeAdvisorChecksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryAdvicesRequest extends $tea.Model {
  associateUid?: number;
  checkId?: string;
  clientUid?: number;
  endDate?: string;
  filterType?: string;
  filterValue?: string;
  isExpired?: boolean;
  language?: string;
  pageNum?: number;
  pageSize?: number;
  product?: string;
  region?: string;
  resourceId?: string;
  reverse?: boolean;
  severity?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      associateUid: 'AssociateUid',
      checkId: 'CheckId',
      clientUid: 'ClientUid',
      endDate: 'EndDate',
      filterType: 'FilterType',
      filterValue: 'FilterValue',
      isExpired: 'IsExpired',
      language: 'Language',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      product: 'Product',
      region: 'Region',
      resourceId: 'ResourceId',
      reverse: 'Reverse',
      severity: 'Severity',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateUid: 'number',
      checkId: 'string',
      clientUid: 'number',
      endDate: 'string',
      filterType: 'string',
      filterValue: 'string',
      isExpired: 'boolean',
      language: 'string',
      pageNum: 'number',
      pageSize: 'number',
      product: 'string',
      region: 'string',
      resourceId: 'string',
      reverse: 'boolean',
      severity: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryAdvicesResponseBody extends $tea.Model {
  data?: GetHistoryAdvicesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetHistoryAdvicesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryAdvicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHistoryAdvicesResponseBody;
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
      body: GetHistoryAdvicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCheckRequest extends $tea.Model {
  checkId?: string;
  language?: string;
  product?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      language: 'Language',
      product: 'Product',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      language: 'string',
      product: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCheckResponseBody extends $tea.Model {
  data?: RefreshAdvisorCheckResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RefreshAdvisorCheckResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshAdvisorCheckResponseBody;
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
      body: RefreshAdvisorCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorResourceRequest extends $tea.Model {
  product?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorResourceResponseBody extends $tea.Model {
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

export class RefreshAdvisorResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshAdvisorResourceResponseBody;
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
      body: RefreshAdvisorResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesResponseBodyDataAdvice extends $tea.Model {
  action?: string;
  aliyunId?: number;
  checkId?: string;
  checkName?: string;
  content?: string;
  description?: string;
  details?: string;
  gmtCreated?: string;
  gmtModified?: string;
  id?: number;
  isExpired?: boolean;
  links?: string;
  product?: string;
  reason?: string;
  resource?: string;
  resourceId?: string;
  severity?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      aliyunId: 'AliyunId',
      checkId: 'CheckId',
      checkName: 'CheckName',
      content: 'Content',
      description: 'Description',
      details: 'Details',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      isExpired: 'IsExpired',
      links: 'Links',
      product: 'Product',
      reason: 'Reason',
      resource: 'Resource',
      resourceId: 'ResourceId',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      aliyunId: 'number',
      checkId: 'string',
      checkName: 'string',
      content: 'string',
      description: 'string',
      details: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      isExpired: 'boolean',
      links: 'string',
      product: 'string',
      reason: 'string',
      resource: 'string',
      resourceId: 'string',
      severity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesResponseBodyData extends $tea.Model {
  advice?: DescribeAdvicesResponseBodyDataAdvice[];
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: { 'type': 'array', 'itemType': DescribeAdvicesResponseBodyDataAdvice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesPageResponseBodyDataResult extends $tea.Model {
  action?: string;
  aliyunId?: number;
  checkId?: string;
  checkName?: string;
  content?: string;
  description?: string;
  details?: string;
  gmtCreated?: string;
  gmtModified?: string;
  id?: number;
  isExpired?: boolean;
  links?: string;
  product?: string;
  reason?: string;
  resource?: string;
  resourceId?: string;
  severity?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      aliyunId: 'AliyunId',
      checkId: 'CheckId',
      checkName: 'CheckName',
      content: 'Content',
      description: 'Description',
      details: 'Details',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      isExpired: 'IsExpired',
      links: 'Links',
      product: 'Product',
      reason: 'Reason',
      resource: 'Resource',
      resourceId: 'ResourceId',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      aliyunId: 'number',
      checkId: 'string',
      checkName: 'string',
      content: 'string',
      description: 'string',
      details: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      isExpired: 'boolean',
      links: 'string',
      product: 'string',
      reason: 'string',
      resource: 'string',
      resourceId: 'string',
      severity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesPageResponseBodyData extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  result?: DescribeAdvicesPageResponseBodyDataResult[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      result: 'Result',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': DescribeAdvicesPageResponseBodyDataResult },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorChecksResponseBodyDataAdvisorCheck extends $tea.Model {
  category?: string;
  code?: string;
  description?: string;
  gmtCreated?: string;
  gmtModified?: string;
  id?: number;
  name?: string;
  operateColumn?: string;
  product?: string;
  status?: string;
  suppResources?: string;
  tips?: string;
  viewColumn?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      code: 'Code',
      description: 'Description',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      operateColumn: 'OperateColumn',
      product: 'Product',
      status: 'Status',
      suppResources: 'SuppResources',
      tips: 'Tips',
      viewColumn: 'ViewColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      code: 'string',
      description: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      operateColumn: 'string',
      product: 'string',
      status: 'string',
      suppResources: 'string',
      tips: 'string',
      viewColumn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorChecksResponseBodyData extends $tea.Model {
  advisorCheck?: DescribeAdvisorChecksResponseBodyDataAdvisorCheck[];
  static names(): { [key: string]: string } {
    return {
      advisorCheck: 'AdvisorCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advisorCheck: { 'type': 'array', 'itemType': DescribeAdvisorChecksResponseBodyDataAdvisorCheck },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryAdvicesResponseBodyDataResult extends $tea.Model {
  checkId?: string;
  checkName?: string;
  description?: string;
  gmtCreated?: string;
  product?: string;
  resourceId?: string;
  severity?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkName: 'CheckName',
      description: 'Description',
      gmtCreated: 'GmtCreated',
      product: 'Product',
      resourceId: 'ResourceId',
      severity: 'Severity',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkName: 'string',
      description: 'string',
      gmtCreated: 'string',
      product: 'string',
      resourceId: 'string',
      severity: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryAdvicesResponseBodyData extends $tea.Model {
  pageNo?: number;
  result?: GetHistoryAdvicesResponseBodyDataResult[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      result: 'Result',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      result: { 'type': 'array', 'itemType': GetHistoryAdvicesResponseBodyDataResult },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCheckResponseBodyData extends $tea.Model {
  success?: boolean;
  taskId?: number;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      taskId: 'number',
      traceId: 'string',
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
    this._endpoint = this.getEndpoint("advisor", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describeAdvicesWithOptions(request: DescribeAdvicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAdvicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adviceId)) {
      query["AdviceId"] = request.adviceId;
    }

    if (!Util.isUnset(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!Util.isUnset(request.clientUid)) {
      query["ClientUid"] = request.clientUid;
    }

    if (!Util.isUnset(request.excludeAdviceId)) {
      query["ExcludeAdviceId"] = request.excludeAdviceId;
    }

    if (!Util.isUnset(request.filterType)) {
      query["FilterType"] = request.filterType;
    }

    if (!Util.isUnset(request.filterValue)) {
      query["FilterValue"] = request.filterValue;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAdvices",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAdvicesResponse>(await this.callApi(params, req, runtime), new DescribeAdvicesResponse({}));
  }

  async describeAdvices(request: DescribeAdvicesRequest): Promise<DescribeAdvicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAdvicesWithOptions(request, runtime);
  }

  async describeAdvicesPageWithOptions(request: DescribeAdvicesPageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAdvicesPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adviceId)) {
      query["AdviceId"] = request.adviceId;
    }

    if (!Util.isUnset(request.associateUid)) {
      query["AssociateUid"] = request.associateUid;
    }

    if (!Util.isUnset(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!Util.isUnset(request.excludeAdviceId)) {
      query["ExcludeAdviceId"] = request.excludeAdviceId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAdvicesPage",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAdvicesPageResponse>(await this.callApi(params, req, runtime), new DescribeAdvicesPageResponse({}));
  }

  async describeAdvicesPage(request: DescribeAdvicesPageRequest): Promise<DescribeAdvicesPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAdvicesPageWithOptions(request, runtime);
  }

  async describeAdvisorChecksWithOptions(request: DescribeAdvisorChecksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAdvisorChecksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAdvisorChecks",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAdvisorChecksResponse>(await this.callApi(params, req, runtime), new DescribeAdvisorChecksResponse({}));
  }

  async describeAdvisorChecks(request: DescribeAdvisorChecksRequest): Promise<DescribeAdvisorChecksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAdvisorChecksWithOptions(request, runtime);
  }

  async getHistoryAdvicesWithOptions(request: GetHistoryAdvicesRequest, runtime: $Util.RuntimeOptions): Promise<GetHistoryAdvicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.associateUid)) {
      query["AssociateUid"] = request.associateUid;
    }

    if (!Util.isUnset(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!Util.isUnset(request.clientUid)) {
      query["ClientUid"] = request.clientUid;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.filterType)) {
      query["FilterType"] = request.filterType;
    }

    if (!Util.isUnset(request.filterValue)) {
      query["FilterValue"] = request.filterValue;
    }

    if (!Util.isUnset(request.isExpired)) {
      query["IsExpired"] = request.isExpired;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!Util.isUnset(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHistoryAdvices",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHistoryAdvicesResponse>(await this.callApi(params, req, runtime), new GetHistoryAdvicesResponse({}));
  }

  async getHistoryAdvices(request: GetHistoryAdvicesRequest): Promise<GetHistoryAdvicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHistoryAdvicesWithOptions(request, runtime);
  }

  async refreshAdvisorCheckWithOptions(request: RefreshAdvisorCheckRequest, runtime: $Util.RuntimeOptions): Promise<RefreshAdvisorCheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshAdvisorCheck",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshAdvisorCheckResponse>(await this.callApi(params, req, runtime), new RefreshAdvisorCheckResponse({}));
  }

  async refreshAdvisorCheck(request: RefreshAdvisorCheckRequest): Promise<RefreshAdvisorCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshAdvisorCheckWithOptions(request, runtime);
  }

  async refreshAdvisorResourceWithOptions(request: RefreshAdvisorResourceRequest, runtime: $Util.RuntimeOptions): Promise<RefreshAdvisorResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshAdvisorResource",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshAdvisorResourceResponse>(await this.callApi(params, req, runtime), new RefreshAdvisorResourceResponse({}));
  }

  async refreshAdvisorResource(request: RefreshAdvisorResourceRequest): Promise<RefreshAdvisorResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshAdvisorResourceWithOptions(request, runtime);
  }

}
