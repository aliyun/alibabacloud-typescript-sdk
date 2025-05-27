// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTopicRequestTag } from "./CreateTopicRequestTag";


export class CreateTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The log cleanup policy that is used for the topic. This parameter is available only when LocalTopic is set to true. Valid values:
   * 
   * *   false: The topic uses the default log cleanup policy.
   * *   true: The topic uses the log compaction policy.
   * 
   * @example
   * false
   */
  compactTopic?: boolean;
  /**
   * @remarks
   * The additional configuration.
   * 
   * *   The value must be in JSON format.
   * *   Set Key to **replications**. This value specifies the number of replicas of the topic. The value must be an integer that ranges from 1 to 3.
   * *   You can configure this parameter only if you set **LocalTopic** to **true** or specify **Open Source Edition (Local Disk)** as the instance edition.****
   * 
   * >  If you specify replications in this parameter, **ReplicationFactor** does not take effect.
   * 
   * @example
   * {"replications": 3}
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
   * The type of storage that the topic uses. Valid values:
   * 
   * *   false: The topic uses cloud storage.
   * *   true: The topic uses local storage.
   * 
   * @example
   * false
   */
  localTopic?: boolean;
  /**
   * @remarks
   * The minimum number of in-sync replicas (ISRs).
   * 
   * *   This parameter is available only when **LocalTopic** is set to **true**, or the instance is of the **Open Source Edition (Local Disk)**.****
   * *   The value of this parameter must be smaller than the value of ReplicationFactor.
   * *   Valid values: 1 to 3.
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
   * *   Valid values: 1 to 360.
   * *   In the ApsaraMQ for Kafka console, you can view the number of partitions that the system recommends based on the specifications of the instance. We recommend that you specify the number that is recommended by the system as the value of this parameter to reduce the risk of data skew.
   * 
   * Default values:
   * 
   * *   ApsaraMQ for Kafka V2 instance: 12
   * *   ApsaraMQ for Kafka V3 instance: 3
   * 
   * @example
   * 12
   */
  partitionNum?: string;
  /**
   * @remarks
   * The region ID of the instance in which you want to create a topic.
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
   * *   The description can contain only letters, digits, hyphens (-), and underscores (_).
   * *   The description must be 3 to 64 characters in length.
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
   * *   This parameter is available only when **LocalTopic** is set to **true**, or the instance is of the **Open Source Edition (Local Disk)**.****
   * *   Valid values: 1 to 3.
   * 
   * > If you set this parameter to **1**, data loss may occur. Exercise caution when you configure this parameter.
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
   * The tags that you want to add to the topic.
   */
  tag?: CreateTopicRequestTag[];
  /**
   * @remarks
   * The topic name.
   * 
   * *   The name can contain only letters, digits, hyphens (-), and underscores (_).
   * *   The name must be 3 to 64 characters in length. If the name that you specify contains more than 64 characters, the system automatically truncates the name.
   * *   After a topic is created, you cannot change the name of the topic.
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

