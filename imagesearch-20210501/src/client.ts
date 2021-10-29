// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import RPC, * as $RPC from '@alicloud/rpc-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class GetProductInfoByIdsRequest extends $tea.Model {
  fields?: string;
  itemIds?: string;
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      itemIds: 'ItemIds',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: 'string',
      itemIds: 'string',
      pid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductInfoByIdsResponseBody extends $tea.Model {
  code?: number;
  data?: GetProductInfoByIdsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetProductInfoByIdsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductInfoByIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProductInfoByIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProductInfoByIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicRequest extends $tea.Model {
  categoryId?: number;
  crop?: boolean;
  fields?: string;
  num?: number;
  picContent?: string;
  pid?: string;
  region?: string;
  relationId?: number;
  start?: number;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      crop: 'Crop',
      fields: 'Fields',
      num: 'Num',
      picContent: 'PicContent',
      pid: 'Pid',
      region: 'Region',
      relationId: 'RelationId',
      start: 'Start',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      crop: 'boolean',
      fields: 'string',
      num: 'number',
      picContent: 'string',
      pid: 'string',
      region: 'string',
      relationId: 'number',
      start: 'number',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicAdvanceRequest extends $tea.Model {
  picContentObject: Readable;
  categoryId?: number;
  crop?: boolean;
  fields?: string;
  num?: number;
  pid?: string;
  region?: string;
  relationId?: number;
  start?: number;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      picContentObject: 'PicContentObject',
      categoryId: 'CategoryId',
      crop: 'Crop',
      fields: 'Fields',
      num: 'Num',
      pid: 'Pid',
      region: 'Region',
      relationId: 'RelationId',
      start: 'Start',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picContentObject: 'Readable',
      categoryId: 'number',
      crop: 'boolean',
      fields: 'string',
      num: 'number',
      pid: 'string',
      region: 'string',
      relationId: 'number',
      start: 'number',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicResponseBody extends $tea.Model {
  code?: number;
  data?: SearchByPicResponseBodyData;
  message?: string;
  picInfo?: SearchByPicResponseBodyPicInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      picInfo: 'PicInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: SearchByPicResponseBodyData,
      message: 'string',
      picInfo: SearchByPicResponseBodyPicInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchByPicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchByPicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByUrlRequest extends $tea.Model {
  categoryId?: number;
  crop?: boolean;
  fields?: string;
  num?: number;
  picUrl?: string;
  pid?: string;
  region?: string;
  relationId?: number;
  start?: number;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      crop: 'Crop',
      fields: 'Fields',
      num: 'Num',
      picUrl: 'PicUrl',
      pid: 'Pid',
      region: 'Region',
      relationId: 'RelationId',
      start: 'Start',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      crop: 'boolean',
      fields: 'string',
      num: 'number',
      picUrl: 'string',
      pid: 'string',
      region: 'string',
      relationId: 'number',
      start: 'number',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByUrlResponseBody extends $tea.Model {
  code?: number;
  data?: SearchByUrlResponseBodyData;
  message?: string;
  picInfo?: SearchByUrlResponseBodyPicInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      picInfo: 'PicInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: SearchByUrlResponseBodyData,
      message: 'string',
      picInfo: SearchByUrlResponseBodyPicInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchByUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchByUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductInfoByIdsResponseBodyDataAuctionsResultMaxCommission extends $tea.Model {
  maxCommissionClickUrl?: string;
  maxCommissionCouponShareUrl?: string;
  maxCommissionRate?: string;
  static names(): { [key: string]: string } {
    return {
      maxCommissionClickUrl: 'MaxCommissionClickUrl',
      maxCommissionCouponShareUrl: 'MaxCommissionCouponShareUrl',
      maxCommissionRate: 'MaxCommissionRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCommissionClickUrl: 'string',
      maxCommissionCouponShareUrl: 'string',
      maxCommissionRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductInfoByIdsResponseBodyDataAuctionsResult extends $tea.Model {
  categoryName?: string;
  commissionRate?: string;
  couponAmount?: number;
  couponEndTime?: string;
  couponInfo?: string;
  couponRemainCount?: number;
  couponShareUrl?: string;
  couponStartFee?: string;
  couponStartTime?: string;
  couponTotalCount?: string;
  deeplinkCouponShareUrl?: string;
  deeplinkUrl?: string;
  itemId?: string;
  levelOneCategoryName?: string;
  maxCommission?: GetProductInfoByIdsResponseBodyDataAuctionsResultMaxCommission;
  nick?: string;
  picUrl?: string;
  priceAfterCoupon?: string;
  provcity?: string;
  reservePrice?: string;
  sellerId?: string;
  shopTitle?: string;
  shortTitle?: string;
  subTitle?: string;
  title?: string;
  url?: string;
  userType?: number;
  volume?: number;
  zkFinalPrice?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      commissionRate: 'CommissionRate',
      couponAmount: 'CouponAmount',
      couponEndTime: 'CouponEndTime',
      couponInfo: 'CouponInfo',
      couponRemainCount: 'CouponRemainCount',
      couponShareUrl: 'CouponShareUrl',
      couponStartFee: 'CouponStartFee',
      couponStartTime: 'CouponStartTime',
      couponTotalCount: 'CouponTotalCount',
      deeplinkCouponShareUrl: 'DeeplinkCouponShareUrl',
      deeplinkUrl: 'DeeplinkUrl',
      itemId: 'ItemId',
      levelOneCategoryName: 'LevelOneCategoryName',
      maxCommission: 'MaxCommission',
      nick: 'Nick',
      picUrl: 'PicUrl',
      priceAfterCoupon: 'PriceAfterCoupon',
      provcity: 'Provcity',
      reservePrice: 'ReservePrice',
      sellerId: 'SellerId',
      shopTitle: 'ShopTitle',
      shortTitle: 'ShortTitle',
      subTitle: 'SubTitle',
      title: 'Title',
      url: 'Url',
      userType: 'UserType',
      volume: 'Volume',
      zkFinalPrice: 'ZkFinalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      commissionRate: 'string',
      couponAmount: 'number',
      couponEndTime: 'string',
      couponInfo: 'string',
      couponRemainCount: 'number',
      couponShareUrl: 'string',
      couponStartFee: 'string',
      couponStartTime: 'string',
      couponTotalCount: 'string',
      deeplinkCouponShareUrl: 'string',
      deeplinkUrl: 'string',
      itemId: 'string',
      levelOneCategoryName: 'string',
      maxCommission: GetProductInfoByIdsResponseBodyDataAuctionsResultMaxCommission,
      nick: 'string',
      picUrl: 'string',
      priceAfterCoupon: 'string',
      provcity: 'string',
      reservePrice: 'string',
      sellerId: 'string',
      shopTitle: 'string',
      shortTitle: 'string',
      subTitle: 'string',
      title: 'string',
      url: 'string',
      userType: 'number',
      volume: 'number',
      zkFinalPrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductInfoByIdsResponseBodyDataAuctions extends $tea.Model {
  rankScore?: number;
  result?: GetProductInfoByIdsResponseBodyDataAuctionsResult;
  static names(): { [key: string]: string } {
    return {
      rankScore: 'RankScore',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rankScore: 'number',
      result: GetProductInfoByIdsResponseBodyDataAuctionsResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductInfoByIdsResponseBodyData extends $tea.Model {
  auctions?: GetProductInfoByIdsResponseBodyDataAuctions[];
  static names(): { [key: string]: string } {
    return {
      auctions: 'Auctions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctions: { 'type': 'array', 'itemType': GetProductInfoByIdsResponseBodyDataAuctions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicResponseBodyDataAuctionsResultMaxCommission extends $tea.Model {
  maxCommissionClickUrl?: string;
  maxCommissionCouponShareUrl?: string;
  maxCommissionRate?: string;
  static names(): { [key: string]: string } {
    return {
      maxCommissionClickUrl: 'MaxCommissionClickUrl',
      maxCommissionCouponShareUrl: 'MaxCommissionCouponShareUrl',
      maxCommissionRate: 'MaxCommissionRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCommissionClickUrl: 'string',
      maxCommissionCouponShareUrl: 'string',
      maxCommissionRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicResponseBodyDataAuctionsResult extends $tea.Model {
  categoryName?: string;
  commissionRate?: string;
  couponAmount?: number;
  couponEndTime?: string;
  couponInfo?: string;
  couponRemainCount?: number;
  couponShareUrl?: string;
  couponStartFee?: string;
  couponStartTime?: string;
  couponTotalCount?: string;
  deeplinkCouponShareUrl?: string;
  deeplinkUrl?: string;
  itemId?: string;
  levelOneCategoryName?: string;
  maxCommission?: SearchByPicResponseBodyDataAuctionsResultMaxCommission;
  nick?: string;
  picUrl?: string;
  priceAfterCoupon?: string;
  provcity?: string;
  reservePrice?: string;
  sellerId?: string;
  shopTitle?: string;
  shortTitle?: string;
  subTitle?: string;
  title?: string;
  url?: string;
  userType?: number;
  volume?: number;
  zkFinalPrice?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      commissionRate: 'CommissionRate',
      couponAmount: 'CouponAmount',
      couponEndTime: 'CouponEndTime',
      couponInfo: 'CouponInfo',
      couponRemainCount: 'CouponRemainCount',
      couponShareUrl: 'CouponShareUrl',
      couponStartFee: 'CouponStartFee',
      couponStartTime: 'CouponStartTime',
      couponTotalCount: 'CouponTotalCount',
      deeplinkCouponShareUrl: 'DeeplinkCouponShareUrl',
      deeplinkUrl: 'DeeplinkUrl',
      itemId: 'ItemId',
      levelOneCategoryName: 'LevelOneCategoryName',
      maxCommission: 'MaxCommission',
      nick: 'Nick',
      picUrl: 'PicUrl',
      priceAfterCoupon: 'PriceAfterCoupon',
      provcity: 'Provcity',
      reservePrice: 'ReservePrice',
      sellerId: 'SellerId',
      shopTitle: 'ShopTitle',
      shortTitle: 'ShortTitle',
      subTitle: 'SubTitle',
      title: 'Title',
      url: 'Url',
      userType: 'UserType',
      volume: 'Volume',
      zkFinalPrice: 'ZkFinalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      commissionRate: 'string',
      couponAmount: 'number',
      couponEndTime: 'string',
      couponInfo: 'string',
      couponRemainCount: 'number',
      couponShareUrl: 'string',
      couponStartFee: 'string',
      couponStartTime: 'string',
      couponTotalCount: 'string',
      deeplinkCouponShareUrl: 'string',
      deeplinkUrl: 'string',
      itemId: 'string',
      levelOneCategoryName: 'string',
      maxCommission: SearchByPicResponseBodyDataAuctionsResultMaxCommission,
      nick: 'string',
      picUrl: 'string',
      priceAfterCoupon: 'string',
      provcity: 'string',
      reservePrice: 'string',
      sellerId: 'string',
      shopTitle: 'string',
      shortTitle: 'string',
      subTitle: 'string',
      title: 'string',
      url: 'string',
      userType: 'number',
      volume: 'number',
      zkFinalPrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicResponseBodyDataAuctions extends $tea.Model {
  rankScore?: number;
  result?: SearchByPicResponseBodyDataAuctionsResult;
  static names(): { [key: string]: string } {
    return {
      rankScore: 'RankScore',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rankScore: 'number',
      result: SearchByPicResponseBodyDataAuctionsResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicResponseBodyData extends $tea.Model {
  auctions?: SearchByPicResponseBodyDataAuctions[];
  static names(): { [key: string]: string } {
    return {
      auctions: 'Auctions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctions: { 'type': 'array', 'itemType': SearchByPicResponseBodyDataAuctions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicResponseBodyPicInfoMainRegionMultiCategoryId extends $tea.Model {
  categoryId?: number;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicResponseBodyPicInfoMainRegion extends $tea.Model {
  multiCategoryId?: SearchByPicResponseBodyPicInfoMainRegionMultiCategoryId[];
  region?: string;
  static names(): { [key: string]: string } {
    return {
      multiCategoryId: 'MultiCategoryId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiCategoryId: { 'type': 'array', 'itemType': SearchByPicResponseBodyPicInfoMainRegionMultiCategoryId },
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicResponseBodyPicInfoMultiRegion extends $tea.Model {
  region?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicResponseBodyPicInfo extends $tea.Model {
  mainRegion?: SearchByPicResponseBodyPicInfoMainRegion;
  multiRegion?: SearchByPicResponseBodyPicInfoMultiRegion[];
  static names(): { [key: string]: string } {
    return {
      mainRegion: 'MainRegion',
      multiRegion: 'MultiRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainRegion: SearchByPicResponseBodyPicInfoMainRegion,
      multiRegion: { 'type': 'array', 'itemType': SearchByPicResponseBodyPicInfoMultiRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByUrlResponseBodyDataAuctionsResultMaxCommission extends $tea.Model {
  maxCommissionClickUrl?: string;
  maxCommissionCouponShareUrl?: string;
  maxCommissionRate?: string;
  static names(): { [key: string]: string } {
    return {
      maxCommissionClickUrl: 'MaxCommissionClickUrl',
      maxCommissionCouponShareUrl: 'MaxCommissionCouponShareUrl',
      maxCommissionRate: 'MaxCommissionRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCommissionClickUrl: 'string',
      maxCommissionCouponShareUrl: 'string',
      maxCommissionRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByUrlResponseBodyDataAuctionsResult extends $tea.Model {
  categoryName?: string;
  commissionRate?: string;
  couponAmount?: number;
  couponEndTime?: string;
  couponInfo?: string;
  couponRemainCount?: number;
  couponShareUrl?: string;
  couponStartFee?: string;
  couponStartTime?: string;
  couponTotalCount?: string;
  deeplinkCouponShareUrl?: string;
  deeplinkUrl?: string;
  itemId?: string;
  levelOneCategoryName?: string;
  maxCommission?: SearchByUrlResponseBodyDataAuctionsResultMaxCommission;
  nick?: string;
  picUrl?: string;
  priceAfterCoupon?: string;
  provcity?: string;
  reservePrice?: string;
  sellerId?: string;
  shopTitle?: string;
  shortTitle?: string;
  subTitle?: string;
  title?: string;
  url?: string;
  userType?: number;
  volume?: number;
  zkFinalPrice?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      commissionRate: 'CommissionRate',
      couponAmount: 'CouponAmount',
      couponEndTime: 'CouponEndTime',
      couponInfo: 'CouponInfo',
      couponRemainCount: 'CouponRemainCount',
      couponShareUrl: 'CouponShareUrl',
      couponStartFee: 'CouponStartFee',
      couponStartTime: 'CouponStartTime',
      couponTotalCount: 'CouponTotalCount',
      deeplinkCouponShareUrl: 'DeeplinkCouponShareUrl',
      deeplinkUrl: 'DeeplinkUrl',
      itemId: 'ItemId',
      levelOneCategoryName: 'LevelOneCategoryName',
      maxCommission: 'MaxCommission',
      nick: 'Nick',
      picUrl: 'PicUrl',
      priceAfterCoupon: 'PriceAfterCoupon',
      provcity: 'Provcity',
      reservePrice: 'ReservePrice',
      sellerId: 'SellerId',
      shopTitle: 'ShopTitle',
      shortTitle: 'ShortTitle',
      subTitle: 'SubTitle',
      title: 'Title',
      url: 'Url',
      userType: 'UserType',
      volume: 'Volume',
      zkFinalPrice: 'ZkFinalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      commissionRate: 'string',
      couponAmount: 'number',
      couponEndTime: 'string',
      couponInfo: 'string',
      couponRemainCount: 'number',
      couponShareUrl: 'string',
      couponStartFee: 'string',
      couponStartTime: 'string',
      couponTotalCount: 'string',
      deeplinkCouponShareUrl: 'string',
      deeplinkUrl: 'string',
      itemId: 'string',
      levelOneCategoryName: 'string',
      maxCommission: SearchByUrlResponseBodyDataAuctionsResultMaxCommission,
      nick: 'string',
      picUrl: 'string',
      priceAfterCoupon: 'string',
      provcity: 'string',
      reservePrice: 'string',
      sellerId: 'string',
      shopTitle: 'string',
      shortTitle: 'string',
      subTitle: 'string',
      title: 'string',
      url: 'string',
      userType: 'number',
      volume: 'number',
      zkFinalPrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByUrlResponseBodyDataAuctions extends $tea.Model {
  rankScore?: number;
  result?: SearchByUrlResponseBodyDataAuctionsResult;
  static names(): { [key: string]: string } {
    return {
      rankScore: 'RankScore',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rankScore: 'number',
      result: SearchByUrlResponseBodyDataAuctionsResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByUrlResponseBodyData extends $tea.Model {
  auctions?: SearchByUrlResponseBodyDataAuctions[];
  static names(): { [key: string]: string } {
    return {
      auctions: 'Auctions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctions: { 'type': 'array', 'itemType': SearchByUrlResponseBodyDataAuctions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByUrlResponseBodyPicInfoMainRegionMultiCategoryId extends $tea.Model {
  categoryId?: number;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByUrlResponseBodyPicInfoMainRegion extends $tea.Model {
  multiCategoryId?: SearchByUrlResponseBodyPicInfoMainRegionMultiCategoryId[];
  region?: string;
  static names(): { [key: string]: string } {
    return {
      multiCategoryId: 'MultiCategoryId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiCategoryId: { 'type': 'array', 'itemType': SearchByUrlResponseBodyPicInfoMainRegionMultiCategoryId },
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByUrlResponseBodyPicInfoMultiRegion extends $tea.Model {
  region?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByUrlResponseBodyPicInfo extends $tea.Model {
  mainRegion?: SearchByUrlResponseBodyPicInfoMainRegion;
  multiRegion?: SearchByUrlResponseBodyPicInfoMultiRegion[];
  static names(): { [key: string]: string } {
    return {
      mainRegion: 'MainRegion',
      multiRegion: 'MultiRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainRegion: SearchByUrlResponseBodyPicInfoMainRegion,
      multiRegion: { 'type': 'array', 'itemType': SearchByUrlResponseBodyPicInfoMultiRegion },
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
    this._endpoint = this.getEndpoint("imagesearch", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getProductInfoByIdsWithOptions(request: GetProductInfoByIdsRequest, runtime: $Util.RuntimeOptions): Promise<GetProductInfoByIdsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetProductInfoByIds",
      version: "2021-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProductInfoByIdsResponse>(await this.callApi(params, req, runtime), new GetProductInfoByIdsResponse({}));
  }

  async getProductInfoByIds(request: GetProductInfoByIdsRequest): Promise<GetProductInfoByIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProductInfoByIdsWithOptions(request, runtime);
  }

  async searchByPicWithOptions(request: SearchByPicRequest, runtime: $Util.RuntimeOptions): Promise<SearchByPicResponse> {
    Util.validateModel(request);
    let query = { };
    query["UserType"] = request.userType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SearchByPic",
      version: "2021-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchByPicResponse>(await this.callApi(params, req, runtime), new SearchByPicResponse({}));
  }

  async searchByPic(request: SearchByPicRequest): Promise<SearchByPicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchByPicWithOptions(request, runtime);
  }

  async searchByPicAdvance(request: SearchByPicAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SearchByPicResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ImageSearch",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let searchByPicReq = new SearchByPicRequest({ });
    OpenApiUtil.convert(request, searchByPicReq);
    if (!Util.isUnset(request.picContentObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.picContentObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      searchByPicReq.picContent = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let searchByPicResp = await this.searchByPicWithOptions(searchByPicReq, runtime);
    return searchByPicResp;
  }

  async searchByUrlWithOptions(request: SearchByUrlRequest, runtime: $Util.RuntimeOptions): Promise<SearchByUrlResponse> {
    Util.validateModel(request);
    let query = { };
    query["UserType"] = request.userType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SearchByUrl",
      version: "2021-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchByUrlResponse>(await this.callApi(params, req, runtime), new SearchByUrlResponse({}));
  }

  async searchByUrl(request: SearchByUrlRequest): Promise<SearchByUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchByUrlWithOptions(request, runtime);
  }

}
