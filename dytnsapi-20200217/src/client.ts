// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribePhoneNumberResaleRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumber?: string;
  since?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumber: 'PhoneNumber',
      since: 'Since',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumber: 'string',
      since: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberResaleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  twiceTelVerify?: DescribePhoneNumberResaleResponseBodyTwiceTelVerify;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      twiceTelVerify: 'TwiceTelVerify',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      twiceTelVerify: DescribePhoneNumberResaleResponseBodyTwiceTelVerify,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberResaleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePhoneNumberResaleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePhoneNumberResaleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberStatusRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberStatusResponseBody extends $tea.Model {
  phoneStatus?: DescribePhoneNumberStatusResponseBodyPhoneStatus;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      phoneStatus: 'PhoneStatus',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneStatus: DescribePhoneNumberStatusResponseBodyPhoneStatus,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePhoneNumberStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePhoneNumberStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNumberAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNumberAttributeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  phoneNumberAttribute?: QueryPhoneNumberAttributeResponseBodyPhoneNumberAttribute;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      phoneNumberAttribute: 'PhoneNumberAttribute',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      phoneNumberAttribute: QueryPhoneNumberAttributeResponseBodyPhoneNumberAttribute,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNumberAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPhoneNumberAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPhoneNumberAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberResaleResponseBodyTwiceTelVerify extends $tea.Model {
  carrier?: string;
  verifyResult?: number;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      verifyResult: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberStatusResponseBodyPhoneStatus extends $tea.Model {
  status?: string;
  serialId?: string;
  carrier?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      serialId: 'SerialId',
      carrier: 'Carrier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      serialId: 'string',
      carrier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNumberAttributeResponseBodyPhoneNumberAttribute extends $tea.Model {
  basicCarrier?: string;
  carrier?: string;
  isNumberPortability?: boolean;
  numberSegment?: number;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      basicCarrier: 'BasicCarrier',
      carrier: 'Carrier',
      isNumberPortability: 'IsNumberPortability',
      numberSegment: 'NumberSegment',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicCarrier: 'string',
      carrier: 'string',
      isNumberPortability: 'boolean',
      numberSegment: 'number',
      city: 'string',
      province: 'string',
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
    this._endpoint = this.getEndpoint("dytnsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describePhoneNumberResaleWithOptions(request: DescribePhoneNumberResaleRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhoneNumberResaleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePhoneNumberResaleResponse>(await this.doRPCRequest("DescribePhoneNumberResale", "2020-02-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePhoneNumberResaleResponse({}));
  }

  async describePhoneNumberResale(request: DescribePhoneNumberResaleRequest): Promise<DescribePhoneNumberResaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberResaleWithOptions(request, runtime);
  }

  async describePhoneNumberStatusWithOptions(request: DescribePhoneNumberStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhoneNumberStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePhoneNumberStatusResponse>(await this.doRPCRequest("DescribePhoneNumberStatus", "2020-02-17", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePhoneNumberStatusResponse({}));
  }

  async describePhoneNumberStatus(request: DescribePhoneNumberStatusRequest): Promise<DescribePhoneNumberStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberStatusWithOptions(request, runtime);
  }

  async queryPhoneNumberAttributeWithOptions(request: QueryPhoneNumberAttributeRequest, runtime: $Util.RuntimeOptions): Promise<QueryPhoneNumberAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPhoneNumberAttributeResponse>(await this.doRPCRequest("QueryPhoneNumberAttribute", "2020-02-17", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPhoneNumberAttributeResponse({}));
  }

  async queryPhoneNumberAttribute(request: QueryPhoneNumberAttributeRequest): Promise<QueryPhoneNumberAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPhoneNumberAttributeWithOptions(request, runtime);
  }

}
