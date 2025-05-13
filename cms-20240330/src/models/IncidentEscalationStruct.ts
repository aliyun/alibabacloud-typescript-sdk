// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationStageStruct } from "./IncidentEscalationStageStruct";


export class IncidentEscalationStruct extends $dara.Model {
  createTime?: number;
  description?: string;
  incidentEscalationId?: string;
  modifyTime?: number;
  name?: string;
  regionId?: string;
  stage?: IncidentEscalationStageStruct[];
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

