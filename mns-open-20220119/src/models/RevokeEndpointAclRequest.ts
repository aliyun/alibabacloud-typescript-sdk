// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeEndpointAclRequest extends $dara.Model {
  /**
   * @remarks
   * The ACL policy. Valid values:
   * 
   * - **allow**: The operation is for a Classless Inter-Domain Routing (CIDR) whitelist. Currently, only \\`allow\\` is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * allow
   */
  aclStrategy?: string;
  /**
   * @remarks
   * The list of network segments.
   * 
   * This parameter is required.
   */
  cidrList?: string[];
  /**
   * @remarks
   * The endpoint type. Valid values:
   * 
   * - **public**: The Internet endpoint. Currently, only \\`public\\` is supported.
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

