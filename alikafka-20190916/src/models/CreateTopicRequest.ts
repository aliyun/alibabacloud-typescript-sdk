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
   * - The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * - The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
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
   * The cleanup policy that is configured when the storage engine of the topic is set to local storage. Valid values:
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
   * - The value must be in JSON format.
   * 
   * - This parameter takes effect only when **LocalTopic** is set to **true**.
   * 
   * - Supported configurations for reserved instances:
   *   - **retention.ms**: the message retention period. Valid values: 3600000 to 31536000000. Unit: milliseconds.
   *   - **max.message.bytes**: the maximum message size. Valid values: 1048576 to 10485760. Unit: bytes.
   *   - **message.timestamp.type**: the type of the message timestamp. CreateTime indicates the timestamp specified by the producer when sending a message. If not specified, the value is the creation time of the message on the client. LogAppendTime indicates the time when the message is written to disk on the server. Valid values: CreateTime or LogAppendTime. Default value: Createtime. We recommend that you use ApendTime.
   * 
   * - Supported configurations for Serverless instances:
   *   - **retention.hours**: the message retention period. The value type is String. Valid values: 24 to 8760.
   *   - **max.message.bytes**: the maximum message size. The value type is String. Valid values: 1048576 to 10485760.
   *   - **message.timestamp.type**: the type of the message timestamp. CreateTime indicates the timestamp specified by the producer when sending a message. If not specified, the value is the creation time of the message on the client. LogAppendTime indicates the time when the message is written to disk on the server. Valid values: CreateTime or LogAppendTime. Default value: Createtime. We recommend that you use ApendTime.
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
   * - Valid values: 1 to 3.
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
   * - Valid values: 1 to 360.
   * 
   * - The console provides different configuration suggestions based on the instance edition. Configure the number of partitions based on the console suggestions to reduce data skew risks.
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
   * - The description can contain only letters, digits, underscores (_), and hyphens (-).
   * 
   * - The description must be 3 to 64 characters in length.
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
   * - Valid values: 1 to 3.
   * 
   * > If the number of replicas is set to **1**, data loss may occur. Proceed with caution.
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
   * - Reserved instances: The name can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must be 3 to 64 characters in length.
   * - Serverless instances: The name can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must be 1 to 249 characters in length.
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

