// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityRuleTagListResponseBodyData extends $dara.Model {
  ruleTagId?: number;
  ruleTagName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleTagId: 'RuleTagId',
      ruleTagName: 'RuleTagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleTagId: 'number',
      ruleTagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleTagListResponseBody extends $dara.Model {
  code?: string;
  data?: GetQualityRuleTagListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': GetQualityRuleTagListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

