// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafDeOrderResponseBodyResultObjectRegions extends $dara.Model {
  /**
   * @remarks
   * The expiration date (timestamp).
   * 
   * @example
   * 2117750400000
   */
  expirationDate?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The specification type:
   * 
   *  1: Basic Edition
   *  2: Advanced Edition
   *  3: Premium Edition
   *  4: Ultimate Edition.
   * 
   * @example
   * 1
   */
  specification?: number;
  static names(): { [key: string]: string } {
    return {
      expirationDate: 'expirationDate',
      region: 'region',
      specification: 'specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationDate: 'number',
      region: 'string',
      specification: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSafDeOrderResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1728008155799
   */
  expirationDate?: number;
  /**
   * @remarks
   * The console permissions are classified into three categories based on the commodity type activated by the customer:
   * 
   *      1. New customer: has not purchased or activated any service.
   *      2. Existing customer (subscription): has purchased the saf commodity.
   *      3. Pay-as-you-go: has purchased the saf_bag commodity or activated saf_pos.
   * 
   * @example
   * 2
   */
  openUserType?: number;
  /**
   * @remarks
   * The activated region permission addresses.
   */
  regions?: DescribeSafDeOrderResponseBodyResultObjectRegions[];
  static names(): { [key: string]: string } {
    return {
      expirationDate: 'expirationDate',
      openUserType: 'openUserType',
      regions: 'regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationDate: 'number',
      openUserType: 'number',
      regions: { 'type': 'array', 'itemType': DescribeSafDeOrderResponseBodyResultObjectRegions },
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSafDeOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * The response object.
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

