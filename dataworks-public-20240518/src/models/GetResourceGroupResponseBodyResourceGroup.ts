// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceGroupResponseBodyResourceGroupAliyunResourceTags } from "./GetResourceGroupResponseBodyResourceGroupAliyunResourceTags";
import { GetResourceGroupResponseBodyResourceGroupSpec } from "./GetResourceGroupResponseBodyResourceGroupSpec";


export class GetResourceGroupResponseBodyResourceGroup extends $dara.Model {
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
   * The tags.
   */
  aliyunResourceTags?: GetResourceGroupResponseBodyResourceGroupAliyunResourceTags[];
  /**
   * @remarks
   * The time when the resource group was created. The value is a 64-bit timestamp.
   * 
   * @example
   * 1727055811000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the account that is used to create the resource group.
   * 
   * @example
   * 11075500042XXXXX
   */
  createUser?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) with which the resource group is associated by default.
   * 
   * @example
   * vpc-m2et4f3oc8msfbccXXXXX
   */
  defaultVpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the resource group is associated by default.
   * 
   * @example
   * vsw-uf8usrhs7hjd9amsXXXXX
   */
  defaultVswitchId?: string;
  /**
   * @remarks
   * The ID of the resource group.
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
   * The instance ID of the order that is used to create the resource group.
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
   * The description of the resource group.
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
   * The specifications of the resource group.
   */
  spec?: GetResourceGroupResponseBodyResourceGroupSpec;
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
      defaultVswitchId: 'DefaultVswitchId',
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
      aliyunResourceTags: { 'type': 'array', 'itemType': GetResourceGroupResponseBodyResourceGroupAliyunResourceTags },
      createTime: 'number',
      createUser: 'string',
      defaultVpcId: 'string',
      defaultVswitchId: 'string',
      id: 'string',
      name: 'string',
      orderInstanceId: 'string',
      paymentType: 'string',
      remark: 'string',
      resourceGroupType: 'string',
      spec: GetResourceGroupResponseBodyResourceGroupSpec,
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

