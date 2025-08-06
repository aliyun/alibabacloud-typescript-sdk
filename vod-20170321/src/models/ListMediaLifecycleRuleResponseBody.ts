// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaLifecycleRuleResponseBodyRuleList extends $dara.Model {
  appId?: string;
  creationTime?: string;
  modificationTime?: string;
  ruleContent?: string;
  ruleId?: string;
  ruleType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      modificationTime: 'ModificationTime',
      ruleContent: 'RuleContent',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      modificationTime: 'string',
      ruleContent: 'string',
      ruleId: 'string',
      ruleType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaLifecycleRuleResponseBody extends $dara.Model {
  requestId?: string;
  ruleList?: ListMediaLifecycleRuleResponseBodyRuleList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleList: 'RuleList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleList: { 'type': 'array', 'itemType': ListMediaLifecycleRuleResponseBodyRuleList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

