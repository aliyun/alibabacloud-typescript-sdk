// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstances } from "./DescribeInstancesResponseBodyInstances";


export class DescribeInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the bastion hosts returned.
   */
  instances?: DescribeInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 61D36C55-AAFC-4678-8FAD-34FEF9E7182E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of bastion hosts that are queried.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

