// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskAssignRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * A complete JSON string. For details, see the parameter descriptions below.
   * 
   * This parameter is required.
   * 
   * @example
   * {"callType":"0","durationMin":1,"durationMax":300,"agents":[{"agentId":"202526561358712105","agentName":"agent"}],"rules":[{"rid":15659}],"reviewers":[{"reviewerId":"255746168704895558","reviewerName":"0917质检员"},{"reviewerId":"268370362815185444","reviewerName":"0710质检员"}],"skillGroups":[{"skillName":"客服组"}],"priority":5}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

