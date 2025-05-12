// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayIntranetLinkedVpcPeerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated VPC. To obtain the VPC ID, see [ListGatewayIntranetLinkedVpc](https://help.aliyun.com/document_detail/2621223.html).
   * 
   * *   If you specify a VPC ID, only VPC peers corresponding to the ID are queried.
   * *   Otherwise, all VPC peers are queried.
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

