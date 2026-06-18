// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHyperNodesResponseBodyHyperNodesTags extends $dara.Model {
  /**
   * @remarks
   * The key of the node tag.
   * 
   * @example
   * alarm_xdc
   */
  key?: string;
  /**
   * @remarks
   * The value of the node tag.
   * 
   * @example
   * 97
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

export class ListHyperNodesResponseBodyHyperNodes extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * i115226661755786900341
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * test-ack
   */
  clusterName?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * bccluster_eflocomputing_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the node was created.
   * 
   * @example
   * 2025-07-09T10:41:56.577
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2025-09-28T16:00:00Z
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
   * The cluster number.
   * 
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * e01-cn-2r42tmj4z02
   */
  hyperNodeId?: string;
  /**
   * @remarks
   * The machine type.
   * 
   * @example
   * efg2.GN9C.cn8
   */
  machineType?: string;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * @example
   * i121135081698451727812
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The name of the node group.
   * 
   * @example
   * l20c-0801
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The status of the hypernode.
   * 
   * @example
   * Using
   */
  operatingState?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmwfm33rlt6zi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the node.
   * 
   * @example
   * Extending
   * 
   * @deprecated
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListHyperNodesResponseBodyHyperNodesTags[];
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * i153333771756952392398
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      hostname: 'Hostname',
      hpnZone: 'HpnZone',
      hyperNodeId: 'HyperNodeId',
      machineType: 'MachineType',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      operatingState: 'OperatingState',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      taskId: 'TaskId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      commodityCode: 'string',
      createTime: 'string',
      expireTime: 'string',
      hostname: 'string',
      hpnZone: 'string',
      hyperNodeId: 'string',
      machineType: 'string',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      operatingState: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListHyperNodesResponseBodyHyperNodesTags },
      taskId: 'string',
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

export class ListHyperNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of nodes.
   */
  hyperNodes?: ListHyperNodesResponseBodyHyperNodes[];
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 100.
   * 
   * Default values:
   * 
   * • If you do not specify this parameter or you specify a value that is less than 20, the default value is 20.
   * 
   * • If you specify a value that is greater than 100, the default value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If this parameter is not returned, no more results are available.
   * 
   * @example
   * 7ed93fda-5e7f-436a-ae5a-bd8e6b04e36b
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E64F9128-E2FC-5998-B769-199B0CB18138
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
      hyperNodes: { 'type': 'array', 'itemType': ListHyperNodesResponseBodyHyperNodes },
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

