// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceRabbitMQMetaParameters extends $dara.Model {
  /**
   * @remarks
   * The access endpoint of the RabbitMQ cluster.
   * 
   * @example
   * rabbitmq-cn-a1b2c3d4e5f-cn-hangzhou-vpc.amqp.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The added suffix.
   * 
   * @example
   * rabbitmq-cn-a1b2c3d4e5f_example_123e4567-e89b-42d3-a456-426614174000
   */
  innerNameSuffix?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ (MSMQ message queue) instance.
   * 
   * @example
   * rabbitmq-cn-a1b2c3d4e5f
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the source RabbitMQ instance.
   * 
   * @example
   * Cloud
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum number of hops allowed for message forwarding in a federation task. Messages that exceed this limit are dropped.
   * 
   * @example
   * 1
   */
  maxHops?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * Specifies whether to consume messages in order.
   * 
   * @example
   * false
   */
  orderConsume?: string;
  /**
   * @remarks
   * The password used to connect to the RabbitMQ cluster.
   * 
   * @example
   * yourPassword
   */
  password?: string;
  /**
   * @remarks
   * The regular expression used to filter exchanges.
   * 
   * @example
   * ^example_.*
   */
  regex?: string;
  /**
   * @remarks
   * The ID of the security group to which the machines of the RabbitMQ cluster belong.
   * 
   * @example
   * sg-bp1****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The type of synchronized metadata.
   * 
   * @example
   * queue
   */
  syncMetaType?: string;
  /**
   * @remarks
   * The username used to connect to the RabbitMQ cluster.
   * 
   * @example
   * admin
   */
  username?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the VPC where the RabbitMQ cluster resides.
   * 
   * @example
   * vsw-bp1****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The name of the virtual host (vhost) in the RabbitMQ cluster.
   * 
   * @example
   * test-001
   */
  virtualHostName?: string;
  /**
   * @remarks
   * The ID of the VPC where the RabbitMQ cluster resides.
   * 
   * @example
   * vpc-8vb****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      innerNameSuffix: 'InnerNameSuffix',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      maxHops: 'MaxHops',
      networkType: 'NetworkType',
      orderConsume: 'OrderConsume',
      password: 'Password',
      regex: 'Regex',
      securityGroupId: 'SecurityGroupId',
      syncMetaType: 'SyncMetaType',
      username: 'Username',
      vSwitchIds: 'VSwitchIds',
      virtualHostName: 'VirtualHostName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      innerNameSuffix: 'string',
      instanceId: 'string',
      instanceType: 'string',
      maxHops: 'string',
      networkType: 'string',
      orderConsume: 'string',
      password: 'string',
      regex: 'string',
      securityGroupId: 'string',
      syncMetaType: 'string',
      username: 'string',
      vSwitchIds: 'string',
      virtualHostName: 'string',
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

