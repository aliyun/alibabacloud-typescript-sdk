// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVpcPeerConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * - **true**: performs only a dry run and does not delete the VPC peering connection. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the dry run, an error is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to force delete the VPC peering connection. Valid values:
   * 
   * - **false** (default): Does not force delete the VPC peering connection. Before you delete the connection, you must delete the route entry that points to the VPC peering connection from the routing table.
   * 
   * - **true**: The system will force delete the VPC peering connection. The system deletes the route entry that points to the VPC peering connection from the VPC routing table.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The instance ID of the VPC peering connection that you want to delete.
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

