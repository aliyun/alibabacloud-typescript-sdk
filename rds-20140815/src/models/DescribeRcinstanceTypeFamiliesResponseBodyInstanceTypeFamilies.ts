// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamiliesInstanceTypeFamily } from "./DescribeRcinstanceTypeFamiliesResponseBodyInstanceTypeFamiliesInstanceTypeFamily";


export class DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamilies extends $dara.Model {
  /**
   * @remarks
   * The instance family.
   */
  instanceTypeFamily?: DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamiliesInstanceTypeFamily[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamily: 'InstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamily: { 'type': 'array', 'itemType': DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamiliesInstanceTypeFamily },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypeFamily)) {
      $dara.Model.validateArray(this.instanceTypeFamily);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

