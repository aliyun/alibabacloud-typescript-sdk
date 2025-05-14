// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeAndroidInstanceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * [\\"acp-3vzqq4y3f31f3z3df\\"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 223684716098****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 310A783E-CC46-5452-A8A3-71AE5DB59****
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
      instanceIds: 'string',
      orderId: 'string',
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

