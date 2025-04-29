// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDatasetListResponseBodyDatasetInfoList } from "./DescribeDatasetListResponseBodyDatasetInfoList";


export class DescribeDatasetListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned dataset information. It is an array consisting of datasetinfo.
   */
  datasetInfoList?: DescribeDatasetListResponseBodyDatasetInfoList[];
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
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
   * The ID of the request.
   * 
   * @example
   * D403C6E6-21B3-5B78-82DA-E3B6********
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
      datasetInfoList: 'DatasetInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetInfoList: { 'type': 'array', 'itemType': DescribeDatasetListResponseBodyDatasetInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasetInfoList)) {
      $dara.Model.validateArray(this.datasetInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

