// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceGroupShrinkRequest extends $dara.Model {
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
   * The list of Alibaba Cloud tags.
   */
  aliyunResourceTagsShrink?: string;
  /**
   * @remarks
   * Specifies whether auto-renewal is enabled.
   */
  autoRenewEnabled?: boolean;
  /**
   * @remarks
   * The client idempotency token that is used to ensure the idempotence of the create resource group operation.
   * 
   * This parameter is required.
   * 
   * @example
   * eb870033-74c8-4b1b-9664-04c4e7cc3465
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the common resource group. The name must start with a letter and can contain letters, digits, and underscores (_), up to 128 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * common_resource_group
   */
  name?: string;
  /**
   * @remarks
   * The payment duration.
   * 
   * @example
   * 1
   */
  paymentDuration?: number;
  /**
   * @remarks
   * The unit of the payment duration. Valid values:
   * - Month: monthly subscription.
   * - Year: yearly subscription.
   * 
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The payment type of the resource group. Valid values:
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The remarks for the common resource group. The remarks can contain letters, Chinese characters, digits, and underscores (_), up to 128 characters.
   * 
   * @example
   * Create a serverless resource group for common tasks
   */
  remark?: string;
  /**
   * @remarks
   * The resource group specification, in CUs. This parameter is required when the payment type is PrePaid.
   * 
   * @example
   * 2
   */
  spec?: number;
  /**
   * @remarks
   * The ID of the VPC to associate by default.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-m2et4f3oc8m****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to associate by default.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-uf8usrhs7hjd9****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTagsShrink: 'AliyunResourceTags',
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
      aliyunResourceTagsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

