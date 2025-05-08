// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateEnsEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP that you want to associate.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-5sc1sgcrsrwgwdvx44hru3p63
   */
  allocationId?: string;
  /**
   * @remarks
   * The ID of the cloud service with which the EIP is associated.
   * 
   * >  You can specify the ID of an Edge Load Balancer (ELB) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5saivuir6b1mupxjfbhmk1xkb
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of instance with which you want to associate the EIP. Valid values:
   * 
   * *   **Nat**: NAT gateway.
   * *   **SlbInstance**: Edge Load Balancer (ELB) instance.
   * *   **NetworkInterface**: secondary elastic network interface (ENI).
   * *   **NatSlbInstance**: If you want to associate multiple EIPs with an ELB instance, you need to set the parameter to this value.
   * *   **EnsInstance** (default): ENS instance.
   * 
   * @example
   * SlbInstance
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the EIP is a secondary EIP. Valid values:
   * 
   * *   true
   * *   false
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

