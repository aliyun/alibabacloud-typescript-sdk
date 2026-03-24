// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentTimeline extends $dara.Model {
  /**
   * @remarks
   * 子类型。
   * 
   * @example
   * comment
   */
  childType?: string;
  /**
   * @remarks
   * 内容。
   * 
   * @example
   * 已通知运维团队进行排查
   */
  content?: string;
  /**
   * @remarks
   * 所属事件 ID。
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * 时间线节点唯一 ID。
   * 
   * @example
   * timeline-001
   */
  incidentTimelineId?: string;
  /**
   * @remarks
   * 时间戳。
   * 
   * @example
   * 1741234567890
   */
  time?: number;
  /**
   * @remarks
   * 所属时间线 ID。
   * 
   * @example
   * timeline-main-001
   */
  timelineId?: string;
  /**
   * @remarks
   * 时间线标题。
   * 
   * @example
   * 已联系运维团队
   */
  title?: string;
  /**
   * @remarks
   * 类型。
   * 
   * @example
   * ACTION
   */
  type?: string;
  /**
   * @remarks
   * 用户 ID。
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

