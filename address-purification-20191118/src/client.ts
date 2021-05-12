// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetAddressDivisionCodeRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class GetAddressDivisionCodeResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressDivisionCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAddressDivisionCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAddressDivisionCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StructureAddressRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class StructureAddressResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StructureAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StructureAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StructureAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractExpressRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class ExtractExpressResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractExpressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExtractExpressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExtractExpressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractNameRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class ExtractNameResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExtractNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExtractNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressBlockMappingRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class GetAddressBlockMappingResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressBlockMappingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAddressBlockMappingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAddressBlockMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressSearchRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class GetAddressSearchResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressSearchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAddressSearchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAddressSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictPOIRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class PredictPOIResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictPOIResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PredictPOIResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PredictPOIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyPOIRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class ClassifyPOIResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyPOIResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClassifyPOIResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClassifyPOIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorrectAddressRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class CorrectAddressResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorrectAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CorrectAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CorrectAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZipcodeRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class GetZipcodeResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZipcodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetZipcodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetZipcodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAddressRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class CompleteAddressResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CompleteAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CompleteAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressSimilarityRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class GetAddressSimilarityResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressSimilarityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAddressSimilarityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAddressSimilarityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressGeocodeRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class GetAddressGeocodeResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressGeocodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAddressGeocodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAddressGeocodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferCoordRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  srcCoord?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      text: 'Text',
      srcCoord: 'SrcCoord',
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
      srcCoord: 'string',
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

export class TransferCoordResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferCoordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransferCoordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransferCoordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  serviceCode?: string;
  parameters?: { [key: string]: any };
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
  serviceCode?: string;
  parametersShrink?: string;
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

export class UpdateProjectResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPhoneRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class ExtractPhoneResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractPhoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExtractPhoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExtractPhoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInputSearchRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class GetInputSearchResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInputSearchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInputSearchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInputSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressEvaluateRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class GetAddressEvaluateResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddressEvaluateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAddressEvaluateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAddressEvaluateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractAddressRequest extends $tea.Model {
  serviceCode?: string;
  text?: string;
  defaultProvince?: string;
  defaultCity?: string;
  defaultDistrict?: string;
  appKey?: string;
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

export class ExtractAddressResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExtractAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExtractAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("address-purification", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getAddressDivisionCodeWithOptions(request: GetAddressDivisionCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetAddressDivisionCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAddressDivisionCodeResponse>(await this.doRPCRequest("GetAddressDivisionCode", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetAddressDivisionCodeResponse({}));
  }

  async getAddressDivisionCode(request: GetAddressDivisionCodeRequest): Promise<GetAddressDivisionCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAddressDivisionCodeWithOptions(request, runtime);
  }

  async structureAddressWithOptions(request: StructureAddressRequest, runtime: $Util.RuntimeOptions): Promise<StructureAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StructureAddressResponse>(await this.doRPCRequest("StructureAddress", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new StructureAddressResponse({}));
  }

  async structureAddress(request: StructureAddressRequest): Promise<StructureAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.structureAddressWithOptions(request, runtime);
  }

  async extractExpressWithOptions(request: ExtractExpressRequest, runtime: $Util.RuntimeOptions): Promise<ExtractExpressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExtractExpressResponse>(await this.doRPCRequest("ExtractExpress", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new ExtractExpressResponse({}));
  }

