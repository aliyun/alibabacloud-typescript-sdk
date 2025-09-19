// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the baseline check policy. Valid values:
   * 
   * *   **custom**: a custom baseline check policy
   * *   **common**: a standard baseline check policy
   * 
   * This parameter is required.
   * 
   * @example
   * common
   */
  customType?: string;
  /**
   * @remarks
   * The new interval of the baseline check. Valid values:
   * 
   * *   **1**: every 2 days
   * *   **3**: every 4 days
   * *   **7**: every 8 days
   * *   **30**: every 31 days
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cycleDays?: string;
  /**
   * @remarks
   * The new time range during which the baseline check starts. Valid values:
   * 
   * *   **0**: The baseline check starts within the time range from 00:00 to 06:00.
   * *   **6**: The baseline check starts within the time range from 06:00 to 12:00.
   * *   **12**: The baseline check starts within the time range from 12:00 to 18:00.
   * *   **18**: The baseline check starts within the time range from 18:00 to 24:00.
   * 
   * >  This parameter is deprecated.
   * 
   * @example
   * 18
   */
  cycleStartTime?: string;
  /**
   * @remarks
   * The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 05:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the baseline check policy.
   * 
   * @example
   * 245
   */
  id?: string;
  /**
   * @remarks
   * The new name of the baseline check policy.
   * 
   * This parameter is required.
   * 
   * @example
   * testStrategy
   */
  name?: string;
  /**
   * @remarks
   * The custom configurations of the baseline. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **typeName**: the name of the baseline.
   * 
   * *   **checkDetails**: the details of the baseline. The value is in the JSON format.
   * 
   *     *   **checkId**: the ID of the check item.
   * 
   *     *   **rules**: the rule configurations. The value is in the JSON format.
   * 
   *         *   **ruleId**: the ID of the rule.
   * 
   *         *   **paramList**: the list of parameters in the rule. The value is in the JSON format.
   * 
   *             *   **paramName**: the name of the parameter.
   *             *   **value**: the value of the parameter.
   * 
   * @example
   * [{"typeName":"hc_centos_6_custom","checkDetails":[{"checkId":4,"rules":[{"ruleId":"pass_min_days_login_defs.must.cus","paramList":[{"paramName":"range_val","value":"7"}]}]}]}]
   */
  riskCustomParams?: string;
  /**
   * @remarks
   * The subtype of the baselines. You can call the [DescribeRiskType](~~DescribeRiskType~~) operation to query the subtypes of baselines.
   * 
   * This parameter is required.
   * 
   * @example
   * hc_exploit_redis
   */
  riskSubTypeName?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.168.X.X
   */
  sourceIp?: string;
  /**
   * @remarks
   * The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 00:01:00
   */
  startTime?: string;
  /**
   * @remarks
   * The method that is used to apply the baseline check policy. Valid values:
   * 
   * *   **groupId**: asset groups
   * *   **uuid**: assets
   * 
   * This parameter is required.
   * 
   * @example
   * groupId
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      customType: 'CustomType',
      cycleDays: 'CycleDays',
      cycleStartTime: 'CycleStartTime',
      endTime: 'EndTime',
      id: 'Id',
      name: 'Name',
      riskCustomParams: 'RiskCustomParams',
      riskSubTypeName: 'RiskSubTypeName',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customType: 'string',
      cycleDays: 'string',
      cycleStartTime: 'string',
      endTime: 'string',
      id: 'string',
      name: 'string',
      riskCustomParams: 'string',
      riskSubTypeName: 'string',
      sourceIp: 'string',
      startTime: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

