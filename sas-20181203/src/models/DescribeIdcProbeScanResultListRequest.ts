// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdcProbeScanResultListRequest extends $dara.Model {
  /**
   * @remarks
   * The search conditions for assets. This parameter is in the JSON format. The value is case-sensitive.
   * 
   * >  A search condition can be the instance ID, instance name, VPC ID, region, or public IP address. You can call the [DescribeIdcAssetCriteria](https://help.aliyun.com/document_detail/2842671.html) operation to query supported search conditions.
   * 
   * @example
   * [{\\"name\\":\\"scannedIp\\",\\"value\\":\\"192.168.2.11\\"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the scan.
   * 
   * @example
   * 1720006819000
   */
  foundEndTime?: number;
  /**
   * @remarks
   * The start time of the scan.
   * 
   * @example
   * 1720006818000
   */
  foundStartTime?: number;
  /**
   * @remarks
   * The logical operator that combines multiple search conditions. Valid values:
   * 
   * *   **OR******
   * *   **AND******
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The statuses of the corresponding probes. Separate multiple values with commas (,). Valid values:
   * 
   * *   **0**: The probe is valid.
   * *   **1**: The probe is ignored.
   * *   **2**: The probe is invalid.
   * *   **3**: The probe expired.
   * *   **4**: The probe does not exist.
   * 
   * @example
   * 0,1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      foundEndTime: 'FoundEndTime',
      foundStartTime: 'FoundStartTime',
      logicalExp: 'LogicalExp',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      currentPage: 'number',
      foundEndTime: 'number',
      foundStartTime: 'number',
      logicalExp: 'string',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

