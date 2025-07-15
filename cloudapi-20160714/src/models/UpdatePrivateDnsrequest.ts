// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateDNSRequestRecords extends $dara.Model {
  /**
   * @remarks
   * The resolution record.
   * 
   * @example
   * 192.168.0.2
   */
  record?: string;
  /**
   * @remarks
   * The weight of the record.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateDNSRequest extends $dara.Model {
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
   * 
   * This parameter is required.
   */
  records?: UpdatePrivateDNSRequestRecords[];
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
      intranetDomain: 'IntranetDomain',
      records: 'Records',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetDomain: 'string',
      records: { 'type': 'array', 'itemType': UpdatePrivateDNSRequestRecords },
      securityToken: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

