// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHyperNodesShrinkRequestTags extends $dara.Model {
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

export class ListHyperNodesShrinkRequest extends $dara.Model {
  /**
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  commodityCode?: string;
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
  operatingStatesShrink?: string;
  /**
   * @example
   * rg-acfmwfm33rlt6zi
   */
  resourceGroupId?: string;
  tags?: ListHyperNodesShrinkRequestTags[];
  /**
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

