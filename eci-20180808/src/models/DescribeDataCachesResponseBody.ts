// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataCachesResponseBodyDataCaches } from "./DescribeDataCachesResponseBodyDataCaches";


export class DescribeDataCachesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the data caches.
   */
  dataCaches?: DescribeDataCachesResponseBodyDataCaches[];
  /**
   * @remarks
   * The query token. Set the value to the NextToken value that is returned in the previous call.
   * 
   * @example
   * d78f2dd8-5979-42fe-xaee-b16db43be5bc
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B8756BA0-6452-419C-9727-37A6209C85E0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataCaches: 'DataCaches',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCaches: { 'type': 'array', 'itemType': DescribeDataCachesResponseBodyDataCaches },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataCaches)) {
      $dara.Model.validateArray(this.dataCaches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

