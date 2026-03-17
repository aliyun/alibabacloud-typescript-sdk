// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnatEntriesResponseBodySnatEntriesSnatEntry extends $dara.Model {
  cidrBlock?: string;
  createTime?: number;
  instanceId?: string;
  snatIp?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      snatIp: 'SnatIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      createTime: 'number',
      instanceId: 'string',
      snatIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatEntriesResponseBodySnatEntries extends $dara.Model {
  snatEntry?: DescribeSnatEntriesResponseBodySnatEntriesSnatEntry[];
  static names(): { [key: string]: string } {
    return {
      snatEntry: 'SnatEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatEntry: { 'type': 'array', 'itemType': DescribeSnatEntriesResponseBodySnatEntriesSnatEntry },
    };
  }

  validate() {
    if(Array.isArray(this.snatEntry)) {
      $dara.Model.validateArray(this.snatEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 12
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 674BC3B2-5828-41D5-830E-148EE6CF86C2
   */
  requestId?: string;
  snatEntries?: DescribeSnatEntriesResponseBodySnatEntries;
  /**
   * @remarks
   * The total number of SNAT entries.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snatEntries: 'SnatEntries',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snatEntries: DescribeSnatEntriesResponseBodySnatEntries,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.snatEntries && typeof (this.snatEntries as any).validate === 'function') {
      (this.snatEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

