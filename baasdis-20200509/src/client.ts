// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateEenterpriseDIDRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 01357967-61d1-42a9-8a90-f0dd8a161411
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * F76iBtCdYuE0DHC33a5amzv3ioUfAqjuBxgek3RwjxBZ2cGP0HDxZy0k8Hs7yNtZRmM3h3KmRn4liSH4gLOOK4P41l
   */
  ownerUniqueID?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerUniqueID: 'OwnerUniqueID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerUniqueID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEenterpriseDIDResponseBody extends $tea.Model {
  /**
   * @example
   * "did:mychain:xxx"
   */
  DID?: string;
  /**
   * @example
   * "7CEDB9B0-E68A-4E67-A258-EEE342695921"
   */
  requestId?: string;
  /**
   * @example
   * "OK"
   */
  resultCode?: string;
  /**
   * @example
   * ""
   */
  resultMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      DID: 'DID',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DID: 'string',
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEenterpriseDIDResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEenterpriseDIDResponseBody;
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
      body: CreateEenterpriseDIDResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePersonalDIDRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 01357967-61d1-42a9-8a90-f0dd8a161411
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 73BUce7y51BlPFxHucfjdOLC9cdWNnPqc7pyXXJe05c2twjraDPwDm1KhmD6v1d7tUyxjYoNhXLdX18zzp5rsogU87
   */
  ownerUniqueID?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerUniqueID: 'OwnerUniqueID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerUniqueID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePersonalDIDResponseBody extends $tea.Model {
  /**
   * @example
   * "did:mychain:xxx"
   */
  DID?: string;
  /**
   * @example
   * "7C171509-B966-4AD2-B654-7BE14F1F3AA6"
   */
  requestId?: string;
  /**
   * @example
   * "OK"
   */
  resultCode?: string;
  /**
   * @example
   * ""
   */
  resultMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      DID: 'DID',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DID: 'string',
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePersonalDIDResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePersonalDIDResponseBody;
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
      body: CreatePersonalDIDResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantDIDRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 01357967-61d1-42a9-8a90-f0dd8a161411
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantDIDResponseBody extends $tea.Model {
  /**
   * @example
   * "did:mychain:xxx"
   */
  DID?: string;
  /**
   * @example
   * "757DB186-A865-4F65-935D-7D990E0CE451"
   */
  requestId?: string;
  /**
   * @example
   * "OK"
   */
  resultCode?: string;
  /**
   * @example
   * ""
   */
  resultMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      DID: 'DID',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DID: 'string',
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantDIDResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTenantDIDResponseBody;
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
      body: CreateTenantDIDResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIDRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * did:mychain:xxx
   */
  DID?: string;
  static names(): { [key: string]: string } {
    return {
      DID: 'DID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIDResponseBody extends $tea.Model {
  /**
   * @example
   * "{\\"creator\\":\\"did:mychain:xxx\\",\\"created\\":\\"2020-05-22T13:59:49+0800\\",\\"service\\":[],\\"index\\":[],\\"id\\":\\"did:mychain:xxx\\",\\"publicKey\\":[{\\"controller\\":\\"did:mychain:xxx\\",\\"id\\":\\"keys-1\\",\\"publicKey\\":\\"xxx\\",\\"type\\":\\"Secp256k1VerificationKey2018\\"}],\\"type\\":\\"Corporate\\",\\"@context\\":\\"https://w3id.org/did/v1\\",\\"updated\\":\\"2020-05-22T13:59:49+0800\\",\\"version\\":0,\\"authentication\\":[\\"keys-1\\"]}"
   */
  doc?: string;
  /**
   * @example
   * "2C93E421-AD9D-4ABE-B519-6E1ACD18934C"
   */
  requestId?: string;
  /**
   * @example
   * "OK"
   */
  resultCode?: string;
  /**
   * @example
   * ”“
   */
  resultMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      doc: 'Doc',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      doc: 'string',
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIDResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDIDResponseBody;
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
      body: GetDIDResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IssueNormalVerifiableVCRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bareClaimStructBody?: IssueNormalVerifiableVCRequestBareClaimStructBody[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 01357967-61d1-42a9-8a90-f0dd8a161411
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -1
   */
  expiration?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "did:mychain:xxx"
   */
  issuer?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "did:mychain:xxx"
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      bareClaimStructBody: 'BareClaimStructBody',
      clientToken: 'ClientToken',
      expiration: 'Expiration',
      issuer: 'Issuer',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bareClaimStructBody: { 'type': 'array', 'itemType': IssueNormalVerifiableVCRequestBareClaimStructBody },
      clientToken: 'string',
      expiration: 'number',
      issuer: 'string',
      subject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IssueNormalVerifiableVCResponseBody extends $tea.Model {
  /**
   * @example
   * "4D1E29A7-17D6-48AD-B5AF-F44FAB68D87D"
   */
  requestId?: string;
  /**
   * @example
   * "OK"
   */
  resultCode?: string;
  /**
   * @example
   * ""
   */
  resultMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * "{\\"proof\\":{\\"type\\":\\"ecdsa\\",\\"verificationMethod\\":\\"did:mychain:xxx#keys-1\\",\\"signatureValue\\":\\"xxx\\"},\\"content\\":{\\"issuanceDate\\":1590127960785,\\"subject\\":\\"did:mychain:xxx\\",\\"expire\\":-1,\\"claim\\":\\"test\\",\\"id\\":\\"vc:mychain:xxx\\",\\"type\\":[\\"VerifiableCredential\\"],\\"version\\":\\"0.7.0\\",\\"@context\\":\\"https://www.w3.org/2018/credentials/v1\\",\\"issuer\\":\\"did:mychain:xxx\\",\\"status\\":{\\"id\\":\\"vc:mychain:xxx\\",\\"type\\":\\"BlockChainStatusList\\"}}}"
   */
  verifiableClaimContent?: string;
  /**
   * @example
   * "vc:mychain:xxx"
   */
  verifiableClaimId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
      verifiableClaimContent: 'VerifiableClaimContent',
      verifiableClaimId: 'VerifiableClaimId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
      verifiableClaimContent: 'string',
      verifiableClaimId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IssueNormalVerifiableVCResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IssueNormalVerifiableVCResponseBody;
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
      body: IssueNormalVerifiableVCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVCRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "did:mychain:xxx"
   */
  issuerDid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vc:mychain:xxx
   */
  VCId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "1"
   */
  VCStatus?: string;
  static names(): { [key: string]: string } {
    return {
      issuerDid: 'IssuerDid',
      VCId: 'VCId',
      VCStatus: 'VCStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issuerDid: 'string',
      VCId: 'string',
      VCStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVCResponseBody extends $tea.Model {
  /**
   * @example
   * "1265B5EA-704A-4DCA-83F9-29C4D3B69549"
   */
  requestId?: string;
  /**
   * @example
   * "OK"
   */
  resultCode?: string;
  /**
   * @example
   * ""
   */
  resultMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVCResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVCResponseBody;
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
      body: UpdateVCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVerifiableClaimRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"proof": {"type": "ecdsa","verificationMethod": "did:mychain:xxx#keys-1","signatureValue": "xxx"},"content": {"issuanceDate": 1589964299367,"subject": "did:mychain:xxx","expire": -1,"claim": "test01","id": "vc:mychain:xxx","type": ["VerifiableCredential"],"version": "0.7.0","@context": "https://www.w3.org/2018/credentials/v1","issuer": "did:mychain:xxx","status": {"id": "vc:mychain:xxx","type": "BlockChainStatusList"}}}
   */
  VCContent?: string;
  static names(): { [key: string]: string } {
    return {
      VCContent: 'VCContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VCContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVerifiableClaimResponseBody extends $tea.Model {
  /**
   * @example
   * "EEA284E9-B779-4E62-99EA-E2E8E801A745"
   */
  requestId?: string;
  /**
   * @example
   * "OK"
   */
  resultCode?: string;
  /**
   * @example
   * ""
   */
  resultMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVerifiableClaimResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyVerifiableClaimResponseBody;
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
      body: VerifyVerifiableClaimResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IssueNormalVerifiableVCRequestBareClaimStructBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "test"
   */
  claim?: string;
  /**
   * @example
   * ""
   */
  claimType?: string;
  static names(): { [key: string]: string } {
    return {
      claim: 'Claim',
      claimType: 'ClaimType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claim: 'string',
      claimType: 'string',
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
    this._endpoint = this.getEndpoint("baasdis", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - CreateEenterpriseDIDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEenterpriseDIDResponse
   */
  async createEenterpriseDIDWithOptions(request: CreateEenterpriseDIDRequest, runtime: $Util.RuntimeOptions): Promise<CreateEenterpriseDIDResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerUniqueID)) {
      body["OwnerUniqueID"] = request.ownerUniqueID;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateEenterpriseDID",
      version: "2020-05-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEenterpriseDIDResponse>(await this.callApi(params, req, runtime), new CreateEenterpriseDIDResponse({}));
  }

  /**
   * @param request - CreateEenterpriseDIDRequest
   * @returns CreateEenterpriseDIDResponse
   */
  async createEenterpriseDID(request: CreateEenterpriseDIDRequest): Promise<CreateEenterpriseDIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEenterpriseDIDWithOptions(request, runtime);
  }

  /**
   * @param request - CreatePersonalDIDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePersonalDIDResponse
   */
  async createPersonalDIDWithOptions(request: CreatePersonalDIDRequest, runtime: $Util.RuntimeOptions): Promise<CreatePersonalDIDResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerUniqueID)) {
      body["OwnerUniqueID"] = request.ownerUniqueID;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePersonalDID",
      version: "2020-05-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePersonalDIDResponse>(await this.callApi(params, req, runtime), new CreatePersonalDIDResponse({}));
  }

  /**
   * @param request - CreatePersonalDIDRequest
   * @returns CreatePersonalDIDResponse
   */
  async createPersonalDID(request: CreatePersonalDIDRequest): Promise<CreatePersonalDIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPersonalDIDWithOptions(request, runtime);
  }

  /**
   * @param request - CreateTenantDIDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTenantDIDResponse
   */
  async createTenantDIDWithOptions(request: CreateTenantDIDRequest, runtime: $Util.RuntimeOptions): Promise<CreateTenantDIDResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTenantDID",
      version: "2020-05-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTenantDIDResponse>(await this.callApi(params, req, runtime), new CreateTenantDIDResponse({}));
  }

  /**
   * @param request - CreateTenantDIDRequest
   * @returns CreateTenantDIDResponse
   */
  async createTenantDID(request: CreateTenantDIDRequest): Promise<CreateTenantDIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTenantDIDWithOptions(request, runtime);
  }

  /**
   * @param request - GetDIDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDIDResponse
   */
  async getDIDWithOptions(request: GetDIDRequest, runtime: $Util.RuntimeOptions): Promise<GetDIDResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DID)) {
      body["DID"] = request.DID;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDID",
      version: "2020-05-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDIDResponse>(await this.callApi(params, req, runtime), new GetDIDResponse({}));
  }

  /**
   * @param request - GetDIDRequest
   * @returns GetDIDResponse
   */
  async getDID(request: GetDIDRequest): Promise<GetDIDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDIDWithOptions(request, runtime);
  }

  /**
   * @param request - IssueNormalVerifiableVCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IssueNormalVerifiableVCResponse
   */
  async issueNormalVerifiableVCWithOptions(request: IssueNormalVerifiableVCRequest, runtime: $Util.RuntimeOptions): Promise<IssueNormalVerifiableVCResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bareClaimStructBody)) {
      body["BareClaimStructBody"] = request.bareClaimStructBody;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.expiration)) {
      body["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.issuer)) {
      body["Issuer"] = request.issuer;
    }

    if (!Util.isUnset(request.subject)) {
      body["Subject"] = request.subject;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "IssueNormalVerifiableVC",
      version: "2020-05-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IssueNormalVerifiableVCResponse>(await this.callApi(params, req, runtime), new IssueNormalVerifiableVCResponse({}));
  }

  /**
   * @param request - IssueNormalVerifiableVCRequest
   * @returns IssueNormalVerifiableVCResponse
   */
  async issueNormalVerifiableVC(request: IssueNormalVerifiableVCRequest): Promise<IssueNormalVerifiableVCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.issueNormalVerifiableVCWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateVCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVCResponse
   */
  async updateVCWithOptions(request: UpdateVCRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVCResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.issuerDid)) {
      body["IssuerDid"] = request.issuerDid;
    }

    if (!Util.isUnset(request.VCId)) {
      body["VCId"] = request.VCId;
    }

    if (!Util.isUnset(request.VCStatus)) {
      body["VCStatus"] = request.VCStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateVC",
      version: "2020-05-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateVCResponse>(await this.callApi(params, req, runtime), new UpdateVCResponse({}));
  }

  /**
   * @param request - UpdateVCRequest
   * @returns UpdateVCResponse
   */
  async updateVC(request: UpdateVCRequest): Promise<UpdateVCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVCWithOptions(request, runtime);
  }

  /**
   * @param request - VerifyVerifiableClaimRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyVerifiableClaimResponse
   */
  async verifyVerifiableClaimWithOptions(request: VerifyVerifiableClaimRequest, runtime: $Util.RuntimeOptions): Promise<VerifyVerifiableClaimResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.VCContent)) {
      body["VCContent"] = request.VCContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VerifyVerifiableClaim",
      version: "2020-05-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyVerifiableClaimResponse>(await this.callApi(params, req, runtime), new VerifyVerifiableClaimResponse({}));
  }

  /**
   * @param request - VerifyVerifiableClaimRequest
   * @returns VerifyVerifiableClaimResponse
   */
  async verifyVerifiableClaim(request: VerifyVerifiableClaimRequest): Promise<VerifyVerifiableClaimResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyVerifiableClaimWithOptions(request, runtime);
  }

}
