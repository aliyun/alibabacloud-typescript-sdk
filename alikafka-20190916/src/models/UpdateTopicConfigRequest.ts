// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTopicConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the topic configuration.
   * 
   * - You can modify the configurations only for topics that use the local storage engine on reserved instances. You cannot modify the configurations for topics that use the cloud storage engine.
   * 
   * - You can modify the configurations of topics for Serverless instances.
   * 
   * - For `local topics` on reserved instances, the supported keys are \\`retention.ms\\`, \\`max.message.bytes\\`, \\`message.timestamp.type\\`, and \\`message.timestamp.difference.max.ms\\`.
   * 
   * - For Serverless instances, the supported keys are \\`retention.hours\\`, \\`max.message.bytes\\`, \\`message.timestamp.type\\`, and \\`message.timestamp.difference.max.ms\\`.
   * 
   * This parameter is required.
   * 
   * @example
   * retention.ms
   */
  config?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * This parameter is required.
   * 
   * @example
   * dqc_test2
   */
  topic?: string;
  /**
   * @remarks
   * The value of the topic configuration.
   * 
   * - The following configurations are supported for Serverless instances:
   * 
   *   - `retention.hours` specifies the message retention period. The value must be a string. The value must be in the range of 24 to 8,760.
   * 
   *   - `max.message.bytes` specifies the maximum message size. The value must be a string. The value must be in the range of 1,048,576 to 10,485,760.
   * 
   *   - `message.timestamp.type` specifies the message timestamp type. \\`CreateTime\\` indicates the timestamp that is specified by the producer when the message is sent. If no timestamp is specified, the time when the message is created on the client is used. \\`LogAppendTime\\` indicates the time when the message is stored on the server. Valid values: \\`CreateTime\\` and \\`LogAppendTime\\`.
   * 
   *   - `message.timestamp.difference.max.ms` specifies the maximum allowed difference between the timestamp of the server that receives the message and the timestamp specified in the message. If \\`message.timestamp.type\\` is set to \\`CreateTime\\` and the time difference exceeds this threshold, **the message is rejected**. This configuration does not take effect if \\`message.timestamp.type\\` is set to \\`LogAppendTime\\`.
   * 
   * - The following configurations are supported for reserved instances:
   * 
   *   - `retention.ms` specifies the message retention period. The value must be a string. The value must be in the range of 3,600,000 to 31,536,000,000.
   * 
   *   - `max.message.bytes` specifies the maximum message size. The value must be a string. The value must be in the range of 1,048,576 to 10,485,760.
   * 
   *   - `message.timestamp.type` specifies the message timestamp type. \\`CreateTime\\` indicates the timestamp that is specified by the producer when the message is sent. If no timestamp is specified, the time when the message is created on the client is used. \\`LogAppendTime\\` indicates the time when the message is stored on the server. Valid values: \\`CreateTime\\` and \\`LogAppendTime\\`.
   * 
   *   - `message.timestamp.difference.max.ms` specifies the maximum allowed difference between the timestamp of the server that receives the message and the timestamp specified in the message. If \\`message.timestamp.type\\` is set to \\`CreateTime\\` and the time difference exceeds this threshold, **the message is rejected**. This configuration does not take effect if \\`message.timestamp.type\\` is set to \\`LogAppendTime\\`.
   * 
   * This parameter is required.
   * 
   * @example
   * 3600000
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
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

