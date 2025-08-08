// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityRuleDetailResponseBodyData extends $dara.Model {
  keyWords?: string[];
  matchType?: number;
  name?: string;
  ruleCreateTime?: string;
  ruleId?: number;
  ruleTag?: number;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      matchType: 'MatchType',
      name: 'Name',
      ruleCreateTime: 'RuleCreateTime',
      ruleId: 'RuleId',
      ruleTag: 'RuleTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: { 'type': 'array', 'itemType': 'string' },
      matchType: 'number',
      name: 'string',
      ruleCreateTime: 'string',
      ruleId: 'number',
      ruleTag: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleDetailResponseBody extends $dara.Model {
  code?: string;
  data?: GetQualityRuleDetailResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQualityRuleDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

