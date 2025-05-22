// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObject } from "./DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObject";


export class DescribeSubscriptionInstanceStatusResponseBodySubscriptionObject extends $dara.Model {
  synchronousObject?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObject[];
  static names(): { [key: string]: string } {
    return {
      synchronousObject: 'SynchronousObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronousObject: { 'type': 'array', 'itemType': DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObject },
    };
  }

  validate() {
    if(Array.isArray(this.synchronousObject)) {
      $dara.Model.validateArray(this.synchronousObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

