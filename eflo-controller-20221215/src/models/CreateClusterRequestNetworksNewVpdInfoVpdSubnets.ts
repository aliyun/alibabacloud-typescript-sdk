// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequestNetworksNewVpdInfoVpdSubnets extends $dara.Model {
  /**
   * @remarks
   * The subnet CIDR block.
   * 
   * @example
   * 10.0.1.8/24
   */
  subnetCidr?: string;
  /**
   * @remarks
   * The subnet type.
   * 
   * @example
   * 10.0.2.8/24
   */
  subnetType?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      subnetCidr: 'SubnetCidr',
      subnetType: 'SubnetType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subnetCidr: 'string',
      subnetType: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

