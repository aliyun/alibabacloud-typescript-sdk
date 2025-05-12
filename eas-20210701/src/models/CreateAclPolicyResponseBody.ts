// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAclPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successfully add acl policy for gateway
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
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

