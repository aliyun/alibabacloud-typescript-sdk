// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateEnsEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP to be associated.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-5sc1sgcrsrwgwdvx44hru****
   */
  allocationId?: string;
  /**
   * @remarks
   * The ID of the cloud product instance to attach the EIP to.
   * >Load balancing (ELB) instance IDs are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5saivuir6b1mupxjfbhmk****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the EIP instance. Valid values:
   * 
   * - **Nat**: NAT gateway.
   * - **SlbInstance**: load balancing (ELB).
   * - **NetworkInterface**: secondary network interface controller (NIC).
   * - **NatSlbInstance**: select this value when attaching multiple EIPs to an ELB.
   * - **EnsInstance** (default): ENS instance.
   * 
   * @example
   * SlbInstance
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the EIP is a standby EIP. Valid values:
   * 
   * - true: standby.
   * 
   * - false: not standby.
   * 
   * @example
   * true
   */
  standby?: boolean;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      standby: 'Standby',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      standby: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

