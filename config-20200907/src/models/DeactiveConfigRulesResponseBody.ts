// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeactiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-19a56457e0d90058****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * *   If the rule is disabled, no error code is returned.
   * *   If the rule fails to be disabled, an error code is returned. For more information about error codes, see [Error codes](https://error-center.alibabacloud.com/status/product/Config).
   * 
   * @example
   * ConfigRuleCanNotDelete
   */
  errorCode?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveConfigRulesResponseBodyOperateRuleResult extends $dara.Model {
  /**
   * @remarks
   * The operations that are performed to disable the rule.
   */
  operateRuleItemList?: DeactiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DeactiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
    };
  }

  validate() {
    if(Array.isArray(this.operateRuleItemList)) {
      $dara.Model.validateArray(this.operateRuleItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the operations that are performed to disable the specified rules.
   */
  operateRuleResult?: DeactiveConfigRulesResponseBodyOperateRuleResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54FA74D9-45D4-4CA5-9BE1-97F6EA19AF5B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateRuleResult: 'OperateRuleResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleResult: DeactiveConfigRulesResponseBodyOperateRuleResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.operateRuleResult && typeof (this.operateRuleResult as any).validate === 'function') {
      (this.operateRuleResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

