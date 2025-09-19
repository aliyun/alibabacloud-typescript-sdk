// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateHcWarningsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of check items that you want to verify. Separate multiple IDs with commas (,).
   * > You can use [DescribeCheckWarningSummary](https://help.aliyun.com/document_detail/116179.html) to get IDs of check items.
   * 
   * @example
   * 695,234
   */
  checkIds?: string;
  /**
   * @remarks
   * The IDs of risk items that you want to verify. Separate multiple IDs with commas (,).
   * 
   * @example
   * 43
   */
  riskIds?: string;
  /**
   * @remarks
   * The status of the check item that you want to verify.
   * 
   * *   1: failed
   * *   3: passed
   * *   5: expired
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The UUIDs of the servers on which you want to verify the risk items. Separate multiple UUIDs with commas (,).
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * @example
   * 78645c8e-2e89-441b-8eb,a9622a6b-adb5-4dd3-929e,0136460a-1cb5-44e8-****
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

