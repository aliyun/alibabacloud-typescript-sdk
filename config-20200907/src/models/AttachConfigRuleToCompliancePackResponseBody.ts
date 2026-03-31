// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-6cc4626622af00e7****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * *   This parameter is empty if the rule is added to the compliance package.
   * *   An error code is returned if the rule fails to be added to the compliance package. For more information about error codes, see [Error codes](https://error-center.alibabacloud.com/status/product/Config).
   * 
   * @example
   * ConfigRuleNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
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

export class AttachConfigRuleToCompliancePackResponseBodyOperateRuleResult extends $dara.Model {
  /**
   * @remarks
   * The result of the operation to add the rule.
   */
  operateRuleItemList?: AttachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': AttachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList },
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

export class AttachConfigRuleToCompliancePackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the operations to add one or more rules.
   */
  operateRuleResult?: AttachConfigRuleToCompliancePackResponseBodyOperateRuleResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB12A
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
      operateRuleResult: AttachConfigRuleToCompliancePackResponseBodyOperateRuleResult,
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

