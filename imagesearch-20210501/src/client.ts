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

export class SearchByPicRequest extends $tea.Model {
  picContent?: string;
  categoryId?: number;
  crop?: boolean;
  region?: string;
  start?: number;
  num?: number;
  fields?: string;
  relationId?: number;
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      picContent: 'PicContent',
      categoryId: 'CategoryId',
      crop: 'Crop',
      region: 'Region',
      start: 'Start',
      num: 'Num',
      fields: 'Fields',
      relationId: 'RelationId',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picContent: 'string',
      categoryId: 'number',
      crop: 'boolean',
      region: 'string',
      start: 'number',
      num: 'number',
      fields: 'string',
      relationId: 'number',
      pid: 'string',
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
  region?: string;
  start?: number;
  num?: number;
  fields?: string;
  relationId?: number;
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      picContentObject: 'PicContentObject',
      categoryId: 'CategoryId',
      crop: 'Crop',
      region: 'Region',
      start: 'Start',
      num: 'Num',
      fields: 'Fields',
      relationId: 'RelationId',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picContentObject: 'Readable',
      categoryId: 'number',
      crop: 'boolean',
      region: 'string',
      start: 'number',
      num: 'number',
      fields: 'string',
      relationId: 'number',
      pid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicResponseBody extends $tea.Model {
  success?: boolean;
  code?: number;
  message?: string;
  data?: SearchByPicResponseBodyData;
  requestId?: string;
  picInfo?: SearchByPicResponseBodyPicInfo;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      picInfo: 'PicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      code: 'number',
      message: 'string',
      data: SearchByPicResponseBodyData,
      requestId: 'string',
      picInfo: SearchByPicResponseBodyPicInfo,
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
  picUrl?: string;
  categoryId?: number;
  crop?: boolean;
  region?: string;
  start?: number;
  num?: number;
  fields?: string;
  relationId?: number;
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      categoryId: 'CategoryId',
      crop: 'Crop',
      region: 'Region',
      start: 'Start',
      num: 'Num',
      fields: 'Fields',
      relationId: 'RelationId',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      categoryId: 'number',
      crop: 'boolean',
      region: 'string',
      start: 'number',
      num: 'number',
      fields: 'string',
      relationId: 'number',
      pid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByUrlResponseBody extends $tea.Model {
  success?: boolean;
  code?: number;
  message?: string;
  data?: SearchByUrlResponseBodyData;
  requestId?: string;
  picInfo?: SearchByUrlResponseBodyPicInfo;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      picInfo: 'PicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      code: 'number',
      message: 'string',
      data: SearchByUrlResponseBodyData,
      requestId: 'string',
      picInfo: SearchByUrlResponseBodyPicInfo,
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

export class SearchByPicResponseBodyDataAuctionsResultMaxCommission extends $tea.Model {
  maxCommissionRate?: string;
  maxCommissionClickUrl?: string;
  maxCommissionCouponShareUrl?: string;
  static names(): { [key: string]: string } {
    return {
      maxCommissionRate: 'MaxCommissionRate',
      maxCommissionClickUrl: 'MaxCommissionClickUrl',
      maxCommissionCouponShareUrl: 'MaxCommissionCouponShareUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCommissionRate: 'string',
      maxCommissionClickUrl: 'string',
      maxCommissionCouponShareUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicResponseBodyDataAuctionsResult extends $tea.Model {
  itemId?: string;
  itemName?: string;
  title?: string;
  pic?: string;
  picUrl?: string;
  price?: string;
  reservePrice?: string;
  promotionPrice?: string;
  zkFinalPrice?: string;
  priceAfterCoupon?: string;
  userType?: number;
  provcity?: string;
  sellerNickName?: string;
  nick?: string;
  sellerId?: string;
  monthSellCount?: number;
  volume?: number;
  levelOneCategoryName?: string;
  categoryName?: string;
  couponActivityId?: string;
  couponTotalCount?: string;
  couponSendCount?: string;
  couponRemainCount?: number;
  couponStartTime?: string;
  couponEndTime?: string;
  couponStartFee?: string;
  couponAmount?: number;
  couponSaleTextInfo?: string;
  couponInfo?: string;
  tkMktRate?: number;
  tkRate?: number;
  commissionRate?: string;
  couponShareUrl?: string;
  clickUrl?: string;
  url?: string;
  shortUrl?: string;
  key?: string;
  shopTitle?: string;
  maxCommission?: SearchByPicResponseBodyDataAuctionsResultMaxCommission;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      itemName: 'ItemName',
      title: 'Title',
      pic: 'Pic',
      picUrl: 'PicUrl',
      price: 'Price',
      reservePrice: 'ReservePrice',
      promotionPrice: 'PromotionPrice',
      zkFinalPrice: 'ZkFinalPrice',
      priceAfterCoupon: 'PriceAfterCoupon',
      userType: 'UserType',
      provcity: 'Provcity',
      sellerNickName: 'SellerNickName',
      nick: 'Nick',
      sellerId: 'SellerId',
      monthSellCount: 'MonthSellCount',
      volume: 'Volume',
      levelOneCategoryName: 'LevelOneCategoryName',
      categoryName: 'CategoryName',
      couponActivityId: 'CouponActivityId',
      couponTotalCount: 'CouponTotalCount',
      couponSendCount: 'CouponSendCount',
      couponRemainCount: 'CouponRemainCount',
      couponStartTime: 'CouponStartTime',
      couponEndTime: 'CouponEndTime',
      couponStartFee: 'CouponStartFee',
      couponAmount: 'CouponAmount',
      couponSaleTextInfo: 'CouponSaleTextInfo',
      couponInfo: 'CouponInfo',
      tkMktRate: 'TkMktRate',
      tkRate: 'TkRate',
      commissionRate: 'CommissionRate',
      couponShareUrl: 'CouponShareUrl',
      clickUrl: 'ClickUrl',
      url: 'Url',
      shortUrl: 'ShortUrl',
      key: 'Key',
      shopTitle: 'ShopTitle',
      maxCommission: 'MaxCommission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      itemName: 'string',
      title: 'string',
      pic: 'string',
      picUrl: 'string',
      price: 'string',
      reservePrice: 'string',
      promotionPrice: 'string',
      zkFinalPrice: 'string',
      priceAfterCoupon: 'string',
      userType: 'number',
      provcity: 'string',
      sellerNickName: 'string',
      nick: 'string',
      sellerId: 'string',
      monthSellCount: 'number',
      volume: 'number',
      levelOneCategoryName: 'string',
      categoryName: 'string',
      couponActivityId: 'string',
      couponTotalCount: 'string',
      couponSendCount: 'string',
      couponRemainCount: 'number',
      couponStartTime: 'string',
      couponEndTime: 'string',
      couponStartFee: 'string',
      couponAmount: 'number',
      couponSaleTextInfo: 'string',
      couponInfo: 'string',
      tkMktRate: 'number',
      tkRate: 'number',
      commissionRate: 'string',
      couponShareUrl: 'string',
      clickUrl: 'string',
      url: 'string',
      shortUrl: 'string',
      key: 'string',
      shopTitle: 'string',
      maxCommission: SearchByPicResponseBodyDataAuctionsResultMaxCommission,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByPicResponseBodyDataAuctions extends $tea.Model {
  result?: SearchByPicResponseBodyDataAuctionsResult;
  rankScore?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      rankScore: 'RankScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: SearchByPicResponseBodyDataAuctionsResult,
      rankScore: 'number',
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
  region?: string;
  multiCategoryId?: SearchByPicResponseBodyPicInfoMainRegionMultiCategoryId[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      multiCategoryId: 'MultiCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      multiCategoryId: { 'type': 'array', 'itemType': SearchByPicResponseBodyPicInfoMainRegionMultiCategoryId },
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
  maxCommissionRate?: string;
  maxCommissionClickUrl?: string;
  maxCommissionCouponShareUrl?: string;
  static names(): { [key: string]: string } {
    return {
      maxCommissionRate: 'MaxCommissionRate',
      maxCommissionClickUrl: 'MaxCommissionClickUrl',
      maxCommissionCouponShareUrl: 'MaxCommissionCouponShareUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCommissionRate: 'string',
      maxCommissionClickUrl: 'string',
      maxCommissionCouponShareUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByUrlResponseBodyDataAuctionsResult extends $tea.Model {
  itemId?: string;
  itemName?: string;
  title?: string;
  pic?: string;
  picUrl?: string;
  price?: string;
  reservePrice?: string;
  promotionPrice?: string;
  zkFinalPrice?: string;
  priceAfterCoupon?: string;
  userType?: number;
  provcity?: string;
  sellerNickName?: string;
  nick?: string;
  sellerId?: string;
  monthSellCount?: number;
  volume?: number;
  levelOneCategoryName?: string;
  categoryName?: string;
  couponActivityId?: string;
  couponTotalCount?: string;
  couponSendCount?: string;
  couponRemainCount?: number;
  couponStartTime?: string;
  couponEndTime?: string;
  couponStartFee?: string;
  couponAmount?: number;
  couponSaleTextInfo?: string;
  couponInfo?: string;
  tkMktRate?: number;
  tkRate?: number;
  commissionRate?: string;
  couponShareUrl?: string;
  clickUrl?: string;
  url?: string;
  shortUrl?: string;
  key?: string;
  shopTitle?: string;
  maxCommission?: SearchByUrlResponseBodyDataAuctionsResultMaxCommission;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      itemName: 'ItemName',
      title: 'Title',
      pic: 'Pic',
      picUrl: 'PicUrl',
      price: 'Price',
      reservePrice: 'ReservePrice',
      promotionPrice: 'PromotionPrice',
      zkFinalPrice: 'ZkFinalPrice',
      priceAfterCoupon: 'PriceAfterCoupon',
      userType: 'UserType',
      provcity: 'Provcity',
      sellerNickName: 'SellerNickName',
      nick: 'Nick',
      sellerId: 'SellerId',
      monthSellCount: 'MonthSellCount',
      volume: 'Volume',
      levelOneCategoryName: 'LevelOneCategoryName',
      categoryName: 'CategoryName',
      couponActivityId: 'CouponActivityId',
      couponTotalCount: 'CouponTotalCount',
      couponSendCount: 'CouponSendCount',
      couponRemainCount: 'CouponRemainCount',
      couponStartTime: 'CouponStartTime',
      couponEndTime: 'CouponEndTime',
      couponStartFee: 'CouponStartFee',
      couponAmount: 'CouponAmount',
      couponSaleTextInfo: 'CouponSaleTextInfo',
      couponInfo: 'CouponInfo',
      tkMktRate: 'TkMktRate',
      tkRate: 'TkRate',
      commissionRate: 'CommissionRate',
      couponShareUrl: 'CouponShareUrl',
      clickUrl: 'ClickUrl',
      url: 'Url',
      shortUrl: 'ShortUrl',
      key: 'Key',
      shopTitle: 'ShopTitle',
      maxCommission: 'MaxCommission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      itemName: 'string',
      title: 'string',
      pic: 'string',
      picUrl: 'string',
      price: 'string',
      reservePrice: 'string',
      promotionPrice: 'string',
      zkFinalPrice: 'string',
      priceAfterCoupon: 'string',
      userType: 'number',
      provcity: 'string',
      sellerNickName: 'string',
      nick: 'string',
      sellerId: 'string',
      monthSellCount: 'number',
      volume: 'number',
      levelOneCategoryName: 'string',
      categoryName: 'string',
      couponActivityId: 'string',
      couponTotalCount: 'string',
      couponSendCount: 'string',
      couponRemainCount: 'number',
      couponStartTime: 'string',
      couponEndTime: 'string',
      couponStartFee: 'string',
      couponAmount: 'number',
      couponSaleTextInfo: 'string',
      couponInfo: 'string',
      tkMktRate: 'number',
      tkRate: 'number',
      commissionRate: 'string',
      couponShareUrl: 'string',
      clickUrl: 'string',
      url: 'string',
      shortUrl: 'string',
      key: 'string',
      shopTitle: 'string',
      maxCommission: SearchByUrlResponseBodyDataAuctionsResultMaxCommission,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchByUrlResponseBodyDataAuctions extends $tea.Model {
  result?: SearchByUrlResponseBodyDataAuctionsResult;
  rankScore?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      rankScore: 'RankScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: SearchByUrlResponseBodyDataAuctionsResult,
      rankScore: 'number',
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
  region?: string;
  multiCategoryId?: SearchByUrlResponseBodyPicInfoMainRegionMultiCategoryId[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      multiCategoryId: 'MultiCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      multiCategoryId: { 'type': 'array', 'itemType': SearchByUrlResponseBodyPicInfoMainRegionMultiCategoryId },
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

  async searchByPicWithOptions(request: SearchByPicRequest, runtime: $Util.RuntimeOptions): Promise<SearchByPicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchByPicResponse>(await this.doRPCRequest("SearchByPic", "2021-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new SearchByPicResponse({}));
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchByUrlResponse>(await this.doRPCRequest("SearchByUrl", "2021-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new SearchByUrlResponse({}));
  }

  async searchByUrl(request: SearchByUrlRequest): Promise<SearchByUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchByUrlWithOptions(request, runtime);
  }

}
