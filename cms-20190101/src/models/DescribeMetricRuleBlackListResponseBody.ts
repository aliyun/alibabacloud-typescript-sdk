// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackListMetrics extends $dara.Model {
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * disk_utilization
   */
  metricName?: string;
  /**
   * @remarks
   * The extended dimension of the instance. For example, `{"device":"C:"}` specifies that the blacklist policy is applied to all C disks of the specified Elastic Compute Service (ECS) instance.
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
   * The category of the cloud service. For example, ApsaraDB for Redis includes the following categories: ApsaraDB for Redis (standard architecture), ApsaraDB for Redis (cluster architecture), and ApsaraDB for Redis (read/write splitting architecture). In this case, the valid values of this parameter for ApsaraDB for Redis include `kvstore_standard`, `kvstore_sharding`, and `kvstore_splitrw`.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The timestamp when the blacklist policy was created.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1665714561000
   */
  createTime?: string;
  /**
   * @remarks
   * The time range within which the blacklist policy is effective.
   * 
   * @example
   * 00:00-23:59
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The timestamp when the blacklist policy started to take effect.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1640608200000
   */
  enableEndTime?: number;
  /**
   * @remarks
   * The timestamp when the blacklist policy expired.
   * 
   * Unit: milliseconds.
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
   * The IDs of the instances that belong to the specified cloud service.
   */
  instances?: string[];
  /**
   * @remarks
   * The status of the blacklist policy. Valid values:
   * 
   * *   true: The blacklist policy is enabled.
   * *   false: The blacklist policy is disabled.
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
   * The namespace of the cloud service.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The effective scope of the blacklist policy. Valid values:
   * 
   * *   USER: The blacklist policy takes effect only within the current Alibaba Cloud account.
   * *   GROUP: The blacklist policy takes effect only within the specified application group.
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
   * The timestamp when the blacklist policy was modified.
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
   * The categories of the Alibaba Cloud service. For example, ApsaraDB for Redis includes the following categories: ApsaraDB for Redis (standard architecture), ApsaraDB for Redis (cluster architecture), and ApsaraDB for Redis (read/write splitting architecture). In this case, the valid values of this parameter for ApsaraDB for Redis include `kvstore_standard`, `kvstore_sharding`, and `kvstore_splitrw`.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The queried blacklist policies.
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
   * The namespace of the cloud service.
   * 
   * @example
   * D63E76CB-29AA-5B9F-88CE-400A6F28D428
   */
  requestId?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * For more information about the namespaces of different cloud services, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The timestamp when the blacklist policy was created.
   * 
   * Unit: milliseconds.
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

