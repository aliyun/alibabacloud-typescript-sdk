// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesAnnotations extends $dara.Model {
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

export class ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesLabels extends $dara.Model {
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

export class ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplates extends $dara.Model {
  alertName?: string;
  annotations?: ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesAnnotations[];
  description?: string;
  duration?: string;
  expression?: string;
  labels?: ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplatesLabels[];
  type?: string;
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
  prometheusAlertTemplates?: ListPrometheusAlertTemplatesResponseBodyPrometheusAlertTemplates[];
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

