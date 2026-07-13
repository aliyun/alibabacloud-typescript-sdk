// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeEndpointAclShrinkRequest extends $dara.Model {
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
  cidrListShrink?: string;
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

