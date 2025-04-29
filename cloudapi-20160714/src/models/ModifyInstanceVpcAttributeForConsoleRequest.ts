// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceVpcAttributeForConsoleRequest extends $dara.Model {
  /**
   * @remarks
   * Whether delete instance client VPC.
   * - FALSE: set or modify instance client VPC
   * - TRUE: delete instance client VPC
   * 
   * @example
   * false
   */
  deleteVpcAccess?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * apigateway-bj-f28baxxxxb51
   */
  instanceId?: string;
  /**
   * @remarks
   * The token of the request.
   * 
   * @example
   * 505959c38776d9324945dbff709582
   */
  token?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-8vbnnd66xxxx2xb5oig4f
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 1121011712128923
   */
  vpcOwnerId?: number;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bj9e2i8w3wz7shkvnuj9a
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteVpcAccess: 'DeleteVpcAccess',
      instanceId: 'InstanceId',
      token: 'Token',
      vpcId: 'VpcId',
      vpcOwnerId: 'VpcOwnerId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteVpcAccess: 'boolean',
      instanceId: 'string',
      token: 'string',
      vpcId: 'string',
      vpcOwnerId: 'number',
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

