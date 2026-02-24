// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList extends $dara.Model {
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
   * The error code.
   * 
   * - This parameter is empty if the operation is successful.
   * 
   * <props="china">
   * 
   * - An error code is returned if the operation fails. For more information about error codes, see the [Error Center](https://error-center.aliyun.com/status/product/Config).
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * - An error code is returned if the operation fails. For more information about error codes, see the [Error Center](https://error-center.alibabacloud.com/status/product/Config).
   * 
   * @example
   * ConfigRuleNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
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

export class DetachConfigRuleToCompliancePackResponseBodyOperateRuleResult extends $dara.Model {
  /**
   * @remarks
   * A list of the results of the operation to detach rules.
   */
  operateRuleItemList?: DetachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DetachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList },
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

export class DetachConfigRuleToCompliancePackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the operation to detach rules.
   */
  operateRuleResult?: DetachConfigRuleToCompliancePackResponseBodyOperateRuleResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AC7AED1-172F-42AE-9C12-295BC2ADB12A
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
      operateRuleResult: DetachConfigRuleToCompliancePackResponseBodyOperateRuleResult,
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

