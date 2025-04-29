// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateDNSRequest extends $dara.Model {
  /**
   * @remarks
   * The internal domain name.
   * 
   * @example
   * api.demo.com
   */
  intranetDomain?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * The internal domain name resolution type. Valid values:
   * 
   * *   VPC: resolution for virtual private cloud (VPC) access authorizations. A resolution of this type can be bound only to traditional dedicated instances.
   * *   A: resolution that supports A records. A resolution of this type can be bound only to VPC integration dedicated instances.
   * 
   * @example
   * A
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      intranetDomain: 'IntranetDomain',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetDomain: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

