// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFreeNodesResponseBodyNodesTags } from "./ListFreeNodesResponseBodyNodesTags";


export class ListFreeNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * Product Code
   * 
   * @example
   * bccluster_eflocomputing_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1652321554
   */
  createTime?: string;
  /**
   * @remarks
   * Expiration time of the machine
   * 
   * @example
   * 1673107200
   */
  expiredTime?: string;
  /**
   * @remarks
   * Cluster number
   * 
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @remarks
   * Machine type
   * 
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01-cn-7pp2x193801
   */
  nodeId?: string;
  /**
   * @remarks
   * Node status
   * 
   * @example
   * Unused
   */
  operatingState?: string;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-aekzkkbrpl4owgy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Machine SN
   * 
   * @example
   * sn_pozkHBgicd
   */
  sn?: string;
  /**
   * @remarks
   * Tags Info
   */
  tags?: ListFreeNodesResponseBodyNodesTags[];
  /**
   * @remarks
   * Availability zone ID
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      hpnZone: 'HpnZone',
      machineType: 'MachineType',
      nodeId: 'NodeId',
      operatingState: 'OperatingState',
      resourceGroupId: 'ResourceGroupId',
      sn: 'Sn',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'string',
      expiredTime: 'string',
      hpnZone: 'string',
      machineType: 'string',
      nodeId: 'string',
      operatingState: 'string',
      resourceGroupId: 'string',
      sn: 'string',
      tags: { 'type': 'array', 'itemType': ListFreeNodesResponseBodyNodesTags },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

