// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpamPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the IPAM address pool.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BB2C39DE-CEB8-595A-981A-F2EFCBE7324E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipamPoolId: 'IpamPoolId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamPoolId: 'string',
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

