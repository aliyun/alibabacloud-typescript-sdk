// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsResponseBodyPagingInfoResourceGroupListAliyunResourceTags extends $dara.Model {
  /**
   * @remarks
   * Tag Key
   * 
   * @example
   * Key
   */
  key?: string;
  /**
   * @remarks
   * Tag Value
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
   * Quantity
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specification details
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
  aliyunResourceTags?: ListResourceGroupsResponseBodyPagingInfoResourceGroupListAliyunResourceTags[];
  /**
   * @remarks
   * The creation time, which is a 64-bit timestamp.
   * 
   * @example
   * 1727055811000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who created the resource group.
   * 
   * @example
   * 11075500042XXXXX
   */
  createUser?: string;
  /**
   * @remarks
   * Default VPC ID bound to a common resource group
   * 
   * @example
   * vpc-m2et4f3oc8msfbccXXXXX
   */
  defaultVpcId?: string;
  /**
   * @remarks
   * The default switch ID bound to the common resource group.
   * 
   * @example
   * vsw-uf8usrhs7hjd9amsXXXXX
   */
  defaultVswicthId?: string;
  /**
   * @remarks
   * Unique identifier of a resource group
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
   * The order instance ID of the resource group.
   * 
   * @example
   * c442b330-3b10-4584-959e-736e4edXXXXX
   */
  orderInstanceId?: string;
  /**
   * @remarks
   * The billing method of the resource group. Valid values: PrePaid and PostPaid. The value PrePaid indicates the subscription billing method, and the value PostPaid indicates the pay-as-you-go billing method.
   * 
   * @example
   * PrePaid
   */
  paymentType?: string;
  /**
   * @remarks
   * Remarks for resource groups
   * 
   * @example
   * Create a common resource group for common tasks
   */
  remark?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   CommonV2: serverless resource group
   * *   ExclusiveDataIntegration: exclusive resource group for Data Integration
   * *   ExclusiveScheduler: exclusive resource group for scheduling
   * *   ExclusiveDataService: exclusive resource group for DataService Studio
   * 
   * @example
   * CommonV2
   */
  resourceGroupType?: string;
  /**
   * @remarks
   * Resource Group specifications
   */
  spec?: ListResourceGroupsResponseBodyPagingInfoResourceGroupListSpec;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   Normal: The resource group is running or in use.
   * *   Stop: The resource group is expired.
   * *   Deleted: The resource group is released or destroyed.
   * *   Creating: The resource group is being created.
   * *   CreateFailed: The resource group fails to be created.
   * *   Updating: The resource group is being scaled in or out, or the configurations of the resource group are being changed.
   * *   UpdateFailed: The resource group fails to be scaled out or upgraded.
   * *   Deleting: The resource group is being released or destroyed.
   * *   DeleteFailed: The resource group fails to be released or destroyed.
   * *   Timeout: The operations that are performed on the resource group time out.
   * *   Freezed: The resource group is frozen.
   * *   Starting: The resource group is being started.
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
   * The resource groups returned.
   */
  resourceGroupList?: ListResourceGroupsResponseBodyPagingInfoResourceGroupList[];
  /**
   * @remarks
   * All data entries
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
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
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

