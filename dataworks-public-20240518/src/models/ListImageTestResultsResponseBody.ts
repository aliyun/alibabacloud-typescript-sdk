// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageTestResultsResponseBodyPagingInfoTestResultList extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * img_123456
   */
  imageId?: string;
  /**
   * @remarks
   * The test result message.
   * 
   * @example
   * test finished
   */
  message?: string;
  /**
   * @remarks
   * The operation time, represented as a 64-bit timestamp.
   * 
   * @example
   * 1727055811000
   */
  operateTime?: number;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 11111111-1111-1111-1111-111111111111
   */
  processId?: string;
  /**
   * @remarks
   * The publish stage of the image.
   * 
   * @example
   * UNPUBLISHED
   */
  publishStage?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 123456
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The status of the test process.
   * 
   * @example
   * completed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      message: 'Message',
      operateTime: 'OperateTime',
      processId: 'ProcessId',
      publishStage: 'PublishStage',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      message: 'string',
      operateTime: 'number',
      processId: 'string',
      publishStage: 'string',
      resourceGroupId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageTestResultsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
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
   * The list of image test results.
   */
  testResultList?: ListImageTestResultsResponseBodyPagingInfoTestResultList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      testResultList: 'TestResultList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      testResultList: { 'type': 'array', 'itemType': ListImageTestResultsResponseBodyPagingInfoTestResultList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.testResultList)) {
      $dara.Model.validateArray(this.testResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageTestResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListImageTestResultsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListImageTestResultsResponseBodyPagingInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

