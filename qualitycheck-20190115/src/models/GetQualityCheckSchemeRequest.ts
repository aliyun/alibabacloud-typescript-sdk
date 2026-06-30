// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityCheckSchemeRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The request parameters in JSON format. For more information, see the additional information for request parameters.
   * 
   * @example
   * {"schemeId":"187","ruleRequireInfos":["BusinessNameInfo","RuleCategory"]}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
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

