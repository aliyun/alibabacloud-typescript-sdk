// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTopicRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * - N specifies the number of the tag. The value of N must be an integer from 1 to 20.
   * 
   * - If this parameter is left empty, all tag keys are matched.
   * 
   * - The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * - N specifies the number of the tag. The value of N must be an integer from 1 to 20.
   * 
   * - The tag value can be empty.
   * 
   * - The tag value can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http\\:// or https\\://.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The cleanup policy for the topic. This parameter is available only if the storage engine of the topic is local storage. Valid values:
   * 
   * - false: The delete cleanup policy.
   * 
   * - true: The compact cleanup policy.
   * 
   * @example
   * false
   */
  compactTopic?: boolean;
  /**
   * @remarks
   * The advanced configurations of the topic.
   * 
   * - Configure this parameter in the JSON format.
   * 
   * - This parameter is available only if **LocalTopic** is set to **true**.
   * 
   * - The following configurations are supported for reserved instances:
   * 
   *   - **retention.ms**: The message retention period. The value must be an integer from 3,600,000 to 31,536,000,000. Unit: milliseconds.
   * 
   *   - **max.message.bytes**: The maximum size of a message that can be sent. The value must be an integer from 1,048,576 to 10,485,760. Unit: bytes.
   * 
   *   - message.timestamp.type: The timestamp type of a message. Valid values: CreateTime or LogAppendTime. CreateTime indicates that the message timestamp is the time when the producer creates the message. If you do not specify a timestamp, the client time is used. LogAppendTime indicates that the message timestamp is the time when the server stores the message. The default value is CreateTime. We recommend that you set this parameter to **LogAppendTime**.
   * 
   * - The following configurations are supported for Serverless instances:
   * 
   *   - **retention.hours**: The message retention period. The value is of the string type. The value must be an integer from 24 to 8,760.
   * 
   *   - **max.message.bytes**: The maximum size of a message that can be sent. The value is of the string type. The value must be an integer from 1,048,576 to 10,485,760.
   * 
   *   - message.timestamp.type: The timestamp type of a message. Valid values: CreateTime or LogAppendTime. CreateTime indicates that the message timestamp is the time when the producer creates the message. If you do not specify a timestamp, the client time is used. LogAppendTime indicates that the message timestamp is the time when the server stores the message. The default value is CreateTime. We recommend that you set this parameter to **LogAppendTime**.
   * 
   * @example
   * {"retention.ms": "3600000"}
   * 
   * **if can be null:**
   * true
   */
  config?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-mp919o4v****
   */
  instanceId?: string;
  /**
   * @remarks
   * The storage engine of the topic. Valid values:
   * 
   * - false: cloud storage.
   * 
   * - true: local storage.
   * 
   * @example
   * false
   */
  localTopic?: boolean;
  /**
   * @remarks
   * The minimum number of in-sync replicas (ISRs).
   * 
   * - This parameter is available only if **LocalTopic** is set to **true**.
   * 
   * - The value of this parameter must be smaller than the number of replicas for the topic.
   * 
   * - The value must be an integer from 1 to 3.
   * 
   * @example
   * 1
   * 
   * **if can be null:**
   * true
   */
  minInsyncReplicas?: number;
  /**
   * @remarks
   * The number of partitions in the topic.
   * 
   * - The value must be an integer from 1 to 360.
   * 
   * - The console suggests a number of partitions based on the instance type. Follow the suggestion to reduce the risk of data skew.
   * 
   * Default value:
   * 
   * - Reserved instance: 12
   * 
   * - Serverless instance: 3
   * 
   * @example
   * 12
   */
  partitionNum?: string;
  /**
   * @remarks
   * The ID of the region where the instance that contains the topic is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks on the topic.
   * 
   * - The remarks can contain only letters, digits, underscores (_), and hyphens (-).
   * 
   * - The remarks must be 3 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_topic_test
   */
  remark?: string;
  /**
   * @remarks
   * The number of replicas for the topic.
   * 
   * - This parameter is available only if **LocalTopic** is set to **true**.
   * 
   * - The value must be an integer from 1 to 3.
   * 
   * > If you set the number of replicas to **1**, you may lose data. Set this parameter with caution.
   * 
   * @example
   * 3
   * 
   * **if can be null:**
   * true
   */
  replicationFactor?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateTopicRequestTag[];
  /**
   * @remarks
   * The name of the topic.
   * 
   * - Reserved instance: The name can contain uppercase letters, lowercase letters, digits, underscores (_), hyphens (-), and periods (.). The name must be 3 to 64 characters in length.
   * 
   * - Serverless instance: The name can contain uppercase letters, lowercase letters, digits, underscores (_), hyphens (-), and periods (.). The name must be 1 to 249 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_topic_test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      compactTopic: 'CompactTopic',
      config: 'Config',
      instanceId: 'InstanceId',
      localTopic: 'LocalTopic',
      minInsyncReplicas: 'MinInsyncReplicas',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      remark: 'Remark',
      replicationFactor: 'ReplicationFactor',
      tag: 'Tag',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compactTopic: 'boolean',
      config: 'string',
      instanceId: 'string',
      localTopic: 'boolean',
      minInsyncReplicas: 'number',
      partitionNum: 'string',
      regionId: 'string',
      remark: 'string',
      replicationFactor: 'number',
      tag: { 'type': 'array', 'itemType': CreateTopicRequestTag },
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

