// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkInterfaceResponseBodyContentSubnetBaseInfo extends $dara.Model {
  /**
   * @remarks
   * Network address segment
   * 
   * @example
   * 116.233.21.57/32
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the Subnet instance.
   * 
   * @example
   * subnet-urb01blo
   */
  subnetId?: string;
  /**
   * @remarks
   * The name of the Subnet instance.
   * 
   * @example
   * subnet-1
   */
  subnetName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      createTime: 'CreateTime',
      subnetId: 'SubnetId',
      subnetName: 'SubnetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      subnetId: 'string',
      subnetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

