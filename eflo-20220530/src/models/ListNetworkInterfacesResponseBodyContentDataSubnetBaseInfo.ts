// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkInterfacesResponseBodyContentDataSubnetBaseInfo extends $dara.Model {
  /**
   * @remarks
   * The network segment of the Subnet.
   * 
   * *   The network segment of the subnet must be a proper subset of the network segment of Lingjun to which it belongs, and the mask must be between 16 bits and 29 bits, which can provide 8 to 65536 addresses. For example, the CIDR block of the Lingjun CIDR block is 192.168.0.0/16, and the CIDR blocks of the subnets under the Lingjun CIDR block are 192.168.0.0/17 to 192.168.0.0/29.
   * *   The first and last three IP addresses of each subnet segment are reserved by the system. For example, the CIDR blocks of the subnet are 192.168.1.0/24,192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
   * 
   * For more information about CIDR blocks, see the [What is CIDR?](https://www.alibabacloud.com/help/doc-detail/40637.htm#title-gu4-uzk-12r) section in the "Network FAQ" topic.
   * 
   * This parameter is left empty by default.
   * 
   * @example
   * 10.0.0.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1623656472000
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the Subnet instance.
   * 
   * @example
   * subnet-yjnqn5ef
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

