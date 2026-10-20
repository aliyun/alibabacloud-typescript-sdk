// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewARMServerInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - **true**: Auto-renewal is enabled.
   * - **false**: Auto-renewal is not enabled. This is the default value.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the server instance to be renewed.
   * 
   * Pass the ServerId (with the cas- prefix) returned by DescribeARMServerInstances, not the InstanceId (with the aic- prefix) in AICInstances.
   * 
   * This parameter is required.
   * 
   * @example
   * yourInstance ID
   */
  instanceId?: string;
  /**
   * @remarks
   * The renewal period. By default, the instance is renewed on a monthly basis. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, and 12.
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
   * - Month (default)
   * - Year
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

