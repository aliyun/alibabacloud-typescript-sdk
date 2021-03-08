// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActivateLicenseRequest extends $tea.Model {
  bizType?: string;
  licensePublisher?: string;
  licenseCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      licensePublisher: 'LicensePublisher',
      licenseCode: 'LicenseCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      licensePublisher: 'string',
      licenseCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateLicenseResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ActivateLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ActivateLicenseResponseBody,
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
    this._endpoint = this.getEndpoint("mseap", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async activateLicenseWithOptions(request: ActivateLicenseRequest, runtime: $Util.RuntimeOptions): Promise<ActivateLicenseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ActivateLicenseResponse>(await this.doRPCRequest("ActivateLicense", "2021-01-18", "HTTPS", "POST", "AK", "json", req, runtime), new ActivateLicenseResponse({}));
  }

  async activateLicense(request: ActivateLicenseRequest): Promise<ActivateLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateLicenseWithOptions(request, runtime);
  }

}
