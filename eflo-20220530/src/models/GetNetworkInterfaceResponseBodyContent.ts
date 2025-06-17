// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNetworkInterfaceResponseBodyContentPrivateIpAddressMacGroup } from "./GetNetworkInterfaceResponseBodyContentPrivateIpAddressMacGroup";
import { GetNetworkInterfaceResponseBodyContentSubnetBaseInfo } from "./GetNetworkInterfaceResponseBodyContentSubnetBaseInfo";
import { GetNetworkInterfaceResponseBodyContentTags } from "./GetNetworkInterfaceResponseBodyContentTags";
import { GetNetworkInterfaceResponseBodyContentVpdBaseInfo } from "./GetNetworkInterfaceResponseBodyContentVpdBaseInfo";


export class GetNetworkInterfaceResponseBodyContent extends $dara.Model {
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
   * Port
   */
  ethernet?: string[];
  /**
   * @remarks
   * Gateway
   * 
   * @example
   * 172.24.20.254
   */
  gateway?: string;
  /**
   * @remarks
   * The IP address of the BE cluster.
   * 
   * @example
   * 203.107.60.69
   */
  ip?: string;
  /**
   * @remarks
   * NC Type
   * 
   * Valid value:
   * 
   * *   CUSTOM_LNI_INTEGRATION: two-network one-in-one architecture Lingjun hosting network interface controller.
   * *   CPU: CPU machine.
   * *   ELASTIC_6.2: Machine
   * *   GPU: GPU machine.
   * *   DEFAULT: the old CPU machine.
   * *   CUSTOM_LNI: two network separation architecture Lingjun hosting network interface controller.
   * 
   * @example
   * DEFAULT
   */
  ncType?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID
   * 
   * @example
   * lni-f8z4scmfh0u4ewv6vdd8
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * ENI Name
   * 
   * @example
   * bond0
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * masterintranett2fdth5fkoocg
   */
  nodeId?: string;
  /**
   * @remarks
   * Secondary Private IP\\&MAC Address Collection
   */
  privateIpAddressMacGroup?: GetNetworkInterfaceResponseBodyContentPrivateIpAddressMacGroup[];
  /**
   * @remarks
   * network interface controller private secondary IP limit
   * 
   * @example
   * 0
   */
  quota?: number;
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
   * Resource group instance ID
   * 
   * @example
   * rg-acfmzzka6bnjvbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Service network interface controller address
   * 
   * @example
   * 01-00-5e-00-00-16
   */
  serviceMac?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Lingjun subnet (Subnet) basic information
   */
  subnetBaseInfo?: GetNetworkInterfaceResponseBodyContentSubnetBaseInfo;
  /**
   * @remarks
   * The details of the resource tags.
   */
  tags?: GetNetworkInterfaceResponseBodyContentTags[];
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Basic information of Lingjun network segment (VPD)
   */
  vpdBaseInfo?: GetNetworkInterfaceResponseBodyContentVpdBaseInfo;
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
      createTime: 'CreateTime',
      ethernet: 'Ethernet',
      gateway: 'Gateway',
      ip: 'Ip',
      ncType: 'NcType',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      nodeId: 'NodeId',
      privateIpAddressMacGroup: 'PrivateIpAddressMacGroup',
      quota: 'Quota',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceMac: 'ServiceMac',
      status: 'Status',
      subnetBaseInfo: 'SubnetBaseInfo',
      tags: 'Tags',
      tenantId: 'TenantId',
      vpdBaseInfo: 'VpdBaseInfo',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      ethernet: { 'type': 'array', 'itemType': 'string' },
      gateway: 'string',
      ip: 'string',
      ncType: 'string',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      nodeId: 'string',
      privateIpAddressMacGroup: { 'type': 'array', 'itemType': GetNetworkInterfaceResponseBodyContentPrivateIpAddressMacGroup },
      quota: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceMac: 'string',
      status: 'string',
      subnetBaseInfo: GetNetworkInterfaceResponseBodyContentSubnetBaseInfo,
      tags: { 'type': 'array', 'itemType': GetNetworkInterfaceResponseBodyContentTags },
      tenantId: 'string',
      vpdBaseInfo: GetNetworkInterfaceResponseBodyContentVpdBaseInfo,
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ethernet)) {
      $dara.Model.validateArray(this.ethernet);
    }
    if(Array.isArray(this.privateIpAddressMacGroup)) {
      $dara.Model.validateArray(this.privateIpAddressMacGroup);
    }
    if(this.subnetBaseInfo && typeof (this.subnetBaseInfo as any).validate === 'function') {
      (this.subnetBaseInfo as any).validate();
    }
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

