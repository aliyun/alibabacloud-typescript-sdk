// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLhmAgentStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The Agent type. Valid values:
   * - 0: data validation (the only type currently supported).
   * - 1: metadata.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  agentType?: number;
  /**
   * @remarks
   * The skill name. This parameter is optional.
   * 
   * @example
   * lhm-data-validation-skill
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'agentType',
      skillName: 'skillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'number',
      skillName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

