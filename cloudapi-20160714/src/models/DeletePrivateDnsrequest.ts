// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePrivateDNSRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to force delete the resolution.
   * 
   * *   true: force deletes the resolution if the resolution is associated with an instance.
   * *   false: does not force delete the resolution if the resolution is associated with an instance.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The internal domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * api.demo.com
   */
  intranetDomain?: string;
  securityToken?: string;
  /**
   * @remarks
   * The internal domain name resolution type. Valid values:
   * 
   * *   VPC: resolution for virtual private cloud (VPC) access authorizations. A resolution of this type can be bound only to traditional dedicated instances.
   * *   A: resolution that supports A records. A resolution of this type can be bound only to VPC integration dedicated instances.
   * 
   * This parameter is required.
   * 
   * @example
   * A
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      intranetDomain: 'IntranetDomain',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      intranetDomain: 'string',
      securityToken: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

