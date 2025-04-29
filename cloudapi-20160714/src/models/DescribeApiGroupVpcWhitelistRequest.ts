// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiGroupVpcWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * f6c64214dc27400196eef954575d60d3
   */
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

