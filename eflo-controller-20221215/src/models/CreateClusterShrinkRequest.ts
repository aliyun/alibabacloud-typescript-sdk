// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * Key
   * 
   * @example
   * env-name
   */
  key?: string;
  /**
   * @remarks
   * Value
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
   * Cluster description
   * 
   * @example
   * Cluster description
   */
  clusterDescription?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Cluster type
   * 
   * @example
   * Lite
   */
  clusterType?: string;
  /**
   * @remarks
   * Components (software instances)
   */
  componentsShrink?: string;
  /**
   * @remarks
   * Cluster number
   * 
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @remarks
   * Whether to allow skipping failed nodes, the default value is False
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * Network information
   */
  networksShrink?: string;
  /**
   * @remarks
   * Node VSwitches
   */
  nimizVSwitchesShrink?: string;
  /**
   * @remarks
   * Node group list
   */
  nodeGroupsShrink?: string;
  /**
   * @remarks
   * Whether the network interface supports jumbo frames
   * 
   * @example
   * false
   */
  openEniJumboFrame?: boolean;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-aek2xdkc6icwfha
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource tags
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

