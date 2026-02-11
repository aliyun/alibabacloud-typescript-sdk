// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations extends $dara.Model {
  name?: string;
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
  name?: string;
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
  alertId?: number;
  alertName?: string;
  annotations?: DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations[];
  clusterId?: string;
  dispatchRuleId?: number;
  duration?: string;
  expression?: string;
  labels?: DescribePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels[];
  message?: string;
  notifyType?: string;
  status?: number;
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
  prometheusAlertRule?: DescribePrometheusAlertRuleResponseBodyPrometheusAlertRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusAlertRule: 'PrometheusAlertRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusAlertRule: DescribePrometheusAlertRuleResponseBodyPrometheusAlertRule,
      requestId: 'string',
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

