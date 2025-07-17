// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations extends $dara.Model {
  /**
   * @remarks
   * The name of the annotation.
   * 
   * @example
   * message
   */
  name?: string;
  /**
   * @remarks
   * The value of the annotation.
   * 
   * @example
   * The CPU utilization of ${{$labels.pod_name}} has exceeded 80%. Current value: {{$value}}%
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels extends $dara.Model {
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * severity
   */
  name?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * critical
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class DescribePrometheusAlertRuleResponseBodyPrometheusAlertRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * 3888704
   */
  alertId?: number;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * Prometheus_Alert
   */
  alertName?: string;
  /**
   * @remarks
   * The annotations of the alert rule.
   */
  annotations?: DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations[];
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c0bad479465464e1d8c1e641b0afb****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the notification policy. This parameter is returned if the **NotifyType** parameter is set to `DISPATCH_RULE`.
   * 
   * @example
   * 10282
   */
  dispatchRuleId?: number;
  /**
   * @remarks
   * The duration of the alert. Valid values: 1 to 1440. Unit: minutes.
   * 
   * @example
   * 1m
   */
  duration?: string;
  /**
   * @remarks
   * The expression of the alert rule.
   * 
   * @example
   * 100 * (sum(rate(container_cpu_usage_seconds_total[1m])) by (pod_name) / sum(label_replace(kube_pod_container_resource_limits_cpu_cores, \\"pod_name\\", \\"$1\\", \\"pod\\", \\"(.*)\\")) by (pod_name))>75
   */
  expression?: string;
  /**
   * @remarks
   * The tags of the alert rule.
   */
  labels?: DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels[];
  /**
   * @remarks
   * The alert message. Tags can be referenced in the {{$labels.xxx}} format.
   * 
   * @example
   * The CPU utilization of ${{$labels.pod_name}} has exceeded 80%. Current value: {{$value}}%
   */
  message?: string;
  /**
   * @remarks
   * The method of that is used to send alert notifications. Valid values:
   * 
   * *   `ALERT_MANAGER`: Alert notifications are sent by Operation Center.
   * *   `DISPATCH_RULE`: Alert notifications are sent based on the specified notification policy.
   * 
   * @example
   * ALERT_MANAGER
   */
  notifyType?: string;
  /**
   * @remarks
   * Indicates whether the alert rule is enabled. Valid values:
   * 
   * *   `1`: The alert rule is enabled.
   * *   `0`: The alert rule is disabled.
   * 
   * @example
   * 1
   */
  status?: number;
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
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      annotations: { 'type': 'array', 'itemType': DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations },
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      labels: { 'type': 'array', 'itemType': DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels },
      message: 'string',
      notifyType: 'string',
      status: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.annotations)) {
      $dara.Model.validateArray(this.annotations);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrometheusAlertRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The returned struct.
   */
  prometheusAlertRule?: DescribePrometheusAlertRuleResponseBodyPrometheusAlertRule;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9FEA6D00-317F-45E3-9004-7FB8B0B7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      prometheusAlertRule: 'PrometheusAlertRule',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      prometheusAlertRule: DescribePrometheusAlertRuleResponseBodyPrometheusAlertRule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.prometheusAlertRule && typeof (this.prometheusAlertRule as any).validate === 'function') {
      (this.prometheusAlertRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

