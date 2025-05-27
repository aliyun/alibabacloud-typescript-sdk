// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclsRequest extends $dara.Model {
  /**
   * @remarks
   * The types of operations allowed by the ACL. Separate multiple operation types with commas (,).
   * - Valid values:
   * - Write
   * - Read
   * - Describe: reads of transactional IDs.
   * - IdempotentWrite: idempotent data writes to clusters.
   * - IDEMPOTENT_WRITE: idempotent data writes to clusters. This value is available only for ApsaraMQ for Kafka V3 instances.
   * - DESCRIBE_CONFIGS: queries of configurations. This value is available only for ApsaraMQ for Kafka V3 instances.
   * > This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
   * 
   * @example
   * Write
   */
  aclOperationType?: string;
  /**
   * @remarks
   * The authorization method. Valid values:
   * - DENY
   * - ALLOW
   * > This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
   * 
   * @example
   * DENY
   */
  aclPermissionType?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * *   The value can be the name of a topic or consumer group.
   * *   You can use an asterisk (\\*) to specify the names of all topics or consumer groups.
   * 
   * > You can query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
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
   * *   LITERAL: full-name match
   * *   PREFIXED: prefix match
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
   * >-  You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
   * > - This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
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
   * *   You can use an asterisk (\\*) to specify all users.
   * 
   * > You can use an asterisk (\\*) to query the authorized users only after you grant the required permissions to all users.
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

