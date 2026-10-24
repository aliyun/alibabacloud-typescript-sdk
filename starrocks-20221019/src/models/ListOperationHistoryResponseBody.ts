// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value after the operation.
   * 
   * @example
   * FE enable = true
   */
  afterValue?: string;
  /**
   * @remarks
   * The value before the operation.
   * 
   * @example
   * FE enable = false
   */
  beforeValue?: string;
  /**
   * @remarks
   * The start time of the operation.
   * 
   * @example
   * 1742179008000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The end time of the operation.
   * 
   * @example
   * 1742179008000
   */
  gmtEnd?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-cd7a3a6f2186d5c9
   */
  instanceId?: string;
  /**
   * @remarks
   * The operation details.
   * 
   * @example
   * Insufficient inventory. The operation failed and a refund has been issued
   */
  operationDetail?: string;
  /**
   * @remarks
   * The operation ID.
   * 
   * @example
   * op-f49743caa809****
   */
  operationId?: string;
  /**
   * @remarks
   * The operation status. Valid values:
   * - COMPLETED: Completed.
   * - TERMINATED: Terminated.
   * - HUMAN_PROCESSING: Pending manual processing.
   * 
   * @example
   * COMPLETED
   */
  operationStatus?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * - trial_to_official: Upgrades the trial edition to the standard edition.
   * - upgrade_version: Upgrades the version.
   * - update_configuration: Updates the configuration.
   * - update_public_network_status: Updates the public network status.
   * - create_cluster: Creates a cluster.
   * - delete_cluster: Deletes a cluster.
   * - disable_cluster: Stops a cluster.
   * - enable_cluster: Recovers a cluster.
   * - restart_cluster: Restarts a cluster.
   * - migrate_cluster: Migrates a cluster.
   * - renew_cluster: Renews a cluster.
   * - modify_charge_type: Changes the billing method.
   * - UPGRADE: Upgrades a cluster.
   * - DOWNGRADE: Downgrades a cluster.
   * - create_node_group: Creates a node group.
   * - delete_node_group: Deletes a node group.
   * - disable_node_group: Stops a node group.
   * - enable_node_group: Recovers a node group.
   * - sre_operation: Performs O&M on a cluster.
   * - resource_change: Changes resources.
   * - disable_postpaid_resource: Disables pay-as-you-go resources.
   * - enable_postpaid_resource: Recovers pay-as-you-go resources.
   * - restart_node_group: Restarts a compute group.
   * - enable_ha_cluster: Enables high availability (HA) to keep the cluster active.
   * - restart_node: Restarts a node.
   * - backup: Backs up data.
   * - delete_backup: Deletes a data backup.
   * - cancel_backup_task: Cancels a data backup task.
   * - modify_timezone: Modifies the system time zone.
   * - restore: Recovers data.
   * - switch_az: Switches the primary and secondary zones.
   * - rollback_upgrade_version: Rolls back a version upgrade.
   * - scale_out_fe: Scales out FE nodes.
   * - scale_in_fe: Scales in FE nodes.
   * - upgrade_fe_cu: Upgrades the FE CU specifications.
   * - downgrade_fe_cu: Decrease the quota of FE CU specifications.
   * - increase_fe_disk_size: Increases the FE disk size.
   * - decrease_fe_disk_size: Decreases the FE disk size.
   * - increase_fe_disk_number: Increases the number of FE disks.
   * - decrease_fe_disk_number: Decreases the number of FE disks.
   * - upgrade_fe_disk_performance_level: Upgrades the FE disk performance level (PL).
   * - downgrade_fe_disk_performance_level: Decrease the quota of the FE disk performance level (PL).
   * - create_agent: Creates an agent.
   * - upgrade_agent_cu: Upgrades the agent CU specifications.
   * - scale_out_be: Scales out BE nodes.
   * - scale_in_be: Scales in BE nodes.
   * - upgrade_be_cu: Upgrades the BE CU specifications.
   * - downgrade_be_cu: Decrease the quota of BE CU specifications.
   * - increase_be_disk_size: Increases the BE disk size.
   * - decrease_be_disk_size: Decreases the BE disk size.
   * - increase_be_disk_number: Increases the number of BE disks.
   * - decrease_be_disk_number: Decreases the number of BE disks.
   * - upgrade_be_disk_performance_level: Upgrades the BE disk performance level (PL).
   * - downgrade_be_disk_performance_level: Decrease the quota of the BE disk performance level (PL).
   * - upgrade_be_spec_type: Upgrades the BE specification type.
   * - downgrade_be_spec_type: Decrease the quota of the BE specification type.
   * - scale_out_cn: Scales out CN nodes.
   * - scale_in_cn: Scales in CN nodes.
   * - upgrade_cn_cu: Upgrades the CN CU specifications.
   * - downgrade_cn_cu: Decrease the quota of CN CU specifications.
   * - increase_cn_disk_size: Increases the CN disk size.
   * - decrease_cn_disk_size: Decreases the CN disk size.
   * - increase_cn_disk_number: Increases the number of CN disks.
   * - decrease_cn_disk_number: Decreases the number of CN disks.
   * - upgrade_cn_disk_performance: Upgrades the CN disk performance level (PL).
   * - downgrade_cn_disk_performance: Decrease the quota of the CN disk performance level (PL).
   * - upgrade_cn_spec_type: Upgrades the CN specification type.
   * - downgrade_cn_spec_type: Decrease the quota of the CN specification type.
   * - elastic_scale_out_cn: Elastically scales out CN nodes.
   * - elastic_scale_in_cn: Elastically scales in CN nodes.
   * 
   * @example
   * upgrade_version
   */
  operationType?: string;
  /**
   * @remarks
   * The operation progress.
   * 
   * @example
   * 100
   */
  progress?: number;
  static names(): { [key: string]: string } {
    return {
      afterValue: 'AfterValue',
      beforeValue: 'BeforeValue',
      gmtCreate: 'GmtCreate',
      gmtEnd: 'GmtEnd',
      instanceId: 'InstanceId',
      operationDetail: 'OperationDetail',
      operationId: 'OperationId',
      operationStatus: 'OperationStatus',
      operationType: 'OperationType',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterValue: 'string',
      beforeValue: 'string',
      gmtCreate: 'number',
      gmtEnd: 'number',
      instanceId: 'string',
      operationDetail: 'string',
      operationId: 'string',
      operationStatus: 'string',
      operationType: 'string',
      progress: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListOperationHistoryResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
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
   * The request ID.
   * 
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 832
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': ListOperationHistoryResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

