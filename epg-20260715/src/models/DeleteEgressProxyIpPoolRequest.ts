// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEgressProxyIpPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value of this parameter on the client side. Make sure that the value is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > Note: If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request is different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: The system sends a check request and does not delete the egress proxy IP address pool. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the check fails, the system returns the corresponding error. If the check succeeds, the system returns the error code DryRunOperation.
   * 
   * - **false** (default): The system sends a normal request. If the check succeeds, the system returns an HTTP 2xx status code and performs the operation.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the egress proxy IP address pool.
   * 
   * This parameter is required.
   * 
   * @example
   * eppool-gw80d96a96ca0b00****
   */
  egressProxyIpPoolId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      egressProxyIpPoolId: 'EgressProxyIpPoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      egressProxyIpPoolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

