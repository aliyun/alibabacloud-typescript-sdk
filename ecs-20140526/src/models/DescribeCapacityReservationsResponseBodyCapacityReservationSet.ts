// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItem } from "./DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItem";


export class DescribeCapacityReservationsResponseBodyCapacityReservationSet extends $dara.Model {
  capacityReservationItem?: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItem[];
  static names(): { [key: string]: string } {
    return {
      capacityReservationItem: 'CapacityReservationItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityReservationItem: { 'type': 'array', 'itemType': DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItem },
    };
  }

  validate() {
    if(Array.isArray(this.capacityReservationItem)) {
      $dara.Model.validateArray(this.capacityReservationItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

