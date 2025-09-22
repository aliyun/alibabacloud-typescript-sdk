// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExpandPhoneDataVolumeResponseBody extends $dara.Model {
  /**
   * @example
   * 223684716098****
   */
  orderId?: string;
  /**
   * @example
   * DB070C80-45AC-52CA-8101-937C25DA****
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