  async extractExpress(request: ExtractExpressRequest): Promise<ExtractExpressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractExpressWithOptions(request, runtime);
  }

  async extractNameWithOptions(request: ExtractNameRequest, runtime: $Util.RuntimeOptions): Promise<ExtractNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExtractNameResponse>(await this.doRPCRequest("ExtractName", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new ExtractNameResponse({}));
  }

  async extractName(request: ExtractNameRequest): Promise<ExtractNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractNameWithOptions(request, runtime);
  }

  async getAddressBlockMappingWithOptions(request: GetAddressBlockMappingRequest, runtime: $Util.RuntimeOptions): Promise<GetAddressBlockMappingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAddressBlockMappingResponse>(await this.doRPCRequest("GetAddressBlockMapping", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetAddressBlockMappingResponse({}));
  }

  async getAddressBlockMapping(request: GetAddressBlockMappingRequest): Promise<GetAddressBlockMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAddressBlockMappingWithOptions(request, runtime);
  }

  async getAddressSearchWithOptions(request: GetAddressSearchRequest, runtime: $Util.RuntimeOptions): Promise<GetAddressSearchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAddressSearchResponse>(await this.doRPCRequest("GetAddressSearch", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetAddressSearchResponse({}));
  }

  async getAddressSearch(request: GetAddressSearchRequest): Promise<GetAddressSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAddressSearchWithOptions(request, runtime);
  }

  async predictPOIWithOptions(request: PredictPOIRequest, runtime: $Util.RuntimeOptions): Promise<PredictPOIResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PredictPOIResponse>(await this.doRPCRequest("PredictPOI", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new PredictPOIResponse({}));
  }

  async predictPOI(request: PredictPOIRequest): Promise<PredictPOIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predictPOIWithOptions(request, runtime);
  }

  async classifyPOIWithOptions(request: ClassifyPOIRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyPOIResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClassifyPOIResponse>(await this.doRPCRequest("ClassifyPOI", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new ClassifyPOIResponse({}));
  }

  async classifyPOI(request: ClassifyPOIRequest): Promise<ClassifyPOIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.classifyPOIWithOptions(request, runtime);
  }

  async correctAddressWithOptions(request: CorrectAddressRequest, runtime: $Util.RuntimeOptions): Promise<CorrectAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CorrectAddressResponse>(await this.doRPCRequest("CorrectAddress", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new CorrectAddressResponse({}));
  }

  async correctAddress(request: CorrectAddressRequest): Promise<CorrectAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.correctAddressWithOptions(request, runtime);
  }

  async getZipcodeWithOptions(request: GetZipcodeRequest, runtime: $Util.RuntimeOptions): Promise<GetZipcodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetZipcodeResponse>(await this.doRPCRequest("GetZipcode", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetZipcodeResponse({}));
  }

  async getZipcode(request: GetZipcodeRequest): Promise<GetZipcodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getZipcodeWithOptions(request, runtime);
  }

  async completeAddressWithOptions(request: CompleteAddressRequest, runtime: $Util.RuntimeOptions): Promise<CompleteAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CompleteAddressResponse>(await this.doRPCRequest("CompleteAddress", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new CompleteAddressResponse({}));
  }

  async completeAddress(request: CompleteAddressRequest): Promise<CompleteAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeAddressWithOptions(request, runtime);
  }

  async getAddressSimilarityWithOptions(request: GetAddressSimilarityRequest, runtime: $Util.RuntimeOptions): Promise<GetAddressSimilarityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAddressSimilarityResponse>(await this.doRPCRequest("GetAddressSimilarity", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetAddressSimilarityResponse({}));
  }

  async getAddressSimilarity(request: GetAddressSimilarityRequest): Promise<GetAddressSimilarityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAddressSimilarityWithOptions(request, runtime);
  }

  async getAddressGeocodeWithOptions(request: GetAddressGeocodeRequest, runtime: $Util.RuntimeOptions): Promise<GetAddressGeocodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAddressGeocodeResponse>(await this.doRPCRequest("GetAddressGeocode", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetAddressGeocodeResponse({}));
  }

  async getAddressGeocode(request: GetAddressGeocodeRequest): Promise<GetAddressGeocodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAddressGeocodeWithOptions(request, runtime);
  }

  async transferCoordWithOptions(request: TransferCoordRequest, runtime: $Util.RuntimeOptions): Promise<TransferCoordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransferCoordResponse>(await this.doRPCRequest("TransferCoord", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new TransferCoordResponse({}));
  }

  async transferCoord(request: TransferCoordRequest): Promise<TransferCoordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferCoordWithOptions(request, runtime);
  }

  async updateProjectWithOptions(tmpReq: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProjectResponse>(await this.doRPCRequest("UpdateProject", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProjectResponse({}));
  }

  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  async extractPhoneWithOptions(request: ExtractPhoneRequest, runtime: $Util.RuntimeOptions): Promise<ExtractPhoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExtractPhoneResponse>(await this.doRPCRequest("ExtractPhone", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new ExtractPhoneResponse({}));
  }

  async extractPhone(request: ExtractPhoneRequest): Promise<ExtractPhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractPhoneWithOptions(request, runtime);
  }

  async getInputSearchWithOptions(request: GetInputSearchRequest, runtime: $Util.RuntimeOptions): Promise<GetInputSearchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInputSearchResponse>(await this.doRPCRequest("GetInputSearch", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetInputSearchResponse({}));
  }

  async getInputSearch(request: GetInputSearchRequest): Promise<GetInputSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInputSearchWithOptions(request, runtime);
  }

  async getAddressEvaluateWithOptions(request: GetAddressEvaluateRequest, runtime: $Util.RuntimeOptions): Promise<GetAddressEvaluateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAddressEvaluateResponse>(await this.doRPCRequest("GetAddressEvaluate", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetAddressEvaluateResponse({}));
  }

  async getAddressEvaluate(request: GetAddressEvaluateRequest): Promise<GetAddressEvaluateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAddressEvaluateWithOptions(request, runtime);
  }

  async extractAddressWithOptions(request: ExtractAddressRequest, runtime: $Util.RuntimeOptions): Promise<ExtractAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExtractAddressResponse>(await this.doRPCRequest("ExtractAddress", "2019-11-18", "HTTPS", "POST", "AK", "json", req, runtime), new ExtractAddressResponse({}));
  }

  async extractAddress(request: ExtractAddressRequest): Promise<ExtractAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractAddressWithOptions(request, runtime);
  }

}
