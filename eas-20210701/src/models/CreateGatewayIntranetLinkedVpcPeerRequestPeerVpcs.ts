// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayIntranetLinkedVpcPeerRequestPeerVpcs extends $dara.Model {
  /**
   * @remarks
   * The region where the VPC peer resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The ID of the VPC peer. To obtain the VPC ID, see [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html).
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
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

