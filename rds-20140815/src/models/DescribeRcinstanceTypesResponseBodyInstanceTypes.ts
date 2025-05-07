// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType } from "./DescribeRcinstanceTypesResponseBodyInstanceTypesInstanceType";


export class DescribeRCInstanceTypesResponseBodyInstanceTypes extends $dara.Model {
  /**
   * @remarks
   * The instance types.
   */
  instanceType?: DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType },
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

