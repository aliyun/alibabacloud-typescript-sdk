// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeClusterResponseBodyClusterConfigClusterSafetyControl extends $dara.Model {
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
   * The list of whitelisted user group IDs.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of whitelisted user group names.
   */
  userGroupNames?: string[];
  /**
   * @remarks
   * The list of whitelisted user IDs.
   */
  userIds?: string[];
  /**
   * @remarks
   * The list of whitelisted usernames.
   */
  userNames?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterSafetyAuthType: 'ClusterSafetyAuthType',
      userGroupIds: 'UserGroupIds',
      userGroupNames: 'UserGroupNames',
      userIds: 'UserIds',
      userNames: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSafetyAuthType: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userGroupNames: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
      userNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.userGroupNames)) {
      $dara.Model.validateArray(this.userGroupNames);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    if(Array.isArray(this.userNames)) {
      $dara.Model.validateArray(this.userNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeClusterResponseBodyClusterConfig extends $dara.Model {
  /**
   * @remarks
   * The cluster security control configuration.
   */
  clusterSafetyControl?: GetComputeClusterResponseBodyClusterConfigClusterSafetyControl;
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
   * The creation time.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 102311
   */
  id?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * cluster_test
   */
  name?: string;
  /**
   * @remarks
   * The cluster owner.
   * 
   * @example
   * 30012211
   */
  owner?: string;
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
      clusterSafetyControl: 'ClusterSafetyControl',
      des: 'Des',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      typeVersion: 'TypeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSafetyControl: GetComputeClusterResponseBodyClusterConfigClusterSafetyControl,
      des: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      owner: 'string',
      typeVersion: 'string',
    };
  }

  validate() {
    if(this.clusterSafetyControl && typeof (this.clusterSafetyControl as any).validate === 'function') {
      (this.clusterSafetyControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster details.
   */
  clusterConfig?: GetComputeClusterResponseBodyClusterConfig;
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterConfig: 'ClusterConfig',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfig: GetComputeClusterResponseBodyClusterConfig,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

