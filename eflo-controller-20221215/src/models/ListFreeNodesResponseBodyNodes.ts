// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFreeNodesResponseBodyNodesTags } from "./ListFreeNodesResponseBodyNodesTags";


export class ListFreeNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * bccluster_eflocomputing_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1652321554
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the node expires.
   * 
   * @example
   * 1673107200
   */
  expiredTime?: string;
  /**
   * @remarks
   * The cluster number.
   * 
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-7pp2x193801
   */
  nodeId?: string;
  /**
   * @remarks
   * The node status.
   * 
   * @example
   * Unused
   */
  operatingState?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzkkbrpl4owgy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The serial number of the node.
   * 
   * @example
   * sn_pozkHBgicd
   */
  sn?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListFreeNodesResponseBodyNodesTags[];
  /**
   * @remarks
   * The zone ID.
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

