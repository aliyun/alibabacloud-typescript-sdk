// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpamResourceDiscoveryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance for resource discovery.
   * 
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  ipamResourceDiscoveryId?: string;
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
      ipamResourceDiscoveryId: 'IpamResourceDiscoveryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamResourceDiscoveryId: 'string',
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

