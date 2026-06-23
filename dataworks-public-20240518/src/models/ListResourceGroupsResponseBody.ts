// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsResponseBodyPagingInfoResourceGroupListAliyunResourceTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Value
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

export class ListResourceGroupsResponseBodyPagingInfoResourceGroupListSpec extends $dara.Model {
  /**
   * @remarks
   * The number of resource units.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The resource specifications.
   * 
   * @example
   * 2CU
   */
  standard?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      standard: 'Standard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      standard: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBodyPagingInfoResourceGroupList extends $dara.Model {
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
   * A list of Alibaba Cloud tags.
   */
  aliyunResourceTags?: ListResourceGroupsResponseBodyPagingInfoResourceGroupListAliyunResourceTags[];
  /**
   * @remarks
   * The creation time of the resource group, as a 64-bit timestamp.
   * 
   * @example
   * 1727055811000
   */
  createTime?: number;
  /**
   * @remarks
   * The user ID of the creator.
   * 
   * @example
   * 11075500042XXXXX
   */
  createUser?: string;
  /**
   * @remarks
   * The ID of the default Virtual Private Cloud (VPC) bound to the general-purpose resource group.
   * 
   * @example
   * vpc-m2et4f3oc8msfbccXXXXX
   */
  defaultVpcId?: string;
  /**
   * @remarks
   * The ID of the default vSwitch bound to the general-purpose resource group.
   * 
   * @example
   * vsw-uf8usrhs7hjd9amsXXXXX
   */
  defaultVswicthId?: string;
  /**
   * @remarks
   * The unique identifier of the resource group.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  id?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * common_resource_group
   */
  name?: string;
  /**
   * @remarks
   * The ID of the order for the resource group.
   * 
   * @example
   * c442b330-3b10-4584-959e-736e4edXXXXX
   */
  orderInstanceId?: string;
  /**
   * @remarks
   * The billing method of the resource group. `PrePaid` indicates subscription and `PostPaid` indicates pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The description of the resource group.
   * 
   * @example
   * Create a general-purpose resource group for common tasks.
   */
  remark?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * - `CommonV2`: The new general-purpose resource group.
   * 
   * - `ExclusiveDataIntegration`: The exclusive resource group for data integration.
   * 
   * - `ExclusiveScheduler`: The exclusive resource group for scheduling.
   * 
   * - `ExclusiveDataService`: The exclusive resource group for data services.
   * 
   * @example
   * CommonV2
   */
  resourceGroupType?: string;
  /**
   * @remarks
   * The specifications of the resource group.
   */
  spec?: ListResourceGroupsResponseBodyPagingInfoResourceGroupListSpec;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * - `Normal`: Running.
   * 
   * - `Stop`: Frozen due to expiration.
   * 
   * - `Deleted`: Released.
   * 
   * - `Creating`: Creation in progress.
   * 
   * - `CreateFailed`: Creation failed.
   * 
   * - `Updating`: Update in progress.
   * 
   * - `UpdateFailed`: Update failed.
   * 
   * - `Deleting`: Release in progress.
   * 
   * - `DeleteFailed`: Release failed.
   * 
   * - `Timeout`: The operation timed out.
   * 
   * - `Freezed`: Frozen.
   * 
   * - `Starting`: Starting.
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTags: 'AliyunResourceTags',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      defaultVpcId: 'DefaultVpcId',
      defaultVswicthId: 'DefaultVswicthId',
      id: 'Id',
      name: 'Name',
      orderInstanceId: 'OrderInstanceId',
      paymentType: 'PaymentType',
      remark: 'Remark',
      resourceGroupType: 'ResourceGroupType',
      spec: 'Spec',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTags: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyPagingInfoResourceGroupListAliyunResourceTags },
      createTime: 'number',
      createUser: 'string',
      defaultVpcId: 'string',
      defaultVswicthId: 'string',
      id: 'string',
      name: 'string',
      orderInstanceId: 'string',
      paymentType: 'string',
      remark: 'string',
      resourceGroupType: 'string',
      spec: ListResourceGroupsResponseBodyPagingInfoResourceGroupListSpec,
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliyunResourceTags)) {
      $dara.Model.validateArray(this.aliyunResourceTags);
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBodyPagingInfo extends $dara.Model {
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
   * The list of resource groups.
   */
  resourceGroupList?: ListResourceGroupsResponseBodyPagingInfoResourceGroupList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupList: 'ResourceGroupList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupList: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyPagingInfoResourceGroupList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupList)) {
      $dara.Model.validateArray(this.resourceGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListResourceGroupsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. You can use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListResourceGroupsResponseBodyPagingInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

