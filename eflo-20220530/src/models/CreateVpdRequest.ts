// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpdRequestSubnets extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the Subnet.
   * 
   * *   The network segment of the subnet must be a proper subset of the network segment of Lingjun to which it belongs, and the mask must be between 16 bits and 29 bits, which can provide 8 to 65536 addresses. For example, the CIDR block of the Lingjun CIDR block is 192.168.0.0/16, and the CIDR blocks of the subnets under the Lingjun CIDR block are 192.168.0.0/17 to 192.168.0.0/29.
   * *   The first and last three IP addresses of each subnet segment are reserved by the system. For example, the CIDR blocks of the subnet are 192.168.1.0/24,192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
   * 
   * @example
   * 10.1.0.0/16
   */
  cidr?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Lingjun subnet instance name
   * 
   * @example
   * subnet-1
   */
  subnetName?: string;
  /**
   * @remarks
   * Lingjun Subnet Usage Type; optional; optional. Valid values:
   * 
   * *   **Generic type is not specified**.
   * *   **OOB** :OOB type
   * *   **LB**: LB type
   * 
   * @example
   * OOB
   */
  type?: string;
  /**
   * @remarks
   * The zone ID of the disk.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      regionId: 'RegionId',
      subnetName: 'SubnetName',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      regionId: 'string',
      subnetName: 'string',
      type: 'string',
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

export class CreateVpdRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the VPN attachment.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * vpd-wulanchabu
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the VPN connection.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each tag key corresponds to a tag value. You can enter a maximum of 20 tag values at a time.
   * 
   * @example
   * wulanchabu-a
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the VPD.
   * 
   * *   We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other.
   * *   You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/8
   */
  cidr?: string;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Lingjun subnet information list
   */
  subnets?: CreateVpdRequestSubnets[];
  /**
   * @remarks
   * A tag.
   */
  tag?: CreateVpdRequestTag[];
  /**
   * @remarks
   * Lingjun CIDR block instance name
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-1
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subnets: 'Subnets',
      tag: 'Tag',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subnets: { 'type': 'array', 'itemType': CreateVpdRequestSubnets },
      tag: { 'type': 'array', 'itemType': CreateVpdRequestTag },
      vpdName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subnets)) {
      $dara.Model.validateArray(this.subnets);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

