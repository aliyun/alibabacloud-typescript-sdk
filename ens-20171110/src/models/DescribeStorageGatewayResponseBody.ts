// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStorageGatewayResponseBodyStorageGateways } from "./DescribeStorageGatewayResponseBodyStorageGateways";


export class DescribeStorageGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6666C5A5-75ED-422E-A022-7121FA18C968
   */
  requestId?: string;
  /**
   * @remarks
   * The list information.
   */
  storageGateways?: DescribeStorageGatewayResponseBodyStorageGateways[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      storageGateways: 'StorageGateways',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      storageGateways: { 'type': 'array', 'itemType': DescribeStorageGatewayResponseBodyStorageGateways },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.storageGateways)) {
      $dara.Model.validateArray(this.storageGateways);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

