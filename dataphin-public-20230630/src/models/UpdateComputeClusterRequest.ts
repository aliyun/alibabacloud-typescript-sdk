// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeClusterRequestClusterConfigClusterSafetyControl extends $dara.Model {
  /**
   * @remarks
   * 管控模式。CREATE_COMPUTE_SOURCE：有创建计算源权限即可使用；USER_DEFINE：仅白名单用户/用户组可用
   * 
   * @example
   * CREATE_COMPUTE_SOURCE
   */
  clusterSafetyAuthType?: string;
  userGroupIds?: string[];
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

export class UpdateComputeClusterRequestClusterConfigConfigList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
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

export class UpdateComputeClusterRequestClusterConfig extends $dara.Model {
  clusterAdmins?: string[];
  clusterSafetyControl?: UpdateComputeClusterRequestClusterConfigClusterSafetyControl;
  /**
   * @remarks
   * This parameter is required.
   */
  configList?: UpdateComputeClusterRequestClusterConfigConfigList[];
  /**
   * @example
   * test
   */
  des?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster_test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  /**
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
      clusterSafetyControl: UpdateComputeClusterRequestClusterConfigClusterSafetyControl,
      configList: { 'type': 'array', 'itemType': UpdateComputeClusterRequestClusterConfigConfigList },
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

export class UpdateComputeClusterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clusterConfig?: UpdateComputeClusterRequestClusterConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 102311
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterConfig: 'ClusterConfig',
      id: 'Id',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfig: UpdateComputeClusterRequestClusterConfig,
      id: 'number',
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

