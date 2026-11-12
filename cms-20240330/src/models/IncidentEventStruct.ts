// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentEventStruct extends $dara.Model {
  /**
   * @remarks
   * The automatic recovery time.
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
   * The CPU utilization of the user-service instance i-abc123 reached 95%, triggering an alert
   */
  content?: string;
  /**
   * @remarks
   * The statistical count.
   * 
   * @example
   * 6
   */
  count?: number;
  /**
   * @remarks
   * The dimension.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimension?: { [key: string]: string };
  /**
   * @remarks
   * The dimension used for grouping.
   * 
   * @example
   * {"severity":"Critical"}
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
   * The last time.
   * 
   * @example
   * 1741234567890
   */
  lastTime?: number;
  /**
   * @remarks
   * The manual recovery time.
   * 
   * @example
   * 1741234567890
   */
  recoverTime?: number;
  /**
   * @remarks
   * The information about the resources associated with the event.
   * 
   * @example
   * {"resourceId":"i-example001"}
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
   * High CPU utilization of the user service
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

