// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrusteeOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. If NextToken is empty, no more results are available.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0068247C-A454-5FC9-93BF-C41CBB5CD19E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of orders.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of orders.
   * 
   * @example
   * [
   *   {
   *     "VerifyStatus": 0,
   *     "ShowRefund": false,
   *     "CertificateId": 0,
   *     "SourceType": "buy",
   *     "IsMix": false,
   *     "CertType": "DV",
   *     "PartnerOrderId": null,
   *     "ProductId": 53,
   *     "StatusCode": "closed",
   *     "KeyProtection": "UNKNOWN",
   *     "BrandName": "Rapid",
   *     "JobStatus": "editing",
   *     "Month": 6,
   *     "IsFree": false,
   *     "DomainType": "ONE",
   *     "IsRefunding": false,
   *     "RevokeReturnCount": false,
   *     "JobId": 440231,
   *     "DomainCount": 1,
   *     "InstanceId": "cas-ivauto-fe7kv4-15650439-renew",
   *     "ProductCode": "geotrust-dv-1-starter",
   *     "WildDomainCount": 0,
   *     "OrderId": 15652305,
   *     "Algorithm": "RSA",
   *     "Year": 1,
   *     "IsRenew": false,
   *     "Domain": "tw.certqa.cn",
   *     "AllDomain": "tw.certqa.cn",
   *     "BuyDate": 1773906251000
   *   }
   * ]
   */
  trusteeOrderList?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trusteeOrderList: 'TrusteeOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      trusteeOrderList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

