// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVpcPeerConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system uses **RequestId** as **ClientToken**. The value of **RequestId** for each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to check the request without performing the operation. Valid values:
   * 
   * *   **true**: checks the request without performing the operation. The system checks the required parameters, request syntax, and limits. If the request fails to pass the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully delete the VPC peering connection. Valid values:
   * 
   * *   **false** (default): no.
   * *   **true**: yes. If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the VPC peering connection that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * pcc-lnk0m24khwvtkm****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      force: 'Force',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      force: 'boolean',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

