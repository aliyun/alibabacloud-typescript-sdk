// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FixCheckWarningsRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters of the baseline check items to fix. The following parameters are included:
   * - **checkId**: The ID of the check item.
   * - **rules**: The fix rules (in array format).
   *     - **value**: Specifies whether the fix method is selected. Valid values: **0** (not selected), **1** (selected).
   *     - **ruleId**: The ID of the fix method.
   *     - **paramList**: The list of fix methods (in array format).  
   *                 • **paramName**: The name of the fix method.  
   *                 • **value**: The value of the fix method.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"checkId":8,"rules":[{"ruleId":"rule.ssh_Idle.interval","value":1,"paramList":[{"paramName":"range_val","value":"600"},{"paramName":"range_val","value":"600"}]},{"ruleId":"rule.ssh_Idle.count","value":1,"paramList":[{"paramName":"range_val","value":"3"}]}]}]
   */
  checkParams?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The retention period of the snapshot to create when performing the baseline fix operation. Valid values: 1 to 365. Unit: days.
   * 
   * @example
   * 1
   */
  retentionDays?: number;
  /**
   * @remarks
   * The ID of the risk item.
   * 
   * > To query the check item information for a specified risk item and a specified server, you must provide the risk item ID. You can call the [DescribeCheckWarningSummary](~~DescribeCheckWarningSummary~~) operation to obtain the ID.
   * 
   * @example
   * 10354
   */
  riskId?: number;
  /**
   * @remarks
   * The name of the snapshot to create when performing the baseline fix operation.
   * 
   * @example
   * sas_fix_2024-12-04
   */
  snapshotName?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 165.225.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The unique ID of the asset instance to fix. You can call the [DescribeWarningMachines](~~DescribeWarningMachines~~) operation to obtain the ID.
   * 
   * @example
   * 75a417dda5f25edb5bed8f208a9a****,c7e10fd794262a1510d5648f9e5d****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      checkParams: 'CheckParams',
      lang: 'Lang',
      retentionDays: 'RetentionDays',
      riskId: 'RiskId',
      snapshotName: 'SnapshotName',
      sourceIp: 'SourceIp',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkParams: 'string',
      lang: 'string',
      retentionDays: 'number',
      riskId: 'number',
      snapshotName: 'string',
      sourceIp: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

