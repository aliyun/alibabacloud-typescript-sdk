// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestComponents extends $dara.Model {
  /**
   * @remarks
   * The code of the specification, which must be consistent with the value that you specify on the buy page.
   * 
   * @example
   * ""
   */
  code?: string;
  /**
   * @remarks
   * The value of the specification.
   * 
   * @example
   * ""
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class CreateInstanceRequestOrder extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values: true and false.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing duration. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, and 12.
   * 
   * @example
   * 29
   */
  duration?: number;
  /**
   * @remarks
   * The unit of the billing duration. Valid values: Month and Year.
   * 
   * @example
   * ""
   */
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'autoRenew',
      duration: 'duration',
      pricingCycle: 'pricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      duration: 'number',
      pricingCycle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. Valid values: PREPAY: subscription. If you set this parameter to PREPAY, make sure that your Alibaba Cloud account supports balance payment or credit card payment. Otherwise, the system returns the InvalidPayMethod error message. If you set this parameter to PREPAY, you must also specify paymentInfo. POSTPAY: pay-as-you-go. This billing method is not supported.
   * 
   * @example
   * ""
   */
  chargeType?: string;
  /**
   * @remarks
   * The information about the instance specification.
   */
  components?: CreateInstanceRequestComponents[];
  /**
   * @remarks
   * The billing information.
   */
  order?: CreateInstanceRequestOrder;
  resourceGroupId?: string;
  tags?: CreateInstanceRequestTags[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      components: 'components',
      order: 'order',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      components: { 'type': 'array', 'itemType': CreateInstanceRequestComponents },
      order: CreateInstanceRequestOrder,
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateInstanceRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(this.order && typeof (this.order as any).validate === 'function') {
      (this.order as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

