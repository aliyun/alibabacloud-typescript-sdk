// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeEndpointAclRequest extends $dara.Model {
  /**
   * @remarks
   * The ACL policy. Valid values:
   * 
   * - **allow**: CIDR whitelist. Currently, only allow is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * allow
   */
  aclStrategy?: string;
  /**
   * @remarks
   * The list of CIDR blocks. You must specify at least one CIDR block. Example: 192.168.1.0/24.
   * 
   * This parameter is required.
   */
  cidrList?: string[];
  /**
   * @remarks
   * The access point type. Valid values:
   * 
   * - **public**: Internet-facing access point. Currently, only public is supported.
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

