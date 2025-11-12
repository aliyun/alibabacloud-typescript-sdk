// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFreeHyperNodesResponseBodyHyperNodesTags extends $dara.Model {
  /**
   * @example
   * Cpu_Usage
   */
  key?: string;
  /**
   * @example
   * on
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

export class ListFreeHyperNodesResponseBodyHyperNodes extends $dara.Model {
  /**
   * @example
   * bccluster_eflocomputing_public_cn
   */
  commodityCode?: string;
  /**
   * @example
   * 2025-08-06T10:11:41.569
   */
  createTime?: string;
  /**
   * @example
   * 2025-01-22T23:59:59Z
   */
  expireTime?: string;
  /**
   * @example
   * alywlcb-lingjun-gpu-0025
   */
  hostname?: string;
  /**
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @example
   * e01-cn-7pp2x193801
   */
  hyperNodeId?: string;
  /**
   * @example
   * efg2.ks01L20Z2
   */
  machineType?: string;
  /**
   * @example
   * Using
   */
  operatingState?: string;
  /**
   * @example
   * rg-acfmwaateahzoii
   */
  resourceGroupId?: string;
  /**
   * @example
   * Using
   * 
   * @deprecated
   */
  status?: string;
  tags?: ListFreeHyperNodesResponseBodyHyperNodesTags[];
  /**
   * @example
   * cn-wulanchabu-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      hostname: 'Hostname',
      hpnZone: 'HpnZone',
      hyperNodeId: 'HyperNodeId',
      machineType: 'MachineType',
      operatingState: 'OperatingState',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'string',
      expireTime: 'string',
      hostname: 'string',
      hpnZone: 'string',
      hyperNodeId: 'string',
      machineType: 'string',
      operatingState: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListFreeHyperNodesResponseBodyHyperNodesTags },
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

export class ListFreeHyperNodesResponseBody extends $dara.Model {
  hyperNodes?: ListFreeHyperNodesResponseBodyHyperNodes[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 563d42ae0b17572449ec8c97f7f66069
   */
  nextToken?: string;
  /**
   * @example
   * A511C02A-0127-51AA-A9F9-966382C9A1B5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hyperNodes: 'HyperNodes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hyperNodes: { 'type': 'array', 'itemType': ListFreeHyperNodesResponseBodyHyperNodes },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hyperNodes)) {
      $dara.Model.validateArray(this.hyperNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

