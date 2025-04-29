// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistories } from "./DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistories";


export class DescribeAutoProvisioningGroupHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array consisting of AutoProvisioningGroupHistory data.
   */
  autoProvisioningGroupHistories?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistories;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B48A12CD-1295-4A38-A8F0-0E92C937****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of queried scheduling tasks in the auto provisioning group.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupHistories: 'AutoProvisioningGroupHistories',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupHistories: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistories,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.autoProvisioningGroupHistories && typeof (this.autoProvisioningGroupHistories as any).validate === 'function') {
      (this.autoProvisioningGroupHistories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

