// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventStreamingResponseBodyDataSourceSourceApacheRocketMQCheckpointParameters extends $dara.Model {
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @remarks
   * The ID of the Apache RocketMQ instance.
   * 
   * @example
   * MQ_INST_164901546557****_BAAN****
   */
  instanceId?: string;
  /**
   * @example
   * 123456
   */
  instancePassword?: string;
  /**
   * @example
   * admin
   */
  instanceUsername?: string;
  /**
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * sg-mw43*****
   */
  securityGroupId?: string;
  topics?: string[];
  /**
   * @example
   * vsw-dwaafds****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-adw1awdw*****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instancePassword: 'InstancePassword',
      instanceUsername: 'InstanceUsername',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topics: 'Topics',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceEndpoint: 'string',
      instanceId: 'string',
      instancePassword: 'string',
      instanceUsername: 'string',
      networkType: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      topics: { 'type': 'array', 'itemType': 'string' },
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

