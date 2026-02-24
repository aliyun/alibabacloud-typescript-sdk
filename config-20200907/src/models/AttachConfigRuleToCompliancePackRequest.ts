// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachConfigRuleToCompliancePackRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  compliancePackId?: string;
  /**
   * @remarks
   * This parameter is required.
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

