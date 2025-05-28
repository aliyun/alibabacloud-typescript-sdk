// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequestAclInfo extends $dara.Model {
  /**
   * @remarks
   * The authentication type of the instance.
   */
  aclTypes?: string[];
  /**
   * @remarks
   * Indicates whether the authentication-free in VPCs feature is enabled.
   * Indicates whether the authentication-free in VPCs feature is enabled.
   * Valid values:
   * - true
   * - false
   * 
   * @example
   * false
   */
  defaultVpcAuthFree?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclTypes: 'aclTypes',
      defaultVpcAuthFree: 'defaultVpcAuthFree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclTypes: { 'type': 'array', 'itemType': 'string' },
      defaultVpcAuthFree: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.aclTypes)) {
      $dara.Model.validateArray(this.aclTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

