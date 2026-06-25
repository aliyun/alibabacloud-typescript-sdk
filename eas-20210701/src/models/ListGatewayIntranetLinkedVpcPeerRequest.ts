// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayIntranetLinkedVpcPeerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the attached virtual private cloud (VPC). For more information, see [ListGatewayIntranetLinkedVpc](https://help.aliyun.com/document_detail/2621223.html).
   * 
   * - Specify a VPC ID to query only the VPC peers for that VPC.
   * 
   * - If you do not specify a VPC ID, all VPC peers are returned.
   * 
   * @example
   * vpc-2zetuli9ws0qgjd******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

