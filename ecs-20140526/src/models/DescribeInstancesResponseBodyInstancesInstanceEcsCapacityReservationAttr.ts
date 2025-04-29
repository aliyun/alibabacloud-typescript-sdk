// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceEcsCapacityReservationAttr extends $dara.Model {
  /**
   * @remarks
   * The ID of the capacity reservation.
   * 
   * @example
   * cr-bp67acfmxazb4p****
   */
  capacityReservationId?: string;
  /**
   * @remarks
   * The preference of the capacity reservation.
   * 
   * @example
   * cr-bp67acfmxazb4p****
   */
  capacityReservationPreference?: string;
  static names(): { [key: string]: string } {
    return {
      capacityReservationId: 'CapacityReservationId',
      capacityReservationPreference: 'CapacityReservationPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityReservationId: 'string',
      capacityReservationPreference: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

