// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaLifecycleRuleResponseBodyRuleList extends $dara.Model {
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

export class GetMediaLifecycleRuleResponseBody extends $dara.Model {
  forbiddenRuleIds?: string[];
  nonExistRuleIds?: string[];
  requestId?: string;
  ruleList?: GetMediaLifecycleRuleResponseBodyRuleList[];
  static names(): { [key: string]: string } {
    return {
      forbiddenRuleIds: 'ForbiddenRuleIds',
      nonExistRuleIds: 'NonExistRuleIds',
      requestId: 'RequestId',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenRuleIds: { 'type': 'array', 'itemType': 'string' },
      nonExistRuleIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      ruleList: { 'type': 'array', 'itemType': GetMediaLifecycleRuleResponseBodyRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.forbiddenRuleIds)) {
      $dara.Model.validateArray(this.forbiddenRuleIds);
    }
    if(Array.isArray(this.nonExistRuleIds)) {
      $dara.Model.validateArray(this.nonExistRuleIds);
    }
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

