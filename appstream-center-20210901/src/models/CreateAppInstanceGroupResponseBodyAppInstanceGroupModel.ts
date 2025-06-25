// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceGroupResponseBodyAppInstanceGroupModel extends $dara.Model {
  /**
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * rg-ew7va2g1wl3vm****
   */
  nodePoolId?: string;
  /**
   * @example
   * 12345****
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      nodePoolId: 'NodePoolId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      nodePoolId: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

