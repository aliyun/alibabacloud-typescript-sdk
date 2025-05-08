// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEpnInstancesResponseBodyEPNInstancesEPNInstance } from "./DescribeEpnInstancesResponseBodyEpninstancesEpninstance";


export class DescribeEpnInstancesResponseBodyEPNInstances extends $dara.Model {
  EPNInstance?: DescribeEpnInstancesResponseBodyEPNInstancesEPNInstance[];
  static names(): { [key: string]: string } {
    return {
      EPNInstance: 'EPNInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstance: { 'type': 'array', 'itemType': DescribeEpnInstancesResponseBodyEPNInstancesEPNInstance },
    };
  }

  validate() {
    if(Array.isArray(this.EPNInstance)) {
      $dara.Model.validateArray(this.EPNInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

