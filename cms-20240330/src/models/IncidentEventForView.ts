// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CmsEventForView } from "./CmsEventForView";
import { EventResourceForIncidentView } from "./EventResourceForIncidentView";


export class IncidentEventForView extends $dara.Model {
  /**
   * @example
   * 1743876600000
   */
  autoRecoverTime?: number;
  content?: CmsEventForView;
  /**
   * @example
   * 3
   */
  count?: number;
  /**
   * @example
   * { "env": "prod", "module": "payment" }
   */
  dimension?: { [key: string]: any };
  eventResource?: EventResourceForIncidentView;
  /**
   * @example
   * { "resourceId": "i-bp123456", "severity": "Critical" }
   */
  groupBy?: { [key: string]: any };
  /**
   * @example
   * "x1y2z3a4-b5c6-d7e8-f9g0-h1i2j3k4l5m6"
   */
  incidentEventUuid?: string;
  /**
   * @example
   * "a1b2c3d4-e5f6-7890-1234-567890abcdef"
   */
  incidentUuid?: string;
  /**
   * @example
   * { "project": "payment-gateway", "owner": "ops-team" }
   */
  labels?: { [key: string]: any };
  /**
   * @example
   * 1743876000000
   */
  lastTime?: number;
  /**
   * @example
   * 1743876600000
   */
  recoverTime?: number;
  searchIndex?: string[];
  /**
   * @example
   * "Critical"
   */
  severity?: string;
  /**
   * @example
   * { "Critical": 2, "High": 1 }
   */
  severityCountMap?: { [key: string]: any };
  /**
   * @example
   * 1
   */
  state?: number;
  textIndex?: string;
  /**
   * @example
   * 1743876000000
   */
  time?: number;
  title?: string;
  /**
   * @example
   * "user-abc123"
   */
  userId?: string;
  /**
   * @example
   * "ws-xyz789"
   */
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

