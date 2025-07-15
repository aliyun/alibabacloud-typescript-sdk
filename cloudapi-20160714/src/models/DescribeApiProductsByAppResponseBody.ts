// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiProductsByAppResponseBodyApiProductInfoListApiProductInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the API product.
   * 
   * @example
   * 117b7a64a8b3f064eaa4a47ac62aac5e
   */
  apiProductId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProductId: 'ApiProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProductId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiProductsByAppResponseBodyApiProductInfoList extends $dara.Model {
  apiProductInfo?: DescribeApiProductsByAppResponseBodyApiProductInfoListApiProductInfo[];
  static names(): { [key: string]: string } {
    return {
      apiProductInfo: 'ApiProductInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProductInfo: { 'type': 'array', 'itemType': DescribeApiProductsByAppResponseBodyApiProductInfoListApiProductInfo },
    };
  }

  validate() {
    if(Array.isArray(this.apiProductInfo)) {
      $dara.Model.validateArray(this.apiProductInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiProductsByAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about API products.
   */
  apiProductInfoList?: DescribeApiProductsByAppResponseBodyApiProductInfoList;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B805201-AF4C-5788-AC9E-C3EEC83DC82A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiProductInfoList: 'ApiProductInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProductInfoList: DescribeApiProductsByAppResponseBodyApiProductInfoList,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiProductInfoList && typeof (this.apiProductInfoList as any).validate === 'function') {
      (this.apiProductInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

