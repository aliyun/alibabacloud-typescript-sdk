// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackListMetrics extends $dara.Model {
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * disk_utilization
   */
  metricName?: string;
  /**
   * @remarks
   * The extended dimension of the instance. For example, `{"device":"C:"}` means that the blacklist policy is applied to all C drives of an Elastic Compute Service (ECS) instance.
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
   * The category of the Alibaba Cloud service. For example, Redis has different editions, such as `kvstore_standard` (Standard Edition), `kvstore_sharding` (Cluster Edition), and `kvstore_splitrw` (Read/write Splitting Edition).
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The timestamp that indicates when the blacklist policy was created.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1665714561000
   */
  createTime?: string;
  /**
   * @remarks
   * The time range during which the blacklist policy is effective.
   * 
   * @example
   * 00:00-23:59
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the alert blacklist policy is no longer in effect.
   * 
   * The timestamp is measured in milliseconds.
   * 
   * @example
   * 1640608200000
   */
  enableEndTime?: number;
  /**
   * @remarks
   * The time when the alert blacklist policy expires.
   * 
   * This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640237400000
   */
  enableStartTime?: number;
  /**
   * @remarks
   * The ID of the blacklist policy.
   * 
   * @example
   * 93514c96-ceb8-47d8-8ee3-93b6d98b****
   */
  id?: string;
  /**
   * @remarks
   * The instances of the Alibaba Cloud service in the blacklist policy.
   */
  instances?: string[];
  /**
   * @remarks
   * The status of the blacklist policy. Valid values:
   * 
   * - true: enabled.
   * 
   * - false: disabled.
   * 
   * @example
   * true
   */
  isEnable?: boolean;
  /**
   * @remarks
   * The metrics of the instance.
   */
  metrics?: DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackListMetrics[];
  /**
   * @remarks
   * The name of the blacklist policy.
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
   * The scope of the blacklist policy. Valid values:
   * 
   * - USER: The blacklist policy takes effect only for the current Alibaba Cloud account.
   * 
   * - GROUP: The blacklist policy takes effect for the specified application groups.
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
   * The timestamp that indicates when the blacklist policy was modified.
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
   * > A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The blacklist policies.
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
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of blacklist policies.
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

