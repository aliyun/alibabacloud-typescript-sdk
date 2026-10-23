// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleSecurityEventsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to add to the whitelist in batches. Valid values:
   * - true: Yes.
   * - false: No.
   */
  markBatch?: boolean;
  /**
   * @remarks
   * The JSON array string used when adding an advanced whitelist or precise defense whitelist rule. This parameter applies only when OperationCode is set to `advance_mark_mis_info` or `defense_mark_mis_info`. Do not pass this parameter for other operations.
   * 
   * Each rule contains the following fields:
   * - `field`: The matching field, which is obtained from the FiledName in MarkFieldsSource returned by DescribeSecurityEventOperations.
   * - `fieldValue`: The user-defined matching value, which does not need to be equal to the original field value of the current alert.
   * - `operate`: The matching operator, which must belong to the SupportedMisType list returned for the field. Do not use a general fixed enumeration instead of the supported range for the current field.
   * - `assetScope`: The effective scope object of the whitelist rule, which includes matchMode (scope mode) and the corresponding matchTargetIds (scope target list).
   * 
   * The assetScope parameter specifies the effective scope of the rule. If you only handle the alert and do not add a whitelist rule, you can omit this parameter or pass an empty array string `[]`.
   * 
   * @example
   * [{"field":"processPath","fieldValue":"/tmp/evil","operate":"strEqual","assetScope":{"matchMode":"DeviceGroupNormal","matchTargetIds":["device-group-1"]}}]
   */
  markMissParam?: string;
  /**
   * @remarks
   * The operation code for handling the endpoint alert. Valid values:
   * - advance_mark_mis_info: Adds to the advanced whitelist.
   * - defense_mark_mis_info: Adds to the precise defense whitelist.
   * - mark_mis_info: Marks as a false positive (standard whitelisting).
   * - rm_mark_mis_info: Removes from the standard or advanced whitelist.
   * - rm_defense_mark_mis_info: Removes from the precise defense whitelist.
   * - ignore: Ignores the alert.
   * - manual_handled: Marks as manually handled.
   * - cancle_manual: Cancels the manually handled status.
   * The preceding list is not a fixed set of operations that can be performed on every alert. The actual available operations are also restricted by feature switches, dynamic whitelists, alert operation configurations, and the current status. Before you call this operation, call DescribeSecurityEventOperations to query the currently available operations for the alert and check UserCanOperate. Use only the OperationCode values that are allowed in the query result.
   * 
   * This parameter is required.
   * 
   * @example
   * ignore
   */
  operationCode?: string;
  /**
   * @remarks
   * The operation parameters, represented as a JSON object string. If this parameter is not passed or an empty string is passed, the backend processes it as `{}`. The specific parameters must correspond to the OperationCode and are subject to the OperationParams returned by DescribeSecurityEventOperations.
   * 
   * @example
   * {}
   */
  operationParams?: string;
  /**
   * @remarks
   * The remark for the handling operation.
   * 
   * @example
   * remark test.
   */
  remark?: string;
  /**
   * @remarks
   * The IDs of the security alert events to handle.
   * 
   * This parameter is required.
   */
  securityEventIds?: number[];
  static names(): { [key: string]: string } {
    return {
      markBatch: 'MarkBatch',
      markMissParam: 'MarkMissParam',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      remark: 'Remark',
      securityEventIds: 'SecurityEventIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markBatch: 'boolean',
      markMissParam: 'string',
      operationCode: 'string',
      operationParams: 'string',
      remark: 'string',
      securityEventIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.securityEventIds)) {
      $dara.Model.validateArray(this.securityEventIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

