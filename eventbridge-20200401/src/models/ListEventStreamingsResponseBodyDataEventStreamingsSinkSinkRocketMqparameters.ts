// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersBody } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersBody";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersDeliveryOrderType } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersDeliveryOrderType";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceEndpoint } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersInstanceEndpoint";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceId } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersInstanceId";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstancePassword } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersInstancePassword";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceType } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersInstanceType";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceUsername } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersInstanceUsername";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersKeys } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersKeys";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersNetwork } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersNetwork";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersProperties } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersProperties";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersSecurityGroupId } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersSecurityGroupId";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersShardingKey } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersShardingKey";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTags } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersTags";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTopic } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersTopic";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVSwitchIds } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersVswitchIds";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVpcId } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMqparametersVpcId";


export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersBody;
  deliveryOrderType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersDeliveryOrderType;
  instanceEndpoint?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceEndpoint;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance.
   */
  instanceId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceId;
  instancePassword?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstancePassword;
  instanceType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceType;
  instanceUsername?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceUsername;
  /**
   * @remarks
   * The keys that are used to filter messages.
   */
  keys?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersKeys;
  network?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersNetwork;
  /**
   * @remarks
   * The properties that are used to filter messages.
   */
  properties?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersProperties;
  securityGroupId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersSecurityGroupId;
  shardingKey?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersShardingKey;
  /**
   * @remarks
   * The tags that are used to filter messages.
   */
  tags?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTags;
  /**
   * @remarks
   * The topic on the ApsaraMQ for RocketMQ instance.
   */
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTopic;
  vSwitchIds?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVSwitchIds;
  vpcId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVpcId;
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
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersBody,
      deliveryOrderType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersDeliveryOrderType,
      instanceEndpoint: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceEndpoint,
      instanceId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceId,
      instancePassword: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstancePassword,
      instanceType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceType,
      instanceUsername: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceUsername,
      keys: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersKeys,
      network: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersNetwork,
      properties: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersProperties,
      securityGroupId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersSecurityGroupId,
      shardingKey: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersShardingKey,
      tags: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTags,
      topic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTopic,
      vSwitchIds: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVSwitchIds,
      vpcId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVpcId,
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

