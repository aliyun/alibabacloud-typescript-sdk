// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryExportDomainExpireSnatchsResponseBodyData extends $dara.Model {
  auctionEndTime?: string;
  auctionRemainingSeconds?: number;
  baiduAntiLink?: number;
  baiduExLink?: number;
  baiduIndex?: number;
  baiduWeight?: number;
  bookEndTime?: string;
  bookRemainingSeconds?: number;
  bookedNum?: number;
  bookedPartners?: string;
  constitute?: string;
  currencyType?: string;
  deliveryTime?: string;
  domainId?: string;
  domainLen?: number;
  domainName?: string;
  domainType?: string;
  endDate?: string;
  expireDate?: string;
  extend?: string;
  freezeAmount?: number;
  introduction?: string;
  isPremium?: boolean;
  partnerTypes?: string;
  price?: number;
  productId?: string;
  publishTime?: string;
  regDate?: string;
  reserved?: boolean;
  rmbPrice?: number;
  s360Weight?: number;
  seoAttributes?: string;
  shortName?: string;
  snatchTypeDesc?: string;
  sougouAntiLink?: number;
  sougouIndex?: number;
  sougouWeight?: number;
  suffix?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      auctionEndTime: 'AuctionEndTime',
      auctionRemainingSeconds: 'AuctionRemainingSeconds',
      baiduAntiLink: 'BaiduAntiLink',
      baiduExLink: 'BaiduExLink',
      baiduIndex: 'BaiduIndex',
      baiduWeight: 'BaiduWeight',
      bookEndTime: 'BookEndTime',
      bookRemainingSeconds: 'BookRemainingSeconds',
      bookedNum: 'BookedNum',
      bookedPartners: 'BookedPartners',
      constitute: 'Constitute',
      currencyType: 'CurrencyType',
      deliveryTime: 'DeliveryTime',
      domainId: 'DomainId',
      domainLen: 'DomainLen',
      domainName: 'DomainName',
      domainType: 'DomainType',
      endDate: 'EndDate',
      expireDate: 'ExpireDate',
      extend: 'Extend',
      freezeAmount: 'FreezeAmount',
      introduction: 'Introduction',
      isPremium: 'IsPremium',
      partnerTypes: 'PartnerTypes',
      price: 'Price',
      productId: 'ProductId',
      publishTime: 'PublishTime',
      regDate: 'RegDate',
      reserved: 'Reserved',
      rmbPrice: 'RmbPrice',
      s360Weight: 'S360Weight',
      seoAttributes: 'SeoAttributes',
      shortName: 'ShortName',
      snatchTypeDesc: 'SnatchTypeDesc',
      sougouAntiLink: 'SougouAntiLink',
      sougouIndex: 'SougouIndex',
      sougouWeight: 'SougouWeight',
      suffix: 'Suffix',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionEndTime: 'string',
      auctionRemainingSeconds: 'number',
      baiduAntiLink: 'number',
      baiduExLink: 'number',
      baiduIndex: 'number',
      baiduWeight: 'number',
      bookEndTime: 'string',
      bookRemainingSeconds: 'number',
      bookedNum: 'number',
      bookedPartners: 'string',
      constitute: 'string',
      currencyType: 'string',
      deliveryTime: 'string',
      domainId: 'string',
      domainLen: 'number',
      domainName: 'string',
      domainType: 'string',
      endDate: 'string',
      expireDate: 'string',
      extend: 'string',
      freezeAmount: 'number',
      introduction: 'string',
      isPremium: 'boolean',
      partnerTypes: 'string',
      price: 'number',
      productId: 'string',
      publishTime: 'string',
      regDate: 'string',
      reserved: 'boolean',
      rmbPrice: 'number',
      s360Weight: 'number',
      seoAttributes: 'string',
      shortName: 'string',
      snatchTypeDesc: 'string',
      sougouAntiLink: 'number',
      sougouIndex: 'number',
      sougouWeight: 'number',
      suffix: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

