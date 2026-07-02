// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTCInstanceResponseBody extends $dara.Model {
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

