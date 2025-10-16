// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecurityProxyResponseBody extends $dara.Model {
  /**
   * @example
   * ips_server
   */
  module?: string;
  /**
   * @example
   * 9E2CCAB4-E789-5BC9-88DC-5CE0358E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: 'string',
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

