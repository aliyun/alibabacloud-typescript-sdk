// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CmsEventForView } from "./CmsEventForView";
import { EventResourceForIncidentView } from "./EventResourceForIncidentView";


export class IncidentEventForView extends $dara.Model {
  autoRecoverTime?: number;
  content?: CmsEventForView;
  count?: number;
  dimension?: { [key: string]: any };
  eventResource?: EventResourceForIncidentView;
  groupBy?: { [key: string]: any };
  incidentEventUuid?: string;
  incidentUuid?: string;
  labels?: { [key: string]: any };
  lastTime?: number;
  recoverTime?: number;
  searchIndex?: string[];
  severity?: string;
  severityCountMap?: { [key: string]: any };
  state?: number;
  textIndex?: string;
  time?: number;
  title?: string;
  userId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      autoRecoverTime: 'autoRecoverTime',
      content: 'content',
      count: 'count',
      dimension: 'dimension',
      eventResource: 'eventResource',
      groupBy: 'groupBy',
      incidentEventUuid: 'incidentEventUuid',
      incidentUuid: 'incidentUuid',
      labels: 'labels',
      lastTime: 'lastTime',
      recoverTime: 'recoverTime',
      searchIndex: 'searchIndex',
      severity: 'severity',
      severityCountMap: 'severityCountMap',
      state: 'state',
      textIndex: 'textIndex',
      time: 'time',
      title: 'title',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecoverTime: 'number',
      content: CmsEventForView,
      count: 'number',
      dimension: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      eventResource: EventResourceForIncidentView,
      groupBy: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      incidentEventUuid: 'string',
      incidentUuid: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lastTime: 'number',
      recoverTime: 'number',
      searchIndex: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
      severityCountMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      state: 'number',
      textIndex: 'string',
      time: 'number',
      title: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    if(this.dimension) {
      $dara.Model.validateMap(this.dimension);
    }
    if(this.eventResource && typeof (this.eventResource as any).validate === 'function') {
      (this.eventResource as any).validate();
    }
    if(this.groupBy) {
      $dara.Model.validateMap(this.groupBy);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(Array.isArray(this.searchIndex)) {
      $dara.Model.validateArray(this.searchIndex);
    }
    if(this.severityCountMap) {
      $dara.Model.validateMap(this.severityCountMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

