// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceRocketMQParameters extends $dara.Model {
  /**
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @example
   * Tag
   */
  filterType?: string;
  /**
   * @example
   * GID_group1
   */
  groupID?: string;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @example
   * MQ_INST_164901546557****_BAAN****
   */
  instanceId?: string;
  /**
   * @example
   * PrivateNetwork
   */
  instanceNetwork?: string;
  /**
   * @example
   * 123
   */
  instancePassword?: string;
  /**
   * @example
   * sg-hp35r2hc3a3sv8q2****
   */
  instanceSecurityGroupId?: string;
  /**
   * @example
   * Cloud_5
   */
  instanceType?: string;
  /**
   * @example
   * 6W0xz2uPfiwp****
   */
  instanceUsername?: string;
  /**
   * @example
   * vsw-uf6gwtbn6etadpvz7****
   */
  instanceVSwitchIds?: string;
  /**
   * @example
   * vpc-uf6of9452b2pba82c****
   */
  instanceVpcId?: string;
  /**
   * @example
   * CONSUME_FROM_TIMESTAMP
   */
  offset?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * test
   */
  tag?: string;
  /**
   * @example
   * 1636597951964
   */
  timestamp?: number;
  /**
   * @example
   * myTopic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      filterType: 'FilterType',
      groupID: 'GroupID',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instanceNetwork: 'InstanceNetwork',
      instancePassword: 'InstancePassword',
      instanceSecurityGroupId: 'InstanceSecurityGroupId',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      instanceVSwitchIds: 'InstanceVSwitchIds',
      instanceVpcId: 'InstanceVpcId',
      offset: 'Offset',
      regionId: 'RegionId',
      tag: 'Tag',
      timestamp: 'Timestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      filterType: 'string',
      groupID: 'string',
      instanceEndpoint: 'string',
      instanceId: 'string',
      instanceNetwork: 'string',
      instancePassword: 'string',
      instanceSecurityGroupId: 'string',
      instanceType: 'string',
      instanceUsername: 'string',
      instanceVSwitchIds: 'string',
      instanceVpcId: 'string',
      offset: 'string',
      regionId: 'string',
      tag: 'string',
      timestamp: 'number',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

