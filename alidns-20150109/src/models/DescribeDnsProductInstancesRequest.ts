// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsProductInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * - DESC: Descending order. This is the default value.
   * 
   * - ASC: Ascending order.
   * 
   * @example
   * DESC
   */
  direction?: string;
  /**
   * @remarks
   * The type of the domain name. This parameter is not case-sensitive. Valid values:
   * 
   * - PUBLIC: authoritative domain name (default)
   * 
   * - CACHE: authoritative proxy domain name
   * 
   * @example
   * PUBLIC
   */
  domainType?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * Default value: en
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The field to sort the results by. Valid values:
   * 
   * - createDate: Sorts the results by creation time. This is the default value.
   * 
   * - expireDate: Sorts the results by expiration time.
   * 
   * @example
   * createDate
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Pages start from **1**. Default value: **1**.
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
   * The client\\"s IP address.
   * 
   * @example
   * 192.0.2.0
   */
  userClientIp?: string;
  /**
   * @remarks
   * The edition code of the Alibaba Cloud DNS instance.
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

