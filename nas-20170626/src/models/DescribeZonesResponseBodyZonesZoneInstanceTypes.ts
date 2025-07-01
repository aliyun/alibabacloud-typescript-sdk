// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZonesResponseBodyZonesZoneInstanceTypesInstanceType } from "./DescribeZonesResponseBodyZonesZoneInstanceTypesInstanceType";


export class DescribeZonesResponseBodyZonesZoneInstanceTypes extends $dara.Model {
  instanceType?: DescribeZonesResponseBodyZonesZoneInstanceTypesInstanceType[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZoneInstanceTypesInstanceType },
    };
  }

  validate() {
    if(Array.isArray(this.instanceType)) {
      $dara.Model.validateArray(this.instanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

