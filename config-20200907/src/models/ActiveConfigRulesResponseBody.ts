// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-2da35180a8d1008e****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * *   If the rule is enabled, no error code is returned.
   * *   If the rule fails to be enabled, an error code is returned. For more information about error codes, see [Error codes](https://next.api.aliyun.com/document/Config/2020-09-07/errorCode).
   * 
   * @example
   * ConfigRuleStatusNotInActive
   */
  errorCode?: string;
  /**
   * @remarks
   * Indicates whether the rule is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
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

export class ActiveConfigRulesResponseBodyOperateRuleResult extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  operateRuleItemList?: ActiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': ActiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
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

export class ActiveConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  operateRuleResult?: ActiveConfigRulesResponseBodyOperateRuleResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 61C1A88F-D163-40DF-84A6-F200229F37B2
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
      operateRuleResult: ActiveConfigRulesResponseBodyOperateRuleResult,
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

