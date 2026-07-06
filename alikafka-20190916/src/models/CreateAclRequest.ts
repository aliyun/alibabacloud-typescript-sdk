// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAclRequest extends $dara.Model {
  /**
   * @remarks
   * Operation type. Valid values:
   * 
   * - **Write**: write
   * 
   * - **Read**: read
   * 
   * - **Describe**: read TransactionalId
   * 
   * - **IdempotentWrite**: idempotent write to Cluster
   * 
   * - **IDEMPOTENT_WRITE**: idempotent write to Cluster, only available for Serverless instances.
   * 
   * - **DESCRIBE_CONFIGS**: query configuration, only available for Serverless instances.
   * 
   * This parameter is required.
   * 
   * @example
   * Read
   */
  aclOperationType?: string;
  /**
   * @remarks
   * Batch authorization operation types. Multiple operations are separated by commas (,).
   * 
   * Valid values:
   * 
   * - **Write**: read
   * 
   * - **Read**: write
   * 
   * - **Describe**: read TransactionalId
   * 
   * - **IdempotentWrite**: idempotent write to Cluster
   * 
   * - **IDEMPOTENT_WRITE**: idempotent write to Cluster, only available for Serverless instances.
   * 
   * - **DESCRIBE_CONFIGS**: query configuration, only available for Serverless instances.
   * 
   * > This parameter is only supported for Serverless instances.
   * 
   * @example
   * Write,Read
   */
  aclOperationTypes?: string;
  /**
   * @remarks
   * Authorization method. Valid values:
   * 
   * - **DENY**: deny.
   * 
   * - **ALLOW**: allow.
   * 
   * > This parameter is only supported for Serverless instances.
   * 
   * @example
   * DENY
   */
  aclPermissionType?: string;
  /**
   * @remarks
   * Resource name.
   * 
   * - The name of the resource, which can be a topic name, Group ID, cluster name, or transaction ID.
   * 
   * - You can use an asterisk (\\*) to represent all resources of this type.
   * 
   * > * Only after authorization is granted to all resources can you query the authorized resources using an asterisk (\\*).
   * 
   * This parameter is required.
   * 
   * @example
   * X****
   */
  aclResourceName?: string;
  /**
   * @remarks
   * Matching pattern. Valid values:
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
   * Resource type. Valid values:
   * 
   * - **Topic**: message topic.
   * 
   * - **Group**: consumer group.
   * 
   * - **Cluster**: instance.
   * 
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
   * Source IP.
   * 
   * > - Only specific IP addresses or \\* (all IPs) are supported. IP address ranges are not supported.
   * >
   * > - This parameter is only supported for Serverless instances.
   * 
   * @example
   * *
   */
  host?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-v0h1cng0****
   */
  instanceId?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Username.
   * 
   * - You can use an asterisk (\\*) to represent all usernames.
   * 
   * > * Only after authorization is granted to all users can you query the authorized users using an asterisk (\\*).
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

