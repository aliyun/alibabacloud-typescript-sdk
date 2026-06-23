// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsRequestAliyunResourceTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
  aliyunResourceTags?: ListResourceGroupsRequestAliyunResourceTags[];
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
  resourceGroupTypes?: string[];
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

