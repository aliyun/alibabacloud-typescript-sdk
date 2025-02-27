// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AccountInfoManageRequest extends $dara.Model {
  accountId?: string;
  name?: string;
  quarkKey?: string;
  quarkName?: string;
  testQps?: number;
  testQueryPerDay?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      name: 'name',
      quarkKey: 'quarkKey',
      quarkName: 'quarkName',
      testQps: 'testQps',
      testQueryPerDay: 'testQueryPerDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      name: 'string',
      quarkKey: 'string',
      quarkName: 'string',
      testQps: 'number',
      testQueryPerDay: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpendExpiredTimeRequest extends $dara.Model {
  accountId?: string;
  testStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      testStartTime: 'testStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      testStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IrAccountEntity extends $dara.Model {
  accountId?: string;
  accountName?: string;
  accountStatus?: string;
  adjustedNormalQps?: number;
  configuration?: string;
  createTime?: string;
  id?: number;
  isDeleted?: number;
  modifiedTime?: string;
  quarkKey?: string;
  quarkOsr?: string;
  quarkUsername?: string;
  searchType?: string;
  testQps?: number;
  testQueryPerDay?: number;
  testStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      accountName: 'accountName',
      accountStatus: 'accountStatus',
      adjustedNormalQps: 'adjustedNormalQps',
      configuration: 'configuration',
      createTime: 'createTime',
      id: 'id',
      isDeleted: 'isDeleted',
      modifiedTime: 'modifiedTime',
      quarkKey: 'quarkKey',
      quarkOsr: 'quarkOsr',
      quarkUsername: 'quarkUsername',
      searchType: 'searchType',
      testQps: 'testQps',
      testQueryPerDay: 'testQueryPerDay',
      testStartTime: 'testStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      accountStatus: 'string',
      adjustedNormalQps: 'number',
      configuration: 'string',
      createTime: 'string',
      id: 'number',
      isDeleted: 'number',
      modifiedTime: 'string',
      quarkKey: 'string',
      quarkOsr: 'string',
      quarkUsername: 'string',
      searchType: 'string',
      testQps: 'number',
      testQueryPerDay: 'number',
      testStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IrAccountPageQuery extends $dara.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageAccountResult extends $dara.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperationResult extends $dara.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpandSearchExpiredTimeRequest extends $dara.Model {
  body?: ExpendExpiredTimeRequest;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ExpendExpiredTimeRequest,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpandSearchExpiredTimeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperationResult;
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
      body: OperationResult,
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

export class ManageSearchAccountInfoRequest extends $dara.Model {
  body?: AccountInfoManageRequest;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AccountInfoManageRequest,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageSearchAccountInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperationResult;
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
      body: OperationResult,
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
    this._endpoint = this.getEndpoint("iqs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 延长测试时间
   * 
   * @param request - ExpandSearchExpiredTimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExpandSearchExpiredTimeResponse
   */
  async expandSearchExpiredTimeWithOptions(request: ExpandSearchExpiredTimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExpandSearchExpiredTimeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExpandSearchExpiredTime",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/openService/v1/account/commands/expendExpiredTime`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExpandSearchExpiredTimeResponse>(await this.callApi(params, req, runtime), new ExpandSearchExpiredTimeResponse({}));
    } else {
      return $dara.cast<ExpandSearchExpiredTimeResponse>(await this.execute(params, req, runtime), new ExpandSearchExpiredTimeResponse({}));
    }

  }

  /**
   * 延长测试时间
   * 
   * @param request - ExpandSearchExpiredTimeRequest
   * @returns ExpandSearchExpiredTimeResponse
   */
  async expandSearchExpiredTime(request: ExpandSearchExpiredTimeRequest): Promise<ExpandSearchExpiredTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.expandSearchExpiredTimeWithOptions(request, headers, runtime);
  }

  /**
   * 管理智搜用户
   * 
   * @param request - ManageSearchAccountInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManageSearchAccountInfoResponse
   */
  async manageSearchAccountInfoWithOptions(request: ManageSearchAccountInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ManageSearchAccountInfoResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManageSearchAccountInfo",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/openService/v1/account/commands/manage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ManageSearchAccountInfoResponse>(await this.callApi(params, req, runtime), new ManageSearchAccountInfoResponse({}));
    } else {
      return $dara.cast<ManageSearchAccountInfoResponse>(await this.execute(params, req, runtime), new ManageSearchAccountInfoResponse({}));
    }

  }

  /**
   * 管理智搜用户
   * 
   * @param request - ManageSearchAccountInfoRequest
   * @returns ManageSearchAccountInfoResponse
   */
  async manageSearchAccountInfo(request: ManageSearchAccountInfoRequest): Promise<ManageSearchAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.manageSearchAccountInfoWithOptions(request, headers, runtime);
  }

}
