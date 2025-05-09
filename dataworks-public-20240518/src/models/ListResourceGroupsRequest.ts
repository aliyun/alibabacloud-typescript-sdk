// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourceGroupsRequestAliyunResourceTags } from "./ListResourceGroupsRequestAliyunResourceTags";


export class ListResourceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * Alibaba Cloud Resource Group ID
   * 
   * @example
   * rg-aek2kqofrgXXXXX
   */
  aliyunResourceGroupId?: string;
  /**
   * @remarks
   * Alibaba Cloud tag list
   */
  aliyunResourceTags?: ListResourceGroupsRequestAliyunResourceTags[];
  /**
   * @remarks
   * The name of a resource group, which is used for fuzzy match.
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
   * The billing method of resource groups. Valid values:
   * 
   * *   PrePaid
   * *   PostPaid
   * 
   * @example
   * PrePaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The types of resource groups to query. If you do not configure this parameter, only serverless resource groups are returned by default.
   */
  resourceGroupTypes?: string[];
  /**
   * @remarks
   * The fields used for sorting. Fields such as TriggerTime and StartedTime are supported. The value of this parameter is in the Sort field + Sort by (Desc/Asc) format. By default, results are sorted in ascending order. Valid values:
   * 
   * *   Id (Desc/Asc): the resource group ID
   * *   Name (Desc/Asc): the name of the resource group
   * *   Remark (Desc/Asc): the remarks of the resource group
   * *   Type (Desc/Asc): the type of the resource group
   * *   Status (Desc/Asc): the status of the resource group
   * *   Spec (Desc/Asc): the specifications of the resource group
   * *   CreateUser (Desc/Asc): the creator of the resource group
   * *   CreateTime (Desc/Asc): the time when the resource group is created
   * 
   * Default value: CreateTime Asc
   * 
   * @example
   * CreateTime Asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The statuses of resource groups.
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

