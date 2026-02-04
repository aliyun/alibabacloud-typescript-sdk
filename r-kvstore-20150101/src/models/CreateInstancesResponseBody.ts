// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstancesResponseBodyInstanceIds extends $dara.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of instances that were created.
   */
  instanceIds?: CreateInstancesResponseBodyInstanceIds;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 20905403119****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 561AFBF1-BE20-44DB-9BD1-6988B53E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: CreateInstancesResponseBodyInstanceIds,
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

