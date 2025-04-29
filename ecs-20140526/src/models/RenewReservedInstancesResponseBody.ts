// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RenewReservedInstancesResponseBodyReservedInstanceIdSets } from "./RenewReservedInstancesResponseBodyReservedInstanceIdSets";


export class RenewReservedInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2023912123****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8C314443-AF0D-4766-9562-C83B7F1****
   */
  requestId?: string;
  /**
   * @remarks
   * The IDs of the reserved instances.
   */
  reservedInstanceIdSets?: RenewReservedInstancesResponseBodyReservedInstanceIdSets;
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
      reservedInstanceIdSets: RenewReservedInstancesResponseBodyReservedInstanceIdSets,
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

