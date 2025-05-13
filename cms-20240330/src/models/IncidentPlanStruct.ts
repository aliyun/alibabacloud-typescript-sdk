// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentPlanCorporationStruct } from "./IncidentPlanCorporationStruct";
import { IncidentPlanFieldPath } from "./IncidentPlanFieldPath";


export class IncidentPlanStruct extends $dara.Model {
  autoRecoverSeconds?: number;
  closeExpire?: number;
  corporation?: IncidentPlanCorporationStruct[];
  description?: string;
  escalationId?: string[];
  gmtCreate?: number;
  gmtModified?: number;
  groupBy?: IncidentPlanFieldPath[];
  incidentPlanId?: string;
  name?: string;
  resourceFiled?: IncidentPlanFieldPath[];
  status?: string;
  userId?: number;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      autoRecoverSeconds: 'autoRecoverSeconds',
      closeExpire: 'closeExpire',
      corporation: 'corporation',
      description: 'description',
      escalationId: 'escalationId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      groupBy: 'groupBy',
      incidentPlanId: 'incidentPlanId',
      name: 'name',
      resourceFiled: 'resourceFiled',
      status: 'status',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecoverSeconds: 'number',
      closeExpire: 'number',
      corporation: { 'type': 'array', 'itemType': IncidentPlanCorporationStruct },
      description: 'string',
      escalationId: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'number',
      gmtModified: 'number',
      groupBy: { 'type': 'array', 'itemType': IncidentPlanFieldPath },
      incidentPlanId: 'string',
      name: 'string',
      resourceFiled: { 'type': 'array', 'itemType': IncidentPlanFieldPath },
      status: 'string',
      userId: 'number',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.corporation)) {
      $dara.Model.validateArray(this.corporation);
    }
    if(Array.isArray(this.escalationId)) {
      $dara.Model.validateArray(this.escalationId);
    }
    if(Array.isArray(this.groupBy)) {
      $dara.Model.validateArray(this.groupBy);
    }
    if(Array.isArray(this.resourceFiled)) {
      $dara.Model.validateArray(this.resourceFiled);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

