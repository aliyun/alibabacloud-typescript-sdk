// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAclRequest extends $dara.Model {
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - **Write**: Write.
   * 
   * - **Read**: Read.
   * 
   * - **Describe**: Read a transaction ID.
   * - **IdempotentWrite**: Idempotent write to a cluster.
   * - **IDEMPOTENT_WRITE**: Idempotent write to a cluster. Available only for serverless instances.
   * - **DESCRIBE_CONFIGS**: Query configurations. Available only for serverless instances.
   * 
   * This parameter is required.
   * 
   * @example
   * Write
   */
  aclOperationType?: string;
  /**
   * @remarks
   * The operation types for batch authorization. Separate multiple operations with commas (,). Valid values:
   * - **Write**: Write.
   * 
   * - **Read**: Read.
   * 
   * - **Describe**: Read a transaction ID.
   * - **IdempotentWrite**: Idempotent write to a cluster.
   * - **IDEMPOTENT_WRITE**: Idempotent write to a cluster. Available only for serverless instances.
   * - **DESCRIBE_CONFIGS**: Query configurations. Available only for serverless instances.
   * 
   * > This parameter is supported only for serverless instances.
   * 
   * @example
   * Write,Read
   */
  aclOperationTypes?: string;
  /**
   * @remarks
   * The authorization method. Valid values:
   * 
   * - DENY: Deny.
   * - ALLOW: Allow.
   * 
   * > This parameter is supported only for serverless instances.
   * 
   * @example
   * DENY
   */
  aclPermissionType?: string;
  /**
   * @remarks
   * The resource name. You can specify the name of a topic or a consumer group. An asterisk (*) indicates all topics or consumer groups.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  aclResourceName?: string;
  /**
   * @remarks
   * The matching mode. Valid values:
   * 
   * - **LITERAL**: Exact match.
   * 
   * - **PREFIXED**: Prefix match.
   * 
   * This parameter is required.
   * 
   * @example
   * LITERAL
   */
  aclResourcePatternType?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - **Topic**: Message topic.
   * 
   * - **Group**: Consumer group.
   * 
   * - **Cluster**: Instance.
   * - **TransactionalId**: Transaction ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  aclResourceType?: string;
  /**
   * @remarks
   * The source IP address.
   * >- Only specific IP addresses or an asterisk (*) to allow all IP addresses are supported. CIDR blocks are not supported.
   * >- This parameter is supported only for serverless instances.
   * 
   * @example
   * *
   */
  host?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-v0h1cng0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * test12****
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclOperationType: 'AclOperationType',
      aclOperationTypes: 'AclOperationTypes',
      aclPermissionType: 'AclPermissionType',
      aclResourceName: 'AclResourceName',
      aclResourcePatternType: 'AclResourcePatternType',
      aclResourceType: 'AclResourceType',
      host: 'Host',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclOperationType: 'string',
      aclOperationTypes: 'string',
      aclPermissionType: 'string',
      aclResourceName: 'string',
      aclResourcePatternType: 'string',
      aclResourceType: 'string',
      host: 'string',
      instanceId: 'string',
      regionId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

