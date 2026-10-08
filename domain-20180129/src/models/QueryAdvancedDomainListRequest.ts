// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAdvancedDomainListRequestTag extends $dara.Model {
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * 数智
   */
  key?: string;
  /**
   * @remarks
   * Tag value of the instance.
   * 
   * @example
   * 废弃
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvancedDomainListRequest extends $dara.Model {
  /**
   * @remarks
   * Domain group ID.
   * 
   * @example
   * -1
   */
  domainGroupId?: number;
  /**
   * @remarks
   * Sorting field based on lexicographic order of domain names. Valid values:  
   * - **false**: Descending order  
   * - **true**: Ascending order
   * 
   * @example
   * false
   */
  domainNameSort?: boolean;
  /**
   * @remarks
   * Domain status. Valid values:
   * - **0**: All.
   * - **1**: Renewal required urgently.
   * - **2**: Redemption required urgently.
   * - **3**: Normal.
   * - **4**: Transferring out from HiChina.
   * - **5**: Registrant information being modified.
   * - **6**: Identity verification not completed.
   * - **7**: Review failed; re-initiate identity verification.
   * - **8**: Under review.
   * 
   * @example
   * 1
   */
  domainStatus?: number;
  /**
   * @remarks
   * End time for expiration date range query, represented as the number of milliseconds since 00:00:00 UTC on January 1, 1970.
   * 
   * @example
   * 1522080000000
   */
  endExpirationDate?: number;
  /**
   * @remarks
   * End length for domain name length range query.
   * 
   * @example
   * 5
   */
  endLength?: number;
  /**
   * @remarks
   * The end time of the registration date range query, expressed as the number of milliseconds since 00:00 on January 1, 1970, UTC.
   * 
   * @example
   * 1522080000000
   */
  endRegistrationDate?: number;
  /**
   * @remarks
   * Excluded keyword.
   * 
   * @example
   * test
   */
  excluded?: string;
  /**
   * @remarks
   * Keyword to exclude at the beginning.
   * 
   * @example
   * false
   */
  excludedPrefix?: boolean;
  /**
   * @remarks
   * Keyword to exclude at the end.
   * 
   * @example
   * false
   */
  excludedSuffix?: boolean;
  /**
   * @remarks
   * Sorting field based on expiration date. Valid values:
   * - **false**: Descending order.
   * - **true**: Ascending order.
   * 
   * @example
   * false
   */
  expirationDateSort?: boolean;
  /**
   * @remarks
   * Domain name composition information:  
   * - **11**: Numeric-only domain name  
   * - **12**: Letter-only domain name  
   * - **13**: Mixed domain name (combination of letters and numbers)  
   * - **14**: Chinese domain name
   * 
   * @example
   * 12
   */
  form?: number;
  /**
   * @remarks
   * Indicates whether the domain is a premium domain. Valid values:  
   * - **false**: No  
   * - **true**: Yes  
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  isPremiumDomain?: boolean;
  /**
   * @remarks
   * Keyword.
   * 
   * @example
   * test
   */
  keyWord?: string;
  /**
   * @remarks
   * Keyword at the beginning.
   * 
   * @example
   * false
   */
  keyWordPrefix?: boolean;
  /**
   * @remarks
   * Keyword at the end.
   * 
   * @example
   * true
   */
  keyWordSuffix?: boolean;
  /**
   * @remarks
   * The language of error messages returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Page number for paging. The minimum value is **0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size for paging. The minimum value is **1** and the maximum value is **200**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Domain name type. Valid values:
   * - **New gTLD** (new top-level domain).
   * - **gTLD** (generic top-level domain).
   * - **ccTLD** (country code top-level domain).
   * - **other** (other top-level domains not listed above).
   * 
   * @example
   * gTLD
   */
  productDomainType?: string;
  /**
   * @remarks
   * Sorting field, used to sort by domain name type. Valid values:
   * - **false**: Descending order.
   * - **true**: Ascending order.
   * 
   * @example
   * false
   */
  productDomainTypeSort?: boolean;
  /**
   * @remarks
   * Sorting field based on registration date. Valid values:
   * - **false**: Descending order.
   * - **true**: Ascending order.
   * 
   * @example
   * false
   */
  registrationDateSort?: boolean;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmw6bpc6n7zai
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Start time for expiration date range query, represented as the number of milliseconds since 00:00:00 UTC on January 1, 1970.
   * 
   * @example
   * 1522080000000
   */
  startExpirationDate?: number;
  /**
   * @remarks
   * The starting length for domain name length range queries.
   * 
   * @example
   * 5
   */
  startLength?: number;
  /**
   * @remarks
   * The start time of the registration date range query, expressed as the number of milliseconds since 00:00 on January 1, 1970, UTC.
   * 
   * @example
   * 1522080000000
   */
  startRegistrationDate?: number;
  /**
   * @remarks
   * List of suffixes to query, separated by commas (",").
   * 
   * @example
   * com.cn
   */
  suffixs?: string;
  /**
   * @remarks
   * List of tags.
   */
  tag?: QueryAdvancedDomainListRequestTag[];
  /**
   * @remarks
   * Publishing status. Valid values:  
   * - **2**: Fixed-price listing published  
   * - **13**: Negotiable-price listing published  
   * - **4**: Auction listing published  
   * - **6**: Priced push listing published  
   * - **-1**: Domain trading not published
   * 
   * @example
   * -1
   */
  tradeType?: number;
  /**
   * @remarks
   * User IP address.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainGroupId: 'DomainGroupId',
      domainNameSort: 'DomainNameSort',
      domainStatus: 'DomainStatus',
      endExpirationDate: 'EndExpirationDate',
      endLength: 'EndLength',
      endRegistrationDate: 'EndRegistrationDate',
      excluded: 'Excluded',
      excludedPrefix: 'ExcludedPrefix',
      excludedSuffix: 'ExcludedSuffix',
      expirationDateSort: 'ExpirationDateSort',
      form: 'Form',
      isPremiumDomain: 'IsPremiumDomain',
      keyWord: 'KeyWord',
      keyWordPrefix: 'KeyWordPrefix',
      keyWordSuffix: 'KeyWordSuffix',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productDomainType: 'ProductDomainType',
      productDomainTypeSort: 'ProductDomainTypeSort',
      registrationDateSort: 'RegistrationDateSort',
      resourceGroupId: 'ResourceGroupId',
      startExpirationDate: 'StartExpirationDate',
      startLength: 'StartLength',
      startRegistrationDate: 'StartRegistrationDate',
      suffixs: 'Suffixs',
      tag: 'Tag',
      tradeType: 'TradeType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroupId: 'number',
      domainNameSort: 'boolean',
      domainStatus: 'number',
      endExpirationDate: 'number',
      endLength: 'number',
      endRegistrationDate: 'number',
      excluded: 'string',
      excludedPrefix: 'boolean',
      excludedSuffix: 'boolean',
      expirationDateSort: 'boolean',
      form: 'number',
      isPremiumDomain: 'boolean',
      keyWord: 'string',
      keyWordPrefix: 'boolean',
      keyWordSuffix: 'boolean',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      productDomainType: 'string',
      productDomainTypeSort: 'boolean',
      registrationDateSort: 'boolean',
      resourceGroupId: 'string',
      startExpirationDate: 'number',
      startLength: 'number',
      startRegistrationDate: 'number',
      suffixs: 'string',
      tag: { 'type': 'array', 'itemType': QueryAdvancedDomainListRequestTag },
      tradeType: 'number',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

