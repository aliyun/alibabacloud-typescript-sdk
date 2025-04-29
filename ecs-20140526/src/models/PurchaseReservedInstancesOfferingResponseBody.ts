// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PurchaseReservedInstancesOfferingResponseBodyReservedInstanceIdSets } from "./PurchaseReservedInstancesOfferingResponseBodyReservedInstanceIdSets";


export class PurchaseReservedInstancesOfferingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 23841229****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8C314443-AF0D-4766-9562-C83B7F1A3C8B
   */
  requestId?: string;
  /**
   * @remarks
   * The IDs of the reserved instances.
   */
  reservedInstanceIdSets?: PurchaseReservedInstancesOfferingResponseBodyReservedInstanceIdSets;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      reservedInstanceIdSets: 'ReservedInstanceIdSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      reservedInstanceIdSets: PurchaseReservedInstancesOfferingResponseBodyReservedInstanceIdSets,
    };
  }

  validate() {
    if(this.reservedInstanceIdSets && typeof (this.reservedInstanceIdSets as any).validate === 'function') {
      (this.reservedInstanceIdSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

