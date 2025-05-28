// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDisasterRecoveryPlanResponseBodyDataInstancesMessageProperty } from "./GetDisasterRecoveryPlanResponseBodyDataInstancesMessageProperty";


export class GetDisasterRecoveryPlanResponseBodyDataInstances extends $dara.Model {
  /**
   * @remarks
   * Authentication method. Not required for instanceType of ALIYUN_ROCKETMQ and version 4.0
   *   - NO_AUTH: No authentication required
   *   - ACL_AUTH: ACL authentication
   * 
   * @example
   * ACL_AUTH
   */
  authType?: string;
  /**
   * @remarks
   * Endpoint URL, not required for instanceType of ALIYUN_ROCKETMQ, but required for EXTERNAL_ROCKETMQ
   * 
   * @example
   * xxx
   */
  endpointUrl?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-gpz3qtcdxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance role, either primary or secondary 
   *   - ACTIVE: Primary
   *   - PASSIVE: Secondary
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
   * Message filtering properties. When messages are synchronized to the target cluster, this property will be automatically added for SQL filtering during message consumption.
   */
  messageProperty?: GetDisasterRecoveryPlanResponseBodyDataInstancesMessageProperty;
  /**
   * @remarks
   * Network type, not required for instanceType of ALIYUN_ROCKETMQ, but required for EXTERNAL_ROCKETMQ Parameter values are as follows:
   *   - TCP_INTERNET: TCP public network
   *   - TCP_VPC: TCP VPC (Virtual Private Cloud)
   * 
   * @example
   * TCP_INTERNET
   */
  networkType?: string;
  /**
   * @remarks
   * Authentication password, required when authType is ACL_AUTH. Not required for instanceType of ALIYUN_ROCKETMQ
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Security group ID, required only when the instanceType is EXTERNAL_ROCKETMQ and networkType is TCP_VPC.
   * 
   * @example
   * sg-bp17hpmgz9******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Authentication username, required when authType is ACL_AUTH
   * 
   * @example
   * xxx
   */
  username?: string;
  /**
   * @remarks
   * The ID of the switch associated with the instance, required only when the instanceType is EXTERNAL_ROCKETMQ and networkType is TCP_VPC.
   * 
   * @example
   * vsw-uf6gwtbn6etadpv******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the private network associated with the created instance. The instanceType instance type is only EXTERNAL_ROCKETMQ. It is required when the networkType is TCP_VPC.
   * 
   * @example
   * vpc-wz9qt50xhtj9krb******
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
      messageProperty: GetDisasterRecoveryPlanResponseBodyDataInstancesMessageProperty,
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

