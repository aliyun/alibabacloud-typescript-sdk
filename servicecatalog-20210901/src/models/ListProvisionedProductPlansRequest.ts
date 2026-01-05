// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProvisionedProductPlansRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter condition. Valid values:
   * 
   * *   ProvisionedProductPlanName: performs exact matches by plan name. Plan names are not case-sensitive.
   * *   ProvisionedProductPlanApprover: performs exact matches by reviewer. You must specify a reviewer in the `RamUser/RamRole:<Name of the reviewer>` format. You can specify multiple reviewers.
   * *   ProvisionedProductPlanApproverName: performs matches by reviewer name. You must specify the Resource Access Management (RAM) entity name of the reviewer. You can specify multiple reviewer names.
   * *   ProvisionedProductPlanStatus: performs matches by plan status. You must specify the state of the plan. You can specify multiple states.
   * *   ProvisionedProductPlanOwnerUid: performs exact matches by ID of Alibaba Cloud account to which a plan belongs.
   * *   FullTextSearch: performs fuzzy full-text searches by plan name.
   * 
   * @example
   * FullTextSearch
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter condition.
   * 
   * @example
   * ECS
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlansRequest extends $dara.Model {
  /**
   * @remarks
   * The access filter. Valid values:
   * 
   * *   User (default): queries the plans that are created by the current requester.
   * *   Account: queries the plans that belong to the current Alibaba Cloud account.
   * *   ResourceDirectory: queries the plans that belong to the current resource directory.
   * 
   * @example
   * User
   */
  accessLevelFilter?: string;
  /**
   * @remarks
   * The access filter of the review dimension. Valid values:
   * 
   * *   ReceivedRequests: queries plans that are pending for review.
   * *   ApprovalHistory: queries review history.
   * *   AccountRequests: queries all plans that belong to the current Alibaba Cloud account.
   * *   AccountRequests: queries all plans that belong to the current Alibaba Cloud account.
   * 
   * @example
   * ReceivedRequests
   */
  approvalFilter?: string;
  /**
   * @remarks
   * An array that consists of filter conditions.
   */
  filters?: ListProvisionedProductPlansRequestFilters[];
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Minimum value: 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the product instance.
   * 
   * @example
   * pp-bp1ddg1n2a****
   */
  provisionedProductId?: string;
  /**
   * @remarks
   * The information based on which you want to sort the query results.
   * 
   * Set the value to CreateTime, which specifies the creation time of plans.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The order in which you want to sort the query results. Valid values:
   * 
   * *   Asc: the ascending order
   * *   Desc (default): the descending order.
   * 
   * @example
   * Desc
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevelFilter: 'AccessLevelFilter',
      approvalFilter: 'ApprovalFilter',
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      provisionedProductId: 'ProvisionedProductId',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevelFilter: 'string',
      approvalFilter: 'string',
      filters: { 'type': 'array', 'itemType': ListProvisionedProductPlansRequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      provisionedProductId: 'string',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

