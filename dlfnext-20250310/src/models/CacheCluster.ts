// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CacheClusterVSwitches extends $dara.Model {
  vSwitchId?: string;
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
  clusterId?: string;
  clusterName?: string;
  createdAt?: number;
  createdBy?: string;
  deployInstanceVersion?: string;
  deployOptionsVersion?: number;
  instanceVersion?: string;
  options?: { [key: string]: string };
  optionsVersion?: number;
  status?: string;
  updatedAt?: number;
  updatedBy?: string;
  vSwitches?: CacheClusterVSwitches[];
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

