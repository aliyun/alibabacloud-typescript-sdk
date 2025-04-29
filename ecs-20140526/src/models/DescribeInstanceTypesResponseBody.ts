// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTypesResponseBodyInstanceTypes } from "./DescribeInstanceTypesResponseBodyInstanceTypes";


export class DescribeInstanceTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the instance types.
   */
  instanceTypes?: DescribeInstanceTypesResponseBodyInstanceTypes;
  /**
   * @remarks
   * The query token returned in this call.
   * 
   * @example
   * e71d8a535bd9cc11
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 00827261-20B7-4562-83F2-4DF39876A45A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: DescribeInstanceTypesResponseBodyInstanceTypes,
      nextToken: 'string',
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

