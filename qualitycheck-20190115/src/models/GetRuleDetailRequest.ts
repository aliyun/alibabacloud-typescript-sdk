// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuleDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * A complete JSON string. See the details below for the exact format.
   * 
   * This parameter is required.
   * 
   * @example
   * {"ruleIds":"123"}
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

