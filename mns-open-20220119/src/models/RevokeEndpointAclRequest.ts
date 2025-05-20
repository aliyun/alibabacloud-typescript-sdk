// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeEndpointAclRequest extends $dara.Model {
  /**
   * @remarks
   * The ACL policy. Value:
   * 
   * *   **allow**: indicates that this operation is included in the Cidr whitelist. (Only the allow is supported.)
   * 
   * This parameter is required.
   * 
   * @example
   * allow
   */
  aclStrategy?: string;
  /**
   * @remarks
   * The list of CIDR block.
   * 
   * This parameter is required.
   */
  cidrList?: string[];
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **public**: indicates public endpoint. (Only the public is supported.)
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

