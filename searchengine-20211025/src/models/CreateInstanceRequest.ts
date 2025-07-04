// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateInstanceRequestComponents } from "./CreateInstanceRequestComponents";
import { CreateInstanceRequestOrder } from "./CreateInstanceRequestOrder";
import { CreateInstanceRequestTags } from "./CreateInstanceRequestTags";


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

