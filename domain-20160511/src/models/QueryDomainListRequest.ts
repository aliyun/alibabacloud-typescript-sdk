// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainListRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query based on the time when domain names expire.
   * 
   * @example
   * 1696435200000
   */
  deadEndDate?: number;
  /**
   * @remarks
   * The beginning of the time range to query based on the time when domain names expire.
   * 
   * @example
   * 1694016000000
   */
  deadStartDate?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test003.cn
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * GUOJI, TONGYONG, GUONEI, NAME, and WEIBO.
   * 
   * @example
   * GUONEI
   */
  domainType?: string;
  /**
   * @remarks
   * The end of the time range to query based on the time when domain names expire.
   * 
   * @example
   * 2023-01-11 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * 123
   */
  groupId?: string;
  /**
   * @remarks
   * The language of the error message to return if the request fails. Valid values:
   * 
   * zh: Chinese. en: English.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The order in which you want to sort the queried domain names. Valid values:
   * 
   * ASC: ascending order. DESC: descending order.
   * 
   * @example
   * DESC
   */
  orderByType?: string;
  /**
   * @remarks
   * The field by which domain names to be queried are sorted. Valid values:
   * 
   * REGDATE: registration time. DEADDATE: expiration time. CREATEDATE: creation time.
   * 
   * @example
   * REGDATE
   */
  orderKeyType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type of the domain name. Valid values:
   * 
   * New gTLD, gTLD, ccTLD, and other.
   * 
   * @example
   * ccTLD
   */
  productDomainType?: string;
  /**
   * @remarks
   * The type of the query. Valid values:
   * 
   * 1: renewal. 2: redemption. 4: transfer.
   * 
   * @example
   * 1
   */
  queryType?: string;
  /**
   * @remarks
   * The end of the time range to query based on the time when domain names were registered.
   * 
   * @example
   * 1696435200000
   */
  regEndDate?: number;
  /**
   * @remarks
   * The beginning of the time range to query based on the time when domain names were registered.
   * 
   * @example
   * 1694016000000
   */
  regStartDate?: number;
  /**
   * @remarks
   * The beginning of the time range to query based on the time when domain names expire.
   * 
   * @example
   * 2023-01-01 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * The IP address of the client. Set the value to 127.0.0.1.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      deadEndDate: 'DeadEndDate',
      deadStartDate: 'DeadStartDate',
      domainName: 'DomainName',
      domainType: 'DomainType',
      endDate: 'EndDate',
      groupId: 'GroupId',
      lang: 'Lang',
      orderByType: 'OrderByType',
      orderKeyType: 'OrderKeyType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productDomainType: 'ProductDomainType',
      queryType: 'QueryType',
      regEndDate: 'RegEndDate',
      regStartDate: 'RegStartDate',
      startDate: 'StartDate',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadEndDate: 'number',
      deadStartDate: 'number',
      domainName: 'string',
      domainType: 'string',
      endDate: 'string',
      groupId: 'string',
      lang: 'string',
      orderByType: 'string',
      orderKeyType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      productDomainType: 'string',
      queryType: 'string',
      regEndDate: 'number',
      regStartDate: 'number',
      startDate: 'string',
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

