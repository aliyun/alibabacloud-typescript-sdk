// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclsRequest extends $dara.Model {
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - **Write**: Writes.
   * 
   * - **Read**: Reads.
   *  
   * - **Describe**: Reads a TransactionalId.
   *  
   * - **IdempotentWrite**: Idempotently writes to a cluster. This parameter is not supported for Serverless instances. For Serverless instances, use IDEMPOTENT_WRITE.
   *  
   * - **IDEMPOTENT_WRITE**: Idempotently writes to a cluster. This parameter is available only for Serverless instances.
   *  
   * - **DESCRIBE_CONFIGS**: Queries configurations. This parameter is available only for Serverless instances.
   * 
   * @example
   * Write
   */
  aclOperationType?: string;
  /**
   * @remarks
   * The permission type. Valid values:
   * 
   * - DENY: Denies access.
   * - ALLOW: Allows access.
   * 
   * > This parameter is supported only for Serverless instances.
   * 
   * @example
   * DENY
   */
  aclPermissionType?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * - The name of a topic or group.
   * 
   * - You can use an asterisk (*) to represent the names of all topics or groups.
   * 
   * > 
   * > - You can use an asterisk (*) to query authorized resources only after permissions are granted to all resources.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  aclResourceName?: string;
  /**
   * @remarks
   * The match mode. Valid values:
   * 
   * - LITERAL: exact match
   * 
   * - PREFIXED: prefix match
   * 
   * @example
   * LITERAL
   */
  aclResourcePatternType?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - **Topic**
   * 
   * - **Group**
   * 
   * - **Cluster**
   * - **TransactionalId**
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
   * 
   * 
   * 
   * >- Only specific IP addresses or * (all IP addresses allowed) are supported. CIDR blocks are not supported.
   * > - This parameter is supported only for Serverless instances.
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
   * alikafka_pre-cn-v0h1cng****
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
   * - You can use an asterisk (*) to represent all users.
   * 
   * > 
   * > - You can use an asterisk (*) to query authorized users only after permissions are granted to all users.
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

