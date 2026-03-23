// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCNodePoolResponseBody extends $dara.Model {
  instanceIdSets?: string[];
  nodePoolId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdSets: 'InstanceIdSets',
      nodePoolId: 'NodePoolId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdSets: { 'type': 'array', 'itemType': 'string' },
      nodePoolId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdSets)) {
      $dara.Model.validateArray(this.instanceIdSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

