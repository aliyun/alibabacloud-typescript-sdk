// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusAlertRulesResponseBodyPrometheusAlertRulesAnnotations extends $dara.Model {
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

export class ListPrometheusAlertRulesResponseBodyPrometheusAlertRulesLabels extends $dara.Model {
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

export class ListPrometheusAlertRulesResponseBodyPrometheusAlertRules extends $dara.Model {
  alertId?: number;
  alertName?: string;
  annotations?: ListPrometheusAlertRulesResponseBodyPrometheusAlertRulesAnnotations[];
  clusterId?: string;
  dispatchRuleId?: number;
  duration?: string;
  expression?: string;
  labels?: ListPrometheusAlertRulesResponseBodyPrometheusAlertRulesLabels[];
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
      annotations: { 'type': 'array', 'itemType': ListPrometheusAlertRulesResponseBodyPrometheusAlertRulesAnnotations },
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      labels: { 'type': 'array', 'itemType': ListPrometheusAlertRulesResponseBodyPrometheusAlertRulesLabels },
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

export class ListPrometheusAlertRulesResponseBody extends $dara.Model {
  prometheusAlertRules?: ListPrometheusAlertRulesResponseBodyPrometheusAlertRules[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusAlertRules: 'PrometheusAlertRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusAlertRules: { 'type': 'array', 'itemType': ListPrometheusAlertRulesResponseBodyPrometheusAlertRules },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.prometheusAlertRules)) {
      $dara.Model.validateArray(this.prometheusAlertRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

