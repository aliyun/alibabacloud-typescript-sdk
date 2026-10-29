// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceRabbitMQMsgSyncParameters extends $dara.Model {
  /**
   * @remarks
   * The data type of the message body.
   * 
   * @example
   * json
   */
  bodyDataType?: string;
  /**
   * @remarks
   * The ID of the RabbitMQ cloud migration task.
   * 
   * @example
   * 123e4567-e89b-42d3-a456-426614174000
   */
  cloudMigrationTaskId?: string;
  /**
   * @remarks
   * The address of the destination cluster.
   * 
   * @example
   * rabbitmq-cn-hangzhou-2x***.com
   */
  dstClusterHost?: string;
  /**
   * @remarks
   * The type of the destination RabbitMQ cluster.
   * 
   * @example
   * Cloud
   */
  dstClusterType?: string;
  /**
   * @remarks
   * The endpoint of the RabbitMQ cluster.
   * 
   * @example
   * 192.0.2.10
   */
  endpoint?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
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
   * SelfBuilt
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type used to connect to the source RabbitMQ instance.
   * 
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * Specifies whether SAC is enabled. Do not specify this parameter.
   * 
   * @example
   * Leave empty
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
   * The prefetch count.
   * 
   * @example
   * 2
   */
  prefetchCount?: string;
  /**
   * @remarks
   * The regular expression for matching. Do not specify this parameter.
   * 
   * @example
   * Leave empty
   */
  regex?: string;
  /**
   * @remarks
   * The ID of the security group to which the machines of the RabbitMQ cluster belong.
   * 
   * @example
   * sg-a1b2c3d4e5f6g7h8i9j0
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The address of the source cluster.
   * 
   * @example
   * rabbitmq-cn-hangzhou-2x***.com
   */
  srcClusterHost?: string;
  /**
   * @remarks
   * The type of the source RabbitMQ cluster.
   * 
   * @example
   * SelfBuilt
   */
  srcClusterType?: string;
  /**
   * @remarks
   * The type of metadata to synchronize. Do not specify this parameter.
   * 
   * @example
   * 4
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
   * The IDs of the vSwitches in the VPC where the RabbitMQ cluster is deployed.
   * 
   * @example
   * vsw-a1b2c3d4e5f6g7h8i9j0k
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
   * The ID of the VPC where the RabbitMQ cluster is deployed.
   * 
   * @example
   * vpc-a1b2c3d4e5f6g7h8i9j0k
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataType: 'BodyDataType',
      cloudMigrationTaskId: 'CloudMigrationTaskId',
      dstClusterHost: 'DstClusterHost',
      dstClusterType: 'DstClusterType',
      endpoint: 'Endpoint',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      orderConsume: 'OrderConsume',
      password: 'Password',
      prefetchCount: 'PrefetchCount',
      regex: 'Regex',
      securityGroupId: 'SecurityGroupId',
      srcClusterHost: 'SrcClusterHost',
      srcClusterType: 'SrcClusterType',
      syncMetaType: 'SyncMetaType',
      username: 'Username',
      vSwitchIds: 'VSwitchIds',
      virtualHostName: 'VirtualHostName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataType: 'string',
      cloudMigrationTaskId: 'string',
      dstClusterHost: 'string',
      dstClusterType: 'string',
      endpoint: 'string',
      instanceId: 'string',
      instanceType: 'string',
      networkType: 'string',
      orderConsume: 'string',
      password: 'string',
      prefetchCount: 'string',
      regex: 'string',
      securityGroupId: 'string',
      srcClusterHost: 'string',
      srcClusterType: 'string',
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

