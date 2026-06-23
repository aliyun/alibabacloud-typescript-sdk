// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-aek2kqofrgXXXXX
   */
  aliyunResourceGroupId?: string;
  /**
   * @remarks
   * The list of Alibaba Cloud tags.
   */
  aliyunResourceTagsShrink?: string;
  /**
   * @remarks
   * The name of the resource group. Fuzzy search is supported.
   * 
   * @example
   * Resource
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method of the resource group. Valid values include:
   * 
   * - `PrePaid`: subscription.
   * 
   * - `PostPaid`: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The types of the resource groups to query. **If this parameter is not specified, general-purpose resource groups are queried by default.**
   */
  resourceGroupTypesShrink?: string;
  /**
   * @remarks
   * The sorting criterion for the results. The format is `FieldName SortOrder`. `SortOrder` can be `Asc` (ascending) or `Desc` (descending). If you do not specify `SortOrder`, the default is `Asc`. The following fields are supported:
   * 
   * - `Id`: Resource group ID
   * 
   * - `Name`: Resource group name
   * 
   * - `Remark`: Resource group remarks
   * 
   * - `Type`: Resource group type
   * 
   * - `Status`: Resource group status
   * 
   * - `Spec`: Resource group specifications
   * 
   * - `CreateUser`: The user who created the resource group
   * 
   * - `CreateTime`: The time when the resource group was created
   * 
   * Default value: `CreateTime Asc`
   * 
   * @example
   * CreateTime Asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The statuses of the resource groups to query.
   */
  statusesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTagsShrink: 'AliyunResourceTags',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      projectId: 'ProjectId',
      resourceGroupTypesShrink: 'ResourceGroupTypes',
      sortBy: 'SortBy',
      statusesShrink: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTagsShrink: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      projectId: 'number',
      resourceGroupTypesShrink: 'string',
      sortBy: 'string',
      statusesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

