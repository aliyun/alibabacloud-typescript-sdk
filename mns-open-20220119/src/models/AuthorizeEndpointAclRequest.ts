// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeEndpointAclRequest extends $dara.Model {
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
  cidrList?: string[];
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
      cidrList: 'CidrList',
      endpointType: 'EndpointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclStrategy: 'string',
      cidrList: { 'type': 'array', 'itemType': 'string' },
      endpointType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cidrList)) {
      $dara.Model.validateArray(this.cidrList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

