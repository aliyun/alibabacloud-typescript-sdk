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

export class BusinessLicenseOcrRequest extends $tea.Model {
  lang?: string;
  bizCode?: string;
  fileInfo?: string;
  fileStoreType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      bizCode: 'BizCode',
      fileInfo: 'FileInfo',
      fileStoreType: 'FileStoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      bizCode: 'string',
      fileInfo: 'string',
      fileStoreType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BusinessLicenseOcrResponseBody extends $tea.Model {
  registerNumber?: string;
  type?: string;
  validPeriod?: string;
  requestId?: string;
  address?: string;
  capital?: string;
  legalPerson?: string;
  establishDate?: string;
  nationality?: string;
  name?: string;
  business?: string;
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      registerNumber: 'RegisterNumber',
      type: 'Type',
      validPeriod: 'ValidPeriod',
      requestId: 'RequestId',
      address: 'Address',
      capital: 'Capital',
      legalPerson: 'LegalPerson',
      establishDate: 'EstablishDate',
      nationality: 'Nationality',
      name: 'Name',
      business: 'Business',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registerNumber: 'string',
      type: 'string',
      validPeriod: 'string',
      requestId: 'string',
      address: 'string',
      capital: 'string',
      legalPerson: 'string',
      establishDate: 'string',
      nationality: 'string',
      name: 'string',
      business: 'string',
      trackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BusinessLicenseOcrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BusinessLicenseOcrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BusinessLicenseOcrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificateQualityRequest extends $tea.Model {
  lang?: string;
  bizCode?: string;
  fileInfo?: string;
  fileStoreType?: string;
  certificateType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      bizCode: 'BizCode',
      fileInfo: 'FileInfo',
      fileStoreType: 'FileStoreType',
      certificateType: 'CertificateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      bizCode: 'string',
      fileInfo: 'string',
      fileStoreType: 'string',
      certificateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificateQualityResponseBody extends $tea.Model {
  containSeal?: string;
  containWatermark?: string;
  requestId?: string;
  copy?: string;
  complete?: string;
  nationalEmblem?: string;
  targetType?: string;
  reflection?: string;
  electronic?: string;
  containFront?: string;
  textClarity?: string;
  static names(): { [key: string]: string } {
    return {
      containSeal: 'ContainSeal',
      containWatermark: 'ContainWatermark',
      requestId: 'RequestId',
      copy: 'Copy',
      complete: 'Complete',
      nationalEmblem: 'NationalEmblem',
      targetType: 'TargetType',
      reflection: 'Reflection',
      electronic: 'Electronic',
      containFront: 'ContainFront',
      textClarity: 'TextClarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containSeal: 'string',
      containWatermark: 'string',
      requestId: 'string',
      copy: 'string',
      complete: 'string',
      nationalEmblem: 'string',
      targetType: 'string',
      reflection: 'string',
      electronic: 'string',
      containFront: 'string',
      textClarity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificateQualityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CertificateQualityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CertificateQualityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgreementStatusRequest extends $tea.Model {
  agreementCode?: string;
  static names(): { [key: string]: string } {
    return {
      agreementCode: 'AgreementCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgreementStatusResponseBody extends $tea.Model {
  status?: number;
  requestId?: string;
  userId?: string;
  agreementCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      userId: 'UserId',
      agreementCode: 'AgreementCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      requestId: 'string',
      userId: 'string',
      agreementCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgreementStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAgreementStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAgreementStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IdentityCardOcrRequest extends $tea.Model {
  lang?: string;
  bizCode?: string;
  fileInfo?: string;
  fileStoreType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      bizCode: 'BizCode',
      fileInfo: 'FileInfo',
      fileStoreType: 'FileStoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      bizCode: 'string',
      fileInfo: 'string',
      fileStoreType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IdentityCardOcrResponseBody extends $tea.Model {
  issue?: string;
  validDate?: string;
  requestId?: string;
  address?: string;
  idNumber?: string;
  gender?: string;
  nationality?: string;
  birthDate?: string;
  trackId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      issue: 'Issue',
      validDate: 'ValidDate',
      requestId: 'RequestId',
      address: 'Address',
      idNumber: 'IdNumber',
      gender: 'Gender',
      nationality: 'Nationality',
      birthDate: 'BirthDate',
      trackId: 'TrackId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issue: 'string',
      validDate: 'string',
      requestId: 'string',
      address: 'string',
      idNumber: 'string',
      gender: 'string',
      nationality: 'string',
      birthDate: 'string',
      trackId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IdentityCardOcrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: IdentityCardOcrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: IdentityCardOcrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgreementStatusRequest extends $tea.Model {
  agreementCode?: string;
  static names(): { [key: string]: string } {
    return {
      agreementCode: 'AgreementCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgreementStatusResponseBody extends $tea.Model {
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

export class UpdateAgreementStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAgreementStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAgreementStatusResponseBody,
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

  async businessLicenseOcrWithOptions(request: BusinessLicenseOcrRequest, runtime: $Util.RuntimeOptions): Promise<BusinessLicenseOcrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BusinessLicenseOcrResponse>(await this.doRPCRequest("BusinessLicenseOcr", "2021-01-18", "HTTPS", "POST", "AK", "json", req, runtime), new BusinessLicenseOcrResponse({}));
  }

  async businessLicenseOcr(request: BusinessLicenseOcrRequest): Promise<BusinessLicenseOcrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.businessLicenseOcrWithOptions(request, runtime);
  }

  async certificateQualityWithOptions(request: CertificateQualityRequest, runtime: $Util.RuntimeOptions): Promise<CertificateQualityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CertificateQualityResponse>(await this.doRPCRequest("CertificateQuality", "2021-01-18", "HTTPS", "POST", "AK", "json", req, runtime), new CertificateQualityResponse({}));
  }

  async certificateQuality(request: CertificateQualityRequest): Promise<CertificateQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificateQualityWithOptions(request, runtime);
  }

  async describeAgreementStatusWithOptions(request: DescribeAgreementStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAgreementStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAgreementStatusResponse>(await this.doRPCRequest("DescribeAgreementStatus", "2021-01-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAgreementStatusResponse({}));
  }

  async describeAgreementStatus(request: DescribeAgreementStatusRequest): Promise<DescribeAgreementStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAgreementStatusWithOptions(request, runtime);
  }

  async identityCardOcrWithOptions(request: IdentityCardOcrRequest, runtime: $Util.RuntimeOptions): Promise<IdentityCardOcrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<IdentityCardOcrResponse>(await this.doRPCRequest("IdentityCardOcr", "2021-01-18", "HTTPS", "POST", "AK", "json", req, runtime), new IdentityCardOcrResponse({}));
  }

  async identityCardOcr(request: IdentityCardOcrRequest): Promise<IdentityCardOcrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.identityCardOcrWithOptions(request, runtime);
  }

  async updateAgreementStatusWithOptions(request: UpdateAgreementStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAgreementStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAgreementStatusResponse>(await this.doRPCRequest("UpdateAgreementStatus", "2021-01-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAgreementStatusResponse({}));
  }

  async updateAgreementStatus(request: UpdateAgreementStatusRequest): Promise<UpdateAgreementStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAgreementStatusWithOptions(request, runtime);
  }

}
