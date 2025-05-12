// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSubnetResponseBodyContentTags } from "./GetSubnetResponseBodyContentTags";
import { GetSubnetResponseBodyContentVpdBaseInfo } from "./GetSubnetResponseBodyContentVpdBaseInfo";


export class GetSubnetResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The number of available IP addresses.
   * 
   * @example
   * 1024
   */
  availableIps?: number;
  /**
   * @remarks
   * The CIDR block of the Subnet.
   * 
   * *   The network segment of the subnet must be a proper subset of the network segment of Lingjun to which it belongs, and the mask must be between 16 bits and 29 bits, which can provide 8 to 65536 addresses. For example, the CIDR block of the Lingjun CIDR block is 192.168.0.0/16, and the CIDR blocks of the subnets under the Lingjun CIDR block are 192.168.0.0/17 to 192.168.0.0/29.
   * *   The first and last three IP addresses of each subnet segment are reserved by the system. For example, the CIDR blocks of the subnet are 192.168.1.0/24,192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
   * 
   * @example
   * 10.10.10.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1648085472000
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The number of SLB.
   * 
   * @example
   * 0
   */
  lbCount?: number;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * test example
   */
  message?: string;
  /**
   * @remarks
   * The number of NCs.
   * 
   * @example
   * 16
   */
  ncCount?: number;
  /**
   * @remarks
   * Number of Lingjun network interface controller
   * 
   * @example
   * 4
   */
  networkInterfaceCount?: number;
  /**
   * @remarks
   * The total number of secondary private IP addresses.
   * 
   * @example
   * 20
   */
  privateIpCount?: number;
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
   * The ID of your Alibaba Cloud resource group.
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the cache reserve instance.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the Lingjun subnet instance.
   * 
   * @example
   * subnet-aj93mko8
   */
  subnetId?: string;
  /**
   * @remarks
   * The name of the Lingjun subnet instance.
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
  tags?: GetSubnetResponseBodyContentTags[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Lingjun Subnet Usage Type; optional; optional. Valid values:
   * 
   * *   **Empty for common data types**
   * *   **OOB** :OOB type
   * *   **LB**: LB type
   * 
   * @example
   * OOB
   */
  type?: string;
  /**
   * @remarks
   * The information about the network segment of Lingjun.
   */
  vpdBaseInfo?: GetSubnetResponseBodyContentVpdBaseInfo;
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * @example
   * vpd-ze3na0wf
   */
  vpdId?: string;
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
      availableIps: 'AvailableIps',
      cidr: 'Cidr',
      createTime: 'CreateTime',
      gmtModified: 'GmtModified',
      lbCount: 'LbCount',
      message: 'Message',
      ncCount: 'NcCount',
      networkInterfaceCount: 'NetworkInterfaceCount',
      privateIpCount: 'PrivateIpCount',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      subnetId: 'SubnetId',
      subnetName: 'SubnetName',
      tags: 'Tags',
      tenantId: 'TenantId',
      type: 'Type',
      vpdBaseInfo: 'VpdBaseInfo',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIps: 'number',
      cidr: 'string',
      createTime: 'string',
      gmtModified: 'string',
      lbCount: 'number',
      message: 'string',
      ncCount: 'number',
      networkInterfaceCount: 'number',
      privateIpCount: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      subnetId: 'string',
      subnetName: 'string',
      tags: { 'type': 'array', 'itemType': GetSubnetResponseBodyContentTags },
      tenantId: 'string',
      type: 'string',
      vpdBaseInfo: GetSubnetResponseBodyContentVpdBaseInfo,
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.vpdBaseInfo && typeof (this.vpdBaseInfo as any).validate === 'function') {
      (this.vpdBaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

