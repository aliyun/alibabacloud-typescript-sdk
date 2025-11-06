// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAdvancedDomainListRequestTag extends $dara.Model {
  key?: string;
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
   * @example
   * -1
   */
  domainGroupId?: number;
  /**
   * @example
   * false
   */
  domainNameSort?: boolean;
  /**
   * @example
   * 1
   */
  domainStatus?: number;
  /**
   * @example
   * 1522080000000
   */
  endExpirationDate?: number;
  /**
   * @example
   * 5
   */
  endLength?: number;
  /**
   * @example
   * 1522080000000
   */
  endRegistrationDate?: number;
  /**
   * @example
   * test
   */
  excluded?: string;
  /**
   * @example
   * false
   */
  excludedPrefix?: boolean;
  /**
   * @example
   * false
   */
  excludedSuffix?: boolean;
  /**
   * @example
   * false
   */
  expirationDateSort?: boolean;
  /**
   * @example
   * 1
   */
  form?: number;
  isPremiumDomain?: boolean;
  /**
   * @example
   * test
   */
  keyWord?: string;
  /**
   * @example
   * false
   */
  keyWordPrefix?: boolean;
  /**
   * @example
   * true
   */
  keyWordSuffix?: boolean;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * gTLD
   */
  productDomainType?: string;
  /**
   * @example
   * false
   */
  productDomainTypeSort?: boolean;
  /**
   * @example
   * false
   */
  registrationDateSort?: boolean;
  /**
   * @example
   * rg-acfmw6bpc6n7zai
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1522080000000
   */
  startExpirationDate?: number;
  /**
   * @example
   * 5
   */
  startLength?: number;
  /**
   * @example
   * 1522080000000
   */
  startRegistrationDate?: number;
  /**
   * @example
   * com.cn
   */
  suffixs?: string;
  tag?: QueryAdvancedDomainListRequestTag[];
  /**
   * @example
   * -1
   */
  tradeType?: number;
  /**
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

