// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHyperNodesShrinkRequestTags extends $dara.Model {
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

export class ListHyperNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster name.
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
   * The node ID.
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  hyperNodeId?: string;
  /**
   * @remarks
   * The list of node IDs.
   */
  hyperNodeIdsShrink?: string;
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
   * The number of entries per page in a paged query. Maximum value: 100.
   * 
   * Default value:
   * 
   * - If this parameter is not specified or is set to a value less than 20, the default value is 20.
   * 
   * - If this parameter is set to a value greater than 100, the default value is 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call.
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
   * The node status. If this parameter is not specified, all statuses are returned. Valid values: Extending, UnusedNodeStopped, UnusedNodeStopping, Unused, Using, ReleaseLocking, Operating, Cutting, ClusterNodeStopped, UnusedNodeRecovering, ClusterNodeStopping, ClusterNodeRecovering, and Replacing.
   */
  operatingStatesShrink?: string;
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
   * The tag information.
   */
  tags?: ListHyperNodesShrinkRequestTags[];
  /**
   * @remarks
   * The zone ID.
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
      hyperNodeIdsShrink: 'HyperNodeIds',
      machineType: 'MachineType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupName: 'NodeGroupName',
      operatingStatesShrink: 'OperatingStates',
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
      hyperNodeIdsShrink: 'string',
      machineType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupName: 'string',
      operatingStatesShrink: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListHyperNodesShrinkRequestTags },
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

