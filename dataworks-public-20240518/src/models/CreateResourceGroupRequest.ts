// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateResourceGroupRequestAliyunResourceTags } from "./CreateResourceGroupRequestAliyunResourceTags";


export class CreateResourceGroupRequest extends $dara.Model {
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
  aliyunResourceTags?: CreateResourceGroupRequestAliyunResourceTags[];
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   */
  autoRenewEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * eb870033-74c8-4b1b-9664-04c4e7cc3465
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the serverless resource group. The name can be a maximum of 128 characters in length and can contain letters, digits, and underscores (_). The name must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * common_resource_group
   */
  name?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * @example
   * 1
   */
  paymentDuration?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values: Month and Year.
   * 
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The billing method of the serverless resource group. Valid values: PrePaid and PostPaid. The value PrePaid indicates the subscription billing method, and the value PostPaid indicates the pay-as-you-go billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The description of the serverless resource group. The description can be a maximum of 128 characters in length and can contain letters, digits, and underscores (_).
   * 
   * @example
   * Create a serverless resource group for common tasks
   */
  remark?: string;
  /**
   * @remarks
   * The specifications of the serverless resource group. Unit: CU. This parameter is required only if you set the PaymentType parameter to PrePaid.
   * 
   * @example
   * 2
   */
  spec?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) with which the serverless resource group is associated by default.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-m2et4f3oc8msfbccXXXXX
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the serverless resource group is associated by default.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-uf8usrhs7hjd9amsXXXXX
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTags: 'AliyunResourceTags',
      autoRenewEnabled: 'AutoRenewEnabled',
      clientToken: 'ClientToken',
      name: 'Name',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      remark: 'Remark',
      spec: 'Spec',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTags: { 'type': 'array', 'itemType': CreateResourceGroupRequestAliyunResourceTags },
      autoRenewEnabled: 'boolean',
      clientToken: 'string',
      name: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      remark: 'string',
      spec: 'number',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliyunResourceTags)) {
      $dara.Model.validateArray(this.aliyunResourceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

