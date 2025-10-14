// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSetRecordsResponseBodyDataSetRecords extends $dara.Model {
  /**
   * @example
   * 1658974643000
   */
  createTime?: number;
  /**
   * @example
   * dataset-t8ha6p7k61rmniqw****
   */
  dataSetId?: string;
  /**
   * @example
   * lmftest
   */
  dataSetName?: string;
  /**
   * @example
   * 124566
   */
  dataSetRecordId?: string;
  dataSetRecordValues?: string;
  /**
   * @example
   * 1658974643000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSetId: 'DataSetId',
      dataSetName: 'DataSetName',
      dataSetRecordId: 'DataSetRecordId',
      dataSetRecordValues: 'DataSetRecordValues',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSetId: 'string',
      dataSetName: 'string',
      dataSetRecordId: 'string',
      dataSetRecordValues: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetRecordsResponseBody extends $dara.Model {
  dataSetRecords?: ListDataSetRecordsResponseBodyDataSetRecords[];
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetRecords: 'DataSetRecords',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetRecords: { 'type': 'array', 'itemType': ListDataSetRecordsResponseBodyDataSetRecords },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSetRecords)) {
      $dara.Model.validateArray(this.dataSetRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

