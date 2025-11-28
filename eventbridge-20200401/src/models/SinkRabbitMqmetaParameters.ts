// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkRabbitMQMetaParameters extends $dara.Model {
  endpoint?: string;
  instanceId?: string;
  instanceType?: string;
  networkType?: string;
  password?: string;
  securityGroupId?: string;
  username?: string;
  vSwitchIds?: string;
  virtualHostName?: string;
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

