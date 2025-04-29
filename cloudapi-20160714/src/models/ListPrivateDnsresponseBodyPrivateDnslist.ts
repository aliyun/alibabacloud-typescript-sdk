// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPrivateDNSResponseBodyPrivateDNSListRecords } from "./ListPrivateDnsresponseBodyPrivateDnslistRecords";


export class ListPrivateDNSResponseBodyPrivateDNSList extends $dara.Model {
  /**
   * @remarks
   * The instances that are associated with the resolution.
   */
  bindInstances?: string[];
  /**
   * @remarks
   * The time when the resolution was created. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-10T08:17:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The internal domain name.
   * 
   * @example
   * api.demo.com
   */
  intranetDomain?: string;
  /**
   * @remarks
   * The resolution records.
   */
  records?: ListPrivateDNSResponseBodyPrivateDNSListRecords[];
  /**
   * @remarks
   * The internal domain name resolution type. Valid values:
   * 
   * *   VPC: resolution for VPC access authorizations. A resolution of this type can be bound only to traditional dedicated instances.
   * *   A: resolution that supports A records. A resolution of this type can be bound only to VPC integration dedicated instances.
   * 
   * @example
   * A
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindInstances: 'BindInstances',
      createdTime: 'CreatedTime',
      intranetDomain: 'IntranetDomain',
      records: 'Records',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindInstances: { 'type': 'array', 'itemType': 'string' },
      createdTime: 'string',
      intranetDomain: 'string',
      records: { 'type': 'array', 'itemType': ListPrivateDNSResponseBodyPrivateDNSListRecords },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindInstances)) {
      $dara.Model.validateArray(this.bindInstances);
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

