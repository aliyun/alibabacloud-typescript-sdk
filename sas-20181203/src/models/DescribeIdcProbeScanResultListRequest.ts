// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdcProbeScanResultListRequest extends $dara.Model {
  /**
   * @remarks
   * The search conditions for assets. This parameter is in JSON format. Parameter names are case-sensitive.
   * > You can search for assets by instance ID, instance name, VPC ID, region, or public IP address.
   * 
   * @example
   * [{\\"name\\":\\"scannedIp\\",\\"value\\":\\"192.168.2.11\\"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the scan discovery period.
   * 
   * @example
   * 1720006819000
   */
  foundEndTime?: number;
  /**
   * @remarks
   * The start time of the scan discovery period.
   * 
   * @example
   * 1720006818000
   */
  foundStartTime?: number;
  /**
   * @remarks
   * The logical relationship between multiple search conditions. Valid values:
   * 
   * - **OR**: The search conditions are in a logical **OR** relationship.
   * - **AND**: The search conditions are in a logical **AND** relationship.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: 20. If you leave this parameter empty, 20 entries are returned per page.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status list of the corresponding probes. Separate multiple values with commas. Valid values:
   * - **0**: active
   * - **1**: ignored
   * - **2**: invalid
   * - **3**: expired
   * - **4**: probe does not exist.
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

