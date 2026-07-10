// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env-name
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * dev
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

export class CreateClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * 标准集群测试
   */
  clusterDescription?: string;
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
   * The cluster type.
   * 
   * @example
   * Lite
   */
  clusterType?: string;
  /**
   * @remarks
   * The components (software instances).
   */
  componentsShrink?: string;
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
   * Specifies whether to skip failed nodes. Default value: False.
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * The network information.
   */
  networksShrink?: string;
  /**
   * @remarks
   * The node vSwitches.
   */
  nimizVSwitchesShrink?: string;
  /**
   * @remarks
   * The list of node groups.
   */
  nodeGroupsShrink?: string;
  /**
   * @remarks
   * Specifies whether the network interface supports jumbo frames.
   * 
   * @example
   * false
   */
  openEniJumboFrame?: boolean;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2xdkc6icwfha
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tag?: CreateClusterShrinkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clusterDescription: 'ClusterDescription',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      componentsShrink: 'Components',
      hpnZone: 'HpnZone',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      networksShrink: 'Networks',
      nimizVSwitchesShrink: 'NimizVSwitches',
      nodeGroupsShrink: 'NodeGroups',
      openEniJumboFrame: 'OpenEniJumboFrame',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDescription: 'string',
      clusterName: 'string',
      clusterType: 'string',
      componentsShrink: 'string',
      hpnZone: 'string',
      ignoreFailedNodeTasks: 'boolean',
      networksShrink: 'string',
      nimizVSwitchesShrink: 'string',
      nodeGroupsShrink: 'string',
      openEniJumboFrame: 'boolean',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateClusterShrinkRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

