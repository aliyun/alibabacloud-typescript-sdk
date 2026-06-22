// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomBlockRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address to be blocked for brute-force attacks prevention.
   * 
   * @example
   * 117.66.XX.XX
   */
  blockIp?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Settings for paged query. The number of records to return on each page during paging. Default value: **20**, which indicates that 20 records are displayed per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the brute-force attacks defense rule. Valid values:
   * - **0**: Invalid.
   * - **1**: Enabled.
   * - **2**: Failed.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      blockIp: 'BlockIp',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockIp: 'string',
      currentPage: 'number',
      pageSize: 'number',
      resourceOwnerId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

