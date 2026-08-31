// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComputeClusterRequestClusterConfigClusterSafetyControl extends $dara.Model {
  /**
   * @remarks
   * The control mode.
   * 
   * @example
   * CREATE_COMPUTE_SOURCE
   */
  clusterSafetyAuthType?: string;
  /**
   * @remarks
   * The list of whitelist user group IDs.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of whitelist user IDs.
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterSafetyAuthType: 'ClusterSafetyAuthType',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSafetyAuthType: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeClusterRequestClusterConfigConfigList extends $dara.Model {
  /**
   * @remarks
   * The configuration item.
   * 
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
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

export class CreateComputeClusterRequestClusterConfig extends $dara.Model {
  /**
   * @remarks
   * The list of cluster administrator IDs.
   */
  clusterAdmins?: string[];
  /**
   * @remarks
   * The cluster security control configuration.
   */
  clusterSafetyControl?: CreateComputeClusterRequestClusterConfigClusterSafetyControl;
  /**
   * @remarks
   * The connection configuration items.
   * 
   * This parameter is required.
   */
  configList?: CreateComputeClusterRequestClusterConfigConfigList[];
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * test
   */
  des?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster_test
   */
  name?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * This parameter is required.
   * 
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  /**
   * @remarks
   * The cluster version.
   * 
   * @example
   * CDH6
   */
  typeVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clusterAdmins: 'ClusterAdmins',
      clusterSafetyControl: 'ClusterSafetyControl',
      configList: 'ConfigList',
      des: 'Des',
      name: 'Name',
      type: 'Type',
      typeVersion: 'TypeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterAdmins: { 'type': 'array', 'itemType': 'string' },
      clusterSafetyControl: CreateComputeClusterRequestClusterConfigClusterSafetyControl,
      configList: { 'type': 'array', 'itemType': CreateComputeClusterRequestClusterConfigConfigList },
      des: 'string',
      name: 'string',
      type: 'string',
      typeVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterAdmins)) {
      $dara.Model.validateArray(this.clusterAdmins);
    }
    if(this.clusterSafetyControl && typeof (this.clusterSafetyControl as any).validate === 'function') {
      (this.clusterSafetyControl as any).validate();
    }
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster configuration.
   * 
   * This parameter is required.
   */
  clusterConfig?: CreateComputeClusterRequestClusterConfig;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterConfig: 'ClusterConfig',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfig: CreateComputeClusterRequestClusterConfig,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.clusterConfig && typeof (this.clusterConfig as any).validate === 'function') {
      (this.clusterConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

