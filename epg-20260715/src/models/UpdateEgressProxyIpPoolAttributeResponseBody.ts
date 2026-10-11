// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEgressProxyIpPoolAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * 019F3A67-2D1B-537B-B08D-B2DEB69E8E8B
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

