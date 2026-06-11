// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentEventStruct extends $dara.Model {
  /**
   * @remarks
   * The time of automatic recovery.
   * 
   * @example
   * 1741234567890
   */
  autoRecoverTime?: number;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * 检测到 user-service 实例 i-abc123 的 CPU 使用率达到 95%，已触发告警。
   */
  content?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 6
   */
  count?: number;
  /**
   * @remarks
   * The dimension.
   */
  dimension?: { [key: string]: string };
  /**
   * @remarks
   * The dimension for grouping.
   */
  groupBy?: { [key: string]: string };
  /**
   * @remarks
   * The incident event ID.
   * 
   * @example
   * event-001
   */
  incidentEventId?: string;
  /**
   * @remarks
   * The incident ID.
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * The time of the last occurrence.
   * 
   * @example
   * 1741234567890
   */
  lastTime?: number;
  /**
   * @remarks
   * The time of manual recovery.
   * 
   * @example
   * 1741234567890
   */
  recoverTime?: number;
  /**
   * @remarks
   * The resource associated with the event.
   */
  resource?: { [key: string]: string };
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Running
   */
  status?: number;
  /**
   * @remarks
   * The time.
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  time?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 用户服务 CPU 使用率过高
   */
  title?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * user-12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRecoverTime: 'autoRecoverTime',
      content: 'content',
      count: 'count',
      dimension: 'dimension',
      groupBy: 'groupBy',
      incidentEventId: 'incidentEventId',
      incidentId: 'incidentId',
      lastTime: 'lastTime',
      recoverTime: 'recoverTime',
      resource: 'resource',
      status: 'status',
      time: 'time',
      title: 'title',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecoverTime: 'number',
      content: 'string',
      count: 'number',
      dimension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      groupBy: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      incidentEventId: 'string',
      incidentId: 'string',
      lastTime: 'number',
      recoverTime: 'number',
      resource: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      status: 'number',
      time: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.dimension) {
      $dara.Model.validateMap(this.dimension);
    }
    if(this.groupBy) {
      $dara.Model.validateMap(this.groupBy);
    }
    if(this.resource) {
      $dara.Model.validateMap(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

