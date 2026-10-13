// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHyperNodesResponseBodyHyperNodesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the node.
   * 
   * @example
   * alarm_xdc
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the node.
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
   * The cluster ID.
   * 
   * @example
   * i115226661755786900341
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test-ack
   */
  clusterName?: string;
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
   * 2025-07-09T10:41:56.577
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time. The time is in ISO 8601 format. The Z in the example indicates UTC.
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
   * The node ID.
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
   * The node group ID.
   * 
   * @example
   * i121135081698451727812
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The node group.
   * 
   * @example
   * l20c-0801
   */
  nodeGroupName?: string;
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
   * rg-acfmwfm33rlt6zi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The node status.
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
   * The task ID.
   * 
   * @example
   * i153333771756952392398
   */
  taskId?: string;
  /**
   * @remarks
   * The zone ID.
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
   * The number of entries per page in a paged query. Maximum value: 100.
   * 
   * Default value:
   * 
   * - If this parameter is not specified or is set to a value less than 20, the default value is 20.
   * 
   * - If this parameter is set to a value greater than 100, the default value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The NextToken for the next page. Include this value when requesting the next page.
   * 
   * @example
   * 7ed93fda-5e7f-436a-ae5a-bd8e6b04e36b
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
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

