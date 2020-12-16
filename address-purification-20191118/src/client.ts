// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPCUtil from '@alicloud/rpc-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetAddressGeocodeRequest extends $tea.Model {
  serviceCode: string;
  text: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
      defaultProvince: 'DefaultProvince',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
      defaultProvince: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressGeocodeResponse extends $tea.Model {
  data: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAddressRequest extends $tea.Model {
  serviceCode: string;
  text: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
      defaultProvince: 'DefaultProvince',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
      defaultProvince: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAddressResponse extends $tea.Model {
  data: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZipcodeRequest extends $tea.Model {
  serviceCode: string;
  text: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
      defaultProvince: 'DefaultProvince',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
      defaultProvince: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZipcodeResponse extends $tea.Model {
  data: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPhoneRequest extends $tea.Model {
  serviceCode: string;
  text: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
      defaultProvince: 'DefaultProvince',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
      defaultProvince: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPhoneResponse extends $tea.Model {
  data: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractNameRequest extends $tea.Model {
  serviceCode: string;
  text: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
      defaultProvince: 'DefaultProvince',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
      defaultProvince: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractNameResponse extends $tea.Model {
  data: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressDivisionCodeRequest extends $tea.Model {
  serviceCode: string;
  text: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
      defaultProvince: 'DefaultProvince',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
      defaultProvince: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressDivisionCodeResponse extends $tea.Model {
  data: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyPOIRequest extends $tea.Model {
  serviceCode: string;
  text: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
      defaultProvince: 'DefaultProvince',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
      defaultProvince: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyPOIResponse extends $tea.Model {
  data: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StructureAddressRequest extends $tea.Model {
  serviceCode: string;
  text: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
      defaultProvince: 'DefaultProvince',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
      defaultProvince: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StructureAddressResponse extends $tea.Model {
  data: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractAddressRequest extends $tea.Model {
  serviceCode: string;
  text: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
      defaultProvince: 'DefaultProvince',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
      defaultProvince: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractAddressResponse extends $tea.Model {
  data: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  serviceCode: string;
  parameters: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectShrinkRequest extends $tea.Model {
  serviceCode: string;
  parametersShrink: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      parametersShrink: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      parametersShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponse extends $tea.Model {
  data: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorrectAddressRequest extends $tea.Model {
  serviceCode: string;
  text: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
      defaultProvince: 'DefaultProvince',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
      defaultProvince: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorrectAddressResponse extends $tea.Model {
  data: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressSimilarityRequest extends $tea.Model {
  serviceCode: string;
  text: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
      defaultProvince: 'DefaultProvince',
      defaultCity: 'DefaultCity',
      defaultDistrict: 'DefaultDistrict',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      text: 'string',
      defaultProvince: 'string',
      defaultCity: 'string',
      defaultDistrict: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressSimilarityResponse extends $tea.Model {
  data: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("address-purification", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async getAddressGeocodeWithOptions(request: GetAddressGeocodeRequest, runtime: $Util.RuntimeOptions): Promise<GetAddressGeocodeResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAddressGeocodeResponse>(await this.doRequest("GetAddressGeocode", "HTTPS", "POST", "2019-11-18", "AK", null, $tea.toMap(request), runtime), new GetAddressGeocodeResponse({}));
  }

  async getAddressGeocode(request: GetAddressGeocodeRequest): Promise<GetAddressGeocodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAddressGeocodeWithOptions(request, runtime);
  }

  async completeAddressWithOptions(request: CompleteAddressRequest, runtime: $Util.RuntimeOptions): Promise<CompleteAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<CompleteAddressResponse>(await this.doRequest("CompleteAddress", "HTTPS", "POST", "2019-11-18", "AK", null, $tea.toMap(request), runtime), new CompleteAddressResponse({}));
  }

  async completeAddress(request: CompleteAddressRequest): Promise<CompleteAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeAddressWithOptions(request, runtime);
  }

  async getZipcodeWithOptions(request: GetZipcodeRequest, runtime: $Util.RuntimeOptions): Promise<GetZipcodeResponse> {
    Util.validateModel(request);
    return $tea.cast<GetZipcodeResponse>(await this.doRequest("GetZipcode", "HTTPS", "POST", "2019-11-18", "AK", null, $tea.toMap(request), runtime), new GetZipcodeResponse({}));
  }

  async getZipcode(request: GetZipcodeRequest): Promise<GetZipcodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getZipcodeWithOptions(request, runtime);
  }

  async extractPhoneWithOptions(request: ExtractPhoneRequest, runtime: $Util.RuntimeOptions): Promise<ExtractPhoneResponse> {
    Util.validateModel(request);
    return $tea.cast<ExtractPhoneResponse>(await this.doRequest("ExtractPhone", "HTTPS", "POST", "2019-11-18", "AK", null, $tea.toMap(request), runtime), new ExtractPhoneResponse({}));
  }

  async extractPhone(request: ExtractPhoneRequest): Promise<ExtractPhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractPhoneWithOptions(request, runtime);
  }

  async extractNameWithOptions(request: ExtractNameRequest, runtime: $Util.RuntimeOptions): Promise<ExtractNameResponse> {
    Util.validateModel(request);
    return $tea.cast<ExtractNameResponse>(await this.doRequest("ExtractName", "HTTPS", "POST", "2019-11-18", "AK", null, $tea.toMap(request), runtime), new ExtractNameResponse({}));
  }

  async extractName(request: ExtractNameRequest): Promise<ExtractNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractNameWithOptions(request, runtime);
  }

  async getAddressDivisionCodeWithOptions(request: GetAddressDivisionCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetAddressDivisionCodeResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAddressDivisionCodeResponse>(await this.doRequest("GetAddressDivisionCode", "HTTPS", "POST", "2019-11-18", "AK", null, $tea.toMap(request), runtime), new GetAddressDivisionCodeResponse({}));
  }

  async getAddressDivisionCode(request: GetAddressDivisionCodeRequest): Promise<GetAddressDivisionCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAddressDivisionCodeWithOptions(request, runtime);
  }

  async classifyPOIWithOptions(request: ClassifyPOIRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyPOIResponse> {
    Util.validateModel(request);
    return $tea.cast<ClassifyPOIResponse>(await this.doRequest("ClassifyPOI", "HTTPS", "POST", "2019-11-18", "AK", null, $tea.toMap(request), runtime), new ClassifyPOIResponse({}));
  }

  async classifyPOI(request: ClassifyPOIRequest): Promise<ClassifyPOIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.classifyPOIWithOptions(request, runtime);
  }

  async structureAddressWithOptions(request: StructureAddressRequest, runtime: $Util.RuntimeOptions): Promise<StructureAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<StructureAddressResponse>(await this.doRequest("StructureAddress", "HTTPS", "POST", "2019-11-18", "AK", null, $tea.toMap(request), runtime), new StructureAddressResponse({}));
  }

  async structureAddress(request: StructureAddressRequest): Promise<StructureAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.structureAddressWithOptions(request, runtime);
  }

  async extractAddressWithOptions(request: ExtractAddressRequest, runtime: $Util.RuntimeOptions): Promise<ExtractAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<ExtractAddressResponse>(await this.doRequest("ExtractAddress", "HTTPS", "POST", "2019-11-18", "AK", null, $tea.toMap(request), runtime), new ExtractAddressResponse({}));
  }

  async extractAddress(request: ExtractAddressRequest): Promise<ExtractAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractAddressWithOptions(request, runtime);
  }

  async updateProjectWithOptions(tmp: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(tmp);
    let request = new UpdateProjectShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.parameters)) {
      request.parametersShrink = Util.toJSONString(tmp.parameters);
    }

    return $tea.cast<UpdateProjectResponse>(await this.doRequest("UpdateProject", "HTTPS", "POST", "2019-11-18", "AK", null, $tea.toMap(request), runtime), new UpdateProjectResponse({}));
  }

  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  async correctAddressWithOptions(request: CorrectAddressRequest, runtime: $Util.RuntimeOptions): Promise<CorrectAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<CorrectAddressResponse>(await this.doRequest("CorrectAddress", "HTTPS", "POST", "2019-11-18", "AK", null, $tea.toMap(request), runtime), new CorrectAddressResponse({}));
  }

  async correctAddress(request: CorrectAddressRequest): Promise<CorrectAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.correctAddressWithOptions(request, runtime);
  }

  async getAddressSimilarityWithOptions(request: GetAddressSimilarityRequest, runtime: $Util.RuntimeOptions): Promise<GetAddressSimilarityResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAddressSimilarityResponse>(await this.doRequest("GetAddressSimilarity", "HTTPS", "POST", "2019-11-18", "AK", null, $tea.toMap(request), runtime), new GetAddressSimilarityResponse({}));
  }

  async getAddressSimilarity(request: GetAddressSimilarityRequest): Promise<GetAddressSimilarityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAddressSimilarityWithOptions(request, runtime);
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

}
