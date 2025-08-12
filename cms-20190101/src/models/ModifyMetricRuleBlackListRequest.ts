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
   * The extended dimension of the instance. For example, `{"device":"C:"}` specifies that the blacklist policy is applied to all C disks of the specified Elastic Compute Service (ECS) instance.
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
   * The category of the cloud service. For example, ApsaraDB for Redis supports the standard architecture, the cluster architecture, and the read/write splitting architecture. In this case, the valid values of this parameter for ApsaraDB for Redis include `kvstore_standard`, `kvstore_sharding`, and `kvstore_splitrw`.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The time range within which the blacklist policy is effective. Take note of the following information:
   * 
   * *   If you do not configure this parameter, the blacklist policy is permanently effective.
   * 
   * *   If you configure this parameter, the blacklist policy is effective only within the specified time range. Examples:
   * 
   *     *   `03:00-04:59`: The blacklist policy is effective from 03:00 to 05:00 local time. 05:00 local time is excluded.
   *     *   `03:00-04:59 UTC+0700`: The blacklist policy is effective from 03:00 to 05:00 (UTC+7). 05:00 (UTC+7) is excluded.
   * 
   * @example
   * 03:00-04:59
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The timestamp when the blacklist policy expires.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1640608200000
   */
  enableEndTime?: string;
  /**
   * @remarks
   * The timestamp when the blacklist policy starts to take effect.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1640237400000
   */
  enableStartTime?: string;
  /**
   * @remarks
   * The ID of the blacklist policy.
   * 
   * For information about how to obtain the ID of a blacklist policy, see [DescribeMetricRuleBlackList](https://help.aliyun.com/document_detail/457257.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 93514c96-ceb8-47d8-8ee3-93b6d98b****
   */
  id?: string;
  /**
   * @remarks
   * The IDs of the instances that belong to the specified cloud service.
   * 
   * This parameter is required.
   */
  instances?: string[];
  /**
   * @remarks
   * The metrics of the instance.
   * 
   * *   If you do not configure this parameter, the blacklist policy applies to all metrics of the specified cloud service.
   * *   If you configure this parameter, the blacklist policy applies only to the current metric.
   */
  metrics?: ModifyMetricRuleBlackListRequestMetrics[];
  /**
   * @remarks
   * The name of the blacklist policy.
   * 
   * This parameter is required.
   * 
   * @example
   * Blacklist-02
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * For more information about the namespaces of cloud services, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * The effective scope of the blacklist policy. Valid values:
   * 
   * *   USER: The blacklist policy takes effect only within the current Alibaba Cloud account.
   * *   GROUP (default): The blacklist policy takes effect only within the specified application group. For information about how to obtain the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * @example
   * USER
   */
  scopeType?: string;
  /**
   * @remarks
   * The IDs of the application groups.
   * 
   * >  This parameter is required only when `ScopeType` is set to `GROUP`.
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

