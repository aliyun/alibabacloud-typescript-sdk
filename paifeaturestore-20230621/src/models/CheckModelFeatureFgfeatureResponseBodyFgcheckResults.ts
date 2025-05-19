// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckModelFeatureFGFeatureResponseBodyFGCheckResults extends $dara.Model {
  /**
   * @example
   * f1[1]: these lookup_features\\"s LookupValueFeature(key) not exist in model features
   */
  message?: string;
  /**
   * @example
   * SeqSubEx
   */
  ruleCode?: string;
  /**
   * @example
   * True
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      ruleCode: 'RuleCode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      ruleCode: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

