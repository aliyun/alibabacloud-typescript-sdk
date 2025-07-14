// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceChargeTypeResponseBodyFeeOfInstancesFeeOfInstance extends $dara.Model {
  /**
   * @remarks
   * The unit of currency for the bill.
   * 
   * Alibaba Cloud China site (aliyun.com): CNY.
   * 
   * Alibaba Cloud International site (alibabacloud.com): USD.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The cost value.
   * 
   * @example
   * 0
   */
  fee?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      fee: 'Fee',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      fee: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceChargeTypeResponseBodyFeeOfInstances extends $dara.Model {
  feeOfInstance?: ModifyInstanceChargeTypeResponseBodyFeeOfInstancesFeeOfInstance[];
  static names(): { [key: string]: string } {
    return {
      feeOfInstance: 'FeeOfInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feeOfInstance: { 'type': 'array', 'itemType': ModifyInstanceChargeTypeResponseBodyFeeOfInstancesFeeOfInstance },
    };
  }

  validate() {
    if(Array.isArray(this.feeOfInstance)) {
      $dara.Model.validateArray(this.feeOfInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceChargeTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the charges for the order.
   */
  feeOfInstances?: ModifyInstanceChargeTypeResponseBodyFeeOfInstances;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 20413515388****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B61C08E5-403A-46A2-96C1-F7B1216DB10C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      feeOfInstances: 'FeeOfInstances',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feeOfInstances: ModifyInstanceChargeTypeResponseBodyFeeOfInstances,
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.feeOfInstances && typeof (this.feeOfInstances as any).validate === 'function') {
      (this.feeOfInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

