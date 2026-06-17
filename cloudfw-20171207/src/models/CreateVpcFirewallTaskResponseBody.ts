// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application module.
   * 
   * @example
   * ips_server
   */
  module?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 53252B14-BF7C-5A2D-9750-56F827EB****
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

