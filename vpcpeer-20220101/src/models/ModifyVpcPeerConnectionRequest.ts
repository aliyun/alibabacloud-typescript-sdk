// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcPeerConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The new bandwidth of the VPC peering connection. Unit: Mbit/s. The value must be an integer greater than 0.
   * 
   * @example
   * 100
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The new description of the VPC peering connection.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * newdescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * *   **true**: checks the request without performing the operation. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the VPC peering connection whose name or description you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * pcc-lnk0m24khwvtkm****
   */
  instanceId?: string;
  /**
   * @remarks
   * Type of connection. Valid values:
   * 
   * - Platinum.
   * 
   * - Gold: default value.
   * 
   * > 
   * > - If you need to specify this parameter, ensure that the VPC peering connection is an inter-region connection.
   * 
   * @example
   * Gold
   */
  linkType?: string;
  /**
   * @remarks
   * The new name of the VPC peering connection.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * vpcpeername
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      linkType: 'LinkType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      linkType: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

