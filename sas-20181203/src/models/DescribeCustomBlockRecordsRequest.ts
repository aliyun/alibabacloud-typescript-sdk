// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomBlockRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address to be blocked to prevent brute-force attacks.
   * 
   * @example
   * 117.66.XX.XX
   */
  blockIp?: string;
  /**
   * @remarks
   * Specifies the page number of the returned results. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Settings for paging. Specifies the number of records to return on each page during a paged query. Default value: **20**, which indicates that 20 records are displayed on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the defense rule against brute-force attacks. Valid values:
   * - **0**: invalid
   * - **1**: enabled
   * - **2**: failed
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

