// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveIpAddressesFromEgressProxyIpPoolResponseBody extends $dara.Model {
  /**
   * @example
   * 017E7009-8930-5511-BAE6-BFFDFA21A48A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

