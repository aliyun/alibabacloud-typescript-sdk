// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainListRequest extends $dara.Model {
  ccompany?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 1522080000000
   */
  endExpirationDate?: number;
  /**
   * @example
   * 1522080000000
   */
  endRegistrationDate?: number;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * DESC
   */
  orderByType?: string;
  /**
   * @example
   * ExpirationDate
   */
  orderKeyType?: string;
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
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * gTLD
   */
  productDomainType?: string;
  /**
   * @example
   * 1
   */
  queryType?: string;
  /**
   * @example
   * 1522080000000
   */
  startExpirationDate?: number;
  /**
   * @example
   * 1522080000000
   */
  startRegistrationDate?: number;
  /**
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      ccompany: 'Ccompany',
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
      startExpirationDate: 'StartExpirationDate',
      startRegistrationDate: 'StartRegistrationDate',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccompany: 'string',
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
      startExpirationDate: 'number',
      startRegistrationDate: 'number',
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

