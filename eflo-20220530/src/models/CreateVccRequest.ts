// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVccRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the VPN attachment.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-vcc
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
   * vcc-group-1
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

export class CreateVccRequest extends $dara.Model {
  /**
   * @remarks
   * Enabled access to cloud services. Optional values:
   * 
   * *   **true**: Enable access to cloud services
   * *   **false**: Do not enable access to cloud services
   * 
   * @example
   * true
   */
  accessCouldService?: boolean;
  /**
   * @remarks
   * The bandwidth. Unit: Mbit /s. The minimum value is 1000, representing 1Gbps bandwidth; the maximum value is 400000, representing 400Gbps bandwidth.
   * 
   * >  1Gbps = 1000Mbps
   * 
   * @example
   * 1000
   */
  bandwidth?: number;
  /**
   * @remarks
   * bgp as number
   * 
   * @example
   * bgpAsn
   */
  bgpAsn?: number;
  /**
   * @remarks
   * Internet segment, on-premises input, off-premises default
   * 
   * @example
   * 10.0.0.0/24
   */
  bgpCidr?: string;
  /**
   * @remarks
   * CEN Instance ID
   * 
   * @example
   * cen-bkiw0x1347roekr7f2
   */
  cenId?: string;
  /**
   * @remarks
   * Account to which cen belongs
   * 
   * @example
   * 1511928242963727
   */
  cenOwnerId?: string;
  /**
   * @remarks
   * The connection mode. Valid values:
   * 
   * *   **VPC**
   * *   **CEN (CENTR)**
   * 
   * @example
   * CENTR
   */
  connectionType?: string;
  /**
   * @remarks
   * The description of the document.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
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
   * rg-aeky5f3qx6ceapq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tag?: CreateVccRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch. [Virtual Private Cloud VSwitch](https://help.aliyun.com/document_detail/100380.html).
   * 
   * You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query created vSwitches.
   * 
   * @example
   * vsw-t4nahb0pxckgktx1kot8q
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * Lingjun Connection Name
   * 
   * @example
   * test
   */
  vccName?: string;
  /**
   * @remarks
   * Virtual Private Cloud IDs; [What is Virtual Private Cloud](https://help.aliyun.com/document_detail/34217.html)
   * 
   * You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html#demo-0) operation to query the specified VPC.
   * 
   * @example
   * vpc-uf6aa4ddo97frj22tgp52
   */
  vpcId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-t2jseldp
   */
  vpdId?: string;
  /**
   * @remarks
   * The zone ID of the disk.
   * 
   * @example
   * cn-wulanchabu-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accessCouldService: 'AccessCouldService',
      bandwidth: 'Bandwidth',
      bgpAsn: 'BgpAsn',
      bgpCidr: 'BgpCidr',
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      connectionType: 'ConnectionType',
      description: 'Description',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vccId: 'VccId',
      vccName: 'VccName',
      vpcId: 'VpcId',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCouldService: 'boolean',
      bandwidth: 'number',
      bgpAsn: 'number',
      bgpCidr: 'string',
      cenId: 'string',
      cenOwnerId: 'string',
      connectionType: 'string',
      description: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateVccRequestTag },
      vSwitchId: 'string',
      vccId: 'string',
      vccName: 'string',
      vpcId: 'string',
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

