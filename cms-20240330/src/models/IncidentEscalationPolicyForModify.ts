// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationStageForView } from "./IncidentEscalationStageForView";


export class IncidentEscalationPolicyForModify extends $dara.Model {
  description?: string;
  enable?: boolean;
  escalationStageList?: IncidentEscalationStageForView[];
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      enable: 'enable',
      escalationStageList: 'escalationStageList',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enable: 'boolean',
      escalationStageList: { 'type': 'array', 'itemType': IncidentEscalationStageForView },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.escalationStageList)) {
      $dara.Model.validateArray(this.escalationStageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

