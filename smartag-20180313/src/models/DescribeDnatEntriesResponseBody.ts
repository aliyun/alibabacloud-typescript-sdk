// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnatEntriesResponseBodyDnatEntriesDnatEntry extends $dara.Model {
  dnatEntryId?: string;
  externalIp?: string;
  externalPort?: string;
  internalIp?: string;
  internalPort?: string;
  ipProtocol?: string;
  sagId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dnatEntryId: 'DnatEntryId',
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      sagId: 'SagId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnatEntryId: 'string',
      externalIp: 'string',
      externalPort: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      sagId: 'string',
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

export class DescribeDnatEntriesResponseBodyDnatEntries extends $dara.Model {
  dnatEntry?: DescribeDnatEntriesResponseBodyDnatEntriesDnatEntry[];
  static names(): { [key: string]: string } {
    return {
      dnatEntry: 'DnatEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnatEntry: { 'type': 'array', 'itemType': DescribeDnatEntriesResponseBodyDnatEntriesDnatEntry },
    };
  }

  validate() {
    if(Array.isArray(this.dnatEntry)) {
      $dara.Model.validateArray(this.dnatEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnatEntriesResponseBody extends $dara.Model {
  dnatEntries?: DescribeDnatEntriesResponseBodyDnatEntries;
  /**
   * @remarks
   * The page number of the returned page. Default value: **1**.
   * 
   * @example
   * 12
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **10**. Maximum value: **50**.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 635640CA-2335-4856-A9CB-1CB5C444DC5A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dnatEntries: 'DnatEntries',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnatEntries: DescribeDnatEntriesResponseBodyDnatEntries,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.dnatEntries && typeof (this.dnatEntries as any).validate === 'function') {
      (this.dnatEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

