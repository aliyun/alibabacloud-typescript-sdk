// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IgnoreHcCheckWarningsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * >  You can call the [DescribeCheckWarnings](https://help.aliyun.com/document_detail/116182.html) operation to query the IDs of check items.
   * 
   * @example
   * 21313
   */
  checkIds?: string;
  /**
   * @remarks
   * The ID of the alert that is triggered by the check item. Separate multiple IDs with commas (,).
   * 
   * >  You can call the [DescribeCheckWarnings](https://help.aliyun.com/document_detail/116182.html) operation to query the IDs of alerts that are triggered by check items.
   * 
   * @example
   * 98146905,98146907
   */
  checkWarningIds?: string;
  /**
   * @remarks
   * The reason for the current operation.
   * 
   * @example
   * ignore
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the risk item that you want to ignore or cancel ignoring.
   * 
   * >  You can call the [DescribeCheckWarningSummary](https://help.aliyun.com/document_detail/116179.html) operation to query the IDs of risk items.
   * 
   * @example
   * 51
   */
  riskId?: string;
  /**
   * @remarks
   * The data source. If this parameter is left empty, the server baseline results are queried by default. Valid values:
   * * **default**: server
   * * **agentless**
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the operation that you want to perform. Valid values:
   * 
   * *   **1**: ignores a risk item
   * *   **2**: cancels ignoring a risk item
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      checkIds: 'CheckIds',
      checkWarningIds: 'CheckWarningIds',
      reason: 'Reason',
      riskId: 'RiskId',
      source: 'Source',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIds: 'string',
      checkWarningIds: 'string',
      reason: 'string',
      riskId: 'string',
      source: 'string',
      sourceIp: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

