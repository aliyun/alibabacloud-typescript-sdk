// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GroupLabels extends $dara.Model {
  labelKey?: string;
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
  gatewayId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
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
   * The access token for the traffic entry of the service group.
   * 
   * @example
   * MzJiMDI5MDliODc0MTlkYmI0ZDhlYmExYjczYTIyZTE3Zm********
   */
  accessToken?: string;
  callerUid?: string;
  /**
   * @remarks
   * The region in which the service group resides.
   * 
   * @example
   * cn-shanghai
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the service group was created. The time is in UTC.
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
  labels?: GroupLabels[];
  /**
   * @remarks
   * The name of the service group.
   * 
   * @example
   * foo
   */
  name?: string;
  network?: GroupNetwork;
  parentUid?: string;
  /**
   * @remarks
   * The queue services contained in the service group.
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
   * The time when the service group was last updated. The time is in UTC.
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

