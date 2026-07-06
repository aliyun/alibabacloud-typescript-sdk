// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAclRequest extends $dara.Model {
  /**
   * @remarks
   * Operation type. Valid values:
   * 
   * - **Write**: Write
   * 
   * - **Read**: Read
   * 
   * - **Describe**: Read TransactionalId
   * 
   * - **IdempotentWrite**: Idempotent write to Cluster
   * 
   * - **IDEMPOTENT_WRITE**: Idempotent write to Cluster, only available for Serverless instances.
   * 
   * - **DESCRIBE_CONFIGS**: Query configuration, only available for Serverless instances.
   * 
   * This parameter is required.
   * 
   * @example
   * Write
   */
  aclOperationType?: string;
  /**
   * @remarks
   * Batch authorization operation types. Multiple operations are separated by commas (,).
   * 
   * Valid values:
   * 
   * - **Write**: Read
   * 
   * - **Read**: Write
   * 
   * - **Describe**: Read TransactionalId
   * 
   * - **IdempotentWrite**: Idempotent write to Cluster
   * 
   * - **IDEMPOTENT_WRITE**: Idempotent write to Cluster, only available for Serverless instances.
   * 
   * - **DESCRIBE_CONFIGS**: Query configuration, only available for Serverless instances.
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
   * - DENY: Deny
   * 
   * - ALLOW: Allow
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
   * - Topic name or Group name.
   * 
   * - Asterisk (\\*) represents all Topic or Group names.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  aclResourceName?: string;
  /**
   * @remarks
   * Matching pattern. Valid values:
   * 
   * - **LITERAL**: Exact matching pattern
   * 
   * - **PREFIXED**: Prefix matching pattern
   * 
   * This parameter is required.
   * 
   * @example
   * LITERAL
   */
  aclResourcePatternType?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * - **Topic**: Message topic.
   * 
   * - **Group**: Consumer group.
   * 
   * - **Cluster**: Instance.
   * 
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
   * Source IP.
   * 
   * > - Only supports specific IP addresses or setting \\* (all IPs), does not support IP segments.
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

