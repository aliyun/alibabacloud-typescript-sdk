// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The region where the private gateway resides.
   * 
   * @example
   * cn-wulanchabu
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the private gateway.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * Successfully create gateway for user-managed resource
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
      clusterId: 'ClusterId',
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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

