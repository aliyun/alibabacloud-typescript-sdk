// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The short-format namespace ID. You do not need to include the region ID. We recommend that you use this parameter.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The long-format namespace ID. If you set this parameter, it takes precedence over NameSpaceShortId. This parameter is for backward compatibility. Use the short-format namespace ID to simplify the request.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The ID of the VPC. This VPC replaces the original VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-2ze0i263cnn311nvj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameSpaceShortId: 'string',
      namespaceId: 'string',
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

