// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityRuleTagListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule tag.
   * 
   * @example
   * 70
   */
  ruleTagId?: number;
  /**
   * @remarks
   * The name of the rule tag.
   * 
   * @example
   * Modify tag
   */
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
   * The list of rule tags.
   */
  data?: GetQualityRuleTagListResponseBodyData[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * xxxx
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
   * Indicates whether the API call was successful.
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

