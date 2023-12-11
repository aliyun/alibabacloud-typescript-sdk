// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
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
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdtCbServiceStatusResponseBody extends $tea.Model {
  enabled?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdtCbServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCdtCbServiceStatusResponseBody;
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
      body: GetCdtCbServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdtInternetServiceStatusResponseBody extends $tea.Model {
  enabled?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdtInternetServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCdtInternetServiceStatusResponseBody;
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
      body: GetCdtInternetServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdtServiceStatusResponseBody extends $tea.Model {
  enabled?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdtServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCdtServiceStatusResponseBody;
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
      body: GetCdtServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtCrossBordTrafficRequest extends $tea.Model {
  businessRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      businessRegionId: 'BusinessRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtCrossBordTrafficResponseBody extends $tea.Model {
  requestId?: string;
  trafficDetails?: ListCdtCrossBordTrafficResponseBodyTrafficDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficDetails: 'TrafficDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficDetails: { 'type': 'array', 'itemType': ListCdtCrossBordTrafficResponseBodyTrafficDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtCrossBordTrafficResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCdtCrossBordTrafficResponseBody;
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
      body: ListCdtCrossBordTrafficResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtInternetTrafficRequest extends $tea.Model {
  businessRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      businessRegionId: 'BusinessRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtInternetTrafficResponseBody extends $tea.Model {
  requestId?: string;
  trafficDetails?: ListCdtInternetTrafficResponseBodyTrafficDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficDetails: 'TrafficDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficDetails: { 'type': 'array', 'itemType': ListCdtInternetTrafficResponseBodyTrafficDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtInternetTrafficResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCdtInternetTrafficResponseBody;
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
      body: ListCdtInternetTrafficResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtProductsRequest extends $tea.Model {
  businessRegionId?: string;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      businessRegionId: 'BusinessRegionId',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessRegionId: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtProductsResponseBody extends $tea.Model {
  cdtProducts?: ListCdtProductsResponseBodyCdtProducts[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cdtProducts: 'CdtProducts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdtProducts: { 'type': 'array', 'itemType': ListCdtProductsResponseBodyCdtProducts },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtProductsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCdtProductsResponseBody;
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
      body: ListCdtProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtTrafficTiersRequest extends $tea.Model {
  businessRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      businessRegionId: 'BusinessRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtTrafficTiersResponseBody extends $tea.Model {
  requestId?: string;
  trafficTiers?: ListCdtTrafficTiersResponseBodyTrafficTiers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficTiers: 'TrafficTiers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficTiers: { 'type': 'array', 'itemType': ListCdtTrafficTiersResponseBodyTrafficTiers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtTrafficTiersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCdtTrafficTiersResponseBody;
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
      body: ListCdtTrafficTiersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwitchedCdtProductsRequest extends $tea.Model {
  businessRegionId?: string;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      businessRegionId: 'BusinessRegionId',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessRegionId: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwitchedCdtProductsResponseBody extends $tea.Model {
  cdtProducts?: ListSwitchedCdtProductsResponseBodyCdtProducts[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cdtProducts: 'CdtProducts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdtProducts: { 'type': 'array', 'itemType': ListSwitchedCdtProductsResponseBodyCdtProducts },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwitchedCdtProductsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSwitchedCdtProductsResponseBody;
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
      body: ListSwitchedCdtProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdtCbServiceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdtCbServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenCdtCbServiceResponseBody;
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
      body: OpenCdtCbServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdtInternetServiceResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdtInternetServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenCdtInternetServiceResponseBody;
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
      body: OpenCdtInternetServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdtServiceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdtServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenCdtServiceResponseBody;
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
      body: OpenCdtServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchToCdtRequest extends $tea.Model {
  billingType?: string;
  businessRegionId?: string;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      billingType: 'BillingType',
      businessRegionId: 'BusinessRegionId',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      businessRegionId: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchToCdtResponseBody extends $tea.Model {
  effectiveTime?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchToCdtResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SwitchToCdtResponseBody;
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
      body: SwitchToCdtResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtCrossBordTrafficResponseBodyTrafficDetailsProductTrafficDetails extends $tea.Model {
  product?: string;
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      traffic: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtCrossBordTrafficResponseBodyTrafficDetails extends $tea.Model {
  businessRegionId?: string;
  productTrafficDetails?: ListCdtCrossBordTrafficResponseBodyTrafficDetailsProductTrafficDetails[];
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      businessRegionId: 'BusinessRegionId',
      productTrafficDetails: 'ProductTrafficDetails',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessRegionId: 'string',
      productTrafficDetails: { 'type': 'array', 'itemType': ListCdtCrossBordTrafficResponseBodyTrafficDetailsProductTrafficDetails },
      traffic: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtInternetTrafficResponseBodyTrafficDetailsProductTrafficDetails extends $tea.Model {
  product?: string;
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      traffic: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtInternetTrafficResponseBodyTrafficDetailsTrafficTierDetails extends $tea.Model {
  highestTraffic?: number;
  lowestTraffic?: number;
  tier?: number;
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      highestTraffic: 'HighestTraffic',
      lowestTraffic: 'LowestTraffic',
      tier: 'Tier',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highestTraffic: 'number',
      lowestTraffic: 'number',
      tier: 'number',
      traffic: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtInternetTrafficResponseBodyTrafficDetails extends $tea.Model {
  businessRegionId?: string;
  ISPType?: string;
  productTrafficDetails?: ListCdtInternetTrafficResponseBodyTrafficDetailsProductTrafficDetails[];
  traffic?: number;
  trafficTierDetails?: ListCdtInternetTrafficResponseBodyTrafficDetailsTrafficTierDetails[];
  static names(): { [key: string]: string } {
    return {
      businessRegionId: 'BusinessRegionId',
      ISPType: 'ISPType',
      productTrafficDetails: 'ProductTrafficDetails',
      traffic: 'Traffic',
      trafficTierDetails: 'TrafficTierDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessRegionId: 'string',
      ISPType: 'string',
      productTrafficDetails: { 'type': 'array', 'itemType': ListCdtInternetTrafficResponseBodyTrafficDetailsProductTrafficDetails },
      traffic: 'number',
      trafficTierDetails: { 'type': 'array', 'itemType': ListCdtInternetTrafficResponseBodyTrafficDetailsTrafficTierDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtProductsResponseBodyCdtProducts extends $tea.Model {
  billingType?: string;
  businessRegionId?: string;
  cdtType?: string;
  effectiveTime?: number;
  expireTime?: number;
  product?: string;
  switchedToCdt?: boolean;
  static names(): { [key: string]: string } {
    return {
      billingType: 'BillingType',
      businessRegionId: 'BusinessRegionId',
      cdtType: 'CdtType',
      effectiveTime: 'EffectiveTime',
      expireTime: 'ExpireTime',
      product: 'Product',
      switchedToCdt: 'SwitchedToCdt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      businessRegionId: 'string',
      cdtType: 'string',
      effectiveTime: 'number',
      expireTime: 'number',
      product: 'string',
      switchedToCdt: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdtTrafficTiersResponseBodyTrafficTiers extends $tea.Model {
  highestTraffic?: number;
  lowestTraffic?: number;
  tier?: number;
  static names(): { [key: string]: string } {
    return {
      highestTraffic: 'HighestTraffic',
      lowestTraffic: 'LowestTraffic',
      tier: 'Tier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highestTraffic: 'number',
      lowestTraffic: 'number',
      tier: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwitchedCdtProductsResponseBodyCdtProducts extends $tea.Model {
  billingType?: string;
  businessRegionId?: string;
  cdtType?: string;
  effectiveTime?: number;
  expireTime?: number;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      billingType: 'BillingType',
      businessRegionId: 'BusinessRegionId',
      cdtType: 'CdtType',
      effectiveTime: 'EffectiveTime',
      expireTime: 'ExpireTime',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      businessRegionId: 'string',
      cdtType: 'string',
      effectiveTime: 'number',
      expireTime: 'number',
      product: 'string',
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
    this._endpoint = this.getEndpoint("cdt", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2021-08-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async getCdtCbServiceStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<GetCdtCbServiceStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetCdtCbServiceStatus",
      version: "2021-08-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCdtCbServiceStatusResponse>(await this.callApi(params, req, runtime), new GetCdtCbServiceStatusResponse({}));
  }

  async getCdtCbServiceStatus(): Promise<GetCdtCbServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCdtCbServiceStatusWithOptions(runtime);
  }

  async getCdtInternetServiceStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<GetCdtInternetServiceStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetCdtInternetServiceStatus",
      version: "2021-08-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCdtInternetServiceStatusResponse>(await this.callApi(params, req, runtime), new GetCdtInternetServiceStatusResponse({}));
  }

  async getCdtInternetServiceStatus(): Promise<GetCdtInternetServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCdtInternetServiceStatusWithOptions(runtime);
  }

  async getCdtServiceStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<GetCdtServiceStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetCdtServiceStatus",
      version: "2021-08-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCdtServiceStatusResponse>(await this.callApi(params, req, runtime), new GetCdtServiceStatusResponse({}));
  }

  async getCdtServiceStatus(): Promise<GetCdtServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCdtServiceStatusWithOptions(runtime);
  }

  async listCdtCrossBordTrafficWithOptions(request: ListCdtCrossBordTrafficRequest, runtime: $Util.RuntimeOptions): Promise<ListCdtCrossBordTrafficResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessRegionId)) {
      query["BusinessRegionId"] = request.businessRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCdtCrossBordTraffic",
      version: "2021-08-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCdtCrossBordTrafficResponse>(await this.callApi(params, req, runtime), new ListCdtCrossBordTrafficResponse({}));
  }

  async listCdtCrossBordTraffic(request: ListCdtCrossBordTrafficRequest): Promise<ListCdtCrossBordTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCdtCrossBordTrafficWithOptions(request, runtime);
  }

  async listCdtInternetTrafficWithOptions(request: ListCdtInternetTrafficRequest, runtime: $Util.RuntimeOptions): Promise<ListCdtInternetTrafficResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessRegionId)) {
      query["BusinessRegionId"] = request.businessRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCdtInternetTraffic",
      version: "2021-08-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCdtInternetTrafficResponse>(await this.callApi(params, req, runtime), new ListCdtInternetTrafficResponse({}));
  }

  async listCdtInternetTraffic(request: ListCdtInternetTrafficRequest): Promise<ListCdtInternetTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCdtInternetTrafficWithOptions(request, runtime);
  }

  async listCdtProductsWithOptions(request: ListCdtProductsRequest, runtime: $Util.RuntimeOptions): Promise<ListCdtProductsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessRegionId)) {
      query["BusinessRegionId"] = request.businessRegionId;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCdtProducts",
      version: "2021-08-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCdtProductsResponse>(await this.callApi(params, req, runtime), new ListCdtProductsResponse({}));
  }

  async listCdtProducts(request: ListCdtProductsRequest): Promise<ListCdtProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCdtProductsWithOptions(request, runtime);
  }

  async listCdtTrafficTiersWithOptions(request: ListCdtTrafficTiersRequest, runtime: $Util.RuntimeOptions): Promise<ListCdtTrafficTiersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessRegionId)) {
      query["BusinessRegionId"] = request.businessRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCdtTrafficTiers",
      version: "2021-08-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCdtTrafficTiersResponse>(await this.callApi(params, req, runtime), new ListCdtTrafficTiersResponse({}));
  }

  async listCdtTrafficTiers(request: ListCdtTrafficTiersRequest): Promise<ListCdtTrafficTiersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCdtTrafficTiersWithOptions(request, runtime);
  }

  async listSwitchedCdtProductsWithOptions(request: ListSwitchedCdtProductsRequest, runtime: $Util.RuntimeOptions): Promise<ListSwitchedCdtProductsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessRegionId)) {
      query["BusinessRegionId"] = request.businessRegionId;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSwitchedCdtProducts",
      version: "2021-08-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSwitchedCdtProductsResponse>(await this.callApi(params, req, runtime), new ListSwitchedCdtProductsResponse({}));
  }

  async listSwitchedCdtProducts(request: ListSwitchedCdtProductsRequest): Promise<ListSwitchedCdtProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSwitchedCdtProductsWithOptions(request, runtime);
  }

  async openCdtCbServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenCdtCbServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OpenCdtCbService",
      version: "2021-08-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenCdtCbServiceResponse>(await this.callApi(params, req, runtime), new OpenCdtCbServiceResponse({}));
  }

  async openCdtCbService(): Promise<OpenCdtCbServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openCdtCbServiceWithOptions(runtime);
  }

  async openCdtInternetServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenCdtInternetServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OpenCdtInternetService",
      version: "2021-08-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenCdtInternetServiceResponse>(await this.callApi(params, req, runtime), new OpenCdtInternetServiceResponse({}));
  }

  async openCdtInternetService(): Promise<OpenCdtInternetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openCdtInternetServiceWithOptions(runtime);
  }

  async openCdtServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenCdtServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OpenCdtService",
      version: "2021-08-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenCdtServiceResponse>(await this.callApi(params, req, runtime), new OpenCdtServiceResponse({}));
  }

  async openCdtService(): Promise<OpenCdtServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openCdtServiceWithOptions(runtime);
  }

  async switchToCdtWithOptions(request: SwitchToCdtRequest, runtime: $Util.RuntimeOptions): Promise<SwitchToCdtResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billingType)) {
      query["BillingType"] = request.billingType;
    }

    if (!Util.isUnset(request.businessRegionId)) {
      query["BusinessRegionId"] = request.businessRegionId;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchToCdt",
      version: "2021-08-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchToCdtResponse>(await this.callApi(params, req, runtime), new SwitchToCdtResponse({}));
  }

  async switchToCdt(request: SwitchToCdtRequest): Promise<SwitchToCdtResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchToCdtWithOptions(request, runtime);
  }

}
