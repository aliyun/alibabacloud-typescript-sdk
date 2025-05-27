// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingRequestSourceSourceKafkaParameters extends $dara.Model {
  /**
   * @remarks
   * The group ID of the consumer that subscribes to the topic.
   * 
   * @example
   * DEFAULT_GROUP
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for Kafka instance.
   * 
   * @example
   * i-8vbh4a5b9yfhgkkzm98f
   */
  instanceId?: string;
  /**
   * @remarks
   * The network setting. Default value: Default. The value PublicNetwork specifies a virtual private cloud (VPC).
   * 
   * @example
   * Default
   */
  network?: string;
  /**
   * @remarks
   * The offset from which messages are consumed.
   * 
   * @example
   * latest
   */
  offsetReset?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for Kafka instance resides.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group to which the ApsaraMQ for Kafka instance belongs.
   * 
   * @example
   * sg-uf6jcm3y5hcs7hklytxh
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for Kafka instance.
   * 
   * @example
   * topic_empower_1641539400786
   */
  topic?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the ApsaraMQ for Kafka instance is associated.
   * 
   * @example
   * vsw-wz9t1l1e8eu2omwjazmtm
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The encoding or decoding method. Valid values: Json, Text, and Binary. The value Json specifies that binary data is decoded into strings based on UTF-8 encoding and then parsed into the JSON format. The value Text specifies that binary data is decoded into strings based on UTF-8 encoding and then put into the payload. The value Binary specifies that binary data is encoded into strings based on Base64 encoding and then put into the payload.
   * 
   * @example
   * Text
   */
  valueDataType?: string;
  /**
   * @remarks
   * The ID of the VPC to which the ApsaraMQ for Kafka instance belongs.
   * 
   * @example
   * vpc-2ze6p0o345nykmekxtuop
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      network: 'Network',
      offsetReset: 'OffsetReset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      valueDataType: 'ValueDataType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      network: 'string',
      offsetReset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      valueDataType: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

