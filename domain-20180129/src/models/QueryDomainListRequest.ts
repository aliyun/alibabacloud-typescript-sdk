// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * 备注
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 标签1
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

export class QueryDomainListRequest extends $dara.Model {
  autoRenewEnabled?: boolean;
  /**
   * @remarks
   * The name of the domain owner.
   * 
   * @example
   * 广州金烨再生资源回收有限公司
   */
  ccompany?: string;
  dns?: string;
  /**
   * @remarks
   * <props="china">The ID of the domain group. You can obtain this ID by calling the [QueryDomainGroupList](https://help.aliyun.com/document_detail/69362.html) operation.
   * <props="intl">The ID of the domain group.
   * 
   * @example
   * 123456
   */
  domainGroupId?: string;
  /**
   * @remarks
   * The domain name to query.
   * 
   * @example
   * test.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the expiration date range. The value is a Unix timestamp in milliseconds. Currently, only queries by day are supported.
   * 
   * @example
   * 1522080000000
   */
  endExpirationDate?: number;
  /**
   * @remarks
   * The end of the registration date range. The value is a Unix timestamp in milliseconds. Currently, only queries by day are supported.
   * 
   * @example
   * 1522080000000
   */
  endRegistrationDate?: number;
  /**
   * @remarks
   * The language for API error messages. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * The default value is **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The sort order for the results. Valid values:
   * 
   * - **ASC**: Ascending.
   * 
   * - **DESC**: Descending.
   * 
   * > The default value is **DESC**.
   * 
   * @example
   * ASC
   */
  orderByType?: string;
  /**
   * @remarks
   * The field to use for sorting. Valid values:
   * 
   * - **RegistrationDate**: Sorts by registration date.
   * 
   * - **ExpirationDate**: Sorts by expiration date.
   * 
   * > By default, the results are sorted by the time they were added to the system.
   * 
   * @example
   * RegistrationDate
   */
  orderKeyType?: string;
  /**
   * @remarks
   * The page number for the paginated results.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The domain type. Valid values:
   * 
   * - **New gTLD**: new generic top-level domain.
   * 
   * - **gTLD**: generic top-level domain.
   * 
   * - **ccTLD**: country-code top-level domain.
   * 
   * @example
   * New gTLD
   */
  productDomainType?: string;
  /**
   * @remarks
   * The type of list to return. Valid values:
   * 
   * - **1**: Domain names that require urgent renewal.
   * 
   * - **2**: Domain names that require urgent redemption.
   * 
   * @example
   * 1
   */
  queryType?: string;
  registrar?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2indvyxgpfti
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start of the expiration date range. The value is a Unix timestamp in milliseconds. Currently, only queries by day are supported.
   * 
   * @example
   * 1522080000000
   */
  startExpirationDate?: number;
  /**
   * @remarks
   * The start of the registration date range. The value is a Unix timestamp in milliseconds. Currently, only queries by day are supported.
   * 
   * @example
   * 1522080000000
   */
  startRegistrationDate?: number;
  /**
   * @remarks
   * A list of tags.
   */
  tag?: QueryDomainListRequestTag[];
  /**
   * @remarks
   * The user\\"s client IP address. You can set this parameter to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewEnabled: 'AutoRenewEnabled',
      ccompany: 'Ccompany',
      dns: 'Dns',
      domainGroupId: 'DomainGroupId',
      domainName: 'DomainName',
      endExpirationDate: 'EndExpirationDate',
      endRegistrationDate: 'EndRegistrationDate',
      lang: 'Lang',
      orderByType: 'OrderByType',
      orderKeyType: 'OrderKeyType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productDomainType: 'ProductDomainType',
      queryType: 'QueryType',
      registrar: 'Registrar',
      resourceGroupId: 'ResourceGroupId',
      startExpirationDate: 'StartExpirationDate',
      startRegistrationDate: 'StartRegistrationDate',
      tag: 'Tag',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewEnabled: 'boolean',
      ccompany: 'string',
      dns: 'string',
      domainGroupId: 'string',
      domainName: 'string',
      endExpirationDate: 'number',
      endRegistrationDate: 'number',
      lang: 'string',
      orderByType: 'string',
      orderKeyType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      productDomainType: 'string',
      queryType: 'string',
      registrar: 'string',
      resourceGroupId: 'string',
      startExpirationDate: 'number',
      startRegistrationDate: 'number',
      tag: { 'type': 'array', 'itemType': QueryDomainListRequestTag },
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

