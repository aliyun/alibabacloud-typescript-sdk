// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aek2kqofrgXXXXX
   */
  aliyunResourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud tags.
   */
  aliyunResourceTagsShrink?: string;
  /**
   * @remarks
   * The name of the resource group for fuzzy match.
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
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method of the resource group. Valid values:
   * 
   * - PrePaid: Subscription.
   * - PostPaid: Pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the workspace to which the resource group belongs.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The types of the resource groups to query. **If this parameter is left empty, general-purpose resource groups are queried by default.**
   */
  resourceGroupTypesShrink?: string;
  /**
   * @remarks
   * The fields by which to sort the results. You can sort the results by fields such as scheduled time and start time. The format is \\"Sort field+Sort order (Desc/Asc)\\". Asc can be omitted. Valid values for the sort field:
   * 
   * - Id (Desc/Asc): The ID of the resource group.
   * - Name (Desc/Asc): The name of the resource group.
   * - Remark (Desc/Asc): The description of the resource group.
   * - Type (Desc/Asc): The type of the resource group.
   * - Status (Desc/Asc): The status of the resource group.
   * - Spec (Desc/Asc): The specifications of the resource group.
   * - CreateUser (Desc/Asc): The creator of the resource group.
   * - CreateTime (Desc/Asc): The time when the resource group was created.
   * 
   * Default value: CreateTime Asc.
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

