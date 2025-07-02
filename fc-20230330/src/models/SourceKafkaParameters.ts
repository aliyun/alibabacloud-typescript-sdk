// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceKafkaParameters extends $dara.Model {
  /**
   * @example
   * DEFAULT_GROUP
   */
  consumerGroup?: string;
  /**
   * @example
   * r-8vb64581862c****
   */
  instanceId?: string;
  /**
   * @example
   * Default
   */
  network?: string;
  /**
   * @example
   * latest
   */
  offsetReset?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * sg-bp1iv19sp1msc7zot4****
   */
  securityGroupId?: string;
  /**
   * @example
   * popvip_center_robot_order
   */
  topic?: string;
  /**
   * @example
   * vsw-bp179l3llg3jjxwrq72****
   */
  vSwitchIds?: string;
  /**
   * @example
   * vpc-8vblalsi0vbhizr77****
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

