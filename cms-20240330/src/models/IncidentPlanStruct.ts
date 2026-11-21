// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentPlanCorporationStruct } from "./IncidentPlanCorporationStruct";
import { IncidentPlanFieldPath } from "./IncidentPlanFieldPath";


export class IncidentPlanStruct extends $dara.Model {
  /**
   * @remarks
   * The wait time for automatic recovery.
   * 
   * @example
   * 3600
   */
  autoRecoverSeconds?: number;
  /**
   * @remarks
   * The timeout period for closing the incident.
   * 
   * @example
   * 86400000
   */
  closeExpire?: number;
  /**
   * @remarks
   * The list of teams or roles involved in the collaboration.
   */
  corporation?: IncidentPlanCorporationStruct[];
  /**
   * @remarks
   * The plan description.
   * 
   * @example
   * Emergency response plan for excessive database connections
   */
  description?: string;
  /**
   * @remarks
   * The list of escalation policy IDs.
   */
  escalationId?: string[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1741234567890
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1741234567890
   */
  gmtModified?: number;
  /**
   * @remarks
   * The grouping field path.
   */
  groupBy?: IncidentPlanFieldPath[];
  /**
   * @remarks
   * The incident plan ID.
   * 
   * @example
   * plan-001
   */
  incidentPlanId?: string;
  /**
   * @remarks
   * The plan name.
   * 
   * @example
   * Incident plan for database connection alerts
   */
  name?: string;
  /**
   * @remarks
   * The list of resource field mapping paths.
   */
  resourceFiled?: IncidentPlanFieldPath[];
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123456
   */
  userId?: number;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * workspace-test
   */
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

