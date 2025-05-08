// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTypesResponseBodyInstanceTypes } from "./DescribeInstanceTypesResponseBodyInstanceTypes";


export class DescribeInstanceTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. If the request is successful, 0 is returned. If the request fails, a non-zero error code is returned.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Details about the instance types.
   */
  instanceTypes?: DescribeInstanceTypesResponseBodyInstanceTypes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D452D190-BADF-5D09-910D-599B96D42AAA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceTypes: 'InstanceTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceTypes: DescribeInstanceTypesResponseBodyInstanceTypes,
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

