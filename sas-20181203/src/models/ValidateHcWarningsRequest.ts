// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateHcWarningsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the check items. Separate multiple check item IDs with commas (,).
   * 
   * > You can call the [DescribeCheckWarningSummary](https://help.aliyun.com/document_detail/116179.html) operation to obtain check item IDs.
   * 
   * @example
   * 695,234
   */
  checkIds?: string;
  /**
   * @remarks
   * The IDs of the risk items to verify. Separate multiple IDs with commas (,).
   * >  You can call the [DescribeCheckWarnings](~~DescribeCheckWarnings~~) operation to obtain this parameter.
   * 
   * @example
   * 43
   */
  riskIds?: string;
  /**
   * @remarks
   * The status of the check item to verify. Valid values:
   * 
   * - 1: not passed
   * - 3: passed
   * - 5: expired.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The UUIDs of the servers to verify. Separate multiple UUIDs with commas (,).
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain server UUIDs.
   * 
   * @example
   * 78645c8e-2e89-441b-8eb***,a9622a6b-adb5-4dd3-929e,0136460a-1cb5-44e8-****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      checkIds: 'CheckIds',
      riskIds: 'RiskIds',
      status: 'Status',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIds: 'string',
      riskIds: 'string',
      status: 'number',
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

