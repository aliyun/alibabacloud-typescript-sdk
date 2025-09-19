// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileDetectApiInvokeInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of authorizations.
   * 
   * @example
   * 10000
   */
  authCount?: number;
  /**
   * @remarks
   * The total number of authorizations(excluding trials).
   * 
   * @example
   * 20
   */
  authCountInSaleVersion?: number;
  /**
   * @remarks
   * The timestamp of the expiration date of the authorization number.
   * 
   * @example
   * 1815753600000
   */
  expire?: number;
  /**
   * @remarks
   * The frequency of calls.
   * 
   * @example
   * 20
   */
  flowRate?: number;
  /**
   * @remarks
   * The number of authorizations used.
   * 
   * @example
   * 10
   */
  invokeCount?: number;
  /**
   * @remarks
   * The number of authorizations used(excluding trials).
   * 
   * @example
   * 20
   */
  invokeCountInSaleVersion?: number;
  /**
   * @remarks
   * The number of remaining authorizations.
   * 
   * @example
   * 900
   */
  remainAuthCount?: number;
  /**
   * @remarks
   * The Authorized Version. Valid values include:
   * 
   * * **1:** trial version
   * * **2:** Enterprise Edition
   * 
   * @example
   * 2
   */
  saleVersion?: number;
  /**
   * @remarks
   * The time unit of the frequency limit. Value:
   * 
   * * **SECONDS**
   * * **MINUTES**
   * 
   * @example
   * SECONDS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      authCount: 'AuthCount',
      authCountInSaleVersion: 'AuthCountInSaleVersion',
      expire: 'Expire',
      flowRate: 'FlowRate',
      invokeCount: 'InvokeCount',
      invokeCountInSaleVersion: 'InvokeCountInSaleVersion',
      remainAuthCount: 'RemainAuthCount',
      saleVersion: 'SaleVersion',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCount: 'number',
      authCountInSaleVersion: 'number',
      expire: 'number',
      flowRate: 'number',
      invokeCount: 'number',
      invokeCountInSaleVersion: 'number',
      remainAuthCount: 'number',
      saleVersion: 'number',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileDetectApiInvokeInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returns the response body.
   */
  data?: GetFileDetectApiInvokeInfoResponseBodyData;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9f368b6e-d60a-43c5-bd6f-c7087f2d****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFileDetectApiInvokeInfoResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

