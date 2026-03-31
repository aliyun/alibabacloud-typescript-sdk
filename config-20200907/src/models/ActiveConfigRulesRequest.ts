// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActiveConfigRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * @example
   * cp-fe416457e0d90022****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The rule ID. Separate multiple rule IDs with commas (,).
   * 
   * @example
   * cr-2da35180a8d1008e****,cr-2da35180a8d1008e****
   */
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
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

