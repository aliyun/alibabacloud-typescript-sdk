// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrivateDNSShrinkRequest extends $dara.Model {
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
  /**
   * @remarks
   * The resolution records. This parameter is valid only when Type is set to A.
   */
  recordsShrink?: string;
  securityToken?: string;
  /**
   * @remarks
   * The internal domain name resolution type. Valid values:
   * 
   * *   VPC: resolution for VPC access authorizations. A resolution of this type can be bound only to traditional dedicated instances.
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
      intranetDomain: 'IntranetDomain',
      recordsShrink: 'Records',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetDomain: 'string',
      recordsShrink: 'string',
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

