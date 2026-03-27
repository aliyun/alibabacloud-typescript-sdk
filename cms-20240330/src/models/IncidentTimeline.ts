// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentTimeline extends $dara.Model {
  /**
   * @remarks
   * Subtype.
   * 
   * @example
   * comment
   */
  childType?: string;
  /**
   * @remarks
   * Content.
   * 
   * @example
   * The operations team has been notified to investigate.
   */
  content?: string;
  /**
   * @remarks
   * Incident ID.
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * Timeline node unique ID.
   * 
   * @example
   * timeline-001
   */
  incidentTimelineId?: string;
  /**
   * @remarks
   * Time.
   * 
   * @example
   * 1741234567890
   */
  time?: number;
  /**
   * @remarks
   * Parent timeline ID.
   * 
   * @example
   * timeline-main-001
   */
  timelineId?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * The operations team has been contacted.
   */
  title?: string;
  /**
   * @remarks
   * Type.
   * 
   * @example
   * ACTION
   */
  type?: string;
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
      childType: 'childType',
      content: 'content',
      incidentId: 'incidentId',
      incidentTimelineId: 'incidentTimelineId',
      time: 'time',
      timelineId: 'timelineId',
      title: 'title',
      type: 'type',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childType: 'string',
      content: 'string',
      incidentId: 'string',
      incidentTimelineId: 'string',
      time: 'number',
      timelineId: 'string',
      title: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

