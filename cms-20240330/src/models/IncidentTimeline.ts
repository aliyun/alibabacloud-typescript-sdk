// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentTimeline extends $dara.Model {
  /**
   * @remarks
   * The child type.
   * 
   * @example
   * comment
   */
  childType?: string;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * 已通知运维团队进行排查
   */
  content?: string;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * The unique ID of the timeline node.
   * 
   * @example
   * timeline-001
   */
  incidentTimelineId?: string;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1741234567890
   */
  time?: number;
  /**
   * @remarks
   * The ID of the timeline.
   * 
   * @example
   * timeline-main-001
   */
  timelineId?: string;
  /**
   * @remarks
   * The timeline title.
   * 
   * @example
   * 已联系运维团队
   */
  title?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * ACTION
   */
  type?: string;
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

