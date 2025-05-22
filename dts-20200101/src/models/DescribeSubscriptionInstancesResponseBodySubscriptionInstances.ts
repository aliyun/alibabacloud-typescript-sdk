// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstance } from "./DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstance";


export class DescribeSubscriptionInstancesResponseBodySubscriptionInstances extends $dara.Model {
  subscriptionInstance?: DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstance[];
  static names(): { [key: string]: string } {
    return {
      subscriptionInstance: 'SubscriptionInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionInstance: { 'type': 'array', 'itemType': DescribeSubscriptionInstancesResponseBodySubscriptionInstancesSubscriptionInstance },
    };
  }

  validate() {
    if(Array.isArray(this.subscriptionInstance)) {
      $dara.Model.validateArray(this.subscriptionInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

