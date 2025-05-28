// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDisasterRecoveryPlansResponseBodyDataListInstancesMessageProperty } from "./ListDisasterRecoveryPlansResponseBodyDataListInstancesMessageProperty";


export class ListDisasterRecoveryPlansResponseBodyDataListInstances extends $dara.Model {
  /**
   * @remarks
   * Authentication method
   * 
   * @example
   * NO_AUTH
   */
  authType?: string;
  /**
   * @remarks
   * Endpoint URL
   * 
   * @example
   * xxx
   */
  endpointUrl?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * rmq-cn-ot93rbxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance role
   * 
   * @example
   * ACTIVE
   */
  instanceRole?: string;
  /**
   * @remarks
   * Instance type
   *   - ALIYUN_ROCKETMQ: Alibaba Cloud instance
   *   - EXTERNAL_ROCKETMQ: External instance, open-source instance, open-source cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * Message property
   */
  messageProperty?: ListDisasterRecoveryPlansResponseBodyDataListInstancesMessageProperty;
  /**
   * @remarks
   * Network type
   * 
   * @example
   * TCP_INTERNET
   */
  networkType?: string;
  /**
   * @remarks
   * Authentication password
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * The region where the instance is located
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Security group ID
   * 
   * @example
   * sg-bp17hpmgz9******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Authentication username
   * 
   * @example
   * xxx
   */
  username?: string;
  /**
   * @remarks
   * VSwitch ID
   * 
   * @example
   * vsw-uf6gwtbn6etadpv******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-bp13docqysrgxtbxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      endpointUrl: 'endpointUrl',
      instanceId: 'instanceId',
      instanceRole: 'instanceRole',
      instanceType: 'instanceType',
      messageProperty: 'messageProperty',
      networkType: 'networkType',
      password: 'password',
      regionId: 'regionId',
      securityGroupId: 'securityGroupId',
      username: 'username',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      endpointUrl: 'string',
      instanceId: 'string',
      instanceRole: 'string',
      instanceType: 'string',
      messageProperty: ListDisasterRecoveryPlansResponseBodyDataListInstancesMessageProperty,
      networkType: 'string',
      password: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      username: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.messageProperty && typeof (this.messageProperty as any).validate === 'function') {
      (this.messageProperty as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

