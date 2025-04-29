// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSetAssociatedPublicIp extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  allocationId?: string;
  /**
   * @remarks
   * The EIP.
   * 
   * @example
   * ``116.62.**.**``
   */
  publicIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      publicIpAddress: 'PublicIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      publicIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

