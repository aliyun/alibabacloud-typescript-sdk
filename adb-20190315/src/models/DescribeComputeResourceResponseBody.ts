// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeComputeResourceResponseBodyComputeResource } from "./DescribeComputeResourceResponseBodyComputeResource";


export class DescribeComputeResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried specifications of computing resources.
   */
  computeResource?: DescribeComputeResourceResponseBodyComputeResource[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEAW
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: { 'type': 'array', 'itemType': DescribeComputeResourceResponseBodyComputeResource },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.computeResource)) {
      $dara.Model.validateArray(this.computeResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

