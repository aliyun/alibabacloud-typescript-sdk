// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AccessTokenRequest extends $tea.Model {
  appKey?: string;
  appSecret?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'app_key',
      appSecret: 'app_secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessTokenResponseBody extends $tea.Model {
  code?: string;
  data?: AccessTokenResponseBodyData;
  message?: string;
  module?: AccessTokenResponseBodyModule;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AccessTokenResponseBodyData,
      message: 'string',
      module: AccessTokenResponseBodyModule,
      requestId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AccessTokenResponseBody;
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
      body: AccessTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddressGetHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddressGetRequest extends $tea.Model {
  actionType?: number;
  itineraryId?: string;
  phone?: string;
  type?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'action_type',
      itineraryId: 'itinerary_id',
      phone: 'phone',
      type: 'type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      itineraryId: 'string',
      phone: 'string',
      type: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddressGetResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: AddressGetResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: AddressGetResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddressGetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddressGetResponseBody;
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
      body: AddressGetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AirportSearchHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AirportSearchRequest extends $tea.Model {
  keyword?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AirportSearchResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: AirportSearchResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: AirportSearchResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AirportSearchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AirportSearchResponseBody;
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
      body: AirportSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllBaseCityInfoQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripAccessToken: 'x-acs-btrip-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllBaseCityInfoQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: AllBaseCityInfoQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: AllBaseCityInfoQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllBaseCityInfoQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AllBaseCityInfoQueryResponseBody;
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
      body: AllBaseCityInfoQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequest extends $tea.Model {
  budget?: number;
  budgetMerge?: number;
  corpName?: string;
  departId?: string;
  departName?: string;
  externalTravelerList?: ApplyAddRequestExternalTravelerList[];
  externalTravelerStandard?: ApplyAddRequestExternalTravelerStandard;
  flightBudget?: number;
  hotelBudget?: number;
  hotelShare?: ApplyAddRequestHotelShare;
  internationalFlightCabins?: string;
  itineraryList?: ApplyAddRequestItineraryList[];
  itineraryRule?: number;
  itinerarySetList?: ApplyAddRequestItinerarySetList[];
  limitTraveler?: number;
  status?: number;
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  thirdpartDepartId?: string;
  togetherBookRule?: number;
  trainBudget?: number;
  travelerList?: ApplyAddRequestTravelerList[];
  travelerStandard?: ApplyAddRequestTravelerStandard[];
  tripCause?: string;
  tripDay?: number;
  tripTitle?: string;
  type?: number;
  unionNo?: string;
  userId?: string;
  userName?: string;
  vehicleBudget?: number;
  static names(): { [key: string]: string } {
    return {
      budget: 'budget',
      budgetMerge: 'budget_merge',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      externalTravelerList: 'external_traveler_list',
      externalTravelerStandard: 'external_traveler_standard',
      flightBudget: 'flight_budget',
      hotelBudget: 'hotel_budget',
      hotelShare: 'hotel_share',
      internationalFlightCabins: 'international_flight_cabins',
      itineraryList: 'itinerary_list',
      itineraryRule: 'itinerary_rule',
      itinerarySetList: 'itinerary_set_list',
      limitTraveler: 'limit_traveler',
      status: 'status',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      togetherBookRule: 'together_book_rule',
      trainBudget: 'train_budget',
      travelerList: 'traveler_list',
      travelerStandard: 'traveler_standard',
      tripCause: 'trip_cause',
      tripDay: 'trip_day',
      tripTitle: 'trip_title',
      type: 'type',
      unionNo: 'union_no',
      userId: 'user_id',
      userName: 'user_name',
      vehicleBudget: 'vehicle_budget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budget: 'number',
      budgetMerge: 'number',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      externalTravelerList: { 'type': 'array', 'itemType': ApplyAddRequestExternalTravelerList },
      externalTravelerStandard: ApplyAddRequestExternalTravelerStandard,
      flightBudget: 'number',
      hotelBudget: 'number',
      hotelShare: ApplyAddRequestHotelShare,
      internationalFlightCabins: 'string',
      itineraryList: { 'type': 'array', 'itemType': ApplyAddRequestItineraryList },
      itineraryRule: 'number',
      itinerarySetList: { 'type': 'array', 'itemType': ApplyAddRequestItinerarySetList },
      limitTraveler: 'number',
      status: 'number',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartDepartId: 'string',
      togetherBookRule: 'number',
      trainBudget: 'number',
      travelerList: { 'type': 'array', 'itemType': ApplyAddRequestTravelerList },
      travelerStandard: { 'type': 'array', 'itemType': ApplyAddRequestTravelerStandard },
      tripCause: 'string',
      tripDay: 'number',
      tripTitle: 'string',
      type: 'number',
      unionNo: 'string',
      userId: 'string',
      userName: 'string',
      vehicleBudget: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddShrinkRequest extends $tea.Model {
  budget?: number;
  budgetMerge?: number;
  corpName?: string;
  departId?: string;
  departName?: string;
  externalTravelerListShrink?: string;
  externalTravelerStandardShrink?: string;
  flightBudget?: number;
  hotelBudget?: number;
  hotelShareShrink?: string;
  internationalFlightCabins?: string;
  itineraryListShrink?: string;
  itineraryRule?: number;
  itinerarySetListShrink?: string;
  limitTraveler?: number;
  status?: number;
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  thirdpartDepartId?: string;
  togetherBookRule?: number;
  trainBudget?: number;
  travelerListShrink?: string;
  travelerStandardShrink?: string;
  tripCause?: string;
  tripDay?: number;
  tripTitle?: string;
  type?: number;
  unionNo?: string;
  userId?: string;
  userName?: string;
  vehicleBudget?: number;
  static names(): { [key: string]: string } {
    return {
      budget: 'budget',
      budgetMerge: 'budget_merge',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      externalTravelerListShrink: 'external_traveler_list',
      externalTravelerStandardShrink: 'external_traveler_standard',
      flightBudget: 'flight_budget',
      hotelBudget: 'hotel_budget',
      hotelShareShrink: 'hotel_share',
      internationalFlightCabins: 'international_flight_cabins',
      itineraryListShrink: 'itinerary_list',
      itineraryRule: 'itinerary_rule',
      itinerarySetListShrink: 'itinerary_set_list',
      limitTraveler: 'limit_traveler',
      status: 'status',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      togetherBookRule: 'together_book_rule',
      trainBudget: 'train_budget',
      travelerListShrink: 'traveler_list',
      travelerStandardShrink: 'traveler_standard',
      tripCause: 'trip_cause',
      tripDay: 'trip_day',
      tripTitle: 'trip_title',
      type: 'type',
      unionNo: 'union_no',
      userId: 'user_id',
      userName: 'user_name',
      vehicleBudget: 'vehicle_budget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budget: 'number',
      budgetMerge: 'number',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      externalTravelerListShrink: 'string',
      externalTravelerStandardShrink: 'string',
      flightBudget: 'number',
      hotelBudget: 'number',
      hotelShareShrink: 'string',
      internationalFlightCabins: 'string',
      itineraryListShrink: 'string',
      itineraryRule: 'number',
      itinerarySetListShrink: 'string',
      limitTraveler: 'number',
      status: 'number',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartDepartId: 'string',
      togetherBookRule: 'number',
      trainBudget: 'number',
      travelerListShrink: 'string',
      travelerStandardShrink: 'string',
      tripCause: 'string',
      tripDay: 'number',
      tripTitle: 'string',
      type: 'number',
      unionNo: 'string',
      userId: 'string',
      userName: 'string',
      vehicleBudget: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: ApplyAddResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: ApplyAddResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyAddResponseBody;
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
      body: ApplyAddResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyApproveHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyApproveRequest extends $tea.Model {
  applyId?: string;
  note?: string;
  operateTime?: string;
  status?: number;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      note: 'note',
      operateTime: 'operate_time',
      status: 'status',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      note: 'string',
      operateTime: 'string',
      status: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyApproveResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyApproveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyApproveResponseBody;
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
      body: ApplyApproveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyListQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyListQueryRequest extends $tea.Model {
  allApply?: boolean;
  departId?: string;
  endTime?: string;
  gmtModified?: string;
  onlyShangLvApply?: boolean;
  page?: number;
  pageSize?: number;
  startTime?: string;
  type?: number;
  unionNo?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      allApply: 'all_apply',
      departId: 'depart_id',
      endTime: 'end_time',
      gmtModified: 'gmt_modified',
      onlyShangLvApply: 'only_shang_lv_apply',
      page: 'page',
      pageSize: 'page_size',
      startTime: 'start_time',
      type: 'type',
      unionNo: 'union_no',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allApply: 'boolean',
      departId: 'string',
      endTime: 'string',
      gmtModified: 'string',
      onlyShangLvApply: 'boolean',
      page: 'number',
      pageSize: 'number',
      startTime: 'string',
      type: 'number',
      unionNo: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyListQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  moduleList?: ApplyListQueryResponseBodyModuleList[];
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      moduleList: 'module_list',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      moduleList: { 'type': 'array', 'itemType': ApplyListQueryResponseBodyModuleList },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyListQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyListQueryResponseBody;
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
      body: ApplyListQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyRequest extends $tea.Model {
  budget?: number;
  budgetMerge?: number;
  corpName?: string;
  departId?: string;
  departName?: string;
  externalTravelerList?: ApplyModifyRequestExternalTravelerList[];
  externalTravelerStandard?: ApplyModifyRequestExternalTravelerStandard;
  flightBudget?: number;
  hotelBudget?: number;
  hotelShare?: ApplyModifyRequestHotelShare;
  itineraryList?: ApplyModifyRequestItineraryList[];
  itineraryRule?: number;
  itinerarySetList?: ApplyModifyRequestItinerarySetList[];
  limitTraveler?: number;
  status?: number;
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  thirdpartDepartId?: string;
  togetherBookRule?: number;
  trainBudget?: number;
  travelerList?: ApplyModifyRequestTravelerList[];
  travelerStandard?: ApplyModifyRequestTravelerStandard[];
  tripCause?: string;
  tripDay?: number;
  tripTitle?: string;
  unionNo?: string;
  userId?: string;
  userName?: string;
  vehicleBudget?: number;
  static names(): { [key: string]: string } {
    return {
      budget: 'budget',
      budgetMerge: 'budget_merge',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      externalTravelerList: 'external_traveler_list',
      externalTravelerStandard: 'external_traveler_standard',
      flightBudget: 'flight_budget',
      hotelBudget: 'hotel_budget',
      hotelShare: 'hotel_share',
      itineraryList: 'itinerary_list',
      itineraryRule: 'itinerary_rule',
      itinerarySetList: 'itinerary_set_list',
      limitTraveler: 'limit_traveler',
      status: 'status',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      togetherBookRule: 'together_book_rule',
      trainBudget: 'train_budget',
      travelerList: 'traveler_list',
      travelerStandard: 'traveler_standard',
      tripCause: 'trip_cause',
      tripDay: 'trip_day',
      tripTitle: 'trip_title',
      unionNo: 'union_no',
      userId: 'user_id',
      userName: 'user_name',
      vehicleBudget: 'vehicle_budget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budget: 'number',
      budgetMerge: 'number',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      externalTravelerList: { 'type': 'array', 'itemType': ApplyModifyRequestExternalTravelerList },
      externalTravelerStandard: ApplyModifyRequestExternalTravelerStandard,
      flightBudget: 'number',
      hotelBudget: 'number',
      hotelShare: ApplyModifyRequestHotelShare,
      itineraryList: { 'type': 'array', 'itemType': ApplyModifyRequestItineraryList },
      itineraryRule: 'number',
      itinerarySetList: { 'type': 'array', 'itemType': ApplyModifyRequestItinerarySetList },
      limitTraveler: 'number',
      status: 'number',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartDepartId: 'string',
      togetherBookRule: 'number',
      trainBudget: 'number',
      travelerList: { 'type': 'array', 'itemType': ApplyModifyRequestTravelerList },
      travelerStandard: { 'type': 'array', 'itemType': ApplyModifyRequestTravelerStandard },
      tripCause: 'string',
      tripDay: 'number',
      tripTitle: 'string',
      unionNo: 'string',
      userId: 'string',
      userName: 'string',
      vehicleBudget: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyShrinkRequest extends $tea.Model {
  budget?: number;
  budgetMerge?: number;
  corpName?: string;
  departId?: string;
  departName?: string;
  externalTravelerListShrink?: string;
  externalTravelerStandardShrink?: string;
  flightBudget?: number;
  hotelBudget?: number;
  hotelShareShrink?: string;
  itineraryListShrink?: string;
  itineraryRule?: number;
  itinerarySetListShrink?: string;
  limitTraveler?: number;
  status?: number;
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  thirdpartDepartId?: string;
  togetherBookRule?: number;
  trainBudget?: number;
  travelerListShrink?: string;
  travelerStandardShrink?: string;
  tripCause?: string;
  tripDay?: number;
  tripTitle?: string;
  unionNo?: string;
  userId?: string;
  userName?: string;
  vehicleBudget?: number;
  static names(): { [key: string]: string } {
    return {
      budget: 'budget',
      budgetMerge: 'budget_merge',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      externalTravelerListShrink: 'external_traveler_list',
      externalTravelerStandardShrink: 'external_traveler_standard',
      flightBudget: 'flight_budget',
      hotelBudget: 'hotel_budget',
      hotelShareShrink: 'hotel_share',
      itineraryListShrink: 'itinerary_list',
      itineraryRule: 'itinerary_rule',
      itinerarySetListShrink: 'itinerary_set_list',
      limitTraveler: 'limit_traveler',
      status: 'status',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      togetherBookRule: 'together_book_rule',
      trainBudget: 'train_budget',
      travelerListShrink: 'traveler_list',
      travelerStandardShrink: 'traveler_standard',
      tripCause: 'trip_cause',
      tripDay: 'trip_day',
      tripTitle: 'trip_title',
      unionNo: 'union_no',
      userId: 'user_id',
      userName: 'user_name',
      vehicleBudget: 'vehicle_budget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budget: 'number',
      budgetMerge: 'number',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      externalTravelerListShrink: 'string',
      externalTravelerStandardShrink: 'string',
      flightBudget: 'number',
      hotelBudget: 'number',
      hotelShareShrink: 'string',
      itineraryListShrink: 'string',
      itineraryRule: 'number',
      itinerarySetListShrink: 'string',
      limitTraveler: 'number',
      status: 'number',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartDepartId: 'string',
      togetherBookRule: 'number',
      trainBudget: 'number',
      travelerListShrink: 'string',
      travelerStandardShrink: 'string',
      tripCause: 'string',
      tripDay: 'number',
      tripTitle: 'string',
      unionNo: 'string',
      userId: 'string',
      userName: 'string',
      vehicleBudget: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: ApplyModifyResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: ApplyModifyResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyModifyResponseBody;
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
      body: ApplyModifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryRequest extends $tea.Model {
  applyId?: number;
  applyShowId?: string;
  thirdpartApplyId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      applyShowId: 'apply_show_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      applyShowId: 'string',
      thirdpartApplyId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: ApplyQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: ApplyQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyQueryResponseBody;
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
      body: ApplyQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyAddHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyAddRequest extends $tea.Model {
  cause?: string;
  city?: string;
  date?: string;
  finishedDate?: string;
  projectCode?: string;
  projectName?: string;
  status?: number;
  thirdPartApplyId?: string;
  thirdPartCostCenterId?: string;
  thirdPartInvoiceId?: string;
  timesTotal?: number;
  timesType?: number;
  timesUsed?: number;
  title?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      cause: 'cause',
      city: 'city',
      date: 'date',
      finishedDate: 'finished_date',
      projectCode: 'project_code',
      projectName: 'project_name',
      status: 'status',
      thirdPartApplyId: 'third_part_apply_id',
      thirdPartCostCenterId: 'third_part_cost_center_id',
      thirdPartInvoiceId: 'third_part_invoice_id',
      timesTotal: 'times_total',
      timesType: 'times_type',
      timesUsed: 'times_used',
      title: 'title',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cause: 'string',
      city: 'string',
      date: 'string',
      finishedDate: 'string',
      projectCode: 'string',
      projectName: 'string',
      status: 'number',
      thirdPartApplyId: 'string',
      thirdPartCostCenterId: 'string',
      thirdPartInvoiceId: 'string',
      timesTotal: 'number',
      timesType: 'number',
      timesUsed: 'number',
      title: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyAddResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: number;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: 'number',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyAddResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CarApplyAddResponseBody;
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
      body: CarApplyAddResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyModifyHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyModifyRequest extends $tea.Model {
  operateTime?: string;
  remark?: string;
  status?: number;
  thirdPartApplyId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      operateTime: 'operate_time',
      remark: 'remark',
      status: 'status',
      thirdPartApplyId: 'third_part_apply_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateTime: 'string',
      remark: 'string',
      status: 'number',
      thirdPartApplyId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyModifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: boolean;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: 'boolean',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyModifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CarApplyModifyResponseBody;
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
      body: CarApplyModifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyQueryRequest extends $tea.Model {
  createdEndAt?: string;
  createdStartAt?: string;
  pageNumber?: number;
  pageSize?: number;
  thirdPartApplyId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdEndAt: 'created_end_at',
      createdStartAt: 'created_start_at',
      pageNumber: 'page_number',
      pageSize: 'page_size',
      thirdPartApplyId: 'third_part_apply_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdEndAt: 'string',
      createdStartAt: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      thirdPartApplyId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyQueryResponseBody extends $tea.Model {
  applyList?: CarApplyQueryResponseBodyApplyList[];
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: number;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      applyList: 'apply_list',
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyList: { 'type': 'array', 'itemType': CarApplyQueryResponseBodyApplyList },
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CarApplyQueryResponseBody;
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
      body: CarApplyQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarBillSettlementQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarBillSettlementQueryRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  periodEnd?: string;
  periodStart?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'page_no',
      pageSize: 'page_size',
      periodEnd: 'period_end',
      periodStart: 'period_start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      periodEnd: 'string',
      periodStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarBillSettlementQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: CarBillSettlementQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: CarBillSettlementQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarBillSettlementQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CarBillSettlementQueryResponseBody;
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
      body: CarBillSettlementQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderListQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderListQueryRequest extends $tea.Model {
  allApply?: boolean;
  applyId?: number;
  departId?: string;
  endTime?: string;
  page?: number;
  pageSize?: number;
  startTime?: string;
  thirdpartApplyId?: string;
  updateEndTime?: string;
  updateStartTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      allApply: 'all_apply',
      applyId: 'apply_id',
      departId: 'depart_id',
      endTime: 'end_time',
      page: 'page',
      pageSize: 'page_size',
      startTime: 'start_time',
      thirdpartApplyId: 'thirdpart_apply_id',
      updateEndTime: 'update_end_time',
      updateStartTime: 'update_start_time',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allApply: 'boolean',
      applyId: 'number',
      departId: 'string',
      endTime: 'string',
      page: 'number',
      pageSize: 'number',
      startTime: 'string',
      thirdpartApplyId: 'string',
      updateEndTime: 'string',
      updateStartTime: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderListQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: CarOrderListQueryResponseBodyModule[];
  pageInfo?: CarOrderListQueryResponseBodyPageInfo;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      pageInfo: 'page_info',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': CarOrderListQueryResponseBodyModule },
      pageInfo: CarOrderListQueryResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderListQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CarOrderListQueryResponseBody;
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
      body: CarOrderListQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderQueryRequest extends $tea.Model {
  orderId?: number;
  subOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      subOrderId: 'sub_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      subOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: CarOrderQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: CarOrderQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CarOrderQueryResponseBody;
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
      body: CarOrderQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CitySearchHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CitySearchRequest extends $tea.Model {
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CitySearchResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: CitySearchResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: CitySearchResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CitySearchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CitySearchResponseBody;
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
      body: CitySearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonApplyQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonApplyQueryRequest extends $tea.Model {
  applyId?: number;
  bizCategory?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      bizCategory: 'biz_category',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      bizCategory: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonApplyQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: CommonApplyQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: CommonApplyQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonApplyQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CommonApplyQueryResponseBody;
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
      body: CommonApplyQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonApplySyncHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonApplySyncRequest extends $tea.Model {
  applyId?: number;
  bizCategory?: number;
  remark?: string;
  status?: number;
  thirdpartyFlowId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      bizCategory: 'biz_category',
      remark: 'remark',
      status: 'status',
      thirdpartyFlowId: 'thirdparty_flow_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      bizCategory: 'number',
      remark: 'string',
      status: 'number',
      thirdpartyFlowId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonApplySyncResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: boolean;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: 'boolean',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonApplySyncResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CommonApplySyncResponseBody;
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
      body: CommonApplySyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpAuthLinkInfoQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: CorpAuthLinkInfoQueryResponseBodyModule;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: CorpAuthLinkInfoQueryResponseBodyModule,
      requestId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpAuthLinkInfoQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CorpAuthLinkInfoQueryResponseBody;
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
      body: CorpAuthLinkInfoQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpTokenHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripAccessToken: 'x-acs-btrip-access-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripAccessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpTokenRequest extends $tea.Model {
  appSecret?: string;
  corpId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appSecret: 'app_secret',
      corpId: 'corp_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecret: 'string',
      corpId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpTokenResponseBody extends $tea.Model {
  code?: string;
  data?: CorpTokenResponseBodyData;
  message?: string;
  module?: CorpTokenResponseBodyModule;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CorpTokenResponseBodyData,
      message: 'string',
      module: CorpTokenResponseBodyModule,
      requestId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CorpTokenResponseBody;
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
      body: CorpTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterDeleteHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterDeleteRequest extends $tea.Model {
  thirdpartId?: string;
  static names(): { [key: string]: string } {
    return {
      thirdpartId: 'thirdpart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdpartId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterDeleteResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterDeleteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CostCenterDeleteResponseBody;
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
      body: CostCenterDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterModifyHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterModifyRequest extends $tea.Model {
  alipayNo?: string;
  number?: string;
  scope?: number;
  thirdpartId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      alipayNo: 'alipay_no',
      number: 'number',
      scope: 'scope',
      thirdpartId: 'thirdpart_id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayNo: 'string',
      number: 'string',
      scope: 'number',
      thirdpartId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterModifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterModifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CostCenterModifyResponseBody;
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
      body: CostCenterModifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterQueryRequest extends $tea.Model {
  needOrgEntity?: boolean;
  thirdpartId?: string;
  title?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      needOrgEntity: 'need_org_entity',
      thirdpartId: 'thirdpart_id',
      title: 'title',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needOrgEntity: 'boolean',
      thirdpartId: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: CostCenterQueryResponseBodyModule[];
  morePage?: boolean;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      morePage: 'more_page',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': CostCenterQueryResponseBodyModule },
      morePage: 'boolean',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CostCenterQueryResponseBody;
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
      body: CostCenterQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterSaveHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterSaveRequest extends $tea.Model {
  alipayNo?: string;
  number?: string;
  scope?: number;
  thirdpartId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      alipayNo: 'alipay_no',
      number: 'number',
      scope: 'scope',
      thirdpartId: 'thirdpart_id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayNo: 'string',
      number: 'string',
      scope: 'number',
      thirdpartId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterSaveResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: CostCenterSaveResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: CostCenterSaveResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterSaveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CostCenterSaveResponseBody;
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
      body: CostCenterSaveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DepartmentSaveHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DepartmentSaveRequest extends $tea.Model {
  departList?: DepartmentSaveRequestDepartList[];
  static names(): { [key: string]: string } {
    return {
      departList: 'depart_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departList: { 'type': 'array', 'itemType': DepartmentSaveRequestDepartList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DepartmentSaveShrinkRequest extends $tea.Model {
  departListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      departListShrink: 'depart_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DepartmentSaveResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DepartmentSaveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DepartmentSaveResponseBody;
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
      body: DepartmentSaveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityAddHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityAddRequest extends $tea.Model {
  entityDOList?: EntityAddRequestEntityDOList[];
  thirdpartId?: string;
  static names(): { [key: string]: string } {
    return {
      entityDOList: 'entity_d_o_list',
      thirdpartId: 'thirdpart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityDOList: { 'type': 'array', 'itemType': EntityAddRequestEntityDOList },
      thirdpartId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityAddShrinkRequest extends $tea.Model {
  entityDOListShrink?: string;
  thirdpartId?: string;
  static names(): { [key: string]: string } {
    return {
      entityDOListShrink: 'entity_d_o_list',
      thirdpartId: 'thirdpart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityDOListShrink: 'string',
      thirdpartId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityAddResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: EntityAddResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: EntityAddResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityAddResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EntityAddResponseBody;
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
      body: EntityAddResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityDeleteHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityDeleteRequest extends $tea.Model {
  delAll?: boolean;
  entityDOList?: EntityDeleteRequestEntityDOList[];
  thirdpartId?: string;
  static names(): { [key: string]: string } {
    return {
      delAll: 'del_all',
      entityDOList: 'entity_d_o_list',
      thirdpartId: 'thirdpart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delAll: 'boolean',
      entityDOList: { 'type': 'array', 'itemType': EntityDeleteRequestEntityDOList },
      thirdpartId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityDeleteShrinkRequest extends $tea.Model {
  delAll?: boolean;
  entityDOListShrink?: string;
  thirdpartId?: string;
  static names(): { [key: string]: string } {
    return {
      delAll: 'del_all',
      entityDOListShrink: 'entity_d_o_list',
      thirdpartId: 'thirdpart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delAll: 'boolean',
      entityDOListShrink: 'string',
      thirdpartId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityDeleteResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: EntityDeleteResponseBodyModule;
  morePage?: boolean;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      morePage: 'more_page',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: EntityDeleteResponseBodyModule,
      morePage: 'boolean',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityDeleteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EntityDeleteResponseBody;
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
      body: EntityDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntitySetHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntitySetRequest extends $tea.Model {
  entityDOList?: EntitySetRequestEntityDOList[];
  thirdpartId?: string;
  static names(): { [key: string]: string } {
    return {
      entityDOList: 'entity_d_o_list',
      thirdpartId: 'thirdpart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityDOList: { 'type': 'array', 'itemType': EntitySetRequestEntityDOList },
      thirdpartId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntitySetShrinkRequest extends $tea.Model {
  entityDOListShrink?: string;
  thirdpartId?: string;
  static names(): { [key: string]: string } {
    return {
      entityDOListShrink: 'entity_d_o_list',
      thirdpartId: 'thirdpart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityDOListShrink: 'string',
      thirdpartId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntitySetResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: EntitySetResponseBodyModule;
  morePage?: boolean;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      morePage: 'more_page',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: EntitySetResponseBodyModule,
      morePage: 'boolean',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntitySetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EntitySetResponseBody;
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
      body: EntitySetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryRequest extends $tea.Model {
  arrCity?: string;
  category?: string;
  depCity?: string;
  endTime?: number;
  itineraryId?: string;
  startTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      category: 'category',
      depCity: 'dep_city',
      endTime: 'end_time',
      itineraryId: 'itinerary_id',
      startTime: 'start_time',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      category: 'string',
      depCity: 'string',
      endTime: 'number',
      itineraryId: 'string',
      startTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  module?: EstimatedPriceQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      module: EstimatedPriceQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EstimatedPriceQueryResponseBody;
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
      body: EstimatedPriceQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExceedApplySyncHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExceedApplySyncRequest extends $tea.Model {
  applyId?: number;
  bizCategory?: number;
  remark?: string;
  status?: number;
  thirdpartyFlowId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      bizCategory: 'biz_category',
      remark: 'remark',
      status: 'status',
      thirdpartyFlowId: 'thirdparty_flow_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      bizCategory: 'number',
      remark: 'string',
      status: 'number',
      thirdpartyFlowId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExceedApplySyncResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: boolean;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: 'boolean',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExceedApplySyncResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExceedApplySyncResponseBody;
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
      body: ExceedApplySyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightBillSettlementQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightBillSettlementQueryRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  periodEnd?: string;
  periodStart?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'page_no',
      pageSize: 'page_size',
      periodEnd: 'period_end',
      periodStart: 'period_start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      periodEnd: 'string',
      periodStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightBillSettlementQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: FlightBillSettlementQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: FlightBillSettlementQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightBillSettlementQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FlightBillSettlementQueryResponseBody;
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
      body: FlightBillSettlementQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCancelOrderHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripCorpToken: 'x-acs-btrip-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCancelOrderRequest extends $tea.Model {
  disOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCancelOrderResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: FlightCancelOrderResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: FlightCancelOrderResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCancelOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FlightCancelOrderResponseBody;
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
      body: FlightCancelOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCreateOrderHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripCorpToken: 'x-acs-btrip-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCreateOrderRequest extends $tea.Model {
  arrAirportCode?: string;
  arrCityCode?: string;
  autoPay?: number;
  buyerName?: string;
  buyerUniqueKey?: string;
  contactInfo?: FlightCreateOrderRequestContactInfo;
  depAirportCode?: string;
  depCityCode?: string;
  depDate?: string;
  disOrderId?: string;
  orderAttr?: { [key: string]: any };
  orderParams?: string;
  otaItemId?: string;
  price?: number;
  receiptAddress?: string;
  receiptTarget?: number;
  receiptTitle?: string;
  travelerInfoList?: FlightCreateOrderRequestTravelerInfoList[];
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      arrAirportCode: 'arr_airport_code',
      arrCityCode: 'arr_city_code',
      autoPay: 'auto_pay',
      buyerName: 'buyer_name',
      buyerUniqueKey: 'buyer_unique_key',
      contactInfo: 'contact_info',
      depAirportCode: 'dep_airport_code',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      disOrderId: 'dis_order_id',
      orderAttr: 'order_attr',
      orderParams: 'order_params',
      otaItemId: 'ota_item_id',
      price: 'price',
      receiptAddress: 'receipt_address',
      receiptTarget: 'receipt_target',
      receiptTitle: 'receipt_title',
      travelerInfoList: 'traveler_info_list',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirportCode: 'string',
      arrCityCode: 'string',
      autoPay: 'number',
      buyerName: 'string',
      buyerUniqueKey: 'string',
      contactInfo: FlightCreateOrderRequestContactInfo,
      depAirportCode: 'string',
      depCityCode: 'string',
      depDate: 'string',
      disOrderId: 'string',
      orderAttr: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      orderParams: 'string',
      otaItemId: 'string',
      price: 'number',
      receiptAddress: 'string',
      receiptTarget: 'number',
      receiptTitle: 'string',
      travelerInfoList: { 'type': 'array', 'itemType': FlightCreateOrderRequestTravelerInfoList },
      tripType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCreateOrderShrinkRequest extends $tea.Model {
  arrAirportCode?: string;
  arrCityCode?: string;
  autoPay?: number;
  buyerName?: string;
  buyerUniqueKey?: string;
  contactInfoShrink?: string;
  depAirportCode?: string;
  depCityCode?: string;
  depDate?: string;
  disOrderId?: string;
  orderAttrShrink?: string;
  orderParams?: string;
  otaItemId?: string;
  price?: number;
  receiptAddress?: string;
  receiptTarget?: number;
  receiptTitle?: string;
  travelerInfoListShrink?: string;
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      arrAirportCode: 'arr_airport_code',
      arrCityCode: 'arr_city_code',
      autoPay: 'auto_pay',
      buyerName: 'buyer_name',
      buyerUniqueKey: 'buyer_unique_key',
      contactInfoShrink: 'contact_info',
      depAirportCode: 'dep_airport_code',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      disOrderId: 'dis_order_id',
      orderAttrShrink: 'order_attr',
      orderParams: 'order_params',
      otaItemId: 'ota_item_id',
      price: 'price',
      receiptAddress: 'receipt_address',
      receiptTarget: 'receipt_target',
      receiptTitle: 'receipt_title',
      travelerInfoListShrink: 'traveler_info_list',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirportCode: 'string',
      arrCityCode: 'string',
      autoPay: 'number',
      buyerName: 'string',
      buyerUniqueKey: 'string',
      contactInfoShrink: 'string',
      depAirportCode: 'string',
      depCityCode: 'string',
      depDate: 'string',
      disOrderId: 'string',
      orderAttrShrink: 'string',
      orderParams: 'string',
      otaItemId: 'string',
      price: 'number',
      receiptAddress: 'string',
      receiptTarget: 'number',
      receiptTitle: 'string',
      travelerInfoListShrink: 'string',
      tripType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCreateOrderResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: FlightCreateOrderResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: FlightCreateOrderResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCreateOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FlightCreateOrderResponseBody;
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
      body: FlightCreateOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightExceedApplyQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightExceedApplyQueryRequest extends $tea.Model {
  applyId?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightExceedApplyQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: FlightExceedApplyQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: FlightExceedApplyQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightExceedApplyQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FlightExceedApplyQueryResponseBody;
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
      body: FlightExceedApplyQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailInfoHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripCorpToken: 'x-acs-btrip-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailInfoRequest extends $tea.Model {
  disOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailInfoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: FlightOrderDetailInfoResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: FlightOrderDetailInfoResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FlightOrderDetailInfoResponseBody;
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
      body: FlightOrderDetailInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryRequest extends $tea.Model {
  allApply?: boolean;
  applyId?: number;
  departId?: string;
  endTime?: string;
  page?: number;
  pageSize?: number;
  startTime?: string;
  thirdpartApplyId?: string;
  updateEndTime?: string;
  updateStartTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      allApply: 'all_apply',
      applyId: 'apply_id',
      departId: 'depart_id',
      endTime: 'end_time',
      page: 'page',
      pageSize: 'page_size',
      startTime: 'start_time',
      thirdpartApplyId: 'thirdpart_apply_id',
      updateEndTime: 'update_end_time',
      updateStartTime: 'update_start_time',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allApply: 'boolean',
      applyId: 'number',
      departId: 'string',
      endTime: 'string',
      page: 'number',
      pageSize: 'number',
      startTime: 'string',
      thirdpartApplyId: 'string',
      updateEndTime: 'string',
      updateStartTime: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: FlightOrderListQueryResponseBodyModule[];
  pageInfo?: FlightOrderListQueryResponseBodyPageInfo;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      pageInfo: 'page_info',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': FlightOrderListQueryResponseBodyModule },
      pageInfo: FlightOrderListQueryResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FlightOrderListQueryResponseBody;
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
      body: FlightOrderListQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryRequest extends $tea.Model {
  orderId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: FlightOrderQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: FlightOrderQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FlightOrderQueryResponseBody;
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
      body: FlightOrderQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightPayOrderHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripCorpToken: 'x-acs-btrip-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightPayOrderRequest extends $tea.Model {
  corpPayPrice?: number;
  disOrderId?: string;
  extra?: { [key: string]: string };
  personalPayPrice?: number;
  totalPayPrice?: number;
  static names(): { [key: string]: string } {
    return {
      corpPayPrice: 'corp_pay_price',
      disOrderId: 'dis_order_id',
      extra: 'extra',
      personalPayPrice: 'personal_pay_price',
      totalPayPrice: 'total_pay_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpPayPrice: 'number',
      disOrderId: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      personalPayPrice: 'number',
      totalPayPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightPayOrderShrinkRequest extends $tea.Model {
  corpPayPrice?: number;
  disOrderId?: string;
  extraShrink?: string;
  personalPayPrice?: number;
  totalPayPrice?: number;
  static names(): { [key: string]: string } {
    return {
      corpPayPrice: 'corp_pay_price',
      disOrderId: 'dis_order_id',
      extraShrink: 'extra',
      personalPayPrice: 'personal_pay_price',
      totalPayPrice: 'total_pay_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpPayPrice: 'number',
      disOrderId: 'string',
      extraShrink: 'string',
      personalPayPrice: 'number',
      totalPayPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightPayOrderResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: FlightPayOrderResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: FlightPayOrderResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightPayOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FlightPayOrderResponseBody;
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
      body: FlightPayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundApplyHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripCorpToken: 'x-acs-btrip-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundApplyRequest extends $tea.Model {
  corpRefundPrice?: number;
  disOrderId?: string;
  disSubOrderId?: string;
  displayRefundMoney?: string;
  extra?: { [key: string]: string };
  isVoluntary?: number;
  itemUnitIds?: string;
  passengerSegmentInfoList?: FlightRefundApplyRequestPassengerSegmentInfoList[];
  personalRefundPrice?: number;
  reasonDetail?: string;
  reasonType?: number;
  refundVoucherInfo?: string[];
  sessionId?: string;
  totalRefundPrice?: number;
  static names(): { [key: string]: string } {
    return {
      corpRefundPrice: 'corp_refund_price',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      displayRefundMoney: 'display_refund_money',
      extra: 'extra',
      isVoluntary: 'is_voluntary',
      itemUnitIds: 'item_unit_ids',
      passengerSegmentInfoList: 'passenger_segment_info_list',
      personalRefundPrice: 'personal_refund_price',
      reasonDetail: 'reason_detail',
      reasonType: 'reason_type',
      refundVoucherInfo: 'refund_voucher_info',
      sessionId: 'session_id',
      totalRefundPrice: 'total_refund_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpRefundPrice: 'number',
      disOrderId: 'string',
      disSubOrderId: 'string',
      displayRefundMoney: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isVoluntary: 'number',
      itemUnitIds: 'string',
      passengerSegmentInfoList: { 'type': 'array', 'itemType': FlightRefundApplyRequestPassengerSegmentInfoList },
      personalRefundPrice: 'number',
      reasonDetail: 'string',
      reasonType: 'number',
      refundVoucherInfo: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
      totalRefundPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundApplyShrinkRequest extends $tea.Model {
  corpRefundPrice?: number;
  disOrderId?: string;
  disSubOrderId?: string;
  displayRefundMoney?: string;
  extraShrink?: string;
  isVoluntary?: number;
  itemUnitIds?: string;
  passengerSegmentInfoListShrink?: string;
  personalRefundPrice?: number;
  reasonDetail?: string;
  reasonType?: number;
  refundVoucherInfoShrink?: string;
  sessionId?: string;
  totalRefundPrice?: number;
  static names(): { [key: string]: string } {
    return {
      corpRefundPrice: 'corp_refund_price',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      displayRefundMoney: 'display_refund_money',
      extraShrink: 'extra',
      isVoluntary: 'is_voluntary',
      itemUnitIds: 'item_unit_ids',
      passengerSegmentInfoListShrink: 'passenger_segment_info_list',
      personalRefundPrice: 'personal_refund_price',
      reasonDetail: 'reason_detail',
      reasonType: 'reason_type',
      refundVoucherInfoShrink: 'refund_voucher_info',
      sessionId: 'session_id',
      totalRefundPrice: 'total_refund_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpRefundPrice: 'number',
      disOrderId: 'string',
      disSubOrderId: 'string',
      displayRefundMoney: 'string',
      extraShrink: 'string',
      isVoluntary: 'number',
      itemUnitIds: 'string',
      passengerSegmentInfoListShrink: 'string',
      personalRefundPrice: 'number',
      reasonDetail: 'string',
      reasonType: 'number',
      refundVoucherInfoShrink: 'string',
      sessionId: 'string',
      totalRefundPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundApplyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: FlightRefundApplyResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: FlightRefundApplyResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundApplyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FlightRefundApplyResponseBody;
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
      body: FlightRefundApplyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundDetailHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripCorpToken: 'x-acs-btrip-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundDetailRequest extends $tea.Model {
  disOrderId?: string;
  disSubOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
      disSubOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: FlightRefundDetailResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: FlightRefundDetailResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FlightRefundDetailResponseBody;
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
      body: FlightRefundDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundPreCalHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripCorpToken: 'x-acs-btrip-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundPreCalRequest extends $tea.Model {
  disOrderId?: string;
  isVoluntary?: string;
  passengerSegmentInfoList?: FlightRefundPreCalRequestPassengerSegmentInfoList[];
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
      isVoluntary: 'is_voluntary',
      passengerSegmentInfoList: 'passenger_segment_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
      isVoluntary: 'string',
      passengerSegmentInfoList: { 'type': 'array', 'itemType': FlightRefundPreCalRequestPassengerSegmentInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundPreCalShrinkRequest extends $tea.Model {
  disOrderId?: string;
  isVoluntary?: string;
  passengerSegmentInfoListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
      isVoluntary: 'is_voluntary',
      passengerSegmentInfoListShrink: 'passenger_segment_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
      isVoluntary: 'string',
      passengerSegmentInfoListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundPreCalResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: FlightRefundPreCalResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: FlightRefundPreCalResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundPreCalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FlightRefundPreCalResponseBody;
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
      body: FlightRefundPreCalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelBillSettlementQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelBillSettlementQueryRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  periodEnd?: string;
  periodStart?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'page_no',
      pageSize: 'page_size',
      periodEnd: 'period_end',
      periodStart: 'period_start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      periodEnd: 'string',
      periodStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelBillSettlementQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: HotelBillSettlementQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: HotelBillSettlementQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelBillSettlementQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HotelBillSettlementQueryResponseBody;
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
      body: HotelBillSettlementQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelExceedApplyQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelExceedApplyQueryRequest extends $tea.Model {
  applyId?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelExceedApplyQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: HotelExceedApplyQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: HotelExceedApplyQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelExceedApplyQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HotelExceedApplyQueryResponseBody;
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
      body: HotelExceedApplyQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderListQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderListQueryRequest extends $tea.Model {
  allApply?: boolean;
  applyId?: number;
  departId?: string;
  endTime?: string;
  page?: number;
  pageSize?: number;
  startTime?: string;
  thirdpartApplyId?: string;
  updateEndTime?: string;
  updateStartTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      allApply: 'all_apply',
      applyId: 'apply_id',
      departId: 'depart_id',
      endTime: 'end_time',
      page: 'page',
      pageSize: 'page_size',
      startTime: 'start_time',
      thirdpartApplyId: 'thirdpart_apply_id',
      updateEndTime: 'update_end_time',
      updateStartTime: 'update_start_time',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allApply: 'boolean',
      applyId: 'number',
      departId: 'string',
      endTime: 'string',
      page: 'number',
      pageSize: 'number',
      startTime: 'string',
      thirdpartApplyId: 'string',
      updateEndTime: 'string',
      updateStartTime: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderListQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: HotelOrderListQueryResponseBodyModule[];
  pageInfo?: HotelOrderListQueryResponseBodyPageInfo;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      pageInfo: 'page_info',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': HotelOrderListQueryResponseBodyModule },
      pageInfo: HotelOrderListQueryResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderListQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HotelOrderListQueryResponseBody;
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
      body: HotelOrderListQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryRequest extends $tea.Model {
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: HotelOrderQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: HotelOrderQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HotelOrderQueryResponseBody;
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
      body: HotelOrderQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IeFlightBillSettlementQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IeFlightBillSettlementQueryRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  periodEnd?: string;
  periodStart?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'page_no',
      pageSize: 'page_size',
      periodEnd: 'period_end',
      periodStart: 'period_start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      periodEnd: 'string',
      periodStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IeFlightBillSettlementQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: IeFlightBillSettlementQueryResponseBodyModule;
  morePage?: boolean;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      morePage: 'more_page',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: IeFlightBillSettlementQueryResponseBodyModule,
      morePage: 'boolean',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IeFlightBillSettlementQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: IeFlightBillSettlementQueryResponseBody;
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
      body: IeFlightBillSettlementQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceAddHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceAddRequest extends $tea.Model {
  address?: string;
  bankName?: string;
  bankNo?: string;
  taxNo?: string;
  tel?: string;
  thirdPartId?: string;
  title?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      bankName: 'bank_name',
      bankNo: 'bank_no',
      taxNo: 'tax_no',
      tel: 'tel',
      thirdPartId: 'third_part_id',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      bankName: 'string',
      bankNo: 'string',
      taxNo: 'string',
      tel: 'string',
      thirdPartId: 'string',
      title: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceAddResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceAddResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InvoiceAddResponseBody;
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
      body: InvoiceAddResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceDeleteHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceDeleteRequest extends $tea.Model {
  thirdPartId?: string;
  static names(): { [key: string]: string } {
    return {
      thirdPartId: 'third_part_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdPartId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceDeleteResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceDeleteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InvoiceDeleteResponseBody;
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
      body: InvoiceDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceModifyHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceModifyRequest extends $tea.Model {
  address?: string;
  bankName?: string;
  bankNo?: string;
  taxNo?: string;
  tel?: string;
  thirdPartId?: string;
  title?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      bankName: 'bank_name',
      bankNo: 'bank_no',
      taxNo: 'tax_no',
      tel: 'tel',
      thirdPartId: 'third_part_id',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      bankName: 'string',
      bankNo: 'string',
      taxNo: 'string',
      tel: 'string',
      thirdPartId: 'string',
      title: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceModifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceModifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InvoiceModifyResponseBody;
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
      body: InvoiceModifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceRuleSaveHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceRuleSaveRequest extends $tea.Model {
  allEmploye?: boolean;
  entities?: InvoiceRuleSaveRequestEntities[];
  thirdPartId?: string;
  static names(): { [key: string]: string } {
    return {
      allEmploye: 'all_employe',
      entities: 'entities',
      thirdPartId: 'third_part_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allEmploye: 'boolean',
      entities: { 'type': 'array', 'itemType': InvoiceRuleSaveRequestEntities },
      thirdPartId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceRuleSaveShrinkRequest extends $tea.Model {
  allEmploye?: boolean;
  entitiesShrink?: string;
  thirdPartId?: string;
  static names(): { [key: string]: string } {
    return {
      allEmploye: 'all_employe',
      entitiesShrink: 'entities',
      thirdPartId: 'third_part_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allEmploye: 'boolean',
      entitiesShrink: 'string',
      thirdPartId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceRuleSaveResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: InvoiceRuleSaveResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: InvoiceRuleSaveResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceRuleSaveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InvoiceRuleSaveResponseBody;
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
      body: InvoiceRuleSaveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceSearchHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceSearchRequest extends $tea.Model {
  title?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceSearchResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: InvoiceSearchResponseBodyModule[];
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': InvoiceSearchResponseBodyModule },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceSearchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InvoiceSearchResponseBody;
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
      body: InvoiceSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsvUserSaveHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsvUserSaveRequest extends $tea.Model {
  userList?: IsvUserSaveRequestUserList[];
  static names(): { [key: string]: string } {
    return {
      userList: 'user_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userList: { 'type': 'array', 'itemType': IsvUserSaveRequestUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsvUserSaveShrinkRequest extends $tea.Model {
  userListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userListShrink: 'user_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsvUserSaveResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsvUserSaveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: IsvUserSaveResponseBody;
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
      body: IsvUserSaveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonthBillGetHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonthBillGetRequest extends $tea.Model {
  billMonth?: string;
  static names(): { [key: string]: string } {
    return {
      billMonth: 'bill_month',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billMonth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonthBillGetResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: MonthBillGetResponseBodyModule[];
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': MonthBillGetResponseBodyModule },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonthBillGetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MonthBillGetResponseBody;
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
      body: MonthBillGetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectAddHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectAddRequest extends $tea.Model {
  code?: string;
  projectName?: string;
  thirdPartCostCenterId?: string;
  thirdPartId?: string;
  thirdPartInvoiceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      projectName: 'project_name',
      thirdPartCostCenterId: 'third_part_cost_center_id',
      thirdPartId: 'third_part_id',
      thirdPartInvoiceId: 'third_part_invoice_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      projectName: 'string',
      thirdPartCostCenterId: 'string',
      thirdPartId: 'string',
      thirdPartInvoiceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectAddResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: number;
  morePage?: boolean;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      morePage: 'more_page',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: 'number',
      morePage: 'boolean',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectAddResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ProjectAddResponseBody;
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
      body: ProjectAddResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectDeleteHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectDeleteRequest extends $tea.Model {
  thirdPartId?: string;
  static names(): { [key: string]: string } {
    return {
      thirdPartId: 'third_part_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdPartId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectDeleteResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: boolean;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: 'boolean',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectDeleteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ProjectDeleteResponseBody;
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
      body: ProjectDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectModifyHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectModifyRequest extends $tea.Model {
  code?: string;
  projectName?: string;
  thirdPartCostCenterId?: string;
  thirdPartId?: string;
  thirdPartInvoiceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      projectName: 'project_name',
      thirdPartCostCenterId: 'third_part_cost_center_id',
      thirdPartId: 'third_part_id',
      thirdPartInvoiceId: 'third_part_invoice_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      projectName: 'string',
      thirdPartCostCenterId: 'string',
      thirdPartId: 'string',
      thirdPartInvoiceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectModifyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: boolean;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: 'boolean',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectModifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ProjectModifyResponseBody;
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
      body: ProjectModifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSingleUserHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSingleUserRequest extends $tea.Model {
  email?: string;
  jobNo?: string;
  leaveStatus?: number;
  managerUserId?: string;
  phone?: string;
  position?: string;
  positionLevel?: string;
  realNameEn?: string;
  thirdDepartIdList?: string[];
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      jobNo: 'job_no',
      leaveStatus: 'leave_status',
      managerUserId: 'manager_user_id',
      phone: 'phone',
      position: 'position',
      positionLevel: 'position_level',
      realNameEn: 'real_name_en',
      thirdDepartIdList: 'third_depart_id_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      jobNo: 'string',
      leaveStatus: 'number',
      managerUserId: 'string',
      phone: 'string',
      position: 'string',
      positionLevel: 'string',
      realNameEn: 'string',
      thirdDepartIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSingleUserShrinkRequest extends $tea.Model {
  email?: string;
  jobNo?: string;
  leaveStatus?: number;
  managerUserId?: string;
  phone?: string;
  position?: string;
  positionLevel?: string;
  realNameEn?: string;
  thirdDepartIdListShrink?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      jobNo: 'job_no',
      leaveStatus: 'leave_status',
      managerUserId: 'manager_user_id',
      phone: 'phone',
      position: 'position',
      positionLevel: 'position_level',
      realNameEn: 'real_name_en',
      thirdDepartIdListShrink: 'third_depart_id_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      jobNo: 'string',
      leaveStatus: 'number',
      managerUserId: 'string',
      phone: 'string',
      position: 'string',
      positionLevel: 'string',
      realNameEn: 'string',
      thirdDepartIdListShrink: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSingleUserResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSingleUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SyncSingleUserResponseBody;
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
      body: SyncSingleUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingApplyHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripCorpToken: 'x-acs-btrip-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingApplyRequest extends $tea.Model {
  disOrderId?: string;
  disSubOrderId?: string;
  isVoluntary?: number;
  modifyFlightInfoList?: TicketChangingApplyRequestModifyFlightInfoList[];
  otaItemId?: string;
  reason?: string;
  sessionId?: string;
  whetherRetry?: boolean;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      isVoluntary: 'is_voluntary',
      modifyFlightInfoList: 'modify_flight_info_list',
      otaItemId: 'ota_item_id',
      reason: 'reason',
      sessionId: 'session_id',
      whetherRetry: 'whether_retry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
      disSubOrderId: 'string',
      isVoluntary: 'number',
      modifyFlightInfoList: { 'type': 'array', 'itemType': TicketChangingApplyRequestModifyFlightInfoList },
      otaItemId: 'string',
      reason: 'string',
      sessionId: 'string',
      whetherRetry: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingApplyShrinkRequest extends $tea.Model {
  disOrderId?: string;
  disSubOrderId?: string;
  isVoluntary?: number;
  modifyFlightInfoListShrink?: string;
  otaItemId?: string;
  reason?: string;
  sessionId?: string;
  whetherRetry?: boolean;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      isVoluntary: 'is_voluntary',
      modifyFlightInfoListShrink: 'modify_flight_info_list',
      otaItemId: 'ota_item_id',
      reason: 'reason',
      sessionId: 'session_id',
      whetherRetry: 'whether_retry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
      disSubOrderId: 'string',
      isVoluntary: 'number',
      modifyFlightInfoListShrink: 'string',
      otaItemId: 'string',
      reason: 'string',
      sessionId: 'string',
      whetherRetry: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingApplyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: TicketChangingApplyResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: TicketChangingApplyResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingApplyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TicketChangingApplyResponseBody;
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
      body: TicketChangingApplyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingCancelHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripCorpToken: 'x-acs-btrip-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingCancelRequest extends $tea.Model {
  disOrderId?: string;
  disSubOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
      disSubOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingCancelResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: TicketChangingCancelResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: TicketChangingCancelResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingCancelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TicketChangingCancelResponseBody;
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
      body: TicketChangingCancelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingDetailHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripCorpToken: 'x-acs-btrip-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingDetailRequest extends $tea.Model {
  disOrderId?: string;
  disSubOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
      disSubOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: TicketChangingDetailResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: TicketChangingDetailResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TicketChangingDetailResponseBody;
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
      body: TicketChangingDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripCorpToken: 'x-acs-btrip-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryRequest extends $tea.Model {
  arrCity?: string;
  depCity?: string;
  disOrderId?: string;
  isVoluntary?: number;
  modifyDepartDate?: string;
  modifyFlightNo?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      depCity: 'dep_city',
      disOrderId: 'dis_order_id',
      isVoluntary: 'is_voluntary',
      modifyDepartDate: 'modify_depart_date',
      modifyFlightNo: 'modify_flight_no',
      sessionId: 'session_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      depCity: 'string',
      disOrderId: 'string',
      isVoluntary: 'number',
      modifyDepartDate: 'string',
      modifyFlightNo: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: TicketChangingEnquiryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: TicketChangingEnquiryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TicketChangingEnquiryResponseBody;
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
      body: TicketChangingEnquiryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripCorpToken: 'x-acs-btrip-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListRequest extends $tea.Model {
  arrCity?: string;
  depCity?: string;
  depDate?: string;
  disOrderId?: string;
  isVoluntary?: number;
  travelerInfoList?: TicketChangingFlightListRequestTravelerInfoList[];
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      depCity: 'dep_city',
      depDate: 'dep_date',
      disOrderId: 'dis_order_id',
      isVoluntary: 'is_voluntary',
      travelerInfoList: 'traveler_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      depCity: 'string',
      depDate: 'string',
      disOrderId: 'string',
      isVoluntary: 'number',
      travelerInfoList: { 'type': 'array', 'itemType': TicketChangingFlightListRequestTravelerInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListShrinkRequest extends $tea.Model {
  arrCity?: string;
  depCity?: string;
  depDate?: string;
  disOrderId?: string;
  isVoluntary?: number;
  travelerInfoListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      depCity: 'dep_city',
      depDate: 'dep_date',
      disOrderId: 'dis_order_id',
      isVoluntary: 'is_voluntary',
      travelerInfoListShrink: 'traveler_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      depCity: 'string',
      depDate: 'string',
      disOrderId: 'string',
      isVoluntary: 'number',
      travelerInfoListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: TicketChangingFlightListResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: TicketChangingFlightListResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TicketChangingFlightListResponseBody;
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
      body: TicketChangingFlightListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingPayHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripCorpToken: 'x-acs-btrip-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingPayRequest extends $tea.Model {
  corpPayPrice?: number;
  disOrderId?: string;
  disSubOrderId?: string;
  extra?: { [key: string]: string };
  personalPayPrice?: number;
  totalPayPrice?: number;
  static names(): { [key: string]: string } {
    return {
      corpPayPrice: 'corp_pay_price',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      extra: 'extra',
      personalPayPrice: 'personal_pay_price',
      totalPayPrice: 'total_pay_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpPayPrice: 'number',
      disOrderId: 'string',
      disSubOrderId: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      personalPayPrice: 'number',
      totalPayPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingPayShrinkRequest extends $tea.Model {
  corpPayPrice?: number;
  disOrderId?: string;
  disSubOrderId?: string;
  extraShrink?: string;
  personalPayPrice?: number;
  totalPayPrice?: number;
  static names(): { [key: string]: string } {
    return {
      corpPayPrice: 'corp_pay_price',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      extraShrink: 'extra',
      personalPayPrice: 'personal_pay_price',
      totalPayPrice: 'total_pay_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpPayPrice: 'number',
      disOrderId: 'string',
      disSubOrderId: 'string',
      extraShrink: 'string',
      personalPayPrice: 'number',
      totalPayPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingPayResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: TicketChangingPayResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: TicketChangingPayResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingPayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TicketChangingPayResponseBody;
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
      body: TicketChangingPayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainBillSettlementQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainBillSettlementQueryRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  periodEnd?: string;
  periodStart?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'page_no',
      pageSize: 'page_size',
      periodEnd: 'period_end',
      periodStart: 'period_start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      periodEnd: 'string',
      periodStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainBillSettlementQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: TrainBillSettlementQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: TrainBillSettlementQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainBillSettlementQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TrainBillSettlementQueryResponseBody;
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
      body: TrainBillSettlementQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainExceedApplyQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainExceedApplyQueryRequest extends $tea.Model {
  applyId?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainExceedApplyQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: TrainExceedApplyQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: TrainExceedApplyQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainExceedApplyQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TrainExceedApplyQueryResponseBody;
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
      body: TrainExceedApplyQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryRequest extends $tea.Model {
  allApply?: boolean;
  applyId?: number;
  departId?: string;
  endTime?: string;
  page?: number;
  pageSize?: number;
  startTime?: string;
  thirdpartApplyId?: string;
  updateEndTime?: string;
  updateStartTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      allApply: 'all_apply',
      applyId: 'apply_id',
      departId: 'depart_id',
      endTime: 'end_time',
      page: 'page',
      pageSize: 'page_size',
      startTime: 'start_time',
      thirdpartApplyId: 'thirdpart_apply_id',
      updateEndTime: 'update_end_time',
      updateStartTime: 'update_start_time',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allApply: 'boolean',
      applyId: 'number',
      departId: 'string',
      endTime: 'string',
      page: 'number',
      pageSize: 'number',
      startTime: 'string',
      thirdpartApplyId: 'string',
      updateEndTime: 'string',
      updateStartTime: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: TrainOrderListQueryResponseBodyModule[];
  pageInfo?: TrainOrderListQueryResponseBodyPageInfo;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      pageInfo: 'page_info',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': TrainOrderListQueryResponseBodyModule },
      pageInfo: TrainOrderListQueryResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TrainOrderListQueryResponseBody;
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
      body: TrainOrderListQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryRequest extends $tea.Model {
  orderId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: TrainOrderQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: TrainOrderQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TrainOrderQueryResponseBody;
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
      body: TrainOrderQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainStationSearchHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainStationSearchRequest extends $tea.Model {
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainStationSearchResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: TrainStationSearchResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: TrainStationSearchResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainStationSearchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TrainStationSearchResponseBody;
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
      body: TrainStationSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserQueryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsBtripSoCorpToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsBtripSoCorpToken: 'x-acs-btrip-so-corp-token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsBtripSoCorpToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserQueryRequest extends $tea.Model {
  modifiedTimeGreaterOrEqualThan?: string;
  pageSize?: number;
  pageToken?: string;
  thirdPartJobNo?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTimeGreaterOrEqualThan: 'modified_time_greater_or_equal_than',
      pageSize: 'page_size',
      pageToken: 'page_token',
      thirdPartJobNo: 'third_part_job_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTimeGreaterOrEqualThan: 'string',
      pageSize: 'number',
      pageToken: 'string',
      thirdPartJobNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserQueryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  module?: UserQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: UserQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UserQueryResponseBody;
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
      body: UserQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessTokenResponseBodyData extends $tea.Model {
  expire?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expire: 'expire',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expire: 'number',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessTokenResponseBodyModule extends $tea.Model {
  expire?: number;
  start?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expire: 'expire',
      start: 'start',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expire: 'number',
      start: 'number',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddressGetResponseBodyModule extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AirportSearchResponseBodyModuleCities extends $tea.Model {
  code?: string;
  distance?: number;
  name?: string;
  travelName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      distance: 'distance',
      name: 'name',
      travelName: 'travel_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      distance: 'number',
      name: 'string',
      travelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AirportSearchResponseBodyModule extends $tea.Model {
  cities?: AirportSearchResponseBodyModuleCities[];
  nearby?: boolean;
  static names(): { [key: string]: string } {
    return {
      cities: 'cities',
      nearby: 'nearby',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cities: { 'type': 'array', 'itemType': AirportSearchResponseBodyModuleCities },
      nearby: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllBaseCityInfoQueryResponseBodyModuleAllCityBaseInfoList extends $tea.Model {
  adcode?: string;
  cityCode?: string;
  cityLevel?: string;
  cityName?: string;
  cnNameTree?: string;
  id?: number;
  otherNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      adcode: 'adcode',
      cityCode: 'city_code',
      cityLevel: 'city_level',
      cityName: 'city_name',
      cnNameTree: 'cn_name_tree',
      id: 'id',
      otherNameList: 'other_name_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adcode: 'string',
      cityCode: 'string',
      cityLevel: 'string',
      cityName: 'string',
      cnNameTree: 'string',
      id: 'number',
      otherNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllBaseCityInfoQueryResponseBodyModule extends $tea.Model {
  allCityBaseInfoList?: AllBaseCityInfoQueryResponseBodyModuleAllCityBaseInfoList[];
  static names(): { [key: string]: string } {
    return {
      allCityBaseInfoList: 'all_city_base_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCityBaseInfoList: { 'type': 'array', 'itemType': AllBaseCityInfoQueryResponseBodyModuleAllCityBaseInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestExternalTravelerList extends $tea.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestExternalTravelerStandardHotelCitys extends $tea.Model {
  cityCode?: string;
  cityName?: string;
  fee?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      fee: 'fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      fee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestExternalTravelerStandard extends $tea.Model {
  businessDiscount?: number;
  economyDiscount?: number;
  firstDiscount?: number;
  flightCabins?: string;
  hotelCitys?: ApplyAddRequestExternalTravelerStandardHotelCitys[];
  premiumEconomyDiscount?: number;
  reserveType?: number;
  trainSeats?: string;
  static names(): { [key: string]: string } {
    return {
      businessDiscount: 'business_discount',
      economyDiscount: 'economy_discount',
      firstDiscount: 'first_discount',
      flightCabins: 'flight_cabins',
      hotelCitys: 'hotel_citys',
      premiumEconomyDiscount: 'premium_economy_discount',
      reserveType: 'reserve_type',
      trainSeats: 'train_seats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessDiscount: 'number',
      economyDiscount: 'number',
      firstDiscount: 'number',
      flightCabins: 'string',
      hotelCitys: { 'type': 'array', 'itemType': ApplyAddRequestExternalTravelerStandardHotelCitys },
      premiumEconomyDiscount: 'number',
      reserveType: 'number',
      trainSeats: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestHotelShare extends $tea.Model {
  param?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      param: 'param',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      param: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestItineraryList extends $tea.Model {
  arrCity?: string;
  arrCityCode?: string;
  arrDate?: string;
  costCenterId?: number;
  depCity?: string;
  depCityCode?: string;
  depDate?: string;
  invoiceId?: number;
  itineraryId?: string;
  needHotel?: boolean;
  needTraffic?: boolean;
  projectCode?: string;
  projectTitle?: string;
  thirdPartInvoiceId?: string;
  thirdpartCostCenterId?: string;
  trafficType?: number;
  tripWay?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrDate: 'arr_date',
      costCenterId: 'cost_center_id',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      invoiceId: 'invoice_id',
      itineraryId: 'itinerary_id',
      needHotel: 'need_hotel',
      needTraffic: 'need_traffic',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      trafficType: 'traffic_type',
      tripWay: 'trip_way',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrCityCode: 'string',
      arrDate: 'string',
      costCenterId: 'number',
      depCity: 'string',
      depCityCode: 'string',
      depDate: 'string',
      invoiceId: 'number',
      itineraryId: 'string',
      needHotel: 'boolean',
      needTraffic: 'boolean',
      projectCode: 'string',
      projectTitle: 'string',
      thirdPartInvoiceId: 'string',
      thirdpartCostCenterId: 'string',
      trafficType: 'number',
      tripWay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestItinerarySetList extends $tea.Model {
  arrDate?: string;
  cityCodeSet?: string;
  citySet?: string;
  costCenterId?: number;
  depDate?: string;
  invoiceId?: number;
  itineraryId?: string;
  projectCode?: string;
  projectTitle?: string;
  thirdPartInvoiceId?: string;
  thirdpartCostCenterId?: string;
  trafficType?: number;
  static names(): { [key: string]: string } {
    return {
      arrDate: 'arr_date',
      cityCodeSet: 'city_code_set',
      citySet: 'city_set',
      costCenterId: 'cost_center_id',
      depDate: 'dep_date',
      invoiceId: 'invoice_id',
      itineraryId: 'itinerary_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      trafficType: 'traffic_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrDate: 'string',
      cityCodeSet: 'string',
      citySet: 'string',
      costCenterId: 'number',
      depDate: 'string',
      invoiceId: 'number',
      itineraryId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      thirdPartInvoiceId: 'string',
      thirdpartCostCenterId: 'string',
      trafficType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerList extends $tea.Model {
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardHotelCitys extends $tea.Model {
  cityCode?: string;
  cityName?: string;
  fee?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      fee: 'fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      fee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandard extends $tea.Model {
  businessDiscount?: number;
  economyDiscount?: number;
  firstDiscount?: number;
  flightCabins?: string;
  hotelCitys?: ApplyAddRequestTravelerStandardHotelCitys[];
  premiumEconomyDiscount?: number;
  reserveType?: number;
  trainSeats?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      businessDiscount: 'business_discount',
      economyDiscount: 'economy_discount',
      firstDiscount: 'first_discount',
      flightCabins: 'flight_cabins',
      hotelCitys: 'hotel_citys',
      premiumEconomyDiscount: 'premium_economy_discount',
      reserveType: 'reserve_type',
      trainSeats: 'train_seats',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessDiscount: 'number',
      economyDiscount: 'number',
      firstDiscount: 'number',
      flightCabins: 'string',
      hotelCitys: { 'type': 'array', 'itemType': ApplyAddRequestTravelerStandardHotelCitys },
      premiumEconomyDiscount: 'number',
      reserveType: 'number',
      trainSeats: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddResponseBodyModule extends $tea.Model {
  applyId?: number;
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyListQueryResponseBodyModuleListApproverList extends $tea.Model {
  note?: string;
  operateTime?: string;
  order?: number;
  status?: number;
  statusDesc?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      note: 'note',
      operateTime: 'operate_time',
      order: 'order',
      status: 'status',
      statusDesc: 'status_desc',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      operateTime: 'string',
      order: 'number',
      status: 'number',
      statusDesc: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyListQueryResponseBodyModuleListExternalTravelerList extends $tea.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyListQueryResponseBodyModuleListItineraryList extends $tea.Model {
  arrCity?: string;
  arrDate?: string;
  costCenterName?: string;
  depCity?: string;
  depDate?: string;
  invoiceName?: string;
  itineraryId?: string;
  projectCode?: string;
  projectTitle?: string;
  trafficType?: number;
  tripWay?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrDate: 'arr_date',
      costCenterName: 'cost_center_name',
      depCity: 'dep_city',
      depDate: 'dep_date',
      invoiceName: 'invoice_name',
      itineraryId: 'itinerary_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      trafficType: 'traffic_type',
      tripWay: 'trip_way',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrDate: 'string',
      costCenterName: 'string',
      depCity: 'string',
      depDate: 'string',
      invoiceName: 'string',
      itineraryId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      trafficType: 'number',
      tripWay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyListQueryResponseBodyModuleListItinerarySetList extends $tea.Model {
  arrDate?: string;
  cityCodeSet?: string;
  citySet?: string;
  costCenterName?: string;
  depDate?: string;
  invoiceName?: string;
  itineraryId?: string;
  projectCode?: string;
  projectTitle?: string;
  trafficType?: number;
  static names(): { [key: string]: string } {
    return {
      arrDate: 'arr_date',
      cityCodeSet: 'city_code_set',
      citySet: 'city_set',
      costCenterName: 'cost_center_name',
      depDate: 'dep_date',
      invoiceName: 'invoice_name',
      itineraryId: 'itinerary_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      trafficType: 'traffic_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrDate: 'string',
      cityCodeSet: 'string',
      citySet: 'string',
      costCenterName: 'string',
      depDate: 'string',
      invoiceName: 'string',
      itineraryId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      trafficType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyListQueryResponseBodyModuleListTravelerList extends $tea.Model {
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyListQueryResponseBodyModuleList extends $tea.Model {
  applyShowId?: string;
  approverList?: ApplyListQueryResponseBodyModuleListApproverList[];
  corpId?: string;
  corpName?: string;
  departId?: string;
  departName?: string;
  externalTravelerList?: ApplyListQueryResponseBodyModuleListExternalTravelerList[];
  flowCode?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  itineraryList?: ApplyListQueryResponseBodyModuleListItineraryList[];
  itineraryRule?: number;
  itinerarySetList?: ApplyListQueryResponseBodyModuleListItinerarySetList[];
  status?: number;
  statusDesc?: string;
  thirdpartBusinessId?: string;
  thirdpartId?: string;
  travelerList?: ApplyListQueryResponseBodyModuleListTravelerList[];
  tripCause?: string;
  tripDay?: number;
  tripTitle?: string;
  type?: number;
  unionNo?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyShowId: 'apply_show_id',
      approverList: 'approver_list',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      externalTravelerList: 'external_traveler_list',
      flowCode: 'flow_code',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      itineraryList: 'itinerary_list',
      itineraryRule: 'itinerary_rule',
      itinerarySetList: 'itinerary_set_list',
      status: 'status',
      statusDesc: 'status_desc',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartId: 'thirdpart_id',
      travelerList: 'traveler_list',
      tripCause: 'trip_cause',
      tripDay: 'trip_day',
      tripTitle: 'trip_title',
      type: 'type',
      unionNo: 'union_no',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyShowId: 'string',
      approverList: { 'type': 'array', 'itemType': ApplyListQueryResponseBodyModuleListApproverList },
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      externalTravelerList: { 'type': 'array', 'itemType': ApplyListQueryResponseBodyModuleListExternalTravelerList },
      flowCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      itineraryList: { 'type': 'array', 'itemType': ApplyListQueryResponseBodyModuleListItineraryList },
      itineraryRule: 'number',
      itinerarySetList: { 'type': 'array', 'itemType': ApplyListQueryResponseBodyModuleListItinerarySetList },
      status: 'number',
      statusDesc: 'string',
      thirdpartBusinessId: 'string',
      thirdpartId: 'string',
      travelerList: { 'type': 'array', 'itemType': ApplyListQueryResponseBodyModuleListTravelerList },
      tripCause: 'string',
      tripDay: 'number',
      tripTitle: 'string',
      type: 'number',
      unionNo: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyRequestExternalTravelerList extends $tea.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyRequestExternalTravelerStandardHotelCitys extends $tea.Model {
  cityCode?: string;
  cityName?: string;
  fee?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      fee: 'fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      fee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyRequestExternalTravelerStandard extends $tea.Model {
  businessDiscount?: number;
  economyDiscount?: number;
  firstDiscount?: number;
  flightCabins?: string;
  hotelCitys?: ApplyModifyRequestExternalTravelerStandardHotelCitys[];
  premiumEconomyDiscount?: number;
  reserveType?: number;
  trainSeats?: string;
  static names(): { [key: string]: string } {
    return {
      businessDiscount: 'business_discount',
      economyDiscount: 'economy_discount',
      firstDiscount: 'first_discount',
      flightCabins: 'flight_cabins',
      hotelCitys: 'hotel_citys',
      premiumEconomyDiscount: 'premium_economy_discount',
      reserveType: 'reserve_type',
      trainSeats: 'train_seats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessDiscount: 'number',
      economyDiscount: 'number',
      firstDiscount: 'number',
      flightCabins: 'string',
      hotelCitys: { 'type': 'array', 'itemType': ApplyModifyRequestExternalTravelerStandardHotelCitys },
      premiumEconomyDiscount: 'number',
      reserveType: 'number',
      trainSeats: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyRequestHotelShare extends $tea.Model {
  param?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      param: 'param',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      param: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyRequestItineraryList extends $tea.Model {
  arrCity?: string;
  arrCityCode?: string;
  arrDate?: string;
  costCenterId?: number;
  depCity?: string;
  depCityCode?: string;
  depDate?: string;
  invoiceId?: number;
  itineraryId?: string;
  needHotel?: boolean;
  needTraffic?: boolean;
  projectCode?: string;
  projectTitle?: string;
  thirdPartInvoiceId?: string;
  thirdpartCostCenterId?: string;
  trafficType?: number;
  tripWay?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrDate: 'arr_date',
      costCenterId: 'cost_center_id',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      invoiceId: 'invoice_id',
      itineraryId: 'itinerary_id',
      needHotel: 'need_hotel',
      needTraffic: 'need_traffic',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      trafficType: 'traffic_type',
      tripWay: 'trip_way',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrCityCode: 'string',
      arrDate: 'string',
      costCenterId: 'number',
      depCity: 'string',
      depCityCode: 'string',
      depDate: 'string',
      invoiceId: 'number',
      itineraryId: 'string',
      needHotel: 'boolean',
      needTraffic: 'boolean',
      projectCode: 'string',
      projectTitle: 'string',
      thirdPartInvoiceId: 'string',
      thirdpartCostCenterId: 'string',
      trafficType: 'number',
      tripWay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyRequestItinerarySetList extends $tea.Model {
  arrDate?: string;
  cityCodeSet?: string;
  citySet?: string;
  costCenterId?: number;
  depDate?: string;
  invoiceId?: number;
  itineraryId?: string;
  projectCode?: string;
  projectTitle?: string;
  thirdPartInvoiceId?: string;
  thirdpartCostCenterId?: string;
  trafficType?: number;
  static names(): { [key: string]: string } {
    return {
      arrDate: 'arr_date',
      cityCodeSet: 'city_code_set',
      citySet: 'city_set',
      costCenterId: 'cost_center_id',
      depDate: 'dep_date',
      invoiceId: 'invoice_id',
      itineraryId: 'itinerary_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      trafficType: 'traffic_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrDate: 'string',
      cityCodeSet: 'string',
      citySet: 'string',
      costCenterId: 'number',
      depDate: 'string',
      invoiceId: 'number',
      itineraryId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      thirdPartInvoiceId: 'string',
      thirdpartCostCenterId: 'string',
      trafficType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyRequestTravelerList extends $tea.Model {
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyRequestTravelerStandardHotelCitys extends $tea.Model {
  cityCode?: string;
  cityName?: string;
  fee?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      fee: 'fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      fee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyRequestTravelerStandard extends $tea.Model {
  businessDiscount?: number;
  economyDiscount?: number;
  firstDiscount?: number;
  flightCabins?: string;
  hotelCitys?: ApplyModifyRequestTravelerStandardHotelCitys[];
  premiumEconomyDiscount?: number;
  reserveType?: number;
  trainSeats?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      businessDiscount: 'business_discount',
      economyDiscount: 'economy_discount',
      firstDiscount: 'first_discount',
      flightCabins: 'flight_cabins',
      hotelCitys: 'hotel_citys',
      premiumEconomyDiscount: 'premium_economy_discount',
      reserveType: 'reserve_type',
      trainSeats: 'train_seats',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessDiscount: 'number',
      economyDiscount: 'number',
      firstDiscount: 'number',
      flightCabins: 'string',
      hotelCitys: { 'type': 'array', 'itemType': ApplyModifyRequestTravelerStandardHotelCitys },
      premiumEconomyDiscount: 'number',
      reserveType: 'number',
      trainSeats: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyResponseBodyModule extends $tea.Model {
  applyId?: number;
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryResponseBodyModuleApproverList extends $tea.Model {
  note?: string;
  operateTime?: string;
  order?: number;
  status?: number;
  statusDesc?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      note: 'note',
      operateTime: 'operate_time',
      order: 'order',
      status: 'status',
      statusDesc: 'status_desc',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      operateTime: 'string',
      order: 'number',
      status: 'number',
      statusDesc: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryResponseBodyModuleExternalTravelerListHotelCitys extends $tea.Model {
  cityCode?: string;
  cityName?: string;
  fee?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      fee: 'fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      fee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryResponseBodyModuleExternalTravelerList extends $tea.Model {
  businessDiscount?: number;
  economyDiscount?: number;
  firstDiscount?: number;
  flightCabins?: string;
  hotelCitys?: ApplyQueryResponseBodyModuleExternalTravelerListHotelCitys[];
  premiumEconomyDiscount?: number;
  reserveType?: number;
  trainSeats?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      businessDiscount: 'business_discount',
      economyDiscount: 'economy_discount',
      firstDiscount: 'first_discount',
      flightCabins: 'flight_cabins',
      hotelCitys: 'hotel_citys',
      premiumEconomyDiscount: 'premium_economy_discount',
      reserveType: 'reserve_type',
      trainSeats: 'train_seats',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessDiscount: 'number',
      economyDiscount: 'number',
      firstDiscount: 'number',
      flightCabins: 'string',
      hotelCitys: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleExternalTravelerListHotelCitys },
      premiumEconomyDiscount: 'number',
      reserveType: 'number',
      trainSeats: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryResponseBodyModuleHotelShare extends $tea.Model {
  param?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      param: 'param',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      param: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryResponseBodyModuleItineraryList extends $tea.Model {
  arrCity?: string;
  arrCityCode?: string;
  arrDate?: string;
  costCenterName?: string;
  depCity?: string;
  depCityCode?: string;
  depDate?: string;
  invoiceName?: string;
  itineraryId?: string;
  projectCode?: string;
  projectTitle?: string;
  trafficType?: number;
  tripWay?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrDate: 'arr_date',
      costCenterName: 'cost_center_name',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      invoiceName: 'invoice_name',
      itineraryId: 'itinerary_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      trafficType: 'traffic_type',
      tripWay: 'trip_way',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrCityCode: 'string',
      arrDate: 'string',
      costCenterName: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depDate: 'string',
      invoiceName: 'string',
      itineraryId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      trafficType: 'number',
      tripWay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryResponseBodyModuleItinerarySetList extends $tea.Model {
  arrDate?: string;
  cityCodeSet?: string;
  citySet?: string;
  costCenterName?: string;
  depDate?: string;
  invoiceName?: string;
  itineraryId?: string;
  projectCode?: string;
  projectTitle?: string;
  trafficType?: number;
  static names(): { [key: string]: string } {
    return {
      arrDate: 'arr_date',
      cityCodeSet: 'city_code_set',
      citySet: 'city_set',
      costCenterName: 'cost_center_name',
      depDate: 'dep_date',
      invoiceName: 'invoice_name',
      itineraryId: 'itinerary_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      trafficType: 'traffic_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrDate: 'string',
      cityCodeSet: 'string',
      citySet: 'string',
      costCenterName: 'string',
      depDate: 'string',
      invoiceName: 'string',
      itineraryId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      trafficType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryResponseBodyModuleTravelerListHotelCitys extends $tea.Model {
  cityCode?: string;
  cityName?: string;
  fee?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      fee: 'fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      fee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryResponseBodyModuleTravelerList extends $tea.Model {
  businessDiscount?: number;
  economyDiscount?: number;
  firstDiscount?: number;
  flightCabins?: string;
  hotelCitys?: ApplyQueryResponseBodyModuleTravelerListHotelCitys[];
  premiumEconomyDiscount?: number;
  reserveType?: number;
  trainSeats?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      businessDiscount: 'business_discount',
      economyDiscount: 'economy_discount',
      firstDiscount: 'first_discount',
      flightCabins: 'flight_cabins',
      hotelCitys: 'hotel_citys',
      premiumEconomyDiscount: 'premium_economy_discount',
      reserveType: 'reserve_type',
      trainSeats: 'train_seats',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessDiscount: 'number',
      economyDiscount: 'number',
      firstDiscount: 'number',
      flightCabins: 'string',
      hotelCitys: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleTravelerListHotelCitys },
      premiumEconomyDiscount: 'number',
      reserveType: 'number',
      trainSeats: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryResponseBodyModule extends $tea.Model {
  applyShowId?: string;
  approverList?: ApplyQueryResponseBodyModuleApproverList[];
  budget?: number;
  budgetMerge?: number;
  corpId?: string;
  corpName?: string;
  departId?: string;
  departName?: string;
  externalTravelerList?: ApplyQueryResponseBodyModuleExternalTravelerList[];
  flightBudget?: number;
  gmtCreate?: string;
  gmtModified?: string;
  hotelBudget?: number;
  hotelShare?: ApplyQueryResponseBodyModuleHotelShare;
  id?: number;
  itineraryList?: ApplyQueryResponseBodyModuleItineraryList[];
  itineraryRule?: number;
  itinerarySetList?: ApplyQueryResponseBodyModuleItinerarySetList[];
  limitTraveler?: number;
  status?: number;
  statusDesc?: string;
  thirdpartBusinessId?: string;
  thirdpartId?: string;
  togetherBookRule?: number;
  trainBudget?: number;
  travelerList?: ApplyQueryResponseBodyModuleTravelerList[];
  tripCause?: string;
  tripDay?: number;
  tripTitle?: string;
  type?: number;
  unionNo?: string;
  userId?: string;
  userName?: string;
  vehicleBudget?: number;
  static names(): { [key: string]: string } {
    return {
      applyShowId: 'apply_show_id',
      approverList: 'approver_list',
      budget: 'budget',
      budgetMerge: 'budget_merge',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      externalTravelerList: 'external_traveler_list',
      flightBudget: 'flight_budget',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      hotelBudget: 'hotel_budget',
      hotelShare: 'hotel_share',
      id: 'id',
      itineraryList: 'itinerary_list',
      itineraryRule: 'itinerary_rule',
      itinerarySetList: 'itinerary_set_list',
      limitTraveler: 'limit_traveler',
      status: 'status',
      statusDesc: 'status_desc',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartId: 'thirdpart_id',
      togetherBookRule: 'together_book_rule',
      trainBudget: 'train_budget',
      travelerList: 'traveler_list',
      tripCause: 'trip_cause',
      tripDay: 'trip_day',
      tripTitle: 'trip_title',
      type: 'type',
      unionNo: 'union_no',
      userId: 'user_id',
      userName: 'user_name',
      vehicleBudget: 'vehicle_budget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyShowId: 'string',
      approverList: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleApproverList },
      budget: 'number',
      budgetMerge: 'number',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      externalTravelerList: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleExternalTravelerList },
      flightBudget: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      hotelBudget: 'number',
      hotelShare: ApplyQueryResponseBodyModuleHotelShare,
      id: 'number',
      itineraryList: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleItineraryList },
      itineraryRule: 'number',
      itinerarySetList: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleItinerarySetList },
      limitTraveler: 'number',
      status: 'number',
      statusDesc: 'string',
      thirdpartBusinessId: 'string',
      thirdpartId: 'string',
      togetherBookRule: 'number',
      trainBudget: 'number',
      travelerList: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleTravelerList },
      tripCause: 'string',
      tripDay: 'number',
      tripTitle: 'string',
      type: 'number',
      unionNo: 'string',
      userId: 'string',
      userName: 'string',
      vehicleBudget: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyQueryResponseBodyApplyListApproverList extends $tea.Model {
  note?: string;
  operateTime?: string;
  order?: number;
  status?: number;
  statusDesc?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      note: 'note',
      operateTime: 'operate_time',
      order: 'order',
      status: 'status',
      statusDesc: 'status_desc',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      operateTime: 'string',
      order: 'number',
      status: 'number',
      statusDesc: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyQueryResponseBodyApplyListItineraryList extends $tea.Model {
  arrCity?: string;
  arrCityCode?: string;
  arrDate?: string;
  costCenterId?: number;
  costCenterName?: string;
  depCity?: string;
  depCityCode?: string;
  depDate?: string;
  invoiceId?: number;
  invoiceName?: string;
  itineraryId?: string;
  projectCode?: string;
  projectTitle?: string;
  trafficType?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrDate: 'arr_date',
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      invoiceId: 'invoice_id',
      invoiceName: 'invoice_name',
      itineraryId: 'itinerary_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      trafficType: 'traffic_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrCityCode: 'string',
      arrDate: 'string',
      costCenterId: 'number',
      costCenterName: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depDate: 'string',
      invoiceId: 'number',
      invoiceName: 'string',
      itineraryId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      trafficType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyQueryResponseBodyApplyList extends $tea.Model {
  approverList?: CarApplyQueryResponseBodyApplyListApproverList[];
  departId?: string;
  departName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  itineraryList?: CarApplyQueryResponseBodyApplyListItineraryList[];
  status?: number;
  statusDesc?: string;
  thirdpartId?: string;
  tripCause?: string;
  tripTitle?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      approverList: 'approver_list',
      departId: 'depart_id',
      departName: 'depart_name',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      itineraryList: 'itinerary_list',
      status: 'status',
      statusDesc: 'status_desc',
      thirdpartId: 'thirdpart_id',
      tripCause: 'trip_cause',
      tripTitle: 'trip_title',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approverList: { 'type': 'array', 'itemType': CarApplyQueryResponseBodyApplyListApproverList },
      departId: 'string',
      departName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      itineraryList: { 'type': 'array', 'itemType': CarApplyQueryResponseBodyApplyListItineraryList },
      status: 'number',
      statusDesc: 'string',
      thirdpartId: 'string',
      tripCause: 'string',
      tripTitle: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarBillSettlementQueryResponseBodyModuleDataList extends $tea.Model {
  alipayTradeNo?: string;
  applyId?: string;
  arrCity?: string;
  arrDate?: string;
  arrLocation?: string;
  arrTime?: string;
  billRecordTime?: string;
  bookTime?: string;
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  businessCategory?: string;
  capitalDirection?: string;
  carLevel?: string;
  cascadeDepartment?: string;
  costCenter?: string;
  costCenterNumber?: string;
  coupon?: number;
  couponPrice?: number;
  department?: string;
  departmentId?: string;
  deptCity?: string;
  deptDate?: string;
  deptLocation?: string;
  deptTime?: string;
  estimateDriveDistance?: string;
  estimatePrice?: number;
  feeType?: string;
  index?: string;
  invoiceTitle?: string;
  memo?: string;
  orderId?: string;
  orderPrice?: number;
  overApplyId?: string;
  personSettleFee?: number;
  primaryId?: number;
  projectCode?: string;
  projectName?: string;
  providerName?: string;
  realDriveDistance?: string;
  realFromAddr?: string;
  realToAddr?: string;
  remark?: string;
  serviceFee?: number;
  settlementFee?: number;
  settlementGrantFee?: number;
  settlementTime?: string;
  settlementType?: string;
  specialOrder?: string;
  specialReason?: string;
  status?: number;
  subOrderId?: string;
  travelerId?: string;
  travelerJobNo?: string;
  travelerName?: string;
  userConfirmDesc?: string;
  voucherType?: number;
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      applyId: 'apply_id',
      arrCity: 'arr_city',
      arrDate: 'arr_date',
      arrLocation: 'arr_location',
      arrTime: 'arr_time',
      billRecordTime: 'bill_record_time',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      businessCategory: 'business_category',
      capitalDirection: 'capital_direction',
      carLevel: 'car_level',
      cascadeDepartment: 'cascade_department',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      coupon: 'coupon',
      couponPrice: 'coupon_price',
      department: 'department',
      departmentId: 'department_id',
      deptCity: 'dept_city',
      deptDate: 'dept_date',
      deptLocation: 'dept_location',
      deptTime: 'dept_time',
      estimateDriveDistance: 'estimate_drive_distance',
      estimatePrice: 'estimate_price',
      feeType: 'fee_type',
      index: 'index',
      invoiceTitle: 'invoice_title',
      memo: 'memo',
      orderId: 'order_id',
      orderPrice: 'order_price',
      overApplyId: 'over_apply_id',
      personSettleFee: 'person_settle_fee',
      primaryId: 'primary_id',
      projectCode: 'project_code',
      projectName: 'project_name',
      providerName: 'provider_name',
      realDriveDistance: 'real_drive_distance',
      realFromAddr: 'real_from_addr',
      realToAddr: 'real_to_addr',
      remark: 'remark',
      serviceFee: 'service_fee',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      specialOrder: 'special_order',
      specialReason: 'special_reason',
      status: 'status',
      subOrderId: 'sub_order_id',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerName: 'traveler_name',
      userConfirmDesc: 'user_confirm_desc',
      voucherType: 'voucher_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayTradeNo: 'string',
      applyId: 'string',
      arrCity: 'string',
      arrDate: 'string',
      arrLocation: 'string',
      arrTime: 'string',
      billRecordTime: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      businessCategory: 'string',
      capitalDirection: 'string',
      carLevel: 'string',
      cascadeDepartment: 'string',
      costCenter: 'string',
      costCenterNumber: 'string',
      coupon: 'number',
      couponPrice: 'number',
      department: 'string',
      departmentId: 'string',
      deptCity: 'string',
      deptDate: 'string',
      deptLocation: 'string',
      deptTime: 'string',
      estimateDriveDistance: 'string',
      estimatePrice: 'number',
      feeType: 'string',
      index: 'string',
      invoiceTitle: 'string',
      memo: 'string',
      orderId: 'string',
      orderPrice: 'number',
      overApplyId: 'string',
      personSettleFee: 'number',
      primaryId: 'number',
      projectCode: 'string',
      projectName: 'string',
      providerName: 'string',
      realDriveDistance: 'string',
      realFromAddr: 'string',
      realToAddr: 'string',
      remark: 'string',
      serviceFee: 'number',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      specialOrder: 'string',
      specialReason: 'string',
      status: 'number',
      subOrderId: 'string',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerName: 'string',
      userConfirmDesc: 'string',
      voucherType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarBillSettlementQueryResponseBodyModule extends $tea.Model {
  category?: number;
  corpId?: string;
  dataList?: CarBillSettlementQueryResponseBodyModuleDataList[];
  periodEnd?: string;
  periodStart?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      corpId: 'corp_id',
      dataList: 'data_list',
      periodEnd: 'period_end',
      periodStart: 'period_start',
      totalNum: 'total_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      corpId: 'string',
      dataList: { 'type': 'array', 'itemType': CarBillSettlementQueryResponseBodyModuleDataList },
      periodEnd: 'string',
      periodStart: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderListQueryResponseBodyModulePriceInfoList extends $tea.Model {
  categoryCode?: number;
  categoryType?: number;
  gmtCreate?: string;
  passengerName?: string;
  payType?: number;
  personPrice?: number;
  price?: number;
  tradeId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      categoryType: 'category_type',
      gmtCreate: 'gmt_create',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      personPrice: 'person_price',
      price: 'price',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      categoryType: 'number',
      gmtCreate: 'string',
      passengerName: 'string',
      payType: 'number',
      personPrice: 'number',
      price: 'number',
      tradeId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderListQueryResponseBodyModuleUserAffiliateList extends $tea.Model {
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderListQueryResponseBodyModule extends $tea.Model {
  applyId?: number;
  applyShowId?: string;
  btripTitle?: string;
  businessCategory?: string;
  cancelTime?: string;
  carInfo?: string;
  carLevel?: number;
  corpId?: string;
  corpName?: string;
  costCenterId?: number;
  costCenterName?: string;
  costCenterNumber?: string;
  deptId?: number;
  deptName?: string;
  driverConfirmTime?: string;
  estimatePrice?: number;
  fromAddress?: string;
  fromCityName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  invoiceId?: number;
  invoiceTitle?: string;
  isSpecial?: boolean;
  memo?: string;
  orderStatus?: number;
  passengerName?: string;
  payTime?: string;
  priceInfoList?: CarOrderListQueryResponseBodyModulePriceInfoList[];
  projectCode?: string;
  projectId?: number;
  projectTitle?: string;
  provider?: number;
  publishTime?: string;
  realFromAddress?: string;
  realFromCityName?: string;
  realToAddress?: string;
  realToCityName?: string;
  serviceType?: number;
  specialTypes?: string[];
  takenTime?: string;
  thirdpartApplyId?: string;
  thirdpartItineraryId?: string;
  toAddress?: string;
  toCityName?: string;
  travelDistance?: number;
  userAffiliateList?: CarOrderListQueryResponseBodyModuleUserAffiliateList[];
  userConfirm?: number;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      applyShowId: 'apply_show_id',
      btripTitle: 'btrip_title',
      businessCategory: 'business_category',
      cancelTime: 'cancel_time',
      carInfo: 'car_info',
      carLevel: 'car_level',
      corpId: 'corp_id',
      corpName: 'corp_name',
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      deptId: 'dept_id',
      deptName: 'dept_name',
      driverConfirmTime: 'driver_confirm_time',
      estimatePrice: 'estimate_price',
      fromAddress: 'from_address',
      fromCityName: 'from_city_name',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      invoiceId: 'invoice_id',
      invoiceTitle: 'invoice_title',
      isSpecial: 'is_special',
      memo: 'memo',
      orderStatus: 'order_status',
      passengerName: 'passenger_name',
      payTime: 'pay_time',
      priceInfoList: 'price_info_list',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      provider: 'provider',
      publishTime: 'publish_time',
      realFromAddress: 'real_from_address',
      realFromCityName: 'real_from_city_name',
      realToAddress: 'real_to_address',
      realToCityName: 'real_to_city_name',
      serviceType: 'service_type',
      specialTypes: 'special_types',
      takenTime: 'taken_time',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      toAddress: 'to_address',
      toCityName: 'to_city_name',
      travelDistance: 'travel_distance',
      userAffiliateList: 'user_affiliate_list',
      userConfirm: 'user_confirm',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      applyShowId: 'string',
      btripTitle: 'string',
      businessCategory: 'string',
      cancelTime: 'string',
      carInfo: 'string',
      carLevel: 'number',
      corpId: 'string',
      corpName: 'string',
      costCenterId: 'number',
      costCenterName: 'string',
      costCenterNumber: 'string',
      deptId: 'number',
      deptName: 'string',
      driverConfirmTime: 'string',
      estimatePrice: 'number',
      fromAddress: 'string',
      fromCityName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      invoiceId: 'number',
      invoiceTitle: 'string',
      isSpecial: 'boolean',
      memo: 'string',
      orderStatus: 'number',
      passengerName: 'string',
      payTime: 'string',
      priceInfoList: { 'type': 'array', 'itemType': CarOrderListQueryResponseBodyModulePriceInfoList },
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      provider: 'number',
      publishTime: 'string',
      realFromAddress: 'string',
      realFromCityName: 'string',
      realToAddress: 'string',
      realToCityName: 'string',
      serviceType: 'number',
      specialTypes: { 'type': 'array', 'itemType': 'string' },
      takenTime: 'string',
      thirdpartApplyId: 'string',
      thirdpartItineraryId: 'string',
      toAddress: 'string',
      toCityName: 'string',
      travelDistance: 'number',
      userAffiliateList: { 'type': 'array', 'itemType': CarOrderListQueryResponseBodyModuleUserAffiliateList },
      userConfirm: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderListQueryResponseBodyPageInfo extends $tea.Model {
  page?: number;
  pageSize?: number;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageSize: 'page_size',
      totalNumber: 'total_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderQueryResponseBodyModuleCarInfo extends $tea.Model {
  businessCategory?: string;
  cancelTime?: number;
  carInfo?: string;
  carLevel?: number;
  driverConfirmTime?: number;
  estimatePrice?: number;
  fromAddress?: string;
  fromCityName?: string;
  isSpecial?: boolean;
  memo?: string;
  payTime?: number;
  publishTime?: number;
  realFromAddress?: string;
  realFromCityName?: string;
  realToAddress?: string;
  realToCityName?: string;
  serviceType?: number;
  specialTypes?: string;
  takenTime?: number;
  toAddress?: string;
  toCityName?: string;
  travelDistance?: string;
  static names(): { [key: string]: string } {
    return {
      businessCategory: 'business_category',
      cancelTime: 'cancel_time',
      carInfo: 'car_info',
      carLevel: 'car_level',
      driverConfirmTime: 'driver_confirm_time',
      estimatePrice: 'estimate_price',
      fromAddress: 'from_address',
      fromCityName: 'from_city_name',
      isSpecial: 'is_special',
      memo: 'memo',
      payTime: 'pay_time',
      publishTime: 'publish_time',
      realFromAddress: 'real_from_address',
      realFromCityName: 'real_from_city_name',
      realToAddress: 'real_to_address',
      realToCityName: 'real_to_city_name',
      serviceType: 'service_type',
      specialTypes: 'special_types',
      takenTime: 'taken_time',
      toAddress: 'to_address',
      toCityName: 'to_city_name',
      travelDistance: 'travel_distance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategory: 'string',
      cancelTime: 'number',
      carInfo: 'string',
      carLevel: 'number',
      driverConfirmTime: 'number',
      estimatePrice: 'number',
      fromAddress: 'string',
      fromCityName: 'string',
      isSpecial: 'boolean',
      memo: 'string',
      payTime: 'number',
      publishTime: 'number',
      realFromAddress: 'string',
      realFromCityName: 'string',
      realToAddress: 'string',
      realToCityName: 'string',
      serviceType: 'number',
      specialTypes: 'string',
      takenTime: 'number',
      toAddress: 'string',
      toCityName: 'string',
      travelDistance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderQueryResponseBodyModuleInvoiceInfo extends $tea.Model {
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderQueryResponseBodyModuleOrderBaseInfo extends $tea.Model {
  applyId?: string;
  btripCause?: string;
  btripTitle?: string;
  corpId?: string;
  corpName?: string;
  departId?: string;
  departName?: string;
  gmtCreate?: number;
  gmtModified?: number;
  itineraryId?: string;
  orderId?: number;
  orderStatus?: number;
  subOrderId?: number;
  thirdDepartId?: string;
  thirdpartApplyId?: string;
  thirdpartItineraryId?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripCause: 'btrip_cause',
      btripTitle: 'btrip_title',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      itineraryId: 'itinerary_id',
      orderId: 'order_id',
      orderStatus: 'order_status',
      subOrderId: 'sub_order_id',
      thirdDepartId: 'third_depart_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripCause: 'string',
      btripTitle: 'string',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      itineraryId: 'string',
      orderId: 'number',
      orderStatus: 'number',
      subOrderId: 'number',
      thirdDepartId: 'string',
      thirdpartApplyId: 'string',
      thirdpartItineraryId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderQueryResponseBodyModulePassengerList extends $tea.Model {
  costCenterId?: number;
  costCenterName?: string;
  costCenterNumber?: string;
  projectCode?: string;
  projectId?: number;
  projectTitle?: string;
  thirdpartCostCenterId?: string;
  thirdpartProjectId?: string;
  userId?: string;
  userName?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartProjectId: 'thirdpart_project_id',
      userId: 'user_id',
      userName: 'user_name',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      costCenterName: 'string',
      costCenterNumber: 'string',
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartProjectId: 'string',
      userId: 'string',
      userName: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderQueryResponseBodyModulePriceInfoList extends $tea.Model {
  categoryCode?: number;
  gmtCreate?: number;
  payType?: number;
  personPrice?: number;
  price?: number;
  tradeId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      gmtCreate: 'gmt_create',
      payType: 'pay_type',
      personPrice: 'person_price',
      price: 'price',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      gmtCreate: 'number',
      payType: 'number',
      personPrice: 'number',
      price: 'number',
      tradeId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderQueryResponseBodyModule extends $tea.Model {
  carInfo?: CarOrderQueryResponseBodyModuleCarInfo;
  invoiceInfo?: CarOrderQueryResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: CarOrderQueryResponseBodyModuleOrderBaseInfo;
  passengerList?: CarOrderQueryResponseBodyModulePassengerList[];
  priceInfoList?: CarOrderQueryResponseBodyModulePriceInfoList[];
  static names(): { [key: string]: string } {
    return {
      carInfo: 'car_info',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerList: 'passenger_list',
      priceInfoList: 'price_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carInfo: CarOrderQueryResponseBodyModuleCarInfo,
      invoiceInfo: CarOrderQueryResponseBodyModuleInvoiceInfo,
      orderBaseInfo: CarOrderQueryResponseBodyModuleOrderBaseInfo,
      passengerList: { 'type': 'array', 'itemType': CarOrderQueryResponseBodyModulePassengerList },
      priceInfoList: { 'type': 'array', 'itemType': CarOrderQueryResponseBodyModulePriceInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CitySearchResponseBodyModuleCities extends $tea.Model {
  code?: string;
  name?: string;
  region?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      region: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CitySearchResponseBodyModule extends $tea.Model {
  cities?: CitySearchResponseBodyModuleCities[];
  static names(): { [key: string]: string } {
    return {
      cities: 'cities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cities: { 'type': 'array', 'itemType': CitySearchResponseBodyModuleCities },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonApplyQueryResponseBodyModule extends $tea.Model {
  applyId?: number;
  bizCategory?: number;
  cause?: string;
  corpId?: string;
  extendValue?: string;
  gmtCreate?: string;
  status?: number;
  thirdpartCorpId?: string;
  thirdpartId?: string;
  tripCause?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      bizCategory: 'biz_category',
      cause: 'cause',
      corpId: 'corp_id',
      extendValue: 'extend_value',
      gmtCreate: 'gmt_create',
      status: 'status',
      thirdpartCorpId: 'thirdpart_corp_id',
      thirdpartId: 'thirdpart_id',
      tripCause: 'trip_cause',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      bizCategory: 'number',
      cause: 'string',
      corpId: 'string',
      extendValue: 'string',
      gmtCreate: 'string',
      status: 'number',
      thirdpartCorpId: 'string',
      thirdpartId: 'string',
      tripCause: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpAuthLinkInfoQueryResponseBodyModuleLinkCorps extends $tea.Model {
  corpName?: string;
  openCorpId?: string;
  trueCorpId?: string;
  static names(): { [key: string]: string } {
    return {
      corpName: 'corp_name',
      openCorpId: 'open_corp_id',
      trueCorpId: 'true_corp_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpName: 'string',
      openCorpId: 'string',
      trueCorpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpAuthLinkInfoQueryResponseBodyModuleOrgCorp extends $tea.Model {
  corpName?: string;
  openCorpId?: string;
  trueCorpId?: string;
  static names(): { [key: string]: string } {
    return {
      corpName: 'corp_name',
      openCorpId: 'open_corp_id',
      trueCorpId: 'true_corp_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpName: 'string',
      openCorpId: 'string',
      trueCorpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpAuthLinkInfoQueryResponseBodyModule extends $tea.Model {
  linkCorps?: CorpAuthLinkInfoQueryResponseBodyModuleLinkCorps[];
  orgCorp?: CorpAuthLinkInfoQueryResponseBodyModuleOrgCorp;
  static names(): { [key: string]: string } {
    return {
      linkCorps: 'link_corps',
      orgCorp: 'org_corp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      linkCorps: { 'type': 'array', 'itemType': CorpAuthLinkInfoQueryResponseBodyModuleLinkCorps },
      orgCorp: CorpAuthLinkInfoQueryResponseBodyModuleOrgCorp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpTokenResponseBodyData extends $tea.Model {
  expire?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expire: 'expire',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expire: 'number',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CorpTokenResponseBodyModule extends $tea.Model {
  expire?: number;
  start?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expire: 'expire',
      start: 'start',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expire: 'number',
      start: 'number',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterQueryResponseBodyModuleEntityDOS extends $tea.Model {
  corpId?: string;
  entityId?: string;
  entityType?: string;
  name?: string;
  userNum?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corp_id',
      entityId: 'entity_id',
      entityType: 'entity_type',
      name: 'name',
      userNum: 'user_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      entityId: 'string',
      entityType: 'string',
      name: 'string',
      userNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterQueryResponseBodyModule extends $tea.Model {
  alipayNo?: string;
  corpId?: string;
  entityDOS?: CostCenterQueryResponseBodyModuleEntityDOS[];
  id?: number;
  number?: string;
  ruleCode?: number;
  scope?: number;
  thirdpartId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      alipayNo: 'alipay_no',
      corpId: 'corp_id',
      entityDOS: 'entity_d_o_s',
      id: 'id',
      number: 'number',
      ruleCode: 'rule_code',
      scope: 'scope',
      thirdpartId: 'thirdpart_id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayNo: 'string',
      corpId: 'string',
      entityDOS: { 'type': 'array', 'itemType': CostCenterQueryResponseBodyModuleEntityDOS },
      id: 'number',
      number: 'string',
      ruleCode: 'number',
      scope: 'number',
      thirdpartId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostCenterSaveResponseBodyModule extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DepartmentSaveRequestDepartList extends $tea.Model {
  departId?: number;
  departName?: string;
  departPid?: number;
  managerIds?: string;
  status?: number;
  thirdDepartId?: string;
  thirdDepartPid?: string;
  static names(): { [key: string]: string } {
    return {
      departId: 'depart_id',
      departName: 'depart_name',
      departPid: 'depart_pid',
      managerIds: 'manager_ids',
      status: 'status',
      thirdDepartId: 'third_depart_id',
      thirdDepartPid: 'third_depart_pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departId: 'number',
      departName: 'string',
      departPid: 'number',
      managerIds: 'string',
      status: 'number',
      thirdDepartId: 'string',
      thirdDepartPid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityAddRequestEntityDOList extends $tea.Model {
  entityId?: string;
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'entity_id',
      entityType: 'entity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityAddResponseBodyModule extends $tea.Model {
  addNum?: number;
  selectedUserNum?: number;
  static names(): { [key: string]: string } {
    return {
      addNum: 'add_num',
      selectedUserNum: 'selected_user_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addNum: 'number',
      selectedUserNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityDeleteRequestEntityDOList extends $tea.Model {
  entityId?: string;
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'entity_id',
      entityType: 'entity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityDeleteResponseBodyModule extends $tea.Model {
  removeNum?: number;
  selectedUserNum?: number;
  static names(): { [key: string]: string } {
    return {
      removeNum: 'remove_num',
      selectedUserNum: 'selected_user_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removeNum: 'number',
      selectedUserNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntitySetRequestEntityDOList extends $tea.Model {
  entityId?: string;
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'entity_id',
      entityType: 'entity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntitySetResponseBodyModule extends $tea.Model {
  addNum?: number;
  removeNum?: number;
  selectedUserNum?: number;
  static names(): { [key: string]: string } {
    return {
      addNum: 'add_num',
      removeNum: 'remove_num',
      selectedUserNum: 'selected_user_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addNum: 'number',
      removeNum: 'number',
      selectedUserNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryResponseBodyModuleHotelFeeDetail extends $tea.Model {
  city?: string;
  criterion?: number;
  itineraryId?: string;
  total?: number;
  tripDays?: number;
  static names(): { [key: string]: string } {
    return {
      city: 'city',
      criterion: 'criterion',
      itineraryId: 'itinerary_id',
      total: 'total',
      tripDays: 'trip_days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      criterion: 'number',
      itineraryId: 'string',
      total: 'number',
      tripDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesCheapest extends $tea.Model {
  arrTime?: string;
  depTime?: string;
  fee?: number;
  seatGrade?: string;
  vehicleNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      depTime: 'dep_time',
      fee: 'fee',
      seatGrade: 'seat_grade',
      vehicleNo: 'vehicle_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      depTime: 'string',
      fee: 'number',
      seatGrade: 'string',
      vehicleNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesMostExpensive extends $tea.Model {
  arrTime?: string;
  depTime?: string;
  fee?: number;
  seatGrade?: string;
  vehicleNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      depTime: 'dep_time',
      fee: 'fee',
      seatGrade: 'seat_grade',
      vehicleNo: 'vehicle_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      depTime: 'string',
      fee: 'number',
      seatGrade: 'string',
      vehicleNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutes extends $tea.Model {
  arrCity?: string;
  arrDate?: number;
  cheapest?: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesCheapest;
  depCity?: string;
  depDate?: number;
  errMsg?: string;
  itineraryId?: string;
  mostExpensive?: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesMostExpensive;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrDate: 'arr_date',
      cheapest: 'cheapest',
      depCity: 'dep_city',
      depDate: 'dep_date',
      errMsg: 'err_msg',
      itineraryId: 'itinerary_id',
      mostExpensive: 'most_expensive',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrDate: 'number',
      cheapest: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesCheapest,
      depCity: 'string',
      depDate: 'number',
      errMsg: 'string',
      itineraryId: 'string',
      mostExpensive: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesMostExpensive,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryResponseBodyModuleTrafficFee extends $tea.Model {
  btripRoutes?: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutes[];
  errMsg?: string;
  maxFee?: number;
  minFee?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      btripRoutes: 'btrip_routes',
      errMsg: 'err_msg',
      maxFee: 'max_fee',
      minFee: 'min_fee',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripRoutes: { 'type': 'array', 'itemType': EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutes },
      errMsg: 'string',
      maxFee: 'number',
      minFee: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryResponseBodyModule extends $tea.Model {
  hotelFeeDetail?: EstimatedPriceQueryResponseBodyModuleHotelFeeDetail[];
  trafficFee?: EstimatedPriceQueryResponseBodyModuleTrafficFee;
  static names(): { [key: string]: string } {
    return {
      hotelFeeDetail: 'hotel_fee_detail',
      trafficFee: 'traffic_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelFeeDetail: { 'type': 'array', 'itemType': EstimatedPriceQueryResponseBodyModuleHotelFeeDetail },
      trafficFee: EstimatedPriceQueryResponseBodyModuleTrafficFee,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightBillSettlementQueryResponseBodyModuleDataList extends $tea.Model {
  advanceDay?: number;
  airlineCorpCode?: string;
  airlineCorpName?: string;
  alipayTradeNo?: string;
  applyId?: string;
  arrAirportCode?: string;
  arrCity?: string;
  arrDate?: string;
  arrStation?: string;
  arrTime?: string;
  billRecordTime?: string;
  bookTime?: string;
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  btripCouponFee?: number;
  buildFee?: number;
  cabin?: string;
  cabinClass?: string;
  capitalDirection?: string;
  cascadeDepartment?: string;
  changeFee?: number;
  corpPayOrderFee?: number;
  costCenter?: string;
  costCenterNumber?: string;
  coupon?: number;
  depAirportCode?: string;
  department?: string;
  departmentId?: string;
  deptCity?: string;
  deptDate?: string;
  deptStation?: string;
  deptTime?: string;
  discount?: string;
  feeType?: string;
  flightNo?: string;
  index?: string;
  insuranceFee?: number;
  invoiceTitle?: string;
  itineraryNum?: string;
  itineraryPrice?: number;
  mostDifferenceDeptTime?: string;
  mostDifferenceDiscount?: string;
  mostDifferenceFlightNo?: string;
  mostDifferencePrice?: number;
  mostDifferenceReason?: string;
  mostPrice?: number;
  negotiationCouponFee?: number;
  oilFee?: number;
  orderId?: string;
  overApplyId?: string;
  primaryId?: number;
  projectCode?: string;
  projectName?: string;
  refundFee?: number;
  refundUpgradeCost?: number;
  remark?: string;
  repeatRefund?: string;
  sealPrice?: number;
  serviceFee?: number;
  settlementFee?: number;
  settlementGrantFee?: number;
  settlementTime?: string;
  settlementType?: string;
  status?: number;
  ticketId?: string;
  travelerId?: string;
  travelerJobNo?: string;
  travelerName?: string;
  upgradeCost?: number;
  voucherType?: number;
  static names(): { [key: string]: string } {
    return {
      advanceDay: 'advance_day',
      airlineCorpCode: 'airline_corp_code',
      airlineCorpName: 'airline_corp_name',
      alipayTradeNo: 'alipay_trade_no',
      applyId: 'apply_id',
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrDate: 'arr_date',
      arrStation: 'arr_station',
      arrTime: 'arr_time',
      billRecordTime: 'bill_record_time',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      btripCouponFee: 'btrip_coupon_fee',
      buildFee: 'build_fee',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      capitalDirection: 'capital_direction',
      cascadeDepartment: 'cascade_department',
      changeFee: 'change_fee',
      corpPayOrderFee: 'corp_pay_order_fee',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      coupon: 'coupon',
      depAirportCode: 'dep_airport_code',
      department: 'department',
      departmentId: 'department_id',
      deptCity: 'dept_city',
      deptDate: 'dept_date',
      deptStation: 'dept_station',
      deptTime: 'dept_time',
      discount: 'discount',
      feeType: 'fee_type',
      flightNo: 'flight_no',
      index: 'index',
      insuranceFee: 'insurance_fee',
      invoiceTitle: 'invoice_title',
      itineraryNum: 'itinerary_num',
      itineraryPrice: 'itinerary_price',
      mostDifferenceDeptTime: 'most_difference_dept_time',
      mostDifferenceDiscount: 'most_difference_discount',
      mostDifferenceFlightNo: 'most_difference_flight_no',
      mostDifferencePrice: 'most_difference_price',
      mostDifferenceReason: 'most_difference_reason',
      mostPrice: 'most_price',
      negotiationCouponFee: 'negotiation_coupon_fee',
      oilFee: 'oil_fee',
      orderId: 'order_id',
      overApplyId: 'over_apply_id',
      primaryId: 'primary_id',
      projectCode: 'project_code',
      projectName: 'project_name',
      refundFee: 'refund_fee',
      refundUpgradeCost: 'refund_upgrade_cost',
      remark: 'remark',
      repeatRefund: 'repeat_refund',
      sealPrice: 'seal_price',
      serviceFee: 'service_fee',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      status: 'status',
      ticketId: 'ticket_id',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerName: 'traveler_name',
      upgradeCost: 'upgrade_cost',
      voucherType: 'voucher_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceDay: 'number',
      airlineCorpCode: 'string',
      airlineCorpName: 'string',
      alipayTradeNo: 'string',
      applyId: 'string',
      arrAirportCode: 'string',
      arrCity: 'string',
      arrDate: 'string',
      arrStation: 'string',
      arrTime: 'string',
      billRecordTime: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      btripCouponFee: 'number',
      buildFee: 'number',
      cabin: 'string',
      cabinClass: 'string',
      capitalDirection: 'string',
      cascadeDepartment: 'string',
      changeFee: 'number',
      corpPayOrderFee: 'number',
      costCenter: 'string',
      costCenterNumber: 'string',
      coupon: 'number',
      depAirportCode: 'string',
      department: 'string',
      departmentId: 'string',
      deptCity: 'string',
      deptDate: 'string',
      deptStation: 'string',
      deptTime: 'string',
      discount: 'string',
      feeType: 'string',
      flightNo: 'string',
      index: 'string',
      insuranceFee: 'number',
      invoiceTitle: 'string',
      itineraryNum: 'string',
      itineraryPrice: 'number',
      mostDifferenceDeptTime: 'string',
      mostDifferenceDiscount: 'string',
      mostDifferenceFlightNo: 'string',
      mostDifferencePrice: 'number',
      mostDifferenceReason: 'string',
      mostPrice: 'number',
      negotiationCouponFee: 'number',
      oilFee: 'number',
      orderId: 'string',
      overApplyId: 'string',
      primaryId: 'number',
      projectCode: 'string',
      projectName: 'string',
      refundFee: 'number',
      refundUpgradeCost: 'number',
      remark: 'string',
      repeatRefund: 'string',
      sealPrice: 'number',
      serviceFee: 'number',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      status: 'number',
      ticketId: 'string',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerName: 'string',
      upgradeCost: 'number',
      voucherType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightBillSettlementQueryResponseBodyModule extends $tea.Model {
  category?: number;
  corpId?: string;
  dataList?: FlightBillSettlementQueryResponseBodyModuleDataList[];
  periodEnd?: string;
  periodStart?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      corpId: 'corp_id',
      dataList: 'data_list',
      periodEnd: 'period_end',
      periodStart: 'period_start',
      totalNum: 'total_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      corpId: 'string',
      dataList: { 'type': 'array', 'itemType': FlightBillSettlementQueryResponseBodyModuleDataList },
      periodEnd: 'string',
      periodStart: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCancelOrderResponseBodyModule extends $tea.Model {
  cancelTime?: string;
  failCode?: string;
  failReason?: string;
  orderStatus?: string;
  static names(): { [key: string]: string } {
    return {
      cancelTime: 'cancel_time',
      failCode: 'fail_code',
      failReason: 'fail_reason',
      orderStatus: 'order_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelTime: 'string',
      failCode: 'string',
      failReason: 'string',
      orderStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCreateOrderRequestContactInfo extends $tea.Model {
  contactEmail?: string;
  contactName?: string;
  contactPhone?: string;
  static names(): { [key: string]: string } {
    return {
      contactEmail: 'contact_email',
      contactName: 'contact_name',
      contactPhone: 'contact_phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactEmail: 'string',
      contactName: 'string',
      contactPhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCreateOrderRequestTravelerInfoList extends $tea.Model {
  birthday?: string;
  certNation?: string;
  certNo?: string;
  certType?: string;
  certValidDate?: string;
  name?: string;
  outUserId?: string;
  phone?: string;
  sex?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      certNation: 'cert_nation',
      certNo: 'cert_no',
      certType: 'cert_type',
      certValidDate: 'cert_valid_date',
      name: 'name',
      outUserId: 'out_user_id',
      phone: 'phone',
      sex: 'sex',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      certNation: 'string',
      certNo: 'string',
      certType: 'string',
      certValidDate: 'string',
      name: 'string',
      outUserId: 'string',
      phone: 'string',
      sex: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCreateOrderResponseBodyModule extends $tea.Model {
  alipayTradeNo?: string;
  btripOrderId?: number;
  disOrderId?: string;
  lastPayTime?: string;
  orderStatus?: number;
  payStatus?: number;
  paymentPrice?: number;
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      btripOrderId: 'btrip_order_id',
      disOrderId: 'dis_order_id',
      lastPayTime: 'last_pay_time',
      orderStatus: 'order_status',
      payStatus: 'pay_status',
      paymentPrice: 'payment_price',
      totalPrice: 'total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayTradeNo: 'string',
      btripOrderId: 'number',
      disOrderId: 'string',
      lastPayTime: 'string',
      orderStatus: 'number',
      payStatus: 'number',
      paymentPrice: 'number',
      totalPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo extends $tea.Model {
  arrCity?: string;
  arrCityName?: string;
  arrTime?: string;
  cabin?: string;
  cabinClass?: number;
  cabinClassStr?: string;
  depCity?: string;
  depCityName?: string;
  depTime?: string;
  discount?: string;
  flightNo?: string;
  price?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassStr: 'cabin_class_str',
      depCity: 'dep_city',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      discount: 'discount',
      flightNo: 'flight_no',
      price: 'price',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      cabin: 'string',
      cabinClass: 'number',
      cabinClassStr: 'string',
      depCity: 'string',
      depCityName: 'string',
      depTime: 'string',
      discount: 'string',
      flightNo: 'string',
      price: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightExceedApplyQueryResponseBodyModule extends $tea.Model {
  applyId?: number;
  applyIntentionInfoDo?: FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo;
  btripCause?: string;
  corpId?: string;
  exceedReason?: string;
  exceedType?: number;
  originStandard?: string;
  status?: number;
  submitTime?: string;
  thirdpartApplyId?: string;
  thirdpartCorpId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      applyIntentionInfoDo: 'apply_intention_info_do',
      btripCause: 'btrip_cause',
      corpId: 'corp_id',
      exceedReason: 'exceed_reason',
      exceedType: 'exceed_type',
      originStandard: 'origin_standard',
      status: 'status',
      submitTime: 'submit_time',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartCorpId: 'thirdpart_corp_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      applyIntentionInfoDo: FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo,
      btripCause: 'string',
      corpId: 'string',
      exceedReason: 'string',
      exceedType: 'number',
      originStandard: 'string',
      status: 'number',
      submitTime: 'string',
      thirdpartApplyId: 'string',
      thirdpartCorpId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailInfoResponseBodyModuleFlightInfoList extends $tea.Model {
  airlineCode?: string;
  airlineName?: string;
  airlineSimpleName?: string;
  arrAirport?: string;
  arrAirportCode?: string;
  arrAirportCodeName?: string;
  arrCity?: string;
  arrCityCode?: string;
  arrTerminal?: string;
  arrTime?: string;
  baggage?: string;
  buildPrice?: number;
  cabin?: string;
  cabinClass?: string;
  carrier?: string;
  depAirport?: string;
  depAirportCode?: string;
  depAirportCodeName?: string;
  depCity?: string;
  depCityCode?: string;
  depTerminal?: string;
  depTime?: string;
  flightNo?: string;
  lastCabin?: string;
  lastFlightNo?: string;
  meal?: string;
  oilPrice?: number;
  segmentType?: number;
  stopArrTime?: string;
  stopCity?: string;
  stopDepTime?: string;
  ticketPrice?: number;
  tuigaiqianInfo?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      airlineSimpleName: 'airline_simple_name',
      arrAirport: 'arr_airport',
      arrAirportCode: 'arr_airport_code',
      arrAirportCodeName: 'arr_airport_code_name',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      baggage: 'baggage',
      buildPrice: 'build_price',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      carrier: 'carrier',
      depAirport: 'dep_airport',
      depAirportCode: 'dep_airport_code',
      depAirportCodeName: 'dep_airport_code_name',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightNo: 'flight_no',
      lastCabin: 'last_cabin',
      lastFlightNo: 'last_flight_no',
      meal: 'meal',
      oilPrice: 'oil_price',
      segmentType: 'segment_type',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopDepTime: 'stop_dep_time',
      ticketPrice: 'ticket_price',
      tuigaiqianInfo: 'tuigaiqian_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      airlineSimpleName: 'string',
      arrAirport: 'string',
      arrAirportCode: 'string',
      arrAirportCodeName: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      baggage: 'string',
      buildPrice: 'number',
      cabin: 'string',
      cabinClass: 'string',
      carrier: 'string',
      depAirport: 'string',
      depAirportCode: 'string',
      depAirportCodeName: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightNo: 'string',
      lastCabin: 'string',
      lastFlightNo: 'string',
      meal: 'string',
      oilPrice: 'number',
      segmentType: 'number',
      stopArrTime: 'string',
      stopCity: 'string',
      stopDepTime: 'string',
      ticketPrice: 'number',
      tuigaiqianInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailInfoResponseBodyModuleTicketInfoList extends $tea.Model {
  openTicketStatus?: string;
  pnrCode?: string;
  ticketNo?: string;
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      openTicketStatus: 'open_ticket_status',
      pnrCode: 'pnr_code',
      ticketNo: 'ticket_no',
      ticketStatus: 'ticket_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openTicketStatus: 'string',
      pnrCode: 'string',
      ticketNo: 'string',
      ticketStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailInfoResponseBodyModuleTravelerInfoList extends $tea.Model {
  birthDate?: string;
  certNo?: string;
  certType?: string;
  openTicketStatus?: number;
  passengerName?: string;
  passengerType?: string;
  phone?: string;
  ticketNo?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      birthDate: 'birth_date',
      certNo: 'cert_no',
      certType: 'cert_type',
      openTicketStatus: 'open_ticket_status',
      passengerName: 'passenger_name',
      passengerType: 'passenger_type',
      phone: 'phone',
      ticketNo: 'ticket_no',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: 'string',
      certNo: 'string',
      certType: 'string',
      openTicketStatus: 'number',
      passengerName: 'string',
      passengerType: 'string',
      phone: 'string',
      ticketNo: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailInfoResponseBodyModule extends $tea.Model {
  alipayTradeNo?: string;
  bookUserId?: string;
  btripOrderId?: number;
  contactName?: string;
  contactPhone?: string;
  disOrderId?: string;
  extra?: string;
  flightInfoList?: FlightOrderDetailInfoResponseBodyModuleFlightInfoList[];
  lastPayTime?: string;
  payStatus?: number;
  payTime?: string;
  promotionPrice?: number;
  settleAmount?: number;
  settleType?: number;
  status?: number;
  ticketInfoList?: FlightOrderDetailInfoResponseBodyModuleTicketInfoList[];
  totalBuildPrice?: number;
  totalOilPrice?: number;
  totalOrderPrice?: number;
  travelerInfoList?: FlightOrderDetailInfoResponseBodyModuleTravelerInfoList[];
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      bookUserId: 'book_user_id',
      btripOrderId: 'btrip_order_id',
      contactName: 'contact_name',
      contactPhone: 'contact_phone',
      disOrderId: 'dis_order_id',
      extra: 'extra',
      flightInfoList: 'flight_info_list',
      lastPayTime: 'last_pay_time',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      promotionPrice: 'promotion_price',
      settleAmount: 'settle_amount',
      settleType: 'settle_type',
      status: 'status',
      ticketInfoList: 'ticket_info_list',
      totalBuildPrice: 'total_build_price',
      totalOilPrice: 'total_oil_price',
      totalOrderPrice: 'total_order_price',
      travelerInfoList: 'traveler_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayTradeNo: 'string',
      bookUserId: 'string',
      btripOrderId: 'number',
      contactName: 'string',
      contactPhone: 'string',
      disOrderId: 'string',
      extra: 'string',
      flightInfoList: { 'type': 'array', 'itemType': FlightOrderDetailInfoResponseBodyModuleFlightInfoList },
      lastPayTime: 'string',
      payStatus: 'number',
      payTime: 'string',
      promotionPrice: 'number',
      settleAmount: 'number',
      settleType: 'number',
      status: 'number',
      ticketInfoList: { 'type': 'array', 'itemType': FlightOrderDetailInfoResponseBodyModuleTicketInfoList },
      totalBuildPrice: 'number',
      totalOilPrice: 'number',
      totalOrderPrice: 'number',
      travelerInfoList: { 'type': 'array', 'itemType': FlightOrderDetailInfoResponseBodyModuleTravelerInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryResponseBodyModuleCostCenter extends $tea.Model {
  corpId?: string;
  id?: number;
  name?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corp_id',
      id: 'id',
      name: 'name',
      number: 'number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      id: 'number',
      name: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryResponseBodyModuleInsureInfoList extends $tea.Model {
  insureNo?: string;
  name?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      insureNo: 'insure_no',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insureNo: 'string',
      name: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryResponseBodyModuleInvoice extends $tea.Model {
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryResponseBodyModulePriceInfoList extends $tea.Model {
  categoryCode?: number;
  categoryType?: number;
  changeFlightNo?: string;
  discount?: string;
  endTime?: string;
  gmtCreate?: string;
  originalTicketNo?: string;
  passengerName?: string;
  payType?: number;
  price?: number;
  startTime?: string;
  ticketNo?: string;
  tradeId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      categoryType: 'category_type',
      changeFlightNo: 'change_flight_no',
      discount: 'discount',
      endTime: 'end_time',
      gmtCreate: 'gmt_create',
      originalTicketNo: 'original_ticket_no',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      price: 'price',
      startTime: 'start_time',
      ticketNo: 'ticket_no',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      categoryType: 'number',
      changeFlightNo: 'string',
      discount: 'string',
      endTime: 'string',
      gmtCreate: 'string',
      originalTicketNo: 'string',
      passengerName: 'string',
      payType: 'number',
      price: 'number',
      startTime: 'string',
      ticketNo: 'string',
      tradeId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryResponseBodyModuleUserAffiliateList extends $tea.Model {
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryResponseBodyModule extends $tea.Model {
  applyId?: number;
  arrAirport?: string;
  arrCity?: string;
  btripTitle?: string;
  cabinClass?: string;
  contactName?: string;
  corpId?: string;
  corpName?: string;
  costCenter?: FlightOrderListQueryResponseBodyModuleCostCenter;
  depAirport?: string;
  depCity?: string;
  depDate?: string;
  departId?: string;
  departName?: string;
  discount?: string;
  flightNo?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  insureInfoList?: FlightOrderListQueryResponseBodyModuleInsureInfoList[];
  invoice?: FlightOrderListQueryResponseBodyModuleInvoice;
  passengerCount?: number;
  passengerName?: string;
  priceInfoList?: FlightOrderListQueryResponseBodyModulePriceInfoList[];
  projectCode?: string;
  projectId?: number;
  projectTitle?: string;
  retDate?: string;
  status?: number;
  thirdPartProjectId?: string;
  thirdpartApplyId?: string;
  thirdpartItineraryId?: string;
  tripType?: number;
  userAffiliateList?: FlightOrderListQueryResponseBodyModuleUserAffiliateList[];
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      arrAirport: 'arr_airport',
      arrCity: 'arr_city',
      btripTitle: 'btrip_title',
      cabinClass: 'cabin_class',
      contactName: 'contact_name',
      corpId: 'corp_id',
      corpName: 'corp_name',
      costCenter: 'cost_center',
      depAirport: 'dep_airport',
      depCity: 'dep_city',
      depDate: 'dep_date',
      departId: 'depart_id',
      departName: 'depart_name',
      discount: 'discount',
      flightNo: 'flight_no',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      insureInfoList: 'insure_info_list',
      invoice: 'invoice',
      passengerCount: 'passenger_count',
      passengerName: 'passenger_name',
      priceInfoList: 'price_info_list',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      retDate: 'ret_date',
      status: 'status',
      thirdPartProjectId: 'third_part_project_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      tripType: 'trip_type',
      userAffiliateList: 'user_affiliate_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      arrAirport: 'string',
      arrCity: 'string',
      btripTitle: 'string',
      cabinClass: 'string',
      contactName: 'string',
      corpId: 'string',
      corpName: 'string',
      costCenter: FlightOrderListQueryResponseBodyModuleCostCenter,
      depAirport: 'string',
      depCity: 'string',
      depDate: 'string',
      departId: 'string',
      departName: 'string',
      discount: 'string',
      flightNo: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      insureInfoList: { 'type': 'array', 'itemType': FlightOrderListQueryResponseBodyModuleInsureInfoList },
      invoice: FlightOrderListQueryResponseBodyModuleInvoice,
      passengerCount: 'number',
      passengerName: 'string',
      priceInfoList: { 'type': 'array', 'itemType': FlightOrderListQueryResponseBodyModulePriceInfoList },
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      retDate: 'string',
      status: 'number',
      thirdPartProjectId: 'string',
      thirdpartApplyId: 'string',
      thirdpartItineraryId: 'string',
      tripType: 'number',
      userAffiliateList: { 'type': 'array', 'itemType': FlightOrderListQueryResponseBodyModuleUserAffiliateList },
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryResponseBodyPageInfo extends $tea.Model {
  page?: number;
  pageSize?: number;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageSize: 'page_size',
      totalNumber: 'total_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleFlightChangeTicketInfoList extends $tea.Model {
  arrTime?: string;
  changeCabin?: string;
  changeCabinLevel?: string;
  changeFee?: number;
  changeFlightNo?: string;
  changeOrderId?: number;
  changeReason?: string;
  changeType?: number;
  depTime?: string;
  gmtCreate?: string;
  gmtModify?: string;
  originTicketNo?: string;
  ticketNo?: string;
  upgradeFee?: number;
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      changeCabin: 'change_cabin',
      changeCabinLevel: 'change_cabin_level',
      changeFee: 'change_fee',
      changeFlightNo: 'change_flight_no',
      changeOrderId: 'change_order_id',
      changeReason: 'change_reason',
      changeType: 'change_type',
      depTime: 'dep_time',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      originTicketNo: 'origin_ticket_no',
      ticketNo: 'ticket_no',
      upgradeFee: 'upgrade_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      changeCabin: 'string',
      changeCabinLevel: 'string',
      changeFee: 'number',
      changeFlightNo: 'string',
      changeOrderId: 'number',
      changeReason: 'string',
      changeType: 'number',
      depTime: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      originTicketNo: 'string',
      ticketNo: 'string',
      upgradeFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleFlightInfoList extends $tea.Model {
  airlineCode?: string;
  airlineName?: string;
  arrAirportCode?: string;
  arrAirportName?: string;
  arrCityCode?: string;
  arrCityName?: string;
  arrTime?: string;
  cabin?: string;
  cabinLevel?: string;
  depAirportCode?: string;
  depAirportName?: string;
  depCityCode?: string;
  depCityName?: string;
  depTime?: string;
  flightMile?: number;
  flightNo?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      arrAirportCode: 'arr_airport_code',
      arrAirportName: 'arr_airport_name',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinLevel: 'cabin_level',
      depAirportCode: 'dep_airport_code',
      depAirportName: 'dep_airport_name',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      flightMile: 'flight_mile',
      flightNo: 'flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      arrAirportCode: 'string',
      arrAirportName: 'string',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      cabin: 'string',
      cabinLevel: 'string',
      depAirportCode: 'string',
      depAirportName: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      flightMile: 'number',
      flightNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleFlightRefundTicketInfoList extends $tea.Model {
  gmtCreate?: string;
  gmtModify?: string;
  refundOrderId?: number;
  refundReason?: string;
  refundTicketFee?: number;
  refundType?: number;
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      refundOrderId: 'refund_order_id',
      refundReason: 'refund_reason',
      refundTicketFee: 'refund_ticket_fee',
      refundType: 'refund_type',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModify: 'string',
      refundOrderId: 'number',
      refundReason: 'string',
      refundTicketFee: 'number',
      refundType: 'number',
      ticketNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleFlightTicketInfoList extends $tea.Model {
  buildPrice?: number;
  changed?: boolean;
  discount?: number;
  gmtCreate?: string;
  gmtModify?: string;
  oilPrice?: number;
  payType?: number;
  settlePrice?: number;
  ticketNo?: string;
  ticketPrice?: number;
  ticketStatus?: string;
  ticketStatusCode?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      buildPrice: 'build_price',
      changed: 'changed',
      discount: 'discount',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      oilPrice: 'oil_price',
      payType: 'pay_type',
      settlePrice: 'settle_price',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
      ticketStatusCode: 'ticket_status_code',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildPrice: 'number',
      changed: 'boolean',
      discount: 'number',
      gmtCreate: 'string',
      gmtModify: 'string',
      oilPrice: 'number',
      payType: 'number',
      settlePrice: 'number',
      ticketNo: 'string',
      ticketPrice: 'number',
      ticketStatus: 'string',
      ticketStatusCode: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleInsuranceInfoList extends $tea.Model {
  amount?: number;
  insuranceNo?: string;
  status?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      insuranceNo: 'insurance_no',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      insuranceNo: 'string',
      status: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleInvoiceInfo extends $tea.Model {
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleOrderBaseInfo extends $tea.Model {
  applyId?: string;
  btripTitle?: string;
  contactName?: string;
  corpId?: string;
  corpName?: string;
  departId?: string;
  departName?: string;
  gmtCreate?: string;
  gmtModify?: string;
  itineraryId?: string;
  orderId?: number;
  orderStatus?: number;
  thirdpartApplyId?: string;
  thirdpartCorpId?: string;
  thirdpartItineraryId?: string;
  tripType?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripTitle: 'btrip_title',
      contactName: 'contact_name',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      itineraryId: 'itinerary_id',
      orderId: 'order_id',
      orderStatus: 'order_status',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartCorpId: 'thirdpart_corp_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      tripType: 'trip_type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripTitle: 'string',
      contactName: 'string',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      itineraryId: 'string',
      orderId: 'number',
      orderStatus: 'number',
      thirdpartApplyId: 'string',
      thirdpartCorpId: 'string',
      thirdpartItineraryId: 'string',
      tripType: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModulePassengerInfoList extends $tea.Model {
  costCenterId?: number;
  costCenterName?: string;
  costCenterNumber?: string;
  projectCode?: string;
  projectId?: number;
  projectTitle?: string;
  thirdpartProjectId?: string;
  userId?: string;
  userName?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      thirdpartProjectId: 'thirdpart_project_id',
      userId: 'user_id',
      userName: 'user_name',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      costCenterName: 'string',
      costCenterNumber: 'string',
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      thirdpartProjectId: 'string',
      userId: 'string',
      userName: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModulePriceInfoList extends $tea.Model {
  categoryCode?: number;
  gmtCreate?: string;
  passengerName?: string;
  payType?: number;
  price?: number;
  tradeId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      gmtCreate: 'gmt_create',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      price: 'price',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      gmtCreate: 'string',
      passengerName: 'string',
      payType: 'number',
      price: 'number',
      tradeId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModule extends $tea.Model {
  flightChangeTicketInfoList?: FlightOrderQueryResponseBodyModuleFlightChangeTicketInfoList[];
  flightInfoList?: FlightOrderQueryResponseBodyModuleFlightInfoList[];
  flightRefundTicketInfoList?: FlightOrderQueryResponseBodyModuleFlightRefundTicketInfoList[];
  flightTicketInfoList?: FlightOrderQueryResponseBodyModuleFlightTicketInfoList[];
  insuranceInfoList?: FlightOrderQueryResponseBodyModuleInsuranceInfoList[];
  invoiceInfo?: FlightOrderQueryResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: FlightOrderQueryResponseBodyModuleOrderBaseInfo;
  passengerInfoList?: FlightOrderQueryResponseBodyModulePassengerInfoList[];
  priceInfoList?: FlightOrderQueryResponseBodyModulePriceInfoList[];
  static names(): { [key: string]: string } {
    return {
      flightChangeTicketInfoList: 'flight_change_ticket_info_list',
      flightInfoList: 'flight_info_list',
      flightRefundTicketInfoList: 'flight_refund_ticket_info_list',
      flightTicketInfoList: 'flight_ticket_info_list',
      insuranceInfoList: 'insurance_info_list',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerInfoList: 'passenger_info_list',
      priceInfoList: 'price_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightChangeTicketInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightChangeTicketInfoList },
      flightInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightInfoList },
      flightRefundTicketInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightRefundTicketInfoList },
      flightTicketInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightTicketInfoList },
      insuranceInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleInsuranceInfoList },
      invoiceInfo: FlightOrderQueryResponseBodyModuleInvoiceInfo,
      orderBaseInfo: FlightOrderQueryResponseBodyModuleOrderBaseInfo,
      passengerInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModulePassengerInfoList },
      priceInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModulePriceInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightPayOrderResponseBodyModule extends $tea.Model {
  actualPayPrice?: number;
  alipayTradeNo?: string;
  lastPayTime?: string;
  payStatus?: number;
  static names(): { [key: string]: string } {
    return {
      actualPayPrice: 'actual_pay_price',
      alipayTradeNo: 'alipay_trade_no',
      lastPayTime: 'last_pay_time',
      payStatus: 'pay_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualPayPrice: 'number',
      alipayTradeNo: 'string',
      lastPayTime: 'string',
      payStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundApplyRequestPassengerSegmentInfoList extends $tea.Model {
  flightNo?: string;
  passengerName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      flightNo: 'flight_no',
      passengerName: 'passenger_name',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightNo: 'string',
      passengerName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundApplyResponseBodyModule extends $tea.Model {
  disOrderId?: string;
  disSubOrderId?: string;
  refundApplyId?: number;
  refundFee?: number;
  refundMoney?: number;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      refundApplyId: 'refund_apply_id',
      refundFee: 'refund_fee',
      refundMoney: 'refund_money',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
      disSubOrderId: 'string',
      refundApplyId: 'number',
      refundFee: 'number',
      refundMoney: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundDetailResponseBodyModuleRefundFeeList extends $tea.Model {
  alipayTradeNo?: string;
  refundFee?: number;
  refundPrice?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      refundFee: 'refund_fee',
      refundPrice: 'refund_price',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayTradeNo: 'string',
      refundFee: 'number',
      refundPrice: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundDetailResponseBodyModule extends $tea.Model {
  btripOrderId?: number;
  btripSubOrderId?: number;
  disOrderId?: string;
  disSubOrderId?: string;
  isVoluntary?: number;
  reason?: string;
  refundFee?: number;
  refundFeeList?: FlightRefundDetailResponseBodyModuleRefundFeeList[];
  refundPrice?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      btripOrderId: 'btrip_order_id',
      btripSubOrderId: 'btrip_sub_order_id',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      isVoluntary: 'is_voluntary',
      reason: 'reason',
      refundFee: 'refund_fee',
      refundFeeList: 'refund_fee_list',
      refundPrice: 'refund_price',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripOrderId: 'number',
      btripSubOrderId: 'number',
      disOrderId: 'string',
      disSubOrderId: 'string',
      isVoluntary: 'number',
      reason: 'string',
      refundFee: 'number',
      refundFeeList: { 'type': 'array', 'itemType': FlightRefundDetailResponseBodyModuleRefundFeeList },
      refundPrice: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundPreCalRequestPassengerSegmentInfoList extends $tea.Model {
  flightNo?: string;
  passengerName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      flightNo: 'flight_no',
      passengerName: 'passenger_name',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightNo: 'string',
      passengerName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundPreCalResponseBodyModuleMultiRefundCalList extends $tea.Model {
  canApplyRefund?: boolean;
  name?: string;
  preRefundMoney?: number;
  refundFee?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      canApplyRefund: 'can_apply_refund',
      name: 'name',
      preRefundMoney: 'pre_refund_money',
      refundFee: 'refund_fee',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canApplyRefund: 'boolean',
      name: 'string',
      preRefundMoney: 'number',
      refundFee: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundPreCalResponseBodyModuleReturnReason extends $tea.Model {
  extendDesc?: string;
  person?: number;
  reasonCode?: number;
  reasonShow?: string;
  reasonType?: number;
  volunteer?: number;
  static names(): { [key: string]: string } {
    return {
      extendDesc: 'extend_desc',
      person: 'person',
      reasonCode: 'reason_code',
      reasonShow: 'reason_show',
      reasonType: 'reason_type',
      volunteer: 'volunteer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendDesc: 'string',
      person: 'number',
      reasonCode: 'number',
      reasonShow: 'string',
      reasonType: 'number',
      volunteer: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundPreCalResponseBodyModule extends $tea.Model {
  flightChange?: boolean;
  itemUnitId?: string;
  multiRefundCalList?: FlightRefundPreCalResponseBodyModuleMultiRefundCalList[];
  preRefundMoney?: number;
  refundFee?: number;
  returnReason?: FlightRefundPreCalResponseBodyModuleReturnReason[];
  sessionId?: string;
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      flightChange: 'flight_change',
      itemUnitId: 'item_unit_id',
      multiRefundCalList: 'multi_refund_cal_list',
      preRefundMoney: 'pre_refund_money',
      refundFee: 'refund_fee',
      returnReason: 'return_reason',
      sessionId: 'session_id',
      tips: 'tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightChange: 'boolean',
      itemUnitId: 'string',
      multiRefundCalList: { 'type': 'array', 'itemType': FlightRefundPreCalResponseBodyModuleMultiRefundCalList },
      preRefundMoney: 'number',
      refundFee: 'number',
      returnReason: { 'type': 'array', 'itemType': FlightRefundPreCalResponseBodyModuleReturnReason },
      sessionId: 'string',
      tips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelBillSettlementQueryResponseBodyModuleDataList extends $tea.Model {
  alipayTradeNo?: string;
  applyId?: string;
  billRecordTime?: string;
  bookTime?: string;
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  capitalDirection?: string;
  cascadeDepartment?: string;
  checkInDate?: string;
  checkoutDate?: string;
  city?: string;
  cityCode?: string;
  corpRefundFee?: number;
  corpTotalFee?: number;
  costCenter?: string;
  costCenterNumber?: string;
  department?: string;
  departmentId?: string;
  feeType?: string;
  fees?: number;
  fuPointFee?: number;
  hotelName?: string;
  index?: string;
  invoiceTitle?: string;
  isNegotiation?: string;
  isShareStr?: string;
  nights?: number;
  orderId?: string;
  orderPrice?: number;
  orderType?: string;
  overApplyId?: string;
  personRefundFee?: number;
  personSettlePrice?: number;
  primaryId?: number;
  projectCode?: string;
  projectName?: string;
  promotionFee?: number;
  remark?: string;
  roomNumber?: number;
  roomPrice?: number;
  roomType?: string;
  serviceFee?: number;
  settlementFee?: number;
  settlementGrantFee?: number;
  settlementTime?: string;
  settlementType?: string;
  status?: number;
  totalNights?: number;
  travelerId?: string;
  travelerJobNo?: string;
  travelerName?: string;
  voucherType?: number;
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      applyId: 'apply_id',
      billRecordTime: 'bill_record_time',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      capitalDirection: 'capital_direction',
      cascadeDepartment: 'cascade_department',
      checkInDate: 'check_in_date',
      checkoutDate: 'checkout_date',
      city: 'city',
      cityCode: 'city_code',
      corpRefundFee: 'corp_refund_fee',
      corpTotalFee: 'corp_total_fee',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      department: 'department',
      departmentId: 'department_id',
      feeType: 'fee_type',
      fees: 'fees',
      fuPointFee: 'fu_point_fee',
      hotelName: 'hotel_name',
      index: 'index',
      invoiceTitle: 'invoice_title',
      isNegotiation: 'is_negotiation',
      isShareStr: 'is_share_str',
      nights: 'nights',
      orderId: 'order_id',
      orderPrice: 'order_price',
      orderType: 'order_type',
      overApplyId: 'over_apply_id',
      personRefundFee: 'person_refund_fee',
      personSettlePrice: 'person_settle_price',
      primaryId: 'primary_id',
      projectCode: 'project_code',
      projectName: 'project_name',
      promotionFee: 'promotion_fee',
      remark: 'remark',
      roomNumber: 'room_number',
      roomPrice: 'room_price',
      roomType: 'room_type',
      serviceFee: 'service_fee',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      status: 'status',
      totalNights: 'total_nights',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerName: 'traveler_name',
      voucherType: 'voucher_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayTradeNo: 'string',
      applyId: 'string',
      billRecordTime: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      capitalDirection: 'string',
      cascadeDepartment: 'string',
      checkInDate: 'string',
      checkoutDate: 'string',
      city: 'string',
      cityCode: 'string',
      corpRefundFee: 'number',
      corpTotalFee: 'number',
      costCenter: 'string',
      costCenterNumber: 'string',
      department: 'string',
      departmentId: 'string',
      feeType: 'string',
      fees: 'number',
      fuPointFee: 'number',
      hotelName: 'string',
      index: 'string',
      invoiceTitle: 'string',
      isNegotiation: 'string',
      isShareStr: 'string',
      nights: 'number',
      orderId: 'string',
      orderPrice: 'number',
      orderType: 'string',
      overApplyId: 'string',
      personRefundFee: 'number',
      personSettlePrice: 'number',
      primaryId: 'number',
      projectCode: 'string',
      projectName: 'string',
      promotionFee: 'number',
      remark: 'string',
      roomNumber: 'number',
      roomPrice: 'number',
      roomType: 'string',
      serviceFee: 'number',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      status: 'number',
      totalNights: 'number',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerName: 'string',
      voucherType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelBillSettlementQueryResponseBodyModule extends $tea.Model {
  category?: number;
  corpId?: string;
  dataList?: HotelBillSettlementQueryResponseBodyModuleDataList[];
  periodEnd?: string;
  periodStart?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      corpId: 'corp_id',
      dataList: 'data_list',
      periodEnd: 'period_end',
      periodStart: 'period_start',
      totalNum: 'total_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      corpId: 'string',
      dataList: { 'type': 'array', 'itemType': HotelBillSettlementQueryResponseBodyModuleDataList },
      periodEnd: 'string',
      periodStart: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo extends $tea.Model {
  checkIn?: string;
  checkOut?: string;
  cityCode?: string;
  cityName?: string;
  price?: number;
  together?: boolean;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      checkIn: 'check_in',
      checkOut: 'check_out',
      cityCode: 'city_code',
      cityName: 'city_name',
      price: 'price',
      together: 'together',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIn: 'string',
      checkOut: 'string',
      cityCode: 'string',
      cityName: 'string',
      price: 'number',
      together: 'boolean',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelExceedApplyQueryResponseBodyModule extends $tea.Model {
  applyId?: number;
  applyIntentionInfoDo?: HotelExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo;
  btripCause?: string;
  corpId?: string;
  exceedReason?: string;
  exceedType?: number;
  originStandard?: string;
  status?: number;
  submitTime?: string;
  thirdpartApplyId?: string;
  thirdpartCorpId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      applyIntentionInfoDo: 'apply_intention_info_do',
      btripCause: 'btrip_cause',
      corpId: 'corp_id',
      exceedReason: 'exceed_reason',
      exceedType: 'exceed_type',
      originStandard: 'origin_standard',
      status: 'status',
      submitTime: 'submit_time',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartCorpId: 'thirdpart_corp_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      applyIntentionInfoDo: HotelExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo,
      btripCause: 'string',
      corpId: 'string',
      exceedReason: 'string',
      exceedType: 'number',
      originStandard: 'string',
      status: 'number',
      submitTime: 'string',
      thirdpartApplyId: 'string',
      thirdpartCorpId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderListQueryResponseBodyModuleCostCenter extends $tea.Model {
  corpId?: string;
  id?: number;
  name?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corp_id',
      id: 'id',
      name: 'name',
      number: 'number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      id: 'number',
      name: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderListQueryResponseBodyModuleInvoice extends $tea.Model {
  id?: number;
  invoiceType?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      invoiceType: 'invoice_type',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      invoiceType: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderListQueryResponseBodyModulePriceInfoList extends $tea.Model {
  categoryCode?: number;
  categoryType?: number;
  gmtCreate?: string;
  passengerName?: string;
  payType?: number;
  price?: number;
  tradeId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      categoryType: 'category_type',
      gmtCreate: 'gmt_create',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      price: 'price',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      categoryType: 'number',
      gmtCreate: 'string',
      passengerName: 'string',
      payType: 'number',
      price: 'number',
      tradeId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderListQueryResponseBodyModuleUserAffiliateList extends $tea.Model {
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderListQueryResponseBodyModule extends $tea.Model {
  applyId?: number;
  btripTitle?: string;
  checkIn?: string;
  checkOut?: string;
  city?: string;
  contactName?: string;
  corpId?: string;
  corpName?: string;
  costCenter?: HotelOrderListQueryResponseBodyModuleCostCenter;
  departId?: string;
  departName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  guest?: string;
  hotelName?: string;
  hotelSupportVatInvoiceType?: number;
  id?: number;
  invoice?: HotelOrderListQueryResponseBodyModuleInvoice;
  night?: number;
  orderStatus?: number;
  orderStatusDesc?: string;
  orderType?: number;
  orderTypeDesc?: string;
  priceInfoList?: HotelOrderListQueryResponseBodyModulePriceInfoList[];
  projectCode?: string;
  projectId?: number;
  projectTitle?: string;
  roomNum?: number;
  roomType?: string;
  thirdpartApplyId?: string;
  thirdpartItineraryId?: string;
  thirdpartProjectId?: string;
  userAffiliateList?: HotelOrderListQueryResponseBodyModuleUserAffiliateList[];
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripTitle: 'btrip_title',
      checkIn: 'check_in',
      checkOut: 'check_out',
      city: 'city',
      contactName: 'contact_name',
      corpId: 'corp_id',
      corpName: 'corp_name',
      costCenter: 'cost_center',
      departId: 'depart_id',
      departName: 'depart_name',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      guest: 'guest',
      hotelName: 'hotel_name',
      hotelSupportVatInvoiceType: 'hotel_support_vat_invoice_type',
      id: 'id',
      invoice: 'invoice',
      night: 'night',
      orderStatus: 'order_status',
      orderStatusDesc: 'order_status_desc',
      orderType: 'order_type',
      orderTypeDesc: 'order_type_desc',
      priceInfoList: 'price_info_list',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      roomNum: 'room_num',
      roomType: 'room_type',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      thirdpartProjectId: 'thirdpart_project_id',
      userAffiliateList: 'user_affiliate_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      btripTitle: 'string',
      checkIn: 'string',
      checkOut: 'string',
      city: 'string',
      contactName: 'string',
      corpId: 'string',
      corpName: 'string',
      costCenter: HotelOrderListQueryResponseBodyModuleCostCenter,
      departId: 'string',
      departName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      guest: 'string',
      hotelName: 'string',
      hotelSupportVatInvoiceType: 'number',
      id: 'number',
      invoice: HotelOrderListQueryResponseBodyModuleInvoice,
      night: 'number',
      orderStatus: 'number',
      orderStatusDesc: 'string',
      orderType: 'number',
      orderTypeDesc: 'string',
      priceInfoList: { 'type': 'array', 'itemType': HotelOrderListQueryResponseBodyModulePriceInfoList },
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      roomNum: 'number',
      roomType: 'string',
      thirdpartApplyId: 'string',
      thirdpartItineraryId: 'string',
      thirdpartProjectId: 'string',
      userAffiliateList: { 'type': 'array', 'itemType': HotelOrderListQueryResponseBodyModuleUserAffiliateList },
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderListQueryResponseBodyPageInfo extends $tea.Model {
  page?: number;
  pageSize?: number;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageSize: 'page_size',
      totalNumber: 'total_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryResponseBodyModuleHotelInfo extends $tea.Model {
  checkIn?: number;
  checkOut?: number;
  city?: string;
  hotelName?: string;
  hotelSupportVatInvoiceType?: number;
  night?: number;
  roomNum?: number;
  roomType?: string;
  static names(): { [key: string]: string } {
    return {
      checkIn: 'check_in',
      checkOut: 'check_out',
      city: 'city',
      hotelName: 'hotel_name',
      hotelSupportVatInvoiceType: 'hotel_support_vat_invoice_type',
      night: 'night',
      roomNum: 'room_num',
      roomType: 'room_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIn: 'number',
      checkOut: 'number',
      city: 'string',
      hotelName: 'string',
      hotelSupportVatInvoiceType: 'number',
      night: 'number',
      roomNum: 'number',
      roomType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryResponseBodyModuleInvoiceInfo extends $tea.Model {
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryResponseBodyModuleOrderBaseInfo extends $tea.Model {
  applyId?: string;
  btripTitle?: string;
  corpId?: string;
  corpName?: string;
  departId?: string;
  departName?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  itineraryId?: string;
  orderStatus?: number;
  orderType?: number;
  thirdpartApplyId?: string;
  thirdpartDepartId?: string;
  thirdpartItineraryId?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripTitle: 'btrip_title',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      itineraryId: 'itinerary_id',
      orderStatus: 'order_status',
      orderType: 'order_type',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripTitle: 'string',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      itineraryId: 'string',
      orderStatus: 'number',
      orderType: 'number',
      thirdpartApplyId: 'string',
      thirdpartDepartId: 'string',
      thirdpartItineraryId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryResponseBodyModulePassengerList extends $tea.Model {
  costCenterId?: number;
  costCenterName?: string;
  costCenterNumber?: string;
  projectCode?: string;
  projectId?: number;
  projectTitle?: string;
  thirdpartCostCenterId?: string;
  thirdpartProjectId?: string;
  userId?: string;
  userName?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartProjectId: 'thirdpart_project_id',
      userId: 'user_id',
      userName: 'user_name',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      costCenterName: 'string',
      costCenterNumber: 'string',
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartProjectId: 'string',
      userId: 'string',
      userName: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryResponseBodyModulePriceInfoList extends $tea.Model {
  categoryCode?: number;
  gmtCreate?: number;
  payType?: number;
  price?: number;
  tradeId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      gmtCreate: 'gmt_create',
      payType: 'pay_type',
      price: 'price',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      gmtCreate: 'number',
      payType: 'number',
      price: 'number',
      tradeId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryResponseBodyModule extends $tea.Model {
  hotelInfo?: HotelOrderQueryResponseBodyModuleHotelInfo;
  invoiceInfo?: HotelOrderQueryResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: HotelOrderQueryResponseBodyModuleOrderBaseInfo;
  passengerList?: HotelOrderQueryResponseBodyModulePassengerList[];
  priceInfoList?: HotelOrderQueryResponseBodyModulePriceInfoList[];
  static names(): { [key: string]: string } {
    return {
      hotelInfo: 'hotel_info',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerList: 'passenger_list',
      priceInfoList: 'price_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelInfo: HotelOrderQueryResponseBodyModuleHotelInfo,
      invoiceInfo: HotelOrderQueryResponseBodyModuleInvoiceInfo,
      orderBaseInfo: HotelOrderQueryResponseBodyModuleOrderBaseInfo,
      passengerList: { 'type': 'array', 'itemType': HotelOrderQueryResponseBodyModulePassengerList },
      priceInfoList: { 'type': 'array', 'itemType': HotelOrderQueryResponseBodyModulePriceInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IeFlightBillSettlementQueryResponseBodyModuleDataList extends $tea.Model {
  advanceDay?: number;
  airlineCorpCode?: string;
  airlineCorpName?: string;
  alipayTradeNo?: string;
  applyId?: string;
  arrAirportCode?: string;
  arrCity?: string;
  arrDate?: string;
  arrStation?: string;
  arrTime?: string;
  billRecordTime?: string;
  bookMode?: string;
  bookTime?: string;
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  btripCouponFee?: number;
  cabin?: string;
  cabinClass?: string;
  capitalDirection?: string;
  cascadeDepartment?: string;
  changeFee?: number;
  corpPayOrderFee?: number;
  costCenter?: string;
  costCenterNumber?: string;
  coupon?: number;
  depAirportCode?: string;
  department?: string;
  departmentId?: string;
  deptCity?: string;
  deptDate?: string;
  deptStation?: string;
  deptTime?: string;
  discount?: string;
  feeType?: string;
  flightNo?: string;
  index?: string;
  insuranceFee?: number;
  insuranceNumber?: string;
  invoiceTitle?: string;
  mostDifferenceDeptTime?: string;
  mostDifferenceDiscount?: string;
  mostDifferenceFlightNo?: string;
  mostDifferencePrice?: number;
  mostDifferenceReason?: string;
  mostPrice?: number;
  negotiationCouponFee?: number;
  orderId?: string;
  orderStatusDesc?: string;
  overApplyId?: string;
  primaryId?: number;
  projectCode?: string;
  projectName?: string;
  refundFee?: number;
  remark?: string;
  repeatRefund?: string;
  sealPrice?: number;
  segmentType?: string;
  serviceFee?: number;
  settlementFee?: number;
  settlementGrantFee?: number;
  settlementTime?: string;
  settlementType?: string;
  status?: number;
  subOrderId?: string;
  taxFee?: number;
  ticketId?: string;
  trade?: string;
  travelerId?: string;
  travelerJobNo?: string;
  travelerName?: string;
  voucherType?: number;
  static names(): { [key: string]: string } {
    return {
      advanceDay: 'advance_day',
      airlineCorpCode: 'airline_corp_code',
      airlineCorpName: 'airline_corp_name',
      alipayTradeNo: 'alipay_trade_no',
      applyId: 'apply_id',
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrDate: 'arr_date',
      arrStation: 'arr_station',
      arrTime: 'arr_time',
      billRecordTime: 'bill_record_time',
      bookMode: 'book_mode',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      btripCouponFee: 'btrip_coupon_fee',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      capitalDirection: 'capital_direction',
      cascadeDepartment: 'cascade_department',
      changeFee: 'change_fee',
      corpPayOrderFee: 'corp_pay_order_fee',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      coupon: 'coupon',
      depAirportCode: 'dep_airport_code',
      department: 'department',
      departmentId: 'department_id',
      deptCity: 'dept_city',
      deptDate: 'dept_date',
      deptStation: 'dept_station',
      deptTime: 'dept_time',
      discount: 'discount',
      feeType: 'fee_type',
      flightNo: 'flight_no',
      index: 'index',
      insuranceFee: 'insurance_fee',
      insuranceNumber: 'insurance_number',
      invoiceTitle: 'invoice_title',
      mostDifferenceDeptTime: 'most_difference_dept_time',
      mostDifferenceDiscount: 'most_difference_discount',
      mostDifferenceFlightNo: 'most_difference_flight_no',
      mostDifferencePrice: 'most_difference_price',
      mostDifferenceReason: 'most_difference_reason',
      mostPrice: 'most_price',
      negotiationCouponFee: 'negotiation_coupon_fee',
      orderId: 'order_id',
      orderStatusDesc: 'order_status_desc',
      overApplyId: 'over_apply_id',
      primaryId: 'primary_id',
      projectCode: 'project_code',
      projectName: 'project_name',
      refundFee: 'refund_fee',
      remark: 'remark',
      repeatRefund: 'repeat_refund',
      sealPrice: 'seal_price',
      segmentType: 'segment_type',
      serviceFee: 'service_fee',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      status: 'status',
      subOrderId: 'sub_order_id',
      taxFee: 'tax_fee',
      ticketId: 'ticket_id',
      trade: 'trade',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerName: 'traveler_name',
      voucherType: 'voucher_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceDay: 'number',
      airlineCorpCode: 'string',
      airlineCorpName: 'string',
      alipayTradeNo: 'string',
      applyId: 'string',
      arrAirportCode: 'string',
      arrCity: 'string',
      arrDate: 'string',
      arrStation: 'string',
      arrTime: 'string',
      billRecordTime: 'string',
      bookMode: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      btripCouponFee: 'number',
      cabin: 'string',
      cabinClass: 'string',
      capitalDirection: 'string',
      cascadeDepartment: 'string',
      changeFee: 'number',
      corpPayOrderFee: 'number',
      costCenter: 'string',
      costCenterNumber: 'string',
      coupon: 'number',
      depAirportCode: 'string',
      department: 'string',
      departmentId: 'string',
      deptCity: 'string',
      deptDate: 'string',
      deptStation: 'string',
      deptTime: 'string',
      discount: 'string',
      feeType: 'string',
      flightNo: 'string',
      index: 'string',
      insuranceFee: 'number',
      insuranceNumber: 'string',
      invoiceTitle: 'string',
      mostDifferenceDeptTime: 'string',
      mostDifferenceDiscount: 'string',
      mostDifferenceFlightNo: 'string',
      mostDifferencePrice: 'number',
      mostDifferenceReason: 'string',
      mostPrice: 'number',
      negotiationCouponFee: 'number',
      orderId: 'string',
      orderStatusDesc: 'string',
      overApplyId: 'string',
      primaryId: 'number',
      projectCode: 'string',
      projectName: 'string',
      refundFee: 'number',
      remark: 'string',
      repeatRefund: 'string',
      sealPrice: 'number',
      segmentType: 'string',
      serviceFee: 'number',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      status: 'number',
      subOrderId: 'string',
      taxFee: 'number',
      ticketId: 'string',
      trade: 'string',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerName: 'string',
      voucherType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IeFlightBillSettlementQueryResponseBodyModule extends $tea.Model {
  category?: number;
  corpId?: string;
  dataList?: IeFlightBillSettlementQueryResponseBodyModuleDataList[];
  periodEnd?: string;
  periodStart?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      corpId: 'corp_id',
      dataList: 'data_list',
      periodEnd: 'period_end',
      periodStart: 'period_start',
      totalNum: 'total_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      corpId: 'string',
      dataList: { 'type': 'array', 'itemType': IeFlightBillSettlementQueryResponseBodyModuleDataList },
      periodEnd: 'string',
      periodStart: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceRuleSaveRequestEntities extends $tea.Model {
  id?: string;
  name?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceRuleSaveResponseBodyModule extends $tea.Model {
  addNum?: number;
  removeNum?: number;
  static names(): { [key: string]: string } {
    return {
      addNum: 'add_num',
      removeNum: 'remove_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addNum: 'number',
      removeNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceSearchResponseBodyModule extends $tea.Model {
  id?: number;
  thirdPartInvoiceId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      thirdPartInvoiceId: 'third_part_invoice_id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      thirdPartInvoiceId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsvUserSaveRequestUserList extends $tea.Model {
  departId?: number;
  email?: string;
  jobNo?: string;
  leaveStatus?: number;
  managerUserId?: string;
  phone?: string;
  position?: string;
  positionLevel?: string;
  realNameEn?: string;
  thirdDepartId?: string;
  thirdDepartIdList?: string[];
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      departId: 'depart_id',
      email: 'email',
      jobNo: 'job_no',
      leaveStatus: 'leave_status',
      managerUserId: 'manager_user_id',
      phone: 'phone',
      position: 'position',
      positionLevel: 'position_level',
      realNameEn: 'real_name_en',
      thirdDepartId: 'third_depart_id',
      thirdDepartIdList: 'third_depart_id_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departId: 'number',
      email: 'string',
      jobNo: 'string',
      leaveStatus: 'number',
      managerUserId: 'string',
      phone: 'string',
      position: 'string',
      positionLevel: 'string',
      realNameEn: 'string',
      thirdDepartId: 'string',
      thirdDepartIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonthBillGetResponseBodyModule extends $tea.Model {
  endDate?: string;
  startDate?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'end_date',
      startDate: 'start_date',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      startDate: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingApplyRequestModifyFlightInfoListPassengerInfoList extends $tea.Model {
  originFlightNo?: string;
  outUserId?: string;
  passengerName?: string;
  static names(): { [key: string]: string } {
    return {
      originFlightNo: 'origin_flight_no',
      outUserId: 'out_user_id',
      passengerName: 'passenger_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originFlightNo: 'string',
      outUserId: 'string',
      passengerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingApplyRequestModifyFlightInfoList extends $tea.Model {
  arrCity?: string;
  cabin?: string;
  depCity?: string;
  depDate?: string;
  flightNo?: string;
  passengerInfoList?: TicketChangingApplyRequestModifyFlightInfoListPassengerInfoList[];
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      cabin: 'cabin',
      depCity: 'dep_city',
      depDate: 'dep_date',
      flightNo: 'flight_no',
      passengerInfoList: 'passenger_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      cabin: 'string',
      depCity: 'string',
      depDate: 'string',
      flightNo: 'string',
      passengerInfoList: { 'type': 'array', 'itemType': TicketChangingApplyRequestModifyFlightInfoListPassengerInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingApplyResponseBodyModule extends $tea.Model {
  bookingChangedTotalFee?: number;
  bookingOriginTotalFee?: number;
  bookingPriceChanged?: boolean;
  btripOrderId?: number;
  btripSubOrderId?: number;
  canPay?: boolean;
  changeFee?: number;
  deadlineTime?: string;
  disOrderId?: string;
  disSubOrderId?: string;
  maxRetryTimes?: number;
  nextRetryInterval?: number;
  retry?: boolean;
  retryClientTips?: string;
  status?: number;
  upgradeFee?: number;
  static names(): { [key: string]: string } {
    return {
      bookingChangedTotalFee: 'booking_changed_total_fee',
      bookingOriginTotalFee: 'booking_origin_total_fee',
      bookingPriceChanged: 'booking_price_changed',
      btripOrderId: 'btrip_order_id',
      btripSubOrderId: 'btrip_sub_order_id',
      canPay: 'can_pay',
      changeFee: 'change_fee',
      deadlineTime: 'deadline_time',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      maxRetryTimes: 'max_retry_times',
      nextRetryInterval: 'next_retry_interval',
      retry: 'retry',
      retryClientTips: 'retry_client_tips',
      status: 'status',
      upgradeFee: 'upgrade_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookingChangedTotalFee: 'number',
      bookingOriginTotalFee: 'number',
      bookingPriceChanged: 'boolean',
      btripOrderId: 'number',
      btripSubOrderId: 'number',
      canPay: 'boolean',
      changeFee: 'number',
      deadlineTime: 'string',
      disOrderId: 'string',
      disSubOrderId: 'string',
      maxRetryTimes: 'number',
      nextRetryInterval: 'number',
      retry: 'boolean',
      retryClientTips: 'string',
      status: 'number',
      upgradeFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingCancelResponseBodyModule extends $tea.Model {
  cancelTime?: string;
  disSubOrderId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cancelTime: 'cancel_time',
      disSubOrderId: 'dis_sub_order_id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelTime: 'string',
      disSubOrderId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingDetailResponseBodyModuleFlightInfoList extends $tea.Model {
  airlineCode?: string;
  airlineName?: string;
  airlineSimpleName?: string;
  arrAirport?: string;
  arrAirportCode?: string;
  arrAirportCodeName?: string;
  arrCity?: string;
  arrCityCode?: string;
  arrTerminal?: string;
  arrTime?: string;
  baggage?: string;
  buildPrice?: number;
  cabin?: string;
  cabinClass?: string;
  carrier?: string;
  depAirport?: string;
  depAirportCode?: string;
  depAirportCodeName?: string;
  depCity?: string;
  depCityCode?: string;
  depTerminal?: string;
  depTime?: string;
  flightNo?: string;
  lastCabin?: string;
  lastFlightNo?: string;
  meal?: string;
  oilPrice?: number;
  segmentType?: number;
  stopArrTime?: string;
  stopCity?: string;
  stopDepTime?: string;
  ticketPrice?: number;
  tuigaiqianInfo?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      airlineSimpleName: 'airline_simple_name',
      arrAirport: 'arr_airport',
      arrAirportCode: 'arr_airport_code',
      arrAirportCodeName: 'arr_airport_code_name',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      baggage: 'baggage',
      buildPrice: 'build_price',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      carrier: 'carrier',
      depAirport: 'dep_airport',
      depAirportCode: 'dep_airport_code',
      depAirportCodeName: 'dep_airport_code_name',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightNo: 'flight_no',
      lastCabin: 'last_cabin',
      lastFlightNo: 'last_flight_no',
      meal: 'meal',
      oilPrice: 'oil_price',
      segmentType: 'segment_type',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopDepTime: 'stop_dep_time',
      ticketPrice: 'ticket_price',
      tuigaiqianInfo: 'tuigaiqian_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      airlineSimpleName: 'string',
      arrAirport: 'string',
      arrAirportCode: 'string',
      arrAirportCodeName: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      baggage: 'string',
      buildPrice: 'number',
      cabin: 'string',
      cabinClass: 'string',
      carrier: 'string',
      depAirport: 'string',
      depAirportCode: 'string',
      depAirportCodeName: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightNo: 'string',
      lastCabin: 'string',
      lastFlightNo: 'string',
      meal: 'string',
      oilPrice: 'number',
      segmentType: 'number',
      stopArrTime: 'string',
      stopCity: 'string',
      stopDepTime: 'string',
      ticketPrice: 'number',
      tuigaiqianInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingDetailResponseBodyModuleTravelerInfoList extends $tea.Model {
  birthDate?: string;
  certNo?: string;
  certType?: string;
  openTicketStatus?: number;
  passengerName?: string;
  passengerType?: string;
  phone?: string;
  ticketNo?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      birthDate: 'birth_date',
      certNo: 'cert_no',
      certType: 'cert_type',
      openTicketStatus: 'open_ticket_status',
      passengerName: 'passenger_name',
      passengerType: 'passenger_type',
      phone: 'phone',
      ticketNo: 'ticket_no',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: 'string',
      certNo: 'string',
      certType: 'string',
      openTicketStatus: 'number',
      passengerName: 'string',
      passengerType: 'string',
      phone: 'string',
      ticketNo: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingDetailResponseBodyModule extends $tea.Model {
  alipayTradeNo?: string;
  btripOrderId?: number;
  btripSubOrderId?: number;
  disOrderId?: string;
  disSubOrderId?: string;
  extra?: string;
  flightInfoList?: TicketChangingDetailResponseBodyModuleFlightInfoList[];
  lastPayTime?: string;
  payStatus?: number;
  payTime?: string;
  settlePrice?: number;
  settleType?: number;
  status?: number;
  totalChangePrice?: number;
  totalPrice?: number;
  totalUpgradePrice?: number;
  travelerInfoList?: TicketChangingDetailResponseBodyModuleTravelerInfoList[];
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      btripOrderId: 'btrip_order_id',
      btripSubOrderId: 'btrip_sub_order_id',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      extra: 'extra',
      flightInfoList: 'flight_info_list',
      lastPayTime: 'last_pay_time',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      settlePrice: 'settle_price',
      settleType: 'settle_type',
      status: 'status',
      totalChangePrice: 'total_change_price',
      totalPrice: 'total_price',
      totalUpgradePrice: 'total_upgrade_price',
      travelerInfoList: 'traveler_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayTradeNo: 'string',
      btripOrderId: 'number',
      btripSubOrderId: 'number',
      disOrderId: 'string',
      disSubOrderId: 'string',
      extra: 'string',
      flightInfoList: { 'type': 'array', 'itemType': TicketChangingDetailResponseBodyModuleFlightInfoList },
      lastPayTime: 'string',
      payStatus: 'number',
      payTime: 'string',
      settlePrice: 'number',
      settleType: 'number',
      status: 'number',
      totalChangePrice: 'number',
      totalPrice: 'number',
      totalUpgradePrice: 'number',
      travelerInfoList: { 'type': 'array', 'itemType': TicketChangingDetailResponseBodyModuleTravelerInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListAirlineInfo extends $tea.Model {
  airlineCode?: string;
  airlineName?: string;
  airlineSimpleName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      airlineSimpleName: 'airline_simple_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      airlineSimpleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListArrAirportInfo extends $tea.Model {
  airportCode?: string;
  airportName?: string;
  cityCode?: string;
  cityName?: string;
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      cityCode: 'city_code',
      cityName: 'city_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      cityCode: 'string',
      cityName: 'string',
      terminal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListModifyPriceList extends $tea.Model {
  passengerType?: number;
  ticketPrice?: number;
  upgradeFee?: number;
  upgradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerType: 'passenger_type',
      ticketPrice: 'ticket_price',
      upgradeFee: 'upgrade_fee',
      upgradePrice: 'upgrade_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerType: 'number',
      ticketPrice: 'number',
      upgradeFee: 'number',
      upgradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinList extends $tea.Model {
  cabin?: string;
  cabinClass?: string;
  cabinDesc?: string;
  cabinDiscount?: number;
  childCabin?: string;
  leftNum?: string;
  modifyPriceList?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListModifyPriceList[];
  otaItemid?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinDesc: 'cabin_desc',
      cabinDiscount: 'cabin_discount',
      childCabin: 'child_cabin',
      leftNum: 'left_num',
      modifyPriceList: 'modify_price_list',
      otaItemid: 'ota_itemid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      cabinDesc: 'string',
      cabinDiscount: 'number',
      childCabin: 'string',
      leftNum: 'string',
      modifyPriceList: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListModifyPriceList },
      otaItemid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListDepAirportInfo extends $tea.Model {
  airportCode?: string;
  airportName?: string;
  cityCode?: string;
  cityName?: string;
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      cityCode: 'city_code',
      cityName: 'city_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      cityCode: 'string',
      cityName: 'string',
      terminal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoListLowestCabinPrice extends $tea.Model {
  passengerType?: number;
  ticketPrice?: number;
  upgradeFee?: number;
  upgradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerType: 'passenger_type',
      ticketPrice: 'ticket_price',
      upgradeFee: 'upgrade_fee',
      upgradePrice: 'upgrade_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerType: 'number',
      ticketPrice: 'number',
      upgradeFee: 'number',
      upgradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModuleFlightInfoList extends $tea.Model {
  airlineInfo?: TicketChangingEnquiryResponseBodyModuleFlightInfoListAirlineInfo;
  arrAirportInfo?: TicketChangingEnquiryResponseBodyModuleFlightInfoListArrAirportInfo;
  cabinList?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinList[];
  carrierAirline?: string;
  carrierNo?: string;
  depAirportInfo?: TicketChangingEnquiryResponseBodyModuleFlightInfoListDepAirportInfo;
  depCityCode?: string;
  flightNo?: string;
  isShare?: boolean;
  lowestCabin?: string;
  lowestCabinClass?: string;
  lowestCabinDesc?: string;
  lowestCabinNum?: string;
  lowestCabinPrice?: TicketChangingEnquiryResponseBodyModuleFlightInfoListLowestCabinPrice[];
  modifyFlightArrTime?: string;
  modifyFlightDepDate?: string;
  modifyFlightDepTime?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      cabinList: 'cabin_list',
      carrierAirline: 'carrier_airline',
      carrierNo: 'carrier_no',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      flightNo: 'flight_no',
      isShare: 'is_share',
      lowestCabin: 'lowest_cabin',
      lowestCabinClass: 'lowest_cabin_class',
      lowestCabinDesc: 'lowest_cabin_desc',
      lowestCabinNum: 'lowest_cabin_num',
      lowestCabinPrice: 'lowest_cabin_price',
      modifyFlightArrTime: 'modify_flight_arr_time',
      modifyFlightDepDate: 'modify_flight_dep_date',
      modifyFlightDepTime: 'modify_flight_dep_time',
      sessionId: 'session_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: TicketChangingEnquiryResponseBodyModuleFlightInfoListAirlineInfo,
      arrAirportInfo: TicketChangingEnquiryResponseBodyModuleFlightInfoListArrAirportInfo,
      cabinList: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinList },
      carrierAirline: 'string',
      carrierNo: 'string',
      depAirportInfo: TicketChangingEnquiryResponseBodyModuleFlightInfoListDepAirportInfo,
      depCityCode: 'string',
      flightNo: 'string',
      isShare: 'boolean',
      lowestCabin: 'string',
      lowestCabinClass: 'string',
      lowestCabinDesc: 'string',
      lowestCabinNum: 'string',
      lowestCabinPrice: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListLowestCabinPrice },
      modifyFlightArrTime: 'string',
      modifyFlightDepDate: 'string',
      modifyFlightDepTime: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingEnquiryResponseBodyModule extends $tea.Model {
  flightInfoList?: TicketChangingEnquiryResponseBodyModuleFlightInfoList[];
  static names(): { [key: string]: string } {
    return {
      flightInfoList: 'flight_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightInfoList: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListRequestTravelerInfoList extends $tea.Model {
  arrCity?: string;
  depCity?: string;
  name?: string;
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      depCity: 'dep_city',
      name: 'name',
      type: 'type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      depCity: 'string',
      name: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModuleFlightInfoListAirlineInfo extends $tea.Model {
  airlineCode?: string;
  airlineName?: string;
  airlineSimpleName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      airlineSimpleName: 'airline_simple_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      airlineSimpleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModuleFlightInfoListArrAirportInfo extends $tea.Model {
  airportCode?: string;
  airportName?: string;
  cityCode?: string;
  cityName?: string;
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      cityCode: 'city_code',
      cityName: 'city_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      cityCode: 'string',
      cityName: 'string',
      terminal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModuleFlightInfoListCabinListModifyPriceList extends $tea.Model {
  passengerType?: number;
  ticketPrice?: number;
  upgradeFee?: number;
  upgradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerType: 'passenger_type',
      ticketPrice: 'ticket_price',
      upgradeFee: 'upgrade_fee',
      upgradePrice: 'upgrade_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerType: 'number',
      ticketPrice: 'number',
      upgradeFee: 'number',
      upgradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModuleFlightInfoListCabinList extends $tea.Model {
  cabin?: string;
  cabinClass?: string;
  cabinDesc?: string;
  cabinDiscount?: number;
  childCabin?: string;
  leftNum?: string;
  modifyPriceList?: TicketChangingFlightListResponseBodyModuleFlightInfoListCabinListModifyPriceList[];
  otaItemid?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinDesc: 'cabin_desc',
      cabinDiscount: 'cabin_discount',
      childCabin: 'child_cabin',
      leftNum: 'left_num',
      modifyPriceList: 'modify_price_list',
      otaItemid: 'ota_itemid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      cabinDesc: 'string',
      cabinDiscount: 'number',
      childCabin: 'string',
      leftNum: 'string',
      modifyPriceList: { 'type': 'array', 'itemType': TicketChangingFlightListResponseBodyModuleFlightInfoListCabinListModifyPriceList },
      otaItemid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModuleFlightInfoListDepAirportInfo extends $tea.Model {
  airportCode?: string;
  airportName?: string;
  cityCode?: string;
  cityName?: string;
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      cityCode: 'city_code',
      cityName: 'city_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      cityCode: 'string',
      cityName: 'string',
      terminal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModuleFlightInfoListLowestCabinPrice extends $tea.Model {
  passengerType?: number;
  ticketPrice?: number;
  upgradeFee?: number;
  upgradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerType: 'passenger_type',
      ticketPrice: 'ticket_price',
      upgradeFee: 'upgrade_fee',
      upgradePrice: 'upgrade_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerType: 'number',
      ticketPrice: 'number',
      upgradeFee: 'number',
      upgradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModuleFlightInfoList extends $tea.Model {
  airlineInfo?: TicketChangingFlightListResponseBodyModuleFlightInfoListAirlineInfo;
  arrAirportInfo?: TicketChangingFlightListResponseBodyModuleFlightInfoListArrAirportInfo;
  cabinList?: TicketChangingFlightListResponseBodyModuleFlightInfoListCabinList[];
  carrierAirline?: string;
  carrierNo?: string;
  depAirportInfo?: TicketChangingFlightListResponseBodyModuleFlightInfoListDepAirportInfo;
  flightNo?: string;
  flightSize?: string;
  flightType?: string;
  isProtocol?: boolean;
  isShare?: boolean;
  isStop?: boolean;
  lowestCabin?: string;
  lowestCabinClass?: string;
  lowestCabinDesc?: string;
  lowestCabinNum?: string;
  lowestCabinPrice?: TicketChangingFlightListResponseBodyModuleFlightInfoListLowestCabinPrice[];
  mealDesc?: string;
  modifyFlightArrTime?: string;
  modifyFlightDepDate?: string;
  modifyFlightDepTime?: string;
  sessionId?: string;
  stopArrTime?: string;
  stopCity?: string;
  stopDepTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      cabinList: 'cabin_list',
      carrierAirline: 'carrier_airline',
      carrierNo: 'carrier_no',
      depAirportInfo: 'dep_airport_info',
      flightNo: 'flight_no',
      flightSize: 'flight_size',
      flightType: 'flight_type',
      isProtocol: 'is_protocol',
      isShare: 'is_share',
      isStop: 'is_stop',
      lowestCabin: 'lowest_cabin',
      lowestCabinClass: 'lowest_cabin_class',
      lowestCabinDesc: 'lowest_cabin_desc',
      lowestCabinNum: 'lowest_cabin_num',
      lowestCabinPrice: 'lowest_cabin_price',
      mealDesc: 'meal_desc',
      modifyFlightArrTime: 'modify_flight_arr_time',
      modifyFlightDepDate: 'modify_flight_dep_date',
      modifyFlightDepTime: 'modify_flight_dep_time',
      sessionId: 'session_id',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopDepTime: 'stop_dep_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: TicketChangingFlightListResponseBodyModuleFlightInfoListAirlineInfo,
      arrAirportInfo: TicketChangingFlightListResponseBodyModuleFlightInfoListArrAirportInfo,
      cabinList: { 'type': 'array', 'itemType': TicketChangingFlightListResponseBodyModuleFlightInfoListCabinList },
      carrierAirline: 'string',
      carrierNo: 'string',
      depAirportInfo: TicketChangingFlightListResponseBodyModuleFlightInfoListDepAirportInfo,
      flightNo: 'string',
      flightSize: 'string',
      flightType: 'string',
      isProtocol: 'boolean',
      isShare: 'boolean',
      isStop: 'boolean',
      lowestCabin: 'string',
      lowestCabinClass: 'string',
      lowestCabinDesc: 'string',
      lowestCabinNum: 'string',
      lowestCabinPrice: { 'type': 'array', 'itemType': TicketChangingFlightListResponseBodyModuleFlightInfoListLowestCabinPrice },
      mealDesc: 'string',
      modifyFlightArrTime: 'string',
      modifyFlightDepDate: 'string',
      modifyFlightDepTime: 'string',
      sessionId: 'string',
      stopArrTime: 'string',
      stopCity: 'string',
      stopDepTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListResponseBodyModule extends $tea.Model {
  flightInfoList?: TicketChangingFlightListResponseBodyModuleFlightInfoList[];
  static names(): { [key: string]: string } {
    return {
      flightInfoList: 'flight_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightInfoList: { 'type': 'array', 'itemType': TicketChangingFlightListResponseBodyModuleFlightInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingPayResponseBodyModule extends $tea.Model {
  canRetry?: boolean;
  payPrice?: number;
  payStatus?: number;
  payTime?: string;
  tradeNo?: string;
  static names(): { [key: string]: string } {
    return {
      canRetry: 'can_retry',
      payPrice: 'pay_price',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      tradeNo: 'trade_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canRetry: 'boolean',
      payPrice: 'number',
      payStatus: 'number',
      payTime: 'string',
      tradeNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainBillSettlementQueryResponseBodyModuleDataList extends $tea.Model {
  alipayTradeNo?: string;
  applyId?: string;
  arrDate?: string;
  arrStation?: string;
  arrTime?: string;
  billRecordTime?: string;
  bookTime?: string;
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  capitalDirection?: string;
  cascadeDepartment?: string;
  changeFee?: number;
  costCenter?: string;
  costCenterNumber?: string;
  coupon?: number;
  department?: string;
  departmentId?: string;
  deptDate?: string;
  deptStation?: string;
  deptTime?: string;
  feeType?: string;
  index?: string;
  invoiceTitle?: string;
  orderId?: string;
  orderPrice?: number;
  overApplyId?: string;
  primaryId?: number;
  projectCode?: string;
  projectName?: string;
  refundFee?: number;
  remark?: string;
  runTime?: string;
  seatNo?: string;
  seatType?: string;
  serviceFee?: number;
  settlementFee?: number;
  settlementGrantFee?: number;
  settlementTime?: string;
  settlementType?: string;
  status?: number;
  ticketNo?: string;
  ticketPrice?: number;
  trainNo?: string;
  trainType?: string;
  travelerId?: string;
  travelerJobNo?: string;
  travelerName?: string;
  voucherType?: number;
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      applyId: 'apply_id',
      arrDate: 'arr_date',
      arrStation: 'arr_station',
      arrTime: 'arr_time',
      billRecordTime: 'bill_record_time',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      capitalDirection: 'capital_direction',
      cascadeDepartment: 'cascade_department',
      changeFee: 'change_fee',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      coupon: 'coupon',
      department: 'department',
      departmentId: 'department_id',
      deptDate: 'dept_date',
      deptStation: 'dept_station',
      deptTime: 'dept_time',
      feeType: 'fee_type',
      index: 'index',
      invoiceTitle: 'invoice_title',
      orderId: 'order_id',
      orderPrice: 'order_price',
      overApplyId: 'over_apply_id',
      primaryId: 'primary_id',
      projectCode: 'project_code',
      projectName: 'project_name',
      refundFee: 'refund_fee',
      remark: 'remark',
      runTime: 'run_time',
      seatNo: 'seat_no',
      seatType: 'seat_type',
      serviceFee: 'service_fee',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      status: 'status',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      trainNo: 'train_no',
      trainType: 'train_type',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerName: 'traveler_name',
      voucherType: 'voucher_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayTradeNo: 'string',
      applyId: 'string',
      arrDate: 'string',
      arrStation: 'string',
      arrTime: 'string',
      billRecordTime: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      capitalDirection: 'string',
      cascadeDepartment: 'string',
      changeFee: 'number',
      costCenter: 'string',
      costCenterNumber: 'string',
      coupon: 'number',
      department: 'string',
      departmentId: 'string',
      deptDate: 'string',
      deptStation: 'string',
      deptTime: 'string',
      feeType: 'string',
      index: 'string',
      invoiceTitle: 'string',
      orderId: 'string',
      orderPrice: 'number',
      overApplyId: 'string',
      primaryId: 'number',
      projectCode: 'string',
      projectName: 'string',
      refundFee: 'number',
      remark: 'string',
      runTime: 'string',
      seatNo: 'string',
      seatType: 'string',
      serviceFee: 'number',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      status: 'number',
      ticketNo: 'string',
      ticketPrice: 'number',
      trainNo: 'string',
      trainType: 'string',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerName: 'string',
      voucherType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainBillSettlementQueryResponseBodyModule extends $tea.Model {
  category?: number;
  corpId?: string;
  dataList?: TrainBillSettlementQueryResponseBodyModuleDataList[];
  periodEnd?: string;
  periodStart?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      corpId: 'corp_id',
      dataList: 'data_list',
      periodEnd: 'period_end',
      periodStart: 'period_start',
      totalNum: 'total_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      corpId: 'string',
      dataList: { 'type': 'array', 'itemType': TrainBillSettlementQueryResponseBodyModuleDataList },
      periodEnd: 'string',
      periodStart: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainExceedApplyQueryResponseBodyModuleApplyIntentionInfoDO extends $tea.Model {
  arrCity?: string;
  arrCityName?: string;
  arrStation?: string;
  arrTime?: string;
  depCity?: string;
  depCityName?: string;
  depStation?: string;
  depTime?: string;
  price?: number;
  seatName?: string;
  trainNo?: string;
  trainTypeDesc?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrCityName: 'arr_city_name',
      arrStation: 'arr_station',
      arrTime: 'arr_time',
      depCity: 'dep_city',
      depCityName: 'dep_city_name',
      depStation: 'dep_station',
      depTime: 'dep_time',
      price: 'price',
      seatName: 'seat_name',
      trainNo: 'train_no',
      trainTypeDesc: 'train_type_desc',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrCityName: 'string',
      arrStation: 'string',
      arrTime: 'string',
      depCity: 'string',
      depCityName: 'string',
      depStation: 'string',
      depTime: 'string',
      price: 'number',
      seatName: 'string',
      trainNo: 'string',
      trainTypeDesc: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainExceedApplyQueryResponseBodyModule extends $tea.Model {
  applyId?: number;
  applyIntentionInfoDO?: TrainExceedApplyQueryResponseBodyModuleApplyIntentionInfoDO;
  btripCause?: string;
  corpId?: string;
  exceedReason?: string;
  exceedType?: number;
  originStandard?: string;
  status?: number;
  submitTime?: string;
  thirdpartApplyId?: string;
  thirdpartCorpId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      applyIntentionInfoDO: 'apply_intention_info_d_o',
      btripCause: 'btrip_cause',
      corpId: 'corp_id',
      exceedReason: 'exceed_reason',
      exceedType: 'exceed_type',
      originStandard: 'origin_standard',
      status: 'status',
      submitTime: 'submit_time',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartCorpId: 'thirdpart_corp_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      applyIntentionInfoDO: TrainExceedApplyQueryResponseBodyModuleApplyIntentionInfoDO,
      btripCause: 'string',
      corpId: 'string',
      exceedReason: 'string',
      exceedType: 'number',
      originStandard: 'string',
      status: 'number',
      submitTime: 'string',
      thirdpartApplyId: 'string',
      thirdpartCorpId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryResponseBodyModuleCostCenter extends $tea.Model {
  corpId?: string;
  id?: number;
  name?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corp_id',
      id: 'id',
      name: 'name',
      number: 'number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      id: 'number',
      name: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryResponseBodyModuleInvoice extends $tea.Model {
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryResponseBodyModulePriceInfoList extends $tea.Model {
  categoryCode?: number;
  categoryType?: number;
  endCity?: string;
  endTime?: string;
  gmtCreate?: string;
  originalTrainNo?: string;
  passengerName?: string;
  payType?: number;
  price?: number;
  seatType?: string;
  startCity?: string;
  startTime?: string;
  tradeId?: string;
  trainNo?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      categoryType: 'category_type',
      endCity: 'end_city',
      endTime: 'end_time',
      gmtCreate: 'gmt_create',
      originalTrainNo: 'original_train_no',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      price: 'price',
      seatType: 'seat_type',
      startCity: 'start_city',
      startTime: 'start_time',
      tradeId: 'trade_id',
      trainNo: 'train_no',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      categoryType: 'number',
      endCity: 'string',
      endTime: 'string',
      gmtCreate: 'string',
      originalTrainNo: 'string',
      passengerName: 'string',
      payType: 'number',
      price: 'number',
      seatType: 'string',
      startCity: 'string',
      startTime: 'string',
      tradeId: 'string',
      trainNo: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryResponseBodyModuleUserAffiliateList extends $tea.Model {
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryResponseBodyModule extends $tea.Model {
  applyId?: number;
  arrCity?: string;
  arrStation?: string;
  arrTime?: string;
  btripTitle?: string;
  contactName?: string;
  corpId?: string;
  corpName?: string;
  costCenter?: TrainOrderListQueryResponseBodyModuleCostCenter;
  depCity?: string;
  depStation?: string;
  depTime?: string;
  departId?: string;
  departName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  invoice?: TrainOrderListQueryResponseBodyModuleInvoice;
  priceInfoList?: TrainOrderListQueryResponseBodyModulePriceInfoList[];
  projectCode?: string;
  projectId?: number;
  projectTitle?: string;
  riderName?: string;
  runTime?: string;
  seatType?: string;
  status?: number;
  thirdPartProjectId?: string;
  thirdpartApplyId?: string;
  thirdpartItineraryId?: string;
  ticketCount?: number;
  ticketNo12306?: string;
  trainNumber?: string;
  trainType?: string;
  userAffiliateList?: TrainOrderListQueryResponseBodyModuleUserAffiliateList[];
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      arrCity: 'arr_city',
      arrStation: 'arr_station',
      arrTime: 'arr_time',
      btripTitle: 'btrip_title',
      contactName: 'contact_name',
      corpId: 'corp_id',
      corpName: 'corp_name',
      costCenter: 'cost_center',
      depCity: 'dep_city',
      depStation: 'dep_station',
      depTime: 'dep_time',
      departId: 'depart_id',
      departName: 'depart_name',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      invoice: 'invoice',
      priceInfoList: 'price_info_list',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      riderName: 'rider_name',
      runTime: 'run_time',
      seatType: 'seat_type',
      status: 'status',
      thirdPartProjectId: 'third_part_project_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      ticketCount: 'ticket_count',
      ticketNo12306: 'ticket_no12306',
      trainNumber: 'train_number',
      trainType: 'train_type',
      userAffiliateList: 'user_affiliate_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      arrCity: 'string',
      arrStation: 'string',
      arrTime: 'string',
      btripTitle: 'string',
      contactName: 'string',
      corpId: 'string',
      corpName: 'string',
      costCenter: TrainOrderListQueryResponseBodyModuleCostCenter,
      depCity: 'string',
      depStation: 'string',
      depTime: 'string',
      departId: 'string',
      departName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      invoice: TrainOrderListQueryResponseBodyModuleInvoice,
      priceInfoList: { 'type': 'array', 'itemType': TrainOrderListQueryResponseBodyModulePriceInfoList },
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      riderName: 'string',
      runTime: 'string',
      seatType: 'string',
      status: 'number',
      thirdPartProjectId: 'string',
      thirdpartApplyId: 'string',
      thirdpartItineraryId: 'string',
      ticketCount: 'number',
      ticketNo12306: 'string',
      trainNumber: 'string',
      trainType: 'string',
      userAffiliateList: { 'type': 'array', 'itemType': TrainOrderListQueryResponseBodyModuleUserAffiliateList },
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryResponseBodyPageInfo extends $tea.Model {
  page?: number;
  pageSize?: number;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageSize: 'page_size',
      totalNumber: 'total_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryResponseBodyModuleChangeTicketInfoList extends $tea.Model {
  changeCoachNo?: string;
  changeGapFee?: number;
  changeHandlingFee?: number;
  changeSeatNo?: string;
  changeSeatTypeName?: string;
  changeServiceFee?: number;
  changeTrainNo?: string;
  changeTrainTypeName?: string;
  checkInTime?: string;
  checkOutTime?: string;
  endTime?: string;
  fromStationName?: string;
  gmtCreate?: string;
  gmtModify?: string;
  originTicketNo?: string;
  outTicketStatus?: string;
  startTime?: string;
  ticketNo?: string;
  toStationName?: string;
  static names(): { [key: string]: string } {
    return {
      changeCoachNo: 'change_coach_no',
      changeGapFee: 'change_gap_fee',
      changeHandlingFee: 'change_handling_fee',
      changeSeatNo: 'change_seat_no',
      changeSeatTypeName: 'change_seat_type_name',
      changeServiceFee: 'change_service_fee',
      changeTrainNo: 'change_train_no',
      changeTrainTypeName: 'change_train_type_name',
      checkInTime: 'check_in_time',
      checkOutTime: 'check_out_time',
      endTime: 'end_time',
      fromStationName: 'from_station_name',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      originTicketNo: 'origin_ticket_no',
      outTicketStatus: 'out_ticket_status',
      startTime: 'start_time',
      ticketNo: 'ticket_no',
      toStationName: 'to_station_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeCoachNo: 'string',
      changeGapFee: 'number',
      changeHandlingFee: 'number',
      changeSeatNo: 'string',
      changeSeatTypeName: 'string',
      changeServiceFee: 'number',
      changeTrainNo: 'string',
      changeTrainTypeName: 'string',
      checkInTime: 'string',
      checkOutTime: 'string',
      endTime: 'string',
      fromStationName: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      originTicketNo: 'string',
      outTicketStatus: 'string',
      startTime: 'string',
      ticketNo: 'string',
      toStationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryResponseBodyModuleInvoiceInfo extends $tea.Model {
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryResponseBodyModuleOrderBaseInfo extends $tea.Model {
  applyId?: string;
  btripTitle?: string;
  contactName?: string;
  corpId?: string;
  corpName?: string;
  departId?: string;
  departName?: string;
  exceedApplyId?: string;
  exceedThirdPartApplyId?: string;
  gmtCreate?: string;
  gmtModify?: string;
  itineraryId?: string;
  orderId?: number;
  orderStatus?: number;
  thirdpartApplyId?: string;
  thirdpartCorpId?: string;
  thirdpartItineraryId?: string;
  tripType?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripTitle: 'btrip_title',
      contactName: 'contact_name',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      exceedApplyId: 'exceed_apply_id',
      exceedThirdPartApplyId: 'exceed_third_part_apply_id',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      itineraryId: 'itinerary_id',
      orderId: 'order_id',
      orderStatus: 'order_status',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartCorpId: 'thirdpart_corp_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      tripType: 'trip_type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripTitle: 'string',
      contactName: 'string',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      exceedApplyId: 'string',
      exceedThirdPartApplyId: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      itineraryId: 'string',
      orderId: 'number',
      orderStatus: 'number',
      thirdpartApplyId: 'string',
      thirdpartCorpId: 'string',
      thirdpartItineraryId: 'string',
      tripType: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryResponseBodyModulePassengerInfoList extends $tea.Model {
  costCenterId?: number;
  costCenterName?: string;
  costCenterNumber?: string;
  projectCode?: string;
  projectId?: number;
  projectTitle?: string;
  thirdpartProjectId?: string;
  userId?: string;
  userName?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      thirdpartProjectId: 'thirdpart_project_id',
      userId: 'user_id',
      userName: 'user_name',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      costCenterName: 'string',
      costCenterNumber: 'string',
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      thirdpartProjectId: 'string',
      userId: 'string',
      userName: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryResponseBodyModulePriceInfoList extends $tea.Model {
  categoryCode?: number;
  gmtCreate?: string;
  passengerName?: string;
  payType?: number;
  price?: number;
  tradeId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      gmtCreate: 'gmt_create',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      price: 'price',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      gmtCreate: 'string',
      passengerName: 'string',
      payType: 'number',
      price: 'number',
      tradeId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryResponseBodyModuleRefundTicketInfoList extends $tea.Model {
  gmtCreate?: string;
  gmtModify?: string;
  refundFee?: number;
  refundServiceFee?: number;
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      refundFee: 'refund_fee',
      refundServiceFee: 'refund_service_fee',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModify: 'string',
      refundFee: 'number',
      refundServiceFee: 'number',
      ticketNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryResponseBodyModuleTicketInfoList extends $tea.Model {
  changed?: boolean;
  checkInTime?: string;
  checkOutTime?: string;
  coachNo?: string;
  endTime?: string;
  gmtCreate?: string;
  gmtModify?: string;
  outTicketStatus?: string;
  payType?: number;
  seatNo?: string;
  seatTypeName?: string;
  serviceFee?: number;
  startTime?: string;
  ticketNo?: string;
  ticketPrice?: number;
  ticketStatus?: number;
  trainTypeName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      changed: 'changed',
      checkInTime: 'check_in_time',
      checkOutTime: 'check_out_time',
      coachNo: 'coach_no',
      endTime: 'end_time',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      outTicketStatus: 'out_ticket_status',
      payType: 'pay_type',
      seatNo: 'seat_no',
      seatTypeName: 'seat_type_name',
      serviceFee: 'service_fee',
      startTime: 'start_time',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
      trainTypeName: 'train_type_name',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changed: 'boolean',
      checkInTime: 'string',
      checkOutTime: 'string',
      coachNo: 'string',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      outTicketStatus: 'string',
      payType: 'number',
      seatNo: 'string',
      seatTypeName: 'string',
      serviceFee: 'number',
      startTime: 'string',
      ticketNo: 'string',
      ticketPrice: 'number',
      ticketStatus: 'number',
      trainTypeName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryResponseBodyModuleTrainInfo extends $tea.Model {
  arrTime?: string;
  depTime?: string;
  fromStationName?: string;
  runTime?: number;
  toStationName?: string;
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      depTime: 'dep_time',
      fromStationName: 'from_station_name',
      runTime: 'run_time',
      toStationName: 'to_station_name',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      depTime: 'string',
      fromStationName: 'string',
      runTime: 'number',
      toStationName: 'string',
      trainNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryResponseBodyModule extends $tea.Model {
  changeTicketInfoList?: TrainOrderQueryResponseBodyModuleChangeTicketInfoList[];
  invoiceInfo?: TrainOrderQueryResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: TrainOrderQueryResponseBodyModuleOrderBaseInfo;
  passengerInfoList?: TrainOrderQueryResponseBodyModulePassengerInfoList[];
  priceInfoList?: TrainOrderQueryResponseBodyModulePriceInfoList[];
  refundTicketInfoList?: TrainOrderQueryResponseBodyModuleRefundTicketInfoList[];
  ticketInfoList?: TrainOrderQueryResponseBodyModuleTicketInfoList[];
  trainInfo?: TrainOrderQueryResponseBodyModuleTrainInfo;
  static names(): { [key: string]: string } {
    return {
      changeTicketInfoList: 'change_ticket_info_list',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerInfoList: 'passenger_info_list',
      priceInfoList: 'price_info_list',
      refundTicketInfoList: 'refund_ticket_info_list',
      ticketInfoList: 'ticket_info_list',
      trainInfo: 'train_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeTicketInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModuleChangeTicketInfoList },
      invoiceInfo: TrainOrderQueryResponseBodyModuleInvoiceInfo,
      orderBaseInfo: TrainOrderQueryResponseBodyModuleOrderBaseInfo,
      passengerInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModulePassengerInfoList },
      priceInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModulePriceInfoList },
      refundTicketInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModuleRefundTicketInfoList },
      ticketInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModuleTicketInfoList },
      trainInfo: TrainOrderQueryResponseBodyModuleTrainInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainStationSearchResponseBodyModuleCities extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainStationSearchResponseBodyModule extends $tea.Model {
  cities?: TrainStationSearchResponseBodyModuleCities[];
  static names(): { [key: string]: string } {
    return {
      cities: 'cities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cities: { 'type': 'array', 'itemType': TrainStationSearchResponseBodyModuleCities },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserQueryResponseBodyModuleItems extends $tea.Model {
  employeeNick?: string;
  leaveStatus?: number;
  thirdPartEmployeeId?: string;
  thirdPartJobNo?: string;
  static names(): { [key: string]: string } {
    return {
      employeeNick: 'employee_nick',
      leaveStatus: 'leave_status',
      thirdPartEmployeeId: 'third_part_employee_id',
      thirdPartJobNo: 'third_part_job_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      employeeNick: 'string',
      leaveStatus: 'number',
      thirdPartEmployeeId: 'string',
      thirdPartJobNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserQueryResponseBodyModule extends $tea.Model {
  hasMore?: boolean;
  items?: UserQueryResponseBodyModuleItems[];
  pageToken?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'has_more',
      items: 'items',
      pageToken: 'page_token',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': UserQueryResponseBodyModuleItems },
      pageToken: 'string',
      total: 'number',
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
    this._endpoint = this.getEndpoint("btripopen", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async accessTokenWithOptions(request: AccessTokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AccessTokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      query["app_key"] = request.appKey;
    }

    if (!Util.isUnset(request.appSecret)) {
      query["app_secret"] = request.appSecret;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AccessToken",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/btrip-open-auth/v1/access-token/action/take`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AccessTokenResponse>(await this.callApi(params, req, runtime), new AccessTokenResponse({}));
  }

  async accessToken(request: AccessTokenRequest): Promise<AccessTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.accessTokenWithOptions(request, headers, runtime);
  }

  async addressGetWithOptions(request: AddressGetRequest, headers: AddressGetHeaders, runtime: $Util.RuntimeOptions): Promise<AddressGetResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionType)) {
      query["action_type"] = request.actionType;
    }

    if (!Util.isUnset(request.itineraryId)) {
      query["itinerary_id"] = request.itineraryId;
    }

    if (!Util.isUnset(request.phone)) {
      query["phone"] = request.phone;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddressGet",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/open/v1/address`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddressGetResponse>(await this.callApi(params, req, runtime), new AddressGetResponse({}));
  }

  async addressGet(request: AddressGetRequest): Promise<AddressGetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddressGetHeaders({ });
    return await this.addressGetWithOptions(request, headers, runtime);
  }

  async airportSearchWithOptions(request: AirportSearchRequest, headers: AirportSearchHeaders, runtime: $Util.RuntimeOptions): Promise<AirportSearchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AirportSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/city/v1/airport`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AirportSearchResponse>(await this.callApi(params, req, runtime), new AirportSearchResponse({}));
  }

  async airportSearch(request: AirportSearchRequest): Promise<AirportSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AirportSearchHeaders({ });
    return await this.airportSearchWithOptions(request, headers, runtime);
  }

  async allBaseCityInfoQueryWithOptions(headers: AllBaseCityInfoQueryHeaders, runtime: $Util.RuntimeOptions): Promise<AllBaseCityInfoQueryResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripAccessToken)) {
      realHeaders["x-acs-btrip-access-token"] = Util.toJSONString(headers.xAcsBtripAccessToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "AllBaseCityInfoQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/city/v1/code`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AllBaseCityInfoQueryResponse>(await this.callApi(params, req, runtime), new AllBaseCityInfoQueryResponse({}));
  }

  async allBaseCityInfoQuery(): Promise<AllBaseCityInfoQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AllBaseCityInfoQueryHeaders({ });
    return await this.allBaseCityInfoQueryWithOptions(headers, runtime);
  }

  async applyAddWithOptions(tmpReq: ApplyAddRequest, headers: ApplyAddHeaders, runtime: $Util.RuntimeOptions): Promise<ApplyAddResponse> {
    Util.validateModel(tmpReq);
    let request = new ApplyAddShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.externalTravelerList)) {
      request.externalTravelerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalTravelerList, "external_traveler_list", "json");
    }

    if (!Util.isUnset(tmpReq.externalTravelerStandard)) {
      request.externalTravelerStandardShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalTravelerStandard, "external_traveler_standard", "json");
    }

    if (!Util.isUnset(tmpReq.hotelShare)) {
      request.hotelShareShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelShare, "hotel_share", "json");
    }

    if (!Util.isUnset(tmpReq.itineraryList)) {
      request.itineraryListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itineraryList, "itinerary_list", "json");
    }

    if (!Util.isUnset(tmpReq.itinerarySetList)) {
      request.itinerarySetListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itinerarySetList, "itinerary_set_list", "json");
    }

    if (!Util.isUnset(tmpReq.travelerList)) {
      request.travelerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.travelerList, "traveler_list", "json");
    }

    if (!Util.isUnset(tmpReq.travelerStandard)) {
      request.travelerStandardShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.travelerStandard, "traveler_standard", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.internationalFlightCabins)) {
      query["international_flight_cabins"] = request.internationalFlightCabins;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.budget)) {
      body["budget"] = request.budget;
    }

    if (!Util.isUnset(request.budgetMerge)) {
      body["budget_merge"] = request.budgetMerge;
    }

    if (!Util.isUnset(request.corpName)) {
      body["corp_name"] = request.corpName;
    }

    if (!Util.isUnset(request.departId)) {
      body["depart_id"] = request.departId;
    }

    if (!Util.isUnset(request.departName)) {
      body["depart_name"] = request.departName;
    }

    if (!Util.isUnset(request.externalTravelerListShrink)) {
      body["external_traveler_list"] = request.externalTravelerListShrink;
    }

    if (!Util.isUnset(request.externalTravelerStandardShrink)) {
      body["external_traveler_standard"] = request.externalTravelerStandardShrink;
    }

    if (!Util.isUnset(request.flightBudget)) {
      body["flight_budget"] = request.flightBudget;
    }

    if (!Util.isUnset(request.hotelBudget)) {
      body["hotel_budget"] = request.hotelBudget;
    }

    if (!Util.isUnset(request.hotelShareShrink)) {
      body["hotel_share"] = request.hotelShareShrink;
    }

    if (!Util.isUnset(request.itineraryListShrink)) {
      body["itinerary_list"] = request.itineraryListShrink;
    }

    if (!Util.isUnset(request.itineraryRule)) {
      body["itinerary_rule"] = request.itineraryRule;
    }

    if (!Util.isUnset(request.itinerarySetListShrink)) {
      body["itinerary_set_list"] = request.itinerarySetListShrink;
    }

    if (!Util.isUnset(request.limitTraveler)) {
      body["limit_traveler"] = request.limitTraveler;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.thirdpartApplyId)) {
      body["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!Util.isUnset(request.thirdpartBusinessId)) {
      body["thirdpart_business_id"] = request.thirdpartBusinessId;
    }

    if (!Util.isUnset(request.thirdpartDepartId)) {
      body["thirdpart_depart_id"] = request.thirdpartDepartId;
    }

    if (!Util.isUnset(request.togetherBookRule)) {
      body["together_book_rule"] = request.togetherBookRule;
    }

    if (!Util.isUnset(request.trainBudget)) {
      body["train_budget"] = request.trainBudget;
    }

    if (!Util.isUnset(request.travelerListShrink)) {
      body["traveler_list"] = request.travelerListShrink;
    }

    if (!Util.isUnset(request.travelerStandardShrink)) {
      body["traveler_standard"] = request.travelerStandardShrink;
    }

    if (!Util.isUnset(request.tripCause)) {
      body["trip_cause"] = request.tripCause;
    }

    if (!Util.isUnset(request.tripDay)) {
      body["trip_day"] = request.tripDay;
    }

    if (!Util.isUnset(request.tripTitle)) {
      body["trip_title"] = request.tripTitle;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    if (!Util.isUnset(request.unionNo)) {
      body["union_no"] = request.unionNo;
    }

    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      body["user_name"] = request.userName;
    }

    if (!Util.isUnset(request.vehicleBudget)) {
      body["vehicle_budget"] = request.vehicleBudget;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyAdd",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/biz-trip`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyAddResponse>(await this.callApi(params, req, runtime), new ApplyAddResponse({}));
  }

  async applyAdd(request: ApplyAddRequest): Promise<ApplyAddResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ApplyAddHeaders({ });
    return await this.applyAddWithOptions(request, headers, runtime);
  }

  async applyApproveWithOptions(request: ApplyApproveRequest, headers: ApplyApproveHeaders, runtime: $Util.RuntimeOptions): Promise<ApplyApproveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applyId)) {
      body["apply_id"] = request.applyId;
    }

    if (!Util.isUnset(request.note)) {
      body["note"] = request.note;
    }

    if (!Util.isUnset(request.operateTime)) {
      body["operate_time"] = request.operateTime;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      body["user_name"] = request.userName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyApprove",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/biz-trip/action/approve`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyApproveResponse>(await this.callApi(params, req, runtime), new ApplyApproveResponse({}));
  }

  async applyApprove(request: ApplyApproveRequest): Promise<ApplyApproveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ApplyApproveHeaders({ });
    return await this.applyApproveWithOptions(request, headers, runtime);
  }

  async applyListQueryWithOptions(request: ApplyListQueryRequest, headers: ApplyListQueryHeaders, runtime: $Util.RuntimeOptions): Promise<ApplyListQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allApply)) {
      query["all_apply"] = request.allApply;
    }

    if (!Util.isUnset(request.departId)) {
      query["depart_id"] = request.departId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["end_time"] = request.endTime;
    }

    if (!Util.isUnset(request.gmtModified)) {
      query["gmt_modified"] = request.gmtModified;
    }

    if (!Util.isUnset(request.onlyShangLvApply)) {
      query["only_shang_lv_apply"] = request.onlyShangLvApply;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["start_time"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    if (!Util.isUnset(request.unionNo)) {
      query["union_no"] = request.unionNo;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyListQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/biz-trips`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ApplyListQueryResponse>(await this.callApi(params, req, runtime), new ApplyListQueryResponse({}));
  }

  async applyListQuery(request: ApplyListQueryRequest): Promise<ApplyListQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ApplyListQueryHeaders({ });
    return await this.applyListQueryWithOptions(request, headers, runtime);
  }

  async applyModifyWithOptions(tmpReq: ApplyModifyRequest, headers: ApplyModifyHeaders, runtime: $Util.RuntimeOptions): Promise<ApplyModifyResponse> {
    Util.validateModel(tmpReq);
    let request = new ApplyModifyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.externalTravelerList)) {
      request.externalTravelerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalTravelerList, "external_traveler_list", "json");
    }

    if (!Util.isUnset(tmpReq.externalTravelerStandard)) {
      request.externalTravelerStandardShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalTravelerStandard, "external_traveler_standard", "json");
    }

    if (!Util.isUnset(tmpReq.hotelShare)) {
      request.hotelShareShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelShare, "hotel_share", "json");
    }

    if (!Util.isUnset(tmpReq.itineraryList)) {
      request.itineraryListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itineraryList, "itinerary_list", "json");
    }

    if (!Util.isUnset(tmpReq.itinerarySetList)) {
      request.itinerarySetListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itinerarySetList, "itinerary_set_list", "json");
    }

    if (!Util.isUnset(tmpReq.travelerList)) {
      request.travelerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.travelerList, "traveler_list", "json");
    }

    if (!Util.isUnset(tmpReq.travelerStandard)) {
      request.travelerStandardShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.travelerStandard, "traveler_standard", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.budget)) {
      body["budget"] = request.budget;
    }

    if (!Util.isUnset(request.budgetMerge)) {
      body["budget_merge"] = request.budgetMerge;
    }

    if (!Util.isUnset(request.corpName)) {
      body["corp_name"] = request.corpName;
    }

    if (!Util.isUnset(request.departId)) {
      body["depart_id"] = request.departId;
    }

    if (!Util.isUnset(request.departName)) {
      body["depart_name"] = request.departName;
    }

    if (!Util.isUnset(request.externalTravelerListShrink)) {
      body["external_traveler_list"] = request.externalTravelerListShrink;
    }

    if (!Util.isUnset(request.externalTravelerStandardShrink)) {
      body["external_traveler_standard"] = request.externalTravelerStandardShrink;
    }

    if (!Util.isUnset(request.flightBudget)) {
      body["flight_budget"] = request.flightBudget;
    }

    if (!Util.isUnset(request.hotelBudget)) {
      body["hotel_budget"] = request.hotelBudget;
    }

    if (!Util.isUnset(request.hotelShareShrink)) {
      body["hotel_share"] = request.hotelShareShrink;
    }

    if (!Util.isUnset(request.itineraryListShrink)) {
      body["itinerary_list"] = request.itineraryListShrink;
    }

    if (!Util.isUnset(request.itineraryRule)) {
      body["itinerary_rule"] = request.itineraryRule;
    }

    if (!Util.isUnset(request.itinerarySetListShrink)) {
      body["itinerary_set_list"] = request.itinerarySetListShrink;
    }

    if (!Util.isUnset(request.limitTraveler)) {
      body["limit_traveler"] = request.limitTraveler;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.thirdpartApplyId)) {
      body["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!Util.isUnset(request.thirdpartBusinessId)) {
      body["thirdpart_business_id"] = request.thirdpartBusinessId;
    }

    if (!Util.isUnset(request.thirdpartDepartId)) {
      body["thirdpart_depart_id"] = request.thirdpartDepartId;
    }

    if (!Util.isUnset(request.togetherBookRule)) {
      body["together_book_rule"] = request.togetherBookRule;
    }

    if (!Util.isUnset(request.trainBudget)) {
      body["train_budget"] = request.trainBudget;
    }

    if (!Util.isUnset(request.travelerListShrink)) {
      body["traveler_list"] = request.travelerListShrink;
    }

    if (!Util.isUnset(request.travelerStandardShrink)) {
      body["traveler_standard"] = request.travelerStandardShrink;
    }

    if (!Util.isUnset(request.tripCause)) {
      body["trip_cause"] = request.tripCause;
    }

    if (!Util.isUnset(request.tripDay)) {
      body["trip_day"] = request.tripDay;
    }

    if (!Util.isUnset(request.tripTitle)) {
      body["trip_title"] = request.tripTitle;
    }

    if (!Util.isUnset(request.unionNo)) {
      body["union_no"] = request.unionNo;
    }

    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      body["user_name"] = request.userName;
    }

    if (!Util.isUnset(request.vehicleBudget)) {
      body["vehicle_budget"] = request.vehicleBudget;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyModify",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/biz-trip`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyModifyResponse>(await this.callApi(params, req, runtime), new ApplyModifyResponse({}));
  }

  async applyModify(request: ApplyModifyRequest): Promise<ApplyModifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ApplyModifyHeaders({ });
    return await this.applyModifyWithOptions(request, headers, runtime);
  }

  async applyQueryWithOptions(request: ApplyQueryRequest, headers: ApplyQueryHeaders, runtime: $Util.RuntimeOptions): Promise<ApplyQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!Util.isUnset(request.applyShowId)) {
      query["apply_show_id"] = request.applyShowId;
    }

    if (!Util.isUnset(request.thirdpartApplyId)) {
      query["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/biz-trip`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ApplyQueryResponse>(await this.callApi(params, req, runtime), new ApplyQueryResponse({}));
  }

  async applyQuery(request: ApplyQueryRequest): Promise<ApplyQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ApplyQueryHeaders({ });
    return await this.applyQueryWithOptions(request, headers, runtime);
  }

  async carApplyAddWithOptions(request: CarApplyAddRequest, headers: CarApplyAddHeaders, runtime: $Util.RuntimeOptions): Promise<CarApplyAddResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cause)) {
      body["cause"] = request.cause;
    }

    if (!Util.isUnset(request.city)) {
      body["city"] = request.city;
    }

    if (!Util.isUnset(request.date)) {
      body["date"] = request.date;
    }

    if (!Util.isUnset(request.finishedDate)) {
      body["finished_date"] = request.finishedDate;
    }

    if (!Util.isUnset(request.projectCode)) {
      body["project_code"] = request.projectCode;
    }

    if (!Util.isUnset(request.projectName)) {
      body["project_name"] = request.projectName;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.thirdPartApplyId)) {
      body["third_part_apply_id"] = request.thirdPartApplyId;
    }

    if (!Util.isUnset(request.thirdPartCostCenterId)) {
      body["third_part_cost_center_id"] = request.thirdPartCostCenterId;
    }

    if (!Util.isUnset(request.thirdPartInvoiceId)) {
      body["third_part_invoice_id"] = request.thirdPartInvoiceId;
    }

    if (!Util.isUnset(request.timesTotal)) {
      body["times_total"] = request.timesTotal;
    }

    if (!Util.isUnset(request.timesType)) {
      body["times_type"] = request.timesType;
    }

    if (!Util.isUnset(request.timesUsed)) {
      body["times_used"] = request.timesUsed;
    }

    if (!Util.isUnset(request.title)) {
      body["title"] = request.title;
    }

    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CarApplyAdd",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/car`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CarApplyAddResponse>(await this.callApi(params, req, runtime), new CarApplyAddResponse({}));
  }

  async carApplyAdd(request: CarApplyAddRequest): Promise<CarApplyAddResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CarApplyAddHeaders({ });
    return await this.carApplyAddWithOptions(request, headers, runtime);
  }

  async carApplyModifyWithOptions(request: CarApplyModifyRequest, headers: CarApplyModifyHeaders, runtime: $Util.RuntimeOptions): Promise<CarApplyModifyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operateTime)) {
      body["operate_time"] = request.operateTime;
    }

    if (!Util.isUnset(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    if (!Util.isUnset(request.thirdPartApplyId)) {
      body["third_part_apply_id"] = request.thirdPartApplyId;
    }

    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CarApplyModify",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/car`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CarApplyModifyResponse>(await this.callApi(params, req, runtime), new CarApplyModifyResponse({}));
  }

  async carApplyModify(request: CarApplyModifyRequest): Promise<CarApplyModifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CarApplyModifyHeaders({ });
    return await this.carApplyModifyWithOptions(request, headers, runtime);
  }

  async carApplyQueryWithOptions(request: CarApplyQueryRequest, headers: CarApplyQueryHeaders, runtime: $Util.RuntimeOptions): Promise<CarApplyQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createdEndAt)) {
      query["created_end_at"] = request.createdEndAt;
    }

    if (!Util.isUnset(request.createdStartAt)) {
      query["created_start_at"] = request.createdStartAt;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.thirdPartApplyId)) {
      query["third_part_apply_id"] = request.thirdPartApplyId;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CarApplyQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/car`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CarApplyQueryResponse>(await this.callApi(params, req, runtime), new CarApplyQueryResponse({}));
  }

  async carApplyQuery(request: CarApplyQueryRequest): Promise<CarApplyQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CarApplyQueryHeaders({ });
    return await this.carApplyQueryWithOptions(request, headers, runtime);
  }

  async carBillSettlementQueryWithOptions(request: CarBillSettlementQueryRequest, headers: CarBillSettlementQueryHeaders, runtime: $Util.RuntimeOptions): Promise<CarBillSettlementQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!Util.isUnset(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CarBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/car/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CarBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new CarBillSettlementQueryResponse({}));
  }

  async carBillSettlementQuery(request: CarBillSettlementQueryRequest): Promise<CarBillSettlementQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CarBillSettlementQueryHeaders({ });
    return await this.carBillSettlementQueryWithOptions(request, headers, runtime);
  }

  async carOrderListQueryWithOptions(request: CarOrderListQueryRequest, headers: CarOrderListQueryHeaders, runtime: $Util.RuntimeOptions): Promise<CarOrderListQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allApply)) {
      query["all_apply"] = request.allApply;
    }

    if (!Util.isUnset(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!Util.isUnset(request.departId)) {
      query["depart_id"] = request.departId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["end_time"] = request.endTime;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["start_time"] = request.startTime;
    }

    if (!Util.isUnset(request.thirdpartApplyId)) {
      query["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!Util.isUnset(request.updateEndTime)) {
      query["update_end_time"] = request.updateEndTime;
    }

    if (!Util.isUnset(request.updateStartTime)) {
      query["update_start_time"] = request.updateStartTime;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CarOrderListQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/car/v1/order-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CarOrderListQueryResponse>(await this.callApi(params, req, runtime), new CarOrderListQueryResponse({}));
  }

  async carOrderListQuery(request: CarOrderListQueryRequest): Promise<CarOrderListQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CarOrderListQueryHeaders({ });
    return await this.carOrderListQueryWithOptions(request, headers, runtime);
  }

  async carOrderQueryWithOptions(request: CarOrderQueryRequest, headers: CarOrderQueryHeaders, runtime: $Util.RuntimeOptions): Promise<CarOrderQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!Util.isUnset(request.subOrderId)) {
      query["sub_order_id"] = request.subOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CarOrderQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/car/v1/order`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CarOrderQueryResponse>(await this.callApi(params, req, runtime), new CarOrderQueryResponse({}));
  }

  async carOrderQuery(request: CarOrderQueryRequest): Promise<CarOrderQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CarOrderQueryHeaders({ });
    return await this.carOrderQueryWithOptions(request, headers, runtime);
  }

  async citySearchWithOptions(request: CitySearchRequest, headers: CitySearchHeaders, runtime: $Util.RuntimeOptions): Promise<CitySearchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CitySearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/city/v1/city`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CitySearchResponse>(await this.callApi(params, req, runtime), new CitySearchResponse({}));
  }

  async citySearch(request: CitySearchRequest): Promise<CitySearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CitySearchHeaders({ });
    return await this.citySearchWithOptions(request, headers, runtime);
  }

  async commonApplyQueryWithOptions(request: CommonApplyQueryRequest, headers: CommonApplyQueryHeaders, runtime: $Util.RuntimeOptions): Promise<CommonApplyQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!Util.isUnset(request.bizCategory)) {
      query["biz_category"] = request.bizCategory;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CommonApplyQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/common`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CommonApplyQueryResponse>(await this.callApi(params, req, runtime), new CommonApplyQueryResponse({}));
  }

  async commonApplyQuery(request: CommonApplyQueryRequest): Promise<CommonApplyQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CommonApplyQueryHeaders({ });
    return await this.commonApplyQueryWithOptions(request, headers, runtime);
  }

  async commonApplySyncWithOptions(request: CommonApplySyncRequest, headers: CommonApplySyncHeaders, runtime: $Util.RuntimeOptions): Promise<CommonApplySyncResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!Util.isUnset(request.bizCategory)) {
      query["biz_category"] = request.bizCategory;
    }

    if (!Util.isUnset(request.remark)) {
      query["remark"] = request.remark;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    if (!Util.isUnset(request.thirdpartyFlowId)) {
      query["thirdparty_flow_id"] = request.thirdpartyFlowId;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CommonApplySync",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/syn-common`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CommonApplySyncResponse>(await this.callApi(params, req, runtime), new CommonApplySyncResponse({}));
  }

  async commonApplySync(request: CommonApplySyncRequest): Promise<CommonApplySyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CommonApplySyncHeaders({ });
    return await this.commonApplySyncWithOptions(request, headers, runtime);
  }

  async corpAuthLinkInfoQueryWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CorpAuthLinkInfoQueryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CorpAuthLinkInfoQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/corp-authority-link/v1/info`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CorpAuthLinkInfoQueryResponse>(await this.callApi(params, req, runtime), new CorpAuthLinkInfoQueryResponse({}));
  }

  async corpAuthLinkInfoQuery(): Promise<CorpAuthLinkInfoQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.corpAuthLinkInfoQueryWithOptions(headers, runtime);
  }

  async corpTokenWithOptions(request: CorpTokenRequest, headers: CorpTokenHeaders, runtime: $Util.RuntimeOptions): Promise<CorpTokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appSecret)) {
      query["app_secret"] = request.appSecret;
    }

    if (!Util.isUnset(request.corpId)) {
      query["corp_id"] = request.corpId;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripAccessToken)) {
      realHeaders["x-acs-btrip-access-token"] = Util.toJSONString(headers.xAcsBtripAccessToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CorpToken",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/btrip-open-auth/v1/corp-token/action/take`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CorpTokenResponse>(await this.callApi(params, req, runtime), new CorpTokenResponse({}));
  }

  async corpToken(request: CorpTokenRequest): Promise<CorpTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CorpTokenHeaders({ });
    return await this.corpTokenWithOptions(request, headers, runtime);
  }

  async costCenterDeleteWithOptions(request: CostCenterDeleteRequest, headers: CostCenterDeleteHeaders, runtime: $Util.RuntimeOptions): Promise<CostCenterDeleteResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.thirdpartId)) {
      query["thirdpart_id"] = request.thirdpartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CostCenterDelete",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/delete-costcenter`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CostCenterDeleteResponse>(await this.callApi(params, req, runtime), new CostCenterDeleteResponse({}));
  }

  async costCenterDelete(request: CostCenterDeleteRequest): Promise<CostCenterDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CostCenterDeleteHeaders({ });
    return await this.costCenterDeleteWithOptions(request, headers, runtime);
  }

  async costCenterModifyWithOptions(request: CostCenterModifyRequest, headers: CostCenterModifyHeaders, runtime: $Util.RuntimeOptions): Promise<CostCenterModifyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alipayNo)) {
      body["alipay_no"] = request.alipayNo;
    }

    if (!Util.isUnset(request.number)) {
      body["number"] = request.number;
    }

    if (!Util.isUnset(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!Util.isUnset(request.thirdpartId)) {
      body["thirdpart_id"] = request.thirdpartId;
    }

    if (!Util.isUnset(request.title)) {
      body["title"] = request.title;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CostCenterModify",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/modify-costcenter`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CostCenterModifyResponse>(await this.callApi(params, req, runtime), new CostCenterModifyResponse({}));
  }

  async costCenterModify(request: CostCenterModifyRequest): Promise<CostCenterModifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CostCenterModifyHeaders({ });
    return await this.costCenterModifyWithOptions(request, headers, runtime);
  }

  async costCenterQueryWithOptions(request: CostCenterQueryRequest, headers: CostCenterQueryHeaders, runtime: $Util.RuntimeOptions): Promise<CostCenterQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.needOrgEntity)) {
      query["need_org_entity"] = request.needOrgEntity;
    }

    if (!Util.isUnset(request.thirdpartId)) {
      query["thirdpart_id"] = request.thirdpartId;
    }

    if (!Util.isUnset(request.title)) {
      query["title"] = request.title;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CostCenterQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/costcenter`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CostCenterQueryResponse>(await this.callApi(params, req, runtime), new CostCenterQueryResponse({}));
  }

  async costCenterQuery(request: CostCenterQueryRequest): Promise<CostCenterQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CostCenterQueryHeaders({ });
    return await this.costCenterQueryWithOptions(request, headers, runtime);
  }

  async costCenterSaveWithOptions(request: CostCenterSaveRequest, headers: CostCenterSaveHeaders, runtime: $Util.RuntimeOptions): Promise<CostCenterSaveResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alipayNo)) {
      body["alipay_no"] = request.alipayNo;
    }

    if (!Util.isUnset(request.number)) {
      body["number"] = request.number;
    }

    if (!Util.isUnset(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!Util.isUnset(request.thirdpartId)) {
      body["thirdpart_id"] = request.thirdpartId;
    }

    if (!Util.isUnset(request.title)) {
      body["title"] = request.title;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CostCenterSave",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/save-costcenter`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CostCenterSaveResponse>(await this.callApi(params, req, runtime), new CostCenterSaveResponse({}));
  }

  async costCenterSave(request: CostCenterSaveRequest): Promise<CostCenterSaveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CostCenterSaveHeaders({ });
    return await this.costCenterSaveWithOptions(request, headers, runtime);
  }

  async departmentSaveWithOptions(tmpReq: DepartmentSaveRequest, headers: DepartmentSaveHeaders, runtime: $Util.RuntimeOptions): Promise<DepartmentSaveResponse> {
    Util.validateModel(tmpReq);
    let request = new DepartmentSaveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.departList)) {
      request.departListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.departList, "depart_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.departListShrink)) {
      body["depart_list"] = request.departListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DepartmentSave",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/department/v1/department`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DepartmentSaveResponse>(await this.callApi(params, req, runtime), new DepartmentSaveResponse({}));
  }

  async departmentSave(request: DepartmentSaveRequest): Promise<DepartmentSaveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DepartmentSaveHeaders({ });
    return await this.departmentSaveWithOptions(request, headers, runtime);
  }

  async entityAddWithOptions(tmpReq: EntityAddRequest, headers: EntityAddHeaders, runtime: $Util.RuntimeOptions): Promise<EntityAddResponse> {
    Util.validateModel(tmpReq);
    let request = new EntityAddShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.entityDOList)) {
      request.entityDOListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityDOList, "entity_d_o_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.entityDOListShrink)) {
      body["entity_d_o_list"] = request.entityDOListShrink;
    }

    if (!Util.isUnset(request.thirdpartId)) {
      body["thirdpart_id"] = request.thirdpartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EntityAdd",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/add-entity`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EntityAddResponse>(await this.callApi(params, req, runtime), new EntityAddResponse({}));
  }

  async entityAdd(request: EntityAddRequest): Promise<EntityAddResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EntityAddHeaders({ });
    return await this.entityAddWithOptions(request, headers, runtime);
  }

  async entityDeleteWithOptions(tmpReq: EntityDeleteRequest, headers: EntityDeleteHeaders, runtime: $Util.RuntimeOptions): Promise<EntityDeleteResponse> {
    Util.validateModel(tmpReq);
    let request = new EntityDeleteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.entityDOList)) {
      request.entityDOListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityDOList, "entity_d_o_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.delAll)) {
      query["del_all"] = request.delAll;
    }

    if (!Util.isUnset(request.thirdpartId)) {
      query["thirdpart_id"] = request.thirdpartId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.entityDOListShrink)) {
      body["entity_d_o_list"] = request.entityDOListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EntityDelete",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/entity/action/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EntityDeleteResponse>(await this.callApi(params, req, runtime), new EntityDeleteResponse({}));
  }

  async entityDelete(request: EntityDeleteRequest): Promise<EntityDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EntityDeleteHeaders({ });
    return await this.entityDeleteWithOptions(request, headers, runtime);
  }

  async entitySetWithOptions(tmpReq: EntitySetRequest, headers: EntitySetHeaders, runtime: $Util.RuntimeOptions): Promise<EntitySetResponse> {
    Util.validateModel(tmpReq);
    let request = new EntitySetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.entityDOList)) {
      request.entityDOListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityDOList, "entity_d_o_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.entityDOListShrink)) {
      body["entity_d_o_list"] = request.entityDOListShrink;
    }

    if (!Util.isUnset(request.thirdpartId)) {
      body["thirdpart_id"] = request.thirdpartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EntitySet",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/set-entity`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EntitySetResponse>(await this.callApi(params, req, runtime), new EntitySetResponse({}));
  }

  async entitySet(request: EntitySetRequest): Promise<EntitySetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EntitySetHeaders({ });
    return await this.entitySetWithOptions(request, headers, runtime);
  }

  async estimatedPriceQueryWithOptions(request: EstimatedPriceQueryRequest, headers: EstimatedPriceQueryHeaders, runtime: $Util.RuntimeOptions): Promise<EstimatedPriceQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.arrCity)) {
      query["arr_city"] = request.arrCity;
    }

    if (!Util.isUnset(request.category)) {
      query["category"] = request.category;
    }

    if (!Util.isUnset(request.depCity)) {
      query["dep_city"] = request.depCity;
    }

    if (!Util.isUnset(request.endTime)) {
      query["end_time"] = request.endTime;
    }

    if (!Util.isUnset(request.itineraryId)) {
      query["itinerary_id"] = request.itineraryId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["start_time"] = request.startTime;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EstimatedPriceQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/costcenter/v1/estimated-price`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EstimatedPriceQueryResponse>(await this.callApi(params, req, runtime), new EstimatedPriceQueryResponse({}));
  }

  async estimatedPriceQuery(request: EstimatedPriceQueryRequest): Promise<EstimatedPriceQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EstimatedPriceQueryHeaders({ });
    return await this.estimatedPriceQueryWithOptions(request, headers, runtime);
  }

  async exceedApplySyncWithOptions(request: ExceedApplySyncRequest, headers: ExceedApplySyncHeaders, runtime: $Util.RuntimeOptions): Promise<ExceedApplySyncResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!Util.isUnset(request.bizCategory)) {
      query["biz_category"] = request.bizCategory;
    }

    if (!Util.isUnset(request.remark)) {
      query["remark"] = request.remark;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    if (!Util.isUnset(request.thirdpartyFlowId)) {
      query["thirdparty_flow_id"] = request.thirdpartyFlowId;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExceedApplySync",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/syn-exceed`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExceedApplySyncResponse>(await this.callApi(params, req, runtime), new ExceedApplySyncResponse({}));
  }

  async exceedApplySync(request: ExceedApplySyncRequest): Promise<ExceedApplySyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ExceedApplySyncHeaders({ });
    return await this.exceedApplySyncWithOptions(request, headers, runtime);
  }

  async flightBillSettlementQueryWithOptions(request: FlightBillSettlementQueryRequest, headers: FlightBillSettlementQueryHeaders, runtime: $Util.RuntimeOptions): Promise<FlightBillSettlementQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!Util.isUnset(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FlightBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/flight/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FlightBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new FlightBillSettlementQueryResponse({}));
  }

  async flightBillSettlementQuery(request: FlightBillSettlementQueryRequest): Promise<FlightBillSettlementQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlightBillSettlementQueryHeaders({ });
    return await this.flightBillSettlementQueryWithOptions(request, headers, runtime);
  }

  async flightCancelOrderWithOptions(request: FlightCancelOrderRequest, headers: FlightCancelOrderHeaders, runtime: $Util.RuntimeOptions): Promise<FlightCancelOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = Util.toJSONString(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FlightCancelOrder",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/order/action/cancel`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FlightCancelOrderResponse>(await this.callApi(params, req, runtime), new FlightCancelOrderResponse({}));
  }

  async flightCancelOrder(request: FlightCancelOrderRequest): Promise<FlightCancelOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlightCancelOrderHeaders({ });
    return await this.flightCancelOrderWithOptions(request, headers, runtime);
  }

  async flightCreateOrderWithOptions(tmpReq: FlightCreateOrderRequest, headers: FlightCreateOrderHeaders, runtime: $Util.RuntimeOptions): Promise<FlightCreateOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new FlightCreateOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.contactInfo)) {
      request.contactInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contactInfo, "contact_info", "json");
    }

    if (!Util.isUnset(tmpReq.orderAttr)) {
      request.orderAttrShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderAttr, "order_attr", "json");
    }

    if (!Util.isUnset(tmpReq.travelerInfoList)) {
      request.travelerInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.travelerInfoList, "traveler_info_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.arrAirportCode)) {
      body["arr_airport_code"] = request.arrAirportCode;
    }

    if (!Util.isUnset(request.arrCityCode)) {
      body["arr_city_code"] = request.arrCityCode;
    }

    if (!Util.isUnset(request.autoPay)) {
      body["auto_pay"] = request.autoPay;
    }

    if (!Util.isUnset(request.buyerName)) {
      body["buyer_name"] = request.buyerName;
    }

    if (!Util.isUnset(request.buyerUniqueKey)) {
      body["buyer_unique_key"] = request.buyerUniqueKey;
    }

    if (!Util.isUnset(request.contactInfoShrink)) {
      body["contact_info"] = request.contactInfoShrink;
    }

    if (!Util.isUnset(request.depAirportCode)) {
      body["dep_airport_code"] = request.depAirportCode;
    }

    if (!Util.isUnset(request.depCityCode)) {
      body["dep_city_code"] = request.depCityCode;
    }

    if (!Util.isUnset(request.depDate)) {
      body["dep_date"] = request.depDate;
    }

    if (!Util.isUnset(request.disOrderId)) {
      body["dis_order_id"] = request.disOrderId;
    }

    if (!Util.isUnset(request.orderAttrShrink)) {
      body["order_attr"] = request.orderAttrShrink;
    }

    if (!Util.isUnset(request.orderParams)) {
      body["order_params"] = request.orderParams;
    }

    if (!Util.isUnset(request.otaItemId)) {
      body["ota_item_id"] = request.otaItemId;
    }

    if (!Util.isUnset(request.price)) {
      body["price"] = request.price;
    }

    if (!Util.isUnset(request.receiptAddress)) {
      body["receipt_address"] = request.receiptAddress;
    }

    if (!Util.isUnset(request.receiptTarget)) {
      body["receipt_target"] = request.receiptTarget;
    }

    if (!Util.isUnset(request.receiptTitle)) {
      body["receipt_title"] = request.receiptTitle;
    }

    if (!Util.isUnset(request.travelerInfoListShrink)) {
      body["traveler_info_list"] = request.travelerInfoListShrink;
    }

    if (!Util.isUnset(request.tripType)) {
      body["trip_type"] = request.tripType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = Util.toJSONString(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FlightCreateOrder",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/order/action/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FlightCreateOrderResponse>(await this.callApi(params, req, runtime), new FlightCreateOrderResponse({}));
  }

  async flightCreateOrder(request: FlightCreateOrderRequest): Promise<FlightCreateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlightCreateOrderHeaders({ });
    return await this.flightCreateOrderWithOptions(request, headers, runtime);
  }

  async flightExceedApplyQueryWithOptions(request: FlightExceedApplyQueryRequest, headers: FlightExceedApplyQueryHeaders, runtime: $Util.RuntimeOptions): Promise<FlightExceedApplyQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FlightExceedApplyQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/flight-exceed`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FlightExceedApplyQueryResponse>(await this.callApi(params, req, runtime), new FlightExceedApplyQueryResponse({}));
  }

  async flightExceedApplyQuery(request: FlightExceedApplyQueryRequest): Promise<FlightExceedApplyQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlightExceedApplyQueryHeaders({ });
    return await this.flightExceedApplyQueryWithOptions(request, headers, runtime);
  }

  async flightOrderDetailInfoWithOptions(request: FlightOrderDetailInfoRequest, headers: FlightOrderDetailInfoHeaders, runtime: $Util.RuntimeOptions): Promise<FlightOrderDetailInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = Util.toJSONString(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FlightOrderDetailInfo",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/order/action/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FlightOrderDetailInfoResponse>(await this.callApi(params, req, runtime), new FlightOrderDetailInfoResponse({}));
  }

  async flightOrderDetailInfo(request: FlightOrderDetailInfoRequest): Promise<FlightOrderDetailInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlightOrderDetailInfoHeaders({ });
    return await this.flightOrderDetailInfoWithOptions(request, headers, runtime);
  }

  async flightOrderListQueryWithOptions(request: FlightOrderListQueryRequest, headers: FlightOrderListQueryHeaders, runtime: $Util.RuntimeOptions): Promise<FlightOrderListQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allApply)) {
      query["all_apply"] = request.allApply;
    }

    if (!Util.isUnset(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!Util.isUnset(request.departId)) {
      query["depart_id"] = request.departId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["end_time"] = request.endTime;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["start_time"] = request.startTime;
    }

    if (!Util.isUnset(request.thirdpartApplyId)) {
      query["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!Util.isUnset(request.updateEndTime)) {
      query["update_end_time"] = request.updateEndTime;
    }

    if (!Util.isUnset(request.updateStartTime)) {
      query["update_start_time"] = request.updateStartTime;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FlightOrderListQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/flight/v1/order-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FlightOrderListQueryResponse>(await this.callApi(params, req, runtime), new FlightOrderListQueryResponse({}));
  }

  async flightOrderListQuery(request: FlightOrderListQueryRequest): Promise<FlightOrderListQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlightOrderListQueryHeaders({ });
    return await this.flightOrderListQueryWithOptions(request, headers, runtime);
  }

  async flightOrderQueryWithOptions(request: FlightOrderQueryRequest, headers: FlightOrderQueryHeaders, runtime: $Util.RuntimeOptions): Promise<FlightOrderQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FlightOrderQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/flight/v1/order`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FlightOrderQueryResponse>(await this.callApi(params, req, runtime), new FlightOrderQueryResponse({}));
  }

  async flightOrderQuery(request: FlightOrderQueryRequest): Promise<FlightOrderQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlightOrderQueryHeaders({ });
    return await this.flightOrderQueryWithOptions(request, headers, runtime);
  }

  async flightPayOrderWithOptions(tmpReq: FlightPayOrderRequest, headers: FlightPayOrderHeaders, runtime: $Util.RuntimeOptions): Promise<FlightPayOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new FlightPayOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "extra", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpPayPrice)) {
      body["corp_pay_price"] = request.corpPayPrice;
    }

    if (!Util.isUnset(request.disOrderId)) {
      body["dis_order_id"] = request.disOrderId;
    }

    if (!Util.isUnset(request.extraShrink)) {
      body["extra"] = request.extraShrink;
    }

    if (!Util.isUnset(request.personalPayPrice)) {
      body["personal_pay_price"] = request.personalPayPrice;
    }

    if (!Util.isUnset(request.totalPayPrice)) {
      body["total_pay_price"] = request.totalPayPrice;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = Util.toJSONString(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FlightPayOrder",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/order/action/pay`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FlightPayOrderResponse>(await this.callApi(params, req, runtime), new FlightPayOrderResponse({}));
  }

  async flightPayOrder(request: FlightPayOrderRequest): Promise<FlightPayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlightPayOrderHeaders({ });
    return await this.flightPayOrderWithOptions(request, headers, runtime);
  }

  async flightRefundApplyWithOptions(tmpReq: FlightRefundApplyRequest, headers: FlightRefundApplyHeaders, runtime: $Util.RuntimeOptions): Promise<FlightRefundApplyResponse> {
    Util.validateModel(tmpReq);
    let request = new FlightRefundApplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "extra", "json");
    }

    if (!Util.isUnset(tmpReq.passengerSegmentInfoList)) {
      request.passengerSegmentInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerSegmentInfoList, "passenger_segment_info_list", "json");
    }

    if (!Util.isUnset(tmpReq.refundVoucherInfo)) {
      request.refundVoucherInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.refundVoucherInfo, "refund_voucher_info", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpRefundPrice)) {
      body["corp_refund_price"] = request.corpRefundPrice;
    }

    if (!Util.isUnset(request.disOrderId)) {
      body["dis_order_id"] = request.disOrderId;
    }

    if (!Util.isUnset(request.disSubOrderId)) {
      body["dis_sub_order_id"] = request.disSubOrderId;
    }

    if (!Util.isUnset(request.displayRefundMoney)) {
      body["display_refund_money"] = request.displayRefundMoney;
    }

    if (!Util.isUnset(request.extraShrink)) {
      body["extra"] = request.extraShrink;
    }

    if (!Util.isUnset(request.isVoluntary)) {
      body["is_voluntary"] = request.isVoluntary;
    }

    if (!Util.isUnset(request.itemUnitIds)) {
      body["item_unit_ids"] = request.itemUnitIds;
    }

    if (!Util.isUnset(request.passengerSegmentInfoListShrink)) {
      body["passenger_segment_info_list"] = request.passengerSegmentInfoListShrink;
    }

    if (!Util.isUnset(request.personalRefundPrice)) {
      body["personal_refund_price"] = request.personalRefundPrice;
    }

    if (!Util.isUnset(request.reasonDetail)) {
      body["reason_detail"] = request.reasonDetail;
    }

    if (!Util.isUnset(request.reasonType)) {
      body["reason_type"] = request.reasonType;
    }

    if (!Util.isUnset(request.refundVoucherInfoShrink)) {
      body["refund_voucher_info"] = request.refundVoucherInfoShrink;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["session_id"] = request.sessionId;
    }

    if (!Util.isUnset(request.totalRefundPrice)) {
      body["total_refund_price"] = request.totalRefundPrice;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = Util.toJSONString(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FlightRefundApply",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/refund/action/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FlightRefundApplyResponse>(await this.callApi(params, req, runtime), new FlightRefundApplyResponse({}));
  }

  async flightRefundApply(request: FlightRefundApplyRequest): Promise<FlightRefundApplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlightRefundApplyHeaders({ });
    return await this.flightRefundApplyWithOptions(request, headers, runtime);
  }

  async flightRefundDetailWithOptions(request: FlightRefundDetailRequest, headers: FlightRefundDetailHeaders, runtime: $Util.RuntimeOptions): Promise<FlightRefundDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    if (!Util.isUnset(request.disSubOrderId)) {
      query["dis_sub_order_id"] = request.disSubOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = Util.toJSONString(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FlightRefundDetail",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/refund/action/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FlightRefundDetailResponse>(await this.callApi(params, req, runtime), new FlightRefundDetailResponse({}));
  }

  async flightRefundDetail(request: FlightRefundDetailRequest): Promise<FlightRefundDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlightRefundDetailHeaders({ });
    return await this.flightRefundDetailWithOptions(request, headers, runtime);
  }

  async flightRefundPreCalWithOptions(tmpReq: FlightRefundPreCalRequest, headers: FlightRefundPreCalHeaders, runtime: $Util.RuntimeOptions): Promise<FlightRefundPreCalResponse> {
    Util.validateModel(tmpReq);
    let request = new FlightRefundPreCalShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.passengerSegmentInfoList)) {
      request.passengerSegmentInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerSegmentInfoList, "passenger_segment_info_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    if (!Util.isUnset(request.isVoluntary)) {
      query["is_voluntary"] = request.isVoluntary;
    }

    if (!Util.isUnset(request.passengerSegmentInfoListShrink)) {
      query["passenger_segment_info_list"] = request.passengerSegmentInfoListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = Util.toJSONString(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FlightRefundPreCal",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/refund/action/pre-cal`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FlightRefundPreCalResponse>(await this.callApi(params, req, runtime), new FlightRefundPreCalResponse({}));
  }

  async flightRefundPreCal(request: FlightRefundPreCalRequest): Promise<FlightRefundPreCalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlightRefundPreCalHeaders({ });
    return await this.flightRefundPreCalWithOptions(request, headers, runtime);
  }

  async hotelBillSettlementQueryWithOptions(request: HotelBillSettlementQueryRequest, headers: HotelBillSettlementQueryHeaders, runtime: $Util.RuntimeOptions): Promise<HotelBillSettlementQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!Util.isUnset(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HotelBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/hotel/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<HotelBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new HotelBillSettlementQueryResponse({}));
  }

  async hotelBillSettlementQuery(request: HotelBillSettlementQueryRequest): Promise<HotelBillSettlementQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HotelBillSettlementQueryHeaders({ });
    return await this.hotelBillSettlementQueryWithOptions(request, headers, runtime);
  }

  async hotelExceedApplyQueryWithOptions(request: HotelExceedApplyQueryRequest, headers: HotelExceedApplyQueryHeaders, runtime: $Util.RuntimeOptions): Promise<HotelExceedApplyQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HotelExceedApplyQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/hotel-exceed`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<HotelExceedApplyQueryResponse>(await this.callApi(params, req, runtime), new HotelExceedApplyQueryResponse({}));
  }

  async hotelExceedApplyQuery(request: HotelExceedApplyQueryRequest): Promise<HotelExceedApplyQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HotelExceedApplyQueryHeaders({ });
    return await this.hotelExceedApplyQueryWithOptions(request, headers, runtime);
  }

  async hotelOrderListQueryWithOptions(request: HotelOrderListQueryRequest, headers: HotelOrderListQueryHeaders, runtime: $Util.RuntimeOptions): Promise<HotelOrderListQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allApply)) {
      query["all_apply"] = request.allApply;
    }

    if (!Util.isUnset(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!Util.isUnset(request.departId)) {
      query["depart_id"] = request.departId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["end_time"] = request.endTime;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["start_time"] = request.startTime;
    }

    if (!Util.isUnset(request.thirdpartApplyId)) {
      query["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!Util.isUnset(request.updateEndTime)) {
      query["update_end_time"] = request.updateEndTime;
    }

    if (!Util.isUnset(request.updateStartTime)) {
      query["update_start_time"] = request.updateStartTime;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HotelOrderListQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/hotel/v1/order-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<HotelOrderListQueryResponse>(await this.callApi(params, req, runtime), new HotelOrderListQueryResponse({}));
  }

  async hotelOrderListQuery(request: HotelOrderListQueryRequest): Promise<HotelOrderListQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HotelOrderListQueryHeaders({ });
    return await this.hotelOrderListQueryWithOptions(request, headers, runtime);
  }

  async hotelOrderQueryWithOptions(request: HotelOrderQueryRequest, headers: HotelOrderQueryHeaders, runtime: $Util.RuntimeOptions): Promise<HotelOrderQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HotelOrderQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/hotel/v1/order`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<HotelOrderQueryResponse>(await this.callApi(params, req, runtime), new HotelOrderQueryResponse({}));
  }

  async hotelOrderQuery(request: HotelOrderQueryRequest): Promise<HotelOrderQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HotelOrderQueryHeaders({ });
    return await this.hotelOrderQueryWithOptions(request, headers, runtime);
  }

  async ieFlightBillSettlementQueryWithOptions(request: IeFlightBillSettlementQueryRequest, headers: IeFlightBillSettlementQueryHeaders, runtime: $Util.RuntimeOptions): Promise<IeFlightBillSettlementQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!Util.isUnset(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "IeFlightBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/ie-flight/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<IeFlightBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new IeFlightBillSettlementQueryResponse({}));
  }

  async ieFlightBillSettlementQuery(request: IeFlightBillSettlementQueryRequest): Promise<IeFlightBillSettlementQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new IeFlightBillSettlementQueryHeaders({ });
    return await this.ieFlightBillSettlementQueryWithOptions(request, headers, runtime);
  }

  async invoiceAddWithOptions(request: InvoiceAddRequest, headers: InvoiceAddHeaders, runtime: $Util.RuntimeOptions): Promise<InvoiceAddResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.address)) {
      body["address"] = request.address;
    }

    if (!Util.isUnset(request.bankName)) {
      body["bank_name"] = request.bankName;
    }

    if (!Util.isUnset(request.bankNo)) {
      body["bank_no"] = request.bankNo;
    }

    if (!Util.isUnset(request.taxNo)) {
      body["tax_no"] = request.taxNo;
    }

    if (!Util.isUnset(request.tel)) {
      body["tel"] = request.tel;
    }

    if (!Util.isUnset(request.thirdPartId)) {
      body["third_part_id"] = request.thirdPartId;
    }

    if (!Util.isUnset(request.title)) {
      body["title"] = request.title;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InvoiceAdd",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/add-invoice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InvoiceAddResponse>(await this.callApi(params, req, runtime), new InvoiceAddResponse({}));
  }

  async invoiceAdd(request: InvoiceAddRequest): Promise<InvoiceAddResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InvoiceAddHeaders({ });
    return await this.invoiceAddWithOptions(request, headers, runtime);
  }

  async invoiceDeleteWithOptions(request: InvoiceDeleteRequest, headers: InvoiceDeleteHeaders, runtime: $Util.RuntimeOptions): Promise<InvoiceDeleteResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.thirdPartId)) {
      query["third_part_id"] = request.thirdPartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InvoiceDelete",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/invoice`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InvoiceDeleteResponse>(await this.callApi(params, req, runtime), new InvoiceDeleteResponse({}));
  }

  async invoiceDelete(request: InvoiceDeleteRequest): Promise<InvoiceDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InvoiceDeleteHeaders({ });
    return await this.invoiceDeleteWithOptions(request, headers, runtime);
  }

  async invoiceModifyWithOptions(request: InvoiceModifyRequest, headers: InvoiceModifyHeaders, runtime: $Util.RuntimeOptions): Promise<InvoiceModifyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.address)) {
      body["address"] = request.address;
    }

    if (!Util.isUnset(request.bankName)) {
      body["bank_name"] = request.bankName;
    }

    if (!Util.isUnset(request.bankNo)) {
      body["bank_no"] = request.bankNo;
    }

    if (!Util.isUnset(request.taxNo)) {
      body["tax_no"] = request.taxNo;
    }

    if (!Util.isUnset(request.tel)) {
      body["tel"] = request.tel;
    }

    if (!Util.isUnset(request.thirdPartId)) {
      body["third_part_id"] = request.thirdPartId;
    }

    if (!Util.isUnset(request.title)) {
      body["title"] = request.title;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InvoiceModify",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/invoice`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InvoiceModifyResponse>(await this.callApi(params, req, runtime), new InvoiceModifyResponse({}));
  }

  async invoiceModify(request: InvoiceModifyRequest): Promise<InvoiceModifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InvoiceModifyHeaders({ });
    return await this.invoiceModifyWithOptions(request, headers, runtime);
  }

  async invoiceRuleSaveWithOptions(tmpReq: InvoiceRuleSaveRequest, headers: InvoiceRuleSaveHeaders, runtime: $Util.RuntimeOptions): Promise<InvoiceRuleSaveResponse> {
    Util.validateModel(tmpReq);
    let request = new InvoiceRuleSaveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.entities)) {
      request.entitiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entities, "entities", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allEmploye)) {
      body["all_employe"] = request.allEmploye;
    }

    if (!Util.isUnset(request.entitiesShrink)) {
      body["entities"] = request.entitiesShrink;
    }

    if (!Util.isUnset(request.thirdPartId)) {
      body["third_part_id"] = request.thirdPartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InvoiceRuleSave",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/invoice-rule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InvoiceRuleSaveResponse>(await this.callApi(params, req, runtime), new InvoiceRuleSaveResponse({}));
  }

  async invoiceRuleSave(request: InvoiceRuleSaveRequest): Promise<InvoiceRuleSaveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InvoiceRuleSaveHeaders({ });
    return await this.invoiceRuleSaveWithOptions(request, headers, runtime);
  }

  async invoiceSearchWithOptions(request: InvoiceSearchRequest, headers: InvoiceSearchHeaders, runtime: $Util.RuntimeOptions): Promise<InvoiceSearchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.title)) {
      query["title"] = request.title;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InvoiceSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/invoice/v1/invoice`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InvoiceSearchResponse>(await this.callApi(params, req, runtime), new InvoiceSearchResponse({}));
  }

  async invoiceSearch(request: InvoiceSearchRequest): Promise<InvoiceSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InvoiceSearchHeaders({ });
    return await this.invoiceSearchWithOptions(request, headers, runtime);
  }

  async isvUserSaveWithOptions(tmpReq: IsvUserSaveRequest, headers: IsvUserSaveHeaders, runtime: $Util.RuntimeOptions): Promise<IsvUserSaveResponse> {
    Util.validateModel(tmpReq);
    let request = new IsvUserSaveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userList)) {
      request.userListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userList, "user_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userListShrink)) {
      body["user_list"] = request.userListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "IsvUserSave",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/isvuser/v1/isvuser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IsvUserSaveResponse>(await this.callApi(params, req, runtime), new IsvUserSaveResponse({}));
  }

  async isvUserSave(request: IsvUserSaveRequest): Promise<IsvUserSaveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new IsvUserSaveHeaders({ });
    return await this.isvUserSaveWithOptions(request, headers, runtime);
  }

  async monthBillGetWithOptions(request: MonthBillGetRequest, headers: MonthBillGetHeaders, runtime: $Util.RuntimeOptions): Promise<MonthBillGetResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.billMonth)) {
      query["bill_month"] = request.billMonth;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MonthBillGet",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/open/v1/month-bill`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<MonthBillGetResponse>(await this.callApi(params, req, runtime), new MonthBillGetResponse({}));
  }

  async monthBillGet(request: MonthBillGetRequest): Promise<MonthBillGetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new MonthBillGetHeaders({ });
    return await this.monthBillGetWithOptions(request, headers, runtime);
  }

  async projectAddWithOptions(request: ProjectAddRequest, headers: ProjectAddHeaders, runtime: $Util.RuntimeOptions): Promise<ProjectAddResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.projectName)) {
      body["project_name"] = request.projectName;
    }

    if (!Util.isUnset(request.thirdPartCostCenterId)) {
      body["third_part_cost_center_id"] = request.thirdPartCostCenterId;
    }

    if (!Util.isUnset(request.thirdPartId)) {
      body["third_part_id"] = request.thirdPartId;
    }

    if (!Util.isUnset(request.thirdPartInvoiceId)) {
      body["third_part_invoice_id"] = request.thirdPartInvoiceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ProjectAdd",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/cost/v1/project`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ProjectAddResponse>(await this.callApi(params, req, runtime), new ProjectAddResponse({}));
  }

  async projectAdd(request: ProjectAddRequest): Promise<ProjectAddResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ProjectAddHeaders({ });
    return await this.projectAddWithOptions(request, headers, runtime);
  }

  async projectDeleteWithOptions(request: ProjectDeleteRequest, headers: ProjectDeleteHeaders, runtime: $Util.RuntimeOptions): Promise<ProjectDeleteResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.thirdPartId)) {
      query["third_part_id"] = request.thirdPartId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ProjectDelete",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/cost/v1/project`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ProjectDeleteResponse>(await this.callApi(params, req, runtime), new ProjectDeleteResponse({}));
  }

  async projectDelete(request: ProjectDeleteRequest): Promise<ProjectDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ProjectDeleteHeaders({ });
    return await this.projectDeleteWithOptions(request, headers, runtime);
  }

  async projectModifyWithOptions(request: ProjectModifyRequest, headers: ProjectModifyHeaders, runtime: $Util.RuntimeOptions): Promise<ProjectModifyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.projectName)) {
      body["project_name"] = request.projectName;
    }

    if (!Util.isUnset(request.thirdPartCostCenterId)) {
      body["third_part_cost_center_id"] = request.thirdPartCostCenterId;
    }

    if (!Util.isUnset(request.thirdPartId)) {
      body["third_part_id"] = request.thirdPartId;
    }

    if (!Util.isUnset(request.thirdPartInvoiceId)) {
      body["third_part_invoice_id"] = request.thirdPartInvoiceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ProjectModify",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/cost/v1/project`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ProjectModifyResponse>(await this.callApi(params, req, runtime), new ProjectModifyResponse({}));
  }

  async projectModify(request: ProjectModifyRequest): Promise<ProjectModifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ProjectModifyHeaders({ });
    return await this.projectModifyWithOptions(request, headers, runtime);
  }

  async syncSingleUserWithOptions(tmpReq: SyncSingleUserRequest, headers: SyncSingleUserHeaders, runtime: $Util.RuntimeOptions): Promise<SyncSingleUserResponse> {
    Util.validateModel(tmpReq);
    let request = new SyncSingleUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.thirdDepartIdList)) {
      request.thirdDepartIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thirdDepartIdList, "third_depart_id_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.email)) {
      body["email"] = request.email;
    }

    if (!Util.isUnset(request.jobNo)) {
      body["job_no"] = request.jobNo;
    }

    if (!Util.isUnset(request.leaveStatus)) {
      body["leave_status"] = request.leaveStatus;
    }

    if (!Util.isUnset(request.managerUserId)) {
      body["manager_user_id"] = request.managerUserId;
    }

    if (!Util.isUnset(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!Util.isUnset(request.position)) {
      body["position"] = request.position;
    }

    if (!Util.isUnset(request.positionLevel)) {
      body["position_level"] = request.positionLevel;
    }

    if (!Util.isUnset(request.realNameEn)) {
      body["real_name_en"] = request.realNameEn;
    }

    if (!Util.isUnset(request.thirdDepartIdListShrink)) {
      body["third_depart_id_list"] = request.thirdDepartIdListShrink;
    }

    if (!Util.isUnset(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      body["user_name"] = request.userName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SyncSingleUser",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/user/v1/single-user/action/sync`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncSingleUserResponse>(await this.callApi(params, req, runtime), new SyncSingleUserResponse({}));
  }

  async syncSingleUser(request: SyncSingleUserRequest): Promise<SyncSingleUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SyncSingleUserHeaders({ });
    return await this.syncSingleUserWithOptions(request, headers, runtime);
  }

  async ticketChangingApplyWithOptions(tmpReq: TicketChangingApplyRequest, headers: TicketChangingApplyHeaders, runtime: $Util.RuntimeOptions): Promise<TicketChangingApplyResponse> {
    Util.validateModel(tmpReq);
    let request = new TicketChangingApplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.modifyFlightInfoList)) {
      request.modifyFlightInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modifyFlightInfoList, "modify_flight_info_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.disOrderId)) {
      body["dis_order_id"] = request.disOrderId;
    }

    if (!Util.isUnset(request.disSubOrderId)) {
      body["dis_sub_order_id"] = request.disSubOrderId;
    }

    if (!Util.isUnset(request.isVoluntary)) {
      body["is_voluntary"] = request.isVoluntary;
    }

    if (!Util.isUnset(request.modifyFlightInfoListShrink)) {
      body["modify_flight_info_list"] = request.modifyFlightInfoListShrink;
    }

    if (!Util.isUnset(request.otaItemId)) {
      body["ota_item_id"] = request.otaItemId;
    }

    if (!Util.isUnset(request.reason)) {
      body["reason"] = request.reason;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["session_id"] = request.sessionId;
    }

    if (!Util.isUnset(request.whetherRetry)) {
      body["whether_retry"] = request.whetherRetry;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = Util.toJSONString(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TicketChangingApply",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/ticket-changing/action/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TicketChangingApplyResponse>(await this.callApi(params, req, runtime), new TicketChangingApplyResponse({}));
  }

  async ticketChangingApply(request: TicketChangingApplyRequest): Promise<TicketChangingApplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TicketChangingApplyHeaders({ });
    return await this.ticketChangingApplyWithOptions(request, headers, runtime);
  }

  async ticketChangingCancelWithOptions(request: TicketChangingCancelRequest, headers: TicketChangingCancelHeaders, runtime: $Util.RuntimeOptions): Promise<TicketChangingCancelResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    if (!Util.isUnset(request.disSubOrderId)) {
      query["dis_sub_order_id"] = request.disSubOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = Util.toJSONString(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TicketChangingCancel",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/ticket-changing/action/cancel`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TicketChangingCancelResponse>(await this.callApi(params, req, runtime), new TicketChangingCancelResponse({}));
  }

  async ticketChangingCancel(request: TicketChangingCancelRequest): Promise<TicketChangingCancelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TicketChangingCancelHeaders({ });
    return await this.ticketChangingCancelWithOptions(request, headers, runtime);
  }

  async ticketChangingDetailWithOptions(request: TicketChangingDetailRequest, headers: TicketChangingDetailHeaders, runtime: $Util.RuntimeOptions): Promise<TicketChangingDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    if (!Util.isUnset(request.disSubOrderId)) {
      query["dis_sub_order_id"] = request.disSubOrderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = Util.toJSONString(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TicketChangingDetail",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/ticket-changing/action/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TicketChangingDetailResponse>(await this.callApi(params, req, runtime), new TicketChangingDetailResponse({}));
  }

  async ticketChangingDetail(request: TicketChangingDetailRequest): Promise<TicketChangingDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TicketChangingDetailHeaders({ });
    return await this.ticketChangingDetailWithOptions(request, headers, runtime);
  }

  async ticketChangingEnquiryWithOptions(request: TicketChangingEnquiryRequest, headers: TicketChangingEnquiryHeaders, runtime: $Util.RuntimeOptions): Promise<TicketChangingEnquiryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.arrCity)) {
      query["arr_city"] = request.arrCity;
    }

    if (!Util.isUnset(request.depCity)) {
      query["dep_city"] = request.depCity;
    }

    if (!Util.isUnset(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    if (!Util.isUnset(request.isVoluntary)) {
      query["is_voluntary"] = request.isVoluntary;
    }

    if (!Util.isUnset(request.modifyDepartDate)) {
      query["modify_depart_date"] = request.modifyDepartDate;
    }

    if (!Util.isUnset(request.modifyFlightNo)) {
      query["modify_flight_no"] = request.modifyFlightNo;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["session_id"] = request.sessionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = Util.toJSONString(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TicketChangingEnquiry",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/ticket-changing/action/enquiry`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TicketChangingEnquiryResponse>(await this.callApi(params, req, runtime), new TicketChangingEnquiryResponse({}));
  }

  async ticketChangingEnquiry(request: TicketChangingEnquiryRequest): Promise<TicketChangingEnquiryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TicketChangingEnquiryHeaders({ });
    return await this.ticketChangingEnquiryWithOptions(request, headers, runtime);
  }

  async ticketChangingFlightListWithOptions(tmpReq: TicketChangingFlightListRequest, headers: TicketChangingFlightListHeaders, runtime: $Util.RuntimeOptions): Promise<TicketChangingFlightListResponse> {
    Util.validateModel(tmpReq);
    let request = new TicketChangingFlightListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.travelerInfoList)) {
      request.travelerInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.travelerInfoList, "traveler_info_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.arrCity)) {
      query["arr_city"] = request.arrCity;
    }

    if (!Util.isUnset(request.depCity)) {
      query["dep_city"] = request.depCity;
    }

    if (!Util.isUnset(request.depDate)) {
      query["dep_date"] = request.depDate;
    }

    if (!Util.isUnset(request.disOrderId)) {
      query["dis_order_id"] = request.disOrderId;
    }

    if (!Util.isUnset(request.isVoluntary)) {
      query["is_voluntary"] = request.isVoluntary;
    }

    if (!Util.isUnset(request.travelerInfoListShrink)) {
      query["traveler_info_list"] = request.travelerInfoListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = Util.toJSONString(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TicketChangingFlightList",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/huge/dtb-flight/v1/ticket-changing-flight/action/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TicketChangingFlightListResponse>(await this.callApi(params, req, runtime), new TicketChangingFlightListResponse({}));
  }

  async ticketChangingFlightList(request: TicketChangingFlightListRequest): Promise<TicketChangingFlightListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TicketChangingFlightListHeaders({ });
    return await this.ticketChangingFlightListWithOptions(request, headers, runtime);
  }

  async ticketChangingPayWithOptions(tmpReq: TicketChangingPayRequest, headers: TicketChangingPayHeaders, runtime: $Util.RuntimeOptions): Promise<TicketChangingPayResponse> {
    Util.validateModel(tmpReq);
    let request = new TicketChangingPayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "extra", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpPayPrice)) {
      body["corp_pay_price"] = request.corpPayPrice;
    }

    if (!Util.isUnset(request.disOrderId)) {
      body["dis_order_id"] = request.disOrderId;
    }

    if (!Util.isUnset(request.disSubOrderId)) {
      body["dis_sub_order_id"] = request.disSubOrderId;
    }

    if (!Util.isUnset(request.extraShrink)) {
      body["extra"] = request.extraShrink;
    }

    if (!Util.isUnset(request.personalPayPrice)) {
      body["personal_pay_price"] = request.personalPayPrice;
    }

    if (!Util.isUnset(request.totalPayPrice)) {
      body["total_pay_price"] = request.totalPayPrice;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripCorpToken)) {
      realHeaders["x-acs-btrip-corp-token"] = Util.toJSONString(headers.xAcsBtripCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TicketChangingPay",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/dtb-flight/v1/ticket-changing/action/pay`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TicketChangingPayResponse>(await this.callApi(params, req, runtime), new TicketChangingPayResponse({}));
  }

  async ticketChangingPay(request: TicketChangingPayRequest): Promise<TicketChangingPayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TicketChangingPayHeaders({ });
    return await this.ticketChangingPayWithOptions(request, headers, runtime);
  }

  async trainBillSettlementQueryWithOptions(request: TrainBillSettlementQueryRequest, headers: TrainBillSettlementQueryHeaders, runtime: $Util.RuntimeOptions): Promise<TrainBillSettlementQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.periodEnd)) {
      query["period_end"] = request.periodEnd;
    }

    if (!Util.isUnset(request.periodStart)) {
      query["period_start"] = request.periodStart;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TrainBillSettlementQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/bill-settlement`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TrainBillSettlementQueryResponse>(await this.callApi(params, req, runtime), new TrainBillSettlementQueryResponse({}));
  }

  async trainBillSettlementQuery(request: TrainBillSettlementQueryRequest): Promise<TrainBillSettlementQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TrainBillSettlementQueryHeaders({ });
    return await this.trainBillSettlementQueryWithOptions(request, headers, runtime);
  }

  async trainExceedApplyQueryWithOptions(request: TrainExceedApplyQueryRequest, headers: TrainExceedApplyQueryHeaders, runtime: $Util.RuntimeOptions): Promise<TrainExceedApplyQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TrainExceedApplyQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/apply/v1/train-exceed`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TrainExceedApplyQueryResponse>(await this.callApi(params, req, runtime), new TrainExceedApplyQueryResponse({}));
  }

  async trainExceedApplyQuery(request: TrainExceedApplyQueryRequest): Promise<TrainExceedApplyQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TrainExceedApplyQueryHeaders({ });
    return await this.trainExceedApplyQueryWithOptions(request, headers, runtime);
  }

  async trainOrderListQueryWithOptions(request: TrainOrderListQueryRequest, headers: TrainOrderListQueryHeaders, runtime: $Util.RuntimeOptions): Promise<TrainOrderListQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allApply)) {
      query["all_apply"] = request.allApply;
    }

    if (!Util.isUnset(request.applyId)) {
      query["apply_id"] = request.applyId;
    }

    if (!Util.isUnset(request.departId)) {
      query["depart_id"] = request.departId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["end_time"] = request.endTime;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["start_time"] = request.startTime;
    }

    if (!Util.isUnset(request.thirdpartApplyId)) {
      query["thirdpart_apply_id"] = request.thirdpartApplyId;
    }

    if (!Util.isUnset(request.updateEndTime)) {
      query["update_end_time"] = request.updateEndTime;
    }

    if (!Util.isUnset(request.updateStartTime)) {
      query["update_start_time"] = request.updateStartTime;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TrainOrderListQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/order-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TrainOrderListQueryResponse>(await this.callApi(params, req, runtime), new TrainOrderListQueryResponse({}));
  }

  async trainOrderListQuery(request: TrainOrderListQueryRequest): Promise<TrainOrderListQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TrainOrderListQueryHeaders({ });
    return await this.trainOrderListQueryWithOptions(request, headers, runtime);
  }

  async trainOrderQueryWithOptions(request: TrainOrderQueryRequest, headers: TrainOrderQueryHeaders, runtime: $Util.RuntimeOptions): Promise<TrainOrderQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderId)) {
      query["order_id"] = request.orderId;
    }

    if (!Util.isUnset(request.userId)) {
      query["user_id"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TrainOrderQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/train/v1/order`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TrainOrderQueryResponse>(await this.callApi(params, req, runtime), new TrainOrderQueryResponse({}));
  }

  async trainOrderQuery(request: TrainOrderQueryRequest): Promise<TrainOrderQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TrainOrderQueryHeaders({ });
    return await this.trainOrderQueryWithOptions(request, headers, runtime);
  }

  async trainStationSearchWithOptions(request: TrainStationSearchRequest, headers: TrainStationSearchHeaders, runtime: $Util.RuntimeOptions): Promise<TrainStationSearchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TrainStationSearch",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/city/v1/train`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TrainStationSearchResponse>(await this.callApi(params, req, runtime), new TrainStationSearchResponse({}));
  }

  async trainStationSearch(request: TrainStationSearchRequest): Promise<TrainStationSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TrainStationSearchHeaders({ });
    return await this.trainStationSearchWithOptions(request, headers, runtime);
  }

  async userQueryWithOptions(request: UserQueryRequest, headers: UserQueryHeaders, runtime: $Util.RuntimeOptions): Promise<UserQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modifiedTimeGreaterOrEqualThan)) {
      query["modified_time_greater_or_equal_than"] = request.modifiedTimeGreaterOrEqualThan;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageToken)) {
      query["page_token"] = request.pageToken;
    }

    if (!Util.isUnset(request.thirdPartJobNo)) {
      query["third_part_job_no"] = request.thirdPartJobNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsBtripSoCorpToken)) {
      realHeaders["x-acs-btrip-so-corp-token"] = Util.toJSONString(headers.xAcsBtripSoCorpToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UserQuery",
      version: "2022-05-20",
      protocol: "HTTPS",
      pathname: `/user/v1/user`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UserQueryResponse>(await this.callApi(params, req, runtime), new UserQueryResponse({}));
  }

  async userQuery(request: UserQueryRequest): Promise<UserQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UserQueryHeaders({ });
    return await this.userQueryWithOptions(request, headers, runtime);
  }

}
