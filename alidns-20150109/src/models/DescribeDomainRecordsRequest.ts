// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The order in which you want to sort the returned DNS records. Valid values: DESC and ASC. Default value: DESC.
   * 
   * @example
   * DESC
   */
  direction?: string;
  /**
   * @remarks
   * The domain name. You can call the [DescribeDomains](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * *   If you do not specify GroupId, all domain names are queried.
   * *   If you set GroupId to 0, no value is returned.
   * *   If you set GroupId to 1, the domain names in the default group are queried.
   * *   If you set GroupId to -2, all domain names are queried.
   * *   You can also specify GroupId based on the actual group ID.
   * 
   * You can call the [DescribeDomainGroups ](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomaingroups?spm=a2c63.p38356.help-menu-search-29697.d_0)operation to obtain the ID of the domain name group.
   * 
   * @example
   * 2223
   */
  groupId?: number;
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
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The resolution line. Default value: **default**.
   * 
   * For more information, see
   * 
   * [DNS lines](https://www.alibabacloud.com/help/zh/doc-detail/29807.htm).
   * 
   * @example
   * cn_mobile_anhui
   */
  line?: string;
  /**
   * @remarks
   * The method that is used to sort the returned DNS records. By default, the DNS records are sorted in reverse chronological order based on the time when they were added.
   * 
   * @example
   * default
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 500**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The hostname keyword based on which the system queries DNS records. The system queries DNS records based on the value of this parameter in fuzzy match mode. The value is not case-sensitive.
   * 
   * @example
   * www
   */
  RRKeyWord?: string;
  /**
   * @remarks
   * The search mode. Valid values: **LIKE, EXACT, and ADVANCED**.
   * 
   * *   If you set SearchMode to LIKE or EXACT, specify KeyWord. In this case, RRKeyWord, TypeKeyWord, ValueKeyWord, Type, Line, and Status are invalid.
   * 
   * *   If you set SearchMode to ADVANCED, specify RRKeyWord, TypeKeyWord, ValueKeyWord, Type, Line, and Status.
   * 
   * *   If you do not specify SearchMode, the system determines the search mode based on the following rules:
   * 
   *     *   If KeyWord is specified, the system uses the LIKE mode.
   *     *   If KeyWord is not specified, the system queries DNS records based on values of RRKeyWord and ValueKeyWord in fuzzy match mode, and based on the values of TypeKeyWord, Type, Line, and Status in exact match mode.
   * 
   * @example
   * LIKE
   */
  searchMode?: string;
  /**
   * @remarks
   * The status of the DNS records to query. Valid values: **Enable and Disable**.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The type of the DNS records to query. For more information, see
   * 
   * [DNS record types](https://www.alibabacloud.com/help/zh/doc-detail/29805.htm).
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The type keyword based on which the system queries DNS records. The system queries DNS records based on the value of this parameter in exact match mode. The value is not case-sensitive.
   * 
   * @example
   * MX
   */
  typeKeyWord?: string;
  /**
   * @remarks
   * The record value keyword based on which the system queries DNS records. The system queries DNS records based on the value of this parameter in fuzzy match mode. The value is not case-sensitive.
   * 
   * @example
   * com
   */
  valueKeyWord?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      domainName: 'DomainName',
      groupId: 'GroupId',
      keyWord: 'KeyWord',
      lang: 'Lang',
      line: 'Line',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      RRKeyWord: 'RRKeyWord',
      searchMode: 'SearchMode',
      status: 'Status',
      type: 'Type',
      typeKeyWord: 'TypeKeyWord',
      valueKeyWord: 'ValueKeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      domainName: 'string',
      groupId: 'number',
      keyWord: 'string',
      lang: 'string',
      line: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      RRKeyWord: 'string',
      searchMode: 'string',
      status: 'string',
      type: 'string',
      typeKeyWord: 'string',
      valueKeyWord: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

