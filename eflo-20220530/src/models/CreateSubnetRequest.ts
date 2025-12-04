// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubnetRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the VPN attachment.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-subnet
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the VPN connection.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each key-value pair must be unique. You can specify values for at most 20 tag keys in each call.
   * 
   * @example
   * subnet-tag-1
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

export class CreateSubnetRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the Subnet.
   * 
   * *   The network segment of the subnet must be a proper subset of the network segment of Lingjun to which it belongs, and the mask must be between 16 bits and 29 bits, which can provide 8 to 65536 addresses. For example, the CIDR block of the Lingjun CIDR block is 192.168.0.0/16, and the CIDR blocks of the subnets under the Lingjun CIDR block are 192.168.0.0/17 to 192.168.0.0/29.
   * *   The first and last three IP addresses of each subnet segment are reserved by the system. For example, the CIDR blocks of the subnet are 192.168.1.0/24,192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/16
   */
  cidr?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Lingjun subnet instance name
   * 
   * This parameter is required.
   * 
   * @example
   * subnet-1
   */
  subnetName?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tag?: CreateSubnetRequestTag[];
  /**
   * @remarks
   * Lingjun Subnet Usage Type; optional; optional. Valid values:
   * 
   * *   **If you do not set this field for a common type**
   * *   **OOB** :OOB type
   * *   **LB**: LB type
   * 
   * @example
   * OOB
   */
  type?: string;
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-xcuhjyrj
   */
  vpdId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
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
      tag: 'Tag',
      type: 'Type',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      regionId: 'string',
      subnetName: 'string',
      tag: { 'type': 'array', 'itemType': CreateSubnetRequestTag },
      type: 'string',
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

