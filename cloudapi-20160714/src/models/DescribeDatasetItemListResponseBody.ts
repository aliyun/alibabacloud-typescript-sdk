// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDatasetItemListResponseBodyDatasetItemInfoList } from "./DescribeDatasetItemListResponseBodyDatasetItemInfoList";


export class DescribeDatasetItemListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Dataset information.
   */
  datasetItemInfoList?: DescribeDatasetItemListResponseBodyDatasetItemInfoList[];
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
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C6E9C6E4-608B-5C0F-9783-E288********
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasetItemInfoList: 'DatasetItemInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetItemInfoList: { 'type': 'array', 'itemType': DescribeDatasetItemListResponseBodyDatasetItemInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasetItemInfoList)) {
      $dara.Model.validateArray(this.datasetItemInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

