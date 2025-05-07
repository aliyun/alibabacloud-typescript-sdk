// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceTypesResponseBodyInstanceTypes } from "./DescribeRcinstanceTypesResponseBodyInstanceTypes";


export class DescribeRCInstanceTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the instance types.
   */
  instanceTypes?: DescribeRCInstanceTypesResponseBodyInstanceTypes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2911788-25E8-42E5-A3A3-1B38D263F01E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: DescribeRCInstanceTypesResponseBodyInstanceTypes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceTypes && typeof (this.instanceTypes as any).validate === 'function') {
      (this.instanceTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

