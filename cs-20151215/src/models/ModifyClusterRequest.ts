// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyClusterRequestApiServerCustomCertSans } from "./ModifyClusterRequestApiServerCustomCertSans";
import { ModifyClusterRequestControlPlaneConfig } from "./ModifyClusterRequestControlPlaneConfig";
import { MaintenanceWindow } from "./MaintenanceWindow";
import { ModifyClusterRequestOperationPolicy } from "./ModifyClusterRequestOperationPolicy";
import { ModifyClusterRequestSystemEventsLogging } from "./ModifyClusterRequestSystemEventsLogging";


export class ModifyClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The network access control list (ACL) of the SLB instance associated with the API server if the cluster is a registered cluster.
   */
  accessControlList?: string[];
  /**
   * @remarks
   * The custom subject alternative names (SANs) for the API server certificate to accept requests from specified IP addresses or domain names. This parameter is available only for ACK managed clusters.
   */
  apiServerCustomCertSans?: ModifyClusterRequestApiServerCustomCertSans;
  /**
   * @remarks
   * Specifies whether to associate an elastic IP address (EIP) with the cluster. This EIP is used to enable access to the API server over the Internet. Valid values:
   * 
   * *   `true`: associates an EIP with the cluster.
   * *   `false`: does not associate an EIP with the cluster.
   * 
   * @example
   * true
   */
  apiServerEip?: boolean;
  /**
   * @remarks
   * The ID of the EIP that you want to associate with the API server of the cluster. This parameter takes effect when `api_server_eip` is set to `true`.
   * 
   * @example
   * eip-wz9fnasl6dsfhmvci****
   */
  apiServerEipId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * The cluster name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). The cluster name cannot start with a hyphen (-).
   * 
   * @example
   * cluster-new-name
   */
  clusterName?: string;
  /**
   * @remarks
   * The control plane configurations of an ACK dedicated cluster.
   */
  controlPlaneConfig?: ModifyClusterRequestControlPlaneConfig;
  /**
   * @remarks
   * Specifies whether to enable cluster deletion protection. If you enable this option, the cluster cannot be deleted in the console or by calling API operations. Valid values:
   * 
   * *   `true`: enables cluster deletion protection.
   * *   `false`: disables cluster deletion protection.
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the RAM Roles for Service Accounts (RRSA) feature. This parameter is available only for ACK managed clusters. Valid values:
   * 
   * *   `true`: enables the RRSA feature.
   * *   `false`: disables the RRSA feature.
   * 
   * @example
   * true
   */
  enableRrsa?: boolean;
  /**
   * @remarks
   * Specifies whether to remap the test domain name of the cluster. Valid values:
   * 
   * *   `true`: remaps the test domain name of the cluster.
   * *   `false`: does not remap the test domain name of the cluster.
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  ingressDomainRebinding?: boolean;
  /**
   * @remarks
   * The ID of the Server Load Balancer (SLB) instance of the cluster to be modified.
   * 
   * @example
   * lb-wz97kes8tnndkpodw****
   */
  ingressLoadbalancerId?: string;
  /**
   * @remarks
   * Specifies whether to enable instance deletion protection. If you enable this option, the instance cannot be deleted in the console or by calling API operations. Valid values:
   * 
   * *   `true`: enables instance deletion protection.
   * *   `false`: disables instance deletion protection.
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  instanceDeletionProtection?: boolean;
  /**
   * @remarks
   * The cluster maintenance window. This feature takes effect only for ACK Pro clusters.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * The automatic O\\&M policy of the cluster.
   */
  operationPolicy?: ModifyClusterRequestOperationPolicy;
  /**
   * @remarks
   * The resource group ID of the cluster.
   * 
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group for the control plane. 
   * 
   * - If block rules are configured in the security group, ensure the security group rules allow traffic for protocols and ports required by the cluster. For recommended security group rules, see [Configure and manage security groups for an ACK cluster](https://www.alibabacloud.com/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters?spm=a2c63.p38356.help-menu-85222.d_2_0_4_3.43e35d09s8oSlR).
   * 
   * - For non-ACK dedicated clusters: 
   *   - During security group updates, the cluster control plane and managed components (e.g., terway-controlplane) will restart briefly. Perform this operation during off-peak hours.
   *   - After updating the control plane security group, the Elastic Network Interfaces (ENIs) used by the control plane and managed components will automatically join the new security group.
   * 
   * - For ACK dedicated clusters:
   *    - After updating the control plane security group, newly scaled-out master nodes will automatically apply the new security group. Existing control plane nodes remain unaffected.
   * 
   * @example
   * sg-bp1h6rk3pgct2a08***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The storage configurations of system events.
   */
  systemEventsLogging?: ModifyClusterRequestSystemEventsLogging;
  /**
   * @remarks
   * The time zone configuration for the cluster.
   * 
   * - After modifying the time zone, cluster inspection configurations will adopt the new time zone.
   * 
   * - For ACK managed clusters:
   *    - During time zone updates, the cluster control plane and managed components (e.g., terway-controlplane) will restart briefly. Perform this operation during off-peak hours.
   *    - After updating the time zone:
   *       - Newly scaled-out nodes will automatically apply the new time zone.
   *       - Existing nodes remain unaffected. Reset the node to apply changes to existing nodes.
   * 
   * - For ACK dedicated clusters:
   *    - After updating the time zone:
   *       - Newly scaled-out nodes (including control plane nodes) automatically apply the new time zone.
   *       - Existing nodes (including control plane nodes) remain unaffected. Reset the node to apply changes to existing nodes.
   *       - For control plane nodes, perform a scale-out followed by a scale-in to apply the new time zone to all control plane nodes.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The vSwitches of the control plane. This parameter can be used to change the vSwitches of the control plane in an ACK managed cluster. Take note of the following items:
   * 
   * *   This parameter overwrites the existing configuration. You must specify all vSwitches of the control plane.
   * *   The control plane components restarts during the change process. Exercise caution when you perform this operation.
   * *   Ensure that all security groups of the cluster, including the security groups of the control plane, all node pools, and container network, are allowed to access the CIDR blocks of the new vSwitches. This ensures that the nodes and containers can connect to the API server.
   * *   If the new vSwitches of the control plane are configured with an ACL, ensure that the ACL allows communication between the new vSwitches and CIDR blocks such as those of the cluster nodes and the container network.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accessControlList: 'access_control_list',
      apiServerCustomCertSans: 'api_server_custom_cert_sans',
      apiServerEip: 'api_server_eip',
      apiServerEipId: 'api_server_eip_id',
      clusterName: 'cluster_name',
      controlPlaneConfig: 'control_plane_config',
      deletionProtection: 'deletion_protection',
      enableRrsa: 'enable_rrsa',
      ingressDomainRebinding: 'ingress_domain_rebinding',
      ingressLoadbalancerId: 'ingress_loadbalancer_id',
      instanceDeletionProtection: 'instance_deletion_protection',
      maintenanceWindow: 'maintenance_window',
      operationPolicy: 'operation_policy',
      resourceGroupId: 'resource_group_id',
      securityGroupId: 'security_group_id',
      systemEventsLogging: 'system_events_logging',
      timezone: 'timezone',
      vswitchIds: 'vswitch_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlList: { 'type': 'array', 'itemType': 'string' },
      apiServerCustomCertSans: ModifyClusterRequestApiServerCustomCertSans,
      apiServerEip: 'boolean',
      apiServerEipId: 'string',
      clusterName: 'string',
      controlPlaneConfig: ModifyClusterRequestControlPlaneConfig,
      deletionProtection: 'boolean',
      enableRrsa: 'boolean',
      ingressDomainRebinding: 'boolean',
      ingressLoadbalancerId: 'string',
      instanceDeletionProtection: 'boolean',
      maintenanceWindow: MaintenanceWindow,
      operationPolicy: ModifyClusterRequestOperationPolicy,
      resourceGroupId: 'string',
      securityGroupId: 'string',
      systemEventsLogging: ModifyClusterRequestSystemEventsLogging,
      timezone: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.accessControlList)) {
      $dara.Model.validateArray(this.accessControlList);
    }
    if(this.apiServerCustomCertSans && typeof (this.apiServerCustomCertSans as any).validate === 'function') {
      (this.apiServerCustomCertSans as any).validate();
    }
    if(this.controlPlaneConfig && typeof (this.controlPlaneConfig as any).validate === 'function') {
      (this.controlPlaneConfig as any).validate();
    }
    if(this.maintenanceWindow && typeof (this.maintenanceWindow as any).validate === 'function') {
      (this.maintenanceWindow as any).validate();
    }
    if(this.operationPolicy && typeof (this.operationPolicy as any).validate === 'function') {
      (this.operationPolicy as any).validate();
    }
    if(this.systemEventsLogging && typeof (this.systemEventsLogging as any).validate === 'function') {
      (this.systemEventsLogging as any).validate();
    }
    if(Array.isArray(this.vswitchIds)) {
      $dara.Model.validateArray(this.vswitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

