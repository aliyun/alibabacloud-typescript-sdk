// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewARMServerInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the premium bandwidth plan. Valid values:
   * 
   * *   **true**.
   * *   **false** (default).
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the instance that you want to renew.
   * 
   * This parameter is required.
   * 
   * @example
   * yourInstance ID
   */
  instanceId?: string;
  /**
   * @remarks
   * The renewal period. By default, instances are renewed on a monthly basis. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, and 12.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal period. Valid values:
   * 
   * *   Month (default)
   * *   Year
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      instanceId: 'InstanceId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      instanceId: 'string',
      period: 'number',
      periodUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

