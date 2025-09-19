// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBruteForceRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address that is blocked.
   * 
   * @example
   * 175.106.XX.XX
   */
  blockIp?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * i-bp1g6wxdwps7s9dz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page. We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name or IP address of the server to query.
   * 
   * @example
   * 1.2.XX.XX
   */
  remark?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the defense rule. Valid values:
   * 
   * *   **0**: invalid
   * *   **1**: enabled
   * *   **2**: failed
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      blockIp: 'BlockIp',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      remark: 'Remark',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockIp: 'string',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
      remark: 'string',
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

