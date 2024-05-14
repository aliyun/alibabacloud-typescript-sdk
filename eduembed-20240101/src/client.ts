// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateLabReservationRequest extends $tea.Model {
  accountId?: number;
  endTime?: string;
  labId?: number;
  memberCount?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      endTime: 'EndTime',
      labId: 'LabId',
      memberCount: 'MemberCount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      endTime: 'string',
      labId: 'number',
      memberCount: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabReservationResponseBody extends $tea.Model {
  code?: string;
  labReservation?: CreateLabReservationResponseBodyLabReservation;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      labReservation: 'LabReservation',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      labReservation: CreateLabReservationResponseBodyLabReservation,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabReservationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLabReservationResponseBody;
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
      body: CreateLabReservationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabSessionRequest extends $tea.Model {
  accountId?: number;
  labId?: number;
  ramAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      labId: 'LabId',
      ramAccountId: 'RamAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      labId: 'number',
      ramAccountId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabSessionResponseBody extends $tea.Model {
  code?: string;
  labSession?: CreateLabSessionResponseBodyLabSession;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      labSession: 'LabSession',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      labSession: CreateLabSessionResponseBodyLabSession,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabSessionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLabSessionResponseBody;
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
      body: CreateLabSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLabRequest extends $tea.Model {
  labId?: number;
  static names(): { [key: string]: string } {
    return {
      labId: 'LabId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLabResponseBody extends $tea.Model {
  code?: string;
  lab?: DescribeLabResponseBodyLab;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lab: 'Lab',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lab: DescribeLabResponseBodyLab,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLabResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLabResponseBody;
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
      body: DescribeLabResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLabReservationRequest extends $tea.Model {
  accountId?: number;
  labReservationId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      labReservationId: 'LabReservationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      labReservationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLabReservationResponseBody extends $tea.Model {
  code?: string;
  labReservation?: DescribeLabReservationResponseBodyLabReservation;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      labReservation: 'LabReservation',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      labReservation: DescribeLabReservationResponseBodyLabReservation,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLabReservationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLabReservationResponseBody;
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
      body: DescribeLabReservationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLabSessionRequest extends $tea.Model {
  accountId?: number;
  labSessionId?: string;
  ramAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      labSessionId: 'LabSessionId',
      ramAccountId: 'RamAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      labSessionId: 'string',
      ramAccountId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLabSessionResponseBody extends $tea.Model {
  code?: string;
  labSession?: DescribeLabSessionResponseBodyLabSession;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      labSession: 'LabSession',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      labSession: DescribeLabSessionResponseBodyLabSession,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLabSessionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLabSessionResponseBody;
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
      body: DescribeLabSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListLabReservationsRequest extends $tea.Model {
  accountId?: number;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListLabReservationsResponseBody extends $tea.Model {
  code?: string;
  labReservations?: PageListLabReservationsResponseBodyLabReservations[];
  message?: string;
  page?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      labReservations: 'LabReservations',
      message: 'Message',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      labReservations: { 'type': 'array', 'itemType': PageListLabReservationsResponseBodyLabReservations },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListLabReservationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PageListLabReservationsResponseBody;
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
      body: PageListLabReservationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListLabSessionsRequest extends $tea.Model {
  finished?: boolean;
  labId?: number;
  page?: number;
  pageSize?: number;
  ramAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      finished: 'Finished',
      labId: 'LabId',
      page: 'Page',
      pageSize: 'PageSize',
      ramAccountId: 'RamAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finished: 'boolean',
      labId: 'number',
      page: 'number',
      pageSize: 'number',
      ramAccountId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListLabSessionsResponseBody extends $tea.Model {
  code?: string;
  labSessions?: PageListLabSessionsResponseBodyLabSessions[];
  message?: string;
  page?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      labSessions: 'LabSessions',
      message: 'Message',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      labSessions: { 'type': 'array', 'itemType': PageListLabSessionsResponseBodyLabSessions },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListLabSessionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PageListLabSessionsResponseBody;
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
      body: PageListLabSessionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListLabsRequest extends $tea.Model {
  id?: number[];
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListLabsResponseBody extends $tea.Model {
  code?: string;
  labs?: PageListLabsResponseBodyLabs[];
  message?: string;
  page?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      labs: 'Labs',
      message: 'Message',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      labs: { 'type': 'array', 'itemType': PageListLabsResponseBodyLabs },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListLabsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PageListLabsResponseBody;
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
      body: PageListLabsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveLabReservationRequest extends $tea.Model {
  accountId?: number;
  labReservationId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      labReservationId: 'LabReservationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      labReservationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveLabReservationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveLabReservationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveLabReservationResponseBody;
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
      body: RemoveLabReservationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabReservationResponseBodyLabReservation extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabSessionResponseBodyLabSession extends $tea.Model {
  id?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLabResponseBodyLab extends $tea.Model {
  duration?: number;
  id?: number;
  introduction?: string;
  subTitle?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      id: 'Id',
      introduction: 'Introduction',
      subTitle: 'SubTitle',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      id: 'number',
      introduction: 'string',
      subTitle: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLabReservationResponseBodyLabReservation extends $tea.Model {
  accountId?: number;
  endTime?: string;
  id?: string;
  memberCount?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      endTime: 'EndTime',
      id: 'Id',
      memberCount: 'MemberCount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      endTime: 'string',
      id: 'string',
      memberCount: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLabSessionResponseBodyLabSession extends $tea.Model {
  createTime?: string;
  finished?: boolean;
  id?: string;
  labId?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finished: 'Finished',
      id: 'Id',
      labId: 'LabId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finished: 'boolean',
      id: 'string',
      labId: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListLabReservationsResponseBodyLabReservations extends $tea.Model {
  accountId?: number;
  endTime?: string;
  id?: string;
  memberCount?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      endTime: 'EndTime',
      id: 'Id',
      memberCount: 'MemberCount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      endTime: 'string',
      id: 'string',
      memberCount: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListLabSessionsResponseBodyLabSessions extends $tea.Model {
  createTime?: string;
  finished?: boolean;
  id?: string;
  labId?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finished: 'Finished',
      id: 'Id',
      labId: 'LabId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finished: 'boolean',
      id: 'string',
      labId: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListLabsResponseBodyLabs extends $tea.Model {
  duration?: number;
  id?: number;
  introduction?: string;
  subTitle?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      id: 'Id',
      introduction: 'Introduction',
      subTitle: 'SubTitle',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      id: 'number',
      introduction: 'string',
      subTitle: 'string',
      title: 'string',
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
    this._endpoint = this.getEndpoint("eduembed", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary 创建实验预约
   *
   * @param request CreateLabReservationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateLabReservationResponse
   */
  async createLabReservationWithOptions(request: CreateLabReservationRequest, runtime: $Util.RuntimeOptions): Promise<CreateLabReservationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.labId)) {
      body["LabId"] = request.labId;
    }

    if (!Util.isUnset(request.memberCount)) {
      body["MemberCount"] = request.memberCount;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLabReservation",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLabReservationResponse>(await this.callApi(params, req, runtime), new CreateLabReservationResponse({}));
  }

  /**
   * @summary 创建实验预约
   *
   * @param request CreateLabReservationRequest
   * @return CreateLabReservationResponse
   */
  async createLabReservation(request: CreateLabReservationRequest): Promise<CreateLabReservationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLabReservationWithOptions(request, runtime);
  }

  /**
   * @summary 创建实验会话
   *
   * @param request CreateLabSessionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateLabSessionResponse
   */
  async createLabSessionWithOptions(request: CreateLabSessionRequest, runtime: $Util.RuntimeOptions): Promise<CreateLabSessionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.labId)) {
      body["LabId"] = request.labId;
    }

    if (!Util.isUnset(request.ramAccountId)) {
      body["RamAccountId"] = request.ramAccountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLabSession",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLabSessionResponse>(await this.callApi(params, req, runtime), new CreateLabSessionResponse({}));
  }

  /**
   * @summary 创建实验会话
   *
   * @param request CreateLabSessionRequest
   * @return CreateLabSessionResponse
   */
  async createLabSession(request: CreateLabSessionRequest): Promise<CreateLabSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLabSessionWithOptions(request, runtime);
  }

  /**
   * @summary 查看实验详情
   *
   * @param request DescribeLabRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeLabResponse
   */
  async describeLabWithOptions(request: DescribeLabRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLabResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLab",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLabResponse>(await this.callApi(params, req, runtime), new DescribeLabResponse({}));
  }

  /**
   * @summary 查看实验详情
   *
   * @param request DescribeLabRequest
   * @return DescribeLabResponse
   */
  async describeLab(request: DescribeLabRequest): Promise<DescribeLabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLabWithOptions(request, runtime);
  }

  /**
   * @summary 查询实验预约
   *
   * @param request DescribeLabReservationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeLabReservationResponse
   */
  async describeLabReservationWithOptions(request: DescribeLabReservationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLabReservationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLabReservation",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLabReservationResponse>(await this.callApi(params, req, runtime), new DescribeLabReservationResponse({}));
  }

  /**
   * @summary 查询实验预约
   *
   * @param request DescribeLabReservationRequest
   * @return DescribeLabReservationResponse
   */
  async describeLabReservation(request: DescribeLabReservationRequest): Promise<DescribeLabReservationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLabReservationWithOptions(request, runtime);
  }

  /**
   * @summary 查看实验会话信息
   *
   * @param request DescribeLabSessionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeLabSessionResponse
   */
  async describeLabSessionWithOptions(request: DescribeLabSessionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLabSessionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLabSession",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLabSessionResponse>(await this.callApi(params, req, runtime), new DescribeLabSessionResponse({}));
  }

  /**
   * @summary 查看实验会话信息
   *
   * @param request DescribeLabSessionRequest
   * @return DescribeLabSessionResponse
   */
  async describeLabSession(request: DescribeLabSessionRequest): Promise<DescribeLabSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLabSessionWithOptions(request, runtime);
  }

  /**
   * @summary 分页查询实验预约
   *
   * @param request PageListLabReservationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PageListLabReservationsResponse
   */
  async pageListLabReservationsWithOptions(request: PageListLabReservationsRequest, runtime: $Util.RuntimeOptions): Promise<PageListLabReservationsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PageListLabReservations",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PageListLabReservationsResponse>(await this.callApi(params, req, runtime), new PageListLabReservationsResponse({}));
  }

  /**
   * @summary 分页查询实验预约
   *
   * @param request PageListLabReservationsRequest
   * @return PageListLabReservationsResponse
   */
  async pageListLabReservations(request: PageListLabReservationsRequest): Promise<PageListLabReservationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pageListLabReservationsWithOptions(request, runtime);
  }

  /**
   * @summary 分页查询实验会话
   *
   * @param request PageListLabSessionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PageListLabSessionsResponse
   */
  async pageListLabSessionsWithOptions(request: PageListLabSessionsRequest, runtime: $Util.RuntimeOptions): Promise<PageListLabSessionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PageListLabSessions",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PageListLabSessionsResponse>(await this.callApi(params, req, runtime), new PageListLabSessionsResponse({}));
  }

  /**
   * @summary 分页查询实验会话
   *
   * @param request PageListLabSessionsRequest
   * @return PageListLabSessionsResponse
   */
  async pageListLabSessions(request: PageListLabSessionsRequest): Promise<PageListLabSessionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pageListLabSessionsWithOptions(request, runtime);
  }

  /**
   * @summary 分页查询实验
   *
   * @param request PageListLabsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PageListLabsResponse
   */
  async pageListLabsWithOptions(request: PageListLabsRequest, runtime: $Util.RuntimeOptions): Promise<PageListLabsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PageListLabs",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PageListLabsResponse>(await this.callApi(params, req, runtime), new PageListLabsResponse({}));
  }

  /**
   * @summary 分页查询实验
   *
   * @param request PageListLabsRequest
   * @return PageListLabsResponse
   */
  async pageListLabs(request: PageListLabsRequest): Promise<PageListLabsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pageListLabsWithOptions(request, runtime);
  }

  /**
   * @summary 移除实验预约
   *
   * @param request RemoveLabReservationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveLabReservationResponse
   */
  async removeLabReservationWithOptions(request: RemoveLabReservationRequest, runtime: $Util.RuntimeOptions): Promise<RemoveLabReservationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.labReservationId)) {
      body["LabReservationId"] = request.labReservationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveLabReservation",
      version: "2024-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveLabReservationResponse>(await this.callApi(params, req, runtime), new RemoveLabReservationResponse({}));
  }

  /**
   * @summary 移除实验预约
   *
   * @param request RemoveLabReservationRequest
   * @return RemoveLabReservationResponse
   */
  async removeLabReservation(request: RemoveLabReservationRequest): Promise<RemoveLabReservationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeLabReservationWithOptions(request, runtime);
  }

}
