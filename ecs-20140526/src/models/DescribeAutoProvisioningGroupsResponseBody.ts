// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroups } from "./DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroups";


export class DescribeAutoProvisioningGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the auto provisioning groups.
   */
  autoProvisioningGroups?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroups;
  /**
   * @remarks
   * The number of the page returned.
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
   * 745CEC9F-0DD7-4451-9FE7-8B752F39****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of queried auto provisioning groups.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroups: 'AutoProvisioningGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroups: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroups,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.autoProvisioningGroups && typeof (this.autoProvisioningGroups as any).validate === 'function') {
      (this.autoProvisioningGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

