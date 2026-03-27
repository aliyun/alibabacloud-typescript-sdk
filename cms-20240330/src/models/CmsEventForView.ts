// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventResourceForEventView } from "./EventResourceForEventView";


export class CmsEventForView extends $dara.Model {
  /**
   * @example
   * { "description": "High load detected on server", "operator": "auto" }
   */
  annotations?: { [key: string]: any };
  /**
   * @example
   * { "metricName": "cpu_usage", "value": 95.2, "threshold": 80 }
   */
  data?: any;
  /**
   * @example
   * "application/json"
   */
  datacontenttype?: string;
  /**
   * @example
   * "https://schema.alibabacloud.com/cms/alert/v1"
   */
  dataschema?: string;
  /**
   * @example
   * "dedup-abc123"
   */
  dedupId?: string;
  /**
   * @example
   * "event-1234567890"
   */
  id?: string;
  /**
   * @example
   * "integration-xyz"
   */
  integrationUuid?: string;
  /**
   * @example
   * {\\"source\\": \\"system\\"}
   */
  labels?: { [key: string]: any };
  /**
   * @example
   * 1743846610000
   */
  receiveTime?: number;
  resource?: EventResourceForEventView;
  /**
   * @example
   * "CRITICAL"
   */
  severity?: string;
  /**
   * @example
   * "ECS"
   */
  source?: string;
  /**
   * @example
   * "CloudMonitor"
   */
  sourcetype?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * "Instance cpu usage exceeds threshold"
   */
  subject?: string;
  /**
   * @example
   * "HighCPUUsage"
   */
  subtype?: string;
  /**
   * @example
   * "sys-event-987654321"
   */
  sysId?: string;
  /**
   * @example
   * "2025-04-05T10:30:00Z"
   */
  time?: string;
  /**
   * @example
   * 1743846600000
   */
  timestamp?: number;
  /**
   * @example
   * "Alert"
   */
  type?: string;
  /**
   * @example
   * "ws-abc123"
   */
  workspace?: string;
  /**
   * @example
   * { "department": "finance", "project": "payment-gateway" }
   */
  workspaceTags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      data: 'data',
      datacontenttype: 'datacontenttype',
      dataschema: 'dataschema',
      dedupId: 'dedupId',
      id: 'id',
      integrationUuid: 'integrationUuid',
      labels: 'labels',
      receiveTime: 'receiveTime',
      resource: 'resource',
      severity: 'severity',
      source: 'source',
      sourcetype: 'sourcetype',
      status: 'status',
      subject: 'subject',
      subtype: 'subtype',
      sysId: 'sysId',
      time: 'time',
      timestamp: 'timestamp',
      type: 'type',
      workspace: 'workspace',
      workspaceTags: 'workspaceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      data: 'any',
      datacontenttype: 'string',
      dataschema: 'string',
      dedupId: 'string',
      id: 'string',
      integrationUuid: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      receiveTime: 'number',
      resource: EventResourceForEventView,
      severity: 'string',
      source: 'string',
      sourcetype: 'string',
      status: 'string',
      subject: 'string',
      subtype: 'string',
      sysId: 'string',
      time: 'string',
      timestamp: 'number',
      type: 'string',
      workspace: 'string',
      workspaceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.annotations) {
      $dara.Model.validateMap(this.annotations);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(this.workspaceTags) {
      $dara.Model.validateMap(this.workspaceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

