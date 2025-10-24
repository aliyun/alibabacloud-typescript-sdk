// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHyperNodesRequestTags extends $dara.Model {
  /**
   * @example
   * alarm_xdc
   */
  key?: string;
  /**
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
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  /**
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @example
   * e01-cn-zvp2tgykr08
   */
  hyperNodeId?: string;
  /**
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 3a6b93229825ac667104463b56790c91
   */
  nextToken?: string;
  /**
   * @example
   * emr-default
   */
  nodeGroupName?: string;
  /**
   * @example
   * rg-acfmwfm33rlt6zi
   */
  resourceGroupId?: string;
  tags?: ListHyperNodesRequestTags[];
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      hpnZone: 'HpnZone',
      hyperNodeId: 'HyperNodeId',
      machineType: 'MachineType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupName: 'NodeGroupName',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      hpnZone: 'string',
      hyperNodeId: 'string',
      machineType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupName: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListHyperNodesRequestTags },
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

