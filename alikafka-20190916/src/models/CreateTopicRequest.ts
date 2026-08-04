// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTopicRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * - N ranges from 1 to 20.
   * 
   * - If this parameter is left empty, all tag keys are matched.
   * 
   * - The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
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
   * - N ranges from 1 to 20.
   * 
   * - This parameter can be left empty.
   * 
   * - The tag value can be up to 128 characters in length and cannot start with aliyun or acs:, or contain http:// or https://.
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
   * The cleanup policy configured when the storage engine of the topic is set to local storage. Valid values:
   * 
   * - false: delete cleanup policy.
   * - true: compact cleanup policy.
   * 
   * @example
   * false
   */
  compactTopic?: boolean;
  /**
   * @remarks
   * The supplementary configuration.
   * 
   * - Must be in JSON format.
   * 
   * 
   * - This parameter takes effect only when **LocalTopic** is set to **true**.
   * 
   * - Supported configurations for reserved instances:
   *   -   **retention.ms** (message retention period): ranges from 3600000 to 31536000000 milliseconds.
   *   - **max.message.bytes** (maximum message size): ranges from 1048576 to 10485760 bytes. 
   *   - **message.timestamp.type**: specifies the type of message timestamp. CreateTime indicates the timestamp specified by the producer when sending a message. If not specified, it is the message creation time on the client. LogAppendTime indicates the time when the message is written to disk on the server. Valid values: CreateTime or LogAppendTime. Default value: CreateTime. We recommend LogAppendTime.
   * 
   *  - Supported configurations for Serverless instances:
   *    -  **retention.hours** (message retention period): value type is String. Valid values: 24 to 8760.
   *    -  **max.message.bytes** (maximum message size): value type is String. Valid values: 1048576 to 10485760.
   *    -  **message.timestamp.type** (type of message timestamp): CreateTime indicates the timestamp specified by the producer when sending a message. If not specified, it is the message creation time on the client. LogAppendTime indicates the time when the message is written to disk on the server. Valid values: CreateTime or LogAppendTime. Default value: CreateTime. We recommend LogAppendTime.
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
   * The instance ID.
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
   * - true: local storage.
   * 
   * @example
   * false
   */
  localTopic?: boolean;
  /**
   * @remarks
   * The minimum number of in-sync replicas (ISR).
   * 
   * - This parameter takes effect only when **LocalTopic** is set to **true**.
   * 
   * - The value must be less than the number of topic replicas.
   * 
   * - The number of in-sync replicas ranges from 1 to 3.
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
   * The number of partitions for the topic.
   * 
   * - The number of partitions ranges from 1 to 360.
   * 
   * - The console provides different configuration suggestions based on the instance edition. Configure the number of partitions based on the console suggestions to reduce the risk of data skew.
   * 
   * Default value:
   * 
   * - Reserved instances: 12
   * 
   * - Serverless instances: 3
   * 
   * @example
   * 12
   */
  partitionNum?: string;
  /**
   * @remarks
   * The region ID of the instance to which the topic belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the topic.
   * 
   * - Can contain only letters, digits, underscores (_), and hyphens (-).
   * 
   * - Must be 3 to 64 characters in length.
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
   * - This parameter takes effect only when **LocalTopic** is set to **true**.
   * 
   * - The number of replicas ranges from 1 to 3.
   * 
   * > If the number of replicas is set to **1**, data loss may occur. Set this parameter with caution.
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
   * The tag list.
   */
  tag?: CreateTopicRequestTag[];
  /**
   * @remarks
   * The name of the topic.
   * 
   * - Reserved instances:
   * Supports uppercase and lowercase letters, digits, underscores (_), hyphens (-), and periods (.). The name must be 3 to 64 characters in length.
   * - Serverless instances:
   * Supports uppercase and lowercase letters, digits, underscores (_), hyphens (-), and periods (.). The name must be 1 to 249 characters in length.
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

