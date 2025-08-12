// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExporterRuleRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * The name of the data export rule.
   * 
   * This parameter is required.
   * 
   * @example
   * myRuleName
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

