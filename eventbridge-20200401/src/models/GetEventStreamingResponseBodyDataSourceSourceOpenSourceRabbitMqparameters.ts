// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventStreamingResponseBodyDataSourceSourceOpenSourceRabbitMQParameters extends $dara.Model {
  /**
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @example
   * Json
   */
  bodyDataType?: string;
  /**
   * @example
   * 192.168.1.100:5672
   */
  endpoint?: string;
  /**
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @example
   * ******
   */
  password?: string;
  /**
   * @example
   * demo
   */
  queueName?: string;
  /**
   * @example
   * sg-2ze65razphjfz3******
   */
  securityGroupId?: string;
  /**
   * @example
   * admin
   */
  username?: string;
  /**
   * @example
   * vsw-uf65zhil5oukof5******
   */
  vSwitchIds?: string;
  /**
   * @example
   * eb-connect
   */
  virtualHostName?: string;
  /**
   * @example
   * vpc-bp1vllc1lnw1v657******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      bodyDataType: 'BodyDataType',
      endpoint: 'Endpoint',
      networkType: 'NetworkType',
      password: 'Password',
      queueName: 'QueueName',
      securityGroupId: 'SecurityGroupId',
      username: 'Username',
      vSwitchIds: 'VSwitchIds',
      virtualHostName: 'VirtualHostName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      bodyDataType: 'string',
      endpoint: 'string',
      networkType: 'string',
      password: 'string',
      queueName: 'string',
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

