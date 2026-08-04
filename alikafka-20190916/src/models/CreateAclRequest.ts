// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAclRequest extends $dara.Model {
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - **Write**: write.
   * 
   * - **Read**: read.
   * 
   * - **Describe**: read TransactionalId.
   * - **IdempotentWrite**: idempotent write to Cluster.
   * - **IDEMPOTENT_WRITE**: idempotent write to Cluster. This value is available only for serverless instances.
   * - **DESCRIBE_CONFIGS**: query configurations. This value is available only for serverless instances.
   * 
   * This parameter is required.
   * 
   * @example
   * Read
   */
  aclOperationType?: string;
  /**
   * @remarks
   * The operation types for batch authorization. Separate multiple operations with commas (,).
   * 
   * Valid values:
   * 
   * - **Write**: write.
   * 
   * - **Read**: read.
   * 
   * - **Describe**: read TransactionalId.
   * - **IdempotentWrite**: idempotent write to Cluster.
   * - **IDEMPOTENT_WRITE**: idempotent write to Cluster. This value is available only for serverless instances.
   * - **DESCRIBE_CONFIGS**: query configurations. This value is available only for serverless instances.
   * 
   * 
   * > This parameter is available only for serverless instances.
   * 
   * @example
   * Write,Read
   */
  aclOperationTypes?: string;
  /**
   * @remarks
   * The authorization method. Valid values:
   * - **DENY**: Denied.
   *  
   * - **ALLOW**: Allowed.
   * 
   * > This parameter is available only for serverless instances.
   * 
   * @example
   * DENY
   */
  aclPermissionType?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * - The name of the resource, which can be a topic name, group ID, cluster name, or transaction ID.
   * 
   * - You can use an asterisk (\\*) to represent all resources of this type.
   * 
   * 
   * > 
   * > - The asterisk (\\*) returns results only after permissions are granted to all resources.
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
   * - **LITERAL**: exact match.
   * 
   * - **PREFIXED**: prefix match.
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
   * - **Topic**: message topic.
   * 
   * - **Group**: consumer group.
   * - **Cluster**: instance.
   * - **TransactionalId**: transaction ID.
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
   * >- Only specific IP addresses or an asterisk (\\*) to allow all IP addresses are supported. IP CIDR blocks are not supported.
   * >- This parameter is available only for serverless instances.
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
   * - You can use an asterisk (\\*) to represent all usernames.
   * 
   * 
   * 
   * > 
   * > - The asterisk (\\*) returns results only after permissions are granted to all users.
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

