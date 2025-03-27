// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateAgAccountResponseBodyAgRelationDto extends $dara.Model {
  /**
   * @remarks
   * MPK（UID）
   * 
   * @example
   * 1387058806890955
   */
  mpk?: string;
  /**
   * @example
   * 1441498519728474
   */
  pk?: string;
  /**
   * @example
   * BID
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mpk: 'Mpk',
      pk: 'Pk',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpk: 'string',
      pk: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgRelationResponseBodyAgRelationDto extends $dara.Model {
  mpk?: string;
  pk?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mpk: 'Mpk',
      pk: 'Pk',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpk: 'string',
      pk: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRamBindResponseBodyRamBindDto extends $dara.Model {
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateAgRelationsResponseBodyAgRelationDtosAgRelationDto extends $dara.Model {
  mpk?: string;
  pk?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mpk: 'Mpk',
      pk: 'Pk',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpk: 'string',
      pk: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateAgRelationsResponseBodyAgRelationDtos extends $dara.Model {
  agRelationDto?: PaginateAgRelationsResponseBodyAgRelationDtosAgRelationDto[];
  static names(): { [key: string]: string } {
    return {
      agRelationDto: 'AgRelationDto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agRelationDto: { 'type': 'array', 'itemType': PaginateAgRelationsResponseBodyAgRelationDtosAgRelationDto },
    };
  }

  validate() {
    if(Array.isArray(this.agRelationDto)) {
      $dara.Model.validateArray(this.agRelationDto);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgAccountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  loginEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BID
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      loginEmail: 'LoginEmail',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginEmail: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgAccountResponseBody extends $dara.Model {
  agRelationDto?: CreateAgAccountResponseBodyAgRelationDto;
  /**
   * @example
   * LOGIN_EMAIL_ALREADY_EXIST
   */
  code?: string;
  /**
   * @example
   * this email has already been used.
   */
  message?: string;
  /**
   * @example
   * 28B37990-2326-5A65-9F71-8251590F4779
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      agRelationDto: 'AgRelationDto',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agRelationDto: CreateAgAccountResponseBodyAgRelationDto,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.agRelationDto && typeof (this.agRelationDto as any).validate === 'function') {
      (this.agRelationDto as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAgAccountResponseBody;
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
      body: CreateAgAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgRelationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgRelationResponseBody extends $dara.Model {
  agRelationDto?: GetAgRelationResponseBodyAgRelationDto;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      agRelationDto: 'AgRelationDto',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agRelationDto: GetAgRelationResponseBodyAgRelationDto,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.agRelationDto && typeof (this.agRelationDto as any).validate === 'function') {
      (this.agRelationDto as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgRelationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAgRelationResponseBody;
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
      body: GetAgRelationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRamBindRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRamBindResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  ramBindDto?: GetRamBindResponseBodyRamBindDto;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      ramBindDto: 'RamBindDto',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      ramBindDto: GetRamBindResponseBodyRamBindDto,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.ramBindDto && typeof (this.ramBindDto as any).validate === 'function') {
      (this.ramBindDto as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRamBindResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRamBindResponseBody;
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
      body: GetRamBindResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateAgRelationsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  queryCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      queryCount: 'QueryCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      queryCount: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateAgRelationsResponseBody extends $dara.Model {
  agRelationDtos?: PaginateAgRelationsResponseBodyAgRelationDtos;
  code?: string;
  message?: string;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      agRelationDtos: 'AgRelationDtos',
      code: 'Code',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agRelationDtos: PaginateAgRelationsResponseBodyAgRelationDtos,
      code: 'string',
      message: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.agRelationDtos && typeof (this.agRelationDtos as any).validate === 'function') {
      (this.agRelationDtos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateAgRelationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PaginateAgRelationsResponseBody;
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
      body: PaginateAgRelationsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aliyunid-ag", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 创建ag账号
   * 
   * @param request - CreateAgAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgAccountResponse
   */
  async createAgAccountWithOptions(request: CreateAgAccountRequest, runtime: $dara.RuntimeOptions): Promise<CreateAgAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loginEmail)) {
      query["LoginEmail"] = request.loginEmail;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgAccount",
      version: "2018-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAgAccountResponse>(await this.callApi(params, req, runtime), new CreateAgAccountResponse({}));
    } else {
      return $dara.cast<CreateAgAccountResponse>(await this.execute(params, req, runtime), new CreateAgAccountResponse({}));
    }

  }

  /**
   * 创建ag账号
   * 
   * @param request - CreateAgAccountRequest
   * @returns CreateAgAccountResponse
   */
  async createAgAccount(request: CreateAgAccountRequest): Promise<CreateAgAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgAccountWithOptions(request, runtime);
  }

  /**
   * @param request - GetAgRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgRelationResponse
   */
  async getAgRelationWithOptions(request: GetAgRelationRequest, runtime: $dara.RuntimeOptions): Promise<GetAgRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgRelation",
      version: "2018-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAgRelationResponse>(await this.callApi(params, req, runtime), new GetAgRelationResponse({}));
    } else {
      return $dara.cast<GetAgRelationResponse>(await this.execute(params, req, runtime), new GetAgRelationResponse({}));
    }

  }

  /**
   * @param request - GetAgRelationRequest
   * @returns GetAgRelationResponse
   */
  async getAgRelation(request: GetAgRelationRequest): Promise<GetAgRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgRelationWithOptions(request, runtime);
  }

  /**
   * @param request - GetRamBindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRamBindResponse
   */
  async getRamBindWithOptions(request: GetRamBindRequest, runtime: $dara.RuntimeOptions): Promise<GetRamBindResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pk)) {
      query["Pk"] = request.pk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRamBind",
      version: "2018-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRamBindResponse>(await this.callApi(params, req, runtime), new GetRamBindResponse({}));
    } else {
      return $dara.cast<GetRamBindResponse>(await this.execute(params, req, runtime), new GetRamBindResponse({}));
    }

  }

  /**
   * @param request - GetRamBindRequest
   * @returns GetRamBindResponse
   */
  async getRamBind(request: GetRamBindRequest): Promise<GetRamBindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRamBindWithOptions(request, runtime);
  }

  /**
   * @param request - PaginateAgRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PaginateAgRelationsResponse
   */
  async paginateAgRelationsWithOptions(request: PaginateAgRelationsRequest, runtime: $dara.RuntimeOptions): Promise<PaginateAgRelationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryCount)) {
      query["QueryCount"] = request.queryCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PaginateAgRelations",
      version: "2018-09-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PaginateAgRelationsResponse>(await this.callApi(params, req, runtime), new PaginateAgRelationsResponse({}));
    } else {
      return $dara.cast<PaginateAgRelationsResponse>(await this.execute(params, req, runtime), new PaginateAgRelationsResponse({}));
    }

  }

  /**
   * @param request - PaginateAgRelationsRequest
   * @returns PaginateAgRelationsResponse
   */
  async paginateAgRelations(request: PaginateAgRelationsRequest): Promise<PaginateAgRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.paginateAgRelationsWithOptions(request, runtime);
  }

}
