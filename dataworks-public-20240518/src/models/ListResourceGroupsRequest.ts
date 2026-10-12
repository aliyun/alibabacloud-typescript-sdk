// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsRequestAliyunResourceTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
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

export class ListResourceGroupsRequest extends $dara.Model {
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
  aliyunResourceTags?: ListResourceGroupsRequestAliyunResourceTags[];
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
  resourceGroupTypes?: string[];
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
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTags: 'AliyunResourceTags',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      projectId: 'ProjectId',
      resourceGroupTypes: 'ResourceGroupTypes',
      sortBy: 'SortBy',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTags: { 'type': 'array', 'itemType': ListResourceGroupsRequestAliyunResourceTags },
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      projectId: 'number',
      resourceGroupTypes: { 'type': 'array', 'itemType': 'string' },
      sortBy: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.aliyunResourceTags)) {
      $dara.Model.validateArray(this.aliyunResourceTags);
    }
    if(Array.isArray(this.resourceGroupTypes)) {
      $dara.Model.validateArray(this.resourceGroupTypes);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

