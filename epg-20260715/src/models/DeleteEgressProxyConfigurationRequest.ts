// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEgressProxyConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value of this parameter on the client side. The value must be unique across different requests. The client token can contain only ASCII characters.
   * 
   * > Note If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request is different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * 
   * - **true**: sends a check request and does not delete the configuration. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the check fails, an error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * 
   * - **false** (default): sends a regular request. If the check succeeds, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the egress proxy configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * epc-hn302f6a9a284c4f****
   */
  egressProxyConfigurationId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      egressProxyConfigurationId: 'EgressProxyConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      egressProxyConfigurationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

