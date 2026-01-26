// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusAlertRuleRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrometheusAlertRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert rule. You can call the ListPrometheusAlertRules operation to query the ID of the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 3888704
   */
  alertId?: number;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * Prometheus_Alert
   */
  alertName?: string;
  /**
   * @remarks
   * The annotations that are described in a JSON string. You must specify the name and value of each annotation.
   * 
   * @example
   * [{"Value": "xxx","Name": "description"}]
   */
  annotations?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c0bad479465464e1d8c1e641b0afb****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the notification policy. This parameter is required if the NotifyType parameter is set to `DISPATCH_RULE`.
   * 
   * @example
   * 10282
   */
  dispatchRuleId?: number;
  /**
   * @remarks
   * The duration. The value ranges from 1 to 1440 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * The expression of the alert rule. The expression must follow the PromQL syntax.
   * 
   * This parameter is required.
   * 
   * @example
   * 100 * (sum(rate(container_cpu_usage_seconds_total[1m])) by (pod_name) / sum(label_replace(kube_pod_container_resource_limits_cpu_cores, \\"pod_name\\", \\"$1\\", \\"pod\\", \\"(.*)\\")) by (pod_name))>75
   */
  expression?: string;
  /**
   * @remarks
   * The tags that are described in a JSON string. You must specify the name and value of each tag.
   * 
   * @example
   * [{"Value": "critical","Name": "severity"}]
   */
  labels?: string;
  /**
   * @remarks
   * The alert message. Tags can be referenced in the {{$labels.xxx}} format.
   * 
   * This parameter is required.
   * 
   * @example
   * The CPU utilization of ${{$labels.pod_name}} exceeds 80%. Current value: {{$value}}%
   */
  message?: string;
  /**
   * @remarks
   * The method that is used to send alert notifications. Valid values:
   * 
   * - `ALERT_MANAGER`: Alert notifications are sent by Operation Center. This is the default value.
   * - `DISPATCH_RULE`: Alert notifications are sent based on the specified notification policy.
   * 
   * @example
   * ALERT_MANAGER
   */
  notifyType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: UpdatePrometheusAlertRuleRequestTags[];
  /**
   * @remarks
   * The type of the alert rule.
   * 
   * @example
   * Kubernetes component alert
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      annotations: 'Annotations',
      clusterId: 'ClusterId',
      dispatchRuleId: 'DispatchRuleId',
      duration: 'Duration',
      expression: 'Expression',
      labels: 'Labels',
      message: 'Message',
      notifyType: 'NotifyType',
      regionId: 'RegionId',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      annotations: 'string',
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      labels: 'string',
      message: 'string',
      notifyType: 'string',
      regionId: 'string',
      tags: { 'type': 'array', 'itemType': UpdatePrometheusAlertRuleRequestTags },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

