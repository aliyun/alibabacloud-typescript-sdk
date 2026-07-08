// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserTrafficRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 1665386280
   */
  endTimestamp?: number;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The time interval. Unit: seconds.
   * 
   * @example
   * 3600
   */
  interval?: number;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-ae*******i
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The type of real-time user traffic. Valid values:
   * - bot: the number of bot management requests.
   * - risk: the number of times risk identification is triggered.
   * - custom_acl_captcha: the number of times the slider action of custom rules is triggered.
   * - qps: the peak QPS.
   * - apisec: the number of API security requests.
   * - alb: the number of requests connected through ALB.
   * - mse: the number of requests connected through MSE.
   * - fc: the number of requests connected through Function Compute.
   * - sae: the number of requests connected through Serverless App Engine.
   * - apig: the number of requests connected through Cloud Native API Gateway.
   * - nlb: the number of requests connected through NLB.
   * 
   * @example
   * qps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      interval: 'Interval',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTimestamp: 'StartTimestamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      instanceId: 'string',
      interval: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTimestamp: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

