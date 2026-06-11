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
   * The timeout period for closing an event.
   * 
   * @example
   * 86400000
   */
  closeExpire?: number;
  /**
   * @remarks
   * A list of collaborating teams or roles.
   */
  corporation?: IncidentPlanCorporationStruct[];
  /**
   * @remarks
   * The description of the plan.
   * 
   * @example
   * 针对数据库连接数过高的应急处理方案
   */
  description?: string;
  /**
   * @remarks
   * A list of escalation policy IDs.
   */
  escalationId?: string[];
  /**
   * @remarks
   * The time when the plan was created.
   * 
   * @example
   * 1741234567890
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the plan was last modified.
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
   * The name of the plan.
   * 
   * @example
   * 数据库连接数告警预案
   */
  name?: string;
  /**
   * @remarks
   * A list of resource field mapping paths.
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
   * uesr-12345
   */
  userId?: number;
  /**
   * @remarks
   * The name of the workspace.
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

