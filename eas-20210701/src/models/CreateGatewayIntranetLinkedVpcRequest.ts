// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayIntranetLinkedVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 19*****10
   */
  accountId?: string;
  /**
   * @remarks
   * Specifies whether to enable authoritative DNS parsing. The default value is false.
   * 
   * @example
   * true
   */
  enableAuthoritativeDns?: boolean;
  /**
   * @remarks
   * The ID of the virtual switch. For more information, see [DescribeVpcs](https://help.aliyun.com/document_detail/448581.html).
   * 
   * @example
   * vsw-8vbqn2at0kljjxxxx****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). For more information, see [DescribeVpcs](https://help.aliyun.com/document_detail/448581.html).
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

