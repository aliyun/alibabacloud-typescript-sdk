// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersBody } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersBody";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersDeliveryOrderType } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersDeliveryOrderType";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceEndpoint } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersInstanceEndpoint";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceId } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersInstanceId";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstancePassword } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersInstancePassword";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceType } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersInstanceType";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceUsername } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersInstanceUsername";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersKeys } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersKeys";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersNetwork } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersNetwork";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersProperties } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersProperties";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersSecurityGroupId } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersSecurityGroupId";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersShardingKey } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersShardingKey";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTags } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersTags";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTopic } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersTopic";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVSwitchIds } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersVswitchIds";
import { GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVpcId } from "./GetEventStreamingResponseBodyDataSinkSinkRocketMqparametersVpcId";


export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersBody;
  deliveryOrderType?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersDeliveryOrderType;
  instanceEndpoint?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceEndpoint;
  /**
   * @remarks
   * The target service type is Message Queue for Apache RocketMQ.
   */
  instanceId?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceId;
  instancePassword?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstancePassword;
  instanceType?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceType;
  instanceUsername?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceUsername;
  /**
   * @remarks
   * The tags that are used to filter messages.
   */
  keys?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersKeys;
  network?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersNetwork;
  /**
   * @remarks
   * The tags that are used to filter messages.
   */
  properties?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersProperties;
  securityGroupId?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersSecurityGroupId;
  shardingKey?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersShardingKey;
  /**
   * @remarks
   * The tags that are used to filter messages.
   */
  tags?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTags;
  /**
   * @remarks
   * The name of the topic in the Message Queue for Apache RocketMQ instance.
   */
  topic?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTopic;
  vSwitchIds?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVSwitchIds;
  vpcId?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVpcId;
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
      body: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersBody,
      deliveryOrderType: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersDeliveryOrderType,
      instanceEndpoint: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceEndpoint,
      instanceId: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceId,
      instancePassword: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstancePassword,
      instanceType: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceType,
      instanceUsername: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceUsername,
      keys: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersKeys,
      network: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersNetwork,
      properties: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersProperties,
      securityGroupId: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersSecurityGroupId,
      shardingKey: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersShardingKey,
      tags: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTags,
      topic: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTopic,
      vSwitchIds: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVSwitchIds,
      vpcId: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVpcId,
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

