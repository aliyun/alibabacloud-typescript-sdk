// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationStageStruct } from "./IncidentEscalationStageStruct";


export class IncidentEscalationStruct extends $dara.Model {
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: number;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * When an alert is not acknowledged, notify the operations team, on-duty manager, and CTO sequentially.
   */
  description?: string;
  /**
   * @remarks
   * Event Escalation ID.
   * 
   * @example
   * 52631388567
   */
  incidentEscalationId?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  modifyTime?: number;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * Production Environment Alert Escalation Policy.
   */
  name?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Phase.
   */
  stage?: IncidentEscalationStageStruct[];
  /**
   * @remarks
   * Workspace.
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      incidentEscalationId: 'incidentEscalationId',
      modifyTime: 'modifyTime',
      name: 'name',
      regionId: 'regionId',
      stage: 'stage',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      incidentEscalationId: 'string',
      modifyTime: 'number',
      name: 'string',
      regionId: 'string',
      stage: { 'type': 'array', 'itemType': IncidentEscalationStageStruct },
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.stage)) {
      $dara.Model.validateArray(this.stage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

