// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificatePackageCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message notification quota.
   * 
   * @example
   * {TotalCount=189, RemainCount=94, UsedCount=95}
   */
  noticeCountDetail?: string;
  /**
   * @remarks
   * The details of certificate brand products.
   * 
   * @example
   * [
   *   {
   *     "BrandName": "CFCA",
   *     "TotalCount": 14,
   *     "DomainType": "ONE",
   *     "RemainCount": 14,
   *     "ProductCode": "cfca-ev-1-advanced",
   *     "CertType": "EV",
   *     "ProductId": 8,
   *     "UsedCount": 0
   *   }
   * ]
   */
  productCountList?: string;
  /**
   * @remarks
   * The acceleration gateway forwarding quota.
   * 
   * @example
   * {TotalCount=116900, RemainCount=90448, AutoPay=0, AutoPayCount=5000, UsedCount=26452}
   */
  proxyCountDetail?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08F45EA0-66A7-4504-9B31-3589F5CE308D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of domain names bound to certificates.
   * 
   * @example
   * {TotalCount=573, RemainCount=243, FreeQuota=10, UsedCount=330}
   */
  totalCountDetail?: string;
  /**
   * @remarks
   * The usage of the hosting quota.
   * 
   * @example
   * {TotalCount=177, ValidCount=6, RemainCount=129, UsedCount=48}
   */
  trusteeCountDetail?: string;
  static names(): { [key: string]: string } {
    return {
      noticeCountDetail: 'NoticeCountDetail',
      productCountList: 'ProductCountList',
      proxyCountDetail: 'ProxyCountDetail',
      requestId: 'RequestId',
      totalCountDetail: 'TotalCountDetail',
      trusteeCountDetail: 'TrusteeCountDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeCountDetail: 'string',
      productCountList: 'string',
      proxyCountDetail: 'string',
      requestId: 'string',
      totalCountDetail: 'string',
      trusteeCountDetail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

