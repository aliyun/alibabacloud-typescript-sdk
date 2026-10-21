// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSetRecordsResponseBodyDataSetRecords extends $dara.Model {
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1658974643000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * @example
   * dataset-t8ha6p7k61rmniqw****
   */
  dataSetId?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * lmftest
   */
  dataSetName?: string;
  /**
   * @remarks
   * The ID of the dataset record.
   * 
   * @example
   * 124566
   */
  dataSetRecordId?: string;
  /**
   * @remarks
   * The values of the dataset record.
   */
  dataSetRecordValues?: string;
  /**
   * @remarks
   * The update time. The value is a UNIX timestamp in milliseconds.
   * 
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
  /**
   * @remarks
   * The list of dataset records.
   */
  dataSetRecords?: ListDataSetRecordsResponseBodyDataSetRecords[];
  /**
   * @remarks
   * The maximum number of results to return per query when you use the NextToken parameter. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
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
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
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

