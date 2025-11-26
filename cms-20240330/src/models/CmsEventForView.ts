// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventResourceForEventView } from "./EventResourceForEventView";


export class CmsEventForView extends $dara.Model {
  annotations?: { [key: string]: any };
  data?: any;
  datacontenttype?: string;
  dataschema?: string;
  dedupId?: string;
  id?: string;
  integrationUuid?: string;
  labels?: { [key: string]: any };
  receiveTime?: number;
  resource?: EventResourceForEventView;
  severity?: string;
  source?: string;
  sourcetype?: string;
  status?: string;
  subject?: string;
  subtype?: string;
  sysId?: string;
  time?: string;
  timestamp?: number;
  type?: string;
  workspace?: string;
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

