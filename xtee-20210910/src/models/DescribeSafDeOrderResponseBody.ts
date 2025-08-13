// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafDeOrderResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Expiration time
   * 
   * @example
   * 1728008155799
   */
  expirationDate?: number;
  /**
   * @remarks
   * Based on the product type subscribed by the customer, the console permissions are divided into three categories:
   * 
   *      1. New Customer: Has not purchased/subscribed to any service.
   *      2. Old Customer (Subscription): Customers who have purchased the SAF product.
   *      3. Pay-As-You-Go: Customers who have purchased the SAF_BAG product or activated SAF_POS.
   * 
   * @example
   * 2
   */
  openUserType?: number;
  static names(): { [key: string]: string } {
    return {
      expirationDate: 'expirationDate',
      openUserType: 'openUserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationDate: 'number',
      openUserType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSafDeOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeSafDeOrderResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeSafDeOrderResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

