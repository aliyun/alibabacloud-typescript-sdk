// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCapacityReservationInstancesResponseBodyCapacityReservationItemInstanceIdSet } from "./DescribeCapacityReservationInstancesResponseBodyCapacityReservationItemInstanceIdSet";


export class DescribeCapacityReservationInstancesResponseBodyCapacityReservationItem extends $dara.Model {
  instanceIdSet?: DescribeCapacityReservationInstancesResponseBodyCapacityReservationItemInstanceIdSet[];
  static names(): { [key: string]: string } {
    return {
      instanceIdSet: 'InstanceIdSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdSet: { 'type': 'array', 'itemType': DescribeCapacityReservationInstancesResponseBodyCapacityReservationItemInstanceIdSet },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdSet)) {
      $dara.Model.validateArray(this.instanceIdSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

