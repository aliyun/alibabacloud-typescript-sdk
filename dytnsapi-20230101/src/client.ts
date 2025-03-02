// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class GetPhoneNumberIdentificationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the phone number passed the verification.
   * 
   * @example
   * true
   */
  isIdentified?: string;
  static names(): { [key: string]: string } {
    return {
      isIdentified: 'IsIdentified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isIdentified: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The verification URL.
   * 
   * @example
   * https://global-ip-auth.dycpaas.com/global/biz/ip_auth/start?ipa_s_c_c=IPF0000000000000******&ipa_s_i=8636b75e2fcb40c53ffecc2b59******
   */
  identificationUrl?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 8636b75e2fcb40c53ffecc2b5947115c.149b03d2a7494e6e8f5b34c915245815.707c7f0d93f4409db0761aa5da94ce01.1686******041
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      identificationUrl: 'IdentificationUrl',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identificationUrl: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * K***9i7CIe
   */
  authCode?: string;
  /**
   * @remarks
   * The external ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 149b03d2-a749-4e6e-8f5b-34******5815
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number of the subscriber. The phone number to be verified must be in the Mobile Station International Subscriber Directory Number (MSISDN) format.
   * 
   * This parameter is required.
   * 
   * @example
   * 628211****113
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8636b75e2fcb40c53ffecc2b5947115c.149b03d2a7494e6e8f5b34c915245815.707c7f0d93f4409db0761aa5da94ce01.1686******041
   */
  sessionId?: string;
  /**
   * @remarks
   * The session payload.
   * 
   * This parameter is required.
   * 
   * @example
   * uQne0vsuNywXVvI4VP5taHsgDNsd3BwcbmrhjXi58WbxBGFW+e8ufMEi9j89YonphV6NZ1PIeKvboHtU1nsSjZMTcoFPfkjqaORIHdSlPb6vmIzqOnJMsP1KPQ8K1JLXSaAKsB2lQ5A9HCkX2HzDEwje14HYQsnPd/Ka2YWgXuL0N8GE9oYi25d4DdlU0XR52YjSj8GMLSgbW7yNxEPvUCOQG83FZfQqmIWG2+0C/fQ3gdG9WI7AeeHZo4IRKGtQnpjKGtZZl8VoLPNIswDqZeeyjCyZlKUXKrAt4Co9c4I4q8G1jZm53COQJ+DuTiWH7w+tois3WJwFV/HmdlAKt8SqpiVrEv47VQ9V+8FYsdKz3A3CRyBVgNj6wYKKbwaI9BdQoOkbYzzA8CfAKO5w1oYVD2nOcYS/AffbPbE31PJj7SdVvKghwPL56OVdjS9Hd0iW0SMBWD0F1iRNCUNHL3ffHcFjJLdhTrMt8VHSRn0nOlvO1ZaWqMQ0yE0q*************************kXTpoQLo0+0h+CEcf90hTg8XdMhj9B0A3SOINceLlmoZb3czvYl00+CC0075DjOX41YtnuAUfaNYPgLIZkjYyq+JopBQFAkxPUbJHC0oCzB9dQahUthWY38OPBs=
   */
  sessionPayload?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionId: 'SessionId',
      sessionPayload: 'SessionPayload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionId: 'string',
      sessionPayload: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. Valid values:
   * 
   * *   OK: The request is successful.
   * *   NoIdentificationResult: No verification result is available or the verification failed.
   * *   SessionNotValid: The session is invalid or expired.
   * *   MobileNumberIllegal: The format of the phone number is invalid.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetPhoneNumberIdentificationResultResponseBodyData;
  /**
   * @remarks
   * The description of the return code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 68A40250-50CD-034C-B728-0BD******177
   */
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
      code: 'string',
      data: GetPhoneNumberIdentificationResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPhoneNumberIdentificationResultResponseBody;
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
      body: GetPhoneNumberIdentificationResultResponseBody,
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

export class GetPhoneNumberIdentificationUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * K***9i7CIe
   */
  authCode?: string;
  /**
   * @remarks
   * The IP address of the subscriber\\"s phone.
   * 
   * @example
   * 114.124.***.13
   */
  ip?: string;
  /**
   * @remarks
   * The external ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 149b03d2-a749-4e6e-8f5b-34******5815
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number of the subscriber. The phone number is in the Mobile Station International Subscriber Directory Number (MSISDN) format.
   * 
   * This parameter is required.
   * 
   * @example
   * 628211****113
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Specifies whether to remember the phone number.
   * 
   * @example
   * true
   */
  rememberPhoneNumber?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      ip: 'Ip',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      rememberPhoneNumber: 'RememberPhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      ip: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      rememberPhoneNumber: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **IdentificationNotAvailable**: The verification system does not support the phone number that corresponds to the IP address.
   * *   **MobileNumberIllegal**: The format of the phone number is invalid.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetPhoneNumberIdentificationUrlResponseBodyData;
  /**
   * @remarks
   * The description of the return code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 68A40250-50CD-034C-B728-0BD******177
   */
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
      code: 'string',
      data: GetPhoneNumberIdentificationUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPhoneNumberIdentificationUrlResponseBody;
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
      body: GetPhoneNumberIdentificationUrlResponseBody,
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
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dytnsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Obtains the verification result of your phone number.
   * 
   * @param request - GetPhoneNumberIdentificationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhoneNumberIdentificationResultResponse
   */
  async getPhoneNumberIdentificationResultWithOptions(request: GetPhoneNumberIdentificationResultRequest, runtime: $dara.RuntimeOptions): Promise<GetPhoneNumberIdentificationResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sessionPayload)) {
      query["SessionPayload"] = request.sessionPayload;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPhoneNumberIdentificationResult",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPhoneNumberIdentificationResultResponse>(await this.callApi(params, req, runtime), new GetPhoneNumberIdentificationResultResponse({}));
    } else {
      return $dara.cast<GetPhoneNumberIdentificationResultResponse>(await this.execute(params, req, runtime), new GetPhoneNumberIdentificationResultResponse({}));
    }

  }

  /**
   * Obtains the verification result of your phone number.
   * 
   * @param request - GetPhoneNumberIdentificationResultRequest
   * @returns GetPhoneNumberIdentificationResultResponse
   */
  async getPhoneNumberIdentificationResult(request: GetPhoneNumberIdentificationResultRequest): Promise<GetPhoneNumberIdentificationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhoneNumberIdentificationResultWithOptions(request, runtime);
  }

  /**
   * Obtains the verification URL of your phone number.
   * 
   * @param request - GetPhoneNumberIdentificationUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhoneNumberIdentificationUrlResponse
   */
  async getPhoneNumberIdentificationUrlWithOptions(request: GetPhoneNumberIdentificationUrlRequest, runtime: $dara.RuntimeOptions): Promise<GetPhoneNumberIdentificationUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.rememberPhoneNumber)) {
      query["RememberPhoneNumber"] = request.rememberPhoneNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPhoneNumberIdentificationUrl",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPhoneNumberIdentificationUrlResponse>(await this.callApi(params, req, runtime), new GetPhoneNumberIdentificationUrlResponse({}));
    } else {
      return $dara.cast<GetPhoneNumberIdentificationUrlResponse>(await this.execute(params, req, runtime), new GetPhoneNumberIdentificationUrlResponse({}));
    }

  }

  /**
   * Obtains the verification URL of your phone number.
   * 
   * @param request - GetPhoneNumberIdentificationUrlRequest
   * @returns GetPhoneNumberIdentificationUrlResponse
   */
  async getPhoneNumberIdentificationUrl(request: GetPhoneNumberIdentificationUrlRequest): Promise<GetPhoneNumberIdentificationUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhoneNumberIdentificationUrlWithOptions(request, runtime);
  }

}
