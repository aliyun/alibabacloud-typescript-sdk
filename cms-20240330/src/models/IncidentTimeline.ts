// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentTimeline extends $dara.Model {
  childType?: string;
  content?: string;
  incidentId?: string;
  incidentTimelineId?: string;
  time?: number;
  timelineId?: string;
  title?: string;
  type?: string;
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

