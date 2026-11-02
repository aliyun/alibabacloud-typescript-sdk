// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAclRequest extends $dara.Model {
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - **Write**: write
   * 
   * - **Read**: read
   * 
   * - **Describe**: read a transactional ID
   * - **IdempotentWrite**: perform an idempotent write to a cluster
   * - **IDEMPOTENT_WRITE**: perform an idempotent write to a cluster. Available only for serverless instances.
   * - **DESCRIBE_CONFIGS**: query configurations. Available only for serverless instances.
   * 
   * This parameter is required.
   * 
   * @example
   * Read
   */
  aclOperationType?: string;
  /**
   * @remarks
   * The operation types for batch authorization. Separate multiple operations with commas (,). Valid values:
   * 
   * - **Write**: write
   * 
   * - **Read**: read
   * 
   * - **Describe**: read a transactional ID
   * - **IdempotentWrite**: perform an idempotent write to a cluster
   * - **IDEMPOTENT_WRITE**: perform an idempotent write to a cluster. Available only for serverless instances.
   * - **DESCRIBE_CONFIGS**: query configurations. Available only for serverless instances.
   * 
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
   * - **DENY**: deny.
   *  
   * - **ALLOW**: allow.
   * 
   * > This parameter is supported only for serverless instances.
   * 
   * @example
   * DENY
   */
  aclPermissionType?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * - The name of the resource. It can be a topic name, a group ID, a cluster name, or a transactional ID.
   * 
   * - You can use an asterisk (*) to specify all resources of this type.
   * 
   * 
   * > 
   * > - You can query the authorized resources by using an asterisk (*) only after you grant permissions to all resources.
   * 
   * This parameter is required.
   * 
   * @example
   * X****
   */
  aclResourceName?: string;
  /**
   * @remarks
   * The matching mode. Valid values:
   * 
   * - **LITERAL**: exact match
   * 
   * - **PREFIXED**: prefix match
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
   * - **Topic**: topic
   * 
   * - **Group**: consumer group
   * - **Cluster**: instance
   * - **TransactionalId**: transactional ID
   * 
   * This parameter is required.
   * 
   * @example
   * Group
   */
  aclResourceType?: string;
  /**
   * @remarks
   * The source IP address.
   * >- Only specific IP addresses or an asterisk (*) (which allows all IP addresses) are supported. CIDR blocks are not supported.
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
   * - Before calling this API, you must create a SASL user by calling CreateSaslUser. You can query existing users by calling DescribeSaslUsers.
   * - You can use an asterisk (*) to specify all usernames.
   * 
   * > You can query the authorized users by using an asterisk (*) only after you grant permissions to all users.
   * 
   * This parameter is required.
   * 
   * @example
   * test***
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

