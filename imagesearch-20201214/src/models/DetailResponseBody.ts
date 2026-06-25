// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetailResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * The maximum image capacity of the plan. Unit: 10,000.
   * 
   * @example
   * 10
   */
  capacity?: number;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * imagesearchName
   */
  name?: string;
  /**
   * @remarks
   * The QPS of the plan.
   * 
   * @example
   * 1
   */
  qps?: number;
  /**
   * @remarks
   * The region information.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The Image Search model.
   * 
   * <props="intl">Valid values: 0: product image search. 1: generic image search.
   * <props="china">Valid values: 0: product image search. 1: generic image search. 2: fabric search. 3 and 7: trademark search. 4: copyright search. 5: furniture search. 6: hardware search..
   * 
   * @example
   * 0
   */
  serviceType?: number;
  /**
   * @remarks
   * The number of images.
   * 
   * @example
   * 10063
   */
  totalCount?: number;
  /**
   * @remarks
   * The creation time of the instance. Unit: milliseconds.
   * 
   * @example
   * 1620382716000
   */
  utcCreate?: string;
  /**
   * @remarks
   * The time when the instance expires. Unit: milliseconds.
   * 
   * @example
   * 1623081600000
   */
  utcExpireTime?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      name: 'Name',
      qps: 'Qps',
      region: 'Region',
      serviceType: 'ServiceType',
      totalCount: 'TotalCount',
      utcCreate: 'UtcCreate',
      utcExpireTime: 'UtcExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      name: 'string',
      qps: 'number',
      region: 'string',
      serviceType: 'number',
      totalCount: 'number',
      utcCreate: 'string',
      utcExpireTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance information.
   */
  instance?: DetailResponseBodyInstance;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36C43E96-8F68-44AA-B1AF-B1F7AB94A6C1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DetailResponseBodyInstance,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

