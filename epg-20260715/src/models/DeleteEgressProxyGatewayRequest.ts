// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEgressProxyGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value of this parameter on the client side. Make sure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > Note: If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * 
   * - **true**: Sends a check request and does not delete the egress proxy gateway instance. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the check fails, the system returns an error. If the check succeeds, the system returns the error code DryRunOperation.
   * 
   * - **false** (default): Sends a regular request. If the check succeeds, the system returns an HTTP 2xx status code and performs the operation.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the egress proxy gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-gw80bb6a94f835db****
   */
  egressProxyGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      egressProxyGatewayId: 'EgressProxyGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      egressProxyGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

