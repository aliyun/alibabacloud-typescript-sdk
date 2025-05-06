// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRuleResponseBodyConfigRuleCreateBy extends $dara.Model {
  /**
   * @remarks
   * The compliance package ID.
   * 
   * @example
   * cp-541e626622af008****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance package.
   * 
   * @example
   * example-name
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The ID of the account that was used to create the rule.
   * 
   * @example
   * 100931896542****
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the account that was used to create the rule.
   * 
   * @example
   * Alice
   */
  creatorName?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      compliancePackName: 'string',
      creatorId: 'string',
      creatorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

