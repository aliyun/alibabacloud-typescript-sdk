// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayResponseBodyDataElasticPolicyTimePolicyList extends $dara.Model {
  /**
   * @remarks
   * The expected number of replicas.
   * 
   * @example
   * 2
   */
  desiredReplica?: number;
  /**
   * @remarks
   * The end time in the HH:mm format (24-hour clock).
   * 
   * @example
   * 18:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time in the HH:mm format (24-hour clock).
   * 
   * @example
   * 16:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desiredReplica: 'DesiredReplica',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredReplica: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataElasticPolicy extends $dara.Model {
  /**
   * @remarks
   * The auto-scaling type. Valid values:
   * 
   * - CronHPA: Time-based scaling.
   * 
   * @example
   * CronHPA
   */
  elasticType?: string;
  /**
   * @remarks
   * The maximum number of instances for auto-scaling, which is used for horizontal scaling.
   * 
   * @example
   * 5
   */
  maxReplica?: number;
  /**
   * @remarks
   * The time-based scaling policy.
   */
  timePolicyList?: GetGatewayResponseBodyDataElasticPolicyTimePolicyList[];
  static names(): { [key: string]: string } {
    return {
      elasticType: 'ElasticType',
      maxReplica: 'MaxReplica',
      timePolicyList: 'TimePolicyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticType: 'string',
      maxReplica: 'number',
      timePolicyList: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataElasticPolicyTimePolicyList },
    };
  }

  validate() {
    if(Array.isArray(this.timePolicyList)) {
      $dara.Model.validateArray(this.timePolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataLogConfigDetails extends $dara.Model {
  /**
   * @remarks
   * Specifies whether log delivery is enabled.
   * 
   * @example
   * true
   */
  logEnabled?: boolean;
  /**
   * @remarks
   * The Logstore name.
   * 
   * @example
   * mse_access_log
   */
  logStoreName?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * k8s-log-c173117256e934a96b7fefdf2ef8a8057
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logEnabled: 'LogEnabled',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEnabled: 'boolean',
      logStoreName: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataXtraceDetails extends $dara.Model {
  /**
   * @remarks
   * The XTrace sampling rate.
   * 
   * @example
   * 10
   */
  sample?: number;
  /**
   * @remarks
   * Specifies whether XTrace sampling is enabled.
   * 
   * @example
   * true
   */
  traceOn?: boolean;
  static names(): { [key: string]: string } {
    return {
      sample: 'Sample',
      traceOn: 'TraceOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sample: 'number',
      traceOn: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values: subscription and pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether auto-scaling is enabled.
   * 
   * @example
   * true
   */
  elastic?: boolean;
  /**
   * @remarks
   * The auto-scaling policy.
   */
  elasticPolicy?: GetGatewayResponseBodyDataElasticPolicy;
  /**
   * @remarks
   * The number of auto-scaling replicas.
   * 
   * @example
   * 1
   */
  elasticReplica?: number;
  /**
   * @remarks
   * The auto-scaling type. Valid values:
   * 
   * * CronHPA: Time-based scaling.
   * 
   * @example
   * CronHPA
   */
  elasticType?: string;
  /**
   * @remarks
   * The expiration time of the gateway.
   * 
   * @example
   * 2021-08-01 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597cd4a9****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The time when the gateway was created. The time is in GMT and represents the local time of the user.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 12
   */
  id?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The log configuration.
   */
  logConfigDetails?: GetGatewayResponseBodyDataLogConfigDetails;
  /**
   * @remarks
   * The resource tags.
   * 
   * @example
   * {"TagKey":"TagValue"}
   */
  mseTag?: string;
  /**
   * @remarks
   * The gateway name.
   * 
   * @example
   * DEFAULT
   */
  name?: string;
  /**
   * @remarks
   * The ID of the primary user who created the gateway.
   * 
   * @example
   * 1231254
   */
  primaryUser?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The number of gateway replicas.
   * 
   * @example
   * 1
   */
  replica?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm34x43l*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group.
   * 
   * @example
   * sg-bp11ufzqn6mmb8dtzz82
   */
  securityGroup?: string;
  /**
   * @remarks
   * The gateway specifications.
   * 
   * @example
   * MSE_GTW_16_32_200_c
   */
  spec?: string;
  /**
   * @remarks
   * The result status of the data integration synchronization node. Valid values:
   * * 0: Creating.
   * * 1: Creation failed.
   * * 2: Running.
   * * 3: Modifying.
   * * 4: Scaling in.
   * * 6: Scaling out.
   * * 8: delete.
   * * 10: Restarting.
   * * 11: Rebuilding.
   * * 12: Upgrading.
   * * 13: Upgrade failed.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The status description.
   * 
   * @example
   * Restarting
   */
  statusDesc?: string;
  /**
   * @remarks
   * The total number of replicas, including auto-scaling replicas.
   * 
   * @example
   * 3
   */
  totalReplica?: number;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1328cm01m6uel42b5zb
   */
  vpc?: string;
  /**
   * @remarks
   * The vSwitch.
   * 
   * @example
   * vsw-bp18zeqxx6mpuq843z4n5
   */
  vswitch?: string;
  /**
   * @remarks
   * The secondary vSwitch.
   * 
   * @example
   * vpc-bp1j6ivhav15ve7q54kq2
   */
  vswitch2?: string;
  /**
   * @remarks
   * The XTrace details.
   */
  xtraceDetails?: GetGatewayResponseBodyDataXtraceDetails;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      elastic: 'Elastic',
      elasticPolicy: 'ElasticPolicy',
      elasticReplica: 'ElasticReplica',
      elasticType: 'ElasticType',
      endDate: 'EndDate',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      logConfigDetails: 'LogConfigDetails',
      mseTag: 'MseTag',
      name: 'Name',
      primaryUser: 'PrimaryUser',
      region: 'Region',
      replica: 'Replica',
      resourceGroupId: 'ResourceGroupId',
      securityGroup: 'SecurityGroup',
      spec: 'Spec',
      status: 'Status',
      statusDesc: 'StatusDesc',
      totalReplica: 'TotalReplica',
      vpc: 'Vpc',
      vswitch: 'Vswitch',
      vswitch2: 'Vswitch2',
      xtraceDetails: 'XtraceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      elastic: 'boolean',
      elasticPolicy: GetGatewayResponseBodyDataElasticPolicy,
      elasticReplica: 'number',
      elasticType: 'string',
      endDate: 'string',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      logConfigDetails: GetGatewayResponseBodyDataLogConfigDetails,
      mseTag: 'string',
      name: 'string',
      primaryUser: 'string',
      region: 'string',
      replica: 'number',
      resourceGroupId: 'string',
      securityGroup: 'string',
      spec: 'string',
      status: 'number',
      statusDesc: 'string',
      totalReplica: 'number',
      vpc: 'string',
      vswitch: 'string',
      vswitch2: 'string',
      xtraceDetails: GetGatewayResponseBodyDataXtraceDetails,
    };
  }

  validate() {
    if(this.elasticPolicy && typeof (this.elasticPolicy as any).validate === 'function') {
      (this.elasticPolicy as any).validate();
    }
    if(this.logConfigDetails && typeof (this.logConfigDetails as any).validate === 'function') {
      (this.logConfigDetails as any).validate();
    }
    if(this.xtraceDetails && typeof (this.xtraceDetails as any).validate === 'function') {
      (this.xtraceDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The gateway information.
   */
  data?: GetGatewayResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message that indicates whether the request is successful.
   * 
   * @example
   * The request is processed successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C96CDF8-9E6C-5AB6-B83C-8F87A10117E6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - `true`: The request is successful.
   * - `false`: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetGatewayResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

