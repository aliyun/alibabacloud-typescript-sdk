// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RejectVpcPeerConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value from your client. Make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * - **true**: performs a dry run and does not reject the connection request. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the dry run, an error is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): sends the actual request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the VPC peering connection instance denied by the acceptor.
   * 
   * This parameter is required.
   * 
   * @example
   * pcc-lnk0m24khwvtkm0****
   */
  instanceId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

