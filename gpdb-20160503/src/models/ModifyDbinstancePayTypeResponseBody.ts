// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstancePayTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 50578361067****
   */
  orderId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7565770E-7C45-462D-BA4A-8A5396F2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
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

