// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceVpcEndpointResponseBodyLinkedVpcs extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the VPC is the default VPC over which the Container Registry instance is accessed.
   * 
   * @example
   * false
   */
  defaultAccess?: boolean;
  /**
   * @remarks
   * IP address.
   * 
   * @example
   * 192.168.10.11
   */
  ip?: string;
  /**
   * @remarks
   * The status of the VPC. Valid values:
   * 
   * *   `CREATING`
   * *   `RUNNING`
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-uf6aamu2nomfr1thd****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-uf62m5vmxl2e72dk7****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultAccess: 'DefaultAccess',
      ip: 'Ip',
      status: 'Status',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultAccess: 'boolean',
      ip: 'string',
      status: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

