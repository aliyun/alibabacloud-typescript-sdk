// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceComplianceGroupByRegionRequest extends $dara.Model {
  /**
   * @remarks
   * The rule IDs. Separate multiple rule IDs with commas (,).
   * 
   * @example
   * cr-2541626622af0000****
   */
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

