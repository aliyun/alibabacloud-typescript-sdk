// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceGroupRequestAliyunResourceTags extends $dara.Model {
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
   * The list of Alibaba Cloud tags.
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
   * The name of the general-purpose resource group. It must start with a letter and can contain letters, digits, and underscores (_). It can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * common_resource_group
   */
  name?: string;
  /**
   * @remarks
   * The billing duration.
   * 
   * @example
   * 1
   */
  paymentDuration?: number;
  /**
   * @remarks
   * The unit of the billing duration. Month indicates months, and Year indicates years.
   * 
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The billing method of the resource group. PrePaid indicates subscription, and PostPaid indicates pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The remark of the general-purpose resource group. It can contain letters, Chinese characters, digits, and underscores (_). It can be up to 128 characters in length.
   * 
   * @example
   * Create a serverless resource group for common tasks
   */
  remark?: string;
  /**
   * @remarks
   * The specifications of the resource group. Unit: CU. This parameter is required when the billing method of the resource group is PrePaid.
   * 
   * @example
   * 2
   */
  spec?: number;
  /**
   * @remarks
   * The ID of the default VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-m2et4f3oc8m****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the default vSwitch.
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

