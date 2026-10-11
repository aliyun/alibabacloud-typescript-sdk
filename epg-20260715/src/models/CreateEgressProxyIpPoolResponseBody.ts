// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEgressProxyIpPoolResponseBody extends $dara.Model {
  /**
   * @example
   * eppool-gw80d96a96ca0b00****
   */
  egressProxyIpPoolId?: string;
  /**
   * @example
   * 01A05AB7-6C14-5A12-94E7-F20F9F69AE3D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      egressProxyIpPoolId: 'EgressProxyIpPoolId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyIpPoolId: 'string',
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

