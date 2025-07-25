// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransferDomainsResponseBodyDomainTransfersDomainTransfer extends $dara.Model {
  /**
   * @remarks
   * The time when the domain name was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2019-10-30T07:16Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the domain name was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1572419764000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test.com
   */
  domainName?: string;
  /**
   * @remarks
   * The user ID from which the domain name was transferred.
   * 
   * @example
   * 2222
   */
  fromUserId?: number;
  /**
   * @remarks
   * The ID of the domain name that was transferred.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The user ID to which the domain name was transferred.
   * 
   * @example
   * 111111
   */
  targetUserId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      domainName: 'DomainName',
      fromUserId: 'FromUserId',
      id: 'Id',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      domainName: 'string',
      fromUserId: 'number',
      id: 'number',
      targetUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferDomainsResponseBodyDomainTransfers extends $dara.Model {
  domainTransfer?: DescribeTransferDomainsResponseBodyDomainTransfersDomainTransfer[];
  static names(): { [key: string]: string } {
    return {
      domainTransfer: 'DomainTransfer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTransfer: { 'type': 'array', 'itemType': DescribeTransferDomainsResponseBodyDomainTransfersDomainTransfer },
    };
  }

  validate() {
    if(Array.isArray(this.domainTransfer)) {
      $dara.Model.validateArray(this.domainTransfer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names that were transferred between accounts.
   */
  domainTransfers?: DescribeTransferDomainsResponseBodyDomainTransfers;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainTransfers: 'DomainTransfers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTransfers: DescribeTransferDomainsResponseBodyDomainTransfers,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.domainTransfers && typeof (this.domainTransfers as any).validate === 'function') {
      (this.domainTransfers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

