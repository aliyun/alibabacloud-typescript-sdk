// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsagesCapacityReservationUsage } from "./DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsagesCapacityReservationUsage";


export class DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsages extends $dara.Model {
  capacityReservationUsage?: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsagesCapacityReservationUsage[];
  static names(): { [key: string]: string } {
    return {
      capacityReservationUsage: 'CapacityReservationUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityReservationUsage: { 'type': 'array', 'itemType': DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsagesCapacityReservationUsage },
    };
  }

  validate() {
    if(Array.isArray(this.capacityReservationUsage)) {
      $dara.Model.validateArray(this.capacityReservationUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

