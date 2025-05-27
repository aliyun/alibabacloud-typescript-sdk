// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAclRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the operation allowed by the access control list (ACL). Valid values:
   * 
   * *   **Write**
   * *   **Read**
   * *   **Describe**: reads of transactional IDs.
   * *   **IdempotentWrite**: idempotent data writes to clusters.
   * *   **IDEMPOTENT_WRITE**: idempotent data writes to clusters. This value is available only for serverless ApsaraMQ for Kafka instances.
   * *   **DESCRIBE_CONFIGS**: configuration query. This value is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * This parameter is required.
   * 
   * @example
   * Read
   */
  aclOperationType?: string;
  /**
   * @remarks
   * The types of operations allowed by the ACL. Separate multiple operation types with commas (,).
   * 
   * Valid values:
   * 
   * *   **Write**
   * *   **Read**
   * *   **Describe**: reads of transactional IDs.
   * *   **IdempotentWrite**: idempotent data writes to clusters.
   * *   **IDEMPOTENT_WRITE**: idempotent data writes to clusters. This value is available only for serverless ApsaraMQ for Kafka instances.
   * *   **DESCRIBE_CONFIGS**: configuration query. This value is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * >  This parameter is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @example
   * Write,Read
   */
  aclOperationTypes?: string;
  /**
   * @remarks
   * The authorization method. Valid values:
   * 
   * *   **DENY**
   * *   **ALLOW**
   * 
   * >  This parameter is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @example
   * DENY
   */
  aclPermissionType?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * *   The value can be a topic name, a group ID, a cluster name, or a transaction ID.
   * *   You can use an asterisk (\\*) to specify the names of all resources of the specified type.
   * 
   * > You can use an asterisk (\\*) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
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
   * *   **LITERAL**: exact match
   * *   **PREFIXED**: prefix match
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
   * *   **Topic**
   * *   **Group**
   * *   **Cluster**
   * *   **TransactionalId**: transactional ID
   * 
   * This parameter is required.
   * 
   * @example
   * Group
   */
  aclResourceType?: string;
  /**
   * @remarks
   * The IP address of the source.
   * 
   * > 
   * 
   * *   You can specify a specific IP address or use the asterisk (\\*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
   * 
   * *   This parameter is available only for serverless ApsaraMQ for Kafka instances.
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
   * *   You can use an asterisk (\\*) to specify all usernames.
   * 
   * > You can use an asterisk (\\*) to query the authorized users only after you grant the required permissions to all users.
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

