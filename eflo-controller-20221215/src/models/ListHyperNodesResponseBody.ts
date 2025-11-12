// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHyperNodesResponseBodyHyperNodesTags extends $dara.Model {
  /**
   * @example
   * alarm_xdc
   */
  key?: string;
  /**
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
   * @example
   * i115226661755786900341
   */
  clusterId?: string;
  /**
   * @example
   * test-ack
   */
  clusterName?: string;
  /**
   * @example
   * bccluster_eflocomputing_public_cn
   */
  commodityCode?: string;
  /**
   * @example
   * 2025-07-09T10:41:56.577
   */
  createTime?: string;
  /**
   * @example
   * 2025-09-28T16:00:00Z
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
   * e01-cn-2r42tmj4z02
   */
  hyperNodeId?: string;
  /**
   * @example
   * efg2.GN9C.cn8
   */
  machineType?: string;
  /**
   * @example
   * i121135081698451727812
   */
  nodeGroupId?: string;
  /**
   * @example
   * l20c-0801
   */
  nodeGroupName?: string;
  /**
   * @example
   * Using
   */
  operatingState?: string;
  /**
   * @example
   * rg-acfmwfm33rlt6zi
   */
  resourceGroupId?: string;
  /**
   * @example
   * Extending
   * 
   * @deprecated
   */
  status?: string;
  tags?: ListHyperNodesResponseBodyHyperNodesTags[];
  /**
   * @example
   * i153333771756952392398
   */
  taskId?: string;
  /**
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
  hyperNodes?: ListHyperNodesResponseBodyHyperNodes[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
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

