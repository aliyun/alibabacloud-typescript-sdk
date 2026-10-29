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
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The new description of the VPC peering connection.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * newdescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without modifying the information. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the check, an error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a normal request. If the request passes the check, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether the jumbo frame feature is enabled for the VPC peering connection. Valid values:
   * - true: enabled.
   * - false: disabled.
   * > Note: To specify this parameter, make sure that you create a cross-region peering connection.
   * 
   * @example
   * true
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * The instance ID of the VPC peering connection whose name or description you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * pcc-lnk0m24khwvtkm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The link type.
   * 
   * Valid values: Platinum and Gold. Default value: Gold.
   * 
   * > To specify this parameter, make sure that you create a cross-region peering connection.
   * 
   * @example
   * Gold
   */
  linkType?: string;
  /**
   * @remarks
   * The new name of the VPC peering connection.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
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
      enableJumboFrame: 'EnableJumboFrame',
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
      enableJumboFrame: 'boolean',
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

