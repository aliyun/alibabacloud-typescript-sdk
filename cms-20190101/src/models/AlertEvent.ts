// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AlertEventMetrics extends $dara.Model {
  curValue?: string;
  metricName?: string;
  metricNameEn?: string;
  metricNameZh?: string;
  operator?: string;
  statistics?: string;
  threshold?: string;
  unit?: string;
  unitFactor?: number;
  static names(): { [key: string]: string } {
    return {
      curValue: 'CurValue',
      metricName: 'MetricName',
      metricNameEn: 'MetricNameEn',
      metricNameZh: 'MetricNameZh',
      operator: 'Operator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      unit: 'Unit',
      unitFactor: 'UnitFactor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curValue: 'string',
      metricName: 'string',
      metricNameEn: 'string',
      metricNameZh: 'string',
      operator: 'string',
      statistics: 'string',
      threshold: 'string',
      unit: 'string',
      unitFactor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertEvent extends $dara.Model {
  alertName?: string;
  alertStatus?: string;
  arn?: string;
  content?: string;
  customLabels?: { [key: string]: any };
  deDupId?: string;
  details?: string;
  eventName?: string;
  eventType?: string;
  expression?: string;
  metrics?: AlertEventMetrics[];
  product?: string;
  resourceInfo?: { [key: string]: any };
  ruleName?: string;
  severity?: string;
  source?: string;
  summary?: string;
  timestamp?: number;
  traceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      alertStatus: 'AlertStatus',
      arn: 'Arn',
      content: 'Content',
      customLabels: 'CustomLabels',
      deDupId: 'DeDupId',
      details: 'Details',
      eventName: 'EventName',
      eventType: 'EventType',
      expression: 'Expression',
      metrics: 'Metrics',
      product: 'Product',
      resourceInfo: 'ResourceInfo',
      ruleName: 'RuleName',
      severity: 'Severity',
      source: 'Source',
      summary: 'Summary',
      timestamp: 'Timestamp',
      traceId: 'TraceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      alertStatus: 'string',
      arn: 'string',
      content: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      deDupId: 'string',
      details: 'string',
      eventName: 'string',
      eventType: 'string',
      expression: 'string',
      metrics: { 'type': 'array', 'itemType': AlertEventMetrics },
      product: 'string',
      resourceInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ruleName: 'string',
      severity: 'string',
      source: 'string',
      summary: 'string',
      timestamp: 'number',
      traceId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    if(this.resourceInfo) {
      $dara.Model.validateMap(this.resourceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

