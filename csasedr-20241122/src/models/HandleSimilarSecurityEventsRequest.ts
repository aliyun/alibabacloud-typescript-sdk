// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleSimilarSecurityEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON array string used to add advanced whitelist or precise defense whitelist rules. This parameter applies only to scenarios where the OperationCode is `advance_mark_mis_info` or `defense_mark_mis_info`. Do not pass this parameter for other operations.
   * 
   * Each rule includes the following fields:
   * 
   * - `field`: The matching field, which is obtained from the FiledName field in the MarkFieldsSource returned by the DescribeSecurityEventOperations operation.
   * - `fieldValue`: The user-defined matching value, which does not need to equal the original field value of the current alert.
   * - `operate`: The matching operator, which must be included in the list returned by the SupportedMisType corresponding to the field. Do not use a common fixed enumeration to replace the supported scope of the current field.
   * - `assetScope`: The effective scope object of the whitelist rule, which includes matchMode (the scope mode) and the corresponding matchTargetIds (the list of scope targets).
   * 
   * The assetScope field specifies the effective scope of the rule. If you only process alerts and do not add whitelist rules, you can leave this parameter empty or pass an empty array string `[]`.
   * 
   * @example
   * [{"field":"processPath","fieldValue":"/tmp/evil","operate":"strEqual","assetScope":{"matchMode":"DeviceGroupNormal","matchTargetIds":["device-group-1"]}}]
   */
  markMissParam?: string;
  /**
   * @remarks
   * The operation code for processing endpoint alerts. The allowed operations for the code are as follows:
   * 
   * - `advance_mark_mis_info`: Adds the alert to the advanced whitelist.
   * - `defense_mark_mis_info`: Adds the alert to the precise defense whitelist.
   * - `mark_mis_info`: Marks the alert as a false positive and adds it to the common whitelist.
   * - `rm_mark_mis_info`: Removes the alert from the common or advanced whitelist.
   * - `rm_defense_mark_mis_info`: Removes the alert from the precise defense whitelist.
   * - `ignore`: Ignores the alert.
   * - `manual_handled`: Marks the alert as manually handled.
   * - `cancle_manual`: Cancels the manually handled status of the alert.
   * 
   * The preceding set is not a fixed list of operations that can be performed on every alert. The actual available operations are also restricted by conditions such as feature switches, dynamic whitelists, alert operation configurations, and the current status. Before calling this operation, call the DescribeSecurityEventOperations operation to query the currently available operations for the alert and check UserCanOperate. Use only the OperationCode values that are allowed in the query results.
   * 
   * This parameter is required.
   * 
   * @example
   * ignore
   */
  operationCode?: string;
  /**
   * @remarks
   * The operation parameters, represented as a JSON object string. If this parameter is not passed or an empty string is passed, the backend processes it as `{}`. The specific parameters must correspond to the OperationCode and are subject to the OperationParams returned by the DescribeSecurityEventOperations operation.
   * 
   * @example
   * {}
   */
  operationParams?: string;
  /**
   * @remarks
   * The remark for the operation.
   * 
   * @example
   * remark test.
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the similar alert query task. You can obtain the ID by calling the CreateSimilarSecurityEventsQueryTask operation. The task must belong to the current calling account and must be a similar alert query task. Before calling this operation, call the DescribeSecurityEventOperationStatus operation to query the TaskStatus. Wait until the status reaches DataRetrieved before initiating the processing. The New or RetrievingData status indicates that data extraction is not complete.
   * 
   * This parameter is required.
   * 
   * @example
   * 666038
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      markMissParam: 'MarkMissParam',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      remark: 'Remark',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markMissParam: 'string',
      operationCode: 'string',
      operationParams: 'string',
      remark: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

