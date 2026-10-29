// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackListMetrics extends $dara.Model {
  /**
   * @remarks
   * The name of the monitoring metrics.
   * 
   * @example
   * disk_utilization
   */
  metricName?: string;
  /**
   * @remarks
   * The extension dimension information of the instance. For example, `{"device":"C:"}` indicates that the blacklist policy is applied to all C drives of the ECS instance under the Alibaba Cloud service.
   * 
   * @example
   * [{"device":"C:"}]
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      resource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackList extends $dara.Model {
  /**
   * @remarks
   * The category of the Alibaba Cloud service. For example, ApsaraDB for Redis has `kvstore_standard` (Standard Edition), `kvstore_sharding` (Cluster Edition), and `kvstore_splitrw` (read/write splitting Edition).
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The timestamp when the alert blacklist policy was created.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1665714561000
   */
  createTime?: string;
  /**
   * @remarks
   * The effective period of the alert blacklist policy.
   * 
   * The value is in the HH:mm-HH:mm format (24-hour clock). The default time zone is UTC+8. For example, "00:00-23:59" indicates that the policy takes effect all day.
   * 
   * @example
   * 00:00-23:59
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The start timestamp of the alert blacklist policy.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1640608200000
   */
  enableEndTime?: number;
  /**
   * @remarks
   * The end timestamp of the alert blacklist policy.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1640237400000
   */
  enableStartTime?: number;
  /**
   * @remarks
   * The ID of the alert blacklist policy.
   * 
   * @example
   * 93514c96-ceb8-47d8-8ee3-93b6d98b****
   */
  id?: string;
  /**
   * @remarks
   * The instances of the specified Alibaba Cloud service in the alert blacklist policy.
   */
  instances?: string[];
  /**
   * @remarks
   * The status of the alert blacklist policy. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  isEnable?: boolean;
  /**
   * @remarks
   * The monitoring metrics of the instances.
   */
  metrics?: DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackListMetrics[];
  /**
   * @remarks
   * The name of the alert blacklist policy.
   * 
   * @example
   * Blacklist-01
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the Alibaba Cloud service.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The effective scope of the alert blacklist policy. Valid values:
   * 
   * - USER: The alert blacklist policy takes effect only within the current Alibaba Cloud account.
   * 
   * - GROUP: The alert blacklist policy takes effect in the specified application groups.
   * 
   * @example
   * USER
   */
  scopeType?: string;
  /**
   * @remarks
   * The IDs of the application groups.
   */
  scopeValue?: string[];
  /**
   * @remarks
   * The timestamp when the alert blacklist policy was last modified.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1665718373000
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      effectiveTime: 'EffectiveTime',
      enableEndTime: 'EnableEndTime',
      enableStartTime: 'EnableStartTime',
      id: 'Id',
      instances: 'Instances',
      isEnable: 'IsEnable',
      metrics: 'Metrics',
      name: 'Name',
      namespace: 'Namespace',
      scopeType: 'ScopeType',
      scopeValue: 'ScopeValue',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      effectiveTime: 'string',
      enableEndTime: 'number',
      enableStartTime: 'number',
      id: 'string',
      instances: { 'type': 'array', 'itemType': 'string' },
      isEnable: 'boolean',
      metrics: { 'type': 'array', 'itemType': DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackListMetrics },
      name: 'string',
      namespace: 'string',
      scopeType: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    if(Array.isArray(this.scopeValue)) {
      $dara.Model.validateArray(this.scopeValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleBlackListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > The value 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of alert blacklist policies.
   */
  describeMetricRuleBlackList?: DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackList[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D63E76CB-29AA-5B9F-88CE-400A6F28D428
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: Successful.
   * 
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of alert blacklist policies.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      describeMetricRuleBlackList: 'DescribeMetricRuleBlackList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      describeMetricRuleBlackList: { 'type': 'array', 'itemType': DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.describeMetricRuleBlackList)) {
      $dara.Model.validateArray(this.describeMetricRuleBlackList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

