// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHyperNodesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * alarm_xdc
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 129
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

export class ListHyperNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * rds_machineinstanceba_public_cn
   */
  commodityCode?: string;
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
   * e01-cn-zvp2tgykr08
   */
  hyperNodeId?: string;
  /**
   * @remarks
   * The list of node IDs.
   */
  hyperNodeIds?: string[];
  /**
   * @remarks
   * The machine type.
   * 
   * @example
   * efg1.nvga1
   */
  machineType?: string;
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
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Set this parameter to the NextToken value that is returned from a previous call.
   * 
   * @example
   * 3a6b93229825ac667104463b56790c91
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the node group.
   * 
   * @example
   * emr-default
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The state of the node. If you do not specify this parameter, nodes in all states are returned. Valid values: Extending, UnusedNodeStopped, UnusedNodeStopping, Unused, Using, ReleaseLocking, Operating, Cutting, ClusterNodeStopped, UnusedNodeRecovering, ClusterNodeStopping, ClusterNodeRecovering, and Replacing.
   */
  operatingStates?: string[];
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
   * The tags.
   */
  tags?: ListHyperNodesRequestTags[];
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      commodityCode: 'CommodityCode',
      hpnZone: 'HpnZone',
      hyperNodeId: 'HyperNodeId',
      hyperNodeIds: 'HyperNodeIds',
      machineType: 'MachineType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupName: 'NodeGroupName',
      operatingStates: 'OperatingStates',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      commodityCode: 'string',
      hpnZone: 'string',
      hyperNodeId: 'string',
      hyperNodeIds: { 'type': 'array', 'itemType': 'string' },
      machineType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupName: 'string',
      operatingStates: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListHyperNodesRequestTags },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hyperNodeIds)) {
      $dara.Model.validateArray(this.hyperNodeIds);
    }
    if(Array.isArray(this.operatingStates)) {
      $dara.Model.validateArray(this.operatingStates);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

