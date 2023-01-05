// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetAgeDistributionRequest extends $tea.Model {
  cateIds?: string;
  endingDate?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      cateIds: 'CateIds',
      endingDate: 'EndingDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateIds: 'string',
      endingDate: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgeDistributionResponseBody extends $tea.Model {
  code?: string;
  data?: GetAgeDistributionResponseBodyData[];
  message?: string;
  requestId?: string;
  successResponse?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAgeDistributionResponseBodyData },
      message: 'string',
      requestId: 'string',
      successResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgeDistributionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAgeDistributionResponseBody;
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
      body: GetAgeDistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllTrendCategoryResponseBody extends $tea.Model {
  code?: string;
  data?: GetAllTrendCategoryResponseBodyData[];
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAllTrendCategoryResponseBodyData },
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllTrendCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAllTrendCategoryResponseBody;
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
      body: GetAllTrendCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdDataRequest extends $tea.Model {
  cateIds?: string;
  endingDate?: string;
  pageIndex?: number;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      cateIds: 'CateIds',
      endingDate: 'EndingDate',
      pageIndex: 'PageIndex',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateIds: 'string',
      endingDate: 'string',
      pageIndex: 'number',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdDataResponseBody extends $tea.Model {
  code?: string;
  data?: GetCrowdDataResponseBodyData[];
  message?: string;
  requestId?: string;
  successResponse?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetCrowdDataResponseBodyData },
      message: 'string',
      requestId: 'string',
      successResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCrowdDataResponseBody;
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
      body: GetCrowdDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdLabelRequest extends $tea.Model {
  cateIds?: string;
  endingDate?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      cateIds: 'CateIds',
      endingDate: 'EndingDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateIds: 'string',
      endingDate: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdLabelResponseBody extends $tea.Model {
  code?: string;
  data?: GetCrowdLabelResponseBodyData[];
  message?: string;
  requestId?: string;
  successResponse?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetCrowdLabelResponseBodyData },
      message: 'string',
      requestId: 'string',
      successResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdLabelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCrowdLabelResponseBody;
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
      body: GetCrowdLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdReginRequest extends $tea.Model {
  cateIds?: string;
  endingDate?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      cateIds: 'CateIds',
      endingDate: 'EndingDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateIds: 'string',
      endingDate: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdReginResponseBody extends $tea.Model {
  code?: string;
  data?: GetCrowdReginResponseBodyData;
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCrowdReginResponseBodyData,
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdReginResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCrowdReginResponseBody;
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
      body: GetCrowdReginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpportunityMarketRequest extends $tea.Model {
  cateIds?: string;
  timeDisplay?: number;
  static names(): { [key: string]: string } {
    return {
      cateIds: 'CateIds',
      timeDisplay: 'TimeDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateIds: 'string',
      timeDisplay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpportunityMarketResponseBody extends $tea.Model {
  code?: string;
  data?: GetOpportunityMarketResponseBodyData[];
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOpportunityMarketResponseBodyData },
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpportunityMarketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOpportunityMarketResponseBody;
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
      body: GetOpportunityMarketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceRangeRequest extends $tea.Model {
  brandNames?: string;
  cateIds?: string;
  endingDate?: string;
  section?: number;
  shopIds?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      brandNames: 'BrandNames',
      cateIds: 'CateIds',
      endingDate: 'EndingDate',
      section: 'Section',
      shopIds: 'ShopIds',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandNames: 'string',
      cateIds: 'string',
      endingDate: 'string',
      section: 'number',
      shopIds: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceRangeResponseBody extends $tea.Model {
  code?: string;
  data?: GetPriceRangeResponseBodyData[];
  message?: string;
  requestId?: string;
  successResponse?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetPriceRangeResponseBodyData },
      message: 'string',
      requestId: 'string',
      successResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceRangeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPriceRangeResponseBody;
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
      body: GetPriceRangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSexRatioRequest extends $tea.Model {
  cateIds?: string;
  endingDate?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      cateIds: 'CateIds',
      endingDate: 'EndingDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateIds: 'string',
      endingDate: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSexRatioResponseBody extends $tea.Model {
  code?: string;
  data?: GetSexRatioResponseBodyData;
  message?: string;
  requestId?: string;
  successResponse?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSexRatioResponseBodyData,
      message: 'string',
      requestId: 'string',
      successResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSexRatioResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSexRatioResponseBody;
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
      body: GetSexRatioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoreSalesVolumeTopRequest extends $tea.Model {
  brandNames?: string;
  cateIds?: string;
  endingDate?: string;
  endingPrice?: string;
  endingSalesVolume?: string;
  pageIndex?: number;
  shopIds?: string;
  startDate?: string;
  startPrice?: string;
  startSalesVolume?: string;
  static names(): { [key: string]: string } {
    return {
      brandNames: 'BrandNames',
      cateIds: 'CateIds',
      endingDate: 'EndingDate',
      endingPrice: 'EndingPrice',
      endingSalesVolume: 'EndingSalesVolume',
      pageIndex: 'PageIndex',
      shopIds: 'ShopIds',
      startDate: 'StartDate',
      startPrice: 'StartPrice',
      startSalesVolume: 'StartSalesVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandNames: 'string',
      cateIds: 'string',
      endingDate: 'string',
      endingPrice: 'string',
      endingSalesVolume: 'string',
      pageIndex: 'number',
      shopIds: 'string',
      startDate: 'string',
      startPrice: 'string',
      startSalesVolume: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoreSalesVolumeTopResponseBody extends $tea.Model {
  code?: string;
  data?: GetStoreSalesVolumeTopResponseBodyData[];
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetStoreSalesVolumeTopResponseBodyData },
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoreSalesVolumeTopResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStoreSalesVolumeTopResponseBody;
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
      body: GetStoreSalesVolumeTopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoreSearchTopRequest extends $tea.Model {
  brandNames?: string;
  cateIds?: string;
  endingDate?: string;
  endingPrice?: string;
  endingSalesVolume?: string;
  pageIndex?: number;
  shopIds?: string;
  startDate?: string;
  startPrice?: string;
  startSalesVolume?: string;
  static names(): { [key: string]: string } {
    return {
      brandNames: 'BrandNames',
      cateIds: 'CateIds',
      endingDate: 'EndingDate',
      endingPrice: 'EndingPrice',
      endingSalesVolume: 'EndingSalesVolume',
      pageIndex: 'PageIndex',
      shopIds: 'ShopIds',
      startDate: 'StartDate',
      startPrice: 'StartPrice',
      startSalesVolume: 'StartSalesVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandNames: 'string',
      cateIds: 'string',
      endingDate: 'string',
      endingPrice: 'string',
      endingSalesVolume: 'string',
      pageIndex: 'number',
      shopIds: 'string',
      startDate: 'string',
      startPrice: 'string',
      startSalesVolume: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoreSearchTopResponseBody extends $tea.Model {
  code?: string;
  data?: GetStoreSearchTopResponseBodyData[];
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetStoreSearchTopResponseBodyData },
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoreSearchTopResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStoreSearchTopResponseBody;
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
      body: GetStoreSearchTopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStyleOnlineRequest extends $tea.Model {
  brandNames?: string;
  cateIds?: string;
  endingDate?: string;
  pageIndex?: number;
  shopIds?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      brandNames: 'BrandNames',
      cateIds: 'CateIds',
      endingDate: 'EndingDate',
      pageIndex: 'PageIndex',
      shopIds: 'ShopIds',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandNames: 'string',
      cateIds: 'string',
      endingDate: 'string',
      pageIndex: 'number',
      shopIds: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStyleOnlineResponseBody extends $tea.Model {
  code?: string;
  data?: GetStyleOnlineResponseBodyData[];
  message?: string;
  requestId?: string;
  successResponse?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetStyleOnlineResponseBodyData },
      message: 'string',
      requestId: 'string',
      successResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStyleOnlineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStyleOnlineResponseBody;
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
      body: GetStyleOnlineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStyleTopRequest extends $tea.Model {
  brandNames?: string;
  cateIds?: string;
  endingDate?: string;
  endingPrice?: string;
  pageIndex?: number;
  shopIds?: string;
  sortOrder?: number;
  startDate?: string;
  startPrice?: string;
  timeDisplay?: number;
  static names(): { [key: string]: string } {
    return {
      brandNames: 'BrandNames',
      cateIds: 'CateIds',
      endingDate: 'EndingDate',
      endingPrice: 'EndingPrice',
      pageIndex: 'PageIndex',
      shopIds: 'ShopIds',
      sortOrder: 'SortOrder',
      startDate: 'StartDate',
      startPrice: 'StartPrice',
      timeDisplay: 'TimeDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandNames: 'string',
      cateIds: 'string',
      endingDate: 'string',
      endingPrice: 'string',
      pageIndex: 'number',
      shopIds: 'string',
      sortOrder: 'number',
      startDate: 'string',
      startPrice: 'string',
      timeDisplay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStyleTopResponseBody extends $tea.Model {
  code?: string;
  data?: GetStyleTopResponseBodyData[];
  message?: string;
  requestId?: string;
  successResponse?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetStyleTopResponseBodyData },
      message: 'string',
      requestId: 'string',
      successResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStyleTopResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStyleTopResponseBody;
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
      body: GetStyleTopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendImageDetailRequest extends $tea.Model {
  aiImgId?: string;
  static names(): { [key: string]: string } {
    return {
      aiImgId: 'AiImgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiImgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendImageDetailResponseBody extends $tea.Model {
  code?: string;
  data?: GetTrendImageDetailResponseBodyData;
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTrendImageDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendImageDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTrendImageDetailResponseBody;
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
      body: GetTrendImageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendImageListRequest extends $tea.Model {
  cateIds?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      cateIds: 'CateIds',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateIds: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendImageListResponseBody extends $tea.Model {
  code?: string;
  data?: GetTrendImageListResponseBodyData[];
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetTrendImageListResponseBodyData },
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendImageListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTrendImageListResponseBody;
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
      body: GetTrendImageListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendIndexRequest extends $tea.Model {
  cateIds?: string;
  monthNum?: number;
  static names(): { [key: string]: string } {
    return {
      cateIds: 'CateIds',
      monthNum: 'MonthNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateIds: 'string',
      monthNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendIndexResponseBody extends $tea.Model {
  code?: string;
  data?: GetTrendIndexResponseBodyData[];
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetTrendIndexResponseBodyData },
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendIndexResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTrendIndexResponseBody;
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
      body: GetTrendIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendSearchRecordRequest extends $tea.Model {
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendSearchRecordResponseBody extends $tea.Model {
  code?: string;
  data?: GetTrendSearchRecordResponseBodyData[];
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetTrendSearchRecordResponseBodyData },
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendSearchRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTrendSearchRecordResponseBody;
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
      body: GetTrendSearchRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendStatisticRequest extends $tea.Model {
  brandNames?: string;
  cateIds?: string;
  endingDate?: string;
  shopIds?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      brandNames: 'BrandNames',
      cateIds: 'CateIds',
      endingDate: 'EndingDate',
      shopIds: 'ShopIds',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandNames: 'string',
      cateIds: 'string',
      endingDate: 'string',
      shopIds: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendStatisticResponseBody extends $tea.Model {
  code?: string;
  data?: GetTrendStatisticResponseBodyData;
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTrendStatisticResponseBodyData,
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendStatisticResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTrendStatisticResponseBody;
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
      body: GetTrendStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendWordAndIndexRequest extends $tea.Model {
  cateIds?: string;
  endingDate?: string;
  pageIndex?: number;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      cateIds: 'CateIds',
      endingDate: 'EndingDate',
      pageIndex: 'PageIndex',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateIds: 'string',
      endingDate: 'string',
      pageIndex: 'number',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendWordAndIndexResponseBody extends $tea.Model {
  code?: string;
  data?: GetTrendWordAndIndexResponseBodyData[];
  massage?: string;
  requestId?: string;
  successResponse?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      massage: 'Massage',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetTrendWordAndIndexResponseBodyData },
      massage: 'string',
      requestId: 'string',
      successResponse: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendWordAndIndexResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTrendWordAndIndexResponseBody;
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
      body: GetTrendWordAndIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgeDistributionResponseBodyData extends $tea.Model {
  ageRange?: string;
  saleNumbers?: number;
  searchNumbers?: number;
  static names(): { [key: string]: string } {
    return {
      ageRange: 'AgeRange',
      saleNumbers: 'SaleNumbers',
      searchNumbers: 'SearchNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageRange: 'string',
      saleNumbers: 'number',
      searchNumbers: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllTrendCategoryResponseBodyData extends $tea.Model {
  categoryId?: number;
  categoryLevel?: number;
  categoryName?: string;
  childCategory?: any[];
  superCategoryName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryLevel: 'CategoryLevel',
      categoryName: 'CategoryName',
      childCategory: 'ChildCategory',
      superCategoryName: 'SuperCategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      categoryLevel: 'number',
      categoryName: 'string',
      childCategory: { 'type': 'array', 'itemType': 'any' },
      superCategoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdDataResponseBodyData extends $tea.Model {
  age?: number;
  buyerId?: number;
  cateId?: number;
  cateName?: string;
  classification?: string;
  classificationNew?: string;
  gender?: string;
  onlineDate?: string;
  orderAmount?: number;
  orderQuantity?: number;
  province?: string;
  searchVolume?: number;
  trendLevel?: string;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      buyerId: 'BuyerId',
      cateId: 'CateId',
      cateName: 'CateName',
      classification: 'Classification',
      classificationNew: 'ClassificationNew',
      gender: 'Gender',
      onlineDate: 'OnlineDate',
      orderAmount: 'OrderAmount',
      orderQuantity: 'OrderQuantity',
      province: 'Province',
      searchVolume: 'SearchVolume',
      trendLevel: 'TrendLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'number',
      buyerId: 'number',
      cateId: 'number',
      cateName: 'string',
      classification: 'string',
      classificationNew: 'string',
      gender: 'string',
      onlineDate: 'string',
      orderAmount: 'number',
      orderQuantity: 'number',
      province: 'string',
      searchVolume: 'number',
      trendLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdLabelResponseBodyData extends $tea.Model {
  closingDate?: string;
  labelName?: string;
  orderAmount?: number;
  purchaseAmount?: number;
  searchVolume?: number;
  static names(): { [key: string]: string } {
    return {
      closingDate: 'ClosingDate',
      labelName: 'LabelName',
      orderAmount: 'OrderAmount',
      purchaseAmount: 'PurchaseAmount',
      searchVolume: 'SearchVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closingDate: 'string',
      labelName: 'string',
      orderAmount: 'number',
      purchaseAmount: 'number',
      searchVolume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdReginResponseBodyDataSaleNumbers extends $tea.Model {
  name?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdReginResponseBodyDataSearchNumbers extends $tea.Model {
  name?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdReginResponseBodyData extends $tea.Model {
  saleNumbers?: GetCrowdReginResponseBodyDataSaleNumbers[];
  searchNumbers?: GetCrowdReginResponseBodyDataSearchNumbers[];
  static names(): { [key: string]: string } {
    return {
      saleNumbers: 'SaleNumbers',
      searchNumbers: 'SearchNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saleNumbers: { 'type': 'array', 'itemType': GetCrowdReginResponseBodyDataSaleNumbers },
      searchNumbers: { 'type': 'array', 'itemType': GetCrowdReginResponseBodyDataSearchNumbers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpportunityMarketResponseBodyData extends $tea.Model {
  cateName?: string;
  opportunityIndex?: number;
  relativeCommodity?: number;
  relativeDischarge?: number;
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      cateName: 'CateName',
      opportunityIndex: 'OpportunityIndex',
      relativeCommodity: 'RelativeCommodity',
      relativeDischarge: 'RelativeDischarge',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateName: 'string',
      opportunityIndex: 'number',
      relativeCommodity: 'number',
      relativeDischarge: 'number',
      timeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceRangeResponseBodyData extends $tea.Model {
  closingDate?: string;
  goodsSales?: number;
  priceRange?: string;
  salesVolume?: number;
  static names(): { [key: string]: string } {
    return {
      closingDate: 'ClosingDate',
      goodsSales: 'GoodsSales',
      priceRange: 'PriceRange',
      salesVolume: 'SalesVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closingDate: 'string',
      goodsSales: 'number',
      priceRange: 'string',
      salesVolume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSexRatioResponseBodyDataSaleNumbers extends $tea.Model {
  name?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSexRatioResponseBodyDataSearchNumbers extends $tea.Model {
  name?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSexRatioResponseBodyData extends $tea.Model {
  saleNumbers?: GetSexRatioResponseBodyDataSaleNumbers[];
  searchNumbers?: GetSexRatioResponseBodyDataSearchNumbers[];
  static names(): { [key: string]: string } {
    return {
      saleNumbers: 'SaleNumbers',
      searchNumbers: 'SearchNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saleNumbers: { 'type': 'array', 'itemType': GetSexRatioResponseBodyDataSaleNumbers },
      searchNumbers: { 'type': 'array', 'itemType': GetSexRatioResponseBodyDataSearchNumbers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoreSalesVolumeTopResponseBodyData extends $tea.Model {
  commodityQuantity?: number;
  salesVolume?: number;
  searchVolume?: number;
  shopId?: number;
  shopName?: string;
  totalSales?: number;
  static names(): { [key: string]: string } {
    return {
      commodityQuantity: 'CommodityQuantity',
      salesVolume: 'SalesVolume',
      searchVolume: 'SearchVolume',
      shopId: 'ShopId',
      shopName: 'ShopName',
      totalSales: 'TotalSales',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityQuantity: 'number',
      salesVolume: 'number',
      searchVolume: 'number',
      shopId: 'number',
      shopName: 'string',
      totalSales: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoreSearchTopResponseBodyData extends $tea.Model {
  commodityQuantity?: number;
  salesVolume?: number;
  searchVolume?: number;
  shopId?: number;
  shopName?: string;
  totalSales?: number;
  static names(): { [key: string]: string } {
    return {
      commodityQuantity: 'CommodityQuantity',
      salesVolume: 'SalesVolume',
      searchVolume: 'SearchVolume',
      shopId: 'ShopId',
      shopName: 'ShopName',
      totalSales: 'TotalSales',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityQuantity: 'number',
      salesVolume: 'number',
      searchVolume: 'number',
      shopId: 'number',
      shopName: 'string',
      totalSales: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStyleOnlineResponseBodyData extends $tea.Model {
  attributeContent?: string;
  brandName?: string;
  buyerTags?: string;
  cateName?: string;
  color?: string;
  exposureValue?: number;
  images?: string[];
  material?: string;
  price?: number;
  productLink?: string;
  sales?: number;
  salesVolume?: number;
  searchVolume?: number;
  shopId?: number;
  shopName?: string;
  style?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      attributeContent: 'AttributeContent',
      brandName: 'BrandName',
      buyerTags: 'BuyerTags',
      cateName: 'CateName',
      color: 'Color',
      exposureValue: 'ExposureValue',
      images: 'Images',
      material: 'Material',
      price: 'Price',
      productLink: 'ProductLink',
      sales: 'Sales',
      salesVolume: 'SalesVolume',
      searchVolume: 'SearchVolume',
      shopId: 'ShopId',
      shopName: 'ShopName',
      style: 'Style',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeContent: 'string',
      brandName: 'string',
      buyerTags: 'string',
      cateName: 'string',
      color: 'string',
      exposureValue: 'number',
      images: { 'type': 'array', 'itemType': 'string' },
      material: 'string',
      price: 'number',
      productLink: 'string',
      sales: 'number',
      salesVolume: 'number',
      searchVolume: 'number',
      shopId: 'number',
      shopName: 'string',
      style: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStyleTopResponseBodyData extends $tea.Model {
  attributeContent?: string;
  brandName?: string;
  buyerTags?: string;
  cateName?: string;
  color?: string;
  exposureValue?: number;
  images?: string[];
  material?: string;
  price?: number;
  productLink?: string;
  sales?: number;
  salesVolume?: number;
  searchVolume?: number;
  shopId?: number;
  shopName?: string;
  style?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      attributeContent: 'AttributeContent',
      brandName: 'BrandName',
      buyerTags: 'BuyerTags',
      cateName: 'CateName',
      color: 'Color',
      exposureValue: 'ExposureValue',
      images: 'Images',
      material: 'Material',
      price: 'Price',
      productLink: 'ProductLink',
      sales: 'Sales',
      salesVolume: 'SalesVolume',
      searchVolume: 'SearchVolume',
      shopId: 'ShopId',
      shopName: 'ShopName',
      style: 'Style',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeContent: 'string',
      brandName: 'string',
      buyerTags: 'string',
      cateName: 'string',
      color: 'string',
      exposureValue: 'number',
      images: { 'type': 'array', 'itemType': 'string' },
      material: 'string',
      price: 'number',
      productLink: 'string',
      sales: 'number',
      salesVolume: 'number',
      searchVolume: 'number',
      shopId: 'number',
      shopName: 'string',
      style: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendImageDetailResponseBodyDataSimilarGoods extends $tea.Model {
  aiImgUrl?: string;
  goodsSales?: number;
  searchVolume?: number;
  static names(): { [key: string]: string } {
    return {
      aiImgUrl: 'AiImgUrl',
      goodsSales: 'GoodsSales',
      searchVolume: 'SearchVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiImgUrl: 'string',
      goodsSales: 'number',
      searchVolume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendImageDetailResponseBodyData extends $tea.Model {
  aiImgId?: string;
  aiImgUrl?: string;
  multiPictUrl?: string;
  population?: string;
  priceMax?: number;
  priceMin?: number;
  similarGoods?: GetTrendImageDetailResponseBodyDataSimilarGoods[];
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      aiImgId: 'AiImgId',
      aiImgUrl: 'AiImgUrl',
      multiPictUrl: 'MultiPictUrl',
      population: 'Population',
      priceMax: 'PriceMax',
      priceMin: 'PriceMin',
      similarGoods: 'SimilarGoods',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiImgId: 'string',
      aiImgUrl: 'string',
      multiPictUrl: 'string',
      population: 'string',
      priceMax: 'number',
      priceMin: 'number',
      similarGoods: { 'type': 'array', 'itemType': GetTrendImageDetailResponseBodyDataSimilarGoods },
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendImageListResponseBodyData extends $tea.Model {
  aiImgId?: string;
  aiImgUrl?: string;
  population?: string;
  priceMax?: number;
  priceMin?: number;
  static names(): { [key: string]: string } {
    return {
      aiImgId: 'AiImgId',
      aiImgUrl: 'AiImgUrl',
      population: 'Population',
      priceMax: 'PriceMax',
      priceMin: 'PriceMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiImgId: 'string',
      aiImgUrl: 'string',
      population: 'string',
      priceMax: 'number',
      priceMin: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendIndexResponseBodyData extends $tea.Model {
  brandIndex?: number;
  ECommerceIndex?: number;
  institutionalIndex?: number;
  mediaIndex?: number;
  socialIndex?: number;
  trendIndex?: number;
  yearMonth?: string;
  static names(): { [key: string]: string } {
    return {
      brandIndex: 'BrandIndex',
      ECommerceIndex: 'ECommerceIndex',
      institutionalIndex: 'InstitutionalIndex',
      mediaIndex: 'MediaIndex',
      socialIndex: 'SocialIndex',
      trendIndex: 'TrendIndex',
      yearMonth: 'YearMonth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandIndex: 'number',
      ECommerceIndex: 'number',
      institutionalIndex: 'number',
      mediaIndex: 'number',
      socialIndex: 'number',
      trendIndex: 'number',
      yearMonth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendSearchRecordResponseBodyData extends $tea.Model {
  id?: number;
  queryKey?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      queryKey: 'QueryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      queryKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendStatisticResponseBodyData extends $tea.Model {
  brandCount?: number;
  commodityCount?: number;
  exposureValue?: number;
  hits?: number;
  sales?: number;
  salesVolume?: number;
  shopCount?: number;
  static names(): { [key: string]: string } {
    return {
      brandCount: 'BrandCount',
      commodityCount: 'CommodityCount',
      exposureValue: 'ExposureValue',
      hits: 'Hits',
      sales: 'Sales',
      salesVolume: 'SalesVolume',
      shopCount: 'ShopCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandCount: 'number',
      commodityCount: 'number',
      exposureValue: 'number',
      hits: 'number',
      sales: 'number',
      salesVolume: 'number',
      shopCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendWordAndIndexResponseBodyData extends $tea.Model {
  brandIndex?: number;
  cateId?: number;
  cateName?: string;
  ecommerceIndex?: number;
  institutionalIndex?: number;
  mediaIndex?: number;
  socialIndex?: number;
  trendIndex?: number;
  trendWord?: string;
  yearMonth?: string;
  static names(): { [key: string]: string } {
    return {
      brandIndex: 'BrandIndex',
      cateId: 'CateId',
      cateName: 'CateName',
      ecommerceIndex: 'EcommerceIndex',
      institutionalIndex: 'InstitutionalIndex',
      mediaIndex: 'MediaIndex',
      socialIndex: 'SocialIndex',
      trendIndex: 'TrendIndex',
      trendWord: 'TrendWord',
      yearMonth: 'YearMonth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandIndex: 'number',
      cateId: 'number',
      cateName: 'string',
      ecommerceIndex: 'number',
      institutionalIndex: 'number',
      mediaIndex: 'number',
      socialIndex: 'number',
      trendIndex: 'number',
      trendWord: 'string',
      yearMonth: 'string',
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
    this._endpoint = this.getEndpoint("qssj", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getAgeDistributionWithOptions(request: GetAgeDistributionRequest, runtime: $Util.RuntimeOptions): Promise<GetAgeDistributionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cateIds)) {
      query["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.endingDate)) {
      query["EndingDate"] = request.endingDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAgeDistribution",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAgeDistributionResponse>(await this.callApi(params, req, runtime), new GetAgeDistributionResponse({}));
  }

  async getAgeDistribution(request: GetAgeDistributionRequest): Promise<GetAgeDistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgeDistributionWithOptions(request, runtime);
  }

  async getAllTrendCategoryWithOptions(runtime: $Util.RuntimeOptions): Promise<GetAllTrendCategoryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetAllTrendCategory",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAllTrendCategoryResponse>(await this.callApi(params, req, runtime), new GetAllTrendCategoryResponse({}));
  }

  async getAllTrendCategory(): Promise<GetAllTrendCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllTrendCategoryWithOptions(runtime);
  }

  async getCrowdDataWithOptions(request: GetCrowdDataRequest, runtime: $Util.RuntimeOptions): Promise<GetCrowdDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cateIds)) {
      body["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.endingDate)) {
      body["EndingDate"] = request.endingDate;
    }

    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCrowdData",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCrowdDataResponse>(await this.callApi(params, req, runtime), new GetCrowdDataResponse({}));
  }

  async getCrowdData(request: GetCrowdDataRequest): Promise<GetCrowdDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCrowdDataWithOptions(request, runtime);
  }

  async getCrowdLabelWithOptions(request: GetCrowdLabelRequest, runtime: $Util.RuntimeOptions): Promise<GetCrowdLabelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cateIds)) {
      body["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.endingDate)) {
      body["EndingDate"] = request.endingDate;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCrowdLabel",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCrowdLabelResponse>(await this.callApi(params, req, runtime), new GetCrowdLabelResponse({}));
  }

  async getCrowdLabel(request: GetCrowdLabelRequest): Promise<GetCrowdLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCrowdLabelWithOptions(request, runtime);
  }

  async getCrowdReginWithOptions(request: GetCrowdReginRequest, runtime: $Util.RuntimeOptions): Promise<GetCrowdReginResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cateIds)) {
      query["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.endingDate)) {
      query["EndingDate"] = request.endingDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCrowdRegin",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCrowdReginResponse>(await this.callApi(params, req, runtime), new GetCrowdReginResponse({}));
  }

  async getCrowdRegin(request: GetCrowdReginRequest): Promise<GetCrowdReginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCrowdReginWithOptions(request, runtime);
  }

  async getOpportunityMarketWithOptions(request: GetOpportunityMarketRequest, runtime: $Util.RuntimeOptions): Promise<GetOpportunityMarketResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cateIds)) {
      body["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.timeDisplay)) {
      body["TimeDisplay"] = request.timeDisplay;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOpportunityMarket",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOpportunityMarketResponse>(await this.callApi(params, req, runtime), new GetOpportunityMarketResponse({}));
  }

  async getOpportunityMarket(request: GetOpportunityMarketRequest): Promise<GetOpportunityMarketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOpportunityMarketWithOptions(request, runtime);
  }

  async getPriceRangeWithOptions(request: GetPriceRangeRequest, runtime: $Util.RuntimeOptions): Promise<GetPriceRangeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.brandNames)) {
      body["BrandNames"] = request.brandNames;
    }

    if (!Util.isUnset(request.cateIds)) {
      body["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.endingDate)) {
      body["EndingDate"] = request.endingDate;
    }

    if (!Util.isUnset(request.section)) {
      body["Section"] = request.section;
    }

    if (!Util.isUnset(request.shopIds)) {
      body["ShopIds"] = request.shopIds;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPriceRange",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPriceRangeResponse>(await this.callApi(params, req, runtime), new GetPriceRangeResponse({}));
  }

  async getPriceRange(request: GetPriceRangeRequest): Promise<GetPriceRangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPriceRangeWithOptions(request, runtime);
  }

  async getSexRatioWithOptions(request: GetSexRatioRequest, runtime: $Util.RuntimeOptions): Promise<GetSexRatioResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cateIds)) {
      query["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.endingDate)) {
      query["EndingDate"] = request.endingDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSexRatio",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSexRatioResponse>(await this.callApi(params, req, runtime), new GetSexRatioResponse({}));
  }

  async getSexRatio(request: GetSexRatioRequest): Promise<GetSexRatioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSexRatioWithOptions(request, runtime);
  }

  async getStoreSalesVolumeTopWithOptions(request: GetStoreSalesVolumeTopRequest, runtime: $Util.RuntimeOptions): Promise<GetStoreSalesVolumeTopResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.brandNames)) {
      body["BrandNames"] = request.brandNames;
    }

    if (!Util.isUnset(request.cateIds)) {
      body["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.endingDate)) {
      body["EndingDate"] = request.endingDate;
    }

    if (!Util.isUnset(request.endingPrice)) {
      body["EndingPrice"] = request.endingPrice;
    }

    if (!Util.isUnset(request.endingSalesVolume)) {
      body["EndingSalesVolume"] = request.endingSalesVolume;
    }

    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.shopIds)) {
      body["ShopIds"] = request.shopIds;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.startPrice)) {
      body["StartPrice"] = request.startPrice;
    }

    if (!Util.isUnset(request.startSalesVolume)) {
      body["StartSalesVolume"] = request.startSalesVolume;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetStoreSalesVolumeTop",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStoreSalesVolumeTopResponse>(await this.callApi(params, req, runtime), new GetStoreSalesVolumeTopResponse({}));
  }

  async getStoreSalesVolumeTop(request: GetStoreSalesVolumeTopRequest): Promise<GetStoreSalesVolumeTopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStoreSalesVolumeTopWithOptions(request, runtime);
  }

  async getStoreSearchTopWithOptions(request: GetStoreSearchTopRequest, runtime: $Util.RuntimeOptions): Promise<GetStoreSearchTopResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.brandNames)) {
      body["BrandNames"] = request.brandNames;
    }

    if (!Util.isUnset(request.cateIds)) {
      body["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.endingDate)) {
      body["EndingDate"] = request.endingDate;
    }

    if (!Util.isUnset(request.endingPrice)) {
      body["EndingPrice"] = request.endingPrice;
    }

    if (!Util.isUnset(request.endingSalesVolume)) {
      body["EndingSalesVolume"] = request.endingSalesVolume;
    }

    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.shopIds)) {
      body["ShopIds"] = request.shopIds;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.startPrice)) {
      body["StartPrice"] = request.startPrice;
    }

    if (!Util.isUnset(request.startSalesVolume)) {
      body["StartSalesVolume"] = request.startSalesVolume;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetStoreSearchTop",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStoreSearchTopResponse>(await this.callApi(params, req, runtime), new GetStoreSearchTopResponse({}));
  }

  async getStoreSearchTop(request: GetStoreSearchTopRequest): Promise<GetStoreSearchTopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStoreSearchTopWithOptions(request, runtime);
  }

  async getStyleOnlineWithOptions(request: GetStyleOnlineRequest, runtime: $Util.RuntimeOptions): Promise<GetStyleOnlineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.brandNames)) {
      query["BrandNames"] = request.brandNames;
    }

    if (!Util.isUnset(request.cateIds)) {
      query["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.endingDate)) {
      query["EndingDate"] = request.endingDate;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.shopIds)) {
      query["ShopIds"] = request.shopIds;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStyleOnline",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStyleOnlineResponse>(await this.callApi(params, req, runtime), new GetStyleOnlineResponse({}));
  }

  async getStyleOnline(request: GetStyleOnlineRequest): Promise<GetStyleOnlineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStyleOnlineWithOptions(request, runtime);
  }

  async getStyleTopWithOptions(request: GetStyleTopRequest, runtime: $Util.RuntimeOptions): Promise<GetStyleTopResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.brandNames)) {
      body["BrandNames"] = request.brandNames;
    }

    if (!Util.isUnset(request.cateIds)) {
      body["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.endingDate)) {
      body["EndingDate"] = request.endingDate;
    }

    if (!Util.isUnset(request.endingPrice)) {
      body["EndingPrice"] = request.endingPrice;
    }

    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.shopIds)) {
      body["ShopIds"] = request.shopIds;
    }

    if (!Util.isUnset(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.startPrice)) {
      body["StartPrice"] = request.startPrice;
    }

    if (!Util.isUnset(request.timeDisplay)) {
      body["TimeDisplay"] = request.timeDisplay;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetStyleTop",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStyleTopResponse>(await this.callApi(params, req, runtime), new GetStyleTopResponse({}));
  }

  async getStyleTop(request: GetStyleTopRequest): Promise<GetStyleTopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStyleTopWithOptions(request, runtime);
  }

  async getTrendImageDetailWithOptions(request: GetTrendImageDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetTrendImageDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aiImgId)) {
      query["AiImgId"] = request.aiImgId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTrendImageDetail",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTrendImageDetailResponse>(await this.callApi(params, req, runtime), new GetTrendImageDetailResponse({}));
  }

  async getTrendImageDetail(request: GetTrendImageDetailRequest): Promise<GetTrendImageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrendImageDetailWithOptions(request, runtime);
  }

  async getTrendImageListWithOptions(request: GetTrendImageListRequest, runtime: $Util.RuntimeOptions): Promise<GetTrendImageListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cateIds)) {
      body["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTrendImageList",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTrendImageListResponse>(await this.callApi(params, req, runtime), new GetTrendImageListResponse({}));
  }

  async getTrendImageList(request: GetTrendImageListRequest): Promise<GetTrendImageListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrendImageListWithOptions(request, runtime);
  }

  async getTrendIndexWithOptions(request: GetTrendIndexRequest, runtime: $Util.RuntimeOptions): Promise<GetTrendIndexResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cateIds)) {
      body["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.monthNum)) {
      body["MonthNum"] = request.monthNum;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTrendIndex",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTrendIndexResponse>(await this.callApi(params, req, runtime), new GetTrendIndexResponse({}));
  }

  async getTrendIndex(request: GetTrendIndexRequest): Promise<GetTrendIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrendIndexWithOptions(request, runtime);
  }

  async getTrendSearchRecordWithOptions(request: GetTrendSearchRecordRequest, runtime: $Util.RuntimeOptions): Promise<GetTrendSearchRecordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.key)) {
      body["Key"] = request.key;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTrendSearchRecord",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTrendSearchRecordResponse>(await this.callApi(params, req, runtime), new GetTrendSearchRecordResponse({}));
  }

  async getTrendSearchRecord(request: GetTrendSearchRecordRequest): Promise<GetTrendSearchRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrendSearchRecordWithOptions(request, runtime);
  }

  async getTrendStatisticWithOptions(request: GetTrendStatisticRequest, runtime: $Util.RuntimeOptions): Promise<GetTrendStatisticResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.brandNames)) {
      body["BrandNames"] = request.brandNames;
    }

    if (!Util.isUnset(request.cateIds)) {
      body["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.endingDate)) {
      body["EndingDate"] = request.endingDate;
    }

    if (!Util.isUnset(request.shopIds)) {
      body["ShopIds"] = request.shopIds;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTrendStatistic",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTrendStatisticResponse>(await this.callApi(params, req, runtime), new GetTrendStatisticResponse({}));
  }

  async getTrendStatistic(request: GetTrendStatisticRequest): Promise<GetTrendStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrendStatisticWithOptions(request, runtime);
  }

  async getTrendWordAndIndexWithOptions(request: GetTrendWordAndIndexRequest, runtime: $Util.RuntimeOptions): Promise<GetTrendWordAndIndexResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cateIds)) {
      body["CateIds"] = request.cateIds;
    }

    if (!Util.isUnset(request.endingDate)) {
      body["EndingDate"] = request.endingDate;
    }

    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTrendWordAndIndex",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTrendWordAndIndexResponse>(await this.callApi(params, req, runtime), new GetTrendWordAndIndexResponse({}));
  }

  async getTrendWordAndIndex(request: GetTrendWordAndIndexRequest): Promise<GetTrendWordAndIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrendWordAndIndexWithOptions(request, runtime);
  }

}
