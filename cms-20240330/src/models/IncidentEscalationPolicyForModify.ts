// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationStageForView } from "./IncidentEscalationStageForView";


export class IncidentEscalationPolicyForModify extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * workspace api monitor create test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the policy is enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of escalation stages. This list defines multiple progressive escalation steps. Each stage contains trigger conditions and notification targets.
   */
  escalationStageList?: IncidentEscalationStageForView[];
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * "Critical-Alert-Escalation"
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

