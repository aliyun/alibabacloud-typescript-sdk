// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationStruct } from "./IncidentEscalationStruct";
import { IncidentPlanStruct } from "./IncidentPlanStruct";
import { IncidentResourceDetail } from "./IncidentResourceDetail";


export class IncidentStruct extends $dara.Model {
  /**
   * @remarks
   * Content.
   * 
   * @example
   * Detected that the connection count of RDS instance rds-bp1234567890abcdef has reached 1000, triggering an alert.
   */
  content?: string;
  /**
   * @remarks
   * List of escalation policies.
   */
  escalations?: IncidentEscalationStruct[];
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
   * Associated incident contingency plan.
   */
  incidentPlan?: IncidentPlanStruct;
  /**
   * @remarks
   * Associated resource details.
   */
  resource?: IncidentResourceDetail;
  /**
   * @remarks
   * Incident severity level.
   * 
   * @example
   * P1
   */
  severity?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * OPEN
   */
  status?: string;
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
   * Title.
   * 
   * @example
   * Excessively high database connection count.
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

