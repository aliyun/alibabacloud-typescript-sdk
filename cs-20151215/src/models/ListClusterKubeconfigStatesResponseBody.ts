// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterKubeconfigStatesResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterKubeconfigStatesResponseBodyStatesCloudServiceRoles extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the content matches the default cluster role template. Valid values:
   * 
   * - true: The content matches the default template.
   * - false: The content does not match the default template.
   */
  isDefaultTemplate?: boolean;
  /**
   * @remarks
   * The name of the cluster role associated with the cloud service role.
   * 
   * @example
   * cluster-admin
   */
  roleName?: string;
  /**
   * @remarks
   * The namespace of the cluster role associated with the cloud service role.
   * 
   * @example
   * kube-system
   */
  roleNamespace?: string;
  /**
   * @remarks
   * The type of the cluster role associated with the cloud service role.
   * 
   * @example
   * ClusterRole
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      isDefaultTemplate: 'is_default_template',
      roleName: 'role_name',
      roleNamespace: 'role_namespace',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefaultTemplate: 'boolean',
      roleName: 'string',
      roleNamespace: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterKubeconfigStatesResponseBodyStates extends $dara.Model {
  /**
   * @remarks
   * The display name of the Resource Access Management (RAM) user or the role name.
   * 
   * @example
   * tom
   */
  accountDisplayName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account, Resource Access Management (RAM) user, or role ID.
   * 
   * @example
   * 22855*****************
   */
  accountId?: string;
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user or the role name.
   * 
   * @example
   * tom
   */
  accountName?: string;
  /**
   * @remarks
   * The account status. Valid values:
   * 
   * - Active: The account is active.
   * 
   * - InActive: The account is frozen.
   * 
   * - Deleted: The account is deleted.
   * 
   * @example
   * Active
   */
  accountState?: string;
  /**
   * @remarks
   * The account type. Valid values:
   * 
   * - RootAccount: Alibaba Cloud account.
   * - RamUser: Resource Access Management (RAM) user.
   * - RamRole: RAM role.
   * 
   * @example
   * RamUser
   */
  accountType?: string;
  /**
   * @remarks
   * The expiration time of the KubeConfig client certificate.
   * 
   * @example
   * 2027-07-15T01:32:20Z
   */
  certExpireTime?: string;
  /**
   * @remarks
   * The status of the KubeConfig client certificate. Valid values:
   * 
   * - Unexpired: The certificate has not expired.
   * 
   * - Expired: The certificate has expired.
   * 
   * - Unknown: The certificate status is unknown (abnormal state).
   * 
   * @example
   * Expired
   */
  certState?: string;
  /**
   * @remarks
   * The name of the cloud service.
   * 
   * @example
   * cs/ecs/sls
   */
  cloudServiceName?: string;
  /**
   * @remarks
   * The list of cluster roles associated with the cloud service role.
   */
  cloudServiceRoles?: ListClusterKubeconfigStatesResponseBodyStatesCloudServiceRoles[];
  /**
   * @remarks
   * Indicates whether the KubeConfig client certificate can be revoked.
   * 
   * @example
   * true
   */
  revokable?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountDisplayName: 'account_display_name',
      accountId: 'account_id',
      accountName: 'account_name',
      accountState: 'account_state',
      accountType: 'account_type',
      certExpireTime: 'cert_expire_time',
      certState: 'cert_state',
      cloudServiceName: 'cloud_service_name',
      cloudServiceRoles: 'cloud_service_roles',
      revokable: 'revokable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDisplayName: 'string',
      accountId: 'string',
      accountName: 'string',
      accountState: 'string',
      accountType: 'string',
      certExpireTime: 'string',
      certState: 'string',
      cloudServiceName: 'string',
      cloudServiceRoles: { 'type': 'array', 'itemType': ListClusterKubeconfigStatesResponseBodyStatesCloudServiceRoles },
      revokable: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cloudServiceRoles)) {
      $dara.Model.validateArray(this.cloudServiceRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterKubeconfigStatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  page?: ListClusterKubeconfigStatesResponseBodyPage;
  /**
   * @remarks
   * The list of KubeConfig states associated with the cluster.
   */
  states?: ListClusterKubeconfigStatesResponseBodyStates[];
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      states: 'states',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListClusterKubeconfigStatesResponseBodyPage,
      states: { 'type': 'array', 'itemType': ListClusterKubeconfigStatesResponseBodyStates },
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.states)) {
      $dara.Model.validateArray(this.states);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

