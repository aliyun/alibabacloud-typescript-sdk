// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApiGroupVpcWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * 9b80408147724ddab4c4e2703c6ca019
   */
  groupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the VPC instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp11w979o2s9rcr962w25
   */
  vpcIds?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      vpcIds: 'VpcIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      securityToken: 'string',
      vpcIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

