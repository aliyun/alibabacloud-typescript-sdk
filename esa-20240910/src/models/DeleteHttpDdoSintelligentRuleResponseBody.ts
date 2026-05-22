// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHttpDDoSIntelligentRuleResponseBody extends $dara.Model {
  recordName?: string;
  requestId?: string;
  ruleId?: number;
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      recordName: 'RecordName',
      requestId: 'RequestId',
      ruleId: 'RuleId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordName: 'string',
      requestId: 'string',
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

