// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuleCategoryResponseBodyDataRuleCountInfo extends $dara.Model {
  select?: boolean;
  type?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
      type: 'number',
      typeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryResponseBodyData extends $dara.Model {
  ruleCountInfo?: GetRuleCategoryResponseBodyDataRuleCountInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleCountInfo: 'RuleCountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleCountInfo: { 'type': 'array', 'itemType': GetRuleCategoryResponseBodyDataRuleCountInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleCountInfo)) {
      $dara.Model.validateArray(this.ruleCountInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Other values indicate failure. Use this field to determine the cause of a failure.
   * 
   * @example
   * 200
   */
  code?: string;
  data?: GetRuleCategoryResponseBodyData;
  /**
   * @remarks
   * If an error occurs, this field provides error details. If the call is successful, the value is \\`successful\\`.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of \\`true\\` indicates success. A value of \\`false\\` or \\`null\\` indicates failure.
   * 
   * @example
   * true
   */
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
      data: GetRuleCategoryResponseBodyData,
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

