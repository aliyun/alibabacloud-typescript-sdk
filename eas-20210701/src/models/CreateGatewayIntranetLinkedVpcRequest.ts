// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayIntranetLinkedVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the VPC belongs.
   * 
   * @example
   * 19*****10
   */
  accountId?: string;
  /**
   * @remarks
   * Specifies whether to enable authoritative DNS resolution. Default value: false.
   * 
   * @example
   * true
   */
  enableAuthoritativeDns?: boolean;
  /**
   * @remarks
   * The ID of the vSwitch. To obtain the vSwitch ID, refer to [DescribeVpcs](https://help.aliyun.com/document_detail/448581.html).
   * 
   * @example
   * vsw-8vbqn2at0kljjxxxx****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC. To obtain the VPC ID, refer to [DescribeVpcs](https://help.aliyun.com/document_detail/448581.html).
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      enableAuthoritativeDns: 'EnableAuthoritativeDns',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      enableAuthoritativeDns: 'boolean',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

