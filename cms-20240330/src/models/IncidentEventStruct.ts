// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentEventStruct extends $dara.Model {
  /**
   * @remarks
   * Automatic recovery time.
   * 
   * @example
   * 1741234567890
   */
  autoRecoverTime?: number;
  /**
   * @remarks
   * Content.
   * 
   * @example
   * Detected that the CPU usage of the user-service instance i-abc123 has reached 95%, triggering an alert.
   */
  content?: string;
  /**
   * @remarks
   * Count.
   * 
   * @example
   * 6
   */
  count?: number;
  /**
   * @remarks
   * Dimension.
   */
  dimension?: { [key: string]: string };
  /**
   * @remarks
   * Used for grouping dimensions.
   */
  groupBy?: { [key: string]: string };
  /**
   * @remarks
   * Incident Event Id.
   * 
   * @example
   * event-001
   */
  incidentEventId?: string;
  /**
   * @remarks
   * Incident Id.
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * Last time.
   * 
   * @example
   * 1741234567890
   */
  lastTime?: number;
  /**
   * @remarks
   * Manual recovery time.
   * 
   * @example
   * 1741234567890
   */
  recoverTime?: number;
  /**
   * @remarks
   * Describes the resource information associated with the event.
   */
  resource?: { [key: string]: string };
  /**
   * @remarks
   * Status.
   * 
   * @example
   * Running
   */
  status?: number;
  /**
   * @remarks
   * Time.
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  time?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * User service CPU usage is too high.
   */
  title?: string;
  /**
   * @remarks
   * User ID.
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

