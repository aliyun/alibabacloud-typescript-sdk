// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CacheClusterVSwitches extends $dara.Model {
  /**
   * @example
   * vsw-bp1thxw8sgypzj2j*****
   */
  vSwitchId?: string;
  /**
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
   * @example
   * dc-wqewqr*****
   */
  clusterId?: string;
  /**
   * @example
   * cluster_name
   */
  clusterName?: string;
  /**
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @example
   * 1.0.0
   */
  deployInstanceVersion?: string;
  /**
   * @example
   * 1.0.0
   */
  deployOptionsVersion?: number;
  /**
   * @example
   * 1.0.0
   */
  instanceVersion?: string;
  options?: { [key: string]: string };
  /**
   * @example
   * 1.0.0
   */
  optionsVersion?: number;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * 1764555848748
   */
  updatedAt?: number;
  /**
   * @example
   * acs:ram::[accountId]:root
   */
  updatedBy?: string;
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

