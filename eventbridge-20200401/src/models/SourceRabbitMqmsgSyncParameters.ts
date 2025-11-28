// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceRabbitMQMsgSyncParameters extends $dara.Model {
  bodyDataType?: string;
  endpoint?: string;
  instanceId?: string;
  instanceType?: string;
  networkType?: string;
  orderConsume?: string;
  password?: string;
  prefetchCount?: string;
  securityGroupId?: string;
  username?: string;
  vSwitchIds?: string;
  virtualHostName?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataType: 'BodyDataType',
      endpoint: 'Endpoint',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      orderConsume: 'OrderConsume',
      password: 'Password',
      prefetchCount: 'PrefetchCount',
      securityGroupId: 'SecurityGroupId',
      username: 'Username',
      vSwitchIds: 'VSwitchIds',
      virtualHostName: 'VirtualHostName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataType: 'string',
      endpoint: 'string',
      instanceId: 'string',
      instanceType: 'string',
      networkType: 'string',
      orderConsume: 'string',
      password: 'string',
      prefetchCount: 'string',
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

