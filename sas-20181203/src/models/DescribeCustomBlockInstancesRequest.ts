// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomBlockInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address that you want to specify in the rule.
   * 
   * >  You can call the [DescribeCustomBlockRecords](~~DescribeCustomBlockRecords~~) operation to obtain the IP address.
   * 
   * @example
   * 47.92.33.1xx
   */
  blockIp?: string;
  /**
   * @remarks
   * The traffic direction that you want to specify in the custom rule. Valid values:
   * 
   * *   **in**: inbound
   * *   **out**: outbound
   * 
   * @example
   * in
   */
  bound?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 8
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether the rule is enabled for the server.
   * 
   * *   **2**: enabling failed
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      blockIp: 'BlockIp',
      bound: 'Bound',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockIp: 'string',
      bound: 'string',
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

