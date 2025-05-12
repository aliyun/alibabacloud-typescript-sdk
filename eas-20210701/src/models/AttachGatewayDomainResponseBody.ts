// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachGatewayDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the private gateway. To obtain the private gateway ID, see the GatewayId parameter in the response parameters of the [ListGateway](https://apiworkbench.aliyun-inc.com/document/eas/2021-07-01/ListGateway?spm=openapi-amp.newDocPublishment.0.0.765e281fL2IcjJ\\&ampEnv=online) operation.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Successfully update custom endpoint for gateway gw-1uhcqmsc7x22******
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
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

