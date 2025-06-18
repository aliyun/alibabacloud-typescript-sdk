// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersBody } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersBody";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersDeliveryOrderType";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersInstanceEndpoint";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceId } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersInstanceId";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersInstancePassword";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceType } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersInstanceType";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersInstanceUsername";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersKeys } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersKeys";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersNetwork } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersNetwork";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersProperties } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersProperties";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersSecurityGroupId";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersShardingKey } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersShardingKey";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersTags } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersTags";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersTopic } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersTopic";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersVswitchIds";
import { UpdateEventStreamingRequestSinkSinkRocketMQParametersVpcId } from "./UpdateEventStreamingRequestSinkSinkRocketMqparametersVpcId";


export class UpdateEventStreamingRequestSinkSinkRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message body.
   */
  body?: UpdateEventStreamingRequestSinkSinkRocketMQParametersBody;
  /**
   * @remarks
   * The type of the message delivery order. This parameter is optional. Default value: Concurrently.
   */
  deliveryOrderType?: UpdateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType;
  /**
   * @remarks
   * The endpoint that is used to access the instance.
   */
  instanceEndpoint?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance.
   */
  instanceId?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceId;
  /**
   * @remarks
   * The password that is used to access the instance.
   */
  instancePassword?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword;
  /**
   * @remarks
   * The instance type.
   */
  instanceType?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceType;
  /**
   * @remarks
   * The username that is used to access the instance.
   */
  instanceUsername?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername;
  /**
   * @remarks
   * The keys that you want to use to filter messages.
   */
  keys?: UpdateEventStreamingRequestSinkSinkRocketMQParametersKeys;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   PublicNetwork
   * *   PrivateNetwork
   */
  network?: UpdateEventStreamingRequestSinkSinkRocketMQParametersNetwork;
  /**
   * @remarks
   * The attributes that you want to use to filter messages.
   */
  properties?: UpdateEventStreamingRequestSinkSinkRocketMQParametersProperties;
  /**
   * @remarks
   * The ID of the security group.
   */
  securityGroupId?: UpdateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId;
  /**
   * @remarks
   * The sharding key.
   * 
   * >  If you set DeliveryOrderType to Orderly, this parameter is required. If you specify ApsaraMQ for RocketMQ as the event source, you can leave this parameter empty. In this case, the combined value of BrokerName and QueueId is used as the sharding key.
   */
  shardingKey?: UpdateEventStreamingRequestSinkSinkRocketMQParametersShardingKey;
  /**
   * @remarks
   * The tags that you want to use to filter messages.
   */
  tags?: UpdateEventStreamingRequestSinkSinkRocketMQParametersTags;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for RocketMQ instance.
   */
  topic?: UpdateEventStreamingRequestSinkSinkRocketMQParametersTopic;
  /**
   * @remarks
   * The vSwitch ID.
   */
  vSwitchIds?: UpdateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   */
  vpcId?: UpdateEventStreamingRequestSinkSinkRocketMQParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      deliveryOrderType: 'DeliveryOrderType',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instancePassword: 'InstancePassword',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      keys: 'Keys',
      network: 'Network',
      properties: 'Properties',
      securityGroupId: 'SecurityGroupId',
      shardingKey: 'ShardingKey',
      tags: 'Tags',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateEventStreamingRequestSinkSinkRocketMQParametersBody,
      deliveryOrderType: UpdateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType,
      instanceEndpoint: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint,
      instanceId: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceId,
      instancePassword: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword,
      instanceType: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceType,
      instanceUsername: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername,
      keys: UpdateEventStreamingRequestSinkSinkRocketMQParametersKeys,
      network: UpdateEventStreamingRequestSinkSinkRocketMQParametersNetwork,
      properties: UpdateEventStreamingRequestSinkSinkRocketMQParametersProperties,
      securityGroupId: UpdateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId,
      shardingKey: UpdateEventStreamingRequestSinkSinkRocketMQParametersShardingKey,
      tags: UpdateEventStreamingRequestSinkSinkRocketMQParametersTags,
      topic: UpdateEventStreamingRequestSinkSinkRocketMQParametersTopic,
      vSwitchIds: UpdateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds,
      vpcId: UpdateEventStreamingRequestSinkSinkRocketMQParametersVpcId,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.deliveryOrderType && typeof (this.deliveryOrderType as any).validate === 'function') {
      (this.deliveryOrderType as any).validate();
    }
    if(this.instanceEndpoint && typeof (this.instanceEndpoint as any).validate === 'function') {
      (this.instanceEndpoint as any).validate();
    }
    if(this.instanceId && typeof (this.instanceId as any).validate === 'function') {
      (this.instanceId as any).validate();
    }
    if(this.instancePassword && typeof (this.instancePassword as any).validate === 'function') {
      (this.instancePassword as any).validate();
    }
    if(this.instanceType && typeof (this.instanceType as any).validate === 'function') {
      (this.instanceType as any).validate();
    }
    if(this.instanceUsername && typeof (this.instanceUsername as any).validate === 'function') {
      (this.instanceUsername as any).validate();
    }
    if(this.keys && typeof (this.keys as any).validate === 'function') {
      (this.keys as any).validate();
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.securityGroupId && typeof (this.securityGroupId as any).validate === 'function') {
      (this.securityGroupId as any).validate();
    }
    if(this.shardingKey && typeof (this.shardingKey as any).validate === 'function') {
      (this.shardingKey as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.topic && typeof (this.topic as any).validate === 'function') {
      (this.topic as any).validate();
    }
    if(this.vSwitchIds && typeof (this.vSwitchIds as any).validate === 'function') {
      (this.vSwitchIds as any).validate();
    }
    if(this.vpcId && typeof (this.vpcId as any).validate === 'function') {
      (this.vpcId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

