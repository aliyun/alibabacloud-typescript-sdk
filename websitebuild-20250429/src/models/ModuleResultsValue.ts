// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleResultsValue extends $dara.Model {
  /**
   * @remarks
   * Returned only for APP_WORKSPACE: the target total amount for this check, which is the used amount in the saved configuration plus the ResourceValue. If a compatible DesiredTotal is provided, this total amount is used directly. The used amount for issues is the sum of regular and reputation issues in the saved configuration, and the used amount for competitors is the number of competitors. This field is empty for APP and USER checks.
   * 
   * @example
   * 21
   */
  desiredTotal?: number;
  /**
   * @remarks
   * The error code when the check fails. This field is null when the check passes.
   * 
   * @example
   * Resource.Control.No.Usage
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message when the check fails. This field is null when the check passes.
   * 
   * @example
   * Quota exhausted
   */
  errorMessage?: string;
  /**
   * @remarks
   * Returned only for APP_WORKSPACE quantity pre-checks: the maximum number of issues or competitors allowed by the current product edition, which is not the remaining quota. This field is empty for APP and USER checks or when the edition benefits cannot be determined.
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * Indicates whether the check passed.
   * 
   * @example
   * true
   */
  passed?: boolean;
  /**
   * @remarks
   * The resource code.
   * 
   * @example
   * InspirationTokens
   */
  resourceCode?: string;
  /**
   * @remarks
   * Indicates whether a purchasable higher edition exists that can accommodate the DesiredTotal. This field is true only when the capacity of the current edition is insufficient and a higher edition meets the requirement. Otherwise, it is false. This field may be empty for APP and USER checks. This field does not indicate that an upgrade has been performed or an upgrade order has been created.
   * 
   * @example
   * true
   */
  upgradeAvailable?: boolean;
  static names(): { [key: string]: string } {
    return {
      desiredTotal: 'DesiredTotal',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      limit: 'Limit',
      passed: 'Passed',
      resourceCode: 'ResourceCode',
      upgradeAvailable: 'UpgradeAvailable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredTotal: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      limit: 'number',
      passed: 'boolean',
      resourceCode: 'string',
      upgradeAvailable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

