// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGdnStandbyMemberResponseBody extends $dara.Model {
  /**
   * @example
   * pxc-hzravgpt8q****
   */
  DBInstanceName?: string;
  /**
   * @example
   * 12345
   */
  orderId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 173CA69A-3513-591D-8A09-C1EA37CBE2D9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
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

