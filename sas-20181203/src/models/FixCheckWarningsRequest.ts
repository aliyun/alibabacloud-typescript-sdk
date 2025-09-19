// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FixCheckWarningsRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters for the baseline risk item that you want to fix.
   * 
   * *   **checkId**: the ID of the check item that corresponds to the baseline risk item.
   * 
   * *   **rules**: an array that consists of the rules applied to fixes.
   * 
   *     *   **value**: specifies whether a fix method is selected. Valid values: **0** and **1**. The value 0 indicates that no fix method is selected and the value 1 indicates that a fix method is selected.
   *     *   **ruleId**: the ID of the fix method.
   *     *   **paramList**: an array that consists of the details about the fix method.\\
   *         • **paramName**: the name of the fix method.\\
   *         • **value**: the value of the fix method.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"checkId":8,"rules":[{"ruleId":"rule.ssh_Idle.interval","value":1,"paramList":[{"paramName":"range_val","value":"600"},{"paramName":"range_val","value":"600"}]},{"ruleId":"rule.ssh_Idle.count","value":1,"paramList":[{"paramName":"range_val","value":"3"}]}]}]
   */
  checkParams?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The retention period of the snapshot that is created when you fix the baseline risk. Valid values: 1 to 365. Unit: days.
   * 
   * @example
   * 1
   */
  retentionDays?: number;
  /**
   * @remarks
   * The ID of the risk item.
   * 
   * >  To query the information about the risk items and check items of a server, you must specify the IDs of the risk items. You can call the [DescribeCheckWarningSummary](~~DescribeCheckWarningSummary~~) operation to query the IDs of risk items.
   * 
   * @example
   * 10354
   */
  riskId?: number;
  /**
   * @remarks
   * The name of the snapshot that is created when you fix the baseline risk.
   * 
   * @example
   * sas_fix_2024-12-04
   */
  snapshotName?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 165.225.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUID of the asset for which you want to fix the baseline risk item. You can call the [DescribeWarningMachines](~~DescribeWarningMachines~~) operation to query the UUIDs of assets.
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

