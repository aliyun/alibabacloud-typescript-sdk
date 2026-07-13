// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDomainsResponseBodyInstanceDomains extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2020-03-09T02:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the instance was created.
   * 
   * @example
   * 1583720154000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.top
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of domain names attached to the instance.
   */
  instanceDomains?: DescribeInstanceDomainsResponseBodyInstanceDomains[];
  /**
   * @remarks
   * The page number. The value starts from **1**. Default: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **100**. Default value: **20**.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 68386699-8B9E-4D5B-BC4C-75A28F6C2A00
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 2
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      instanceDomains: 'InstanceDomains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDomains: { 'type': 'array', 'itemType': DescribeInstanceDomainsResponseBodyInstanceDomains },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceDomains)) {
      $dara.Model.validateArray(this.instanceDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

