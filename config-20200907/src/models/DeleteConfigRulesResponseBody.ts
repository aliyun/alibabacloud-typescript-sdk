// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConfigRulesResponseBodyOperateRuleResultOperateRuleItemList extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-9908626622af0035****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * *   If the rule is disabled, no error code is returned.
   * *   If the rule fails to be disabled, an error code is returned. For more information about error codes, see [Error codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode).
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

export class DeleteConfigRulesResponseBodyOperateRuleResult extends $dara.Model {
  /**
   * @remarks
   * The result of the delete operation.
   */
  operateRuleItemList?: DeleteConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DeleteConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
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

export class DeleteConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the delete operations.
   */
  operateRuleResult?: DeleteConfigRulesResponseBodyOperateRuleResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6721BBD3-F2A6-5349-9051-EE0111036D3F
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
      operateRuleResult: DeleteConfigRulesResponseBodyOperateRuleResult,
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

