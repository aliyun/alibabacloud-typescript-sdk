// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmInstancesResponseBodyGtmInstancesGtmInstance } from "./DescribeGtmInstancesResponseBodyGtmInstancesGtmInstance";


export class DescribeGtmInstancesResponseBodyGtmInstances extends $dara.Model {
  gtmInstance?: DescribeGtmInstancesResponseBodyGtmInstancesGtmInstance[];
  static names(): { [key: string]: string } {
    return {
      gtmInstance: 'GtmInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gtmInstance: { 'type': 'array', 'itemType': DescribeGtmInstancesResponseBodyGtmInstancesGtmInstance },
    };
  }

  validate() {
    if(Array.isArray(this.gtmInstance)) {
      $dara.Model.validateArray(this.gtmInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

