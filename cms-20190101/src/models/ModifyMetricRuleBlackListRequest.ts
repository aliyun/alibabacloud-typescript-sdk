// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMetricRuleBlackListRequestMetrics extends $dara.Model {
  /**
   * @remarks
   * The name of the metric.
   * 
   * Valid values of N: 1 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * disk_utilization
   */
  metricName?: string;
  /**
   * @remarks
   * The extended dimension information of the instance. For example, {"device":"C:"} indicates that the blacklist policy applies to all C drives of the ECS instance.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * {"device":"C:"}
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

export class ModifyMetricRuleBlackListRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the Alibaba Cloud service. For example, Redis has categories such as `kvstore_standard` (Standard Edition), `kvstore_sharding` (Cluster Edition), and `kvstore_splitrw` (Read/Write Splitting Edition).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The effective time range of the alert blacklist policy. The behavior varies based on whether you specify this parameter:
   * 
   * - If you do not specify this parameter, the alert blacklist policy is permanently valid.
   * 
   * - If you specify this parameter, the alert blacklist policy is valid only within the specified time range. This parameter supports the following formats:
   *     - `03:00-04:59`: The alert blacklist policy is valid from 03:00 to 05:00 (excluding 05:00) local time.
   *     - `03:00-04:59 UTC+0700`: The alert blacklist policy is valid from 03:00 to 05:00 (excluding 05:00) UTC+7.
   * 
   * @example
   * 03:00-04:59
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The end timestamp when the alert blacklist policy takes effect.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1640608200000
   */
  enableEndTime?: string;
  /**
   * @remarks
   * The start timestamp when the alert blacklist policy takes effect.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1640237400000
   */
  enableStartTime?: string;
  /**
   * @remarks
   * The ID of the alert blacklist policy.
   * 
   * For information about how to obtain the ID of an alert blacklist policy, see [DescribeMetricRuleBlackList](https://help.aliyun.com/document_detail/457257.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 93514c96-ceb8-47d8-8ee3-93b6d98b****
   */
  id?: string;
  /**
   * @remarks
   * The list of instances of the specified Alibaba Cloud service in the alert blacklist policy.
   * 
   * This parameter is required.
   */
  instances?: string[];
  /**
   * @remarks
   * The monitoring metrics of the instances.
   * 
   * - If you do not specify this parameter, the alert blacklist policy applies to all monitoring metrics of the specified Alibaba Cloud service.
   * 
   * - If you specify this parameter, the alert blacklist policy applies only to the specified monitoring metrics.
   */
  metrics?: ModifyMetricRuleBlackListRequestMetrics[];
  /**
   * @remarks
   * The name of the alert blacklist policy.
   * 
   * This parameter is required.
   * 
   * @example
   * Blacklist-02
   */
  name?: string;
  /**
   * @remarks
   * The data namespace of the Alibaba Cloud service.
   * 
   * For information about the namespaces of Alibaba Cloud services, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  regionId?: string;
  /**
   * @remarks
   * The effective scope of the alert blacklist policy. Valid values:
   * 
   * - USER: The alert blacklist policy takes effect only in the current Alibaba Cloud account.
   * 
   * - GROUP (default): The alert blacklist policy takes effect in the specified application group. You must specify an application group.
   *   For information about how to obtain the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * @example
   * USER
   */
  scopeType?: string;
  /**
   * @remarks
   * The list of application group IDs.
   * 
   * > This parameter is required only when `ScopeType` is set to `GROUP`.
   * 
   * @example
   * ["67****","78****"]
   */
  scopeValue?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      effectiveTime: 'EffectiveTime',
      enableEndTime: 'EnableEndTime',
      enableStartTime: 'EnableStartTime',
      id: 'Id',
      instances: 'Instances',
      metrics: 'Metrics',
      name: 'Name',
      namespace: 'Namespace',
      regionId: 'RegionId',
      scopeType: 'ScopeType',
      scopeValue: 'ScopeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      effectiveTime: 'string',
      enableEndTime: 'string',
      enableStartTime: 'string',
      id: 'string',
      instances: { 'type': 'array', 'itemType': 'string' },
      metrics: { 'type': 'array', 'itemType': ModifyMetricRuleBlackListRequestMetrics },
      name: 'string',
      namespace: 'string',
      regionId: 'string',
      scopeType: 'string',
      scopeValue: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

