// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesAnnotations extends $dara.Model {
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
   * The available memory on node {{ $labels.instance }} is less than 10%. Available memory: {{ $value }}%
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

export class ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesLabels extends $dara.Model {
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
   * warning
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

export class ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplates extends $dara.Model {
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * The available memory on the node is less than 10%
   */
  alertName?: string;
  /**
   * @remarks
   * The annotations of the alert rule.
   */
  annotations?: ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesAnnotations[];
  /**
   * @remarks
   * The content of the alert notification. Tags can be referenced in the {{$labels.xxx}} format.
   * 
   * @example
   * The available memory on node {{ $labels.instance }} is less than 10%. Available memory: {{ $value }}%
   */
  description?: string;
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
   * node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100 < 10
   */
  expression?: string;
  /**
   * @remarks
   * The tags of the alert rule.
   */
  labels?: ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesLabels[];
  /**
   * @remarks
   * The type of the alert rule.
   * 
   * @example
   * Node
   */
  type?: string;
  /**
   * @remarks
   * The version of the alert rule.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      annotations: 'Annotations',
      description: 'Description',
      duration: 'Duration',
      expression: 'Expression',
      labels: 'Labels',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      annotations: { 'type': 'array', 'itemType': ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesAnnotations },
      description: 'string',
      duration: 'string',
      expression: 'string',
      labels: { 'type': 'array', 'itemType': ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesLabels },
      type: 'string',
      version: 'string',
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

export class ListPrometheusAlertTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned struct.
   */
  prometheusAlertTemplates?: ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplates[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9FEA6D00-317F-45E3-9004-7FB8B0B7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusAlertTemplates: 'PrometheusAlertTemplates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusAlertTemplates: { 'type': 'array', 'itemType': ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplates },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.prometheusAlertTemplates)) {
      $dara.Model.validateArray(this.prometheusAlertTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

