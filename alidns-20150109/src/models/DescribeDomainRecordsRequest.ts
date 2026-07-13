// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The sorting direction. Valid values: DESC, ASC. Default value: DESC.
   * 
   * @example
   * DESC
   */
  direction?: string;
  /**
   * @remarks
   * The domain name.<props="china"> For more information, see [DescribeDomains](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c4g.11186623.help-menu-search-29697.d_0).
   * <props="intl">For more information, see [DescribeDomains](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the domain group.
   * 
   * - If you do not specify GroupId, the query is performed on all domain names.
   * 
   * - If you set GroupId to 0, an empty result is returned.
   * 
   * - If you set GroupId to -1, the query is performed on the default group. The default group includes domain names that are not assigned to a group.
   * 
   * - If you set GroupId to -2, the query is performed on all domain names.
   * 
   * - If you specify another value for GroupId, the query is performed on the specified group.
   *   <props="china">For more information, see [DescribeDomainGroups](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-describedomaingroups?spm=a2c4g.11186623.help-menu-search-29697.d_0).
   *   <props="intl">For more information, see [DescribeDomainGroups](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomaingroups?spm=a2c63.p38356.help-menu-search-29697.d_0).
   * 
   * @example
   * 2****
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
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The DNS resolution line. Default value: **default**.
   * 
   * For more information, see:
   * <props="china">[Enumeration of DNS resolution lines](https://help.aliyun.com/document_detail/29807.html).
   * 
   * <props="intl">
   * 
   * [Enumeration of DNS resolution lines](https://www.alibabacloud.com/help/zh/doc-detail/29807.htm)
   * 
   * @example
   * cn_mobile_anhui
   */
  line?: string;
  /**
   * @remarks
   * The sorting method. Records are sorted in descending order based on the time they were added.
   * 
   * @example
   * default
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. The value starts from **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. Maximum value: **500**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword for the host record. The search uses a fuzzy match pattern and is not case-sensitive.
   * 
   * @example
   * www
   */
  RRKeyWord?: string;
  /**
   * @remarks
   * The search mode. Valid values: LIKE, EXACT, ADVANCED, and **COMBINATION**.
   * 
   * - If you set this parameter to LIKE or EXACT, use the KeyWord parameter. The RRKeyWord, TypeKeyWord, ValueKeyWord, Type, Line, and Status parameters are invalid.
   * 
   * - If you set this parameter to ADVANCED, use the RRKeyWord, TypeKeyWord, ValueKeyWord, Type, Line, and Status parameters. The RRKeyWord and ValueKeyWord parameters support fuzzy matching.
   * 
   * - If you set this parameter to COMBINATION, use the RRKeyWord, TypeKeyWord, ValueKeyWord, Type, Line, and Status parameters. All these parameters support only exact matching.
   * 
   * - If you do not specify this parameter:
   * 
   *   - If you specify the keyWord parameter, the search mode is set to LIKE.
   * 
   *   - If you do not specify the keyWord parameter, RRKeyWord and ValueKeyWord support fuzzy matching, and TypeKeyWord, Type, Line, and Status support exact matching.
   * 
   * @example
   * LIKE
   */
  searchMode?: string;
  /**
   * @remarks
   * The status of the DNS record. Valid values:
   * 
   * Enable: The DNS record is enabled.
   * 
   * Disable: The DNS record is paused.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The type of the DNS record. For more information, see:
   * 
   * <props="china">[DNS record types](https://help.aliyun.com/document_detail/29805.html)
   * <props="intl">[DNS record types](https://www.alibabacloud.com/help/zh/doc-detail/29805.htm)
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The keyword for the record type. The search uses an exact match and is not case-sensitive.
   * 
   * @example
   * MX
   */
  typeKeyWord?: string;
  /**
   * @remarks
   * The keyword for the record value. The search uses a fuzzy match pattern and is not case-sensitive.
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

