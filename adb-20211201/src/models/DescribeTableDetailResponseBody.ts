// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableDetailResponseBodyItemsShard extends $dara.Model {
  /**
   * @remarks
   * The shard ID. Only the numeric part of the shard name is returned.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 9484858
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableDetailResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The queried shards.
   */
  shard?: DescribeTableDetailResponseBodyItemsShard[];
  static names(): { [key: string]: string } {
    return {
      shard: 'Shard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shard: { 'type': 'array', 'itemType': DescribeTableDetailResponseBodyItemsShard },
    };
  }

  validate() {
    if(Array.isArray(this.shard)) {
      $dara.Model.validateArray(this.shard);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why the access was denied.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1*****************7",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "2***************9",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The average number of rows in a shard.
   * 
   * @example
   * 160
   */
  avgSize?: string;
  /**
   * @remarks
   * The queried data distribution.
   */
  items?: DescribeTableDetailResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 9
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      avgSize: 'AvgSize',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      avgSize: 'string',
      items: DescribeTableDetailResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

