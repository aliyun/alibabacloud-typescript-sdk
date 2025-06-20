// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeResponseBodyNetworks extends $dara.Model {
  /**
   * @remarks
   * The port information of the elastic network interface (ENI).
   * 
   * @example
   * Bond0
   */
  bondName?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 47.254.235.44
   */
  ip?: string;
  /**
   * @remarks
   * The subnet ID.
   * 
   * @example
   * vsw-uf68v51fldm5egmui5a6k
   */
  subnetId?: string;
  /**
   * @remarks
   * The ID of the cluster network.
   * 
   * @example
   * vpd-xcuhjyrj
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

