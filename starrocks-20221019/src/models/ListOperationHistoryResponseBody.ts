// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Value after the operation.
   * 
   * @example
   * FE enable = true
   */
  afterValue?: string;
  /**
   * @remarks
   * Value before the operation.
   * 
   * @example
   * FE enable = false
   */
  beforeValue?: string;
  /**
   * @remarks
   * Start time of the operation.
   * 
   * @example
   * 1742179008000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * End time of the operation.
   * 
   * @example
   * 1742179008000
   */
  gmtEnd?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * c-cd7a3a6f2186d5c9
   */
  instanceId?: string;
  /**
   * @remarks
   * Operation details.
   * 
   * @example
   * 库存不足，操作失败，已退款
   */
  operationDetail?: string;
  /**
   * @remarks
   * Operation ID.
   * 
   * @example
   * op-f49743caa809****
   */
  operationId?: string;
  /**
   * @remarks
   * Operation status:
   * 
   * - COMPLETED: completed
   * 
   * - TERMINATED: terminated
   * 
   * - HUMAN_PROCESSING: pending manual processing
   * 
   * @example
   * COMPLETED
   */
  operationStatus?: string;
  /**
   * @remarks
   * Operation type. Valid values:
   * 
   * - trial_to_official: upgrade from Trial Edition to Standard Edition
   * 
   * - upgrade_version: upgrade version
   * 
   * - update_configuration: update configuration
   * 
   * - update_public_network_status: update public network status
   * 
   * - create_cluster: create cluster
   * 
   * - delete_cluster: delete cluster
   * 
   * - disable_cluster: stop cluster
   * 
   * - enable_cluster: resume cluster
   * 
   * - restart_cluster: restart cluster
   * 
   * - migrate_cluster: migrate cluster
   * 
   * - renew_cluster: renew cluster
   * 
   * - modify_charge_type: change billing method
   * 
   * - UPGRADE: upgrade cluster
   * 
   * - DOWNGRADE: downgrade cluster
   * 
   * - create_node_group: create node group
   * 
   * - delete_node_group: delete node group
   * 
   * - disable_node_group: stop node group
   * 
   * - enable_node_group: resume node group
   * 
   * - sre_operation: O\\&M cluster
   * 
   * - resource_change: resource change
   * 
   * - disable_postpaid_resource: disable pay-as-you-go resources
   * 
   * - enable_postpaid_resource: enable pay-as-you-go resources
   * 
   * - restart_node_group: restart compute group
   * 
   * - enable_ha_cluster: enable high availability (HA) for cluster
   * 
   * - restart_node: restart node
   * 
   * - backup: data backup
   * 
   * - delete_backup: delete data backup
   * 
   * - cancel_backup_task: cancel data backup
   * 
   * - modify_timezone: modify system time zone
   * 
   * - restore: data restoration
   * 
   * - switch_az: switch primary and secondary zones
   * 
   * - rollback_upgrade_version: roll back version upgrade
   * 
   * - scale_out_fe: scale out FE
   * 
   * - scale_in_fe: scale in FE
   * 
   * - upgrade_fe_cu: upgrade FE CU specification
   * 
   * - downgrade_fe_cu: downgrade FE CU specification
   * 
   * - increase_fe_disk_size: increase FE disk size
   * 
   * - decrease_fe_disk_size: decrease FE disk size
   * 
   * - increase_fe_disk_number: increase FE disk count
   * 
   * - decrease_fe_disk_number: decrease FE disk count
   * 
   * - upgrade_fe_disk_performance_level: upgrade FE disk performance level
   * 
   * - downgrade_fe_disk_performance_level: downgrade FE disk performance level
   * 
   * - create_agent: create Agent
   * 
   * - upgrade_agent_cu: upgrade Agent CU specification
   * 
   * - scale_out_be: scale out BE
   * 
   * - scale_in_be: scale in BE
   * 
   * - upgrade_be_cu: upgrade BE CU specification
   * 
   * - downgrade_be_cu: downgrade BE CU specification
   * 
   * - increase_be_disk_size: increase BE disk size
   * 
   * - decrease_be_disk_size: decrease BE disk size
   * 
   * - increase_be_disk_number: increase BE disk count
   * 
   * - decrease_be_disk_number: decrease BE disk count
   * 
   * - upgrade_be_disk_performance_level: upgrade BE disk performance level
   * 
   * - downgrade_be_disk_performance_level: downgrade BE disk performance level
   * 
   * - upgrade_be_spec_type: upgrade BE specification type
   * 
   * - downgrade_be_spec_type: downgrade BE specification type
   * 
   * - scale_out_cn: scale out CN
   * 
   * - scale_in_cn: scale in CN
   * 
   * - upgrade_cn_cu: upgrade CN CU specification
   * 
   * - downgrade_cn_cu: downgrade CN CU specification
   * 
   * - increase_cn_disk_size: increase CN disk size
   * 
   * - decrease_cn_disk_size: decrease CN disk size
   * 
   * - increase_cn_disk_number: increase CN disk count
   * 
   * - decrease_cn_disk_number: decrease CN disk count
   * 
   * - upgrade_cn_disk_performance: upgrade CN disk performance level
   * 
   * - downgrade_cn_disk_performance: downgrade CN disk performance level
   * 
   * - upgrade_cn_spec_type: upgrade CN specification type
   * 
   * - downgrade_cn_spec_type: downgrade CN specification type
   * 
   * - elastic_scale_out_cn: elastically scale out CN
   * 
   * - elastic_scale_in_cn: elastically scale in CN
   * 
   * @example
   * upgrade_version
   */
  operationType?: string;
  /**
   * @remarks
   * Operation progress.
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
   * Details about access denied errors.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: ListOperationHistoryResponseBodyData[];
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of records.
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

