// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContactForIncidentView } from "./ContactForIncidentView";


export class IncidentTimelineForView extends $dara.Model {
  changeType?: string;
  content?: any;
  incidentUuid?: string;
  operator?: ContactForIncidentView;
  time?: number;
  timelineUuid?: string;
  title?: string;
  type?: string;
  userId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'changeType',
      content: 'content',
      incidentUuid: 'incidentUuid',
      operator: 'operator',
      time: 'time',
      timelineUuid: 'timelineUuid',
      title: 'title',
      type: 'type',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      content: 'any',
      incidentUuid: 'string',
      operator: ContactForIncidentView,
      time: 'number',
      timelineUuid: 'string',
      title: 'string',
      type: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.operator && typeof (this.operator as any).validate === 'function') {
      (this.operator as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

