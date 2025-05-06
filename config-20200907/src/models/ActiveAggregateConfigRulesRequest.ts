// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActiveAggregateConfigRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * This parameter is required.
   * 
   * @example
   * ca-a4e5626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cp-fe416457e0d90022****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * *   If the rule is enabled, no error code is returned.
   * *   If the rule fails to be enabled, an error code is returned. For more information about error codes, see [Error codes](https://error-center.alibabacloud.com/status/product/Config).
   * 
   * @example
   * cr-5772ba41209e007b****
   */
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      compliancePackId: 'string',
      configRuleIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

