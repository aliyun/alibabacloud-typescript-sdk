// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDhcpOptionsSetResponseBodyAssociateVpcs extends $dara.Model {
  /**
   * @remarks
   * The status of the VPC that is associated with the DHCP options set. Valid values:
   * 
   * *   **InUse**: in use
   * *   **Pending**: being configured
   * 
   * @example
   * InUse
   */
  associateStatus?: string;
  /**
   * @remarks
   * The ID of the VPC that is associated with the DHCP options set.
   * 
   * @example
   * vpc-eb3b54r6otues4tjj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      associateStatus: 'AssociateStatus',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateStatus: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

