// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceExtResponseBodyInstanceExtSpecs } from "./DescribeInstanceExtResponseBodyInstanceExtSpecs";


export class DescribeInstanceExtResponseBody extends $dara.Model {
  /**
   * @remarks
   * The extended information about the Anti-DDoS Proxy instance.
   */
  instanceExtSpecs?: DescribeInstanceExtResponseBodyInstanceExtSpecs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried instances.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceExtSpecs: 'InstanceExtSpecs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceExtSpecs: { 'type': 'array', 'itemType': DescribeInstanceExtResponseBodyInstanceExtSpecs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceExtSpecs)) {
      $dara.Model.validateArray(this.instanceExtSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

