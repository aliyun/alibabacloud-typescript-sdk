// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-a124626622af00e7****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * *   This parameter is empty if the rule is removed from the compliance package.
   * *   An error code is returned if the rule fails to be removed from the compliance package. For more information about error codes, see [Error codes](https://error-center.alibabacloud.com/status/product/Config).
   * 
   * @example
   * ConfigRuleNotExists
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

