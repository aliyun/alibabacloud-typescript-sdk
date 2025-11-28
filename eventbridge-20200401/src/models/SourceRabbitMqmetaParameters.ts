// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceRabbitMQMetaParameters extends $dara.Model {
  endpoint?: string;
  innerNameSuffix?: string;
  instanceId?: string;
  instanceType?: string;
  maxHops?: string;
  networkType?: string;
  orderConsume?: string;
  password?: string;
  regex?: string;
  securityGroupId?: string;
  username?: string;
  vSwitchIds?: string;
  virtualHostName?: string;
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

