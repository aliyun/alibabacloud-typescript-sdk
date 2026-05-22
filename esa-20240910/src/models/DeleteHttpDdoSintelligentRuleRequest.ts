// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHttpDDoSIntelligentRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  recordName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      recordName: 'RecordName',
      ruleId: 'RuleId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordName: 'string',
      ruleId: 'number',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

