// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProvisionedProductPlanApproversRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter condition. Valid values:
   * 
   * *   ProvisionedProductPlanApproverName: performs fuzzy match by reviewer name.
   * 
   * @example
   * ProvisionedProductPlanApproverName
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter condition.
   * 
   * @example
   * approver
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

export class ListProvisionedProductPlanApproversRequest extends $dara.Model {
  /**
   * @remarks
   * The access filter. Valid values:
   * 
   * *   User (default): queries the plans that are created by the current requester.
   * *   Account: queries the plans that belong to the current Alibaba Cloud account.
   * *   ResourceDirectory: queries the plans that belong to the current resource directory.
   * 
   * >  You must specify one of the `ApprovalFilter` and `AccessLevelFilter` parameters, but not both.
   * 
   * @example
   * User
   */
  accessLevelFilter?: string;
  /**
   * @remarks
   * The access filter of the review dimension. Valid values:
   * 
   * *   AccountRequests: queries all reviewed plans that belong to the current Alibaba Cloud account.
   * *   ResourceDirectoryRequests: queries all plans that belong to the current resource directory.
   * 
   * >  You must specify one of the `ApprovalFilter` and `AccessLevelFilter` parameters, but not both.
   * 
   * @example
   * AccountRequests
   */
  approvalFilter?: string;
  /**
   * @remarks
   * An array that consists of filter conditions.
   */
  filters?: ListProvisionedProductPlanApproversRequestFilters[];
  static names(): { [key: string]: string } {
    return {
      accessLevelFilter: 'AccessLevelFilter',
      approvalFilter: 'ApprovalFilter',
      filters: 'Filters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevelFilter: 'string',
      approvalFilter: 'string',
      filters: { 'type': 'array', 'itemType': ListProvisionedProductPlanApproversRequestFilters },
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

