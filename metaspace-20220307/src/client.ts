// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ApplyCoordinationWithCodeRequest extends $tea.Model {
  /**
   * @example
   * PA3MU***
   */
  coordinationCode?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @example
   * v2c4e2ef03d62******
   */
  loginToken?: string;
  /**
   * @example
   * 09e2b2e6-3181******
   */
  sessionId?: string;
  /**
   * @example
   * A8B35215993FBF283F28D61******
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      coordinationCode: 'CoordinationCode',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      sessionId: 'SessionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinationCode: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      sessionId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationWithCodeResponseBody extends $tea.Model {
  data?: ApplyCoordinationWithCodeResponseBodyData;
  /**
   * @example
   * AD2D0761-1FE5-549D-B169******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ApplyCoordinationWithCodeResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationWithCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyCoordinationWithCodeResponseBody;
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
      body: ApplyCoordinationWithCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndAllCoordinationByOwnerRequest extends $tea.Model {
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @example
   * v2c4e2ef03d62******
   */
  loginToken?: string;
  /**
   * @example
   * ecd-68a7ddrt0******
   */
  resourceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @example
   * CloudDesktop
   */
  resourceType?: string;
  /**
   * @example
   * 09e2b2e6-3181******
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginRegionId: 'string',
      loginToken: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndAllCoordinationByOwnerResponseBody extends $tea.Model {
  /**
   * @example
   * AD2D0761-1FE5-549D-B169******
   */
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

export class EndAllCoordinationByOwnerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EndAllCoordinationByOwnerResponseBody;
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
      body: EndAllCoordinationByOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCoordinationCodeRequest extends $tea.Model {
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @example
   * v2c4e2ef03d62******
   */
  loginToken?: string;
  /**
   * @example
   * ecd-68a7ddrt0******
   */
  resourceId?: string;
  /**
   * @example
   * demo-desktop
   */
  resourceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @example
   * CloudDesktop
   */
  resourceType?: string;
  /**
   * @example
   * 09e2b2e6-3181******
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginRegionId: 'string',
      loginToken: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCoordinationCodeResponseBody extends $tea.Model {
  /**
   * @example
   * PA3MU***
   */
  coordinationCode?: string;
  /**
   * @example
   * AD2D0761-1FE5-549D-B169******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      coordinationCode: 'CoordinationCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinationCode: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCoordinationCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateCoordinationCodeResponseBody;
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
      body: GenerateCoordinationCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationWithCodeResponseBodyData extends $tea.Model {
  /**
   * @example
   * co-0ad0f3p4n2******
   */
  coId?: string;
  /**
   * @example
   * COORDINATING
   */
  coordinateStatus?: string;
  /**
   * @example
   * DQpbRGVza3RvcF0NCkZvcmNlVGxzVHlwZT0xDQ******
   */
  coordinateTicket?: string;
  /**
   * @example
   * 1126819517******
   */
  coordinatorAliUid?: number;
  /**
   * @example
   * bob
   */
  coordinatorUserId?: string;
  /**
   * @example
   * 1126819517******
   */
  ownerAliUid?: number;
  /**
   * @example
   * alice
   */
  ownerUserId?: string;
  /**
   * @example
   * ecd-3vv4mf8zxg******
   */
  resourceId?: string;
  /**
   * @example
   * demo-desktop
   */
  resourceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @example
   * CloudDesktop
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      coordinateStatus: 'CoordinateStatus',
      coordinateTicket: 'CoordinateTicket',
      coordinatorAliUid: 'CoordinatorAliUid',
      coordinatorUserId: 'CoordinatorUserId',
      ownerAliUid: 'OwnerAliUid',
      ownerUserId: 'OwnerUserId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      coordinateStatus: 'string',
      coordinateTicket: 'string',
      coordinatorAliUid: 'number',
      coordinatorUserId: 'string',
      ownerAliUid: 'number',
      ownerUserId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("metaspace", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 用协同码发起协同
   * 
   * @param request - ApplyCoordinationWithCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyCoordinationWithCodeResponse
   */
  async applyCoordinationWithCodeWithOptions(request: ApplyCoordinationWithCodeRequest, runtime: $Util.RuntimeOptions): Promise<ApplyCoordinationWithCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.coordinationCode)) {
      body["CoordinationCode"] = request.coordinationCode;
    }

    if (!Util.isUnset(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!Util.isUnset(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyCoordinationWithCode",
      version: "2022-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyCoordinationWithCodeResponse>(await this.callApi(params, req, runtime), new ApplyCoordinationWithCodeResponse({}));
  }

  /**
   * 用协同码发起协同
   * 
   * @param request - ApplyCoordinationWithCodeRequest
   * @returns ApplyCoordinationWithCodeResponse
   */
  async applyCoordinationWithCode(request: ApplyCoordinationWithCodeRequest): Promise<ApplyCoordinationWithCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyCoordinationWithCodeWithOptions(request, runtime);
  }

  /**
   * Owner主动结束本次协同，同步失效协同码
   * 
   * @param request - EndAllCoordinationByOwnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EndAllCoordinationByOwnerResponse
   */
  async endAllCoordinationByOwnerWithOptions(request: EndAllCoordinationByOwnerRequest, runtime: $Util.RuntimeOptions): Promise<EndAllCoordinationByOwnerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!Util.isUnset(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      body["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EndAllCoordinationByOwner",
      version: "2022-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EndAllCoordinationByOwnerResponse>(await this.callApi(params, req, runtime), new EndAllCoordinationByOwnerResponse({}));
  }

  /**
   * Owner主动结束本次协同，同步失效协同码
   * 
   * @param request - EndAllCoordinationByOwnerRequest
   * @returns EndAllCoordinationByOwnerResponse
   */
  async endAllCoordinationByOwner(request: EndAllCoordinationByOwnerRequest): Promise<EndAllCoordinationByOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.endAllCoordinationByOwnerWithOptions(request, runtime);
  }

  /**
   * 生成协同码
   * 
   * @param request - GenerateCoordinationCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateCoordinationCodeResponse
   */
  async generateCoordinationCodeWithOptions(request: GenerateCoordinationCodeRequest, runtime: $Util.RuntimeOptions): Promise<GenerateCoordinationCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!Util.isUnset(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceName)) {
      body["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      body["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateCoordinationCode",
      version: "2022-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateCoordinationCodeResponse>(await this.callApi(params, req, runtime), new GenerateCoordinationCodeResponse({}));
  }

  /**
   * 生成协同码
   * 
   * @param request - GenerateCoordinationCodeRequest
   * @returns GenerateCoordinationCodeResponse
   */
  async generateCoordinationCode(request: GenerateCoordinationCodeRequest): Promise<GenerateCoordinationCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateCoordinationCodeWithOptions(request, runtime);
  }

}
