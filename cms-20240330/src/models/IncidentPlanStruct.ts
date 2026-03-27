// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentPlanCorporationStruct } from "./IncidentPlanCorporationStruct";
import { IncidentPlanFieldPath } from "./IncidentPlanFieldPath";


export class IncidentPlanStruct extends $dara.Model {
  /**
   * @remarks
   * Automatic recovery wait time.
   * 
   * @example
   * 3600
   */
  autoRecoverSeconds?: number;
  /**
   * @remarks
   * Event closure timeout.
   * 
   * @example
   * 86400000
   */
  closeExpire?: number;
  /**
   * @remarks
   * List of teams or roles involved in collaboration.
   */
  corporation?: IncidentPlanCorporationStruct[];
  /**
   * @remarks
   * Contingency plan description.
   * 
   * @example
   * Emergency response plan for excessively high database connection count.
   */
  description?: string;
  /**
   * @remarks
   * List of escalation policy IDs.
   */
  escalationId?: string[];
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1741234567890
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Last modification time.
   * 
   * @example
   * 1741234567890
   */
  gmtModified?: number;
  /**
   * @remarks
   * Grouping field path.
   */
  groupBy?: IncidentPlanFieldPath[];
  /**
   * @remarks
   * Event contingency plan ID.
   * 
   * @example
   * plan-001
   */
  incidentPlanId?: string;
  /**
   * @remarks
   * Contingency plan name.
   * 
   * @example
   * Database connection count alert contingency plan.
   */
  name?: string;
  /**
   * @remarks
   * List of resource field mapping paths.
   */
  resourceFiled?: IncidentPlanFieldPath[];
  /**
   * @remarks
   * Status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * uesr-12345
   */
  userId?: number;
  /**
   * @remarks
   * Workspace name.
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

