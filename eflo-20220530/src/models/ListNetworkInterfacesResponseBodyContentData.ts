// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNetworkInterfacesResponseBodyContentDataPrivateIpAddressMacGroup } from "./ListNetworkInterfacesResponseBodyContentDataPrivateIpAddressMacGroup";
import { ListNetworkInterfacesResponseBodyContentDataSubnetBaseInfo } from "./ListNetworkInterfacesResponseBodyContentDataSubnetBaseInfo";
import { ListNetworkInterfacesResponseBodyContentDataTags } from "./ListNetworkInterfacesResponseBodyContentDataTags";
import { ListNetworkInterfacesResponseBodyContentDataVpdBaseInfo } from "./ListNetworkInterfacesResponseBodyContentDataVpdBaseInfo";


export class ListNetworkInterfacesResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1669734207000
   */
  createTime?: string;
  /**
   * @remarks
   * The port number of the AD server.
   */
  ethernet?: string[];
  /**
   * @remarks
   * The gateway.
   * 
   * @example
   * 10.0.0.253
   */
  gateway?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.0.0.13
   */
  ip?: string;
  /**
   * @remarks
   * The NC type.
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
   * GPU
   */
  ncType?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID.
   * 
   * @example
   * lni-2ze50voovmtswn328ogm
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The port name.
   * 
   * @example
   * bond0
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The ID of the machine to which the instance belongs.
   * 
   * @example
   * 2d53f5c204e7476dae69177e7fa6f19c
   */
  nodeId?: string;
  /**
   * @remarks
   * Secondary Private IP\\&MAC Address Collection
   */
  privateIpAddressMacGroup?: ListNetworkInterfacesResponseBodyContentDataPrivateIpAddressMacGroup[];
  /**
   * @remarks
   * network interface controller private secondary IP quota.
   * 
   * @example
   * 6
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
  resourceGroupId?: string;
  /**
   * @remarks
   * The address of the service network interface controller.
   * 
   * @example
   * 00-ff-84-15-ba-67
   */
  serviceMac?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Lingjun subnet (Subnet) basic information.
   */
  subnetBaseInfo?: ListNetworkInterfacesResponseBodyContentDataSubnetBaseInfo;
  tags?: ListNetworkInterfacesResponseBodyContentDataTags[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1620939556166279
   */
  tenantId?: string;
  /**
   * @remarks
   * Lingjun network segment (VPD) basic information.
   */
  vpdBaseInfo?: ListNetworkInterfacesResponseBodyContentDataVpdBaseInfo;
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
      privateIpAddressMacGroup: { 'type': 'array', 'itemType': ListNetworkInterfacesResponseBodyContentDataPrivateIpAddressMacGroup },
      quota: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceMac: 'string',
      status: 'string',
      subnetBaseInfo: ListNetworkInterfacesResponseBodyContentDataSubnetBaseInfo,
      tags: { 'type': 'array', 'itemType': ListNetworkInterfacesResponseBodyContentDataTags },
      tenantId: 'string',
      vpdBaseInfo: ListNetworkInterfacesResponseBodyContentDataVpdBaseInfo,
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

