// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOssObjectsResponseBodyItems } from "./DescribeOssObjectsResponseBodyItems";


export class DescribeOssObjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The OSS objects.
   */
  items?: DescribeOssObjectsResponseBodyItems[];
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * -1
   */
  marker?: string;
  /**
   * @remarks
   * The ID value from which the next page of results starts.
   * 
   * >  This parameter is returned only when the `Truncated` parameter is set to `true`.
   * 
   * @example
   * 1754786235714378752
   */
  nextMarker?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
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
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  truncated?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      marker: 'Marker',
      nextMarker: 'NextMarker',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      truncated: 'Truncated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeOssObjectsResponseBodyItems },
      marker: 'string',
      nextMarker: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      truncated: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

