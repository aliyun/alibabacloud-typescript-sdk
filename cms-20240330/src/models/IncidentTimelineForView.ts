// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContactForIncidentView } from "./ContactForIncidentView";


export class IncidentTimelineForView extends $dara.Model {
  /**
   * @example
   * "Open -> In Progress"
   */
  changeType?: string;
  /**
   * @example
   * "{"action":"restart","resourceId":"i-bp123456"}"
   */
  content?: any;
  /**
   * @example
   * "a1b2c3d4-e5f6-7890-1234-567890abcdef"
   */
  incidentUuid?: string;
  operator?: ContactForIncidentView;
  /**
   * @example
   * 1743876000000
   */
  time?: number;
  /**
   * @example
   * "x1y2z3a4-b5c6-d7e8-f9g0-h1i2j3k4l5m6"
   */
  timelineUuid?: string;
  title?: string;
  /**
   * @example
   * "Comment"
   */
  type?: string;
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

