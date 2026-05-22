// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPostpaidRatePlanInstancesRequest extends $dara.Model {
  /**
   * @example
   * ListPostpaidRatePlanInstances
   */
  checkRemainingSiteQuota?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: string;
  status?: string;
  unrelatedType?: string;
  static names(): { [key: string]: string } {
    return {
      checkRemainingSiteQuota: 'CheckRemainingSiteQuota',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      status: 'Status',
      unrelatedType: 'UnrelatedType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRemainingSiteQuota: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
      status: 'string',
      unrelatedType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

