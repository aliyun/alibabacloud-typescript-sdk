// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag to add to the resource.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to add to the resource.
   * 
   * @example
   * testValue
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
  /**
   * @remarks
   * The name of the domain name registrant.
   * 
   * @example
   * Guangzhou Jinye Renewable Resources Recycling Co., Ltd
   */
  ccompany?: string;
  dns?: string;
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * @example
   * 123456
   */
  domainGroupId?: string;
  /**
   * @remarks
   * The domain name. You can search for the domain name in the domain name list.
   * 
   * @example
   * test.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query domain names based on expiration dates. Set the value to a UNIX timestamp representing the number of milliseconds that have elapsed from January 1, 1970, 00:00:00 UTC to the time you perform the query. Only queries by day are supported.
   * 
   * @example
   * 1522080000000
   */
  endExpirationDate?: number;
  /**
   * @remarks
   * The end of the time range to query domain names based on registration dates. Set the value to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Only queries by day are supported.
   * 
   * @example
   * 1522080000000
   */
  endRegistrationDate?: number;
  /**
   * @remarks
   * The language of the error message to return if the request fails. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The order of the information based on which the domain names are sorted, such as the registration date and expiration date. Valid values:
   * 
   * *   **ASC**: ascending order
   * *   **DESC**: descending order
   * 
   * >  If this parameter is not specified, the default value **DESC** is used.
   * 
   * @example
   * ASC
   */
  orderByType?: string;
  /**
   * @remarks
   * The field that you use to sort the domain names. Valid values:
   * 
   * *   **RegistrationDate**: registration date
   * *   **ExpirationDate**: expiration date
   * 
   * >  If this parameter is not specified, the domain names are sorted by the time when they were added to the database.
   * 
   * @example
   * RegistrationDate
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
   * The type of the domain name. Valid values:
   * 
   * *   **New gTLD**: new generic top-level domain names
   * *   **gTLD**: generic top-level domain names
   * *   **ccTLD**: country code top-level domain names
   * 
   * @example
   * New gTLD
   */
  productDomainType?: string;
  /**
   * @remarks
   * The category of the domain names that you want to query. Valid values:
   * 
   * *   **1**: the domain names that need to be renewed
   * *   **2**: the domain names that need to be redeemed
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
   * The beginning of the time range to query domain names based on expiration dates. Set the value to a UNIX timestamp representing the number of milliseconds that have elapsed from January 1, 1970, 00:00:00 UTC to the time you perform the query. Only queries by day are supported.
   * 
   * @example
   * 1522080000000
   */
  startExpirationDate?: number;
  /**
   * @remarks
   * The beginning of the time range to query domain names based on registration dates. Set the value to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Only queries by day are supported.
   * 
   * @example
   * 1522080000000
   */
  startRegistrationDate?: number;
  /**
   * @remarks
   * The tags to add to the resource.
   */
  tag?: QueryDomainListRequestTag[];
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

