// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateDNSResponseBodyPrivateDNSListRecords extends $dara.Model {
  /**
   * @remarks
   * The resolution record.
   * 
   * @example
   * 192.168.0.1
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

export class ListPrivateDNSResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The internal domain name resolutions.
   */
  privateDNSList?: ListPrivateDNSResponseBodyPrivateDNSList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ016
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateDNSList: 'PrivateDNSList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      privateDNSList: { 'type': 'array', 'itemType': ListPrivateDNSResponseBodyPrivateDNSList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.privateDNSList)) {
      $dara.Model.validateArray(this.privateDNSList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

