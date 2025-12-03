// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMultiZoneClusterNodeTypeResponseBody extends $dara.Model {
  /**
   * @example
   * 12341234123****
   */
  orderId?: string;
  /**
   * @example
   * 06CF7A6F-A81C-431D-BACD-793F24A67C54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

