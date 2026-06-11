// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventResourceForEventView } from "./EventResourceForEventView";


export class CmsEventForView extends $dara.Model {
  /**
   * @remarks
   * Additional annotations for the event. This is an unstructured description field.
   * 
   * @example
   * { "description": "High load detected on server", "operator": "auto" }
   */
  annotations?: { [key: string]: any };
  /**
   * @remarks
   * The raw data of the event. The format depends on the event type and dataschema.
   * 
   * @example
   * { "metricName": "cpu_usage", "value": 95.2, "threshold": 80 }
   */
  data?: any;
  /**
   * @remarks
   * The content type of the data field.
   * 
   * @example
   * "application/json"
   */
  datacontenttype?: string;
  /**
   * @remarks
   * The data schema definition, which describes the structure of the data field.
   * 
   * @example
   * "https://schema.alibabacloud.com/cms/alert/v1"
   */
  dataschema?: string;
  /**
   * @remarks
   * The deduplication ID. It identifies different instances of the same event, such as a repeatedly reported event.
   * 
   * @example
   * "dedup-abc123"
   */
  dedupId?: string;
  /**
   * @remarks
   * The unique identifier for the event. The system generates this globally unique ID.
   * 
   * @example
   * "event-1234567890"
   */
  id?: string;
  /**
   * @remarks
   * The unique integration identifier. It is used for identity recognition in cross-system integrations.
   * 
   * @example
   * "integration-xyz"
   */
  integrationUuid?: string;
  /**
   * @remarks
   * The key-value pairs of the event labels.
   * 
   * @example
   * {\\"source\\": \\"system\\"}
   */
  labels?: { [key: string]: any };
  /**
   * @remarks
   * The timestamp when the event was received and processed.
   * 
   * @example
   * 1743846610000
   */
  receiveTime?: number;
  /**
   * @remarks
   * Information about the resource associated with the event, such as the instance ID, IP address, and region.
   */
  resource?: EventResourceForEventView;
  /**
   * @remarks
   * The severity level of the event.
   * 
   * @example
   * "CRITICAL"
   */
  severity?: string;
  /**
   * @remarks
   * The name of the source system or service, such as ECS, RDS, or VPC.
   * 
   * @example
   * "ECS"
   */
  source?: string;
  /**
   * @remarks
   * The type of event source. It distinguishes between sources such as monitoring systems, Simple Log Service, and application observability.
   * 
   * @example
   * "CloudMonitor"
   */
  sourcetype?: string;
  /**
   * @remarks
   * The current status of the event.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The subject or title of the event. It briefly describes the event.
   * 
   * @example
   * "Instance cpu usage exceeds threshold"
   */
  subject?: string;
  /**
   * @remarks
   * The event subtype.
   * 
   * @example
   * "HighCPUUsage"
   */
  subtype?: string;
  /**
   * @remarks
   * The internal system event ID. It is used for internal tracking and log association.
   * 
   * @example
   * "sys-event-987654321"
   */
  sysId?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * @example
   * "2025-04-05T10:30:00Z"
   */
  time?: string;
  /**
   * @remarks
   * The timestamp of the event occurrence.
   * 
   * @example
   * 1743846600000
   */
  timestamp?: number;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * "Alert"
   */
  type?: string;
  /**
   * @remarks
   * The ID or name of the workspace. It is used for multi-tenant or organization fencing.
   * 
   * @example
   * "ws-abc123"
   */
  workspace?: string;
  /**
   * @remarks
   * The workspace tags. They help you manage events by tag.
   * 
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

