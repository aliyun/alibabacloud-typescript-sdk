// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityRuleDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The keywords.
   */
  keyWords?: string[];
  /**
   * @remarks
   * The keyword match type. Valid values:
   * 
   * - **1**: Any keyword appears.
   * - **2**: All keywords appear.
   * - **3**: No keywords appear.
   * 
   * @example
   * 1
   */
  matchType?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * Auto-created quality check rule
   */
  name?: string;
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * Mon Mar 29 22:14:02 CST 2021
   */
  ruleCreateTime?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 5369
   */
  ruleId?: number;
  /**
   * @remarks
   * The tag of the rule.
   * 
   * @example
   * 638
   */
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
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The quality check rule information.
   */
  data?: GetQualityRuleDetailResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful.
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

