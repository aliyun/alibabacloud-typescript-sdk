// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclsResponseBodyKafkaAclListKafkaAclVO extends $dara.Model {
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
   * *   You can use the asterisk (\\*) wildcard character to specify the names of all topics or consumer groups.
   * 
   * @example
   * demo
   */
  aclResourceName?: string;
  /**
   * @remarks
   * The matching mode. Valid values:
   * 
   * *   **LITERAL:** full-name match
   * *   **PREFIXED**: prefix match
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
   * @example
   * Topic
   */
  aclResourceType?: string;
  /**
   * @remarks
   * The host.
   * 
   * @example
   * ****
   */
  host?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test12***
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

export class DescribeAclsResponseBodyKafkaAclList extends $dara.Model {
  kafkaAclVO?: DescribeAclsResponseBodyKafkaAclListKafkaAclVO[];
  static names(): { [key: string]: string } {
    return {
      kafkaAclVO: 'KafkaAclVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kafkaAclVO: { 'type': 'array', 'itemType': DescribeAclsResponseBodyKafkaAclListKafkaAclVO },
    };
  }

  validate() {
    if(Array.isArray(this.kafkaAclVO)) {
      $dara.Model.validateArray(this.kafkaAclVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The access control lists (ACLs).
   */
  kafkaAclList?: DescribeAclsResponseBodyKafkaAclList;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 46496E38-881E-4719-A2F3-F3DA6AE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      kafkaAclList: 'KafkaAclList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      kafkaAclList: DescribeAclsResponseBodyKafkaAclList,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.kafkaAclList && typeof (this.kafkaAclList as any).validate === 'function') {
      (this.kafkaAclList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

