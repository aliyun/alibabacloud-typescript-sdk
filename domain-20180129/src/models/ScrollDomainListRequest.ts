// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScrollDomainListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name group. You can call the [QueryDomainGroupList](https://help.aliyun.com/document_detail/69362.html) operation to obtain the ID of the domain name group.
   * 
   * @example
   * 123456
   */
  domainGroupId?: number;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **0**: All.
   * *   **1**: The domain name needs to be renewed.
   * *   **2**: The domain name needs to be redeemed.
   * *   **3**: The domain name is normal.
   * *   **4**: The domain name is being transferred from Alibaba Cloud.
   * *   **5**: The information about the domain name registrant is being modified.
   * *   **6**: Real-name verification is not performed on the domain name.
   * *   **7**: Real-name verification for the domain name fails. Real-name reverification is required.
   * *   **8**: The domain name is being reviewed.
   * 
   * @example
   * 0
   */
  domainStatus?: number;
  /**
   * @remarks
   * The end of the time range to query domain names based on expiration dates. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1541520000000
   */
  endExpirationDate?: number;
  /**
   * @remarks
   * The end of domain name length to query.
   * 
   * @example
   * 3
   */
  endLength?: number;
  /**
   * @remarks
   * The end of the time range to query domain names based on registration dates. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1541520000000
   */
  endRegistrationDate?: number;
  /**
   * @remarks
   * The keyword that is used to exclude domain names.
   * 
   * @example
   * test
   */
  excluded?: string;
  /**
   * @remarks
   * Specifies whether to exclude the prefix keyword.
   * 
   * @example
   * false
   */
  excludedPrefix?: boolean;
  /**
   * @remarks
   * Specifies whether to exclude the suffix keyword.
   * 
   * @example
   * true
   */
  excludedSuffix?: boolean;
  /**
   * @remarks
   * The composition of the domain name.
   * 
   * @example
   * 1
   */
  form?: number;
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * test
   */
  keyWord?: string;
  /**
   * @remarks
   * Specifies whether the keyword is the prefix.
   * 
   * @example
   * true
   */
  keyWordPrefix?: boolean;
  /**
   * @remarks
   * Specifies whether the keyword is the suffix.
   * 
   * @example
   * false
   */
  keyWordSuffix?: boolean;
  /**
   * @remarks
   * The language of the error message to return if the request fails. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   **New gTLD**
   * *   **gTLD**
   * *   **ccTLD**
   * *   **other**
   * 
   * @example
   * gTLD
   */
  productDomainType?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmw6bpc6n7zai
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scroll ID. This parameter is a technical parameter.
   * 
   * @example
   * test
   */
  scrollId?: string;
  /**
   * @remarks
   * The beginning of the time range to query domain names based on expiration dates. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1541520000000
   */
  startExpirationDate?: number;
  /**
   * @remarks
   * The start of the domain name length to query.
   * 
   * @example
   * 0
   */
  startLength?: number;
  /**
   * @remarks
   * The beginning of the time range to query domain names based on registration dates. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1541520000000
   */
  startRegistrationDate?: number;
  /**
   * @remarks
   * The suffixes of domain names to be queried. Separate multiple suffixes with commas (,).
   * 
   * @example
   * com
   */
  suffixs?: string;
  /**
   * @remarks
   * The publishing status of the domain name. Valid values:
   * 
   * *   **2**: The domain name is published at a fixed price.
   * *   **3**: The domain name is published with the price negotiable.
   * *   **4**: The domain name is published for bidding.
   * *   **6**: The domain name is published with price push.
   * *   **-1**: The domain name is not published.
   * 
   * @example
   * -1
   */
  tradeType?: number;
  /**
   * @remarks
   * The IP address of the client. Set the value to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainGroupId: 'DomainGroupId',
      domainStatus: 'DomainStatus',
      endExpirationDate: 'EndExpirationDate',
      endLength: 'EndLength',
      endRegistrationDate: 'EndRegistrationDate',
      excluded: 'Excluded',
      excludedPrefix: 'ExcludedPrefix',
      excludedSuffix: 'ExcludedSuffix',
      form: 'Form',
      keyWord: 'KeyWord',
      keyWordPrefix: 'KeyWordPrefix',
      keyWordSuffix: 'KeyWordSuffix',
      lang: 'Lang',
      pageSize: 'PageSize',
      productDomainType: 'ProductDomainType',
      resourceGroupId: 'ResourceGroupId',
      scrollId: 'ScrollId',
      startExpirationDate: 'StartExpirationDate',
      startLength: 'StartLength',
      startRegistrationDate: 'StartRegistrationDate',
      suffixs: 'Suffixs',
      tradeType: 'TradeType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroupId: 'number',
      domainStatus: 'number',
      endExpirationDate: 'number',
      endLength: 'number',
      endRegistrationDate: 'number',
      excluded: 'string',
      excludedPrefix: 'boolean',
      excludedSuffix: 'boolean',
      form: 'number',
      keyWord: 'string',
      keyWordPrefix: 'boolean',
      keyWordSuffix: 'boolean',
      lang: 'string',
      pageSize: 'number',
      productDomainType: 'string',
      resourceGroupId: 'string',
      scrollId: 'string',
      startExpirationDate: 'number',
      startLength: 'number',
      startRegistrationDate: 'number',
      suffixs: 'string',
      tradeType: 'number',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

