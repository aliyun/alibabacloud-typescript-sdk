// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * - **custom**: custom policy.
   * - **common**: standard policy.
   * 
   * This parameter is required.
   * 
   * @example
   * common
   */
  customType?: string;
  /**
   * @remarks
   * The cycle of the baseline check. Valid values:
   * 
   * - **1**: Every 1 day.
   * - **3**: Every 3 days.
   * - **7**: Every 7 days.
   * - **30**: Every 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cycleDays?: string;
  /**
   * @remarks
   * The start time of the baseline check. Valid values:
   * 
   * - **0**: The baseline check starts between 00:00 and 06:00.
   * - **6**: The baseline check starts between 06:00 and 12:00.
   * - **12**: The baseline check starts between 12:00 and 18:00.
   * - **18**: The baseline check starts between 18:00 and 24:00.
   * 
   * > This parameter is deprecated.
   * 
   * The value indicates the start hour of the daily check period, in hours.
   * 
   * @example
   * 18
   */
  cycleStartTime?: string;
  /**
   * @remarks
   * The end time of the policy execution. Format: hh:mm:ss.
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
   * The name of the baseline check policy.
   * 
   * This parameter is required.
   * 
   * @example
   * testStrategy
   */
  name?: string;
  /**
   * @remarks
   * The custom configuration of baseline check items. The value is in JSON format and contains the following parameters:
   * 
   * - **typeName**: The baseline name.
   * - **checkDetails**: The check details. The value is in JSON format.
   * 
   *     - **checkId**: The ID of the check item.
   *     - **rules**: The policy configuration. The value is in JSON format.
   * 
   *         - **ruleId**: The ID of the policy configuration.
   *         - **paramList**: The collection of policy parameter settings. The value is in JSON format.
   * 
   *             - **paramName**: The parameter name.
   *             - **value**: The parameter settings value.
   * 
   * @example
   * [{"typeName":"hc_centos_6_custom","checkDetails":[{"checkId":4,"rules":[{"ruleId":"pass_min_days_login_defs.must.cus","paramList":[{"paramName":"range_val","value":"7"}]}]}]}]
   */
  riskCustomParams?: string;
  /**
   * @remarks
   * The subtype of the check item. You can call the [DescribeRiskType](~~DescribeRiskType~~) operation to obtain the subtype.
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
   * The start time of the policy execution. Format: hh:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 00:01:00
   */
  startTime?: string;
  /**
   * @remarks
   * The scan method of the policy. Valid values:
   * 
   * - **groupId**: group-based scan.
   * - **uuid**: asset-based scan.
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

