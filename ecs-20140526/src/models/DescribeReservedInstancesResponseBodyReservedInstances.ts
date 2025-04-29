// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeReservedInstancesResponseBodyReservedInstancesReservedInstance } from "./DescribeReservedInstancesResponseBodyReservedInstancesReservedInstance";


export class DescribeReservedInstancesResponseBodyReservedInstances extends $dara.Model {
  reservedInstance?: DescribeReservedInstancesResponseBodyReservedInstancesReservedInstance[];
  static names(): { [key: string]: string } {
    return {
      reservedInstance: 'ReservedInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedInstance: { 'type': 'array', 'itemType': DescribeReservedInstancesResponseBodyReservedInstancesReservedInstance },
    };
  }

  validate() {
    if(Array.isArray(this.reservedInstance)) {
      $dara.Model.validateArray(this.reservedInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

