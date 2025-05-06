// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy extends $dara.Model {
  /**
   * @remarks
   * The compliance package ID.
   * 
   * @example
   * cp-fdc8626622af00f9****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance package.
   * 
   * @example
   * test-pack-name
   */
  compliancePackName?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      compliancePackName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

