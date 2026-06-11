// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationStruct } from "./IncidentEscalationStruct";
import { IncidentPlanStruct } from "./IncidentPlanStruct";
import { IncidentResourceDetail } from "./IncidentResourceDetail";


export class IncidentStruct extends $dara.Model {
  /**
   * @remarks
   * The content of the event.
   * 
   * @example
   * 检测到 RDS 实例 rds-bp1234567890abcdef 的连接数达到 1000，已触发告警。
   */
  content?: string;
  /**
   * @remarks
   * The list of escalation policies.
   */
  escalations?: IncidentEscalationStruct[];
  /**
   * @remarks
   * The unique ID of the event.
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * The associated incident plan.
   */
  incidentPlan?: IncidentPlanStruct;
  /**
   * @remarks
   * The details of the associated resource.
   */
  resource?: IncidentResourceDetail;
  /**
   * @remarks
   * The severity level of the event.
   * 
   * @example
   * P1
   */
  severity?: string;
  /**
   * @remarks
   * The current status.
   * 
   * @example
   * OPEN
   */
  status?: string;
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
   * The title of the event.
   * 
   * @example
   * 数据库连接数过高
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

