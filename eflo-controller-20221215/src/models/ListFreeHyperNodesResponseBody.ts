// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFreeHyperNodesResponseBodyHyperNodesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Cpu_Usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
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
   * @remarks
   * The commodity code.
   * 
   * @example
   * bccluster_eflocomputing_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The creation time. The time is in ISO 8601 format.
   * 
   * @example
   * 2025-08-06T10:11:41.569
   */
  createTime?: string;
  /**
   * @remarks
   * The machine expiration time. The time is in ISO 8601 format. Z in the example indicates UTC.
   * 
   * @example
   * 2025-01-22T23:59:59Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * alywlcb-lingjun-gpu-0025
   */
  hostname?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-7pp2x193801
   */
  hyperNodeId?: string;
  /**
   * @remarks
   * The machine type.
   * 
   * @example
   * efg2.ks01L20Z2
   */
  machineType?: string;
  /**
   * @remarks
   * The hyper node status.
   * 
   * @example
   * Using
   */
  operatingState?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmwaateahzoii
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The hyper node status.
   * 
   * @example
   * Using
   * 
   * @deprecated
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListFreeHyperNodesResponseBodyHyperNodesTags[];
  /**
   * @remarks
   * The zone ID.
   * 
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
  /**
   * @remarks
   * The list of nodes.
   */
  hyperNodes?: ListFreeHyperNodesResponseBodyHyperNodes[];
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: 100.
   * 
   * Default value:
   * 
   * •If this parameter is not specified or is set to a value less than 20, the default value is 20.
   * 
   * •If this parameter is set to a value greater than 100, the default value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned by this call.
   * 
   * @example
   * 563d42ae0b17572449ec8c97f7f66069
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

