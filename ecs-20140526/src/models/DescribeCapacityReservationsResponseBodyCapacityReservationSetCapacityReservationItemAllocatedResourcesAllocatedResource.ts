// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsages } from "./DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsages";


export class DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResource extends $dara.Model {
  /**
   * @remarks
   * The number of available instances.
   * 
   * @example
   * 2
   */
  availableAmount?: number;
  /**
   * @remarks
   * Details of instance usage.
   */
  capacityReservationUsages?: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsages;
  /**
   * @remarks
   * The instance type of the instances.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The total number of instances for which the capacity of an instance type is reserved.
   * 
   * @example
   * 2
   */
  totalAmount?: number;
  /**
   * @remarks
   * The number of instances that have used the capacity reservation.
   * 
   * @example
   * 2
   */
  usedAmount?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      capacityReservationUsages: 'CapacityReservationUsages',
      instanceType: 'InstanceType',
      totalAmount: 'TotalAmount',
      usedAmount: 'UsedAmount',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'number',
      capacityReservationUsages: DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsages,
      instanceType: 'string',
      totalAmount: 'number',
      usedAmount: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.capacityReservationUsages && typeof (this.capacityReservationUsages as any).validate === 'function') {
      (this.capacityReservationUsages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

