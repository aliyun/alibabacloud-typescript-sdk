// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResellersResponseBodySupplierInformation extends $dara.Model {
  /**
   * @remarks
   * The description of the reseller.
   * 
   * @example
   * It is a XXXX company.
   */
  supplierDesc?: string;
  /**
   * @remarks
   * The icon of the reseller.
   * 
   * @example
   * https://service-info-public.oss-cn-hangzhou.aliyuncs.com/31978070/service-image/d5c3b585-ff6b-4e4e-8885-xxxx.png
   */
  supplierLogo?: string;
  /**
   * @remarks
   * The name of the reseller.
   * 
   * @example
   * Distributora
   */
  supplierName?: string;
  /**
   * @remarks
   * The UID of the reseller.
   * 
   * @example
   * 152xxxxxxxxxxx
   */
  supplierUid?: number;
  /**
   * @remarks
   * The URL of the reseller\\"s official website.
   * 
   * @example
   * http://www.aliyun.com
   */
  supplierUrl?: string;
  static names(): { [key: string]: string } {
    return {
      supplierDesc: 'SupplierDesc',
      supplierLogo: 'SupplierLogo',
      supplierName: 'SupplierName',
      supplierUid: 'SupplierUid',
      supplierUrl: 'SupplierUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supplierDesc: 'string',
      supplierLogo: 'string',
      supplierName: 'string',
      supplierUid: 'number',
      supplierUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResellersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page. The maximum value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * AAAAAW8kZY+u1sYOaYf5JmgmDQQ=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A361BA9E-xxxx-xxxx-xxxx-C26E5180456E
   */
  requestId?: string;
  /**
   * @remarks
   * The list of results.
   */
  supplierInformation?: ListResellersResponseBodySupplierInformation[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      supplierInformation: 'SupplierInformation',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      supplierInformation: { 'type': 'array', 'itemType': ListResellersResponseBodySupplierInformation },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.supplierInformation)) {
      $dara.Model.validateArray(this.supplierInformation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

