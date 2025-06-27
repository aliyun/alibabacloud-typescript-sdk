// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsProductInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The order in which you want to sort returned entries. Valid values:
   * 
   * *   DESC: Returned entries are sorted in descending order. If this parameter is left empty, returned entries are sorted in descending order by default.
   * *   ASC: Returned entries are sorted in ascending order.
   * 
   * @example
   * DESC
   */
  direction?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   PUBLIC (default): hosted public domain name
   * *   CACHE: cached public domain name
   * 
   * @example
   * PUBLIC
   */
  domainType?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The method that is used to sort returned entries. Valid values:
   * 
   * *   createDate: sorts returned entries by creation time. If this parameter is left empty, returned entries are sorted by creation time by default.
   * *   expireDate: sorts returned entries by expiration time.
   * 
   * @example
   * createDate
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 192.0.2.0
   */
  userClientIp?: string;
  /**
   * @remarks
   * The version code of the Alibaba Cloud DNS instance.
   * 
   * @example
   * version1
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      domainType: 'DomainType',
      lang: 'Lang',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userClientIp: 'UserClientIp',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      domainType: 'string',
      lang: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userClientIp: 'string',
      versionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

