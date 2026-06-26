// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CacheClusterVSwitches extends $dara.Model {
  /**
   * @remarks
   * vSwitch ID
   * 
   * @example
   * vsw-bp1thxw8sgypzj2j*****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Instance zone
   * 
   * @example
   * cn-hangzhou-e
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
      zone: 'zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CacheCluster extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * dc-wqewqr*****
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * cluster_name
   */
  clusterName?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @remarks
   * Creator name
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @remarks
   * Version of the deployed instance
   * 
   * @example
   * 1.0.0
   */
  deployInstanceVersion?: string;
  /**
   * @remarks
   * Deployed options version
   * 
   * @example
   * 1.0.0
   */
  deployOptionsVersion?: number;
  /**
   * @remarks
   * Milvus Version
   * 
   * @example
   * 1.0.0
   */
  instanceVersion?: string;
  /**
   * @remarks
   * Cache cluster configuration
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * Options version
   * 
   * @example
   * 1.0.0
   */
  optionsVersion?: number;
  /**
   * @remarks
   * Cache cluster status. Valid values:
   * ● NEW: Newly created and not started.
   * ● STARTING: Starting.
   * ● START_FAILED: Start failed.
   * ● RUNNING: Running.
   * ● PENDING_RESTART: Pending restart.
   * ● PENDING_TERMINATE: Pending termination.
   * ● TERMINATING: Terminating.
   * ● TERMINATE_FAILED: Termination failed.
   * ● TERMINATED: Terminated.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 1764555848748
   */
  updatedAt?: number;
  /**
   * @remarks
   * Updater name
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  updatedBy?: string;
  /**
   * @remarks
   * vSwitch list
   */
  vSwitches?: CacheClusterVSwitches[];
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-2ze****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      clusterName: 'clusterName',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      deployInstanceVersion: 'deployInstanceVersion',
      deployOptionsVersion: 'deployOptionsVersion',
      instanceVersion: 'instanceVersion',
      options: 'options',
      optionsVersion: 'optionsVersion',
      status: 'status',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
      vSwitches: 'vSwitches',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      createdAt: 'number',
      createdBy: 'string',
      deployInstanceVersion: 'string',
      deployOptionsVersion: 'number',
      instanceVersion: 'string',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      optionsVersion: 'number',
      status: 'string',
      updatedAt: 'number',
      updatedBy: 'string',
      vSwitches: { 'type': 'array', 'itemType': CacheClusterVSwitches },
      vpcId: 'string',
    };
  }

  validate() {
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

