// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations extends $dara.Model {
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

export class UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels extends $dara.Model {
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

export class UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRule extends $dara.Model {
  alertId?: number;
  alertName?: string;
  annotations?: UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations[];
  clusterId?: string;
  dispatchRuleId?: number;
  duration?: string;
  expression?: string;
  labels?: UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels[];
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
      annotations: { 'type': 'array', 'itemType': UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRuleAnnotations },
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      labels: { 'type': 'array', 'itemType': UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRuleLabels },
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

export class UpdatePrometheusAlertRuleResponseBody extends $dara.Model {
  prometheusAlertRule?: UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusAlertRule: 'PrometheusAlertRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusAlertRule: UpdatePrometheusAlertRuleResponseBodyPrometheusAlertRule,
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

