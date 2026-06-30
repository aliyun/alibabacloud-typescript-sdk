// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTaskAssignRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * A complete JSON string. For details, see the input parameter description below.
   * 
   * This parameter is required.
   * 
   * @example
   * {"ruleId": 24}
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

