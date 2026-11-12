// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GroupLabels extends $dara.Model {
  /**
   * @remarks
   * The label key.
   * 
   * @example
   * key1
   */
  labelKey?: string;
  /**
   * @remarks
   * The label value.
   * 
   * @example
   * value1
   */
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupNetwork extends $dara.Model {
  /**
   * @remarks
   * The dedicated gateway ID.
   * 
   * @example
   * gw-248xxxxxxvlkhtbrda
   */
  gatewayId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-584xxxxxx7h08llvoww5tv5gl
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1xxxxxxwmssgq28gye8
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1xxxxxx0qrykjr9b
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
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

export class Group extends $dara.Model {
  /**
   * @remarks
   * The access token for the traffic ingress of the service group.
   * 
   * @example
   * MzJiMDI5MDliODc0MTlkYmI0ZDhlYmExYjczYTIyZTE3Zm********
   */
  accessToken?: string;
  /**
   * @remarks
   * The UID of the account that created the service group.
   * 
   * @example
   * 20123*******
   */
  callerUid?: string;
  /**
   * @remarks
   * The ID of the cluster where the service group is located.
   * 
   * @example
   * cn-shanghai
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the service group was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-05-19T14:19:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The public endpoint of the service group.
   * 
   * @example
   * http://1110*****.cn-hangzhou.pai-eas.aliyuncs.com/api/predict/test_group
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The internal endpoint of the service group.
   * 
   * @example
   * http://1110*****.vpc.cn-hangzhou.pai-eas.aliyuncs.com/api/predict/test_group
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * The list of labels for the service group.
   */
  labels?: GroupLabels[];
  /**
   * @remarks
   * The name of the service group.
   * 
   * @example
   * foo
   */
  name?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) configuration of the service group.
   */
  network?: GroupNetwork;
  /**
   * @remarks
   * The UID of the parent account that created the service group.
   * 
   * @example
   * 11234*******
   */
  parentUid?: string;
  /**
   * @remarks
   * The queue services included in the service group.
   * 
   * @example
   * qservice
   */
  queueService?: string;
  /**
   * @remarks
   * The traffic mode.
   * 
   * @example
   * auto
   */
  trafficMode?: string;
  /**
   * @remarks
   * The time when the service group was updated. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-29T11:13:20Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      callerUid: 'CallerUid',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      labels: 'Labels',
      name: 'Name',
      network: 'Network',
      parentUid: 'ParentUid',
      queueService: 'QueueService',
      trafficMode: 'TrafficMode',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      callerUid: 'string',
      clusterId: 'string',
      createTime: 'string',
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      labels: { 'type': 'array', 'itemType': GroupLabels },
      name: 'string',
      network: GroupNetwork,
      parentUid: 'string',
      queueService: 'string',
      trafficMode: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

