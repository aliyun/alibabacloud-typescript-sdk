// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationStageStruct } from "./IncidentEscalationStageStruct";


export class IncidentEscalationStruct extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1794984055029
   */
  createTime?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Notify the O&M team, on-call manager, and CTO sequentially when an alert is not responded to
   */
  description?: string;
  /**
   * @remarks
   * The incident escalation ID.
   * 
   * @example
   * 52631388567
   */
  incidentEscalationId?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1794984055029
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Production environment alert escalation policy
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The stage.
   */
  stage?: IncidentEscalationStageStruct[];
  /**
   * @remarks
   * The workspace.
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

