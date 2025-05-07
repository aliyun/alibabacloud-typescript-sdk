// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGadInstancesResponseBodyGadInstances } from "./DescribeGadInstancesResponseBodyGadInstances";


export class DescribeGadInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the global active database cluster.
   */
  gadInstances?: DescribeGadInstancesResponseBodyGadInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 76AF0609-4195-5DFC-BC78-3AD76FF872BB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gadInstances: 'GadInstances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gadInstances: { 'type': 'array', 'itemType': DescribeGadInstancesResponseBodyGadInstances },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gadInstances)) {
      $dara.Model.validateArray(this.gadInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

