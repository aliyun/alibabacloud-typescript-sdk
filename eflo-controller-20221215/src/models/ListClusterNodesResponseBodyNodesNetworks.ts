// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterNodesResponseBodyNodesNetworks extends $dara.Model {
  /**
   * @remarks
   * The name of the network port for the node.
   * 
   * @example
   * bond0
   */
  bondName?: string;
  /**
   * @remarks
   * The IP address of the node in the virtual private cloud (VPC).
   * 
   * @example
   * 192.168.22.2
   */
  ip?: string;
  /**
   * @remarks
   * The subnet ID.
   * 
   * @example
   * subnet-fwekrvg9
   */
  subnetId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpd-eoiy88ju
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      bondName: 'BondName',
      ip: 'Ip',
      subnetId: 'SubnetId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondName: 'string',
      ip: 'string',
      subnetId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

