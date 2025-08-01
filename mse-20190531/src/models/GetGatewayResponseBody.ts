// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayResponseBodyDataElasticPolicyTimePolicyList extends $dara.Model {
  /**
   * @remarks
   * The number of expected replicas.
   * 
   * @example
   * 2
   */
  desiredReplica?: number;
  /**
   * @remarks
   * The end time of auto scale-out.
   * 
   * @example
   * 18:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of auto scale-out.
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
   * The type of auto scale-out. Valid value:
   * 
   * *   CronHPA: scale-out by time
   * 
   * @example
   * CronHPA
   */
  elasticType?: string;
  /**
   * @remarks
   * The maximum number of instances that are automatically scaled out. This parameter is used for horizontal scale-out.
   * 
   * @example
   * 5
   */
  maxReplica?: number;
  /**
   * @remarks
   * The policy of scale-out by time.
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
   * Indicates whether Log Service is activated.
   * 
   * @example
   * true
   */
  logEnabled?: boolean;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * mse_access_log
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the project.
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
   * The sampling rate of Tracing Analysis.
   * 
   * @example
   * 10
   */
  sample?: number;
  /**
   * @remarks
   * Indicates whether sampling by using Tracing Analysis is enabled.
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
   * The billing method, such as subscription or pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * Indicates whether auto scale-out is enabled.
   * 
   * @example
   * true
   */
  elastic?: boolean;
  /**
   * @remarks
   * The auto scale-out policy.
   */
  elasticPolicy?: GetGatewayResponseBodyDataElasticPolicy;
  /**
   * @remarks
   * The number of replicas that are automatically scaled out.
   * 
   * @example
   * 1
   */
  elasticReplica?: number;
  /**
   * @remarks
   * The type of auto scale-out. Valid value:
   * 
   * *   CronHPA: scale-out by time
   * 
   * @example
   * CronHPA
   */
  elasticType?: string;
  /**
   * @remarks
   * The time when the gateway expires.
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
   * The time when the gateway was created. The time is displayed in GMT. The time is the local time of the region in which the gateway resides.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the gateway was last modified.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 12
   */
  id?: number;
  /**
   * @remarks
   * The ID of the instance.
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
   * The tag of the resource.
   * 
   * @example
   * {"TagKey":"TagValue"}
   */
  mseTag?: string;
  /**
   * @remarks
   * The name of the gateway.
   * 
   * @example
   * DEFAULT
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user who created the gateway.
   * 
   * @example
   * 1231254
   */
  primaryUser?: string;
  /**
   * @remarks
   * The region ID.
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
   * 2
   */
  replica?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm34x43l*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp11ufzqn6mmb8dtzz82
   */
  securityGroup?: string;
  /**
   * @remarks
   * The specifications of the gateway.
   * 
   * @example
   * MSE_GTW_16_32_200_c
   */
  spec?: string;
  /**
   * @remarks
   * The status of the gateway. Valid values:
   * 
   * *   0: The gateway is being created.
   * *   1: The gateway fails to be created.
   * *   2: The gateway is running.
   * *   3: The gateway is changing.
   * *   4: The gateway is scaling in.
   * *   6: The gateway is scaling out.
   * *   8: The gateway is being deleted.
   * *   10: The gateway is restarting.
   * *   11: The gateway is being rebuilt.
   * *   12: The gateway is updating.
   * *   13: The gateway fails to be updated.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The description of the status.
   * 
   * @example
   * Restarting
   */
  statusDesc?: string;
  /**
   * @remarks
   * The total number of replicas, including the number of replicas that are automatically scaled out.
   * 
   * @example
   * 3
   */
  totalReplica?: number;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1328cm01m6uel42b5zb
   */
  vpc?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp18zeqxx6mpuq843z4n5
   */
  vswitch?: string;
  /**
   * @remarks
   * The ID of the secondary vSwitch.
   * 
   * @example
   * vpc-bp1j6ivhav15ve7q54kq2
   */
  vswitch2?: string;
  /**
   * @remarks
   * The details of Tracing Analysis.
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
   * The status code returned. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the gateway.
   */
  data?: GetGatewayResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9C96CDF8-9E6C-5AB6-B83C-8F87A10117E6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
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

