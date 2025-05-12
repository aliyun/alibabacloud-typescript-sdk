// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the premium bandwidth plan.
   * 
   * @example
   * np-amtp8e8q1o9e4****
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The ID of the bill.
   * 
   * @example
   * 234526262716724
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 269BDB16-2CD8-4865-84BD-11C40BC21DB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackageId: 'NetworkPackageId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: 'string',
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

