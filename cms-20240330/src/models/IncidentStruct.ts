// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationStruct } from "./IncidentEscalationStruct";
import { IncidentPlanStruct } from "./IncidentPlanStruct";
import { IncidentResourceDetail } from "./IncidentResourceDetail";


export class IncidentStruct extends $dara.Model {
  /**
   * @remarks
   * 事件内容。
   * 
   * @example
   * 检测到 RDS 实例 rds-bp1234567890abcdef 的连接数达到 1000，已触发告警。
   */
  content?: string;
  /**
   * @remarks
   * 升级策略列表。
   */
  escalations?: IncidentEscalationStruct[];
  /**
   * @remarks
   * 事件唯一 ID。
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * 关联的事件预案。
   */
  incidentPlan?: IncidentPlanStruct;
  /**
   * @remarks
   * 关联的资源详情。
   */
  resource?: IncidentResourceDetail;
  /**
   * @remarks
   * 事件严重等级。
   * 
   * @example
   * P1
   */
  severity?: string;
  /**
   * @remarks
   * 当前状态。
   * 
   * @example
   * OPEN
   */
  status?: string;
  /**
   * @remarks
   * 时间戳
   * 
   * @example
   * 1741234567890
   */
  time?: number;
  /**
   * @remarks
   * 事件标题。
   * 
   * @example
   * 数据库连接数过高
   */
  title?: string;
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
      content: 'content',
      escalations: 'escalations',
      incidentId: 'incidentId',
      incidentPlan: 'incidentPlan',
      resource: 'resource',
      severity: 'severity',
      status: 'status',
      time: 'time',
      title: 'title',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      escalations: { 'type': 'array', 'itemType': IncidentEscalationStruct },
      incidentId: 'string',
      incidentPlan: IncidentPlanStruct,
      resource: IncidentResourceDetail,
      severity: 'string',
      status: 'string',
      time: 'number',
      title: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.escalations)) {
      $dara.Model.validateArray(this.escalations);
    }
    if(this.incidentPlan && typeof (this.incidentPlan as any).validate === 'function') {
      (this.incidentPlan as any).validate();
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

