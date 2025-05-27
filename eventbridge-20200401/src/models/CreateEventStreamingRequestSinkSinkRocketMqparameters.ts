// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingRequestSinkSinkRocketMQParametersBody } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersBody";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersDeliveryOrderType";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersInstanceEndpoint";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceId } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersInstanceId";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersInstancePassword";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceType } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersInstanceType";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersInstanceUsername";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersKeys } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersKeys";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersNetwork } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersNetwork";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersProperties } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersProperties";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersSecurityGroupId";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersShardingKey } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersShardingKey";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersTags } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersTags";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersTopic } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersTopic";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersVswitchIds";
import { CreateEventStreamingRequestSinkSinkRocketMQParametersVpcId } from "./CreateEventStreamingRequestSinkSinkRocketMqparametersVpcId";


export class CreateEventStreamingRequestSinkSinkRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: CreateEventStreamingRequestSinkSinkRocketMQParametersBody;
  deliveryOrderType?: CreateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType;
  /**
   * @remarks
   * The endpoint that you want to use to access the ApsaraMQ for RocketMQ instance.
   */
  instanceEndpoint?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance.
   */
  instanceId?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceId;
  /**
   * @remarks
   * The password that you want to use to access the ApsaraMQ for RocketMQ instance.
   */
  instancePassword?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword;
  /**
   * @remarks
   * The type of the ApsaraMQ for RocketMQ instance.
   */
  instanceType?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceType;
  /**
   * @remarks
   * The username that you want to use to access the ApsaraMQ for RocketMQ instance.
   */
  instanceUsername?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername;
  /**
   * @remarks
   * The keys that you want to use to filter messages.
   */
  keys?: CreateEventStreamingRequestSinkSinkRocketMQParametersKeys;
  /**
   * @remarks
   * The network type.
   * 
   * *   PublicNetwork
   * *   PrivateNetwork
   */
  network?: CreateEventStreamingRequestSinkSinkRocketMQParametersNetwork;
  /**
   * @remarks
   * The properties that you want to use to filter messages.
   */
  properties?: CreateEventStreamingRequestSinkSinkRocketMQParametersProperties;
  /**
   * @remarks
   * The ID of the security group to which the ApsaraMQ for RocketMQ instance belongs.
   */
  securityGroupId?: CreateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId;
  shardingKey?: CreateEventStreamingRequestSinkSinkRocketMQParametersShardingKey;
  /**
   * @remarks
   * The tags that you want to use to filter messages.
   */
  tags?: CreateEventStreamingRequestSinkSinkRocketMQParametersTags;
  /**
   * @remarks
   * The name of the topic on the ApsaraMQ for RocketMQ instance.
   */
  topic?: CreateEventStreamingRequestSinkSinkRocketMQParametersTopic;
  /**
   * @remarks
   * The ID of the vSwitch with which the ApsaraMQ for RocketMQ instance is associated.
   */
  vSwitchIds?: CreateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds;
  /**
   * @remarks
   * The ID of the VPC to which the ApsaraMQ for RocketMQ instance belongs.
   */
  vpcId?: CreateEventStreamingRequestSinkSinkRocketMQParametersVpcId;
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
      body: CreateEventStreamingRequestSinkSinkRocketMQParametersBody,
      deliveryOrderType: CreateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType,
      instanceEndpoint: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint,
      instanceId: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceId,
      instancePassword: CreateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword,
      instanceType: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceType,
      instanceUsername: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername,
      keys: CreateEventStreamingRequestSinkSinkRocketMQParametersKeys,
      network: CreateEventStreamingRequestSinkSinkRocketMQParametersNetwork,
      properties: CreateEventStreamingRequestSinkSinkRocketMQParametersProperties,
      securityGroupId: CreateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId,
      shardingKey: CreateEventStreamingRequestSinkSinkRocketMQParametersShardingKey,
      tags: CreateEventStreamingRequestSinkSinkRocketMQParametersTags,
      topic: CreateEventStreamingRequestSinkSinkRocketMQParametersTopic,
      vSwitchIds: CreateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds,
      vpcId: CreateEventStreamingRequestSinkSinkRocketMQParametersVpcId,
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

