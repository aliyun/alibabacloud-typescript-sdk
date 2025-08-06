// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaLifecycleRuleResponseBody extends $dara.Model {
  forbiddenRuleIds?: string[];
  nonExistRuleIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forbiddenRuleIds: 'ForbiddenRuleIds',
      nonExistRuleIds: 'NonExistRuleIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenRuleIds: { 'type': 'array', 'itemType': 'string' },
      nonExistRuleIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.forbiddenRuleIds)) {
      $dara.Model.validateArray(this.forbiddenRuleIds);
    }
    if(Array.isArray(this.nonExistRuleIds)) {
      $dara.Model.validateArray(this.nonExistRuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

