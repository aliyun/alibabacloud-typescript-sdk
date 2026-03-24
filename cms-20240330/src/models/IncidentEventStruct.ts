// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentEventStruct extends $dara.Model {
  /**
   * @remarks
   * 自动恢复时间。
   * 
   * @example
   * 1741234567890
   */
  autoRecoverTime?: number;
  /**
   * @remarks
   * 内容。
   * 
   * @example
   * 检测到 user-service 实例 i-abc123 的 CPU 使用率达到 95%，已触发告警。
   */
  content?: string;
  /**
   * @remarks
   * 统计数量。
   * 
   * @example
   * 6
   */
  count?: number;
  /**
   * @remarks
   * 维度。
   */
  dimension?: { [key: string]: string };
  /**
   * @remarks
   * 用于分组维度。
   */
  groupBy?: { [key: string]: string };
  /**
   * @remarks
   * 事件事件ID。
   * 
   * @example
   * event-001
   */
  incidentEventId?: string;
  /**
   * @remarks
   * 事件ID。
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * 最后时间。
   * 
   * @example
   * 1741234567890
   */
  lastTime?: number;
  /**
   * @remarks
   * 手动恢复时间。
   * 
   * @example
   * 1741234567890
   */
  recoverTime?: number;
  /**
   * @remarks
   * 描述事件关联的资源信息。
   */
  resource?: { [key: string]: string };
  /**
   * @remarks
   * 状态。
   * 
   * @example
   * Running
   */
  status?: number;
  /**
   * @remarks
   * 时间。
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  time?: string;
  /**
   * @remarks
   * 标题。
   * 
   * @example
   * 用户服务 CPU 使用率过高
   */
  title?: string;
  /**
   * @remarks
   * 用户ID。
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

