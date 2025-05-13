// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationStruct } from "./IncidentEscalationStruct";
import { IncidentPlanStruct } from "./IncidentPlanStruct";
import { IncidentResourceDetail } from "./IncidentResourceDetail";


export class IncidentStruct extends $dara.Model {
  content?: string;
  escalations?: IncidentEscalationStruct[];
  incidentId?: string;
  incidentPlan?: IncidentPlanStruct;
  resource?: IncidentResourceDetail;
  severity?: string;
  status?: string;
  time?: number;
  title?: string;
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

