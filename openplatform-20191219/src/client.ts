// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AuthorizeFileUploadRequest extends $tea.Model {
  product?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeFileUploadResponseBody extends $tea.Model {
  accessKeyId?: string;
  bucket?: string;
  encodedPolicy?: string;
  endpoint?: string;
  objectKey?: string;
  requestId?: string;
  signature?: string;
  useAccelerate?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      bucket: 'Bucket',
      encodedPolicy: 'EncodedPolicy',
      endpoint: 'Endpoint',
      objectKey: 'ObjectKey',
      requestId: 'RequestId',
      signature: 'Signature',
      useAccelerate: 'UseAccelerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      bucket: 'string',
      encodedPolicy: 'string',
      endpoint: 'string',
      objectKey: 'string',
      requestId: 'string',
      signature: 'string',
      useAccelerate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeFileUploadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AuthorizeFileUploadResponseBody;
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
      body: AuthorizeFileUploadResponseBody,
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
    this._endpoint = this.getEndpoint("openplatform", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async authorizeFileUploadWithOptions(request: AuthorizeFileUploadRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeFileUploadResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthorizeFileUploadResponse>(await this.callApi(params, req, runtime), new AuthorizeFileUploadResponse({}));
  }

  async authorizeFileUpload(request: AuthorizeFileUploadRequest): Promise<AuthorizeFileUploadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeFileUploadWithOptions(request, runtime);
  }

}
