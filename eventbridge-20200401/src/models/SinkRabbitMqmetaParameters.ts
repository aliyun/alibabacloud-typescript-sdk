// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkRabbitMQMetaParameters extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the ApsaraMQ for RabbitMQ cluster.
   * 
   * @example
   * rabbitmq-cn-a1b2c3d4e5f-cn-hangzhou-vpc.amqp.aliyuncs.com
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
   * The type of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * Cloud
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type used to connect to the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The password used to connect to the ApsaraMQ for RabbitMQ cluster.
   * 
   * @example
   * yourPassword
   */
  password?: string;
  /**
   * @remarks
   * The ID of the security group to which the servers of the ApsaraMQ for RabbitMQ cluster belong.
   * 
   * @example
   * sg-a1b2c3d4e5f6g7h8i9j0
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The username used to connect to the ApsaraMQ for RabbitMQ cluster.
   * 
   * @example
   * admin
   */
  username?: string;
  /**
   * @remarks
   * The IDs of the vSwitches in the VPC where the ApsaraMQ for RabbitMQ cluster is deployed.
   * 
   * @example
   * vsw-a1b2c3d4e5f6g7h8i9j0k
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The name of the virtual host (vhost) in the ApsaraMQ for RabbitMQ cluster.
   * 
   * @example
   * test-001
   */
  virtualHostName?: string;
  /**
   * @remarks
   * The ID of the VPC where the ApsaraMQ for RabbitMQ cluster is deployed.
   * 
   * @example
   * vpc-a1b2c3d4e5f6g7h8i9j0k
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      password: 'Password',
      securityGroupId: 'SecurityGroupId',
      username: 'Username',
      vSwitchIds: 'VSwitchIds',
      virtualHostName: 'VirtualHostName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      instanceId: 'string',
      instanceType: 'string',
      networkType: 'string',
      password: 'string',
      securityGroupId: 'string',
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

