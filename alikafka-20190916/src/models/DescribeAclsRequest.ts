// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclsRequest extends $dara.Model {
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - **Write**
   * 
   * - **Read**
   * 
   * - **Describe**: reads a transactional ID.
   * 
   * - **IdempotentWrite**: performs an idempotent write to a cluster. This value is not supported by Serverless instances. For Serverless instances, use IDEMPOTENT_WRITE.
   * 
   * - **IDEMPOTENT_WRITE**: performs an idempotent write to a cluster. This value is available only for Serverless instances.
   * 
   * - **DESCRIBE_CONFIGS**: queries configurations. This value is available only for Serverless instances.
   * 
   * @example
   * Write
   */
  aclOperationType?: string;
  /**
   * @remarks
   * The authorization method. Valid values:
   * 
   * - DENY
   * 
   * - ALLOW
   * 
   * > This parameter is available only for Serverless instances.
   * 
   * @example
   * DENY
   */
  aclPermissionType?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * - The name can be a topic name or a group name.
   * 
   * - You can use an asterisk (\\*) to represent all topic names or group names.
   * 
   * > * You can use an asterisk (\\*) only after you grant permissions to all resources.
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
   * - LITERAL: an exact match
   * 
   * - PREFIXED: a prefix match
   * 
   * @example
   * LITERAL
   */
  aclResourcePatternType?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * - **Topic**
   * 
   * - **Group**
   * 
   * - **Cluster**
   * 
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
   * > - You can set this parameter to a specific IP address or an asterisk (\\*). An asterisk (\\*) indicates all IP addresses. CIDR blocks are not supported.
   * >
   * > - This parameter is available only for Serverless instances.
   * 
   * @example
   * *
   */
  host?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-v0h1cng****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * - An asterisk (\\*) can be used to represent all users.
   * 
   * > * A query with an asterisk (\\*) returns authorizations only if authorization has been granted to all users.
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

