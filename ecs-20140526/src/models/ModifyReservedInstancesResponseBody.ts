// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyReservedInstancesResponseBodyReservedInstanceIdSets } from "./ModifyReservedInstancesResponseBodyReservedInstanceIdSets";


export class ModifyReservedInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the reserved instance.
   * 
   * @example
   * ED9E4A5F-FF4D-4C96-BE80-6B4227060DD7
   */
  requestId?: string;
  /**
   * @remarks
   * The IDs of the reserved instances.
   */
  reservedInstanceIdSets?: ModifyReservedInstancesResponseBodyReservedInstanceIdSets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      reservedInstanceIdSets: 'ReservedInstanceIdSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      reservedInstanceIdSets: ModifyReservedInstancesResponseBodyReservedInstanceIdSets,
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

