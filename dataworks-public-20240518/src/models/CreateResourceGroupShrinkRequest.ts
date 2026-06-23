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
   * Specifies whether to enable auto-renewal for the subscription.
   */
  autoRenewEnabled?: boolean;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * eb870033-74c8-4b1b-9664-04c4e7cc3465
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the general-purpose resource group. It must be up to 128 characters long, start with a letter, and contain only letters, digits, and underscores (_).
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
   * The unit of the subscription duration. Valid values: `Month` and `Year`.
   * 
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The billing method of the resource group. `PrePaid` indicates subscription, and `PostPaid` indicates pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The remark for the general-purpose resource group. It can be up to 128 characters long and can contain letters, Chinese characters, digits, and underscores (_).
   * 
   * @example
   * Create a serverless resource group for common tasks
   */
  remark?: string;
  /**
   * @remarks
   * The specification of the resource group, in CUs. This parameter is required when `PaymentType` is set to `PrePaid`.
   * 
   * @example
   * 2
   */
  spec?: number;
  /**
   * @remarks
   * The ID of the VPC to be bound by default.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-m2et4f3oc8m****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to be bound by default.
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

