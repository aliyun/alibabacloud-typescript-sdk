// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeEndpointAclShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The access control list (ACL) policy. Valid value:
   * 
   * - **allow**: A CIDR whitelist. Only allow is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * allow
   */
  aclStrategy?: string;
  /**
   * @remarks
   * A list of CIDR blocks.
   * 
   * This parameter is required.
   */
  cidrListShrink?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid value:
   * 
   * - **public**: An internet endpoint. Only public is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * public
   */
  endpointType?: string;
  static names(): { [key: string]: string } {
    return {
      aclStrategy: 'AclStrategy',
      cidrListShrink: 'CidrList',
      endpointType: 'EndpointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclStrategy: 'string',
      cidrListShrink: 'string',
      endpointType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

